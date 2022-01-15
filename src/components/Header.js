import PropTypes from 'prop-types';
import Button from './Button'
import { useLocation } from 'react-router-dom';
//import { useState } from "react";

const Header = ({title, onAdd, showAdd} ) => {
    // const onClick=()=>{
    //     console.log('Click')
    // }
    // const [text,setText]=useState('Add')
    // const changeAdd=()=>{
    //     if (text=='Add'){
    //         setText('Close')
    //     }else{
    //         setText('Add')
    //     }
    // }
    const location=useLocation()
    return (
        
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/'&&<Button color={showAdd?'Red':'Indigo'} text={showAdd?'Close':'Add'} onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps={
    title:"Jak"
}
Header.propTypes={
    title:PropTypes.string.isRequired,
}
export default Header

