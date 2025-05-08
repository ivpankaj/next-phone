import InstallButton from '@/component/Button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>hi from home page
<br />
        <Link href='/'><span className='text-orange-800'>click kar main page pe jaayega</span></Link>

        <InstallButton/>
    </div>
  )
}

export default page