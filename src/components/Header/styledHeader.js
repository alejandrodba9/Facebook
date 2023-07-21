import styled from 'styled-components';


export const  Header = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 1px 4px .1px grey;
    position: fixed;
`

export const Logo = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    font-size: 45px;
    color: #1b74e4;
    margin-left: 20px;
    cursor: pointer;
`

export const ContNavBar = styled.div`
    width: 300px;
    height: 40px;
    border-radius: 20px;
    padding-left: 20px;
    font-size: 25px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #72767c;
    background-color: #ecedf1;
`

export const NavBar = styled.input`
    width: 300px;
    height: 35px;
    border-radius: 20px;
    border: 0;
    padding-left: 20px;
    background-color: #ecedf1;
    &::placeholder{
        font-size: medium;
    }
    &:focus{
        outline: 0;
    }
`

export const Medio = styled.div`
    height: 70px;
    width: 600px;
    margin-left: 230px;
    font-size: 28px;
    color: #3f4247;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Linea = styled.div`
    width: 60px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2.5px solid #1b74e4;
    cursor: pointer;
`

export const LineaPeque = styled.div`
    height: 2px;
    width: 20px;
    background-color: #3f4247;
`

export const Display1 = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Grupos = styled.div`
    width: auto;
    height: auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #3f4247;
    cursor: pointer;
    &:hover{
        border: 2px solid #1b74e4;
    }
`

export const Iconos = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* background-color: green; */
    &:hover{
        transform: scale(1.2,1.2);
        transition: .2s;
    }
    &:hover svg{
        fill: #1b74e4;
    }
    &:hover ${LineaPeque}{
        background-color: #1b74e4;
    }
    &:hover ${Grupos}{
        border: 2px solid #1b74e4;
    }
`

export const Red = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 8px;
    background-color: red;
`

export const Usuario = styled.img`
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        transform: scale(1.05,1.06);
    }
`


export const Config = styled.div`
    color: #fff;
    width: .5em;
    height: .5em;
    padding: .1em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 580px;
    font-size: 55px;
    color: #3f4247;
    background-color: #0000002b;
    cursor: pointer;
    &:hover{
        color: #1b74e4;
    }
`