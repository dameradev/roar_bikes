import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import styled from '@emotion/styled'
import heroback from '../assets/images/hero-back.jpg'
import UrbanBike from '../assets/images/urban-bike.jpg'
import NewLineUp from '../assets/images/new-line-up.jpg'
import { respondTo } from '../utils/respondTo'

// import Img from

const HeroStyles = styled.div`
  background: url(${heroback});
  background-size: cover;
  background-position: bottom;
  color: white;
  height: 80vh;
  position: relative;

  h1 {
    position: absolute;
    font-size: 11rem;
    text-transform: uppercase;
    font-weight: bold;
    word-break: break-word;
    width: 30vw;
    left: 60vw;
    top: 5vh;
    span {
      padding-left: 10rem;
    }
    ${respondTo.laptop`
    top: 10vh;
    font-size: 8rem;
  `}
  }
  h2 {
    position: absolute;
    font-size: 4rem;
    font-style: italic;
    text-align: right;
    text-transform: uppercase;
    font-weight: 100;
    word-break: break-word;
    width: 15vw;
    left: 70vw;
    top: 35vh;
    ${respondTo.laptop`
    font-size: 3.5rem;
    top: 35vh
  `}
    span {
      padding-left: 10rem;
    }
  }
`

const UrbanBikeStyles = styled.div`
  background: black;
  color: var(--white);
  height: 40vh;
  font-size: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 15rem;
  div {
    width: 50%;
    text-align: center;
    padding: 5rem;
    font-weight: 100;
    h2 {
      font-weight: 100;
    }
  }
  p {
    font-size: 2rem;
  }
  button {
    padding: 1.5rem 3rem;
    text-transform: uppercase;
  }
`

const GoByBikeStyles = styled.div`
  background: var(--blue);
  color: var(--white);
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-style: italic;
    font-weight: 100;
  }
  h4 {
    font-style: 900;
  }
`

const NewLineUpStyles = styled.div`
  background: url(${NewLineUp});
  background-size: cover;
  /* background-position: bottom; */
  color: white;
  height: 90vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 12rem;
    text-transform: uppercase;
    font-weight: 900;
  }
  h2 {
    margin-top: 5rem;
    text-transform: uppercase;
    font-size: 6rem;
    border: 2rem solid var(--white);
    padding: 3rem 6rem;
  }
`
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroStyles>
      <h1>
        Roar <span>Bikes</span>
      </h1>
      <h2>Quality guarentee</h2>
    </HeroStyles>
    <UrbanBikeStyles>
      <img src={UrbanBike} />
      <div>
        <h2>Surviving the urban journey</h2>
        <p>
          The Allez E5's premium alloy frame is built for versatility, combining
          sturdy, confident handling with the rocket-like feeling of a race
          bike. And for durability, it includes a FACT carbon fork and reliable
          Claris shifting. It's constructed from our lightweight and ultra
        </p>
        <button>shop now</button>
      </div>
    </UrbanBikeStyles>
    <GoByBikeStyles>
      <h3>#GoByBike</h3>
      <h4>There has never been a better time.</h4>
    </GoByBikeStyles>
    <NewLineUpStyles>
      <h1>New line-up 2021</h1>
      <h2>all models</h2>
    </NewLineUpStyles>

    <ProductGrid />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
