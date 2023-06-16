import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import type {GetServerSideProps } from 'next'
import axios from 'axios'


export default async function Home() {

  return (
    <main id="content" className="content showcontent">
    <h1>Welcome to the Forbidden Memories website</h1>
    <div className="homeFirstParagraph">
      <p>On this home page, you'll find a summary for each page of the websites and the link to play our game :
        <strong>Philbert Forbidden Memories</strong></p>
      <a href="https://forbidden-memories-game.vercel.app" target="_blank">
        <img className="index-image" src="/image/gameHomePage.PNG" />
      </a>
      <div className="bottomButton">
        <div className="buttonMenuPage">
          <a href="https://forbidden-memories-game.vercel.app" target="_blank">PLAY PHILBERT FORBIDDEN MEMORIES</a>
        </div>
      </div>
    </div>
    <div className="homeSimpleDiv">
      <div>
        <h2>
          ... Our Team
        </h2>
        <ul>
      </ul>
        <div>
          <p>
            We are a small students team from the HES-SO who had the mission to create a videogame. Our goal was to
            produce a short videogame for learning purposes
            and to make it the most entertaining possible for <strong>you</strong> to play !
          </p>
          <p>
            If you wish to know more about us, visit our description page !
          </p>
          <div className="buttonMenuPage">
            <a href="description.html">Discover the team behind the game</a>
          </div>
        </div>
        <h2>
          ... Our Journey
        </h2>
        <div>
          <p>
            Before starting to create a videogame, you first have to understand how characters can move. This is why we
            have created 3 small game-like sketches
            to understand some of the mechanics of character's interactions. You can discover and play it on our early
            work !
          </p>
          <p>
            Furthermore, even before starting to create <strong>Philbert Forbidden Memories</strong> we had to find an
            appropriate scenario to build our game around.
            We've done that to first get a global picture of what we wanted to then code the structure of our game.
          </p>
          <div className="buttonMenuPage">
            <a href="sketch.html">Our early work</a>
            <a href="description.html">Visit our description page</a>
          </div>
        </div>
        <h2>
          ... Game flow
        </h2>
        <div>
          <p>
            This section shows how the different interactions in the code of our game for those who are curious to
            understand the basics of how a game is coded and how to implement everything.
          </p>
          <p>
            You'll find the patterns used in the conception of the game, the structure of the narrative, the animation
            sprites of the main character and much more...
          </p>
          <p>
            So be curious and have a look !
          </p>
          <div className="buttonMenuPage">
            <a href="flow.html">Discover how our game works</a>
          </div>
        </div>
      </div>
    </div>
  </main>

  )
}