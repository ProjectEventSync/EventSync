"use client";

import Sidebar from "../components/sidebar";
import MeetupCard from "@/app/components/meetupCard";
import {Meetup, defaultMeetup, User, defaultUser} from "@/types";
import useTheme from "@/app/components/utils/theme/updateTheme";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";



export default function Dashboard() {
    let [theme, setTheme] = useTheme();
    let [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    // Get TOKEN from cookie

    useEffect(() => {
        const token = Cookies.get('token');

        fetch('/api/auth/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            const data = res.json() as Promise<{ data: {userID: string, type: string} } | { error: string }>;
            data.then((userData) => {
                if ('data' in userData) {
                    fetch(`/api/user/${userData.data.userID}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    }).then((res) => {
                        const user = res.json();
                        user.then((data) => {
                            setUser(data);
                        });
                    });
                } else {
                    router.push('/login');
                }
            });
        });
    }, []);

    return (
        <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
            <Sidebar user={user} active="dashboard"/>
            <div className="flex flex-col h-full w-full p-4">
                <h1 className="text-2xl mb-4 dark:text-white text-black font-bold">Dashboard</h1>
                <div className="flex flex-col xl:flex-row w-full h-full">
                    <div className="flex flex-col p-4 bg-neutral-100 rounded-md dark:bg-neutral-950 border dark:border-neutral-900 w-full xl:w-1/2 h-full">
                        <p className="uppercase dark:text-neutral-500 mb-4">Meetups</p>
                        <MeetupCard meetup={defaultMeetup} creator={user}/>
                    </div>
                    <div className="flex flex-col w-full xl:mt-0 mt-4 xl:w-1/2 h-full xl:ml-4">
                        <div className="flex flex-col p-4 rounded-md dark:bg-neutral-950 border bg-neutral-100 dark:border-neutral-900 h-1/2">
                            <p className="uppercase dark:text-neutral-500 mb-4">Friends</p>
                        </div>
                        <div className="flex flex-col p-4 rounded-md dark:bg-neutral-950 border bg-neutral-100 dark:border-neutral-900 h-1/2 mt-4">
                            <p className="uppercase dark:text-neutral-500 mb-4">Notifications</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}