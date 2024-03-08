import { UserGroupIcon, ClockIcon, CalendarIcon } from "@heroicons/react/20/solid";
import { Meetup, User } from "@/types";
import {Button, Skeleton, Image} from "@nextui-org/react";
import {Card, CardFooter} from "@nextui-org/card";


export default function MeetupCard({ meetup, creator, small }: { meetup: Meetup | null, creator: User | null, small: boolean}){
    const startTime = meetup? meetup.date.toLocaleTimeString() : '';
    const startDate = meetup? meetup.date.toLocaleDateString() : '';

    if (small) {
        return (
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none mr-3"
            >
                {meetup ?
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={200}
                        src={meetup.image}
                        width={200}
                    />
                    : <div className="p-4 h-[200px] w-[200px]"><Skeleton className=" rounded-lg w-full h-full "/></div>
                }
                {meetup? <>
                <CardFooter
                    className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">{meetup.title}</p>

                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg"
                            size="sm">
                        View
                    </Button>
                </CardFooter>
                </> : <></>
                }
            </Card>

        );
    }

    return (
        <div className="mb-4 transition-all rounded-m group dark:hover:bg-neutral-800 flex h-auto w-full flex-row rounded-lg p-4 bg-white hover:bg-neutral-50 dark:bg-neutral-900">
            { meetup?
                <img src={ meetup.image } className="hover:opacity-90 flex-0 aspect-square w-32 rounded-lg" />
                : <Skeleton className="aspect-square w-32 rounded-lg" />
            }
            <div className="ml-4 flex flex-grow flex-col justify-between">
                <div className="flex flex-row justify-between">
                    { meetup?
                        <h1 className="text-lg font-bold text-black dark:text-white mr-2">{ meetup.title }</h1>
                        : <Skeleton className="w-full rounded-lg group:hover:bg-neutral-900 mr-4"/>
                    }
                    { creator? <img className="hover:opacity-90 aspect-square w-7 rounded-full" src={ creator.avatar }/>
                        : <Skeleton className="aspect-square w-7 rounded-full" />
                    }
                </div>

                { meetup?
                    <p className="text-base text-neutral-500 dark:text-neutral-400 dark:group-hover:text-neutral-300">{ meetup.description }</p>
                    : <Skeleton className="w-full mt-4 h-7 rounded-lg" />
                }

                <div className="mt-4 flex justify-between flex-row">
                    { meetup?  <>
                        <div className="flex flex-row rounded-full dark:bg-neutral-800 dark:group-hover:bg-neutral-900 bg-neutral-100 dark:border-gray-700 border-gray-200 p-2 border ">
                            <UserGroupIcon className="h-5 w-5 text-neutral-300" />
                            <p className="text-xs mt-0.5 ml-2 font-semibold dark:text-neutral-300 text-neutral-400">{ meetup.attendees.length }</p>
                        </div>
                    </> : <Skeleton className="w-20 h-8 rounded-full" /> }
                    { meetup?  <>
                        <div className="flex flex-row rounded-full dark:bg-neutral-800 dark:group-hover:bg-neutral-900 bg-neutral-100 dark:border-gray-700 border-gray-200 p-2 border ">
                            <ClockIcon className="h-5 w-5 text-neutral-300" />
                            <p className="text-xs ml-2 mt-0.5 font-semibold dark:text-neutral-300 text-neutral-400">{ startTime }</p>
                        </div>
                    </> : <Skeleton className="w-20 h-8 rounded-full" /> }
                    { meetup?  <>
                        <div className="flex flex-row rounded-full dark:bg-neutral-800 dark:group-hover:bg-neutral-900 bg-neutral-100 dark:border-gray-700 border-gray-200 p-2 border ">
                            <CalendarIcon className="h-5 w-5 text-neutral-300" />
                            <p className="text-xs ml-2 mt-0.5 font-semibold dark:text-neutral-300 text-neutral-400">{ startDate }</p>
                        </div>
                    </> : <Skeleton className="w-20 h-8 rounded-full" /> }

                </div>
            </div>
        </div>
    )


}

