
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Iconos = () => {
    return (
        <div className="d-flex justify-content-center gap-4">
            <a className="nada" href="https://github.com/MatiasLaredo" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a className="nada" href="https://www.linkedin.com/in/matias-laredo-1bb756209/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            <a className="nada" href="https://wa.me/1122689063" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} />
            </a>
        </div>
    );
}

export default Iconos;