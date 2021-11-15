import React from 'react'
import styles from './Contact.module.css'

//AIzaSyBU57RvMqvTTJiYbGlgFQc72zShle2yQik

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <h1 className={styles.heading}>CONTACT US</h1>
            <div className={styles.container}>
                <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95468.50653051559!2d-109.23663462250065!3d41.60405955890876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a58e8f5c28b19:0x725fe8127303770!2sRock%20Springs,%20WY%2082901,%20USA!5e0!3m2!1sen!2sin!4v1624533885304!5m2!1sen!2sin" frameBorder="0"></iframe>
                </div>
                <div className={styles.left}>
                    <form action="" className={styles.contactform} autoComplete="off">
                        <div>
                            <input className={styles.name} type="text" name="name" id="name" placeholder="Name" autoComplete="new-password" />
                            <input className={styles.email} type="email" name="email" id="email" placeholder="Email" autoComplete="new-password" />
                            <textarea className={styles.message} type="text" name="message" id="message" placeholder="Your message here..." />
                        </div>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
