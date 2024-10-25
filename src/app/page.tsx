"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { About } from "./about/about";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import { Footer } from "./footer/footer";

export default function Home() {
  const router = useRouter()
  
  return  (
    <>
      <About />
      <Experience/>
      <Projects />
      <Footer />
    </>
  )
}
