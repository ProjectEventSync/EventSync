import { XMarkIcon } from "@heroicons/react/20/solid";
import {User} from "@/types";
import { useRouter } from "next/navigation";

export default function UserTooltip({ hideTooltip, user } : { hideTooltip: () => void, user: User }){
    const router = useRouter();


    return (
      <div className="z-10 absolute bottom-16 left-4 w-32 h-20 bg-white dark:bg-neutral-900 border border-neutral-200 flex flex-col dark:border-neutral-800 rounded-lg shadow-lg">
          <div className="flex flex-row justify-between">
              <a href={'/users/'+user._id}><p className="mt-4 ml-4 dark:hover:text-neutral-400 dark:text-neutral-500">Profile</p></a>
              <XMarkIcon onClick={hideTooltip} className="mt-2 ml-2 mr-2 h-5 w-5 hover:text-neutral-300 text-neutral-400"/>
          </div>
          <p onClick={() => router.push('/signout')} className="ml-4 mb-4 hover:text-red-600 text-red-500">Sign out</p>
      </div>
  )
}