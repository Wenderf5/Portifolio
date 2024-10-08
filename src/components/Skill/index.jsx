import style from './index.module.css';

export function Skill(props) {
    const {
        imgIcone,
        titulo,
        desc
    } = props;

    return (
        <section style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <div className={style.Habilidade}>
                <div className={style.divhabilidade}>
                    <div className={style.ttldivhabilidade}>{titulo}</div>
                    <div className={style.textdivhabilidade}>{desc}</div>
                </div>
                <div className={style.imgHabilidade}>
                    <img src={imgIcone} alt="" />
                </div>
            </div>
        </section>
    )
}