import PropTypes from 'prop-types'

function Question(props){
    
    return(
        <>
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='flex flex-col gap-5'>
                    <div className='flex flex-col h-72 gray-border bg-gray-500 items-center justify-center rounded-2xl pl-10 pr-10 text-3xl'>
                        {props.q}
                    </div> 
                    <div className='flex flex-row gap-5 justify-evenly'>
                        <div className='flex flex-col gray-border-small h-16 bg-gray-500 rounded-2xl rounded-l-3xl text-center justify-center text-xl hover:cursor-pointer hover:bg-slate-400' onClick={() =>{
                            {props.selecta()}
                        }}>
                            <div className=' w-10 bg-rose-300 relative h-full flex items-center justify-center text-white rounded-l-2xl'>
                                <div>A</div>
                            </div>
                            <div className='absolute ml-11'>
                                {props.a1}
                            </div>
                        </div>  
                        <div className='flex flex-col gray-border-small h-16 bg-gray-500 rounded-2xl rounded-l-3xl text-center justify-center text-xl hover:cursor-pointer hover:bg-slate-400' onClick={() =>{
                            {props.selectb()}
                        }}>
                            <div className=' w-10 bg-rose-300 relative h-full flex items-center justify-center text-white rounded-l-2xl'>
                                <div>B</div>
                            </div>
                            <div className='absolute ml-11'>
                                {props.a2}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 justify-evenly'>
                        <div className='flex flex-col gray-border-small h-16 bg-gray-500 rounded-2xl rounded-l-3xl text-center justify-center text-xl hover:cursor-pointer hover:bg-slate-400' onClick={() =>{
                            {props.selectc()}
                        }}>
                             <div className=' w-10 bg-rose-300 relative h-full flex items-center justify-center text-white rounded-l-2xl'>
                                <div>C</div>
                            </div>
                            <div className='absolute ml-11'>
                                {props.a3}
                            </div>
                        </div>  
                        <div className='flex flex-col gray-border-small h-16 bg-gray-500 rounded-2xl rounded-l-3xl text-center justify-center text-xl hover:cursor-pointer hover:bg-slate-400' onClick={() =>{
                            {props.selectd()}
                        }}>
                        <div className=' w-10 bg-rose-300 relative h-full flex items-center justify-center text-white rounded-l-2xl'>
                                <div>D</div>
                            </div>
                        <div className='absolute ml-11'> 
                            {props.a4}
                        </div>
                        </div>
                    </div>
                </div>
        </div>  
        </>
    )
}

Question.PropTypes = {
    q: PropTypes.string,
    a1: PropTypes.string,
    a2: PropTypes.string,
    a3: PropTypes.string,
    a4: PropTypes.string,
}

Question.defaultProps = {
    q: 'This is the default, please ask a question',
    a1: 'test',
    a2: 'test', 
    a3: 'test',
    a4: 'test',
}

export default Question