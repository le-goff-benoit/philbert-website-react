import Image from 'next/image'
import React from 'react'

export default function Flow() {
  return (
    <main id="content" className="content showcontent">
        <h1 >Forbidden Memories Flow</h1>
        <h2>General Game Flow</h2>
            <div className="flow-block">
                <a className="flow-link" target="_blank" href="/image/general_game_flow.jpg">
                    <img className="flow-image" src="/image/general_game_flow.jpg" />
                </a>
                <div className="flow-text">
                    <p>The game states are very simple and consist of the following elements: starting the game and departing
                    from the menu. </p>
                    <p>It is possible to consult the credits for the creators of the game or start a game.
                    When a game is in progress, it is possible to pause and resume it, otherwise a return to the menu is
                    possible. </p>
                    <p>If unfortunately, you die during your game, it is possible to restart at the beginning of
                    the current level or return to the main game menu.</p>
                </div>
            </div>
        <h2>Narrative Game Flow</h2>
        <div className="flow-block">
            <div className="flow-text">
                <p>Our game has a strong narrative component. In this sense, several scenes will be present between levels.</p>
                <p>Between dialogues, the player will evolve in three levels: Neo Tokyo, Spacecraft Building, and the... moon.</p>
                <p>Our goal behind these levels and scenes is to provide an adventure for our players.</p>
            </div>
            <a className="flow-link" target="_blank" href="/image/specific_game_flow.jpg">
                <img className="flow-image" src="/image/specific_game_flow.jpg" />
            </a>
        </div>
        <h2>Character State Flow</h2>
        <div className="flow-block">
            <a className="flow-link" target="_blank" href="/image/character_state_flow.jpg">
                <img className="flow-image" src="/image/character_state_flow.jpg" />
            </a>
            <div className="flow-text">
                <p>Our main character has 7 game states that will evolve depending on the current game/level context and the
                keyboard inputs used by the player.</p><p> It's possible to have multiple combinations of states such as "Running
                and shooting", "Running and reloading", "Jumping and reloading", etc.</p>
            </div>
        </div>
        <h2>Game Engine Architecture</h2>
        <div className="flow-block">
            <div className="flow-text">
                <p>Here you can find an overview of the software architecture of the game engine.</p>
                <p>
                Our goal behind this architecture is to spend part of the project developing tools that will then become
                part of a development framework. With this framework at hand, it will then be possible to develop the
                game quickly and to scale the levels/functions quickly.
                </p>
            </div>
            <a className="flow-link" target="_blank" href="/image/general_game_architecture.jpg">
                <img className="flow-image" src="/image/general_game_architecture.jpg" />
            </a>
        </div>
        <h2>Game Development Process</h2>
        <div className="flow-block">
            <a className="flow-link" target="_blank" href="/image/general_dev_process.jpg">
                <img className="flow-image" src="/image/general_dev_process.jpg" />
            </a>
            <div className="flow-text">
                <p>One of the first tasks we did when we started the project was to configure the repository on GitLab and
                then assign/invite the users.</p>
                <p>Then we have to make sure that each developer is clear with the development processes and that his
                development environment is functional.</p>
                <p>We have to make sure very quickly that each developer is comfortable, clear and does not encounter any
                problem with his development processes.</p>
            </div>
        </div>
    </main>
  )
}
