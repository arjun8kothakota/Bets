import React, { useRef, useState, useEffect } from 'react'
import { db } from '../firebase'
import Button from 'react-bootstrap/Button'

const Word = () => {
    const [count, setCount] = useState(0)
    const [timerDays, setTimerDays] = useState("00")
    const [timerHours, setTimerHours] = useState("00")
    const [timerMinutes, setTimerMinutes] = useState("00")
    const [timerSeconds, setTimerSeconds] = useState("00")

    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date("December 9, 2021 00:00:00").getTime()
        
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)


            if (distance < 0) {
                // Stop timer
                clearInterval(interval.current)
            } else {
                // Update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
        
    }

    const add = () => {
        if (count < 10) {
            db.ref('users/' + 3).set({
                id: 3,
                name: "Arjun",
                count: count + 1
            })
            setCount(count + 1)
        }
    }

    const del = () => {
        if (count > 0) {
            db.ref('users/' + 3).set({
                id: 3,
                name: "Arjun",
                count: count - 1
            })
            setCount(count - 1)
        }
    }

    useEffect(() => {
        db.ref().child('users').on('value', snapshot => {
            if (snapshot.val() != null) {
                setCount(snapshot.val()[3]["count"])
            }
        })
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    }, [])

    return (
        <div className="wordBg">   
            <h1 className="text-center mt-5">Number of times I can say F*ck:</h1>
            <h2 className="text-center mt-5">{ count }</h2>
            <div className="flex-parent jc-center mt-5">
                <Button className="block word-button left-btn" variant="light" size="sm" onClick={() => add()}>Add</Button>
                <Button className="block word-button" variant="light" size="sm" onClick={() => del()}>Delete</Button>
            </div>
            <section className="timer">
                <div>
                    <section>
                        <p>{ timerDays }</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{ timerHours }</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{ timerMinutes }</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{ timerSeconds }</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Word