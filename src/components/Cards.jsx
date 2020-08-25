import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the new way for FUN!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
         <ul className="cards__item">
          <CardItem 
            src="images/img-9.jpg"
            text="Explore deep inside the Amazon jungle"
            label='Adventure'
            path='/services'
          />
            <CardItem
              src="images/img-2.jpg"
              text="Let's go to Bali!"
              label='Adventure'
              path='/services'
            />
       
         </ul>
          <ul className="cards__item">
            <CardItem
              src="images/img-5.jpg"
              text="Explore deep inside the Amazon jungle"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="images/img-6.jpg"
              text="Let's go to Bali!"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="images/img-7.jpg"
              text="Let's go to Bali!"
              label='Adventure'
              path='/services'
            />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
