import PropTypes from 'prop-types'

function Store(props){
    return(
        <div className="w-screen h-4/6 absolute flex justify-center items-center mt-24">
            <div className=" w-1/3 h-3/5 bg-white">
                <div className="flex w-full h-16 gap-5 justify-center ">
                    <div className="w-1/2 flex flex-col justify-center items-center border-b-black border-b-2">Items</div>
                    <div className="bg-white w-3"></div>
                    <div className="w-1/2 flex justify-center items-center border-b-black border-b-2">Upgrades</div>
                </div>
                <div className="flex gap-28">
                    <div className=" w-2/5 h-48 bg-red-50 mt-6 ml-7 p-3 flex items-center flex-wrap" onClick={props.firstItem}>
                        <div className='flex'>
                            <div className='w-24 h-24 bg-green-700 flex justify-center items-center text-white text-6xl rounded-lg'>Z</div>
                            <div className='ml-9 text-xl'>25 Cookies/Second <br /> 10 Cookies/Click <div className='text-3xl'>${props.costFirstItem}</div></div>
                        </div>
                    </div>
                    <div className=" w-2/5 h-48 bg-red-50 mt-6 mr-7 p-3 flex items-center flex-wrap" onClick={props.firstUpgrade}>
                    <div className='flex'>
                            <div className='w-24 h-24 bg-green-700 flex justify-center items-center text-white text-6xl rounded-lg'>Z</div>
                            <div className='ml-9 text-xl'>2 Times Cookies <br /> <br /> <div className='text-3xl'>${props.costFirstUpgrade}</div></div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-28">
                    <div className="w-2/5 h-48 bg-red-50 mt-6 ml-7 p-3 flex items-center flex-wrap" onClick={props.secondItem}>
                    <div className='flex'>
                            <div className='w-24 h-24 bg-green-700 flex justify-center items-center text-white text-6xl rounded-lg'>Z</div>
                            <div className='ml-9 text-xl'>125 Cookies/Second <br /> 50 Cookies/Click <div className='text-3xl'>${props.costSecondItem}</div></div>
                        </div>
                    </div>
                    <div className=" w-2/5 h-48 bg-red-50 mt-6 mr-7 p-3 flex items-center flex-wrap" onClick={props.secondUpgrade}>
                    <div className='flex'>
                            <div className='w-24 h-24 bg-green-700 flex justify-center items-center text-white text-6xl rounded-lg'>Z</div>
                            <div className='ml-9 text-xl'>10 Times Cookies <br /> <br /> <div className='text-3xl'>${props.costSecondUpgrade}</div></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Store