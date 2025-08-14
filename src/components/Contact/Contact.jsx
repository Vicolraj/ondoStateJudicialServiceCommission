import './contact.css'

import { motion } from "motion/react";

export default function Contact(){
    return(
        <section className='innerSection contact' id='contact'>
            <article></article>
            <div>
                <label htmlFor="name">Name:<br /><input type="text" /></label><br />
                <label htmlFor="name">Name:<br /><input type="text" /></label><br />
                <label htmlFor="name">Name:<br /><input type="text" /></label><br />
                <label htmlFor="name">Name:<br /><input type="text" /></label><br />
            </div>
        </section>
    )
}