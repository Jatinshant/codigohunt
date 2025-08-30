import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Codigohunt Solutions - Premier IT Consultancy & Services",
  description = "Premier IT consultancy and services firm delivering high-performance, scalable, and secure digital solutions globally. Expert DevOps, Cloud, and Development Solutions.",
  keywords = "IT Consultancy, DevOps, Cloud Services, Web Development, Cybersecurity, ERP Solutions, Digital Marketing, App Development, Custom Software, IT Support",
  image = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  url = "https://silly-otter-2e6a50.netlify.app",
  type = "website",
  author = "Codigohunt Solutions",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteTitle = title.includes('Codigohunt') ? title : `${title} | Codigohunt Solutions`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Codigohunt Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@codigohunt" />
      <meta name="twitter:creator" content="@codigohunt" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          <meta property="article:author" content={author} />
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link rel="apple-touch-icon" href="/vite.svg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#FF00FF" />
      <meta name="msapplication-TileColor" content="#FF00FF" />
      <meta name="application-name" content="Codigohunt Solutions" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Codigohunt Solutions",
          "description": description,
          "url": "https://silly-otter-2e6a50.netlify.app",
          "logo": "https://silly-otter-2e6a50.netlify.app/vite.svg",
          "telephone": "+91-9461232921",
          "email": "official@codigohunt.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "CBC 13 First Floor, Vikramaditya Marg",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "India"
          },
          "founder": [
            {
              "@type": "Person",
              "name": "Ankit Sharma",
              "jobTitle": "DevOps Engineer & Development Expert"
            },
            {
              "@type": "Person", 
              "name": "Akshay Gupta",
              "jobTitle": "Cloud, DevOps & DevSecOps Expert"
            },
            {
              "@type": "Person",
              "name": "Vaibhav Patidar", 
              "jobTitle": "DevOps and IT Services & Support Expert"
            }
          ],
          "sameAs": [
            "https://wa.me/919461232921"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9461232921",
            "contactType": "customer service",
            "availableLanguage": "English"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;