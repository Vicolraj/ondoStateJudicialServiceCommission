import './members.css'
import EmblaCarousel from '../../components/Slider/js/EmblaCarousel'


export default function Members(){
    const OPTIONS = { loop: true };
    let output = [1,2,3,4,5,6,7]
    return(
        <footer className='members innerSection'>
            <EmblaCarousel slides={output} options={OPTIONS} />
        </footer>)
}