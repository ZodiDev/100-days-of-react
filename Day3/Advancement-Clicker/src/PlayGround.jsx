import PropTypes from 'prop-types'
import { useState } from 'react'

function PlayGound(props){

    const [clickedClass, setClickedClass] = useState("w-96 h-96")

    return(
        <>
        <div className="playground-screen flex justify-center items-center bg-blue-300">
            <div className={" bg-green-700 rounded-full flex justify-center items-center hover:cursor-pointer target:w-1/4  " + clickedClass} onClick={() =>{
                props.addCPS()
                setClickedClass("w-1/6 h-2/6")

                timeout = setTimeout(() =>{
                    setClickedClass("w-96 h-96")    
                    clearTimeout(timeout)
                }, 100)
            }}>
                <h1 className="big-z text-white">Z</h1>
            </div>
        </div>
        
        </>
    )
}

PlayGound.defaultProps = {

}

export default PlayGound