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
                    <Skeleton isLoaded={!!meetup} className="rounded-lg">
                        <Image src={meetup?.image} alt="Meetup Image" width={130} height={130} className=" rounded-lg aspect-square" />
                    </Skeleton>

                    <div className="flex flex-col w-full justify-between">
                        <div className="flex flex-col"><div className="flex flex-row w-full justify-between">
                            <div className="flex flex-col w-full">
                                <Skeleton isLoaded={!!meetup} className={!meetup ? "rounded-md w-3/5 h-4 mb-1" : ""}>
                                    <p className="text-base w-full font-semibold">{meetup?.title}</p>
                                </Skeleton>

                                <Skeleton isLoaded={!!meetup} className={!meetup ? "rounded-md w-4/5 h-4" : ""}>
                                    <p className="text-xs w-full dark:text-gray-400">{meetup?.description}</p>
                                </Skeleton>
                            </div>

                            <Skeleton isLoaded={!!creator} className={!creator? "w-6 h-6 rounded-full" : ""}></Skeleton>
                            {creator ?<Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 text-tiny"  /> : null}
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

