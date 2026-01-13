import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./Home.css"
import UniformDetail from "../components/UniformDetail"

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="container">
      <header className="header">
        <h2>📅 Kalender Seragam</h2>
        <p>Informasi seragam pegawai</p>
      </header>

      <div className="calendar-wrapper">
        <Calendar
          locale="id-ID"
          value={selectedDate}
          onChange={setSelectedDate}
        />
      </div>

      <UniformDetail date={selectedDate} />
    </div>
  )
}
