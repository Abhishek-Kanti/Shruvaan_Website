# 🚀 GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js and npm/yarn installed

## Step-by-Step Deployment

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name your repository (e.g., `research-paper-website`)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Update Configuration
1. Open `/app/frontend/package.json`
2. Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
3. Replace `YOUR_REPOSITORY_NAME` with your repository name
   ```json
   "homepage": "https://yourusername.github.io/research-paper-website",
   ```

### 3. Initialize Git and Deploy
Copy all files from `/app/frontend/` to your local project folder, then run:

```bash
# Navigate to your project folder
cd your-project-folder

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Research paper website"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### 4. Configure GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Click **Save**

### 5. Access Your Website
Your website will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

It may take a few minutes for the site to become available.

## Updating Your Website

To update your website later:

```bash
# Make your changes to the code
# Then run:
npm run deploy
```

This will automatically build and deploy your updated website.

## Important Notes

1. **Homepage URL**: Make sure the homepage in package.json matches your GitHub Pages URL exactly
2. **Repository Name**: Use lowercase and hyphens for repository names
3. **Public Repository**: GitHub Pages requires a public repository for free accounts
4. **Build Time**: Initial deployment may take 5-10 minutes to become available

## Button URL Updates

To update the Paper and Code button URLs:

1. Open `/src/components/ResearchPaper.jsx`
2. Find the `handlePaperClick` and `handleCodeClick` functions
3. Replace the console.log statements with:

```javascript
const handlePaperClick = () => {
  window.open('YOUR_CORNELL_PAPER_URL', '_blank');
};

const handleCodeClick = () => {
  window.open('YOUR_GITHUB_REPO_URL', '_blank');
};
```

4. Run `npm run deploy` to update your live website

## Troubleshooting

- **404 Error**: Check that the homepage URL in package.json matches your GitHub Pages URL
- **Build Fails**: Make sure all dependencies are installed with `npm install`
- **Changes Not Showing**: Clear browser cache or wait a few minutes for GitHub to update

Your research paper website is now ready for the world! 🎉