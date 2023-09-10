import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Layout } from '@/components/layouts/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout>
      <h1>h1</h1>
      </Layout>    
  )
}
