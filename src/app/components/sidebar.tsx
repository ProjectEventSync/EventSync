import { BellIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { User } from "@/types";
import UserTooltip from "@/app/components/userTooltip";
import {useState} from "react";
import { Skeleton } from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function Sidebar({ active, user } : { active: string, user: User | null}) {
    let [tooltip, setTooltip] = useState(false);
    const router = useRouter();

    function showUserTooltip(){
        setTooltip(true);
    }

    function hideUserTooltip(){
        setTooltip(false);
    }

    return (
        <aside className=" hidden md:block relative justify-between lg:justify-normal h-screen w-24 flex-shrink-0 flex flex-col lg:w-64 border-r border:neutral-200 dark:border-neutral-800 bg-stone-50 dark:bg-gray-950">
           <div className="p-2">
               <div className="block lg:hidden dark:hidden">
                   <img src="/sm-logo.png" className="w-20 h-20"/>
               </div>
               <div className="hidden lg:block dark:hidden">
                    <img src="/lg-logo.png" className=""/>
               </div>
               <div className="hidden dark:lg:block">
                     <img src="/lg-dark-logo.png" className="w-56 h-56"/>
               </div>
               <div className="hidden dark:block dark:lg:hidden ">
                   <img src="/sm-dark-logo.png" className="w-20 h-20"/>
               </div>
           </div>
            <div>
                <div className=" pt-4 pb-2 w-full">
                    <div className={(active == "dashboard" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                        <a className="block lg:hidden" onClick={() => router.push('/dashboard')}><Squares2X2Icon className={(active == "dashboard" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/></a>
                        <Squares2X2Icon className={(active == "dashboard" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " hidden lg:block w-6 h-6"}/>
                        <a onClick={() => router.push('/dashboard')}><p className={(active == "dashboard" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Dashboard </p></a>
                    </div>
                </div>
                <div className="py-2 w-full">
                    <div className={(active == "notifications" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                        <a className="block lg:hidden" onClick={() => router.push('/notifications')}><BellIcon className={(active == "notifications" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/></a>
                        <BellIcon className={(active == "notifications" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " hidden lg:block w-6 h-6"}/>
                        <a onClick={() => router.push('/notifications')}><p className={(active == "notifications" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Notifications </p></a>
                    </div>
                </div>

                <div className="py-2 w-full">
                    <div className={(active == "meetups" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                        <a className="block lg:hidden" onClick={() => router.push('/meetups')}><MapIcon className={(active == "meetups" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/></a>
                        <MapIcon className={(active == "meetups" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " hidden lg:block w-6 h-6"}/>
                        <a onClick={() => router.push('/meetups')}><p className={(active == "meetups" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Meetups </p></a>
                    </div>
                </div>

                <div className="py-2 w-full">
                    <div className={(active == "friends" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                        <a className="block lg:hidden" onClick={() => router.push('/friends')}><UserGroupIcon className={(active == "friends" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/></a>
                        <UserGroupIcon className={(active == "friends" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " hidden lg:block w-6 h-6"}/>
                        <a onClick={() => router.push('/friends')}><p className={(active == "friends" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Friends </p></a>
                    </div>
                </div>

                <div className="py-2 w-full">
                    <div className={(active == "settings" ? "border-r-2 border-blue-600 rounded-sm " : " ") + "flex flex-row px-4 ml-4 lg:ml-2"}>
                        <a className="block lg:hidden" onClick={() => router.push('/settings')}><Cog6ToothIcon className={(active == "settings" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " w-6 h-6"}/></a>
                        <Cog6ToothIcon className={(active == "settings" ? "text-blue-700 hover:text-blue-500 lg:hover:text-blue-700" : "dark:text-neutral-500 hover:text-neutral-500 lg:hover:text-neutral-400 dark:hover:text-neutral-400 lg:dark:hover:text-neutral-500 text-neutral-400") + " hidden lg:block w-6 h-6"}/>
                        <a onClick={() => router.push('/settings')}><p className={(active == "settings" ? "dark:text-white text-black hover:text-neutral-600 font-bold dark:hover:text-neutral-300" : "text-neutral-400 dark:hover:text-neutral-300 hover:text-neutral-500") + " hidden lg:block ml-4 text-sm mt-0.5"}> Settings </p></a>
                    </div>
                </div>
            </div>



            {tooltip && user && <UserTooltip user={user} hideTooltip={hideUserTooltip} />}


            <div className="lg:absolute lg:bottom-0 border-t p-4 justify-center flex flex-row border-neutral-200 dark:border-neutral-800 w-full max-h-18 dark:bg-neutral-900 bg-neutral-100">
                { user? <img src={user.avatar} onClick={showUserTooltip} className="w-10 h-10 rounded-full hover:opacity-90"/>
                    : <Skeleton className="w-10 h-10 rounded-full"/>
                }
                <div className="hidden lg:block ml-4 flex flex-col h-full overflow-ellipsis">
                    {user ? <p className="text-sm text-black dark:text-white font-bold overflow-ellipsis">{user.username}</p>
                        : <Skeleton className="w-36 rounded-lg mb-1 mt-0.5 h-4"/>
                    }
                    {user ? <p className="text-sm text-neutral-400 overflow-ellipsis">{user.email}</p>
                        : <Skeleton className="w-36 rounded-lg h-4"/>
                    }
                </div>
            </div>
        </aside>
    );
}