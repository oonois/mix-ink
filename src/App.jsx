import { useState } from "react"
import ColorScreen from "./components/ColorScreen"
import Header from "./components/Header"


function App(){

  function randomRGB(){
    let newred = Math.floor(Math.random() * 256)
    let newgreen = Math.floor(Math.random() * 256)
    let newblue = Math.floor(Math.random() * 256)
    const newRGB = {
      red: newred,
      green: newgreen,
      blue: newblue
    }
    return newRGB
  }
  
  const [slots, setSlots] = useState([null,null,null,null])
  const [colorPack, setColorPack] = useState([])
  if(colorPack.length === 0) {
    handleColorPack()
    setSlots([null,null,null,null])
  }

  const colorgradient = 'bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent bg-clip-text'

  function handleColorPack(){
    const color1 = randomRGB()
    const color2 = randomRGB()
    const color3 = randomRGB()
    const color4 = randomRGB()
    const color5 = randomRGB()
    const color6 = randomRGB()
    const color7 = randomRGB()
    const colorResult = createnewColor(color1,color2,color3)
    //const color5 = (color1 + randomRGB())/2
    setSlots([null,null,null,null])
    const packcolor = [
      color1, color2, color3, color4, color5, color6, color7, colorResult
    ]
    setColorPack(packcolor)
    console.log(packcolor)
    return packcolor
  }


  function createnewColor(col1,col2,col3){
    // let redfinal = Math.round(((col1.red*50)/100)+((col2.red*25)/100)+((col3.red*19)/100)+((col4.red*6)/100));
    // console.log(redfinal)
    // let greenfinal = Math.round(((col1.green*50)/100)+((col2.green*25)/100)+((col3.green*19)/100)+((col4.green*6)/100));
    // console.log(greenfinal)
    // let bluefinal = Math.round(((col1.blue*50)/100)+((col2.blue*25)/100)+((col3.blue*19)/100)+((col4.blue*6)/100));
    // console.log(bluefinal)
    let redfinal = Math.round(((col1.red*60)/100)+((col2.red*25)/100)+((col3.red*15)/100));
    let greenfinal = Math.round(((col1.green*60)/100)+((col2.green*25)/100)+((col3.green*15)/100));
    let bluefinal = Math.round(((col1.blue*60)/100)+((col2.blue*25)/100)+((col3.blue*15)/100));
    console.log(redfinal)
    console.log(greenfinal)
    console.log(bluefinal)
     const rgbresult = {
      red: redfinal,
      green: greenfinal,
      blue: bluefinal
    }
    console.log(rgbresult)
    return rgbresult
  }
  
  return (
    <>
    <Header 
      colorgradient = {colorgradient}
    />
    <ColorScreen 
      colorPack = {colorPack}
      slots = {slots}
      setSlots = {setSlots}
      onChange = {handleColorPack}
      colorgradient = {colorgradient}
    />
    </>
  )
}
export default App
