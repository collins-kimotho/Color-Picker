import React from 'react'
import logo from '../assets/image.png'
import { HiHome } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import { HiPlayCircle } from "react-icons/hi2";
import { HiTv } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";






const Header = () => {

    menu = [
        {
            name:'HOME',
            icon: HiHome
        },
        {
            name:'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon: HiPlus
        },
        {
            name:'MOVIES',
            icon: HiPlayCircle
        },
        {
            name:'SERIES',
            icon: HiTv
        },
        
    ]
  return (
    <div>
        <img src={logo} alt="disney logo"  className='w-[80px] object-cover md:w-[115px]' />
    </div>
  )
}

export default Header