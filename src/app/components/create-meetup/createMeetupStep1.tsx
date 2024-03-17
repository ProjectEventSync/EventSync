import React from 'react';
import {Input, Button} from "@nextui-org/react";

export default function CreateMeetupStep1({name, description, setName, setDescription, changeStep} : {name: string, description: string, setName: (name: string) => void, setDescription: (description: string) => void, changeStep: () => void}) {

    return (
        <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col rounded-md w-auto h-auto p-4">
                <p className="text-2xl font-bold dark:text-white mb-4">What's your meetup called?</p>
                <Input placeholder={name || "Meetup name"} className="w-full" onValueChange={setName}/>
                <Input placeholder={description || "Write a short description"} className="w-full mt-2" onValueChange={setDescription}/>
                <Button color="primary" isDisabled={name == "" || description == ""} className="mt-2 w-full" onClick={changeStep}>Continue</Button>
            </div>
        </div>
    );
}