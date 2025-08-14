import Button from '../../components/Button/Button.jsx'
import './home.css'
import About from '../../components/About/About.jsx'
import Members from '../../components/Members/Members.jsx'
import Map from '../../components/Map/Map.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import { motion } from "motion/react";

export default function Home(){
    return(
        <>
        
            <motion.section initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: .7, ease: 'easeIn', delay: 0.2}} className='innerSection home' >
                <span className="scrollTO" id='home'></span> 
                <article>
                    <h2>Judicial excellence</h2>
                    <h5>Empowering the judiciary with integrity and fairness.</h5>
                    <Button onclick = {() => window.location = "#services"} content={'View Services'}  />
                </article> 
            </motion.section>
            <About />
            <Members />
            <Contact />
            <Map />
        </>
    )
}