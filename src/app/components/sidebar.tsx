import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { User } from "@/types";

export default function Sidebar({ active, user } : { active: string, user: User }) {
    return (
        <aside className="relative h-screen w-24 flex-shrink-0 flex flex-col lg:w-64 border-r border:neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
            <div className=" pt-4 pb-2 w-full">
                <div className={(active == "dashboard" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4"}>
                    <Squares2X2Icon className={(active == "dashboard" ? "text-blue-700" : "text-neutral-300") + " w-6 h-6"}/>
                    <p className={(active == "dashboard" ? "text-black  font-bold" : "text-neutral-400") + " ml-4 text-sm"}> Dashboard </p>
                </div>
            </div>
            <div className="py-2 w-full">
                <div className={(active == "notifications" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4"}>
                    <EnvelopeIcon className={(active == "notifications" ? "text-blue-700" : "text-neutral-300") + " w-6 h-6"}/>
                    <p className={(active == "notifications" ? "text-black font-bold" : "text-neutral-400") + " ml-4 text-sm "}> Notifications </p>
                </div>
            </div>

            <div className="absolute bottom-0 border-t p-4 flex flex-row border-neutral-200 w-full max-h-18 bg-neutral-100">
                <img src={user.avatar} className="w-10 h-10 rounded-full "/>
                <div className="ml-4 flex flex-col h-full overflow-ellipsis">
                    <p className="text-sm text-black font-bold overflow-ellipsis">{user.username}</p>
                    <p className="text-sm text-neutral-400 overflow-ellipsis">{user.email}</p>
                </div>
            </div>
        </aside>
    );
}