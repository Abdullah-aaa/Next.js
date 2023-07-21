'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


function page() {

  const router= useRouter();   
  return (
   
    
  <main>  
  <div>
  <Button onClick={()=>router.push("/movies")}>
    movies
  </Button>
   
    <br/>
    <br/>
    
  </div>
  <Button onClick={()=>router.push("/about")}>
    About
  </Button>
</main>

  )
}

export default page
