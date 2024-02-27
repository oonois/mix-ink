
const colorgradient = 'bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent bg-clip-text'

export default function Header({onChange}) {
  return (
    <>
      <div className="flex justify-center">
        <h1 className={`text-3xl font-bold uppercase pt-10 ${colorgradient}`}>Mix-ink</h1>
      </div>
      <div className="flex justify-center pt-4 hover:text-emerald-500">

        <a href="https://github.com/oonois/mix-ink">github</a>
      </div>
      {/* <div>

        <menu className={`hidden justify-evenly md:flex my-5 bg-gradient-to-l from-emerald-500 to-violet-500`}>
          <li className={`bg-gradient-to-r from-emerald-800 to-violet-800 text-transparent hover:text-white bg-clip-text text-2xl `}>
          <button 
              onClick={onChange}
            >New Game</button>
          </li>
          <li className={`bg-gradient-to-r from-emerald-800 to-violet-800 text-transparent hover:text-white bg-clip-text text-2xl `}>Scores</li>
          <li className={`bg-gradient-to-r from-emerald-800 to-violet-800 text-transparent hover:text-white bg-clip-text text-2xl `}>practice mode</li>
        </menu>
        <menu className="flex-col text-center md:hidden uppercase pt-5">
          <li className={`hover:bg-gradient-to-r from-emerald-500 to-violet-500 hover:text-transparent bg-clip-text text-xl hover:font-bold`}>
            <button 
              onClick={onChange}
            >New Game</button>
          </li>
          <li className={`hover:bg-gradient-to-r from-emerald-500 to-violet-500 hover:text-transparent bg-clip-text text-xl hover:font-bold`}>Scores</li>
          <li className={`hover:bg-gradient-to-r from-emerald-500 to-violet-500 hover:text-transparent bg-clip-text text-xl hover:font-bold`}>practice mode</li>
        </menu>
      </div> */}
    </>
  )
}
