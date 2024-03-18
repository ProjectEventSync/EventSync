// Attendees
import { Button } from "@nextui-org/react";

export default function CreateMeetupStep3(){
    return (
        <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col rounded-md w-auto h-auto p-4">
                <p className="text-2xl font-bold dark:text-white mb-4">Attendees</p>
                <p className="text-lg dark:text-white">Who can attend your meetup?</p>
                <div className="flex flex-row items-center mt-2">
                    <input type="radio" id="public" name="attendees" value="public"/>
                    <label htmlFor="public" className="ml-2 dark:text-white">Public</label>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <input type="radio" id="private" name="attendees" value="private"/>
                    <label htmlFor="private" className="ml-2 dark:text-white">Private</label>
                </div>
                <Button color="primary" className="mt-2 w-full">Create</Button>
            </div>
        </div>
    )
}