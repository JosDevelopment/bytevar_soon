function App() {
  return (
    <>
    <div className="flex flex-wrap w-screen h-screen relative">
      <div className="bg-blueScale-700 w-1/2 h-1/2"></div>
      <div className="bg-blueScale-400 w-1/2 h-1/2"></div>
      <div className="bg-blueScale-900 w-1/2 h-1/2"></div>
      <div className="bg-blueScale-500 w-1/2 h-1/2"></div>

      <div className="bg-[#0005] absolute left-0 top-0 w-full h-full z-10"></div>
      <h1 className="capitalize font-bold text-white absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 px-6 text-[8vw] sm:text-[7vw] lg:text-[5vw] 4k:text-[6vw] w-full text-center">¡¡we are coming soon!!</h1>
      <h2 className="text-white font-bold absolute left-[6vw] top-[6vw] md:left-[3vw] md:top-[3vw] z-20 text-[8vw] sm:text-[7vw] lg:text-[3vw] 4k:text-[4vw]">ByteVar</h2>
    </div>
    </>
  )
}

export default App
