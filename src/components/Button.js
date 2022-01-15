import PropTypes from 'prop-types'
export const Button = ({color,text, onClick}) => {
    // const onClick = () =>{
    //     console.log('Clicked')
    // }
    return (
        <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
    )
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string
}

export default Button;
