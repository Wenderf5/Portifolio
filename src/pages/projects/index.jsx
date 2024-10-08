import style from './index.module.css';
import { Carossel } from '../../components/Carossel';

export function Projects() {
    return (
        <div className={style.bloco3}>
            <div className={style.ttlProjetos}>
                <div style={{ display: "flex", alignItems: "center" }}><svg className={style.svgTtl} width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg></div>
                <h2>Projetos</h2>
                <div style={{ display: "flex", alignItems: "center" }}><svg className={style.svgTtl} width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg></div>
            </div>
            <Carossel />
        </div>
    )
}