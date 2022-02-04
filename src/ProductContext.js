import { createContext } from "react";


export const ProductContext = createContext({
    canvas: '', 
    cavnasObjA: '', 
    cavnasObjB: '', 
    initCanvas: () => {}, 
    saveCanvas: () => {}, 
})