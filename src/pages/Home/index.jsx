import style from './index.module.css';
import { NavBar } from '../../layout/Navbar';
import { Footer } from '../../layout/Footer';
import { About } from '../about';
import { Projects } from '../projects';
import { Skills } from '../skills';
import iconeGitHub from '../../assets/img/icone-git-hub.png';
import iconeLinkedin from '../../assets/img/linkedin-logo-48.png';
import iconWhatsApp from '../../assets/img/whatsapp-logo-240.png';
import { useState } from 'react';

export function Home() {
  const [Menu, setMenu] = useState(false);

  return (
    <>
      <div className={Menu ? style.divmenumobile0 : style.divmenumobile1}>
        <button className={style.btnmenumobile}><a href="#home"><box-icon name='home' type='solid' color='#ffffff' ></box-icon></a></button>
        <button className={style.btnmenumobile}><a href="#about"><box-icon name='info-circle' color='#ffffff' ></box-icon></a></button>
        <button className={style.btnmenumobile}><a href="#projects"><box-icon name='spreadsheet' color='#ffffff' ></box-icon></a></button>
        <button className={style.btnmenumobile}><a href="#skills"><box-icon name='graduation' type='solid' color='#ffffff' ></box-icon></a></button>
      </div>
      <div id="home" className={style.bloco1}>
        <NavBar setMenu={setMenu} menu={Menu} />
        <div className={style.divtitulo}>
          <div className={style.divtitulo1} >
            <div className={style.ttlW}>Wender Fabiano</div>
            <div className={style.ttlD}><span>Desenvolvedor Web&nbsp;</span><span className={style.piscar}>|</span></div>
            <div className={style.divredes}>
              <div className={style.btnIconeRedes}><a href="https://www.linkedin.com/in/wender-fabiano-848a28260/" target="_blank"><img className={style.imgredes} src={iconeLinkedin} alt="" /></a></div>
              <div className={style.btnIconeRedes}><a href="https://github.com/Wenderf5" target="_blank"><img className={style.imgredes} src={iconeGitHub} alt="" /></a></div>
              <div className={style.btnIconeRedes}><a href="https://wa.me/5538998731886" target="_blank"><img className={style.imgredes} src={iconWhatsApp} alt="" /></a></div>
            </div>
          </div>
        </div>
        <div className={style.divHome}><svg className={style.imgHome} height="350" viewBox="0 0 472 424" fill="none" xmlns="http://www.w3.org/2000/S.Svg"><path d="M236 314.382C105.661 314.382 -6.92096e-06 268.715 -4.45856e-06 212.382C-1.99617e-06 156.049 105.661 110.382 236 110.382C366.339 110.382 472 156.049 472 212.382C472 268.715 366.339 314.382 236 314.382ZM236 122.216C120.783 122.216 27.3813 162.585 27.3813 212.382C27.3812 262.179 120.783 302.548 236 302.548C351.217 302.548 444.619 262.179 444.619 212.382C444.619 162.585 351.217 122.216 236 122.216Z" fill="#00AD6F"></path><path d="M324.335 263.382C259.165 376.259 166.786 444.931 118 416.764C69.2141 388.597 82.4958 274.259 147.665 161.382C212.835 48.5049 305.214 -20.1665 354 8C402.786 36.1665 389.504 150.505 324.335 263.382ZM157.914 167.299C100.306 267.08 88.565 368.153 131.691 393.051C174.816 417.95 256.477 357.246 314.086 257.465C371.694 157.684 383.435 56.6114 340.309 31.7129C297.184 6.81429 215.523 67.5183 157.914 167.299Z" fill="#00AD6F"></path><path d="M147.665 263.382C82.4958 150.505 69.2141 36.1666 118 8.00006C166.786 -20.1665 259.165 48.505 324.335 161.382C389.504 274.259 402.786 388.598 354 416.764C305.214 444.931 212.835 376.259 147.665 263.382ZM314.086 167.299C256.477 67.5184 174.816 6.81434 131.691 31.7129C88.565 56.6115 100.306 157.684 157.914 257.465C215.523 357.246 297.184 417.95 340.309 393.051C383.435 368.153 371.694 267.08 314.086 167.299Z" fill="#00AD6F"></path><path d="M236.111 269.722C234.556 269.722 233 269.278 231.667 268.611L217.667 260.389C215.667 259.278 216.556 258.833 217.222 258.611C220.111 257.722 220.556 257.5 223.667 255.722C223.889 255.5 224.333 255.722 224.778 255.722L235.667 262.167C236.111 262.389 236.556 262.389 237 262.167L279 237.944C279.444 237.722 279.667 237.278 279.667 236.833V188.167C279.667 187.722 279.444 187.278 279 187.056L237 162.833C236.556 162.611 236.111 162.611 235.667 162.833L193.444 186.833C193 187.056 192.778 187.5 192.778 187.944V236.389C192.778 236.833 193 237.278 193.444 237.5L205 244.167C211.222 247.278 215 243.722 215 239.944V192.167C215 191.5 215.444 191.056 216.333 191.056H221.667C222.333 191.056 222.778 191.5 222.778 192.167V240.167C222.778 248.611 218.333 253.278 210.333 253.278C207.889 253.278 205.889 253.278 200.556 250.611L189.444 244.167C186.778 242.611 185 239.722 185 236.389V188.167C185 185.056 186.778 182.167 189.444 180.389L231.667 156.167C234.333 154.611 237.889 154.611 240.556 156.167L282.556 180.389C285.222 181.944 287 184.833 287 188.167V236.611C287 239.722 285.222 242.611 282.556 244.389L240.556 268.611C239 269.278 237.667 269.722 236.111 269.722Z" fill="#00AD6F"></path><path d="M249 236.389C230.556 236.389 226.778 227.944 226.778 220.833C226.778 220.167 227.222 219.722 227.889 219.722H233.222C233.889 219.722 234.333 220.167 234.333 220.833C235.222 226.389 237.667 229.056 248.778 229.056C257.667 229.056 261.444 227.056 261.444 222.389C261.444 219.722 260.333 217.722 246.556 216.389C235 215.278 227.889 212.611 227.889 203.5C227.889 195.056 235 189.944 247 189.944C260.556 189.944 267.222 194.611 267.889 204.611C267.889 205.056 267.889 205.278 267.667 205.5C267.444 205.722 267.222 205.944 266.778 205.944H261.222C260.556 205.944 260.111 205.5 260.111 205.056C258.778 199.278 255.667 197.278 247 197.278C237.222 197.278 236.111 200.611 236.111 203.278C236.111 206.389 237.444 207.278 250.556 209.056C263.444 210.833 269.667 213.278 269.667 222.167C269.889 231.056 262.333 236.389 249 236.389Z" fill="#00AD6F"></path></svg></div>
      </div>
      <div id="about" style={{ scrollMarginTop: "70px" }}><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills" style={{ scrollMarginTop: "70px" }}><Skills /></div>
      <Footer />
    </>
  )
}