import './index.css'
import PropTypes from 'prop-types'

function Website(props){
    return(
        <>
            <div className=' w-1/4 h-60 bg-gray-100 flex items-center justify-between p-8 rounded-3xl mb-10 gap-14'>
            <img src={props.image} alt="Image of Website" className='w-full h-full w-40 rounded-xl'/>
            <div className='text-3xl opacity-60 text-left'>{props.text}</div>
            </div>
        </>
    )
}

Website.PropTypes = {
    text: PropTypes.string,
}

Website.defaultProps = {
    text: 'Lorem Ipsum. Add something here'
}

export default Website;