"use client";
import {defaultUser} from "@/types";
import Sidebar from "@/app/components/sidebar";
import {Input, Button} from "@nextui-org/react";
import {useState} from "react";
import CreateMeetupStep1 from "@/app/components/create-meetup/createMeetupStep1";
import CreateMeetupStep2 from "@/app/components/create-meetup/createMeetupStep2";

export default function Notifications() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function changeStep(){
        setStep((step) => step + 1);
    }

    return (
        <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
            <Sidebar user={defaultUser} active="notifications"/>
            <div className="flex flex-col h-screen w-full">
                <h1 className="text-2xl font-bold p-4 border-b dark:border-stone-800 dark:bg-stone-950">Create a Meetup</h1>
                <div className=" flex justify-center items-center h-full w-full">
                    {step == 1 ? <CreateMeetupStep1 name={name} description={description} setName={setName} setDescription={setDescription} changeStep={changeStep}/> : null}
                    {step == 2 ? <CreateMeetupStep2/> : null}
                </div>
            </div>
        </div>
    )
}