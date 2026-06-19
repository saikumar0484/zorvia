# Deploy Zorvia to Vercel

This guide explains how to deploy the Zorvia web application to Vercel.

## Prerequisites

- Node.js 18+ installed
- A Vercel account (free tier is sufficient)
- Vercel CLI installed (`npm install -g vercel`)

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial Zorvia app"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset**: Vite
     - **Root Directory**: `apps/web`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click "Deploy"

3. **Your app will be live at**: `https://your-project-name.vercel.app`

### Option 2: Deploy via CLI

```bash
# Navigate to the web app directory
cd apps/web

# Install dependencies
npm install

# Login to Vercel
npx vercel login

# Deploy
npx vercel --prod
```

When prompted:
- Set up and deploy? **Y**
- Which scope? (select your account)
- Link to existing project? **N**
- Project name? **zorvia**
- Directory? **./** (already in apps/web)
- Override settings? **N**

## Environment Variables

If you need to add environment variables (for API endpoints, etc.):

1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add variables like:
   - `VITE_API_URL`: Your backend API URL
4. Redeploy for changes to take effect

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically
- Deployment URLs are provided in GitHub PR comments

## Custom Domain

To add a custom domain:
1. Go to **Settings** → **Domains**
2. Add your domain
3. Update DNS records as instructed

## Monitoring

View deployment logs, analytics, and performance metrics in the Vercel dashboard under:
- **Deployments**: View all deployments
- **Analytics**: Traffic and performance data
- **Logs**: Real-time function logs (if using serverless functions)

## Notes

- The free tier includes unlimited personal projects
- Bandwidth limit: 100GB/month
- Build minutes: 6,000 hours/month
- Serverless function execution: 100GB-hours

For more information, visit [vercel.com/docs](https://vercel.com/docs)
