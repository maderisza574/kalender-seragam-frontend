import React, { useEffect, useState } from "react"

// ❗ FORMAT DATE MANUAL (ANTI UTC BUG)
function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export default function UniformDetail({ date }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUniform() {
      setLoading(true)
      const formattedDate = formatDate(date)

      try {
        const res = await fetch(
          `https://kalender-seragam-backend.vercel.app/api/uniform?date=${formattedDate}`
        )
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUniform()
  }, [date])

  if (loading) return <p className="loading">Memuat data...</p>
  if (!data) return null

  return (
    <div className="card">
      <h3>{data.uniform_name}</h3>
      <p className="date">{data.date}</p>
      <p className="desc">{data.description}</p>

      {data.image_url && (
        <img
          src={data.image_url}
          alt={data.uniform_name}
          className="uniform-image"
        />
      )}
    </div>
  )
}
