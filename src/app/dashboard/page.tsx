"use client";

import Sidebar from "../components/sidebar";
import MeetupCard from "@/app/components/meetupCard";
import {Meetup, defaultMeetup, User, defaultUser, AppNotification} from "@/types";
import {useEffect, useState} from "react";1
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import {ScrollShadow, Input} from "@nextui-org/react";
import {MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/solid";
import useUserTheme from "@/app/components/utils/theme/updateTheme";
import {Button} from "@nextui-org/react";
import useSession from "@/app/components/utils/sessionProvider";
import NotificationCard from "@/app/components/notification";



export default function Dashboard() {
    let [userTheme, setUserTheme] = useUserTheme();
    let [user, setUser] = useState<User | null>(null);
    let [meetups, setMeetups] = useState<(Meetup | null)[]>([null, null, null, null]);
    let [search, setSearch] = useState('');
    let [loadingUser, setLoadingUser] = useState(true);
    let [loadingMeetups, setLoadingMeetups] = useState(true);
    let [loadingNotifications, setLoadingNotifications] = useState(true);
    let [knownUsers, setKnownUsers] = useState<User[]>([]); // Cache for user information (notifications, meetup card, etc.)
    let [notifications, setNotifications] = useState<(AppNotification | null)[]>([null, null, null, null]);

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
                setKnownUsers((prev) => [...prev, user]);
                setUserTheme(user.theme);
            });
        });
    } else if (status == "error") {
        router.push('/login');
    }

    if (user && loadingNotifications) {

        setLoadingNotifications(false);
        setNotifications([]);



        if (!user.notifications) {
            return;
        }
        user.notifications.forEach((notificationID) => {
            fetch(`/api/notification/${notificationID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.token}`
                }
            }).then((res) => {
                res.json().then((notification) => {
                    setNotifications((prev) => [...prev, notification]);
                    if (notification.initiator) {
                        if (knownUsers.find((user) => user._id == notification.initiator)) {
                            return;
                        }
                        fetch(`/api/user/${notification.initiator}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${session.token}`
                            }
                        }).then((res) => {
                            res.json().then((initiator) => {
                                setKnownUsers((prev) => [...prev, initiator]);
                            });
                        });
                    }

                });
            });
        });
    }

    if (user && loadingMeetups) {
        setLoadingMeetups(false);
        setMeetups([]);

        if (!user.meetups) {
            return;
        }
        user.meetups.forEach((meetupID) => {
            fetch(`/api/meetup/${meetupID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.token}`
                }
            }).then((res) => {
                res.json().then((meetup) => {

                    setMeetups((prev) => [...prev, meetup]);
                    if (knownUsers.find((user) => user._id == meetup.creator)) {
                        return;
                    }
                    fetch(`/api/user/${meetup.creator}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${session.token}`
                        }
                    }).then((res) => {
                        res.json().then((creator) => {
                            setKnownUsers((prev) => [...prev, creator]);
                        });
                    });
                });
            });
        });


    }


    return (
        <div className="flex flex-row bg-stone-100 dark:bg-black h-screen w-screen">
            <Sidebar user={user} active="dashboard"/>
            <div className="flex flex-row h-full w-full">
                <div className="w-2/3 lg:h-full flex flex-col">
                    <div className="flex flex-row items-center justify-between p-4 border-b dark:border-stone-800 dark:bg-stone-950">
                        <p className="dark:text-white text-2xl font-bold">Meetups</p>
                        <div className="flex flex-row space-x-4">
                            <Input
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                startContent={<MagnifyingGlassIcon width={20} height={20}/>}
                            />
                            <Button color="primary" variant="flat" isIconOnly onClick={() => router.push('/meetups/create')}>
                                <PlusIcon width={20} height={20}/>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full p-4">
                        { meetups.map((meetup, index) => (
                            <MeetupCard meetup={meetup} creator={user} small={true} key={index}/>
                        ))}
                        </div>
                </div>
                <div className="w-1/3 lg:h-full border-l dark:border-stone-800 dark:bg-stone-950 flex flex-col">
                    <p className="dark:text-white text-lg font-bold border-b dark:border-stone-800 p-4">Notifications</p>
                    <div className="flex flex-col w-full p-4">
                        { notifications.map((notification, index) => (
                            <NotificationCard notification={notification} meetup={notification?.meetup? meetups.find((meetup) => meetup?._id == notification.meetup) || null : null} initiator={notification?.initiator ? knownUsers.find((user) => user._id == notification.initiator) || null : null} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}