import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../assets/onlineIcon'
import closeIcon from '../../assets/closeImage'

const InfoBar = ({room}) => (
    <div className='InfoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon}alt='OnlineImage'/>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src={closeIcon} alt='closeImage'></img></a>
        </div>

    </div>
)

export default InfoBar;