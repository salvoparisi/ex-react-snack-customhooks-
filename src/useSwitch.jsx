import { useState } from "react";
export default function useSwitch() {
    const [isOn, setIsOn] = useState(false)

    function toggle() {
        if (isOn) {
            setIsOn(false)
        } else {
            setIsOn(true)
        }
    }
    return { isOn, toggle }
}