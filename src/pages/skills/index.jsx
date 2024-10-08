import style from './index.module.css';
import { useState } from 'react';
import { Skill } from '../../components/Skill';
import iconeCSS from '../../assets/img/css3-logo-96.png';
import iconeDB from '../../assets/img/data-solid-96.png';
import iconeHTML from '../../assets/img/html5-logo-96.png';
import iconeJS from '../../assets/img/javascript-logo-96.png';
import iconeNode from '../../assets/img/nodejs-logo-96.png';
import iconeReact from '../../assets/img/react-logo-96.png';
import iconeNest from '../../assets/img/nestjs-icon.png';
import iconeTS from '../../assets/img/typescript-logo-96.png';

export function Skills() {
    const [vermais, setVermais] = useState(false);

    return (
        <div className={style.bloco4}>
            <div className={style.ttldivhabilidades}>
                <div style={{ display: "flex", alignItems: "center" }}><svg className={style.svgTtl} width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg></div>
                <h2 className={style.ttlhabilidade}>Habilidades</h2>
                <div style={{ display: "flex", alignItems: "center" }}><svg className={style.svgTtl} width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg></div>
            </div>
            <div className={style.containerhabilidades} style={{ height: vermais ? "auto" : "auto", transition: "0.5s" }}>
                <Skill imgIcone={iconeHTML} titulo={"HTML"} desc={"É uma linguagem de marcação utilizada na construção de páginas na Web."} />
                <div className={vermais ? style.HabilidadeCSS : style.HabilidadeCSS1}>
                    <Skill imgIcone={iconeCSS} titulo={"CSS"} desc={"É um mecanismo para adicionar estilo a um documento Web."} />
                </div>
                {vermais && (
                    <div>
                        <Skill imgIcone={iconeJS} titulo={"JavaScript"} desc={"É uma linguagem de programação juntamente com HTML e CSS, é uma das três principais tecnologias da Web."} />
                        <Skill imgIcone={iconeTS} titulo={"TypeScript"} desc={"TypeScript é um superset de JavaScript de código aberto, desenvolvido pela Microsoft, que adiciona tipagem estática. Ele permite criar código mais robusto e fácil de manter, compilando para JavaScript para garantir compatibilidade."} />
                        <Skill imgIcone={iconeReact} titulo={"React JS"} desc={"O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”."} />
                        <Skill imgIcone={iconeNode} titulo={"Node JS"} desc={"Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."} />
                        <Skill imgIcone={iconeNest} titulo={"Nest JS"} desc={"Nest.js é um framework de código aberto para Node.js, baseado em TypeScript, projetado para criar aplicações escaláveis e eficientes. Oferece uma arquitetura modular e suporte a injeção de dependências, facilitando o desenvolvimento e manutenção de aplicações complexas."} />
                        <Skill imgIcone={iconeDB} titulo={"My SQL"} desc={"O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo."} />
                    </div>
                )}
            </div>
            <div className={style.btnvermais}>
                <button className={style.btnVerMenos} onClick={() => setVermais(!vermais)}>{vermais ? "Ver menos" : "Ver mais"}</button>
            </div>
        </div>
    )
}