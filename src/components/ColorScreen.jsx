//Mostrar color final y los huecos de las porciones a seleccionar
import { useState } from "react";


export default function ColorScreen({colorPack, onChange, slots, setSlots, colorgradient, misatge, setMisatge, checkmate, setcheckmate, count, setCount, thecolor, baraja}){
  
  
  const [bg60, setbg60] = useState('#242424')
  const [bg25, setbg25] = useState('#242424')
  const [bg15, setbg15] = useState('#242424')

  function handleSlots(color) {
    if(mirror60 === null){
      const prevSlots = slots
      setSlots([prevSlots[0],color,prevSlots[2], prevSlots[3]])
      setbg60(color)
    }else if (mirror25 === null){
      const prevSlots = slots
      setSlots([prevSlots[0],prevSlots[1],color , prevSlots[3]])
      setbg25(color)
    } else if (mirror15 === null){
      const prevSlots = slots
      setSlots([prevSlots[0],prevSlots[1], prevSlots[2], color])
      setbg15(color)
    }   
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


  function checkColors(slots, color1, color2, color3){
    if (slots[1] === color1 && slots[2] === color2 && slots[3] === color3){
      setcheckmate(true)
    }else if(slots[1] === color1 && slots[2] === color2){
      setMisatge('60% i 25%')
      const prevSlots = slots
      let x = sumarColores(colorPack,0,1) 
      prevSlots[0] = convertRGBtoHex(x.red, x.green, x.blue)
      setSlots([prevSlots[0],prevSlots[1],prevSlots[2],null])
    }else if(slots[2] === color2 && slots[3] === color3) {
      setMisatge('25% i 15%')
      const prevSlots = slots
      let x = sumarColores(colorPack,1,2) 
      prevSlots[0] = convertRGBtoHex(x.red, x.green, x.blue)
      setSlots([prevSlots[0],null,prevSlots[2],prevSlots[3]])
    }else if (slots[1] === color1 && slots[3] === color3) {
      setMisatge('60% i 15%')
      const prevSlots = slots
      let x = sumarColores(colorPack,0,2) 
      prevSlots[0] = convertRGBtoHex(x.red, x.green, x.blue)
      setSlots([prevSlots[0],prevSlots[1],null,prevSlots[3]])
    }else if(slots[1]=== color1) {
      setMisatge('60%')
      const prevSlots = slots
      setSlots([prevSlots[0],prevSlots[1],null,null])
      if(slots[2]===color3 || slots[3]===color2){
        if(slots[2]===color3 && slots[3]===color2){
          setMisatge('60% correcto, 25% y 15% porcentajes erroneos')
        }else if(slots[2]===color3){
          setMisatge('60% bien, 25% porcentaje erroneo')
        }else {
          setMisatge('60% bien, 15% porcentaje erroneo')
        }
      }
    }else if(slots[2]=== color2){
      setMisatge('25%')
      const prevSlots = slots
      setSlots([prevSlots[0],null,prevSlots[2],null])
      if(slots[1]===color3 || slots[3]===color1){
        if(slots[1]===color3 && slots[3]===color1){
          setMisatge('25% correcto, 60% y 15% porcentajes erroneos')
        }else if(slots[1]===color3){
          setMisatge('25% bien, 60% porcentaje erroneo')
        }else {
          setMisatge('25% bien, 15% porcentaje erroneo')
        }
      }
    }else if(slots[3]=== color3){
      setMisatge('15%')
      const prevSlots = slots
      setSlots([prevSlots[0],null,null,prevSlots[3]])
      if(slots[1]===color2 || slots[2]===color1){
        if(slots[1]===color2 && slots[2]===color1){
          setMisatge('15% correcto, 60% y 25% porcentajes erroneos')
        }else if(slots[1]===color2){
          setMisatge('15% bien, 25% porcentaje erroneo')
        }else {
          setMisatge('15% bien, 60% porcentaje erroneo')
        }
      }
    }else if(slots[1]===color2 || slots[1] === color3) {
      const prevSlots = slots
      setSlots([prevSlots[0],null,null,null])
      setMisatge('60% wrong hole')
    }else if(slots[2]===color1 || slots[2] === color3){
      const prevSlots = slots
      setSlots([prevSlots[0],null,null,null])
      setMisatge('25% wrong hole')
    }else if(slots[3]===color1 || slots[3] === color2){
      const prevSlots = slots
      setSlots([prevSlots[0],null,null,null])
      setMisatge('15% wrong hole')
    }else{
      const prevSlots = slots
      setSlots([prevSlots[0],null,null,null])
    }
    let prevcount = count
    setCount(prevcount-1)   
   }
  
  

  let mirror = slots[0]
  let mirror60 = slots[1]
  let mirror25 = slots[2]
  let mirror15 = slots[3]

  
    const therealcolor = convertRGBtoHex(
      thecolor.red,
      thecolor.green,
      thecolor.blue
    );
    
   
    
    const firstColor = convertRGBtoHex(
      colorPack[baraja[0]].red,
      colorPack[baraja[0]].green,
      colorPack[baraja[0]].blue
    );
    console.log(firstColor)
    const secondColor = convertRGBtoHex(
      colorPack[baraja[1]].red,
      colorPack[baraja[1]].green,
      colorPack[baraja[1]].blue
    );
    const thirdColor = convertRGBtoHex(
      colorPack[baraja[2]].red,
      colorPack[baraja[2]].green,
      colorPack[baraja[2]].blue
    );
    const fourthColor = convertRGBtoHex(
      colorPack[baraja[3]].red,
      colorPack[baraja[3]].green,
      colorPack[baraja[3]].blue
    );
    const fifthColor = convertRGBtoHex(
      colorPack[baraja[4]].red,
      colorPack[baraja[4]].green,
      colorPack[baraja[4]].blue
    );
    const sixthColor = convertRGBtoHex(
      colorPack[baraja[5]].red,
      colorPack[baraja[5]].green,
      colorPack[baraja[5]].blue
    );
    const seventhColor = convertRGBtoHex(
      colorPack[baraja[6]].red,
      colorPack[baraja[6]].green,
      colorPack[baraja[6]].blue
    );
baraja[6]      
    const firtsCheck = convertRGBtoHex(
      colorPack[0].red,
      colorPack[0].green,
      colorPack[0].blue
    );
    const secondCheck = convertRGBtoHex(
      colorPack[1].red,
      colorPack[1].green,
      colorPack[1].blue
    );
    const thirdCheck = convertRGBtoHex(
      colorPack[2].red,
      colorPack[2].green,
      colorPack[2].blue
    );

    

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-5 gap-3">
        <button
          className="text-2xl bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent hover:text-white bg-clip-text mx-5 "
          onClick={onChange}
        >
          New Game
          </button>
          <div className="flex w-full justify-center opacity-0 hover:opacity-100 ">
          <div
            
            style={{ backgroundColor: firtsCheck }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg  `}>
          </div>
          <div
            
            style={{ backgroundColor: secondCheck }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg  `}>
          </div>
          <div
            
            style={{ backgroundColor: thirdCheck }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg  `}>
          </div>
          </div>
          

        <div className="flex flex-row-reverse justify-center items-center gap-2"
        
        >
        <div
          style={{ 
            backgroundColor: therealcolor
          }}
          className={`w-44 md:w-56 h-24 md:h-44 rounded-lg border border-zinc-700`}
        ></div>
        <div
         
          style={{ backgroundColor: mirror }}
          className={`w-44 md:w-56 h-24 md:h-44 rounded-lg border border-zinc-700`}
        ></div>
        
        {(count < 1) ? (
          <div className="w-full h-full absolute bg-gray-800 flex justify-center items-center text-6xl font-bold">
            <div className="flex-col">
            <p className={colorgradient}>Game Over</p>
            <button
            className='text-2xl hover:text-emerald-600 transition-colors'
            onClick={onChange}
            >Next game</button>
            </div>
          </div>
          ) : ''}

          {checkmate === true ? (
          <div 
          style={{ 
            backgroundColor: therealcolor
          }}
          className="w-full h-full absolute  flex justify-center items-center text-6xl font-bold">
          <div className="flex-col">
          <p className={colorgradient}>YOU WIN</p>
          <button
          className='text-2xl hover:text-emerald-600 transition-colors'
          onClick={onChange}
          >Next game</button>
          </div>
        </div>
          ) : ''}
        </div>
        <div className="bg-slate-600 rounded-lg m-2 p-3">
        <button 
         className={`text-2xl uppercase ${colorgradient} hover:text-slate-300`}
          onClick={()=>checkColors(slots,firtsCheck, secondCheck, thirdCheck)}
        >comprobar  </button>
        </div>
        <p>intentos restantes: {count}</p>
        <p>{misatge}</p>
        <div className="flex pt-5 w-2/3 justify-evenly">
        <div>
          <p 
            style={{ 
              backgroundColor: bg60
            }}
          className="text-center rounded-md mb-2">60%</p>
          <div
            
            style={{ backgroundColor: mirror60 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div>  
        <div>
          <p 
            style={{ 
              backgroundColor: bg25
            }}
          className="text-center rounded-md mb-2">25%</p>
          <div
            style={{ backgroundColor: mirror25 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div> 
        <div>
          <p 
          style={{ 
            backgroundColor: bg15
          }}
          className="text-center rounded-md mb-2">15%</p>
          <div
            style={{ backgroundColor: mirror15 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div> 
        </div>
      </div>
      <div className="flex justify-center pt-5 ">
        <div className="md:w-1/2 flex justify-around w-2/3 md:pt-10">
          
          <button
            onClick={() => handleSlots(firstColor)}
            style={{ backgroundColor: firstColor }}
            className={`w-10 md:w-14 h-10 md:h-14 border border-zinc-700 rounded-lg `}
          ></button>

          <button
            onClick={() => handleSlots(secondColor)}
            style={{ backgroundColor: secondColor }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg `}>
          </button>
          <button
            onClick={() => handleSlots(thirdColor)}
            style={{ backgroundColor: thirdColor }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg `}>
          </button>
          {/* <div 
        style={{backgroundColor: fourthColor}}
        className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg`}>
          {colorPack[3].red}.{colorPack[3].green}.{colorPack[3].blue}
        </div> */}
          <button
            onClick={() => handleSlots(fourthColor)}
            style={{ backgroundColor: fourthColor }}
            className={`w-10 md:w-14 h-10 md:h-14 border border-zinc-700 rounded-lg`}>
          </button>
          <button
            onClick={() => handleSlots(fifthColor)}
            style={{ backgroundColor: fifthColor }}
            className={`w-10 md:w-14 h-10 md:h-14 border border-zinc-700 rounded-lg`}> 
          </button>
          <button
            onClick={() => handleSlots(sixthColor)}
            style={{ backgroundColor: sixthColor }}
            className={`w-10 md:w-14 h-10 md:h-14 border border-zinc-700 rounded-lg`}>
           
          </button>
          <button
            onClick={() => handleSlots(seventhColor)}
            style={{ backgroundColor: seventhColor }}
            className={`w-10 md:w-14 h-10 md:h-14 border border-zinc-700 rounded-lg`}>
          </button>
        
        </div>
      </div>
    </>
  );
}
