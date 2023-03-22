import React from 'react'
import axios from 'axios'

const getData = async (name: string) => {
  const data = await fetch(`http://localhost:3000/api/hello?name=${name}`,
  {cache: 'no-store'});
  const response = await data.json()
  return response;
}

export default async function page({params}: any) {
  const { name } = params
  const response = await getData(name);
  return (
    <>
      <div>{name}</div>
      <div>{response}</div>
    </>
    
  )
}
