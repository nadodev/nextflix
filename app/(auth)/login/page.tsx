import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import GoogleICon from "../../../public/google.svg"

export default function LoginPage() {
  return (
    <div
    className="
      mt-24
      rounded-md
      bg-black/80
      py-10
      px-6
      md:mt-0
      md:max-w-sm
      md:px-14
    ">
     <form action="#">
      <h2 className='text-3xl font-semibold text-white'>Login</h2>
      <div className="space-y-4 mt-5">
          <Input
              type="email"
              name="email"
              placeholder="Email"
              className="
                w-full 
                bg-[#333] 
                placeholder:text-xs
                placeholder:text-gray-400
                inline-block
            "/>

            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="
                w-full 
                bg-[#333] 
                placeholder:text-xs
                placeholder:text-gray-400
                inline-block
            "/>
          <Button 
            variant="destructive"
            className="
              w-full 
              bg-[#e50914]
              hover:bg-red-700

            ">Login</Button>
      </div>
     </form>
     <div className="text-gray-500 text-sm mt-2 gap-2 flex">
       No Have a account ?
          <Link 
          className="text-white hover:underline"
          href="/sign-up">Sign Up Now</Link>
       </div>
     <div className="
              flex
              w-full
              justify-center
              items-center
              gap-x-3
              mt-6
       ">
        <Button variant="outline" size="icon">
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={GoogleICon} alt="google icon" className="w-6 h-6" />
        </Button>
       </div>
  </div>
  )
}
