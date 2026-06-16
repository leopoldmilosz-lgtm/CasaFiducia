# CasaFiducia — Final Production Website

Final static production package for **casafiducia.ch**.

## Included

- `index.html` — final landing page
- `styles.css` — full responsive luxury styling
- `script.js` — mobile menu, reveal animations and subtle parallax
- `thank-you.html` — form redirect thank-you page
- `privacy.html` — starter privacy policy template
- `impressum.html` — starter legal/impressum template
- `404.html` — simple not-found page
- `robots.txt`
- `sitemap.xml`
- `CNAME` — GitHub Pages custom domain configuration
- `assets/` — images and favicon

## Required before publishing

### 1. Replace Formspree placeholder

In `index.html`, replace:

```html
https://formspree.io/f/YOUR_FORMSPREE_ID
```

with your real Formspree form endpoint.

### 2. Replace email

Replace:

```html
hello@casafiducia.ch
```

with your final email address if different.

### 3. Complete legal details

Update:
- `privacy.html`
- `impressum.html`

with final business details, address, UID/registration number and data-processing information.

### 4. GitHub Pages

1. Upload all files to your GitHub repository.
2. Go to `Settings` → `Pages`.
3. Select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. The `CNAME` file is already set to:

```txt
casafiducia.ch
```

### 5. DNS

Point your domain DNS to GitHub Pages according to your registrar’s current instructions.

Usually this means:
- apex domain `casafiducia.ch` → GitHub Pages A records
- `www` → CNAME to your GitHub Pages address

Check GitHub’s current Pages documentation before final DNS setup.

## Notes

This production version is intentionally positioned as:

**Private Property Care in Ticino**

This sounds premium and discreet, while avoiding sounding too theatrical or like generic “luxury concierge”.
