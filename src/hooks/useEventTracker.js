import React from "react"
import ReactGa from "react-ga4"

const useEventTracker = (category = "Event") =>{
    const trackEvent = (action = "action", label = "label") => {
        ReactGa.event({category, action, label}
            
        )
    }
    return trackEvent;  
}

export default useEventTracker;