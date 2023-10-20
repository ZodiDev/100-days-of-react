import {RxGear} from 'react-icons/rx' 
import {FaCartShopping} from 'react-icons/fa6'
import PropTypes from 'prop-types'

function Navbar (props){
    return(
    <>
        <div className='w-screen h-28 shadow-2xl bg-white flex items-center justify-between'>
            <RxGear className=' text-green-600 ml-5' size={100} onClick={props.cheat}/>
                <div className='bg-green-700 w-96 h-3/4 rounded-lg flex items-center justify-center absolute current-cookie-box'>
                    <h1 className='text-3xl text-white'>{props.currentCookies}</h1>
                </div>
            
            <div className='w-96 h-full flex items-center justify-around'>
                <div className='bg-green-700 w-48 h-3/4 rounded-lg flex justify-center items-center'>
                    <div className='text-white text-3xl'>CPS: {props.CPS}</div>
                </div>
                <FaCartShopping size={100} className='text-green-600' onClick={
                    props.shop
                }/>
            </div>
        </div>
    </>
    )    
}

Navbar.defaultProps ={
    currentCookies: 100,
    CPS: 100
}



export default Navbar