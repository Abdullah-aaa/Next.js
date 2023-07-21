'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <>
     <Button onClick={()=>router.push("/movies/1")}>movie 1</Button>
     <br/>
     <br/>

     <Button onClick={()=>router.push("/movies/2")}>movie 2</Button>
     
     <br/>
     <br/>
     
     <div>
     <Link href="/movies/1/review/1">review of movie 1</Link>
    
     </div>
     
    </>
  )
}
