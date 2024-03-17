import { UserGroupIcon, ClockIcon, CalendarIcon } from "@heroicons/react/20/solid";
import { Meetup, User } from "@/types";
import {Button, Avatar, Skeleton, Image} from "@nextui-org/react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";


export default function MeetupCard({ meetup, creator, small }: { meetup: Meetup | null, creator: User | null, small: boolean}){

    const startTime = meetup? new Date(meetup.date).toLocaleTimeString() : '';
    const startDate = meetup? new Date(meetup.date).toLocaleDateString() : '';

    return (
        <Card className="max-w-600px mb-4">
            <CardBody>
                <div className="flex flex-row space-x-4">
                    {meetup?
                        <Image isBlurred src={meetup.image} alt="Meetup Image" width={160} height={160} className=" rounded-lg aspect-square" /> :
                        <Skeleton className="rounded-lg h-40 w-40 aspect-square "/>
                    }
                    <div className="flex flex-col w-full justify-between">
                        <div className="flex flex-col"><div className="flex flex-row w-full justify-between">
                            <div className="flex flex-col w-full">
                                {meetup? <p className="text-base font-semibold">{meetup.title}</p> :
                                    <Skeleton className="w-full h-5 rounded-md px-2"/>
                                }
                                {meetup?
                                    <p className="text-xs dark:text-gray-400">{meetup.description}</p> :
                                    <Skeleton className="w-full h-3 mt-1 rounded-md px-2"/>
                                }
                            </div>
                            {creator?
                                <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 text-tiny"  />
                                : <Skeleton className="rounded-full w-6 h-6 ml-2" />
                            }
                        </div>
                            <Divider className="mt-1"/>
                        </div>

                        <div className="flex flex-row w-full justify-end">
                            <Button color="primary" variant="flat" className="mr-2">
                                <p>Edit</p>
                            </Button>
                            <Button color="primary">
                                <p>View</p>
                            </Button>

                        </div>

                    </div>
                </div>
            </CardBody>
        </Card>

    );
}

