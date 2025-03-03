import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';


const Habilidades = () => {
    return (
        <div id="Habilidades" className="habilidades-container ">
            <h1 className='text-danger text-center mb-5'>Mis Habilidades</h1>
            <ul className="habilidades-list">
                <li className="habilidad">
                    <FaHtml5 size={70} className="icon html" /> HTML
                </li>
                <li className="habilidad">
                    <FaCss3Alt size={70} className="icon css" /> CSS
                </li>
                <li className="habilidad">
                    <FaJsSquare size={70} className="icon js" /> JavaScript
                </li>
                <li className="habilidad">
                    <FaReact size={70} className="icon react" /> React
                </li>
                <li className="habilidad">
                    <FaBootstrap size={70} className="icon bootstrap" /> Bootstrap
                </li>
            </ul>
        </div>
    );
}

export default Habilidades;
