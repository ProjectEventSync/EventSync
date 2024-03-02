import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { User } from "@/types";

export default function Sidebar({ active, user } : { active: string, user: User }) {
    return (
        <aside className=" relative h-screen w-24 flex-shrink-0 flex flex-col lg:w-64 border-r border:neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
           <div className="p-2">
               <div className="block lg:hidden dark:hidden">
                   <img src="/sm-logo.png" className="w-20 h-20"/>
               </div>
               <div className="hidden lg:block dark:hidden">
                    <img src="/lg-logo.png" className="w-56 h-56"/>
               </div>
               <div className="hidden dark:lg:block">
                     <img src="/lg-dark-logo.png" className="w-56 h-56"/>
               </div>
               <div className="hidden dark:block dark:lg:hidden ">
                   <img src="/sm-dark-logo.png" className="w-20 h-20"/>
               </div>
           </div>

            <div className=" pt-4 pb-2 w-full">
                <div className={(active == "dashboard" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                    <Squares2X2Icon className={(active == "dashboard" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/>
                    <p className={(active == "dashboard" ? "dark:text-white text-black font-bold dark:hover:text-neutral-100" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Dashboard </p>
                </div>
            </div>
            <div className="py-2 w-full">
                <div className={(active == "notifications" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                    <EnvelopeIcon className={(active == "notifications" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/>
                    <p className={(active == "notifications" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Notifications </p>
                </div>
            </div>

            <div className="py-2 w-full">
                <div className={(active == "meetups" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                    <MapIcon className={(active == "meetups" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/>
                    <p className={(active == "meetups" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Meetups </p>
                </div>
            </div>

            <div className="py-2 w-full">
                <div className={(active == "friends" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                    <UserGroupIcon className={(active == "friends" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/>
                    <p className={(active == "friends" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Friends </p>
                </div>
            </div>

            <div className="py-2 w-full">
                <div className={(active == "settings" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                    <Cog6ToothIcon className={(active == "settings" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/>
                    <p className={(active == "settings" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Settings </p>
                </div>
            </div>


            <div className="absolute bottom-0 border-t p-4 justify-center flex flex-row border-neutral-200 dark:border-neutral-800 w-full max-h-18 dark:bg-neutral-900 bg-neutral-100">
                <img src={user.avatar} className="w-10 h-10 rounded-full "/>
                <div className="hidden lg:block ml-4 flex flex-col h-full overflow-ellipsis">
                    <p className="text-sm text-black dark:text-white font-bold overflow-ellipsis">{user.username}</p>
                    <p className="text-sm text-neutral-400 overflow-ellipsis">{user.email}</p>
                </div>
            </div>
        </aside>
    );
}