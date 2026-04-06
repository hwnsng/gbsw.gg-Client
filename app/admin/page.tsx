"use client";

import { useState } from "react";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import RoundManage from "./components/RoundManage";
import RoundCreateForm from './components/RoundCreactForm';

type Menu = "dashboard" | "round" | "student";

export default function Admin() {
  const [selected, setSelected] = useState<Menu>("dashboard");

  return (
    <div className="w-full h-full flex flex-col">
      <Header selected={selected} onSelect={setSelected} />
      <div className="flex-1 overflow-y-auto">
        {selected === "dashboard" && <DashBoard/>}
        {selected === "round" && <RoundManage/>}
        {selected === "student" && <div>학생 관리</div>}
      </div>
    </div>
  );
}
