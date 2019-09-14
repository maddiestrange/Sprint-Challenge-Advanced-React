import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';

export const useColorChanger = () => {
   
const [color, setColor] = useLocalStorage('color')
useEffect( () => {
    if(color === true){
        document.getElementById('cards').classList.add('color')
    }
    else(
        document.getElementById('cards').classList.remove('color')
    )
    },[color]) 
    
   return [color, setColor]; 
}