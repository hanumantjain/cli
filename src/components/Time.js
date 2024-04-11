import React, { useEffect, useState } from 'react'

const Time = () => {
    var[date, setDate] = useState(new Date())
    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()),1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })
  return (
    <div>
        <p>{weekday[date.getDay()] + ' ' + `${date.getHours()}`.padStart(2, '0') + ':' + `${date.getMinutes()}`.padStart(2, '0')}</p>
        
    </div>
  )
}

export default Time