//Side Effects

// Events: Add / remove event listener
// Observer pattern: Subcribe / unsubcribe
// CLosure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / Unmounted
// ===
// Call API

import { useEffect, useState } from "react";

/*
1. Update DOM
    - F8 Blog Title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubcribe
    - Clear timer
*/

/*
1. useEffect(callback)
    - Gọi callback mỗi khi component re-render
    - Gọi callback sau khi component thêm element vào DOM
2. useEffect(callback, [])
    - Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback, [dependencies])
    - Callback sẽ được gọi lại mỗi khi dependencies thay đổi
*/

//1. Callback luôn được gọi sau khi component mounted
//2. Cleanup function luôn được gọi trước khi component unmounted
//3. Cleanup function luôn được gọi trước khi callback được gọi (trừ làn mounted)

const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {setPosts(posts)});
    }, [type])

    useEffect(() => {

        const handleScroll =  () => {
            if(window.scrollY >= 200) {
                setShowGoToTop(true)
                console.log('set state')
            } else {    
                setShowGoToTop(false)
            }

            // setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener')


        // Cleanup function
        return() => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener...')
        }
    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {color: '#fff', backgroundColor: '#333'} : []}
                    onClick={() => setType(tab)}
                    >
                        {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20
                    }}>
                    Go To Top
                </button>
            )}    
        </div>
    )
}

export default Content;