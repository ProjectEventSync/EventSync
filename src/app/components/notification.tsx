import React from 'react';
import {Meetup, User, AppNotification} from "@/types";
import {Card, CardBody, Avatar, Button, Badge, Skeleton} from '@nextui-org/react';
import getNotificationData from "@/app/components/utils/getNotificationData";


export default function NotificationCard({notification, initiator, meetup} : {notification: AppNotification | null, initiator: User | null, meetup: Meetup | null}){

    let data;
    if (!notification){
        data = null;
    } else {
        data = getNotificationData({notification, initiator, meetup});
    }

    return (
        <Card className="mb-4">
            <CardBody>
                <div className="flex flex-row space-x-4">
                    {notification ?
                        ([1, 2, 3, 11].includes(notification.type) ?
                            (initiator && meetup ?
                                <Avatar src={meetup.image} className="w-20 h-20 aspect-square rounded-full"/>
                                : <Skeleton className="w-20 h-20 aspect-square rounded-full"/>
                            )
                            : ([4, 5, 6, 7].includes(notification.type) ?
                                (initiator ?
                                    <Avatar src={initiator.avatar} className="w-20 h-20 aspect-square rounded-lg"/>
                                    : <Skeleton className="w-20 h-20 aspect-square rounded-lg"/>
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
                    : <Skeleton className="w-20 h-20 rounded-full"/>
                    }
                    <div className="flex flex-col w-full justify-between">
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex flex-col">
                                {data? <p className="text-base font-semibold">{data.title}</p>
                                    : <Skeleton className="w-full h-5"/>
                                }
                                {data ? <p className="text-xs dark:text-gray-400">{data.message}</p>
                                    : <Skeleton className="w-full h-3"/>
                                }
                            </div>
                            {notification ? <Badge color="success" className="text-xs">{new Date(notification.date).toLocaleDateString()}</Badge>
                                : <Skeleton className="w-20 h-6"/>
                            }
                        </div>
                        <div className="flex flex-row w-full justify-end">
                            <Button color="primary" variant="flat" className="mr-2">
                                <p>View</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}