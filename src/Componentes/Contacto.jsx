import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contacto = () => {
    return(
            <div id='Contacto'>   
                    <p>
                        <a className='btn btn-success position-fixed bottom-0 end-0 m-4 rounded-circle p-3' href="https://wa.me/1122689063" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={40} /> 
                        </a>
                    </p>
            </div>
        
        
    )
}

export default Contacto;