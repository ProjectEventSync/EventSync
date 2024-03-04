"use client";
import { useState } from 'react';
import { UserCircleIcon, EyeIcon, EyeSlashIcon, LockClosedIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import useTheme from "@/app/components/utils/theme/updateTheme";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [theme, setTheme] = useTheme();
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        // POST request to /api/auth/signup
        e.preventDefault();

        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res)=> {
                res.json().then((data) => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        // Redirect to dashboard
                        Cookies.set('token', data.token);
                        router.push('/dashboard')
                    }
                });
            });
    };

    return (
        <div className="flex justify-center items-center h-screen font-inter">
            <div className="w-[450px] p-6">
                <h2 className="text-black dark:text-white text-left text-3xl font-semibold mb-2">Log In</h2>
                <p className="text-gray-400 text-left text-sm mb-4">
                    Don&apos;t have an account?{' '}
                    <a className="underline text-blue-500" href='/signup'>Sign Up</a>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-2">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="email"
                            className="w-full px-6 py-[14px] pl-12 rounded-lg filter drop-shadow-md text-black text-sm"
                        />
                        <UserCircleIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                    <div className="relative mb-2">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            className="w-full px-6 py-[14px] pl-12 pr-12 rounded-lg filter drop-shadow-md text-black text-sm"
                        />
                        <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeSlashIcon className="w-6 h-6 text-gray-400" /> : <EyeIcon className="w-6 h-6 text-gray-400" />}
                        </div>
                    </div>
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                    <a className="text-blue-500 text-sm" href='https://google.com/'>Forgot Password?</a>
                    <button type="submit" className="w-full flex items-center justify-center bg-blue-500 filter drop-shadow-md text-white px-4 py-3 rounded-lg cursor-pointer text-base">
                        Log In <ArrowLongRightIcon className="ml-4 w-6 h-6" />
                    </button>
                </form>
            </div>
        </div>
    );
}
