import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
    const { data: session } = useSession();
    return (
        <div>
            <div className="bg-green-400 text-black p-3 font-semibold">
                <ul className="flex flex-row items-center justify-center gap-8">
                    <Link href="/tasks">Home</Link>
                    <Link href="/contact"> Contact us</Link>
                    {
                        session ? (
                            <button className='bg-white p-2 rounded-md' onClick={() => signOut()}>Sign out</button>
                        ) : (
                            <button className='bg-white p-2 rounded-md' onClick={() => signIn()}>Sign In</button>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
