//Mostrar color final y los huecos de las porciones a seleccionar

export default function ColorScreen({colorPack, onChange}){
  function colorToHex(color){
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  function convertRGBtoHex(r, g, b){
    return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
  }

  const thecolor = convertRGBtoHex(
    colorPack[4].red,
    colorPack[4].green,
    colorPack[4].blue
  );
  const firstColor = convertRGBtoHex(
    colorPack[0].red,
    colorPack[0].green,
    colorPack[0].blue
  );
  const secondColor = convertRGBtoHex(
    colorPack[1].red,
    colorPack[1].green,
    colorPack[1].blue
  );
  const thirdColor = convertRGBtoHex(
    colorPack[2].red,
    colorPack[2].green,
    colorPack[2].blue
  );
  const fourthColor = convertRGBtoHex(
    colorPack[3].red,
    colorPack[3].green,
    colorPack[3].blue
  );
  console.log(colorPack[0].red);

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-5 gap-3">
        <button
          className="text-2xl bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent hover:text-white bg-clip-text m-5"
          onClick={onChange}
        >
          New Game
        </button>

        <div
          style={{ backgroundColor: thecolor }}
          className={`w-32 md:w-56 h-20 md:h-44 rounded-lg border border-zinc-700`}
        ></div>
      </div>
      <div className="flex justify-center pt-5 ">
        <div className="md:w-1/2 flex justify-around w-2/3 md:pt-10">
          <div
            style={{ backgroundColor: firstColor }}
            className={`w-10 md:w-14 h-10 md:h-14 border border-zinc-700 rounded-lg `}
          >
            {colorPack[0].red}.{colorPack[0].green}.{colorPack[0].blue}
          </div>
          <div
            style={{ backgroundColor: secondColor }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg`}
          >
            {colorPack[1].red}.{colorPack[1].green}.{colorPack[1].blue}
          </div>
          <div
            style={{ backgroundColor: thirdColor }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg`}
          >
            {colorPack[2].red}.{colorPack[2].green}.{colorPack[2].blue}
          </div>
          {/* <div 
        style={{backgroundColor: fourthColor}}
        className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg`}>
          {colorPack[3].red}.{colorPack[3].green}.{colorPack[3].blue}
        </div> */}
        
        </div>
      </div>
    </>
  );
}
