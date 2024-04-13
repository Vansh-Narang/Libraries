"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function Home() {
    const { data: session } = useSession();
    if (!session) {
        return <div className="text-center text-xl font-semibold flex flex-col m-2">
            Not login
            <Link href={"/"} className="m-4 bg-green-600 py-2 px-6 rounded-md mx-auto">Login Now</Link>
        </div>
    }
    const {
        data: res,
        isLoading,
        error: error,
    } = useSWR(
        "https://fakestoreapi.com/products",
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
    );

    if (error) {
        return <p className="text-center text-4xl font-semibold">Failed to fetch</p>;
    }

    if (isLoading) {
        return <p className="text-center text-4xl font-semibold mt-2">Loading Data...</p>;
    }

    return (
        <div>
            <ul>
                {res.map((comment: any, index: any) => (
                    <div key={index} className="flex">
                        <div className="flex flex-row items-center justify-between gap-2 m-3">
                            <img src={comment.image} height={100} width={100} className="border-r-8 rounded-lg" />
                            <div className="font-normal p-2">
                                <h1 >{comment.title}</h1>
                                <h1>Price : {comment.price}</h1>
                            </div>

                        </div>

                    </div>
                ))}
            </ul>
        </div >
    );
}