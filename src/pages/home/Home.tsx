import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
    return (
        <div className="flex justify-center bg-gray-50">
            <div className="container grid grid-cols-2 text-rose-950">
                <div className="flex flex-col items-center justify-center gap-4 py-4">
                    <h2 className="text-5xl font-bold">GestorPro</h2>
                    <p className="text-xl text-center">Transforme a gestão de talentos da sua empresa com soluções inovadoras e conectadas na palma da sua mão!</p>

                    <div className="flex justify-around gap-4">
                        <div className="px-4 py-2 text-lg font-semibold text-gray-600 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:text-white">
                            Saiba Mais
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full mt-6 mb-6"> 
    <Carousel
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={3000} 
        showStatus={false}
        className="w-2/3 rounded-2xl overflow-hidden"
    >
        <div>
            <img src="https://ik.imagekit.io/bikiirafb/rh2?updatedAt=1740511550269" alt="Entrevista de Contratação" className="rounded-2xl" />
        </div>
        <div>
            <img src="https://ik.imagekit.io/bikiirafb/rh3?updatedAt=1740511580829" alt="Mãos Fechando Contrato" className="rounded-2xl" />
        </div>
        <div>
            <img src="https://ik.imagekit.io/bikiirafb/rh5?updatedAt=1740511604295" alt="Analise de Profissional" className="rounded-2xl" />
        </div>
    </Carousel>
</div>

            </div>
        </div>
    );
}

export default Home;
