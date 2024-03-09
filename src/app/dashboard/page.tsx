"use client";

import Sidebar from "../components/sidebar";
import MeetupCard from "@/app/components/meetupCard";
import {Meetup, defaultMeetup, User, defaultUser} from "@/types";
import {useEffect, useState} from "react";1
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import {ScrollShadow, Input} from "@nextui-org/react";
import {MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/solid";
import useUserTheme from "@/app/components/utils/theme/updateTheme";
import {Button} from "@nextui-org/react";
import useSession from "@/app/components/utils/sessionProvider";



export default function Dashboard() {
    let [userTheme, setUserTheme] = useUserTheme();
    let [user, setUser] = useState<User | null>(null);
    let [meetups, setMeetups] = useState<(Meetup | null)[]>([null, null, null, null]);
    let [search, setSearch] = useState('');
    let [loadingUser, setLoadingUser] = useState(true);
    let [loadingMeetups, setLoadingMeetups] = useState(true);
    const router = useRouter();

    // Get TOKEN from cookie
    const { session, status } = useSession();

    if (status == "done" && loadingUser) {
        setLoadingUser(false);
        fetch(`/api/user/${session.userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.token}`
            }
        }).then((data) => {
            data.json().then((user) => {
                setUser(user);
                setUserTheme(user.theme);
            });
        });
    } else if (status == "error") {
        router.push('/login');
    }

    if (user && loadingMeetups) {
        setLoadingMeetups(false);
        const newMeetups: Meetup[] = [];

        if (!user.meetups) {
            setMeetups([]);
            return;
        }

        user.meetups.forEach((meetupID) => {
            fetch(`/api/meetups/${meetupID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authoirzation': `Bearer ${session.token}`
                }
            }).then((res) => {
                res.json().then((meetup) => {
                    newMeetups.push(meetup);
                });
            });
        });
        setMeetups(newMeetups);
    }


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