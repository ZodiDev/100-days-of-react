import PropTypes from 'prop-types'

function Cheat(props){
    return(
        <>
            <div className="w-screen h-4/6 absolute flex justify-center mt-24 ">
                <div className=" w-52 h-32 bg-white rounded-xl flex justify-center items-center">
                    <div className="w-fit h-fit bg-red-400 p-3 text-white font-bold" onClick={props.clickedCheat}>Cheat: {props.cheatToggle}</div>
                </div>
            </div>
        </>
    )
}

export default Cheat