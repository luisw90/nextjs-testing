import React from 'react'
import axios from 'axios'
import Link from 'next/link'



export default async function page() {
  const response = await axios.get('https://cdn.contentful.com/spaces/gh7nw14dt74b/entries?access_token=16HTXq_2ke2AWWtRrBfdK5USbqV_EBYzrwFr2-Gs8Ko')
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
