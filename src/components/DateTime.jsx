import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' })
  const month = now.toLocaleDateString('en-US', { month: 'short' })
  const day = now.getDate()
  const hours = now.getHours()
  const hour12 = hours % 12 === 0 ? 12 : hours % 12
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  const period = hours >= 12 ? 'pm' : 'am'
  const formatted = `${weekday} ${month} ${day} ${hour12}:${minutes}:${seconds}${period}`

  return <div>{formatted}</div>
}
export default DateTime
