import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const { priceIds } = req.body;

  if(req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if(!priceIds) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const prices: string[] = priceIds;

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: prices.map(priceId => {
      return {
        price: priceId,
        quantity: 1,
      }
    }),
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return res.status(200).json({
    checkoutUrl: checkoutSession.url
  })
}
