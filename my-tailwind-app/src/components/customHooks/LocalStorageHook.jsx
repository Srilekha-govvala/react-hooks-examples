import { useState } from "react";
export function useLocalStorage(key, intialValue){
    const[value,setValue]= useState(()=>{
        const stored= localStorage.getItem(key);
        return stored? JSON.parse(stored):intialValue;
    })
    const updateValue=(newValue)=>{
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }
    return [value, updateValue];
}