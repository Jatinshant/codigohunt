#!/bin/bash

# ====================================
# React/Vite Application Setup Script
# For Fresh Ubuntu AWS Server
# ====================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if running as root or with sudo
if [[ $EUID -eq 0 ]]; then
   print_warning "This script is running as root"
else
   print_error "This script must be run as root or with sudo"
   exit 1
fi

print_status "Starting server setup for React/Vite application..."

# ====================================
# 1. Update System
# ====================================
print_status "Updating system packages..."
apt update && apt upgrade -y

# ====================================
# 2. Install Essential Tools
# ====================================
print_status "Installing essential tools..."
apt install -y \
    curl \
    wget \
    git \
    build-essential \
    software-properties-common \
    apt-transport-https \
    ca-certificates \
    gnupg \
    lsb-release \
    ufw \
    htop \
    nano \
    vim

# ====================================
# 3. Install Node.js (v20 LTS)
# ====================================
print_status "Installing Node.js v20 LTS..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify installation
node_version=$(node -v)
npm_version=$(npm -v)
print_status "Node.js installed: $node_version"
print_status "npm installed: $npm_version"

# ====================================
# 4. Install PM2 (Process Manager)
# ====================================
print_status "Installing PM2 globally..."
npm install -g pm2

# ====================================
# 5. Install Nginx
# ====================================
print_status "Installing Nginx..."
apt install -y nginx

# ====================================
# 6. Configure Firewall
# ====================================
print_status "Configuring UFW firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# ====================================
# 7. Create Application Directory
# ====================================
APP_DIR="/var/www/codigohunt"
print_status "Creating application directory at $APP_DIR..."
mkdir -p $APP_DIR
chown -R $SUDO_USER:$SUDO_USER $APP_DIR

# ====================================
# 8. Create Nginx Configuration
# ====================================
print_status "Creating Nginx configuration..."

cat > /etc/nginx/sites-available/codigohunt << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    # Replace with your domain name or server IP
    server_name your-domain.com www.your-domain.com;
    
    # Redirect to HTTPS (uncomment after SSL setup)
    # return 301 https://$server_name$request_uri;
    
    root /var/www/codigohunt/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript application/json;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}

# HTTPS Configuration (uncomment after SSL setup)
# server {
#     listen 443 ssl http2;
#     listen [::]:443 ssl http2;
#     
#     server_name your-domain.com www.your-domain.com;
#     
#     ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
#     
#     # SSL configuration
#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_ciphers HIGH:!aNULL:!MD5;
#     ssl_prefer_server_ciphers on;
#     
#     root /var/www/codigohunt/dist;
#     index index.html;
#     
#     # Rest of configuration same as above...
# }
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/codigohunt /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx

# ====================================
# 9. Create Deployment Script
# ====================================
print_status "Creating deployment script..."

cat > /home/$SUDO_USER/deploy.sh << 'EOF'
#!/bin/bash

# Deployment script for updating the application

APP_DIR="/var/www/codigohunt"
REPO_URL="YOUR_GIT_REPO_URL"  # Replace with your repository URL

cd $APP_DIR

# Pull latest code
echo "Pulling latest code..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building application..."
npm run build

# Restart Nginx (if needed)
echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Deployment completed successfully!"
EOF

chmod +x /home/$SUDO_USER/deploy.sh
chown $SUDO_USER:$SUDO_USER /home/$SUDO_USER/deploy.sh

# ====================================
# 10. Create PM2 Ecosystem File (for API servers)
# ====================================
print_status "Creating PM2 ecosystem file..."

cat > /home/$SUDO_USER/ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'codigohunt-api',
      script: './server.js',  // Update with your backend server file
      cwd: '/var/www/codigohunt',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/var/log/pm2/codigohunt-error.log',
      out_file: '/var/log/pm2/codigohunt-out.log',
      log_file: '/var/log/pm2/codigohunt-combined.log',
      time: true
    }
  ]
};
EOF

chown $SUDO_USER:$SUDO_USER /home/$SUDO_USER/ecosystem.config.js

# ====================================
# 11. Create SSL Setup Script
# ====================================
print_status "Creating SSL setup script..."

cat > /home/$SUDO_USER/setup-ssl.sh << 'EOF'
#!/bin/bash

# SSL Certificate Setup Script using Let's Encrypt

DOMAIN="your-domain.com"  # Replace with your domain
EMAIL="your-email@example.com"  # Replace with your email

# Install Certbot
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL

# Setup auto-renewal
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

echo "SSL setup completed!"
EOF

chmod +x /home/$SUDO_USER/setup-ssl.sh
chown $SUDO_USER:$SUDO_USER /home/$SUDO_USER/setup-ssl.sh

# ====================================
# 12. Create Application Setup Instructions
# ====================================
print_status "Creating setup instructions..."

cat > /home/$SUDO_USER/SETUP_INSTRUCTIONS.md << 'EOF'
# CodigoHunt Solutions - Server Setup Instructions

## Initial Setup Complete! ✅

The server has been configured with:
- Node.js v20 LTS
- npm package manager
- PM2 process manager
- Nginx web server
- UFW firewall
- Basic security configurations

## Next Steps:

### 1. Clone Your Repository
```bash
cd /var/www/codigohunt
git clone YOUR_REPO_URL .
```

### 2. Install Dependencies
```bash
cd /var/www/codigohunt
npm install
```

### 3. Build the Application
```bash
npm run build
```

### 4. Configure Nginx
Edit `/etc/nginx/sites-available/codigohunt` and replace:
- `your-domain.com` with your actual domain or server IP

Then restart Nginx:
```bash
sudo systemctl restart nginx
```

### 5. Setup SSL (Optional but Recommended)
If you have a domain name:
```bash
# Edit setup-ssl.sh with your domain and email
nano ~/setup-ssl.sh
# Run the SSL setup
./setup-ssl.sh
```

### 6. For Backend API (if applicable)
If you have a Node.js backend:
```bash
# Edit ecosystem.config.js with your server details
nano ~/ecosystem.config.js
# Start with PM2
pm2 start ~/ecosystem.config.js
pm2 save
pm2 startup
```

## Useful Commands:

### Nginx
- Check status: `sudo systemctl status nginx`
- Restart: `sudo systemctl restart nginx`
- Check logs: `sudo tail -f /var/log/nginx/error.log`

### PM2 (for Node.js apps)
- List processes: `pm2 list`
- Monitor: `pm2 monit`
- Logs: `pm2 logs`
- Restart app: `pm2 restart app-name`

### Deployment
- Use the deploy script: `./deploy.sh`

### Firewall
- Check status: `sudo ufw status`
- Allow port: `sudo ufw allow PORT`

## Security Recommendations:

1. **Change SSH port** (optional):
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Change Port 22 to another port
   sudo systemctl restart sshd
   ```

2. **Setup fail2ban**:
   ```bash
   sudo apt install fail2ban
   sudo systemctl enable fail2ban
   ```

3. **Regular updates**:
   ```bash
   sudo apt update && sudo apt upgrade
   ```

4. **Monitor logs**:
   ```bash
   sudo tail -f /var/log/auth.log
   sudo tail -f /var/log/nginx/access.log
   ```

## Troubleshooting:

- If site not loading: Check Nginx error logs
- If 502 error: Check if backend is running (PM2)
- If permission issues: Check file ownership
- If SSL issues: Check Certbot logs

## Support
For issues, check:
- Nginx logs: `/var/log/nginx/`
- PM2 logs: `pm2 logs`
- System logs: `journalctl -xe`
EOF

chown $SUDO_USER:$SUDO_USER /home/$SUDO_USER/SETUP_INSTRUCTIONS.md

# ====================================
# 13. Create Monitoring Script
# ====================================
print_status "Creating monitoring script..."

cat > /home/$SUDO_USER/monitor.sh << 'EOF'
#!/bin/bash

echo "=== Server Health Check ==="
echo ""
echo "1. System Resources:"
echo "-------------------"
free -h
echo ""
df -h
echo ""
echo "2. Service Status:"
echo "-----------------"
systemctl status nginx --no-pager | head -n 3
echo ""
if command -v pm2 &> /dev/null; then
    pm2 list
fi
echo ""
echo "3. Recent Nginx Access:"
echo "----------------------"
tail -n 5 /var/log/nginx/access.log
echo ""
echo "4. Network Connections:"
echo "----------------------"
ss -tulpn | grep LISTEN
EOF

chmod +x /home/$SUDO_USER/monitor.sh
chown $SUDO_USER:$SUDO_USER /home/$SUDO_USER/monitor.sh

# ====================================
# 14. Final Setup
# ====================================
print_status "Creating log directories..."
mkdir -p /var/log/pm2
chown -R $SUDO_USER:$SUDO_USER /var/log/pm2

print_status "Setting up PM2 startup script..."
sudo -u $SUDO_USER pm2 startup systemd -u $SUDO_USER --hp /home/$SUDO_USER

# ====================================
# Summary
# ====================================
echo ""
echo "========================================="
echo -e "${GREEN}✅ Server setup completed successfully!${NC}"
echo "========================================="
echo ""
echo "📁 Application directory: /var/www/codigohunt"
echo "📄 Nginx config: /etc/nginx/sites-available/codigohunt"
echo "📋 Instructions: ~/SETUP_INSTRUCTIONS.md"
echo ""
echo "🔧 Next steps:"
echo "1. Clone your repository to /var/www/codigohunt"
echo "2. Run: npm install && npm run build"
echo "3. Update Nginx config with your domain/IP"
echo "4. Restart Nginx: sudo systemctl restart nginx"
echo ""
echo "📚 For detailed instructions, run:"
echo "   cat ~/SETUP_INSTRUCTIONS.md"
echo ""
print_warning "Remember to:"
print_warning "- Update server_name in Nginx config"
print_warning "- Setup SSL certificate for HTTPS"
print_warning "- Configure your domain DNS to point to this server"
echo "========================================="