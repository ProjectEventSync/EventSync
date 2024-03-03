"use client";
import Image from "next/image";
import {Meetup, defaultMeetup, User, defaultUser} from "@/types";
import MeetupCard from "@/app/components/meetupCard";
import useTheme from "@/app/components/utils/theme/updateTheme";


export default function Home() {
    const [theme, setTheme] = useTheme();
  // TODO: Create a home page


    return (
        <div className="no-scrollbar h-screen flex flex-col overflow-y-scroll w-screen bg-neutral-100 p-dark:bg-black">
            <MeetupCard meetup={defaultMeetup} creator={defaultUser}/>
        </div>
    );

}
