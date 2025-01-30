import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = (await params).shorturl
console.log(shorturl);

    const client= await clientPromise;
    const db=client.db('quicklinks')
    const collection=db.collection('urls')
    const existingEntry = await collection.findOne({ shorturl:shorturl});

  if(existingEntry){
   redirect(existingEntry.url)
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }
    
  }

 