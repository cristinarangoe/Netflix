import React from "react"
import ReactGa from "react-ga"

const useEventTracker = (category = "Event Category") =>{
    const trackEvent = (action = "action", label = "label") => {
        ReactGa.event({category, action, label}
            
        )
    }
    return trackEvent;  
}

export default useEventTracker;