'use client';
import React from 'react'
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
function page() {
    const router=useRouter();
  return (
    <>
    <h1>about page</h1>
    <br/>
    <Button onClick={()=>router.push("/about/terms")}>
    terms
  </Button>
    <br/>
    <Button onClick={()=>router.push("/")}>
        home
    </Button>
    
    </>
  )
}

export default page