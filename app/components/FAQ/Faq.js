import Title from '../utils/title';
import FaqItem from './FaqItem';

export default function test() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6 p-16" id="Servicios">
            <Title title='Preguntas Frecuentes' />
            <div className='pt-8 text-left border-t border-gray-200'>
                <FaqItem />
                {/* <div >
                    
                </div> */}
            </div>
        </section>
    );
}