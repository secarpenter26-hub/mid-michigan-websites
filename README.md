# Mid-Michigan Websites

A freelance portfolio and deposit site for **Scott Carpenter** — simple, modern websites for local Michigan small businesses in Webberville, Okemos, Lansing, Fowlerville, and nearby towns.

Prospects from a cold email can:

1. See before/after example mockups
2. Read Starter, Growth, and Care packages
3. Pay a **$300 deposit** through Stripe Checkout

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without Stripe keys, **Pay deposit** still works. It sends you to a demo thank-you page and does not charge anyone.

## Add Stripe test keys

1. Create a [Stripe](https://stripe.com) account and stay in **Test mode**.
2. Open [API keys](https://dashboard.stripe.com/test/apikeys).
3. Copy the **Secret key** (`sk_test_…`) and **Publishable key** (`pk_test_…`) into `.env.local`:

```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_DEPOSIT_AMOUNT_CENTS=30000
NEXT_PUBLIC_DEPOSIT_AMOUNT_CENTS=30000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=you@yourdomain.com
```

4. Restart `npm run dev`.
5. Click **Pay $300 deposit**. Stripe Checkout should open.
6. Pay with a [test card](https://docs.stripe.com/testing): `4242 4242 4242 4242`, any future expiry, any CVC.

Checkout is created on the server with `STRIPE_SECRET_KEY`. The site will either:

- use `STRIPE_PRICE_ID` if you created a Price in Stripe Dashboard → Products, or
- charge `STRIPE_DEPOSIT_AMOUNT_CENTS` (default `30000` = $300) with `price_data`

`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is included so the project is ready for Stripe.js later. Hosted Checkout only needs the secret key plus success/cancel URLs.

Success URL: `{NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`  
Cancel URL: `{NEXT_PUBLIC_SITE_URL}/cancel`

On Vercel, set `NEXT_PUBLIC_SITE_URL` to your production URL (`https://your-project.vercel.app`). If it is missing, the app falls back to the incoming request origin.

## Push to GitHub

This repo is meant to be public. Do not commit `.env.local`.

```bash
git add .
git commit -m "Add Mid-Michigan Websites portfolio and Stripe deposits"
git branch -M main
git remote add origin https://github.com/YOUR_USER/mid-michigan-websites.git
git push -u origin main
```

If the remote already exists, skip `git remote add` and push to `main`.

## Deploy on Vercel Hobby (free)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New… → Project** and import this repository.
3. Framework preset: **Next.js**. Leave the build command as `next build`.
4. Add environment variables (same names as `.env.example`):

   | Name | Example |
   | --- | --- |
   | `STRIPE_SECRET_KEY` | `sk_test_…` |
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_…` |
   | `STRIPE_PRICE_ID` | optional |
   | `STRIPE_DEPOSIT_AMOUNT_CENTS` | `30000` |
   | `NEXT_PUBLIC_DEPOSIT_AMOUNT_CENTS` | `30000` |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | your real inbox |
   | `NEXT_PUBLIC_CONTACT_PHONE` | optional |

5. Deploy. Hobby is enough for this site.
6. After the first deploy, update `NEXT_PUBLIC_SITE_URL` to the real `*.vercel.app` (or custom) domain and redeploy.

Going live with real cards later: switch Stripe to live mode, replace `sk_test_` / `pk_test_` with live keys, and keep the same variable names.

## What to edit

- Copy, towns, and package lists: `src/lib/site.ts`
- Contact email and phone: env vars above
- Deposit amount: `STRIPE_DEPOSIT_AMOUNT_CENTS` and `NEXT_PUBLIC_DEPOSIT_AMOUNT_CENTS`

The contact form opens a pre-filled `mailto:` — there is no database.
