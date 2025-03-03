import { Link } from 'react-scroll';

const Menu = () =>{
    return(
    
<nav className='navbar navbar-expand-lg navbar-light '>
    <div className='container-fluid d-flex justify-content-center aling-items-center  '>
        <ul className='d-flex justify-content-center list-unstyled '>
            <li className='mx-3'>
                <Link to= "Inicio" smooth={true} duration={500} className='menuS'>Inicio</Link>
            </li>
            <li className='mx-3'>
                <Link to= "Porfolio" smooth={true} duration={500} className='menuS'>Mis Proyectos</Link>
            </li>
            <li className='mx-3'>
                <Link to= "SobreMi" smooth={true} duration={500} className='menuS'>Sobre Mi</Link>
            </li>
            <li className='mx-3'>
                <Link to= "Habilidades" smooth={true} duration={500} className='menuS'>Habilidades</Link>
            </li>
            <li className='mx-3'>
                <Link to= "Educacion" smooth={true} duration={500} className='menuS'>Educacion</Link>
            </li>
        </ul>
    </div>
</nav>

    )
}

export default Menu;