import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PlayGround from './PlayGround'
import Store from './Store'
import Cheat from './Cheat'

function App() {
  let [CPS, setCPS] = useState(Number(10))
  let [currentCookies, setCurrentCookies] = useState(Number(0))
  let [cookiesPerClick, setCookiesPerClick] = useState(Number(1))
  let [cookieMultiplier, setCookieMultiplier] = useState(Number(1))

  let [costFirstItem, setCostFirstItem] = useState(250)
  let [costSecondItem, setCostSecondItem] = useState(1000)
  let [costFirstUpgrade, setCostFirstUpgrade] = useState(2500)
  let [costSecondUpgrade, setCostSecondUpgrade] = useState(10000)

  let [theStore, setTheStore] = useState(false)
  let [theCheatWindow, setTheCheatWindow] = useState(false)
  let [cheatOn, setCheatOn] = useState(false)

  useEffect(() =>{
   const interval = setInterval(() =>{
      setCurrentCookies((prevCookies) => prevCookies + CPS * cookieMultiplier)
      
    }, 1000)

    return () => clearInterval(interval)
  }, [CPS, cookieMultiplier])
  
  return (
    <>
      
      <Navbar CPS={CPS * cookieMultiplier} currentCookies={currentCookies} shop={() =>{  
        if(theStore == true){
          setTheStore(false)
        }else{
          setTheStore(true)
        }
      }}
      
      cheat={() =>{
        if(theCheatWindow == true){
          setTheCheatWindow(false)
        }else{
          setTheCheatWindow(true)
        }
      }}
      />

      {theCheatWindow ? <Cheat cheatToggle={cheatOn == false ? "Off" : "On"}
      clickedCheat={() =>{
        if(cheatOn == false){
          setCPS((prevCPS) => prevCPS * 1000000)
          setCheatOn(true)
        }else{
          setCheatOn(false)
          setCPS((prevCPS) => prevCPS / 1000000)
        }
      }}
      /> : <></>}

      

      {theStore ? <Store firstItem={() =>{
        if(currentCookies >= costFirstItem){
          setCPS((prevCPS) => prevCPS + 25)
          setCookiesPerClick((prevCookiePerClick) => prevCookiePerClick + 10)
          setCurrentCookies((prevCookies) => prevCookies - costFirstItem)
          setCostFirstItem((prevCostFirstItem) => prevCostFirstItem * 2)
        }
      }} secondItem={() =>{
        if(currentCookies >= costSecondItem){
          setCPS((prevCPS) => prevCPS + 125)
          setCookiesPerClick((prevCookiePerClick) => prevCookiePerClick + 50)
          setCurrentCookies((prevCookies) => prevCookies - costSecondItem)
          setCostSecondItem((prevCostSecondItem) => prevCostSecondItem * 2)
        }
      }} 
      firstUpgrade={() =>{
        if(currentCookies >= costFirstUpgrade){
          setCookieMultiplier((prevCookieMultiplier) => prevCookieMultiplier * 2) 
          setCurrentCookies((prevCookies) => prevCookies - costFirstUpgrade)
          setCostFirstUpgrade((prevCostFirstUpgrade) => prevCostFirstUpgrade * 2)
        }
      }}
      secondUpgrade={() =>{
        if(currentCookies >= costSecondUpgrade){
          setCookieMultiplier((prevCookieMultiplier) => prevCookieMultiplier * 10) 
          setCurrentCookies((prevCookies) => prevCookies - costSecondUpgrade)
          setCostSecondUpgrade((prevCostSecondUpgrade) => prevCostSecondUpgrade * 2)
        }
      }}

      

      costFirstItem={costFirstItem} costSecondItem={costSecondItem} costFirstUpgrade={costFirstUpgrade} costSecondUpgrade={costSecondUpgrade}
      /> : <></>}
      <PlayGround addCPS={() =>{
        setCurrentCookies((prevCookies) => prevCookies + cookiesPerClick)
      }} 
      />
      
    </>
  )
}

export default App
