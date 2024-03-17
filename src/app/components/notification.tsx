import React from 'react';
import {Meetup, User, AppNotification} from "@/types";
import {Card, CardBody, Avatar, Button, Chip, CardHeader, Skeleton} from '@nextui-org/react';
import { CalendarIcon } from '@heroicons/react/20/solid';
import getNotificationData from "@/app/components/utils/getNotificationData";


export default function NotificationCard({notification, initiator, meetup} : {notification: AppNotification | null, initiator: User | null, meetup: Meetup | null}){

    let data;
    if (!notification){
        data = null;
    } else {
        data = getNotificationData({notification, initiator, meetup});
    }

    return (
        <Card className="mb-4 min-w-52">
            <CardHeader className="flex flex-row w-full">
                    {notification ?
                        ([1, 2, 3, 11].includes(notification.type) ?
                            (initiator && meetup ?
                                <Avatar src={meetup.image} className="flex-1 w-20 h-20 aspect-square rounded-full"/>
                                : <Skeleton className="flex-1 w-20 h-20 aspect-square rounded-full"/>
                            )
                            : ([4, 5, 6, 7].includes(notification.type) ?
                                (initiator ?
                                    <Avatar  isBordered src={initiator.avatar} radius="full" size="sm" className="flex-shrink-0"/>
                                    : <Skeleton className="w-8 flex-shrink-0 h-8 aspect-square rounded-full"/>
                                )
                                : ([7, 8, 9, 10, 12, 13].includes(notification.type) ?
                                    (meetup ?
                                        <Avatar src={meetup.image} className="w-20 h-20 aspect-square rounded-lg"/>
                                        : <Skeleton className="w-20 h-20 aspect-square rounded-lg"/>
                                    )
                                    : null
                                )
                            )
                        )
                    : <Skeleton className="w-8 h-8 flex-shrink-0 rounded-full"/>
                    }
                    <div className="flex flex-col w-full ml-4">
                        {data? <p className="text-sm font-semibold">{data.title}</p>
                            : <Skeleton className="w-3/5 h-3 mb-1 rounded-md"/>
                        }
                        {data ? <p className="text-xs dark:text-gray-400">{data.message}</p>
                            : <Skeleton className="w-4/5 h-3 rounded-md"/>
                        }
                    </div>
                </CardHeader>
                    <CardBody className="pb-1 pt-0 flex w-full flex-row justify-between">
                        {notification?
                            <Chip
                                startContent={<CalendarIcon width={16} height={16}/>}
                                variant="faded"
                                color="success"
                            >{new Date(notification.date).toLocaleDateString()}</Chip>
                            : <Skeleton className="w-3/5 h-4 rounded-md mb-1.5"/>
                        }

                        {notification?
                        <Button className="mb-1" variant="light" color="primary" size="sm">
                            <p>View</p>
                        </Button> :
                        <Skeleton className="w-1/5 rounded-md h-4 mb-1.5"/>}

                    </CardBody>
        </Card>
    )
}