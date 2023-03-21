import React from 'react'
import axios from 'axios'
import Link from 'next/link'



export default async function page() {
  const response = await axios.get(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.ACCESS_TOKEN}`)
  const data = response.data.items
  return (
    <ul>{data.map((resp: any) => {
      return (
        <li key={resp.fields.name}>
          <Link href={`/products/${resp.fields.name}`}>
            {resp.fields.name}
          </Link>
        </li>
      )
      })}
    </ul>
  )
}
