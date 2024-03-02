import Sidebar from "../components/sidebar";
import MeetupCard from "@/app/components/meetupCard";
import {Meetup, User} from "@/types";

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
    return (
        <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
            <Sidebar user={defaultUser} active="dashboard"/>
            <div className="flex flex-col justify-center items-center h-full w-full p-4">
                <h1 className="text-4xl text-black font-bold">Dashboard</h1>
                <div className="flex flex-col justify-center items-center h-full w-full overflow-y-scroll">
                    <MeetupCard meetup={defaultMeetup} creator={defaultUser}/>
                </div>
            </div>


        </div>
    );
}