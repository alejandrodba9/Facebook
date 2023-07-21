import styled from 'styled-components';

export const Principal = styled.div`
    width: 100%;
    height: 851px;
    display: flex;
    /* justify-content: space-between; */
    background-color: #f2f3f5;
`

export const Izquierda = styled.div`
    height: 846px;
    width: 450px;
    display: flex;
    margin-top: 45px;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    overflow: scroll;
    &::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
`

export const Estatico = styled.div`
    height: 80px;
    width: 450px;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: #fff;
    /* background-color: blue; */
`

export const TituloPrincipal = styled.div`
    height: auto;
    width: 400px;
    margin-top: 10px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    /* background-color: green; */
`

export const Titulo = styled.div`
    height: auto;
    width: 400px;
    margin-top: 10px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    /* background-color: green; */
`

export const Texto = styled.div`
    height: auto;
    width: auto;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 500;
    
`

export const Texto2 = styled.div`
    height: auto;
    width: auto;
    color: #1095f3;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

export const Menu = styled.div`
    height: 700px;
    width: 400px;
    display: flex;
    flex-direction: column;
    /* background-color: green; */
`

export const Imagenes = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        transform: scale(1.08,1.09);
    }
`
export const Texto3 = styled.div`
    height: 60px;
    width: 310px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    /* background-color: blue; */
    &:hover{
        text-decoration: underline 2px;
    }
`

export const Medio = styled.div`
    height: 860px;
    width: 964px;
    display: flex;
    margin-top: 36px;
    flex-direction: column;
    align-items: center;
    background-color: #f2f3f5;
    overflow: scroll;
    &::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
`

export const ContMedio = styled.div`
    height: auto;
    width: 800px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f2f3f5;
`

export const Contenido = styled.div`
    height: auto;
    width: 700px;
    /* background-color: blue; */
`

export const ContHistorias = styled.div`
    height: auto;
    width: 700px;
    border-radius: 10px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0px 1px 4px .1px grey;
    /* background-color: blue; */
`

export const HeaderHist = styled.div`
    height: 60px;
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px 14px 0px 0px;
    background-color: #fff;
    border-bottom: 1px solid #e8e4e4;
`

export const TextoHeader = styled.div`
    height: 55px;
    width: 320px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #f8f4f4;
    }
`

export const Peque = styled.div`
    height: 60px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    margin-right: 8px;
    border-bottom: 3px solid #1b74e4;
    color: #1b74e4;
`

export const AbajoHistorias = styled.div`
    height: auto;
    width: 700px;
    display: flex;
    border-radius: 0px 0px 10px 10px;
    overflow: scroll;
    display: flex;
    &::-webkit-scrollbar{
        width: 0;
        height: 5;
        border-radius: 50px;
        background-color: #f8f4f4;
    }
`

export const Crear = styled.img`
    height: 200px;
    border-radius: 10px;
    margin: 3px;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
    &:hover{
        transform: scale(1.03,1.01);;
    }
`

export const Historias = styled.img`
    height: 200px;
    width: 130px;
    border-radius: 10px;
    margin: 3px;
    margin-top: 20px;
    background-color: azure;
    cursor: pointer;
    &:hover{
        transform: scale(1.03,1.01);;
    }
`

export const Usuario2 = styled.img`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    margin: 10px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        transform: scale(1.05,1.06);
    }
`

export const Muro = styled.div`
    width: 210px;
    height: 40px;
    color: #77787c;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0px 10px 0px;
    cursor: pointer;
    background-color: #fff;
    &:hover{
        background-color:  #e8e4ec;
    }
`

export const HeaderPubli = styled.div`
    height: 60px;
    width: 700px;
    display: flex;
    align-items: center;
    border-radius: 14px 14px 0px 0px;
    background-color: #fff;
    border-bottom: 1px solid #e8e4e4;
`

export const Publicacionimg = styled.img`
    height: 500px;
    width: 450px;
    cursor: pointer;
`

export const FooterPrimero = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e8e4e4;
    font-size: 14px;
    background-color: #fff;
    &:hover p{
        text-decoration: underline #707480;
    }
`

export const FooterPubli1 = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e8e4e4;
    background-color: #fff;
`

export const Headertexto = styled.div`
    height: auto;
    width: auto;
    font-size: 10px;    
    flex-direction: column;
    &:hover p{
        text-decoration: underline;
    }
`

export const Derecha = styled.div`
    height: 846px;
    width: 450px;
    margin-top: 45px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    overflow: scroll;
    &::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
    /* background-color: green; */
`

export const Contenedor = styled.div`
    height: 320px;
    width: 400px;
    border-radius: 20px 20px 10px 10px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 1px 4px .1px grey;
    /* background-color: blue; */
    &:hover{
        transform: scale(1.02,1.03);
        transition: .2s ease-in-out;
    }
`

export const ConteImg = styled.img`
    height: 250px;
    width: 400px;
    border-radius: 20px 20px 0px 0px;
    cursor: pointer;
    /* background-color: #fff; */
    
`

export const Titulo2 = styled.div`
    height: 50px;
    width: 350px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #393941; */
    &:hover p{
        text-decoration: underline;
        cursor: pointer;
    }
`

export const MenuDerecha = styled.div`
    height: 700px;
    width: 450px;
    display: flex;
    flex-direction: column;
    /* background-color: green; */
`

export const Azul = styled.div`
    height: 35px;
    width: 35px;
    padding: 1px;
    margin-left: 20px;
    border-radius: 50%;
    border: 2px solid #1f72e8;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        transform: scale(1.05,1.06);
    }
`

export const Frineds = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    /* margin-left: 5px; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover${Azul}{
        transform: scale(1.05,1.06);
    }
`

export const Texto4 = styled.div`
    height: auto;
    width: auto;
    color: #393941;
    font-size: 40px;
    font-weight: 500;
    cursor: pointer;
`

export const Texto5 = styled.div`
    height: auto;
    width: auto;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        text-decoration: underline 2px;
    }
`

export const Titulo3 = styled.div`
    height: 50px;
    width: 450px;
    /* margin-left: 10px; */
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #e8e4ec;
    }
`


export const Contactos = styled.div`
    width: auto;
    height: 35px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`