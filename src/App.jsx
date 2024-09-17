import { useState } from "react"
import Navbar from "./components/Navbar"
import { AnimatePresence, motion } from "framer-motion"
import Hero from "./components/Hero";
import Components from "./components/Components";

function App() {
  let [showNav, setNav] = useState(false);
  
  const showNavbar = () => {
    showNav ? setNav(false) : setNav(true);
    console.log(showNav)
  }

  return (
    <> 
    <div className="w-screen bg-[#0e0e0e]">
      <AnimatePresence >
      {showNav && <Navbar />}
      </AnimatePresence>
        <Hero />
        <motion.button state={showNav} onClick={showNavbar} whileHover={{scale:1.2}} className="fixed z-50 right-5 top-5 w-10"><img src="src/assets/images/icons8-menu.svg"/></motion.button>
        <Components />
    </div>
      
    </>
  )
}

export default App