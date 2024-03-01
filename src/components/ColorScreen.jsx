//Mostrar color final y los huecos de las porciones a seleccionar
import { useState } from "react";


function barajarColores(array) {
  array.sort(() => Math.random() - 0.5);
}
let mezcla = [0,1,2,3,4,5,6];
barajarColores(mezcla)


export default function ColorScreen({colorPack, onChange, slots, setSlots, colorgradient, misatge, setMisatge, checkmate, setcheckmate, count, setCount}){
  

  function handleSlots(color) {
   
    if(mirror60 === null){
      const prevSlots = slots
      setSlots([prevSlots[0],color,prevSlots[2], prevSlots[3]])
    }else if (mirror25 === null){
      const prevSlots = slots
      setSlots([prevSlots[0],prevSlots[1],color , prevSlots[3]])
    } else if (mirror15 === null){
      const prevSlots = slots
      setSlots([prevSlots[0],prevSlots[1], prevSlots[2], color])
    }   


    // if(mirror25 === null){
    //   console.log('mirror60')
    //   mirror60 = color
    // }else if(mirror15 === null){
    //   console.log('suma2')
    //   mirror15 = color
    //   mirror = '' 
    // }
  }
  
  function colorToHex(color){
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  function convertRGBtoHex(r, g, b){
    return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
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
  
  

  let mirror = slots[0]
  let mirror60 = slots[1]
  let mirror25 = slots[2]
  let mirror15 = slots[3]

  
    const thecolor = convertRGBtoHex(
      colorPack[7].red,
      colorPack[7].green,
      colorPack[7].blue
    );
    const firstColor = convertRGBtoHex(
      colorPack[mezcla[0]].red,
      colorPack[mezcla[0]].green,
      colorPack[mezcla[0]].blue
    );
    const secondColor = convertRGBtoHex(
      colorPack[mezcla[1]].red,
      colorPack[mezcla[1]].green,
      colorPack[mezcla[1]].blue
    );
    const thirdColor = convertRGBtoHex(
      colorPack[mezcla[2]].red,
      colorPack[mezcla[0]].green,
      colorPack[mezcla[2]].blue
    );
    const fourthColor = convertRGBtoHex(
      colorPack[mezcla[3]].red,
      colorPack[mezcla[3]].green,
      colorPack[mezcla[3]].blue
    );
    const fifthColor = convertRGBtoHex(
      colorPack[mezcla[4]].red,
      colorPack[mezcla[4]].green,
      colorPack[mezcla[4]].blue
    );
    const sixthColor = convertRGBtoHex(
      colorPack[mezcla[5]].red,
      colorPack[mezcla[5]].green,
      colorPack[mezcla[5]].blue
    );
    const seventhColor = convertRGBtoHex(
      colorPack[mezcla[6]].red,
      colorPack[mezcla[6]].green,
      colorPack[mezcla[6]].blue
    );
      
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

    

    function refreshPage() {
    
      window.location.reload(false);
    }

    
    
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-5 gap-3">
        <button
          className="text-2xl bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent hover:text-white bg-clip-text m-5 "
          onClick={onChange}
        >
          New Game
        </button>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-2"
        
        >
        <div
          style={{ 
            backgroundColor: thecolor
          }}
          className={`w-44 md:w-56 h-24 md:h-44 rounded-lg border border-zinc-700`}
        ></div>
        <button
          onClick={()=>checkColors(slots,firtsCheck, secondCheck, thirdCheck)}
          style={{ backgroundColor: mirror }}
          className={`w-32 md:w-56 h-20 md:h-44 rounded-lg border border-zinc-700`}
        >intentos {count} <p>{misatge}</p></button>
        {(count < 1) ? (
          <div className="w-full h-full absolute bg-gray-800 flex justify-center items-center text-6xl font-bold">
            <div className="flex-col">
            <p className={colorgradient}>Game Over</p>
            <button
            className='text-2xl hover:text-emerald-600 transition-colors'
            onClick={refreshPage}
            >Next game</button>
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
          onClick={refreshPage}
          >Next game</button>
          </div>
        </div>
          ) : ''}
        </div>
        <div className="flex pt-5 w-2/3 justify-evenly">
        <div>
          <p 
          
          className="text-center">60%</p>
          <div
            
            style={{ backgroundColor: mirror60 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div>  
        <div>
          <p className="text-center">25%</p>
          <div
            style={{ backgroundColor: mirror25 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div> 
        <div>
          <p className="text-center">15%</p>
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
          >
            {/* {colorPack[0].red}.{colorPack[0].green}.{colorPack[0].blue} */}
          </button>
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
