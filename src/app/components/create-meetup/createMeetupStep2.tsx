import React from 'react';
import {Input, Button} from "@nextui-org/react";

// Date, time, location
export default function CreateMeetupStep2(){
    return (
        <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col rounded-md w-auto h-auto p-4">
                <p className="text-2xl font-bold dark:text-white mb-4">Date, time, location</p>
                <Input placeholder="Date" className="w-full" />
                <Input placeholder="Time" className="w-full mt-2" />
                <Input placeholder="Location" className="w-full mt-2" />
                <Button color="primary" className="mt-2 w-full">Continue</Button>
            </div>
        </div>
    )
}