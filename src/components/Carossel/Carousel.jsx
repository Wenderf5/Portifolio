import React, { useState } from 'react';
import styleCarossel from './Carossel.module.css';

//Imagens
import imgTrackMusic from '../../img/Track-Music.png';
import imgClimaHoje from '../../img/Clima-Hoje.png';
import imgNewsFeed from '../../img/desktop-design.jpg';


function Carossel() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalSlides = 3;

  const handleNext = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? totalSlides - 1 : prevPosition - 1
    );
  };

  const handleBack = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % totalSlides);
  };

  return (
    <div className={styleCarossel.container}>
      <div className={styleCarossel.back}>
        <button className={styleCarossel.btnnext} onClick={handleBack}><box-icon name="left-arrow-alt" color="#ffffff"></box-icon></button>
      </div>
      <div className={styleCarossel.conteudo}>
        <div className={
          currentPosition === 0 ? styleCarossel.position1 :
            currentPosition === 1 ? styleCarossel.position2 :
              currentPosition === 3 ? styleCarossel.position3 : styleCarossel.position3}>
          <div className={styleCarossel.ftprojeto}><img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={imgNewsFeed} alt="" /></div>
          <div className={styleCarossel.tituloprojeto}><h3>News Feed</h3></div>
          <div className={styleCarossel.descProjeto}>
            Fique por dentro das últimas atualizações em diversas áreas, com análises imparciais e fácil acesso.
          </div>
          <div className={styleCarossel.opProjeto}>
            <button className={styleCarossel.btnprojetos}><a className={styleCarossel.link} href="https://github.com/Wenderf5/news-homepage" target="_blank">Repositorio</a></button>
            <button className={styleCarossel.btnprojetos}><a className={styleCarossel.link} href="https://news-homepage-two-flax.vercel.app/" target="_blank">Aplicação no ar</a></button>
          </div>
        </div>
        <div className={
          currentPosition === 0 ? styleCarossel.position2 :
            currentPosition === 1 ? styleCarossel.position3 :
              currentPosition === 3 ? styleCarossel.position1 : styleCarossel.position1}>
          <div className={styleCarossel.ftprojeto}><img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={imgTrackMusic} alt="" /></div>
          <div className={styleCarossel.tituloprojeto}><h3>Track Music</h3></div>
          <div className={styleCarossel.descProjeto}>
            Track Music é um site onde você pode escutar previas de qualquer musica, a pesquisa
            funciona por nome do artista ou musica.
          </div>
          <div className={styleCarossel.opProjeto}>
            <button className={styleCarossel.btnprojetos}><a className={styleCarossel.link} href="https://github.com/Wenderf5/TrackMusic" target="_blank">Repositorio</a></button>
            <button className={styleCarossel.btnprojetos}><a className={styleCarossel.link} href="https://track-music.vercel.app/" target="_blank">Aplicação no ar</a></button>
          </div>
        </div>
        <div className={
          currentPosition === 0 ? styleCarossel.position3 :
            currentPosition === 1 ? styleCarossel.position1 :
              currentPosition === 3 ? styleCarossel.position2 : styleCarossel.position2}>
          <div className={styleCarossel.ftprojeto}><img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={imgClimaHoje} alt="" /></div>
          <div className={styleCarossel.tituloprojeto}><h3>Clima Hoje</h3></div>
          <div className={styleCarossel.descProjeto}>
            Clima Hoje é um site onde você pode ver o clima de qualquer região no mundo, a pesquisa
            funciona por nome da cidade ou estado.
          </div>
          <div className={styleCarossel.opProjeto}>
            <button className={styleCarossel.btnprojetos}><a className={styleCarossel.link} href="https://github.com/Wenderf5/ClimaHoje" target="_blank">Repositorio</a></button>
            <button className={styleCarossel.btnprojetos}><a className={styleCarossel.link} href="https://clima-hoje-five.vercel.app/" target="_blank">Aplicação no ar</a></button>
          </div>
        </div>
      </div>
      <div className={styleCarossel.next} >
        <button className={styleCarossel.btnback} onClick={handleNext}><box-icon name="right-arrow-alt" color="#ffffff"></box-icon></button>
      </div>
    </div>
  );
}

export default Carossel;





//<svg style={{ marginRight: "13vw", }} height="350" viewBox="0 0 472 424" fill="none" xmlns="http://www.w3.org/2000/S.Svg"><path d="M236 314.382C105.661 314.382 -6.92096e-06 268.715 -4.45856e-06 212.382C-1.99617e-06 156.049 105.661 110.382 236 110.382C366.339 110.382 472 156.049 472 212.382C472 268.715 366.339 314.382 236 314.382ZM236 122.216C120.783 122.216 27.3813 162.585 27.3813 212.382C27.3812 262.179 120.783 302.548 236 302.548C351.217 302.548 444.619 262.179 444.619 212.382C444.619 162.585 351.217 122.216 236 122.216Z" fill="#00AD6F"></path><path d="M324.335 263.382C259.165 376.259 166.786 444.931 118 416.764C69.2141 388.597 82.4958 274.259 147.665 161.382C212.835 48.5049 305.214 -20.1665 354 8C402.786 36.1665 389.504 150.505 324.335 263.382ZM157.914 167.299C100.306 267.08 88.565 368.153 131.691 393.051C174.816 417.95 256.477 357.246 314.086 257.465C371.694 157.684 383.435 56.6114 340.309 31.7129C297.184 6.81429 215.523 67.5183 157.914 167.299Z" fill="#00AD6F"></path><path d="M147.665 263.382C82.4958 150.505 69.2141 36.1666 118 8.00006C166.786 -20.1665 259.165 48.505 324.335 161.382C389.504 274.259 402.786 388.598 354 416.764C305.214 444.931 212.835 376.259 147.665 263.382ZM314.086 167.299C256.477 67.5184 174.816 6.81434 131.691 31.7129C88.565 56.6115 100.306 157.684 157.914 257.465C215.523 357.246 297.184 417.95 340.309 393.051C383.435 368.153 371.694 267.08 314.086 167.299Z" fill="#00AD6F"></path><path d="M236.111 269.722C234.556 269.722 233 269.278 231.667 268.611L217.667 260.389C215.667 259.278 216.556 258.833 217.222 258.611C220.111 257.722 220.556 257.5 223.667 255.722C223.889 255.5 224.333 255.722 224.778 255.722L235.667 262.167C236.111 262.389 236.556 262.389 237 262.167L279 237.944C279.444 237.722 279.667 237.278 279.667 236.833V188.167C279.667 187.722 279.444 187.278 279 187.056L237 162.833C236.556 162.611 236.111 162.611 235.667 162.833L193.444 186.833C193 187.056 192.778 187.5 192.778 187.944V236.389C192.778 236.833 193 237.278 193.444 237.5L205 244.167C211.222 247.278 215 243.722 215 239.944V192.167C215 191.5 215.444 191.056 216.333 191.056H221.667C222.333 191.056 222.778 191.5 222.778 192.167V240.167C222.778 248.611 218.333 253.278 210.333 253.278C207.889 253.278 205.889 253.278 200.556 250.611L189.444 244.167C186.778 242.611 185 239.722 185 236.389V188.167C185 185.056 186.778 182.167 189.444 180.389L231.667 156.167C234.333 154.611 237.889 154.611 240.556 156.167L282.556 180.389C285.222 181.944 287 184.833 287 188.167V236.611C287 239.722 285.222 242.611 282.556 244.389L240.556 268.611C239 269.278 237.667 269.722 236.111 269.722Z" fill="#00AD6F"></path><path d="M249 236.389C230.556 236.389 226.778 227.944 226.778 220.833C226.778 220.167 227.222 219.722 227.889 219.722H233.222C233.889 219.722 234.333 220.167 234.333 220.833C235.222 226.389 237.667 229.056 248.778 229.056C257.667 229.056 261.444 227.056 261.444 222.389C261.444 219.722 260.333 217.722 246.556 216.389C235 215.278 227.889 212.611 227.889 203.5C227.889 195.056 235 189.944 247 189.944C260.556 189.944 267.222 194.611 267.889 204.611C267.889 205.056 267.889 205.278 267.667 205.5C267.444 205.722 267.222 205.944 266.778 205.944H261.222C260.556 205.944 260.111 205.5 260.111 205.056C258.778 199.278 255.667 197.278 247 197.278C237.222 197.278 236.111 200.611 236.111 203.278C236.111 206.389 237.444 207.278 250.556 209.056C263.444 210.833 269.667 213.278 269.667 222.167C269.889 231.056 262.333 236.389 249 236.389Z" fill="#00AD6F"></path></svg>
//<svg className={style.iconeSobre} width="250" height="250" viewBox="0 0 386 387" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clipPath="url(#clip0_107_79)"><path d="M49.8794 223.373C44.8725 199.631 45.873 175.016 52.7901 151.759C59.7072 128.503 72.3219 107.342 89.4898 90.196" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="17.7107"></path><path d="M76.5965 44.2133C110.165 18.1231 151.556 4.12496 194.07 4.48486C236.583 4.84476 277.731 19.5416 310.853 46.1965" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="8.85563"></path><path d="M360.155 106.503C378.426 141.795 385.096 181.953 379.215 221.256C373.333 260.56 355.201 297.006 327.4 325.405C299.599 353.803 263.546 372.705 224.376 379.42C185.206 386.135 144.916 380.32 109.244 362.804" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="8.85563"></path><path d="M38.7091 116.647C52.9474 88.0908 74.8574 64.0642 101.983 47.2604C129.109 30.4565 160.379 21.5395 192.288 21.5087C224.197 21.4779 255.485 30.3346 282.643 47.086C309.801 63.8375 331.758 87.8217 346.051 116.35" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="6.64168"></path><path d="M364.124 186.691C365.161 213.62 359.848 240.416 348.614 264.912C337.38 289.408 320.541 310.918 299.458 327.703C278.374 344.488 253.638 356.078 227.247 361.536C200.856 366.994 173.552 366.166 147.54 359.121" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="6.64168"></path><path d="M139.458 57.5651C167.878 46.4682 199.064 44.5715 228.619 52.1423C258.174 59.7131 284.607 76.3695 304.192 99.7631" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="17.7107"></path><path d="M328.575 193.488C328.575 229.594 314.233 264.222 288.703 289.753C263.174 315.285 228.548 329.628 192.444 329.628C156.34 329.628 121.715 315.285 96.1852 289.753C70.6557 264.222 56.3134 229.594 56.3134 193.488C56.3134 157.381 70.6557 122.753 96.1852 97.2219C121.715 71.6907 156.34 57.3474 192.444 57.3474C228.548 57.3474 263.174 71.6907 288.703 97.2219C314.233 122.753 328.575 157.381 328.575 193.488Z" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="15.4974"></path><path d="M110.221 104.935C117.719 97.9565 126.074 91.9605 135.086 87.0916" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="11.0696"></path><path d="M368.613 186.566C370.04 223.778 359.646 260.486 338.922 291.426C318.197 322.365 288.207 345.947 253.251 358.788C218.296 371.629 180.172 373.071 144.347 362.906C108.522 352.74 76.8365 331.491 53.8348 302.204" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="3.32096"></path><path d="M94.4997 334.424C80.4446 324.668 67.9256 312.868 57.3571 299.414" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="6.64168"></path><path d="M34.7087 114.633C49.3328 85.3043 71.8434 60.6327 99.7129 43.389C127.582 26.1453 159.707 17.0123 192.48 17.0155C225.253 17.0187 257.376 26.1581 285.242 43.4073C313.108 60.6565 335.614 85.3325 350.232 114.664" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="3.32096"></path><path d="M248.665 327.74C225.34 337.49 199.88 341.005 174.786 337.938C149.692 334.872 125.827 325.329 105.537 310.249" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="17.7107"></path><path d="M336.315 216.528C331.408 246.936 316.991 275.007 295.135 296.711" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="17.7107"></path><path d="M202.619 73.0094C225.695 74.9569 247.723 83.5002 266.077 97.6204" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="11.0696"></path><path d="M311.9 210.871C308.004 237.35 295.418 261.783 276.122 280.33" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="11.0696"></path><path d="M135.927 299.967C117.811 290.363 102.441 276.302 91.2646 259.112" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="11.0696"></path><path d="M315.879 211.505C312.185 236.569 300.946 259.914 283.659 278.435C266.372 296.956 243.856 309.774 219.105 315.185C194.355 320.596 168.543 318.343 145.105 308.725C121.666 299.108 101.711 282.582 87.8946 261.346" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="4.42784"></path><path d="M254.787 97.8553C269.149 107.234 281.209 119.732 290.069 134.419C298.929 149.107 304.36 165.604 305.958 182.682C307.557 199.759 305.281 216.978 299.3 233.054C293.32 249.13 283.788 263.649 271.417 275.53" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="8.85567"></path><path d="M114.731 109.9C128.223 97.3278 144.563 88.2162 162.35 83.3472C180.137 78.4781 198.84 77.9969 216.854 81.9449" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="8.85567"></path><path d="M277.796 218.216C271.39 240.201 256.747 258.867 236.919 270.323C217.091 281.78 193.607 285.145 171.36 279.716C149.113 274.287 129.819 260.484 117.497 241.181C105.175 221.879 100.776 198.567 105.216 176.102" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="6.6418"></path><path d="M128.013 132.048C140.339 119.083 156.289 110.138 173.779 106.382C191.269 102.625 209.486 104.232 226.048 110.992C242.61 117.753 256.748 129.352 266.614 144.274C276.48 159.197 281.615 176.748 281.348 194.635" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="6.6418"></path><path d="M109.916 197.451C109.223 183.69 111.983 169.974 117.943 157.551C123.904 145.128 132.876 134.393 144.044 126.322C155.211 118.251 168.22 113.101 181.885 111.34C195.551 109.579 209.44 111.263 222.289 116.239C235.138 121.214 246.539 129.324 255.454 139.83C264.37 150.336 270.517 162.904 273.336 176.391C276.155 189.878 275.557 203.857 271.596 217.054C267.635 230.251 260.436 242.248 250.656 251.954" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="6.64177"></path><path d="M164.358 154.779C169.812 150.8 176.049 148.024 182.656 146.636C189.263 145.248 196.09 145.278 202.684 146.725C209.278 148.172 215.49 151.003 220.909 155.03C226.327 159.058 230.829 164.19 234.116 170.087C237.403 175.984 239.4 182.512 239.976 189.239C240.551 195.965 239.692 202.738 237.455 209.107C235.217 215.477 231.653 221.299 226.997 226.188C222.342 231.078 216.701 234.923 210.448 237.469" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="6.64181"></path><path d="M168.911 234.764C159.714 229.539 152.515 221.404 148.447 211.639C144.38 201.874 143.675 191.033 146.443 180.823" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="6.64181"></path><path d="M166.948 158.376C175.195 152.351 185.308 149.439 195.496 150.155C205.684 150.871 215.29 155.169 222.613 162.289C229.936 169.408 234.503 178.89 235.506 189.054C236.509 199.218 233.882 209.409 228.092 217.822C222.301 226.235 213.72 232.328 203.869 235.021C194.017 237.714 183.53 236.834 174.264 232.537C164.999 228.239 157.554 220.802 153.246 211.541C148.939 202.28 148.048 191.794 150.73 181.939" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="3.32081"></path><path d="M176.796 171.158C180.192 168.756 184.094 167.168 188.202 166.515C192.31 165.862 196.513 166.163 200.486 167.394" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="5.53457"></path><path d="M214.412 177.374C218.026 182.357 219.839 188.421 219.551 194.57C219.263 200.72 216.892 206.588 212.827 211.211" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="5.53457"></path><path d="M196.81 220.073C192.087 220.84 187.244 220.345 182.774 218.636C178.304 216.928 174.365 214.067 171.358 210.344" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="5.53457"></path><path d="M165.748 198.011C164.794 192.6 165.506 187.026 167.79 182.029" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="5.53457"></path><path d="M161.764 198.668C160.846 193.416 161.291 188.017 163.056 182.986C164.821 177.956 167.848 173.462 171.846 169.936C175.845 166.409 180.681 163.968 185.893 162.845C191.104 161.723 196.517 161.956 201.613 163.523" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="3.32089"></path><path d="M178.111 173.052C183.075 169.53 189.161 167.956 195.211 168.628C201.26 169.3 206.852 172.172 210.922 176.697C214.993 181.223 217.259 187.086 217.288 193.173C217.318 199.26 215.111 205.145 211.085 209.71" stroke="#7E7E7E" strokeOpacity="0.27" strokeWidth="3.32085"></path><path d="M340.061 193.3C340.061 232.448 324.51 269.992 296.828 297.674C269.147 325.355 231.603 340.906 192.455 340.906C153.308 340.906 115.764 325.355 88.0821 297.674C60.4006 269.992 44.8493 232.448 44.8493 193.3C44.8493 154.153 60.4006 116.609 88.0821 88.9274C115.764 61.2459 153.308 45.6946 192.455 45.6946C231.603 45.6946 269.147 61.2459 296.828 88.9274C324.51 116.609 340.061 154.153 340.061 193.3Z" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="2.21397"></path><path d="M248.552 327.088C229.774 334.961 209.548 338.792 189.192 338.333C168.835 337.873 148.803 333.134 130.399 324.422" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="3.32084"></path><path d="M316.819 118.601C331.771 143.492 338.909 172.298 337.31 201.291" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="3.32084"></path><path d="M47.4893 198.768C46.2383 165.586 56.4089 132.979 76.3026 106.392" stroke="#00AD6F" strokeOpacity="0.29" strokeWidth="3.32084"></path></g><defs><clipPath id="clip0_107_79"><rect width="386" height="386.524" fill="white"></rect></clipPath></defs></svg>
