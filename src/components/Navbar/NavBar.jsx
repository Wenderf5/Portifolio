//styles
import styleNavBar from './NavBar.module.css';

//imagens
import imgbtnmenu from '../../img/menu.png';


function NavBar(props) {

    const { setMenu } = props;
    const { menu } = props;

    return (
        <div className={styleNavBar.container}>
            <div className={styleNavBar.containerLogo}><span style={{ color: "#45af6c" }}>/*</span><span style={{ color: "white" }}>WF.</span><span style={{ color: "white" }}>DEV</span><span style={{ color: "#45af6c" }}>*/</span></div>
            <div className={styleNavBar.containerMenu}>
                <button className={styleNavBar.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#" + props.section[0]}>Home</a></button>
                <button className={styleNavBar.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#" + props.section[1]}>Sobre</a></button>
                <button className={styleNavBar.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#" + props.section[2]}>Projetos</a></button>
                <button className={styleNavBar.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#" + props.section[3]}>Habilidades</a></button>
                <button className={styleNavBar.btnmenumobile} onClick={()=> setMenu(menu ? false : true)}>
                    <img style={{width: "30px"}} src={imgbtnmenu} alt="" />
                </button>
            </div>
        </div>
    )
}
export default NavBar