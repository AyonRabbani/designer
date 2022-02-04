import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "./ProductContext";
import { fabric } from "fabric";

import mensShirtFront from "./img/shirt_front.png";
import mensShirtBack from "./img/shirt_back.jpg";

export default function SelectProduct() {
    const {canvas, canvasObjA, canvasObjB, saveCanvas} = useContext(ProductContext)
    const [name, setName] = useState('')

    function handleView(e, product){
        var view = e.target.name

        if(view !== name){
            saveCanvas(name)
        }

        if(view === 'front' && canvasObjA){
            setName(view)
            canvas.loadFromJSON(canvasObjA)
        } else if (view === 'back' && canvasObjB){
            setName(view)
            canvas.loadFromJSON(canvasObjB)
        } else{
            canvas.clear()
            canvas.setBackgroundImage(product, () => {
            canvas.backgroundImage.scaleToWidth(400)
            canvas.backgroundImage.scaleToHeight(400)
            canvas.renderAll()
            saveCanvas(view)
            setName(view)
        })}   
    }

    function addRect(){
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
          });
          
          // "add" rectangle onto canvas
          canvas.add(rect);
          canvas.renderAll();
          saveCanvas(name)

    };

    return <div>
        Select Product
        <div>
            <img alt="product" style={{height: 200}} src={mensShirtFront}
            name="front" onClick={(e) => {handleView(e, mensShirtFront)}}/>
            <img alt="product" style={{height: 200}} src={mensShirtBack}
            name="back" onClick={(e) => {handleView(e, mensShirtBack)}}/>
        </div>
        <button onClick={() => addRect()}>add rectangle</button>
    </div>
}