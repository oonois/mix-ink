import { useState } from "react"
import ColorScreen from "./components/ColorScreen"
import Header from "./components/Header"


function App(){
  
  function shuffle(input) {
    input.sort(() => Math.random() - 0.5);
  }
  
  const [baraja, setbaraja] = useState([0,1,2,3,4,5,6])
  
  
  const colorgradient = 'bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent bg-clip-text'
  const [count, setCount] = useState(10)
  const [misatge, setMisatge] = useState('')
  const [checkmate, setcheckmate] = useState(false)
  
  const [slots, setSlots] = useState([null,null,null,null])
  const [colorPack, setColorPack] = useState([])
  const [thecolor, setThecolor] = useState({})

  if(colorPack.length === 0) {
    handleColorPack()
    setSlots([null,null,null,null])
    setMisatge('')
    setcheckmate(false)
    setCount(10)
    console.log(colorPack)
    
  }

  function handleColorPack(){
    let v = 7
    const packcolor = []
    for(let i=0; i <v; i++){
      
      packcolor.push(randomRGB())
    } 
    setColorPack(packcolor)
    setThecolor(createnewColor(packcolor))
  }

  function createnewColor(color){
    
    let redfinal = Math.round(((color[0].red*60)/100)+((color[1].red*25)/100)+((color[2].red*15)/100));
    let greenfinal = Math.round(((color[0].green*60)/100)+((color[1].green*25)/100)+((color[2].green*15)/100));
    let bluefinal = Math.round(((color[0].blue*60)/100)+((color[1].blue*25)/100)+((color[2].blue*15)/100));
    
     const rgbresult = {
      red: redfinal,
      green: greenfinal,
      blue: bluefinal
    }
    console.log(rgbresult)
    const prevbaraja = baraja
    shuffle(prevbaraja)
    setbaraja(prevbaraja)
    return rgbresult
  }

  function refreshPage() {
    window.location.reload(false);
  }

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
  
  return (
    <>
    <Header 
      colorgradient = {colorgradient}
    />
  

    <ColorScreen 
      colorPack = {colorPack}
      slots = {slots}
      setSlots = {setSlots}
      onChange = {refreshPage}
      colorgradient = {colorgradient}
      misatge = {misatge}
      setMisatge = {setMisatge}
      checkmate = {checkmate}
      setcheckmate = {setcheckmate}
      count = {count}
      setCount = {setCount}
      thecolor = {thecolor}
      baraja = {baraja}
      
    />
    </>
  )
}
export default App
