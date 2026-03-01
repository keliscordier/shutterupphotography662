# Photography Business Website (Customizable + GitHub Pages)

This project is a fully customizable static website for your photography business.

## Files

- `index.html` -> page structure
- `styles.css` -> design and layout
- `site.config.js` -> business content and theme settings
- `script.js` -> renders the site from your config

## Customize Your Website

Edit `site.config.js`:

- `business` -> name, tagline, contact info, booking link
- `about` -> your bio and about photo
- `services` -> cards for your offerings
- `portfolio.items` -> gallery images and captions
- `pricing` -> package cards and rates
- `testimonials` -> client reviews
- `social` -> your social media links
- `theme` -> colors and hero background

You can replace any image URLs with your own links, or use local images like:

- `./photos/wedding-01.jpg`
- `./photos/portrait-01.jpg`

## Publish on GitHub Pages

1. Create a new GitHub repo (example: `photography-site`)
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial photography website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/photography-site.git
git push -u origin main
```

3. On GitHub:
- Go to `Settings` -> `Pages`
- Under `Build and deployment`, choose `Deploy from a branch`
- Branch: `main`, Folder: `/ (root)`
- Save

4. Your site will be live at:
- `https://YOUR-USERNAME.github.io/photography-site/`

## Optional: Custom Domain

In GitHub Pages settings, add your custom domain (for example `www.yourstudio.com`) and update DNS at your domain provider.
