# Deployment Guide - Camp Apex APIs

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Ghostbusters API module"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your API will be live at:**
   ```
   https://your-project-name.vercel.app/api/ghostbusters/entities
   https://your-project-name.vercel.app/api/ghostbusters/check-equipment
   ```

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time)
   - What's your project's name? **camp-apex-apis**
   - In which directory is your code located? **.**
   - Want to modify settings? **N**

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Environment Variables (if needed)

If you add environment variables later:

1. **In Vercel Dashboard:**
   - Go to Project Settings
   - Navigate to "Environment Variables"
   - Add your variables

2. **Via CLI:**
   ```bash
   vercel env add API_KEY
   ```

## Deploy to Other Platforms

### Deploy to Railway

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy:**
   ```bash
   railway login
   railway init
   railway up
   ```

### Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and Deploy:**
   ```bash
   netlify login
   netlify init
   netlify deploy --prod
   ```

## Post-Deployment Testing

Once deployed, test your API endpoints:

### Test GET Endpoint:
```bash
curl https://your-domain.vercel.app/api/ghostbusters/entities
```

### Test POST Endpoint:
```bash
curl -X POST https://your-domain.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": ["Proton Pack", "Ghost Trap", "PKE Meter", "Ecto Goggles"]
  }'
```

## Custom Domain (Optional)

### Add Custom Domain in Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Your API will be available at:
   ```
   https://api.yourdomain.com/ghostbusters/entities
   https://api.yourdomain.com/ghostbusters/check-equipment
   ```

## Monitoring & Analytics

### Vercel Analytics:

1. Enable Analytics in Project Settings
2. View real-time API usage statistics
3. Monitor response times and errors

### Set Up Logging:

Add structured logging in your routes:
```typescript
console.log({
  timestamp: new Date().toISOString(),
  endpoint: '/api/ghostbusters/entities',
  status: 'success'
});
```

## Continuous Deployment

Vercel automatically deploys when you push to your repository:

```bash
# Make changes
git add .
git commit -m "Update ghost data"
git push origin main

# Vercel automatically deploys the changes
```

## API Rate Limiting (Future Enhancement)

Consider adding rate limiting for production:

1. **Install rate limiting package:**
   ```bash
   npm install @upstash/ratelimit @upstash/redis
   ```

2. **Add middleware for rate limiting**

3. **Configure limits in environment variables**

## Health Check Endpoint (Future Enhancement)

Create a health check endpoint:

```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() });
}
```

## Troubleshooting

### Build Fails:
- Check [build logs](https://vercel.com/docs/concepts/deployments/build-logs)
- Ensure all dependencies are in package.json
- Run `npm run build` locally first

### API Returns 404:
- Verify route files are in correct directories
- Check App Router structure (app/api/...)

### TypeScript Errors:
- Run `npm run build` locally
- Fix type errors before deploying
- Check tsconfig.json configuration

## Production Checklist

Before going live:

- [ ] All endpoints tested locally
- [ ] Build succeeds without errors
- [ ] TypeScript compilation passes
- [ ] README.md updated with production URLs
- [ ] Environment variables configured (if any)
- [ ] Error handling implemented
- [ ] CORS headers configured (vercel.json)
- [ ] API documentation complete
- [ ] Git repository pushed to GitHub
- [ ] Vercel project deployed
- [ ] Production endpoints tested
- [ ] Custom domain configured (optional)
- [ ] Analytics/monitoring enabled

## Maintenance

### Update Ghost Data:
1. Edit [lib/data/ghostbusters/ghosts.ts](lib/data/ghostbusters/ghosts.ts)
2. Commit and push changes
3. Vercel auto-deploys

### Add New API Module:
1. Create new directory: `app/api/your-module/`
2. Add route handlers
3. Update README.md
4. Deploy

## Support

For issues with:
- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **This Project:** Check README.md and EXAMPLES.md

## Cost Estimates

### Vercel Hobby Plan (Free):
- ✅ Perfect for this API project
- Unlimited API requests
- Automatic HTTPS
- Edge Network (CDN)
- 100GB bandwidth/month

### Vercel Pro Plan ($20/month):
- Higher bandwidth limits
- Advanced analytics
- Team collaboration features

**This API project works perfectly on the free Hobby plan!**
