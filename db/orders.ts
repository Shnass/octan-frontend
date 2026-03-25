"use server"

import pool from "@/lib/dbConnect";
import { Order } from "@/types/order";

export default async function createOrder(order:Order){
    const {buyer, country, city, zipcode, address, np, shipping, items, payment, status, sum, currency} = order;
    console.log(order);
const client = await pool.connect()

try {
  await client.query('BEGIN')
   const paymentMethodId = await client.query(`SELECT id FROM payment_methods where slug=$1`, [payment])
    const shippingMethodId = await client.query(`SELECT id FROM shipping_methods where slug=$1`, [shipping.name])

    const newOrderResult = await client.query(`
        INSERT INTO orders (buyer_name, buyer_lastname, buyer_email, buyer_phone, country, city, zip_code, street_address, np_index, status,
        shipping_price, shipping_method, currency, subtotal, total, payment_method)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
     RETURNING id`, [
        buyer.name,
        buyer.lastName,
        buyer.email,
        buyer.phone,
        country,
        city,
        zipcode,
        address,
        np,
        status,
        shipping.cost,
        shippingMethodId.rows[0].id,
        currency,
        Number(sum),
        Number(+sum+shipping.cost),
        paymentMethodId.rows[0].id
     ]) 

const newOrderId = newOrderResult.rows[0].id;

// bulk insertion into order_item table
const values: any[] = []
const placeholders: string[] = []

items.forEach((item, index) => {
  const baseIndex = index * 6

  placeholders.push(
    `($${baseIndex + 1}, $${baseIndex + 2}, $${baseIndex + 3}, $${baseIndex + 4}, $${baseIndex + 5}, $${baseIndex + 6})`
  )

  values.push(
    newOrderId,
    item.id,
    `${item.artist} – ${item.name}`,
    item.price,
    1,
    currency,
  )
})

await client.query(`
  INSERT INTO order_items (order_id, item_id, item_name, price_at_purchase, amount, currency_at_purchase)
  VALUES ${placeholders.join(', ')}
  `, values)

const itemsUpdateResult = await client.query(`
  UPDATE records
  SET status = 'sold'
  WHERE id = ANY($1)
  RETURNING id`,
  //  AND status = 'available'
  [items.map(i => i.id)]
)
  await client.query('COMMIT')
} catch (e) {
  await client.query('ROLLBACK')
  throw e
} finally {
  client.release()
}
 


}
