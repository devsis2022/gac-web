import { useState } from "react"

export const useGlobal = () => {
    const [state, setState] = useState({});

    const dispatch = (callback) => {
        setState(callback(state))
    }

    return {
        state,
        dispatch
    }
}