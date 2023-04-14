import { NextApiRequest, NextApiResponse } from 'next'
import { ProductType } from '../../context/productContext'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as { products: ProductType[] }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allownd' })
  }

  if (!products) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`

  const cancel_url = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: 'payment',
    payment_method_types: ['card'],
    payment_intent_data: {},
    line_items: products.map((product) => ({
      price_data: {
        currency: 'BRL',

        product_data: {
          name: product.name,
          images: [product.imageUrl],
        },
        unit_amount: product.numberPrice * 100,
      },
      quantity: 1,
    })),
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
