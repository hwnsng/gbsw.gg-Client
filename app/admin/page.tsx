"use client";

import { useState } from "react";
import Header from "./components/Header";

type Menu = "dashboard" | "round" | "student";

export default function Admin() {
  const [selected, setSelected] = useState<Menu>("dashboard");

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header selected={selected} onSelect={setSelected} />
      {selected === "dashboard" && <div>대시보드</div>}
      {selected === "round" && <div>회차 관리</div>}
      {selected === "student" && <div>학생 관리</div>}
    </div>
  );
}
