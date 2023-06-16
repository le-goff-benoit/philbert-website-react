import Image from 'next/image'
import React from 'react'

export default function Sketch() {
  return (
<main id="content" className ="content showcontent">
    <h1>Forbidden Memories Sketch</h1>
      <p>Before starting any project, we have to learn about the programming language and sketch some ideas.</p>
      <p>Here some explanation about that work.</p>
      <h2>... Our pre-work</h2>
      <div className="sketchgrid">
        <div className="sketchelement">
          <a href="https://forbidden-memories-beta.vercel.app/sinistros.html" target="_blank">
            <img className= "imgSketch" src="/image/sketch/Sinistros.png"/></a>
          <p>
            <a className="sketch-link" rel="Sinistros" href="https://forbidden-memories-beta.vercel.app/sinistros.html" target="_blank">
              <strong>Sinistros</strong>
            </a>
          </p>
        </div>
        <div className="sketchelement">
          <a href="https://forbidden-memories-beta.vercel.app/index.html" target="_blank">
            <img className ="imgSketch" src="/image/sketch/Owl.png" />
          </a>
          <p>
            <a className="sketch-link" rel="Owl" href="https://forbidden-memories-beta.vercel.app/index.html" target="_blank">
              <strong>Owl</strong>
            </a>
          </p>
        </div>
        <div className="sketchelement">
          <a href="https://forbidden-memories-beta.vercel.app/knight.html" target="_blank">
            <img className="imgSketch" src="/image/sketch/Knight.png" /></a>
          <p>
            <a className="sketch-link" rel="Knight" href="https://forbidden-memories-beta.vercel.app/knight.html" target="_blank">
              <strong>Knight</strong>
            </a>
          </p>
        </div>
      </div>    
      <p>For this project we had to learn HTML, CSS and JavaScript. 
        So for the first part of this project we did this website in HTML and CSS. 
        But we also integrated some JavaScript to learn a little bit more about this programming language. 
        In parallel to this we also prepared three little games to discover JavaScript.</p>
      <p>The first game is the Sinistros, with your sweet little dark dog you can walk endless forwards.</p>
      <p>The second one is the Owl, here you can flight on the left and right side, and you will also see the background how moves.</p>
      <p>And the last test, is the knight. The knight can walk on the right and the left but he can also jump. 
        Each 10 seconds he lose lives, and after 30 seconds he will die.</p>
      <h2>... Our main character</h2>
      <div className = "sketchgridmaincharacter">
        <div className="sketchmaincharacter">
          <img className="imgSketch" src="/image/character/Idle.png" />
        </div>
        <div className="sketchmaincharacter">
          <table>
            <tr>
              <th>Name</th>
            </tr>
            <tr>
              <th>Age</th>
            </tr>
            <tr>
              <th>World</th>
            </tr>
            <tr>
              <th>Superpowers</th>
            </tr>
          </table>
        </div>
        <div className="sketchmaincharacter">
          <table>
            <tr>
              <td>Philbert</td>
            </tr>
            <tr>
              <td>Unknown</td>
            </tr>
            <tr>
              <td>Neo City and Moon</td>
            </tr>
            <tr>
              <td>Run</td>
            </tr>
            <tr>
              <td>Crouch</td>
            </tr>
            <tr>
              <td>Jump</td>
            </tr>
            <tr>
              <td>Aim</td>
            </tr>
            <tr>
              <td>Shoot</td>
            </tr>
            <tr>
              <td>Reload</td>
            </tr>
          </table>
        </div>
      </div>
    <h2>Sample of animations</h2>
      <div className="sketchsprite">
        <p>Aim Animation</p>
        <img className="imgSketch" src="/image/character/AIM.png" />
      </div>
      <div className="sketchsprite">
        <p>Shoot Animation</p>
        <img className="imgSketch" src="/image/character/Shoot.png" />
      </div>
      <div className="sketchsprite">
        <p>Crouch Animation</p>
        <img className="imgSketch" src="/image/character/Crouch.png" />
      </div>
      <h2>... Our game environment</h2>
      <p>Our super detective will be in a futurist world, named Neo Tokyo. As time goes, he will also travel to the moon.</p>
      <p>But we do not want to give too much information. To know all the details you will have to play the game.</p>  
  </main>

  )
}
