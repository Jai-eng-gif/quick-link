"use client"
import React, { useState } from 'react'
import { Poppins } from 'next/font/google';
import Link from 'next/link';



const poppins = Poppins({
    weight: ['100', '400'],
    subsets: ['latin'],
});
const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    // const [message, setMessage] = useState("");
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("")
                setshorturl("")
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                console.log(result)
                // setMessage(result.message); // Update message state
                // alert(result.message)
                
            }
            )
            .catch((error) =>{ console.error(error)
                // setMessage("An error occurred while generating the short URL."); // Update message state
            });
    }


    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className={`font-bold text-2xl ${poppins.className}`}>Generate your short url</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={(e) => seturl(e.target.value)} />

                <input type="text"
                    value={shorturl}
                    className='p-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your perferred short URL text'
                    onChange={(e) => setshorturl(e.target.value)} />
                    {/* <span className='text-center text-red-500'>{message}</span> */}
                <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
            </div>
            {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
            </code></>}
        </div>
    )
}

export default Shorten
