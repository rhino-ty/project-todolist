import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "./Calendar.css"; // css import

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
    </div>
  );
};

export default Calendar;
