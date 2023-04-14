import Stripe from 'stripe'

export const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'ShopGames',
  },
})
