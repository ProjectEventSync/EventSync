"use client";

import Sidebar from "../components/sidebar";
import MeetupCard from "@/app/components/meetupCard";
import {Meetup, defaultMeetup, User, defaultUser} from "@/types";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import {ScrollShadow, Input} from "@nextui-org/react";
import {MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/solid";
import useUserTheme from "@/app/components/utils/theme/updateTheme";
import {Button} from "@nextui-org/react";



export default function Dashboard() {
    let [userTheme, setUserTheme] = useUserTheme();
    let [user, setUser] = useState<User | null>(null);
    let [meetups, setMeetups] = useState<(Meetup | null)[]>([null, null, null, null]);
    let [search, setSearch] = useState('');
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
                            setUserTheme(data.theme);
                            if (data.meetups.length == 0) {
                                setMeetups([]);
                                return;
                            }

                            data.meetups.map((meetup: string) => {
                                fetch(`/api/meetup/${meetup}`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${token}`
                                    }
                                }).then((res) => {
                                    const meetup = res.json();
                                    meetup.then((data) => {
                                        setMeetups((meetups) => {
                                            if (!meetups[0]){
                                                return [data];
                                            }
                                            const newMeetups = meetups;
                                            newMeetups.push(data);
                                            return newMeetups;
                                        });
                                    });
                                });
                            }
                            );
                        });
                    });
                } else {
                    router.push('/login');
                }
            });
        });
    }, []);


    return (
        <div className="flex flex-row bg-stone-100 dark:bg-slate-950 h-screen w-screen">
            <Sidebar user={user} active="dashboard"/>
            <div className="flex flex-row h-full w-full p-4">
                <div className="w-1/2 lg:h-full flex flex-col p-4">
                    <p className="dark:text-white0 text-lg font-bold mb-4">Meetups</p>
                    <div className="flex flex-row w-full justify-between">
                        { meetups.map((meetup, index) => (
                            <MeetupCard meetup={meetup} creator={user} small={true} key={index}/>
                        ))}
                        </div>
                </div>
            </div>
        </div>
    );
}