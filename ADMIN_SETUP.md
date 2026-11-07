# Admin Console Setup Guide

## Overview
The admin console provides secure access to:
- Project management (create, edit, delete)
- Split costing and allocation
- Person/team cost tracking
- Financial analysis dashboard

## Security Features
- ✅ HMAC-signed session tokens
- ✅ Constant-time password comparison (timing-attack resistant)
- ✅ HttpOnly cookies
- ✅ 12-hour session expiry
- ✅ Support for scrypt password hashing

---

## 🚀 Production Deployment (Vercel)

### 1. Set Environment Variables in Vercel Dashboard

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these three variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `ADMIN_USERNAME` | Your admin email/username | Production, Preview, Development |
| `ADMIN_PASSWORD` | Your secure password | Production, Preview, Development |
| `ADMIN_AUTH_SECRET` | Random 64-char hex string | Production, Preview, Development |

#### Generate a strong `ADMIN_AUTH_SECRET`:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Vercel KV is Already Connected ✅
Your Vercel KV database (`jovix-kv`) is already integrated:
- Database ID: `7d26441c-b3b4-4e47-9c1c-1d9766f9ed61`
- The following env vars are auto-set by Vercel:
  - `KV_REST_API_URL`
  - `KV_REST_API_TOKEN`
  - `KV_REST_API_READ_ONLY_TOKEN`
  - `KV_URL`
  - `REDIS_URL`

### 3. Deploy
```bash
git push origin main
```

Vercel will automatically deploy with the new environment variables.

---

## 🔒 Password Security (Optional: Use Scrypt Hashing)

Instead of storing plaintext passwords, you can use scrypt-hashed passwords:

### Generate a Scrypt Hash:
```javascript
const crypto = require('crypto');

const password = 'your-secure-password';
const salt = crypto.randomBytes(16);
const hash = crypto.scryptSync(password, salt, 64);

console.log(`scrypt$${salt.toString('hex')}$${hash.toString('hex')}`);
```

Set the output as your `ADMIN_PASSWORD` environment variable.

---

## 🧪 Local Development

### 1. Copy environment template:
```bash
cp .env.example .env.local
```

### 2. Fill in `.env.local`:
```env
# Vercel KV (already set)
KV_REST_API_URL="https://tolerant-muskox-195026.upstash.io"
KV_REST_API_TOKEN="..."
KV_REST_API_READ_ONLY_TOKEN="..."

# Admin credentials (already set)
ADMIN_USERNAME="jitu@gmail.com"
ADMIN_PASSWORD="jitu2005"
ADMIN_AUTH_SECRET="jovix-admin-prod-secret-2026-replace-this-with-random-string"
```

### 3. Run locally:
```bash
npm run dev
```

### 4. Access admin console:
```
http://localhost:3000/admin/login
```

---

## 📊 Data Storage

The system automatically detects the environment:

- **Production (Vercel)**: Uses Vercel KV (Upstash Redis)
- **Local Development**: Falls back to JSON files in `./data/` directory

### Data Structure:
- **Projects**: `jovix:projects` (KV) or `data/projects.json` (local)
- **Persons**: `jovix:persons` (KV) or `data/persons.json` (local)

---

## 🔐 Admin Routes

| Route | Description | Auth Required |
|-------|-------------|--------------|
| `/admin/login` | Login page | No |
| `/admin` | Dashboard | Yes |
| `/admin/analysis` | Financial analysis | Yes |
| `/admin/split` | Split costing | Yes |
| `/api/admin/*` | All API routes | Yes (except login) |

---

## ⚠️ Important Security Notes

1. **Never commit** `.env.local` or any file with real credentials
2. **Always set** environment variables in Vercel dashboard for production
3. **Use strong passwords** (minimum 12 characters, mixed case, numbers, symbols)
4. **Rotate secrets** regularly, especially `ADMIN_AUTH_SECRET`
5. **Monitor access logs** for suspicious activity

---

## 🐛 Troubleshooting

### "Missing required environment variable" error
- Ensure all three admin env vars are set in Vercel dashboard
- Redeploy after adding environment variables

### "Unauthorized" when logged in
- Session may have expired (12-hour limit)
- Clear cookies and log in again
- Check that `ADMIN_AUTH_SECRET` matches between deployments

### Data not persisting
- Verify Vercel KV integration is connected
- Check `KV_REST_API_URL` and `KV_REST_API_TOKEN` are set
- View Vercel logs for connection errors

### Can't access admin console
- Verify you're using the correct username/password
- Check browser console for errors
- Ensure cookies are enabled

---

## 📈 Next Steps

1. ✅ Vercel KV is connected
2. ⚠️ Set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_AUTH_SECRET` in Vercel dashboard
3. ✅ Deploy to production
4. 🔒 Generate a strong auth secret (use the command above)
5. 📝 Document your admin credentials securely (use a password manager)

---

## Support

For issues or questions, contact: jitu@gmail.com
