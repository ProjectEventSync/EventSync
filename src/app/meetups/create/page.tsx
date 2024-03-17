"use client";
import {defaultUser} from "@/types";
import Sidebar from "@/app/components/sidebar";
import {Input, Button, Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {useState} from "react";
import CreateMeetupStep1 from "@/app/components/create-meetup/createMeetupStep1";
import CreateMeetupStep2 from "@/app/components/create-meetup/createMeetupStep2";
import CreateMeetupStep3 from "@/app/components/create-meetup/createMeetupStep3";

export default function Notifications() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");


    function changeStep(){
        setStep((step) => step + 1);
    }

    return (
        <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
            <Sidebar user={defaultUser} active="notifications"/>
            <div className="flex flex-col h-screen w-full">
                <div className="flex flex-row p-4 justify-between items-center dark:border-stone-800 dark:bg-stone-950 border-b">
                    <h1 className="text-2xl font-bold ">Create a Meetup</h1>
                    <Breadcrumbs>
                        {step > 0 ? <BreadcrumbItem className="text-sm" onClick={()=>setStep(1)}>Name & Description</BreadcrumbItem> : null}
                        { step > 1 ? <BreadcrumbItem onClick={()=>setStep(2)}>Location & Time</BreadcrumbItem> : null}
                        { step > 2 ? <BreadcrumbItem onClick={()=>setStep(2)}>Attendees</BreadcrumbItem> : null}
                    </Breadcrumbs>
                </div>
                <div className=" flex justify-center items-center h-full w-full">
                    {step == 1 ? <CreateMeetupStep1 name={name} description={description} setName={setName} setDescription={setDescription} changeStep={changeStep}/> : null}
                    {step == 2 ? <CreateMeetupStep2 time={time} location={location} date={date} changeStep={changeStep} setLocation={setLocation} setTime={setTime} setDate={setDate}/> : null}
                    {step == 3 ? <CreateMeetupStep3 /> : null}
                </div>
            </div>
        </div>
    )
}