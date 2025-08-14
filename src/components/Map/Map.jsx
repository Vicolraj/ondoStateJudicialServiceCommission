import {motion} from 'motion/react'
export default function Map(){
    return (
        <>
            
            <motion.iframe
                initial = {{opacity: 0}}
                whileInView = {{opacity: 1}} 
                transition={{duration: 1}}
                viewport={{amount: 0.3, once: false}}

            className="map innerSection"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7915.767244333671!2d5.208322!3d7.254084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478f932e4e1d8b%3A0x692a802c16cd664a!2sOke%20eda!5e0!3m2!1sen!2sus!4v1755090268224!5m2!1sen!2sus"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </motion.iframe>

            <style jsx = 'true'>
                {`
                    .map{
                        border: none;
                        width: 100%;
                      
                    }
                `}
            </style>
        </>
    )
}