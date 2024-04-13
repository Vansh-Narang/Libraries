"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { useFormik } from 'formik';
import Link from "next/link";

export default function Signup() {
    //use formik -> to show intial values
    const { data: session } = useSession();
    if (!session) {
        return <div className="text-center text-xl font-semibold flex flex-col m-2">
            Not login
            <Link href={"/"} className="m-4 bg-green-600 py-2 px-6 rounded-md mx-auto">Login Now</Link>
        </div>
    }
    const formik = useFormik({
        initialValues: {
            fullName: '',
            password: '',
        },
        //on submit to show the values that has been passed
        onSubmit: values => {
            alert("Your response has been recorded")
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='flex flex-col justify-center m-60 items-center'>
            <h1 className='text-center font-bold text-2xl mb-4'>Sign Up for Newsletter</h1>
            <form className="flex flex-col w-full max-w-sm" onSubmit={formik.handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={formik.handleChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="fullName"
                            type="text"
                            value={formik.values.fullName} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            onChange={formik.handleChange}
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm">
                            Send me your newsletter!
                        </span>
                    </label>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-green-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
};