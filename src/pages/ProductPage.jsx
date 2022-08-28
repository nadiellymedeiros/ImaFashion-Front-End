import React from 'react'
import { useParams } from 'react-router-dom'
import Produto from '../components/Produto/Produto'

export default function ProductPage() {
  const { id } = useParams()

  return <Produto id={id} />
}
