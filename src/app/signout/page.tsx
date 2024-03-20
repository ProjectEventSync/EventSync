'use client';
import Cookies from 'js-cookie';
import {useEffect} from "react";
import {useRouter} from "next13-progressbar";

export default function Signout() {
    const router = useRouter();
    useEffect(() => {
        Cookies.set("token", "");
        router.push('/login');
    }, [router]);
    return <div></div>;
}