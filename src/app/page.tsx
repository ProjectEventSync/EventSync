"use client";
import Image from "next/image";
import {Meetup, User} from "@/types";
import MeetupCard from "@/app/components/meetupCard";
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

export default function Home() {
    const [theme, setTheme] = useTheme();
  // TODO: Create a home page


    return (
        <div className="no-scrollbar h-screen flex flex-col overflow-y-scroll w-screen bg-neutral-100 p-dark:bg-black">
            <MeetupCard meetup={defaultMeetup} creator={defaultUser}/>
        </div>
    );

}
