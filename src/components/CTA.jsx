import React from 'react'
import styles from '../style'
import Button from "./Button";


const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex flex-1 flex-col text-center sm:text-left'>
        <h2 className={`${styles.heading2} text-white`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph}`}>Everything you need to accept card payments <br />
          and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:mt-0 mt-10 sm:ml-0 ml-10`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA