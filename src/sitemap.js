const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const hostname = 'https://girlupnewengland.com/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/board', changefreq: 'monthly', priority: 0.8 },
  { url: '/events', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'monthly', priority: 0.8 },
];

// Create a sitemap object
const sitemap = new SitemapStream({ hostname: hostname });

// Write sitemap to public directory
const writeStream = createWriteStream(resolve(__dirname, '../public', 'sitemap.xml'));
sitemap.pipe(writeStream);

urls.forEach(url => sitemap.write(url));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('Sitemap has been generated and written to public/sitemap.xml');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});