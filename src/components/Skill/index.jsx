import style from './index.module.css';

import iconeDB from '../../img/data-solid-96.png';

function Skill(props) {

    const {imgIcone, titulo, desc} = props;

    return (
        <div style={{width: "100%", display: "flex", alignItems: "center"}}>
            <div className={style.Habilidade}>
                <div className={style.divhabilidade}>
                    <div className={style.ttldivhabilidade}>{titulo}</div>
                    <div className={style.textdivhabilidade}>{desc}</div>
                </div>
                <div className={style.imgHabilidade}>
                    <img src={imgIcone} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Skill;