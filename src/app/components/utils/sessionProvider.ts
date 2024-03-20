"use client";
import {useEffect, useState} from "react";
import { Session } from "@/types";
import Cookies from 'js-cookie';

export default function useSession(){
    const [session, setSession] = useState<Session>(new Session(null, null)); // session = userID
    const [status, setStatus] = useState<'loading' | 'done' | 'error'>('loading');
    const token = Cookies.get('token');

    useEffect(() => {
        if (!token) {
            setStatus('error');
            return;
        }
        fetch('/api/auth/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            const data = res.json();
            data.then((userData) => {
                if ('data' in userData) {
                    setSession(new Session(userData.data.userID, token));
                    setStatus('done');
                } else {
                    setStatus('error');
                }
            });
        });

    }, [token]);

    return {session, status};
}