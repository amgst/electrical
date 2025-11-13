
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

### Troubleshooting

If you see only the raw HTML (empty page with just the `<div id="root"></div>`), check the following:

1. **Verify GitHub Pages is using GitHub Actions:**
   - Go to Settings → Pages in your repository
   - Under "Source", it should say "GitHub Actions" (not "Deploy from a branch")
   - If it's set to a branch, change it to "GitHub Actions"

2. **Check if the workflow has run:**
   - Go to the "Actions" tab in your repository
   - Look for the "Deploy to GitHub Pages" workflow
   - Make sure it has run and completed successfully (green checkmark)
   - If it failed, click on it to see the error details

3. **Verify the workflow file exists:**
   - Make sure `.github/workflows/deploy.yml` exists in your repository
   - If not, commit and push the file

4. **Check the repository name:**
   - The base path is automatically set to your repository name
   - If your repo is named something other than `electrical`, the paths should still work automatically
   - Your site URL will be: `https://yourusername.github.io/repository-name/`

5. **Wait for deployment:**
   - After pushing, it may take 1-2 minutes for the site to update
   - Check the Actions tab to see when deployment completes

6. **Clear browser cache:**
   - Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
   - Or try in an incognito/private window
  