"use client";

import { useState } from "react";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";

type Menu = "dashboard" | "round" | "student";

export default function Admin() {
  const [selected, setSelected] = useState<Menu>("dashboard");

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header selected={selected} onSelect={setSelected} />
      {selected === "dashboard" && <DashBoard/>}
      {selected === "round" && <div>회차 관리</div>}
      {selected === "student" && <div>학생 관리</div>}
    </div>
  );
}
