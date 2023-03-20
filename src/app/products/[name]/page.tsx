import React from 'react'

export default function page({params}: any) {
  const { name } = params
  return (
    <div>{name}</div>
  )
}
