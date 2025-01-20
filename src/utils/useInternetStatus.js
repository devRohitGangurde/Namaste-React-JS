import React, { useState ,useEffect} from 'react'

const useInternetStatus = () => {
 
const [isOnline,setIsOnline] = useState(true)


useEffect(()=>{
    window.addEventListener('online', ()=> setIsOnline(true))
    window.addEventListener('offline', ()=> setIsOnline(false) )

    return ()=>{
        window.removeEventListener('online', ()=> setIsOnline(true))
        window.removeEventListener('offline', ()=> setIsOnline(false) )
    }
},[])

    return isOnline;
}

export default useInternetStatus