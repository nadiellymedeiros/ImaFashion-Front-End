import React from 'react'
import { useParams } from 'react-router-dom'
import Produto from '../components/Produto/Produto'
import { useProduct } from '../hooks/useProducts'

export default function ProductPage() {
  const { id } = useParams()
  const produto = useProduct(id)
  return <Produto produto={produto} />
}
