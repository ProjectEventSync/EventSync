"use client";

import Sidebar from "../components/sidebar";
import MeetupCard from "@/app/components/meetupCard";
import {Meetup, User} from "@/types";
import useTheme from "@/app/components/utils/theme/updateTheme";

const defaultUser = new User(
    "John Doe",
    "johndoe@eventsync.app",
    "password",
);

const defaultMeetup = new Meetup(
    "Meetup Title",
    "Meetup Description",
    new Date("2022-12-12T12:00:00Z"),
    "none",
    defaultUser._id,
    [defaultUser._id],
    undefined,
    "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2017/04/thumb_720_450_Alpsdreamstime_xl_45054687.jpg"
);

export default function Dashboard() {
    let [theme, setTheme] = useTheme();
    return (
        <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
            <Sidebar user={defaultUser} active="dashboard"/>
            <div className="flex flex-col h-full w-full p-4">
                <h1 className="text-2xl mb-4 dark:text-white text-black font-bold">Dashboard</h1>
                <div className="flex flex-row w-full h-full">
                    <div className="flex flex-col p-4 bg-neutral-100 rounded-md dark:bg-neutral-950 border dark:border-neutral-900 w-1/2 h-full">
                        <p className="uppercase dark:text-neutral-400 mb-4">Your Meetups</p>
                        <MeetupCard meetup={defaultMeetup} creator={defaultUser}/>
                    </div>
                    <div className="flex flex-col w-1/2 h-full ml-4">
                        <div className="flex flex-col p-4 rounded-md dark:bg-neutral-950 border bg-neutral-100 dark:border-neutral-900 h-1/2">
                            <p className="uppercase dark:text-neutral-400 mb-4">Your Friends</p>
                        </div>
                        <div className="flex flex-col p-4 rounded-md dark:bg-neutral-950 border bg-neutral-100 dark:border-neutral-900 h-1/2 mt-4">
                            <p className="uppercase dark:text-neutral-400 mb-4">Your Notifications</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}