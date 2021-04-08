import React from 'react'
import CardItem from './CardItem.js'
import '../styles/Cards.css'

function Cards () {
  return (
    <div className='cards'>
      <h1> Some Projects I worked On </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/img-1.jpg"
              text="Constructed sortable review components within a carousel to deliver modular UI/UX
              Deployed microservice architecture using AWS EC2 to reduce coupling with team’s modules
              Optimized page load time and Time to interactive of page from 3s to 0.5s as well as improve page performance score from 91 to 100 through text compression
              "
              label="Front-End"
              path='/projects'
            />
             <CardItem
              src="images/img-2.jpg"
              text="Used TensorFlow.js Machine Learning Models for item recognition
              Designed and Created an account login tool through React to improve user experience and save user data
              Implemented user database using MongoDB to store login information and email
              Developed application in REST API architectural style allowing for efficient GET and POST requests
              "
              label="Full-Stack"
              path='/projects'
            />
             <CardItem
              src="images/img-uni.jpg"
              text="Update site with latest product and Services. Replace images and product text that show up on Home webapge. Ensure all information is accurate and up to date. Improve Client's customers UI/UX."
              label="Front-End"
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>

             <CardItem
              src="images/img-loading.jpg"
              text="Scaled microservice to handle 2200 RPS with 55M records of user data by deploying three Node/Express servers on with Nginx load balancer
              Identified system bottlenecks with K6 and New Relic to prioritize high ROI optimizations
              Improved SEO and reduced page load time to <350ms by implementing connection pools to Postgres database
              "
              label="Back-End"
              path='/projects'
            />
             <CardItem
              src="images/img-coins.jpg"
              text="Utilized React to work with Alpha Vantage and Finn Hub API to obtain real time stock price information
              Designed client portfolio graph through Chart.js to track user stock exchanges over a 100 day period
              Implemented stock database structure using FireBase to store over 10M user stock records
              Integrated Material UI to create modular logos that were reused throughout the web application
              "
              label="Full Stack"
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards