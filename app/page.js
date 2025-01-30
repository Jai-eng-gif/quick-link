
import Image from "next/image";

import { Poppins } from 'next/font/google';
import Link from "next/link";


const poppins = Poppins({
  weight: ['100', '900'],
  subsets: ['latin'],
});
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}` }>QuickLink - Shorten URLs Instantly</p>
          <p className="text-center">Quickly shorten long URLs into compact, easy-to-share links with our fast and reliable URL shortener. Perfect for social media, messaging, and saving space. Simple, secure, and free!</p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
        </div>
        <div className="  flex justify-start relative">
          <Image alt="Image of vector" src={"/vector.jpg"} className="mix-blend-darken"  fill={true}/>

        </div>

      </section>
    </main>
  );
}
