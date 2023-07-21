import React from 'react'
import { Derecha, Izquierda, Estatico, Medio, Principal, Titulo, Texto, Texto2, Menu, Imagenes, Texto3, Contenedor, ConteImg, Titulo2, Frineds, Texto4, Texto5, Titulo3, Contactos, Azul, TituloPrincipal, ContMedio, Contenido, ContHistorias, HeaderHist, TextoHeader, Peque, AbajoHistorias, Historias, Crear, MenuDerecha, Usuario2, Muro, HeaderPubli, Publicacionimg, Headertexto, FooterPubli1, FooterPrimero } from './StyledBody'
import { NavBar } from '../Header/styledHeader'
import comida from "../../img/comida.jpg"
import mesa from "../../img/mesa.jpg"
import events from "../../img/events.png"
import saved from "../../img/saved.png"
import games from "../../img/games.png"
import recaudacion from "../../img/recaudacion.png"
import memories from "../../img/memories.png"
import help from "../../img/help.png"
import settings from "../../img/settings.png"
import pantalla from "../../img/pantalla.png"
import cerrar from "../../img/cerrar.png"
import skaters from "../../img/skaters.jpg"
import juanse from "../../img/juanse.jpg"
import otro from "../../img/otro.jpg"
import ultimo from "../../img/ultimo.jpg"
import nicolle from "../../img/nicolle.jpg"
import michelle from "../../img/michelle.png"
import carlos from "../../img/carlos.jpg"
import camila from "../../img/camila.jpg"
import juanse2 from "../../img/juanse2.jpg"
import andrea from "../../img/andrea.jpg"
import mary from "../../img/mary.jpg"
import mariana from "../../img/mariana.jpg"
import andres from "../../img/andres.jpg"
import martha from "../../img/martha.jpg"
import sebastian from "../../img/sebastian.jpg"
import crear from "../../img/crear.png"
import juancho from "../../img/juancho.png"
import senegal from "../../img/senegal.png"
import lucas from "../../img/lucas.png"
import darho from "../../img/darho.png"
import ben from "../../img/ben.png"
import bustos from "../../img/bustos.png"
import martha2 from "../../img/martha2.png"
import james from "../../img/james.png"
import jean from "../../img/jean.png"
import sara from "../../img/sara.png"
import yo from "../../img/yo.jpg"
import humor from "../../img/humor.jpg"
import messi from "../../img/messi.jpg"
import laugh from "../../img/laugh.png"
import meme2 from "../../img/meme2.jpg"
import reino from "../../img/reino.jpg"
import uis from "../../img/uis.jpg"
import loteria from "../../img/loteria.jpg"
import costeño from "../../img/costeño.jpg"
import {FaBookOpen} from "react-icons/fa"
import {BiSolidMoviePlay} from "react-icons/bi"
import {RiLiveFill} from "react-icons/ri"
import {IoIosImages, IoMdHappy} from "react-icons/io"
import {BsHandThumbsUp} from "react-icons/bs"
import {PiChatTextLight, PiShareFatLight} from "react-icons/pi"
import {SlOptions} from "react-icons/sl"




const Body = () => {
    return ( 
        <div style={{height: "auto"}}>
            <h2>f</h2>
            <Principal>
                <Izquierda>
                    <Estatico>
                        <TituloPrincipal style={{marginBottom: "10px"}}>
                            <Texto>HOME</Texto> 
                            <Texto2>Create</Texto2>
                        </TituloPrincipal>
                    </Estatico>
                    <Menu>
                        <Titulo><Texto3><Imagenes src={comida}/><h4>Not-So-Secret Family Recipes</h4></Texto3></Titulo>
                        <Titulo><Texto3><Imagenes src={comida}/><h4>Not-So-Secret Family Recipes</h4></Texto3></Titulo>
                        <Titulo style={{width: "238px"}}><Texto3><Imagenes src={mesa}/><h4> Red Room Talk Group</h4></Texto3></Titulo>
                        <Titulo style={{width: "128px"}}><Texto3><Imagenes src={events}/><h4>Eventos</h4></Texto3></Titulo>
                        <Titulo style={{width: "114px"}}><Texto3><Imagenes src={saved}/><h4>Saved</h4></Texto3></Titulo>
                        <Titulo style={{width: "129px"}}><Texto3><Imagenes src={games}/><h4>Gaming</h4></Texto3></Titulo>
                        <Titulo style={{width: "160px"}}><Texto3><Imagenes src={recaudacion}/><h4>Fundraisers</h4></Texto3></Titulo>
                        <Titulo style={{width: "144px"}}><Texto3><Imagenes src={memories}/><h4>Memories</h4></Texto3></Titulo>
                        <Titulo style={{width: "184px"}}><Texto3><Imagenes src={help}/><h4>Help & Support</h4></Texto3></Titulo>
                        <Titulo style={{width: "240px"}}><Texto3><Imagenes src={pantalla}/><h4>Screen & Accessibility</h4></Texto3></Titulo>
                        <Titulo style={{width: "210px"}}><Texto3><Imagenes src={settings}/><h4>Settings & Privacy</h4></Texto3></Titulo>
                        <Titulo style={{width: "130px"}}><Texto3><Imagenes src={cerrar}/><h4>Sign Out</h4></Texto3></Titulo>
                        <Titulo style={{width: "238px"}}><Texto3><Imagenes src={mesa}/><h4> Red Room Talk Group</h4></Texto3></Titulo>
                        <Titulo style={{width: "128px"}}><Texto3><Imagenes src={events}/><h4>Eventos</h4></Texto3></Titulo>
                        <Titulo style={{width: "114px"}}><Texto3><Imagenes src={saved}/><h4>Saved</h4></Texto3></Titulo>
                        <Titulo style={{width: "129px"}}><Texto3><Imagenes src={games}/><h4>Gaming</h4></Texto3></Titulo>
                        <Titulo style={{width: "160px"}}><Texto3><Imagenes src={recaudacion}/><h4>Fundraisers</h4></Texto3></Titulo>
                        <Titulo style={{width: "144px"}}><Texto3><Imagenes src={memories}/><h4>Memories</h4></Texto3></Titulo>
                        <Titulo style={{width: "184px"}}><Texto3><Imagenes src={help}/><h4>Help & Support</h4></Texto3></Titulo>
                        <Titulo style={{width: "240px"}}><Texto3><Imagenes src={pantalla}/><h4>Screen & Accessibility</h4></Texto3></Titulo>
                        <Titulo style={{width: "210px"}}><Texto3><Imagenes src={settings}/><h4>Settings & Privacy</h4></Texto3></Titulo>
                        <Titulo style={{width: "130px", height: "auto"}}><Texto3><Imagenes src={cerrar}/><h4>Sign Out</h4></Texto3></Titulo>
                    </Menu>
                </Izquierda>
                <Medio>
                    <ContMedio>
                        <Contenido>
                            <ContHistorias>
                                <HeaderHist>
                                    <TextoHeader>
                                        <Peque><FaBookOpen/><div style={{fontSize:"20px",marginLeft:"10px"}}>Historias</div></Peque>
                                    </TextoHeader> 
                                    <TextoHeader>
                                        <BiSolidMoviePlay style={{fontSize:"25px", borderRadius:"50px", color:"#65676b", marginRight:"8px"}}/>Reels
                                    </TextoHeader>
                                </HeaderHist>
                                <AbajoHistorias>
                                    <Crear src={crear}/>
                                    <Historias src={juancho}/>
                                    <Historias src={senegal}/>
                                    <Historias src={darho}/>
                                    <Historias src={sara}/>
                                    <Historias src={lucas}/>
                                    <Historias src={bustos}/>
                                    <Historias src={martha2}/>
                                    <Historias src={james}/>
                                    <Historias src={jean}/>
                                    <Historias src={ben}/>
                                </AbajoHistorias>
                            </ContHistorias>
                            <ContHistorias>
                                <HeaderHist style={{display:"flex",justifyContent:"initial"}}>
                                    <Usuario2 src={yo}/>
                                    <NavBar placeholder='¿Que estás pensando, Alejandro?' style={{width:"600px",height:"40px"}}/>
                                </HeaderHist>
                                <AbajoHistorias style={{justifyContent:"center", height:"auto", overflow:"hidden"}}>
                                    <Muro>
                                        <RiLiveFill style={{fontSize:"1.5em", marginRight:"5px", borderRadius:"20px" ,color:"#f02849"}}/> Video en vivo
                                    </Muro>
                                    <Muro>
                                        <IoIosImages style={{fontSize:"1.5em", marginRight:"5px",color:"#45bd62"}}/> Foto/Video
                                    </Muro>
                                    <Muro style={{width:"230px"}}>
                                        <IoMdHappy style={{fontSize:"1.8em", marginRight:"5px",color:"#f7b928"}}/> Sentimiento/actividad
                                    </Muro>
                                </AbajoHistorias>
                            </ContHistorias>
                            <ContHistorias>
                                <HeaderPubli>
                                    <Usuario2 src={humor}/>
                                    <Headertexto>
                                        <p style={{fontSize:"15px",fontWeight:"500",cursor:"pointer"}}>Humor del Fútbol SV</p>
                                        <p style={{cursor:"pointer"}}>2 d· </p>
                                    </Headertexto>
                                    <div><SlOptions/></div>
                                </HeaderPubli>
                                <HeaderPubli style={{display:"inherit"}}>
                                    <p>_Al fin, me dieron mi día de descanso</p>
                                    <p>_Mis compañeros:</p>
                                </HeaderPubli>
                                <AbajoHistorias style={{justifyContent:"center",overflow:"hidden",flexDirection:"column"}}>
                                    <Publicacionimg src={messi} style={{borderLeft:"130px solid #80644c", borderRight:"130px solid #80644c"}} />
                                    <FooterPrimero>
                                        <Usuario2 src={laugh} style={{width:"1.5em", height:"1.5em"}}/>
                                        <p style={{color:"#707480",cursor:"pointer"}}>Michelle Rabbit y 199 personas mas</p>
                                        <p style={{color:"#707480",cursor:"pointer", marginLeft:"100px"}}>14 Comentarios</p>
                                        <p style={{color:"#707480",cursor:"pointer"}}>22 Veces Compartido</p>
                                    </FooterPrimero>
                                    <FooterPubli1 style={{justifyContent:"center"}}>
                                        <Muro style={{color:"#707480"}}>
                                            <BsHandThumbsUp style={{marginRight:"5px", fontSize:"1.5em"}}/> Me gusta
                                        </Muro>
                                        <Muro>
                                            <PiChatTextLight style={{marginRight:"5px", fontSize:"1.5em"}}/> Comentar
                                        </Muro>
                                        <Muro>
                                            <PiShareFatLight style={{marginRight:"5px", fontSize:"1.5em"}}/> Compartir
                                        </Muro>
                                    </FooterPubli1>
                                </AbajoHistorias>
                            </ContHistorias>
                            <ContHistorias>
                                <HeaderPubli>
                                    <Azul><Usuario2 src={uis} style={{marginLeft:"9px", height:"2em", width:"2em"}}/></Azul>
                                    <Headertexto style={{marginLeft:"10px"}}>
                                        <p style={{fontSize:"15px",fontWeight:"500",cursor:"pointer"}}>Memes UIS</p>
                                        <p style={{cursor:"pointer"}}>2 d·</p>
                                    </Headertexto>
                                </HeaderPubli>
                                <HeaderPubli>
                                    <p>_Yo fingiendo que estoy buscando chamba para que no me corran de la casa:</p>
                                </HeaderPubli>
                                <AbajoHistorias style={{justifyContent:"center",overflow:"hidden",flexDirection:"column"}}>
                                    <Publicacionimg src={meme2} style={{borderLeft:"130px solid #000", borderRight:"130px solid #000"}}/>
                                    <FooterPrimero>
                                        <Usuario2 src={laugh} style={{width:"1.5em", height:"1.5em"}}/>
                                        <p style={{color:"#707480",cursor:"pointer"}}>Michelle Rabbit y 199 personas mas</p>
                                        <p style={{color:"#707480",cursor:"pointer", marginLeft:"100px"}}>14 Comentarios</p>
                                        <p style={{color:"#707480",cursor:"pointer"}}>22 Veces Compartido</p>
                                    </FooterPrimero>
                                    <FooterPubli1 style={{justifyContent:"center"}}>
                                        <Muro style={{color:"#707480"}}>
                                            <BsHandThumbsUp style={{marginRight:"5px", fontSize:"1.5em"}}/> Me gusta
                                        </Muro>
                                        <Muro>
                                            <PiChatTextLight style={{marginRight:"5px", fontSize:"1.5em"}}/> Comentar
                                        </Muro>
                                        <Muro>
                                            <PiShareFatLight style={{marginRight:"5px", fontSize:"1.5em"}}/> Compartir
                                        </Muro>
                                    </FooterPubli1>
                                </AbajoHistorias>
                            </ContHistorias>
                            <ContHistorias>
                                <HeaderPubli>
                                <Azul><Usuario2 src={costeño} style={{marginLeft:"10px", height:"2.1em", width:"2.2em"}}/></Azul>
                                    <Headertexto style={{marginLeft:"10px"}}>
                                        <p style={{fontSize:"15px",fontWeight:"500",cursor:"pointer"}}>MemesConsteños</p>
                                        <p style={{cursor:"pointer"}}>5 sem· </p>
                                    </Headertexto>
                                </HeaderPubli>
                                <HeaderPubli>
                                    <p style={{marginLeft:"20px"}}>Cuando me gane la lotería no diré nada, pero habrán señales...</p>
                                </HeaderPubli>
                                <AbajoHistorias style={{justifyContent:"center",overflow:"hidden",flexDirection:"column"}}>
                                    <Publicacionimg src={loteria} style={{borderLeft:"130px solid #80644c", borderRight:"130px solid #80644c"}} />
                                    <FooterPrimero>
                                        <Usuario2 src={laugh} style={{width:"1.5em", height:"1.5em"}}/>
                                        <p style={{color:"#707480",cursor:"pointer"}}>Michelle Rabbit y 199 personas mas</p>
                                        <p style={{color:"#707480",cursor:"pointer", marginLeft:"100px"}}>14 Comentarios</p>
                                        <p style={{color:"#707480",cursor:"pointer"}}>22 Veces Compartido</p>
                                    </FooterPrimero>
                                    <FooterPubli1 style={{justifyContent:"center"}}>
                                        <Muro style={{color:"#707480"}}>
                                            <BsHandThumbsUp style={{marginRight:"5px", fontSize:"1.5em"}}/> Me gusta
                                        </Muro>
                                        <Muro>
                                            <PiChatTextLight style={{marginRight:"5px", fontSize:"1.5em"}}/> Comentar
                                        </Muro>
                                        <Muro>
                                            <PiShareFatLight style={{marginRight:"5px", fontSize:"1.5em"}}/> Compartir
                                        </Muro>
                                    </FooterPubli1>
                                </AbajoHistorias>
                            </ContHistorias>
                        </Contenido>
                    </ContMedio>
                </Medio>
                <Derecha>
                    <Estatico>
                        <Titulo style={{marginBottom: "10px", color: "#393941"}}>
                            <Texto5>Suggested</Texto5>
                        </Titulo>
                    </Estatico>
                        <h1>k</h1>
                    <Contenedor>
                        <ConteImg src={skaters}/>
                        <Titulo2>
                            <Frineds src={juanse}/><Frineds src={otro}/><Frineds src={ultimo}/><p style={{fontSize: "15px", marginLeft: "10px"}}>Juanse and 9 friends joined Groups</p>
                        </Titulo2>
                    </Contenedor>
                    <Titulo style={{marginBottom: "10px", color: "#393941"}}>
                        <Texto5>Contacts</Texto5> 
                        <Texto4>...</Texto4>
                    </Titulo>
                    <MenuDerecha>
                        <Titulo3>
                            <Azul><Frineds src={nicolle}/></Azul><Contactos>Nicolle Padilla</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={michelle}/></Azul><Contactos>Michelle Rabbit</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={carlos}/></Azul><Contactos>Carlos Higgins</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={mariana}/></Azul><Contactos>Mariana Farelo</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={mary}/></Azul><Contactos>Mary Bustamante</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={andres}/></Azul><Contactos>Andres Solano</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={sebastian}/></Azul><Contactos>Sebastian Ahumada</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={juanse2}/></Azul><Contactos>Juanse Howard</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={andrea}/></Azul><Contactos>Andrea Bujatto</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={camila}/></Azul><Contactos>Camila Corzo</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={martha}/></Azul><Contactos>Martha Angulo</Contactos>
                        </Titulo3>

                        <Titulo3>
                            <Azul><Frineds src={michelle}/></Azul><Contactos>Michelle Rabbit</Contactos>
                        </Titulo3>
                    </MenuDerecha>
                    
                </Derecha>
            </Principal>
        </div>
    );
}

export default Body;