# Fix Production Vercel KV Connection Issue

## Problem
The admin panel works locally but fails in production with a 500 error when adding projects. This is because the Vercel KV (Upstash Redis) connection is failing.

## Solutions (choose one)

### Option 1: Create a New Vercel KV Database (Recommended)

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Storage** tab
4. Click **Create Database** → **KV**
5. Give it a name (e.g., "jovix-admin-kv")
6. Click **Create**
7. Vercel will automatically add these environment variables to your project:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`
   - `KV_URL`
8. Redeploy your project (Settings → Deployments → Redeploy)

### Option 2: Use Your Existing Upstash Database

If you already have an Upstash account and database:

1. Go to https://console.upstash.com/
2. Select your Redis database
3. Go to **Details** tab
4. Copy the REST API credentials:
   - Endpoint (KV_REST_API_URL)
   - REST Token (KV_REST_API_TOKEN)
   - Read Only REST Token (KV_REST_API_READ_ONLY_TOKEN)
5. Add these to your Vercel project:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add each variable (make sure they're set for Production)
6. Redeploy

### Option 3: Use File Storage in Production (Quick Fix)

If you want to temporarily use JSON file storage in production:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Remove or disable these variables:
   - KV_REST_API_URL
   - KV_REST_API_TOKEN
   - KV_REST_API_READ_ONLY_TOKEN
3. Redeploy

**Note:** This won't persist data across deployments! Use KV for production.

### Option 4: Add Better Error Handling

Let me add fallback logic so the app doesn't crash when KV fails.

## Current Issue Details

The credentials in your `.env.local` are:
- URL: https://tolerant-muskox-195026.upstash.io
- Token: gQAAAAAAAvnSAAIgcDEwNzI4MmIxMTM0MGI0NWJiODQxMzM4NjJjMzVkNjNlNw

These might be:
- Invalid/expired tokens
- Database deleted
- Network/region restrictions
- IP allowlist blocking Vercel's deployment region

## Next Steps

Choose one of the options above. I recommend **Option 1** (create new KV database) as it's the most reliable.

Would you like me to:
1. Add better error handling to the app?
2. Create a script to migrate from file storage to KV?
3. Help you debug the existing Upstash connection?
