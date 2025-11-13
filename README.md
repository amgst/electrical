
# Website Design Inspiration

This is a code bundle for Website Design Inspiration. The original project is available at https://www.figma.com/design/BXnvJTal68JpXyh5eqSgyM/Website-Design-Inspiration.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code:**
   - Push your code to the `main` branch (or `master` if that's your default branch)
   - The GitHub Actions workflow will automatically build and deploy your site

3. **Configure base path (if needed):**
   - If your repository name is different from `electrical`, you may need to update the base path in `vite.config.ts`
   - For a custom domain or root deployment, set `base: '/'` in `vite.config.ts`

### Manual Build

To build locally:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Build Locally

To preview the production build:
```bash
npm run preview
```
  