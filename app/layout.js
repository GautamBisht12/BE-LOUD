import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BeLoud - Marketing Agency | Digital Marketing, PR & Brand Solutions',
  description: 'BeLoud is a full-service marketing agency specializing in digital marketing, PR, brand development, social media, and AI solutions. Trusted by industry leaders like Dhruv Rathee, Discovery, and P&G.',
  keywords: 'marketing agency, digital marketing, PR agency, brand development, social media marketing, website development, AI solutions, BTL marketing',
  author: 'BeLoud Marketing Agency',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'BeLoud - Marketing Agency | Digital Marketing & Brand Solutions',
    description: 'Full-service marketing agency trusted by industry leaders. Expert digital marketing, PR, branding, and AI solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeLoud - Marketing Agency',
    description: 'Full-service marketing agency trusted by industry leaders.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://beloud.com" />
        <meta name="theme-color" content="#3B82F6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BeLoud",
              "description": "Full-service marketing agency specializing in digital marketing, PR, and brand solutions",
              "url": "https://beloud.com",
              "logo": "https://beloud.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98765-43210",
                "contactType": "customer service",
                "email": "hello@beloud.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business District",
                "addressLocality": "Mumbai",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://linkedin.com/company/beloud",
                "https://twitter.com/beloud",
                "https://instagram.com/beloud"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}