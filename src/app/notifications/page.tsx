"use client";
import {defaultUser} from "@/types";
import Sidebar from "@/app/components/sidebar";

export default function Notifications() {
  return (
      <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
          <Sidebar user={defaultUser} active="notifications"/>
      </div>
  )
}