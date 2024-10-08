import style from './index.module.css';
import imgbtnmenu from '../../assets/img/menu.png';

export function NavBar(props) {
    const { setMenu, menu } = props;

    return (
        <div className={style.container}>
            <div className={style.containerLogo}>
                <span style={{ color: "#45af6c" }}>/*</span>
                <span style={{ color: "white" }}>WF.DEV</span>
                <span style={{ color: "#45af6c" }}>*/</span>
            </div>
            <div className={style.containerMenu}>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#home"}>Home</a></button>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#about"}>Sobre</a></button>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#projects"}>Projetos</a></button>
                <button className={style.buttonMenu}><a style={{ textDecoration: "none", color: "white" }} href={"#skills"}>Habilidades</a></button>
                <button className={style.btnmenumobile} onClick={() => setMenu(!menu)}>
                    <img style={{ width: "30px" }} src={imgbtnmenu} alt="" />
                </button>
            </div>
        </div>
    )
}