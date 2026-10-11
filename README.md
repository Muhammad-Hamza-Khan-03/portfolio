# Muhammad Hamza Khan | Portfolio

Static portfolio with professional, AI engineering, software, and data science projects, individual case studies, and generated concept previews.

## Deploy to Vercel

1. Import this repository at https://vercel.com/new using the connected GitHub account.
2. Keep the root directory as `./` and framework preset as **Other**.
3. `vercel.json` supplies the build command and `dist` output directory. No dependencies or secrets are needed.
4. Click **Deploy**, then open the assigned production URL.

The build updates canonical URLs, social metadata, robots.txt, and the sitemap to the Vercel production domain. For a custom domain, set `SITE_URL=https://your-domain.example` in Vercel and redeploy.

## Local preview

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000.

## Editing

- Homepage: `dist/index.html`
- Shared styles: `dist/styles.css`
- Case studies: `dist/projects/<project>/index.html`
- Images: `dist/assets/`

Push changes to `main` to trigger Vercel deployments after the GitHub integration is connected.

Generated project visuals are labelled as concept previews, not actual product screenshots. Professional case studies use generic titles to preserve client anonymity.
