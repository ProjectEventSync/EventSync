// TODO: Complete the Settings component
"use client";
import Sidebar from "@/app/components/sidebar";
import {defaultUser} from "@/types";

export default function Settings() {
  return (
      <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
          <Sidebar user={defaultUser} active="settings"/>
      </div>
  )
}