import './about.css'
import img from '../../assets/img/law.webp'
import {motion} from 'motion/react'

export default function About(){
    return(
        <section className='innerSection about' id='about'> 
            <motion.article
                initial = {{x: -70,  opacity: 0}}
                whileInView = {{x: 0, opacity: 1}} 
                transition={{duration: 1}}
                viewport={{amount: 0.3, once: false}}>
                <h2>About</h2>
                <h3><i>Judicial Service Leadership</i></h3>
                <p>
                    <strong>Ensuring integrity & excellence in judiciary: </strong>
                    Ondo State Judicial Service Commission oversees the appointment,
                    promotion, and discipline of judicial and non-judicial staff,
                    ensuring excellence and integrity within the Ondo State Judiciary.
                    We are committed to upholding justice through transparent and fair processes. Get in touch</p>
              
                <h3><em>Judicial Staff Management</em></h3>
                <p>
                    <strong>Expert appointment, promotion, and discipline: </strong>
                    Ondo State Judicial Service Commission is a body responsible for the appointment, promotion, and disciplinary control of judicial and non-judicial staff within the Ondo State Judiciary. The commission is chaired by the Chief Judge of Ondo State, and also includes the State Attorney-General and Commissioner for Justice, the President Ondo State Customary Court of Appeal, along with Four (4) other members appointed by the Governor.

Judicial staff appointment 
Efficient and transparent appointment of judicial personnel.

</p>
            </motion.article>  
            <motion.img
            initial = {{x: 70,  opacity: 0}}
            whileInView = {{x: 0, opacity: 1}} 
            transition={{duration: 1}}
            viewport={{amount: 0.3, once: false}}
            src={img}/>
        </section>
    )
}


