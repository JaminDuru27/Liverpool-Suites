import { hover, motion } from 'framer-motion'
import './App.css'
function App() {

  return (
    <>
    <div className="body w-full h-full bg-[#1a0c0a]">

      <nav className='fixed z-50  top-2 left-1/2 w-[80%] translate-x-[-50%] flex  justify-between items-center py-2 px-8 backdrop-blur-2xl text-[#ffffff8b] rounded-[9rem]'>
        
        <div className="logo">Liverpool Suites</div>
        <div className="links flex justify-between items-center gap-10">
          <a className='cursor-pointer' href="">About</a>
          <a className='cursor-pointer' href="">Contact</a>
          <a className='cursor-pointer' href="">Events</a>
          <a className='cursor-pointer  ' href="">Blog</a>
        </div>
        <div className="wrap flex items-center gap-2 justify-between">
          <button style={{
            backgroundImage: `linear-gradient(95deg, #ffffff26 8%, transparent 70%)`
          }} className=' text-[.6rem] border-l-1 py-1.5 px-2 cursor-pointer rounded-[5rem]'>USD</button>
          <button style={{
            backgroundImage: `linear-gradient(95deg, #ffffff26 8%, transparent 70%)`
          }} className=' text-[.6rem] border-l-1 py-1.5 px-2 cursor-pointer rounded-[5rem]'>USA</button>
          <button style={{
            backgroundImage: `linear-gradient(95deg, #ffffff26 8%, transparent 70%)`
          }} className=' text-[.6rem] border-l-1 py-1.5 px-2 cursor-pointer rounded-[5rem]'>Bookings</button>
        </div>
        </nav>
    
      <section className='w-full h-fit'>
        <div style={{
          backgroundImage:'linear-gradient(125deg, #37180f59, #37180f59), url(vertical-shot-big-building-with-hotel-sign-dark-blue-sky.jpg) ',
          backgroundSize:'100% 100%',
        }} className="w-full h-[240vh] bg-contain bg-no-repeat bg-center">
    
    
        <div className=" capitalize  px-[2rem] text-center w-full  h-[100vh] flex flex-col justify-center items-start text-[#ffffffb6] ">
          <div className="text-[5rem] darling">Suites and Lifestyle Louges</div>
          <div className="">Logde in one og Liverpools <span className="darling  text-[#f0de4b] text-[1.6rem]">Finest</span></div>
          <div className="flex items-center w-full justify-center gap-7">
            <button className="border-2 border-[#fff] backdrop-blur-2xl rounded-[.4rem] px-4 py-2">Login</button>
            <button style={{
              'border': '2px solid #a09440',
              'boxShadow': '0px 0px 17px 1px #a58633, 0px 0px 4px 0px #a58633',
              'color': '#a09440',
              'textShadow': '0px 0px 5px #ebaf00, 0px 0px 15px #bc8f0a',
            }} className="stroke border-2 border-[#3c2601] backdrop-blur-2xl rounded-[.4rem] px-4 py-2">Sign In</button>
          </div>
        </div>
        <div className="text-[1rem] w-full  text-[#ffffffb6] mb-4 text-center my-5">Book Now For just 125$</div>
        <div className="book flex items-center justify-between w-[80%] gap-4 rounded-[.5rem] h-fit overflow-hidden border-2 border-[#ffffff8f] relative left-1/2 translate-x-[-50%] ">
          <div className="left w-1/2 h-full relative pl-4 pt-4 pb-4">
            <div className="arive px-4 border py-2 text-[#ffffffb6] cursor-pointer my-2 border-[#ffffff8f] w-full">arrive</div>
            <div className="arive px-4 border py-2 text-[#ffffffb6] cursor-pointer my-2 border-[#ffffff8f] w-full">depart</div>
            <div className="arive px-4 border py-2 text-[#ffffffb6] cursor-pointer my-2 border-[#ffffff8f] w-full">adult</div>
            <div className="arive px-4 border py-2 text-[#ffffffb6] cursor-pointer my-2 border-[#ffffff8f] w-full">room</div>
          </div>
        <div
        style={{
          backgroundImage:`url('woman-talking-phone-medium-shot copy.jpg')`,
          backgroundSize: `cover`,
        }} 
        className="right w-1/2 h-[15rem] bg-center bg-center my-6 flex justify-center items-center relative"
        >
          <div className="bk bg-white.10 border px-4 backdrop-blur-2xl cursor-pointer py-2 text-[#ffffffb6] ">Book</div>
        </div>
      

      </div>
      <div className="search sticky top-[2rem]  rounded-r-4xl overflow-hidden  bg-white/10 backdrop-blur-2xl  w-[4rem] h-[2rem]"></div>

      <h1 className='w-full text-[5rem] text-center text-[#fff] my-16 unstroke'>Navigate</h1>

      <div className="nav2  w-[80%] gap-5 flex-wrap relative left-1/2 flex items-center justify-between translate-x-[-50%] ">
        <div className="shrink-0 text-[1.2rem] events w-[10rem] h-[10rem] stroke  relative flex items-center justify-center leaves  border-b-2 rounded  border-[#ffffff6d]">
          events
          <img className='z-[-2] absolute top-1/2 rounded-[50%]  left-1/2 w-[60%] h-[60%] translate-[-50%]' src="hall.jpg" alt="" />
        </div>
        <div className="shrink-0 text-[1.2rem] events w-[10rem] h-[10rem] stroke  relative flex items-center justify-center leaves  border-b-2 rounded  border-[#ffffff6d]">
          menu
          <img className='z-[-2] absolute top-1/2 rounded-[50%]  left-1/2 w-[60%] h-[60%] translate-[-50%]' src="hall.jpg" alt="" />
        </div>
        <div className="shrink-0 text-[1.2rem] events w-[10rem] h-[10rem] stroke  relative flex items-center justify-center leaves  border-b-2 rounded  border-[#ffffff6d]">
          hotels
          <img className='z-[-2] absolute top-1/2 rounded-[50%]  left-1/2 w-[60%] h-[60%] translate-[-50%]' src="hall.jpg" alt="" />
        </div>
        <div className="shrink-0 text-[1.2rem] events w-[10rem] h-[10rem] stroke  relative flex items-center justify-center leaves  border-b-2 rounded  border-[#ffffff6d]">
          book
          <img className='z-[-2] absolute top-1/2 rounded-[50%]  left-1/2 w-[60%] h-[60%] translate-[-50%]' src="hall.jpg" alt="" />
        </div>
      </div>
      </div>
        
      </section>
      <section className=' flex justify-center items-center w-full py-16'>
        <div className="w-[80%] h-full flex items-center justify-between text-[#fff]">
          <div className="right ">
            <div className="text-[2.5rem] my-6">2,000,000,000+ </div>
            <div className="text-[.7rem] text-[#ffffff6f]">users yearly. rated all over the world this suite is the best at 5 start reviews</div>
          </div>
          <div className="left w-1/2 h-full flex items-center justify-between gap-2">
            <img src="hall.jpg" 
            alt="" className=" w-[12rem] h-[15rem] rounded-[.5rem]" />
            <img src="hall.jpg" 
            alt="" className=" w-[8rem] h-[8rem] rounded-[.5rem]" />
            <img src="hall.jpg" 
            alt="" className=" w-[5rem] h-[5rem] rounded-[.5rem]" />
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center flex-col py-20 text-[#ffffff6f]'>
        <h1 className='text-[5rem] py-5 border-double border-b-2 mb-10'>Brilliant Suites</h1>
        <h1 className="text-[5rem] text-amber-700">Lavish Suites</h1>
        <div className="w-full flex justify-center items-center"><img src="floral-design.png" className='w-5 h-5 opacity-[0.4]' alt="" /></div>
        <h1 className="my-5">Available for $17,000 for rent.</h1>
        
        <div className="suite mb-10 flex items-center justify-center gap-5 w-[80%]">
          
          <motion.div 
          className=" relative left w-[70%] h-[80vh] overflow-hidden rounded-[.5rem] bg-white/10"
          whileHover='hover'
          initial = 'initial'

          >
            <motion.div 
            className="p-2 absolute bottom-[0] left-0 w-full backdrop-blur-2xl text-[#0000009d]"
            variants={{initial:{y:200, opacity:1},  hover:{y:0, opacity:1}}}
            transition={{type:'spring', stiffness: 300, damping: 20}}
            >
              <div className="absolute top-2 right-2 px-2 py-1 bg-[#f5bc00]/10 rounded-l-2xl">Recommended</div>
              <div className="text-3xl py-2">Room 309</div>
              <div className="my-2">Excellent </div>
              <div className="my-2 flex w-full justify-between items-center">
                <div className="">R3003 <span className='text-[.8rem]'>per night</span></div>
                <div className="">breakfasy served</div>
              </div>
              <button className="px-4 py-2 rounded-[.3rem] border-4 cursor-pointer border-[#000000a2]">check out deal</button>
            </motion.div>
            <img src="hall.jpg" alt="" className="w-full h-full" />

          </motion.div>
          
          <div className="right w-[30%]  h-[80vh] flex flex-col items-center  gap-[.5rem] justify-start overflow-hidden rounded-[.5rem]  overflow-y-auto">
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
          </div>
        </div>
        <h1 className="text-[5rem] text-amber-700">Lavish Suites</h1>
        <div className="w-full flex justify-center items-center"><img src="floral-design.png" className='w-5 h-5 opacity-[0.4]' alt="" /></div>
        <h1 className="my-5">Available for $17,000 for rent.</h1>
        
        <div className="suite flex items-center justify-center gap-5 w-[80%]">
          
          <motion.div 
          className=" relative left w-[70%] h-[80vh] overflow-hidden rounded-[.5rem] bg-white/10"
          whileHover='hover'
          initial = 'initial'

          >
            <motion.div 
            className="p-2 absolute bottom-[0] left-0 w-full backdrop-blur-2xl text-[#0000009d]"
            variants={{initial:{y:200, opacity:1},  hover:{y:0, opacity:1}}}
            transition={{type:'spring', stiffness: 300, damping: 20}}
            >
              <div className="absolute top-2 right-2 px-2 py-1 bg-[#f5bc00]/10 rounded-l-2xl">Recommended</div>
              <div className="text-3xl py-2">Room 309</div>
              <div className="my-2">Excellent </div>
              <div className="my-2 flex w-full justify-between items-center">
                <div className="">R3003 <span className='text-[.8rem]'>per night</span></div>
                <div className="">breakfasy served</div>
              </div>
              <button className="px-4 py-2 rounded-[.3rem] border-4 cursor-pointer border-[#000000a2]">check out deal</button>
            </motion.div>
            <img src="luxury-bedroom-hotel.jpg" alt="" className="w-full h-full" />

          </motion.div>
          
          <div className="right w-[30%]  h-[80vh] flex flex-col items-center  gap-[.5rem] justify-start overflow-hidden rounded-[.5rem]  overflow-y-auto">
            <img src="room.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
            <img src="hall.jpg" alt="" className="w-[80%] h-[10rem]  rounded-[.4rem]" />
          </div>
        </div>z
        <div className="w-full mt-5 flex justify-center items-center"><img src="floral-design.png" className='w-5 h-5 opacity-[0.4]' alt="" /></div>

        <div className="my-6 w-[80%]">
          ookpoqkop poq oqk qpk oqs pqoi sqj sijpskpq p qskqpkp  <q>cmowoe wokeo</q>
          ookpoqkop poq oqk qpk oqs pqoi sqj sijpskpq p qskqpkp  <q>cmowoe wokeo</q>
          ookpoqkop poq oqk qpk oqs pqoi sqj sijpskpq p qskqpkp  <q>cmowoe wokeo</q>
          ookpoqkop poq oqk qpk oqs pqoi sqj sijpskpq p qskqpkp  <q>cmowoe wokeo</q>
          ookpoqkop poq oqk qpk oqs pqoi sqj sijpskpq p qskqpkp  <q>cmowoe wokeo</q>
          ookpoqkop poq oqk qpk oqs pqoi sqj sijpskpq p qskqpkp  <q>cmowoe wokeo</q>
          ookpoqkop poq oqk qpk oqs pqoi sqj sijpskpq p qskqpkp  <q>cmowoe wokeo</q>
          </div>
      </section>
      <div className="w-full mt-5 flex justify-center items-center"><img src="floral-design.png" className='w-5 h-5 opacity-[0.4]' alt="" /></div>

      <section className='text-[#ffffffc3] gap-5 py-12 w-full flex flex-wrap  justify-center items-center'>
        <div style={{
          backgroundImage:`repeating-linear-gradient(45deg, brown, orange, #b746c7)`,
          boxShadow: '10px 0px 39px -7px orange, 0px -17px 25px -11px brown, -3px 10px 40px -9px #B746C7',
        }} className="card w-[15rem] shrink-0 flex flex-col justify-center items-center gap-3 h-fit bg-white/2 px-5 py-5 rounded-[.3rem]">
          <img src="shop.png" alt="" className='w-[8rem] h-[8rem] opacity-[.5]'/>
          <div className="head text-[1.2rem] w-full text-center">Search Simply</div>
          <div className="text-[.9rem] w-full text-center">Easy to find and Lodge Quickly</div>
        </div>
        <div style={{
          backgroundImage:`repeating-linear-gradient(45deg, brown, orange, #b746c7)`,
          boxShadow: '10px 0px 39px -7px orange, 0px -17px 25px -11px brown, -3px 10px 40px -9px #B746C7',
        }} className="card w-[15rem] shrink-0 flex flex-col justify-center items-center gap-3 h-fit bg-white/2 px-5 py-5 rounded-[.3rem]">
          <img src="hotel.png" alt="" className='w-[8rem] h-[8rem] opacity-[.5]'/>
          <div className="head text-[1.2rem] w-full text-center">Search Simply</div>
          <div className="text-[.9rem] w-full text-center">Easy to find and Lodge Quickly</div>
        </div>
        <div style={{
          backgroundImage:`repeating-linear-gradient(45deg, brown, orange, #b746c7)`,
          boxShadow: '10px 0px 39px -7px orange, 0px -17px 25px -11px brown, -3px 10px 40px -9px #B746C7',
        }} className="card w-[15rem] shrink-0 flex flex-col justify-center items-center gap-3 h-fit bg-white/2 px-5 py-5 rounded-[.3rem]">
          <img src="food-tray.png" alt="" className='w-[8rem] h-[8rem] opacity-[.5]'/>
          <div className="head text-[1.2rem] w-full text-center">Search Simply</div>
          <div className="text-[.9rem] w-full text-center">Easy to find and Lodge Quickly</div>
        </div>
      </section>
      
      <div className="w-full mt-5 flex justify-center items-center"><img src="floral-design.png" className='w-5 h-5 opacity-[0.4]' alt="" /></div>
      
      <footer style={{
        backgroundImage: `linear-gradient(0deg, black 80%, transparent)`,
      }} className='w-full py-10 px-4 bg-[#000] text-white'>
        <div className="flex justify-between items-center w-full mb-5">
          <div className="logo">Logo</div>
          <div className="sm flex items-center justify-between gap-0">
            <img src='facebook-app-symbol.png' className="text-[.7rem] border-4 border-[#000] rounded-[50%] w-10 h-10 p-2 flex bg-white  items-center justify-center" />
            <img src='instagram (1).png' className="text-[.7rem] border-4 translate-x-[-10px] border-[#000] rounded-[50%] w-10 h-10 p-2 flex bg-white  items-center justify-center" />
            <img src='twitter (1).png' className="text-[.7rem] border-4 translate-x-[-20px] border-[#000] rounded-[50%] w-10 h-10 p-2 flex bg-white  items-center justify-center" />
          </div>
        </div>
        <div className="relative w-full mb-5 gap-6 flex items-center justify-between">
          <div className="left flex gap-3 w-1/2 items-center justify-between">
            <div className="card text-[.6rem] text-[#ffffff90] flex flex-col items-start gap-2  justify-between">
              <div className="item">companies</div>
              <div className="item">branches</div>
              <div className="item">investor relations</div>
              <div className="item">privacy</div>
            </div>
            <div className="card text-[.6rem] text-[#ffffff90] flex flex-col items-start gap-2  justify-between">
              <div className="item">companies</div>
              <div className="item">branches</div>
              <div className="item">investor relations</div>
              <div className="item">privacy</div>
            </div>
          </div>
          <div className="right relative w-[50%] mb-5 text-[#ffffff90]">
            <div className="head">Live With Style and High Expectation</div>
            <div className="addr">jijqojo N.V., 9i9i29 dokdpkpdkpd, Liverpool. Copyright 2025 trivago | All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  </>
  )
}

export default App
