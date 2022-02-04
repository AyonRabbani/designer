import { useContext, useEffect } from "react";

import { ProductContext } from "./ProductContext";

export default function Editor() {
    const {canvas, initCanvas} = useContext(ProductContext)

    
    useEffect( () => {
        initCanvas()
    }, [])

    return <div className="editor">
        <canvas id="canvas" />
    </div>
}