import { useState } from "react"
function useCustomPointer(emoji) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const updatePosition = (event) => {
        setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", updatePosition)


    const customPointer = <p style={{ position: "absolute", left: position.x - 5, top: position.y - 20 }}>{emoji}</p>
    return { customPointer }
}

export default useCustomPointer