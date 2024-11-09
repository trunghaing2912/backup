import { useEffect, useState } from "react"

function Countdown() {

    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown -1)
    //     }, 1000)
    // }, [countdown]) 

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Countdown