//styles
import style from './index.module.css';

//imagens
import imgbtnmenu from '../../img/menu.png';


function NavBar(props) {

    const { setMenu } = props;
    const { menu } = props;

    return (
        <div className={style.container}>
            <div className={style.containerLogo}><span style={{ color: "#45af6c" }}>/*</span><span style={{ color: "white" }}>WF.</span><span style={{ color: "white" }}>DEV</span><span style={{ color: "#45af6c" }}>*/</span></div>
            <div className={style.containerMenu}>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#0"}>Home</a></button>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#1"}>Sobre</a></button>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#2"}>Projetos</a></button>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#3"}>Habilidades</a></button>
                <button className={style.btnmenumobile} onClick={()=> setMenu(menu ? false : true)}>
                    <img style={{width: "30px"}} src={imgbtnmenu} alt="" />
                </button>
            </div>
        </div>
    )
}
export default NavBar