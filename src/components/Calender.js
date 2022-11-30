import React, { useState } from "react";
import Calendar from "react-calendar";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">{moment(value).format("YYYY년 MM월 DD일")}</div>
    </div>
  );
}
