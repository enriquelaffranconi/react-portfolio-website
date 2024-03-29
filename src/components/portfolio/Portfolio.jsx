import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
 

const data = [
  {
   id: 1,
   image: IMG1,
   title: 'Presentation game',
   github: 'https://github.com/enriquelaffranconi/Hello-',
   demo: 'https://introduction-seven.vercel.app/',
   name: "Game intro"

  },
  {
    
    id: 2,
    image: IMG4,
    title: 'This page',
    github: 'https://github.com/enriquelaffranconi/react-portfolio-website',
    demo: 'https://react-portfolio-website-968l.vercel.app/', 
    name: "This website"
 
   },
   {
    id: 3,
    image: IMG3,
    title: 'Tomón',
    github: 'https://github.com',
    demo: 'https://tomon.empretienda.com.ar/', 
    name: "TOMÓN"

 
   },
   {
    id: 4,
    image: IMG2,
    title: 'Agua de las verdes matas',
    github: 'https://github.com',
    demo: 'https://aguadelasverdesmatas.com', 
    name: "Agua de las Verdes Matas",
    password: "Password: VerdesMatas"
   },
   {
    id: 5,
    image: IMG5,
    title: 'DeliveryDCP',
    github: 'https://github.com',
    demo: 'https://www.deliverydcp.com/', 
    name: "Delivery DCP"

 
   },
   {
    id: 6,
    image: IMG6,
    title: 'Portfolio Sara Forestan',
    github: 'https://github.com',
    demo: 'https://www.saraforestan.com/', 
    name: "Portfolio Sara Forestan"
   },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Porftolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, name, password}) => {
            return(
              <article key= {id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt= {title}></img>
              </div>
              <h3>{name}</h3>
              <div className="portfolio__item-cta">
                <a href= {github} className='btn' target={'_blank'} rel="noreferrer">Github</a>
                <a href= {demo} className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
              </div>
              <h4>{password}</h4>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio