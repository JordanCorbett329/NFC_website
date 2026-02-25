# Noosa Family Chiropractic — Static Site for Cloudflare Pages

This is a lightweight static website (HTML/CSS/JS) designed to be deployed on **Cloudflare Pages**.

## Quick deploy (no disruption to your current site)
1. Create a new Cloudflare Pages project connected to a GitHub repository.
2. Upload these files to the repo (root).
3. Deploy — Cloudflare will give you a preview URL like:
   `https://<project>.pages.dev`
4. When you're happy, connect a **subdomain first** (e.g. `new.yourdomain.com.au`) so nothing changes on your current website.
5. Only after testing, switch the main domain to Cloudflare Pages.

## Notes
- This starter currently hotlinks a few images from your existing Wix site so it looks similar during transition.
- Before canceling Wix/Six hosting, download those images and place them in `/assets/`, then update the `<img src="...">` URLs to local paths like `assets/hero-1.jpg`.

## No build settings needed
Cloudflare Pages settings:
- Framework preset: None
- Build command: (leave empty)
- Build output directory: (leave empty) or `/`
