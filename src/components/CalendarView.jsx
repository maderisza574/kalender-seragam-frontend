import React from "react"
import Calendar from "react-calendar"

export default function CalendarView({ selectedDate, onChange }) {
  return (
    <Calendar
      onChange={onChange}
      value={selectedDate}
      locale="id-ID"
    />
  )
}
