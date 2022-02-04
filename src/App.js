import {Component} from "react";
import {fabric} from "fabric"; 

import SelectProduct from "./SelectProduct";
import Editor from "./Editor";

import{ ProductContext} from "./ProductContext"; 



export default class App extends Component{
    constructor(){
        super(); 

        this.initCanvas = () => {
            this.setState({canvas: new fabric.Canvas('canvas', {
                backgroundColor: 'blue',
                height: 400, 
                width: 400
            })})
        }

        this.saveCanvas = (name) => {
            if(name === "front"){
                console.log("front has been saved to ObjA")
                this.setState({canvasObjA: JSON.stringify(this.state.canvas)})
            }
            if(name === "back"){
                console.log("back has been saved to ObjB")
                this.setState({canvasObjB: JSON.stringify(this.state.canvas)})
            }
        }

        this.state = {
            canvas: '', //canvas is the base canvas that is present at all times
            canvasObjA: '', //front view will be saved to canvasObjA
            canvasObjB: '', //back view will be saved to canvasObjB
            saveCanvas: this.saveCanvas,
            initCanvas: this.initCanvas,  
        }; 
    }
    render(){
        return <div className="appContainer">
        <ProductContext.Provider value={this.state}>
            <SelectProduct />
            <Editor />
        </ProductContext.Provider>
    </div>
    }
}