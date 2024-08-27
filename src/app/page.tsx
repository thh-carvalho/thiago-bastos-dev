"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  return  (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
