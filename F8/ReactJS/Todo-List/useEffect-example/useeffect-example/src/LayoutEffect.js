import { useEffect, useState, useLayoutEffect } from "react"

/*
useEffect
1. Cập nhật lại State
2. Cập nhật Dom (mutated)
3. Render lại UI
4. Gọi Cleanup nếu deps thay đổi
5. Gọi useEffect callback
*/


/*
useLayoutEffect
1. Cập nhật lại State
2. Cập nhật DOM (mutated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI
*/

// khác nhau ở trình tự làm việc của 2 hook

function LayoutEffect() {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if (count > 3)
    //         setCount(0)
    // }, [count])
    // khi sử dụng useEffect sẽ gặp vấn đề khi set về 0 sẽ bị nháy nháy,
    // nguyên nhân do khi click sẽ count lên 4 rồi mới set ngược về 0 nên xảy ra nháy nháy
    // vấn đề do tình tự làm việc của useEffect


    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default LayoutEffect