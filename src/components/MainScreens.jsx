

export default function Main({colorgradient, onChange, slots, setSlots, count, colorPack, checkmate, setcheckmate, setMisatge, setCount}) {

  
  let mirror = slots[0]
  
  let thecolor = convertRGBtoHex(colorPack[7].red,colorPack[7].green, colorPack[7].blue)
  let firtsColor = convertRGBtoHex(colorPack[0].red,colorPack[0].green, colorPack[0].blue)
  let secondColor = convertRGBtoHex(colorPack[1].red,colorPack[1].green, colorPack[1].blue)
  let thirdColor = convertRGBtoHex (colorPack[2].red,colorPack[2].green, colorPack[2].blue)
  

  function refreshPage() {
    
    window.location.reload(false);
  }

  function colorToHex(color){
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  function convertRGBtoHex(r, g, b){
    return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
  }
  
  function sumarColores(color, a, b) {
    let redfinal = Math.round((color[a].red + color[b].red)/2)
    let greenfinal = Math.round((color[a].green + color[b].green)/2)
    let bluefinal = Math.round((color[a].blue + color[b].blue)/2)
    const rgbresult = {
      red: redfinal,
      green: greenfinal,
      blue: bluefinal
    }
    return rgbresult
  }

  function handleScreentrys(slots, color1, color2, color3) {
    if(slots[1] === color1 && slots[2] === color2 && slots[3] === color3){
      setcheckmate(true)
    }else if(slots[1] === color1 || slots[2] === color2 || slots[3] === color3){

    }


    
    // }else {
    //   const prevSlots = slots
    //   setSlots([prevSlots[1],prevSlots[1],prevSlots[2],prevSlots[3]])
    // }
    // if (slots[2] === null){

    // }else {
    //   const prevSlots = slots
    //   setSlots([prevSlots[2],prevSlots[1],prevSlots[2],prevSlots[3]])
    // }
    // if (slots[3] === null){

    // }else {
    //   const prevSlots = slots
    //   setSlots([prevSlots[3],prevSlots[1],prevSlots[2],prevSlots[3]])
    // }
    
    // if (!slots[2]=== null && !slots[3]=== null){
    //   const prevSlots = slots
    //   let exs = sumarColores(colorPack,1,2)
    //   let exis = convertRGBtoHex(exs.red, exs.green, exs.blue)
    //   setSlots([exis,prevSlots[1],prevSlots[2],prevSlots[3]])
    // }else if(!slots[1]=== null && !slots[2]=== null){
    //   const prevSlots = slots
    //   let exs = sumarColores(colorPack,0,1)
    //   let exis = convertRGBtoHex(exs.red, exs.green, exs.blue)
    //   setSlots([exis,prevSlots[1],prevSlots[2],prevSlots[3]]) 
    // }
    // if(slots[1] === null) {
    //   if(!slots[2]=== null && !slots[3]=== null ){
    //   const prevSlots = slots
    //   let exs = sumarColores(colorPack,1,2)
    //   let exis = convertRGBtoHex(exs.red, exs.green, exs.blue)
    //   setSlots([exis,prevSlots[1],prevSlots[2],prevSlots[3]])
    //   }else if(!slots[2] === null) {
    //     const prevSlots = slots  
    //     setSlots([prevSlots[3],prevSlots[1],prevSlots[2],prevSlots[3]])
    //   }
    //   else if(!slots[3] === null) {
    //     const prevSlots = slots  
    //     setSlots([prevSlots[3],prevSlots[1],prevSlots[2],prevSlots[3]])
    //   }
      
    // }else if(slots[2] === null) {
    //   const prevSlots = slots  
    //   setSlots([prevSlots[1],prevSlots[1],prevSlots[2],prevSlots[3]])
      
    // }else if(slots[3] === null) {
    //   const prevSlots = slots
    //   let exs = sumarColores(colorPack,0,1)
    //   let exis = convertRGBtoHex(exs.red, exs.green, exs.blue)
      
    //   setSlots([exis,prevSlots[1],prevSlots[2],prevSlots[3]])
    // }
    
  }

  function checkColors(slots, color1, color2, color3){
    if(slots[1] === color1 && slots[2] === color2 && slots[3] === color3){
     setcheckmate(true)
    }else if(slots[1] === color1 && slots[2] === color2){
     setMisatge('60% i 25%')
     const prevSlots = slots 
     setSlots([prevSlots[0],prevSlots[1],prevSlots[2],null])
    }else if(slots[1] === color1){
     setMisatge('60%')
     const prevSlots = slots 
     setSlots([prevSlots[0],prevSlots[1],null,null])
    }else if(slots[2] === color2){
     setMisatge('25%')
     const prevSlots = slots 
     setSlots([prevSlots[0],null,prevSlots[2],null])
    }else if(slots[3] === color3){
     setMisatge('15%')
     const prevSlots = slots 
     setSlots([prevSlots[0],null,null,prevSlots[3]])
    }else if(slots[1] === color1 || slots[1] === color2 || slots[1] === color3){
     setMisatge('60% wrong hole')
     const prevSlots = slots 
     setSlots([prevSlots[0],null,null,null])
    }else if(slots[2] === color1 || slots[2] === color2 || slots[2] === color3){
     setMisatge('25% wrong hole')
     const prevSlots = slots 
     setSlots([prevSlots[0],null,null,null])
     return slots[2]
    }else if(slots[3] === color1 || slots[3] === color2 || slots[3] === color3){
     setMisatge('15% wrong hole')
     const prevSlots = slots 
     setSlots([prevSlots[0],null,null,null])
    }else {
     const prevSlots = slots 
     setSlots([prevSlots[0],null,null,null])
    }
    let prevcount = count
    setCount(prevcount-1)  
   }

  return (
    
    <div className={` w-full`}>
      <div className="flex flex-col items-center justify-center pt-5 gap-3">
        <button
          className="text-2xl bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent hover:text-white bg-clip-text m-5 "
          onClick={onChange}
        >
          New Game
        </button>
        <div><p>Intentos restantes: <span className="text-xl font-bold">{count}</span></p></div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-2">
        <div
        style={{ 
          backgroundColor: thecolor
        }}
        className={`w-44 md:w-56 h-24 md:h-44 rounded-lg border  border-zinc-700`}>
        </div>
        <div
          style={{ backgroundColor: mirror }}
          className={`w-32 md:w-56 h-20 md:h-44 rounded-lg border border-zinc-700 `}
          ></div>
          
          {(count < 1) ? (
          <div className="w-full h-full absolute bg-gray-800 flex justify-center items-center text-6xl font-bold">
            <div className="flex-col">
              <p className={colorgradient}>Game Over</p>
              <button
                className='text-2xl hover:text-emerald-600 transition-colors'
                onClick={refreshPage}>Next game</button>
            </div>
          </div>
        ) : ''}

        {checkmate === true ? (
          <div 
            style={{ 
            backgroundColor: thecolor
            }}
            className="w-full h-full absolute  flex justify-center items-center text-6xl font-bold">
              <div className="flex-col">
              <p className={colorgradient}>YOU WIN</p>
              <button
                className='text-2xl hover:text-emerald-600 transition-colors'
                onClick={refreshPage}>Next game</button>
              </div>
          </div>
          ) : ''}

      </div>
      <button
        onClick={()=> checkColors(slots, firtsColor, secondColor, thirdColor)}
      >Comprobar</button>
    </div>
    </div>
  )
}
