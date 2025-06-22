import './Carrossel.css';
import AppleWatch from '..//assets/images/apple-watch.png';
import AirPods from '../assets/images/air-pods.png';
import VisionPro from '../assets/images/vision-pro.png';

export default function Carrossel() {

    return (
        <main className='container'>

            <div className='tech-circle'>

                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>

            <div className='list'>
                <div className='item active'>
                    <div className='product-img'>
                        <img src={AppleWatch} alt="Apple Watch" />
                    </div>
                    <div className='content'>
                        <p className='product-tag'>Novo Lançamento</p>
                        <p className='product-name'>Apple Watch Series 10</p>
                        <p className='description'>O smartwatch mais avançado do mercado. Monitoramento completo de saúde, GPS integrado, tela AMOLED de alta resolução e bateria de alta duração. Perfeito para acompanhar seu estilo de vida ativo.</p>
                        <button className='btn'>Saiba Mais</button>
                    </div>
                </div>

                <div className='item'>
                    <div className='product-img'>
                        <img src={AirPods} alt="Air Pods Max" />
                    </div>
                    <div className='content'>
                        <p className='product-tag'>Som Premium</p>
                        <p className='product-name'>Air Pods Max</p>
                        <p className='description'>Experimente o som em sua forma mais pura. Cancelamento de ruído adaptativo, qualidade de áudio excepcional e design ergonômico par o máximo conforto. sua música nunca ficou tão bem.</p>
                    </div>
                    <button className='btn'>Saiba Mais</button>
                </div>

                <div className='item'>
                    <div className='product-img'>
                        <img src={VisionPro} alt="Vision Pro" />
                    </div>
                    <div className='content'>
                        <p className='product-tag'>Alta Performace</p>
                        <p className='product-name'>Vision Pro</p>
                        <p className='description'>Realidade aumentada imersiva com Apple Vision Pro: inovação ao alcance dos olhos</p>
                    </div>
                    <button className='btn'>Saiba Mais</button>
                </div>
            </div>

            <div className='arrows'>
                <button className='arrow-btn' id='prev'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </button>
                <button className='arrow-btn' id='next'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </div>
            <div className='indicators'>
                <div className='numbers'>01</div>
                <div className='dots'>
                    <div className='dot active'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>
        </main>
    );
};