import "../Footer/styles.css"
import Flogo from "../../assets/img/facebook-logo.png"
import Dlogo from "../../assets/img/dribbble.png"

export default function Footer () {
    return (
        <footer>
            <div className="copyr">
            <h3>© 2025 Accenture. All rights reserved.</h3>
            </div>
            <div className="logos">
            <img src={Flogo} className="imagem-facebook"/>
            <img src={Dlogo}  className="imagem-dribbble"/>
            </div>
        </footer>
    )
}
