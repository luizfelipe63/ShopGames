import { NextApiRequest, NextApiResponse } from 'next'
import { ProductType } from '../../context/productContext'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pricesId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allownd' })
  }

  if (!pricesId) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`

  const cancel_url = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: success_url,
    cancel_url: cancel_url,
    mode: 'payment',
    line_items: pricesId
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
