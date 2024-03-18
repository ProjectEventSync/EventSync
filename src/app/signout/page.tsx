'use client';
import Cookies from "js-cookie";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Signout() {
    const router = useRouter();
    useEffect(() => {
        Cookies.remove('token');
        router.push('/login');
    }, [router]);
    return <div></div>;
}