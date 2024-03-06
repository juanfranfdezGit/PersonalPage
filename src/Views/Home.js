// HOOKS
import { useInView } from 'react-intersection-observer';

// IMAGES
import Portrait from "../Img/Portrait.png";
import Back from "../Img/headerBack.png";
import Java from "../Img/Java.png";
import React from "../Img/React.png";
import Html from "../Img/Html.webp";
import Css from "../Img/Css.webp";
import Sass from "../Img/sass.png";
import Node from "../Img/Node.png";
import Mongo from "../Img/mongo.png";
import Sql from "../Img/Sql.png";
import Figma from "../Img/figma.png";
import Adobe from "../Img/Adobe.png";
import Apple from "../Img/apple.png";
import Games from "../Img/games.png";
import Smash from "../Img/burguer.png";
import Stars from "../Img/stars.png";
import Form from "../Img/form.png";
import Timeline from "../Img/timeline.png";

export default function Home() {
    const { ref: myRef, inView: visible } = useInView();
    const { ref: myRef2, inView: visible2 } = useInView();
    const { ref: myRef3, inView: visible3 } = useInView();

    return(
        <div>
            <header className="flex header">
                <div className="portrait">
                    <img src={Portrait} alt="portrait"></img>
                </div>

                <div className="info flex">
                    <h1>Juan Francisco</h1>
                    <h1>Romero Fernández</h1>
                    <h2>Desarrollo Web | UI/UX | Diseño Gráfico </h2>
                </div>

                <div className="headerBack">
                    <img src={Back} alt="back"></img>
                </div>
            </header>

            <div className="techs flex">
                <h1>Tecnologías</h1>
                <h2>Conocimiento en las siguientes tecnologías para el desarrollo de proyectos</h2>

                <ul className="flex">
                    <li className="flex"><img src={Html} alt="html"></img><p>HTML</p></li>
                    <li className="flex"><img src={Css} alt="css"></img><p>CSS</p></li>
                    <li className="flex"><img src={Sass} alt="sass"></img><p>SASS</p></li>
                    <li className="flex"><img src={Java} alt="java"></img><p>JAVASCRIPT</p></li>
                    <li className="flex"><img src={React} alt="react"></img><p>REACT</p></li>     
                    <li className="flex"><img src={Node} alt="node"></img><p>NODEJS</p></li>
                    <li className="flex"><img src={Sql} alt="sql"></img><p>SQL</p></li>
                    <li className="flex"><img src={Mongo} alt="mongo"></img><p>MONGODB</p></li>
                    <li className="flex"><img src={Figma} alt="figma"></img><p>FIGMA</p></li>
                    <li className="flex"><img src={Adobe} alt="adobe"></img><p>ADOBETOOLS</p></li>
                </ul>
            </div>

            <section className="projects flex">
                <h1>Proyectos Destacados</h1>

                <span ref={myRef} className='ref'></span>

                <div className={`project flex ${visible ? 'visible' : ''}`}>
                    <div className="screenshot flex">
                        <img src={Apple} alt="AppleWeb" className={`${visible ? 'visible' : ''}`}></img>
                    </div>
                    <div className="info flex">
                        <h1 className="title">Apple E-Commerce</h1>
                        <p className="description">E-Commerce no oficial de productos Apple. Esta página esta desarrollada únicamente con HTML y CSS, la web por el momento solo está optimizada para escritorio.</p>
                        <p className="description">La web se compone de un menú de navegación con el que podremos navegar a las diferentes secciones, un Header con el producto estrella y a continuación una serie de secciones en las que he distribuido los diferentes productos de nuestra Web.</p>
                        <a href="https://applewebcommerce.netlify.app/" className="flex" target="_blank" rel="noreferrer">Go!</a>
                    </div>
                </div>

                <span ref={myRef2} className='ref2'></span>

                <div className={`project flex ${visible2 ? 'visible' : ''}`}>
                    <div className="info flex">
                        <h1 className="title">Blog de Videojuegos</h1>
                        <p className="description">Blog de videojuegos desarrollado con HTML y CSS, esta web está optimizada para escritorios. La web se compone de un menú de navegación con las diferentes redes sociales, un menú de navegación para navegar y buscar dentro de nuestro blog y varaias secciones con las últimas novedades en videojuegos.</p>
                        <a href="https://videogamesblogwebsite.netlify.app/" className="flex" target="_blank" rel="noreferrer">Go!</a>
                    </div>
                    <div className="screenshot flex">
                        <img src={Games} alt="VideoGames"></img>
                    </div>
                </div>

                <span ref={myRef3} className='ref3'></span>

                <div className={`project flex ${visible3 ? 'visible' : ''}`}>
                    <div className="screenshot flex">
                        <img src={Smash} alt="SmashBurguer"></img>
                    </div>
                    <div className="info flex">
                        <h1 className="title">SmashBurguers Website</h1>
                        <p className="description">Web no oficial para un restaurante de Smashburguers. El proyecto está desarrollado con HTML y SASS para crear un CSS de una forma más dinámica. En la web podemos encontrar una presentación del restaurante y una carta del local.</p>
                        <a href="https://smashwebsite.netlify.app/" className="flex" target="_blank" rel="noreferrer">Go!</a>
                    </div>    
                </div>
            </section>

            <section className='practices flex'>
                <div className='wave-container'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,154.7C480,181,600,235,720,234.7C840,235,960,181,1080,144C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg></div>
                <div className='wave-container'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,144C840,160,960,224,1080,234.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg></div>
                
                <h1 className='flex'>Prácticas</h1>

                <div className='cards'>
                    <div className='card flex'>
                        <div className='card-info flex'>
                            <a href="" className="flex" target="_blank" rel="noreferrer"><h2>Lluvia de Estrellas</h2></a>
                        </div>
                        <div className='card-img'>
                            <img src={Stars}></img>
                        </div>
                    </div>

                    <div className='card flex'>
                        <div className='card-info flex'>
                            <a href="https://formlitlepractice.netlify.app/" className="flex" target="_blank" rel="noreferrer"><h2>Formulario</h2></a>
                        </div>
                        <div className='card-img'>
                            <img src={Form}></img>
                        </div>
                    </div>

                    <div className='card flex'>
                        <div className='card-info flex'>
                            <a href="https://timelinepract.netlify.app/" className="flex" target="_blank" rel="noreferrer"><h2>Timeline</h2></a>
                        </div>
                        <div className='card-img'>
                            <img src={Timeline}></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}