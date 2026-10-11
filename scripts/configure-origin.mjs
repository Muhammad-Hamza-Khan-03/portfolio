import fs from 'node:fs';
import path from 'node:path';
const original = 'https://hamza-khan-portfolio.hamzakhan102003.chatgpt.site';
const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
if (!host) { console.log('No deployment origin provided; retaining existing metadata.'); process.exit(0); }
const origin = new URL(host.includes('://') ? host : `https://${host}`).origin;
function visit(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) visit(file);
    else if (/\.(html|xml|txt)$/.test(entry.name)) {
      const text = fs.readFileSync(file, 'utf8');
      fs.writeFileSync(file, text.replaceAll(original, origin));
    }
  }
}
visit('dist');
console.log(`Configured canonical URLs, social metadata, and sitemap for ${origin}`);
