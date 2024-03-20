import React from 'react';
import {Input, Button} from "@nextui-org/react";
import DatePicker from "@/app/components/datepicker";
// Date, time, location
export default function CreateMeetupStep2({date, time, location, setDate, setTime, setLocation, changeStep} : {date: Date, time: string, location: string, setDate: (date: Date) => void, setTime: (time: string) => void, setLocation: (location: string) => void, changeStep: () => void}) {{}
    return (
        <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col rounded-md w-auto h-auto p-4">
                <p className="text-2xl font-bold dark:text-white mb-4">Date, time, location</p>
                <DatePicker date={date} setDate={setDate}/>
                <Input placeholder={time || "Time"} className="w-full mt-2" onValueChange={setTime}/>
                <Input placeholder={location || "Location"} className="w-full mt-2" onValueChange={setLocation}/>
                <Button isDisabled={!location || !date || !time} onClick={changeStep} color="primary" className="mt-2 w-full">Continue</Button>
            </div>
        </div>
    )
}