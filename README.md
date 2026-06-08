# Chris George Fitness

React + Vite single-page site.

## Run locally
1. Install Node.js (18+).
2. In this folder: `npm install`
3. `npm run dev` and open the printed localhost URL.

## Build for production
`npm run build`  ->  output goes to the `dist/` folder.

## Deploy (Vercel — easiest)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com -> Add New -> Project -> import the repo.
3. Vercel auto-detects Vite. Click Deploy. You get a live *.vercel.app URL.

(Netlify / Cloudflare Pages work the same way, or drag-and-drop the `dist`
folder into Netlify.)

## Connect your domain
1. In the host dashboard (Vercel -> Project -> Settings -> Domains), add your domain.
2. It shows you DNS records (usually an A record for the root and a CNAME for www).
3. At your domain registrar's DNS settings, add exactly those records.
   (Or point your domain's nameservers to the host if it offers that.)
4. Save and wait for DNS to propagate. HTTPS is issued automatically.

## Contact form (Formspree)
The contact form posts to Formspree. To turn it on:
1. Create a free form at https://formspree.io and copy its form ID
   (the URL looks like https://formspree.io/f/abcwxyz -> the ID is "abcwxyz").
2. Open `src/App.jsx`, find `FORMSPREE_ENDPOINT` near the top, and replace
   `YOUR_FORM_ID` with your ID.
3. Submissions (name, email, interest, message) go to the email on your
   Formspree account.

## Notes
- The logo is embedded in the code (no image files needed).
- The email link points to chrisgtrainer@outlook.com.
- Instagram / TikTok links are live in the footer and contact page.
