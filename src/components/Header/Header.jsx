import React from 'react'
import { Header, Logo, Medio, NavBar, Linea, Iconos, Display1, LineaPeque, Usuario, Grupos, Config, ContNavBar, Red } from './styledHeader';
import {BsFacebook} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {AiFillHome} from "react-icons/ai"
import {GoBell} from "react-icons/go"
import {BsPlayBtn} from "react-icons/bs"
import {CiShop} from "react-icons/ci"
import {PiUsersThree} from "react-icons/pi"
import {RiMessengerLine, RiSettings5Fill} from "react-icons/ri"
import yo from "../../img/yo.jpg"




const MainP = () => {
    return ( 
        <div>
            <Header>
                <Logo>
                    <BsFacebook/>
                </Logo>
                <ContNavBar>
                    <BiSearch/><NavBar placeholder='Search Facebook'/>
                </ContNavBar>
                <Medio>
                    <Linea><AiFillHome style={{color: "#1b74e4"}}/></Linea>
                    <Iconos style={{flexDirection: "column"}}><Red>15</Red><GoBell style={{marginBottom: "15px"}}/></Iconos>
                    <Iconos><Display1><BsPlayBtn/><LineaPeque/></Display1></Iconos>
                    <Usuario src={yo}/>
                    <Iconos><CiShop style={{fontSize: "35px"}}/></Iconos>
                    <Iconos><Grupos><PiUsersThree style={{fontSize: "25px"}}/></Grupos></Iconos>
                    <Iconos><RiMessengerLine style={{fontSize: "35px"}}/></Iconos>
                </Medio>
                <Config>
                    <RiSettings5Fill/>
                </Config>
            </Header>
        </div>
    );
}

export default MainP;