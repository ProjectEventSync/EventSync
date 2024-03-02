import { UserGroupIcon, ClockIcon, CalendarIcon } from "@heroicons/react/20/solid";
import { Meetup, User } from "@/types";

export default function MeetupCard({ meetup, creator }: { meetup: Meetup, creator: User }){
    const startTime = meetup.date.toLocaleTimeString();
    const startDate = meetup.date.toLocaleDateString();


    return (
        <div className="h-full w-full bg-neutral-100 p-4 dark:bg-black">
            <div className="transition-all rounded-m group dark:hover:bg-neutral-800 flex h-auto w-full flex-row rounded-lg p-4 bg-white hover:bg-neutral-50 dark:bg-neutral-900">
                <img src={ meetup.image } className="hover:opacity-90 flex-0 aspect-square w-32 rounded-lg" />
                <div className="ml-4 flex flex-grow flex-col justify-between">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-lg font-bold text-black dark:text-white">{ meetup.title }</h1>
                        <img className="hover:opacity-90 aspect-square w-7 rounded-full" src={ creator.avatar }/>
                    </div>
                    <p className="text-base text-neutral-500 dark:text-neutral-400 dark:group-hover:text-neutral-300">{ meetup.description }</p>

                    <div className="mt-4 flex justify-between flex-row">
                        <div className="flex flex-row rounded-full dark:bg-neutral-800 dark:group-hover:bg-neutral-900 bg-neutral-100 dark:border-gray-700 border-gray-200 p-2 border ">
                            <UserGroupIcon className="h-6 w-6 text-neutral-300" />
                            <p className="text-sm mt-0.5 ml-2 font-semibold dark:text-neutral-300 text-neutral-400">{ meetup.attendees.length }</p>
                        </div>
                        <div className="flex flex-row rounded-full dark:bg-neutral-800 dark:group-hover:bg-neutral-900 bg-neutral-100 dark:border-gray-700 border-gray-200 p-2 border ">
                            <ClockIcon className="h-6 w-6 text-neutral-300" />
                            <p className="text-sm ml-2 mt-0.5 font-semibold dark:text-neutral-300 text-neutral-400">{ startTime }</p>
                        </div>
                        <div className="flex flex-row rounded-full dark:bg-neutral-800 dark:group-hover:bg-neutral-900 bg-neutral-100 dark:border-gray-700 border-gray-200 p-2 border ">
                            <CalendarIcon className="h-6 w-6 text-neutral-300" />
                            <p className="text-sm ml-2 mt-0.5 font-semibold dark:text-neutral-300 text-neutral-400">{ startDate }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

