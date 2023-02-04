import React, {useState, useEffect} from 'react'

let WindowAvailable = typeof window !== 'undefined';

const getDimensionsOfScreen = () => {
    let width = window && window.innerWidth;
    let height = window && window.innerHeight;
    return {
        width,
        height
    };
}


export default function useDimensions(){
    const [dimensions, setDimensions] = useState(getDimensionsOfScreen());
    
    useEffect(() => {
        if(WindowAvailable){
            const resizeScreen = () => {
                setDimensions(getDimensionsOfScreen());
            }
    
            window.addEventListener("resize", resizeScreen);
    
            return () => {
                window.removeEventListener("resize", resizeScreen);
            }
        }
    }, [WindowAvailable])

    return dimensions
}