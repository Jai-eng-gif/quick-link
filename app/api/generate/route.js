import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body=await request.json();
  const client= await clientPromise;
  const db=client.db('quicklinks')
  const collection=db.collection('urls')

  // check if short url exists
  const existingEntry = await collection.findOne({ shorturl:body.shorturl });
  if(existingEntry){
    return Response.json({success:false,error:true, message: 'Already exist' })
  }else{
  const result=await collection.insertOne({
    url:body.url,
    shorturl:body.shorturl
  })
    return Response.json({success:true,error:false, message: 'URL generated successfully' })
  }}
 

 