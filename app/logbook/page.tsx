import Image from 'next/image'
import React from 'react'

export default function LogBook() {
  return (
<main id="content" className = "content showcontent">
    <h1>Forbidden Memories Project Management</h1>
    <h2>Introduction and deliverables</h2>
    <p>Our project consists of three different deliverables:</p>
    <ol>
        <li>Creation of the game engine and the first version of the website with a delivery date of <u>30/03/2023</u>.</li>
        <li>Creation of the beta version of the game with a delivery date of <u>11/05/2023</u>.</li>
        <li>Creation of the final version of the game and the website with a delivery date of <u>15/06/2023</u>.</li>
    </ol>

    <h2>Planification</h2>
    <p>If the project direction is composed of three main deliverables. Our planning is broken down into five major periods:</p>
    <ol>
        <li>Project initiation and kickoff  ✅</li>
        <li>Creating the beta version of the game engine as well as working on the first version of the website ✅</li>
        <li>Completing the game engine to integrate all the tools to create the game as well as its functionalities</li>
        <li>With the help of the game engine, develop the expected levels and features requested by the players</li>
        <li>Deliver the final version of the game, after testing and minor improvements, as well as the final version of the website</li>
    </ol>
    <div className="timeline">
        <div className="marker start marker-ok">
            <div className="date">15.03.2023</div>
            <div className="label">Project kickoff</div>
        </div>
        <div className="marker middle-1 marker-ok">
            <div className="date">30.03.2023</div>
            <div className="label">Beta version of the Game Engine and static website delivery</div>
        </div>
        <div className="marker middle-2 marker-current">
            <div className="date">20.04.2023</div>
            <div className="label">End of Game Engine development</div>
        </div>
        <div className="marker middle-3">
            <div className="date">11.05.2023</div>
            <div className="label">End of Game development and release of first beta version</div>
        </div>
        <div className="marker end">
            <div className="date">15.06.2023</div>
            <div className="label">Final website and final game version delivery and presentation</div>
        </div>
    </div>

    <h2>Key Objectives and Sprint definition</h2>
    <p>We will work using agile methodology, while being structured according to the key points of the project expressed
        above and our intermediate deliverables. </p>
    <p>Our sprints have a duration of 1 week and upcoming tasks are planned
        for the next 2 weeks. Thus, at all times, our team knows the status and tasks to be performed for the current
        sprint as well as the n+1 sprint.</p>
    <p>In addition to this, each sprint is defined by a key objective to understand
        the theme of the tasks to be performed. Below is the list and definition of sprints until final delivery of the
        project deliverables.</p>

    <h2>Logbook</h2>
    <table>
        <tr>
            <th>Date</th>
            <th>Duration</th>
            <th>Taks</th>
            <th>Author</th>
        </tr>
        <tr>
            <td>01.03.2023</td>
            <td>04h00</td>
            <td>Creation of beta game website and 
                creation of three little games.</td>
            <td>Benoît</td>
        </tr>
        <tr>
            <td>03.03.2023</td>
            <td>03h00</td>
            <td>Initial creation of the original game script</td>
            <td>Valendin and Benoît</td>
        </tr>
        <tr>
            <td></td>
            <td>01h00</td>
            <td>Setup 3 repositories on GitLab for webiste, beta game and game</td>
            <td>Benoît</td>
        </tr>
        <tr>
            <td>09.03.2023</td>
            <td>02h00</td>
            <td>Meeting: Coordination for setup the development environment on team members computer
                and internal discussion about the art game direction
            </td>
            <td>Group</td>
        </tr>
        <tr>
            <td></td>
            <td>02h00</td>
            <td>Logo creation of the game</td>
            <td>Francesco</td>
        </tr>
        <tr>
            <td>10.03.2023</td>
            <td>03h00</td>
            <td>Website initial creation and design from the template</td>
            <td>Francesco and Leticia</td>
        </tr>
        <tr>
            <td>10.03.2023</td>
            <td>02h00</td>
            <td>Writing of the text content of the website</td>
            <td>Valentin</td>
        </tr>
        <tr>
            <td>12.03.2023</td>
            <td>01h00</td>
            <td>Add template to all the pages</td>
            <td>Leticia</td>
        </tr>
        <tr>
            <td>13.03.2023</td>
            <td>01h30</td>
            <td>Team meeting: Presentation JavaScript and Presentation Website(HTML and CSS)</td>
            <td>Group</td>
        </tr>
        <tr>
            <td>15.03.2023</td>
            <td>01h00</td>
            <td>Added some text for the HTML page</td>
            <td>Valentin</td>
        </tr>
        <tr>
            <td>22.03.2023</td>
            <td>01h00</td>
            <td>Team meeting: Define the task of each team member</td>
            <td>Group</td>
        </tr>
        <tr>
            <td></td>
            <td>02h00</td>
            <td>Add dark/light mode on the website</td>
            <td>Leticia</td>
        </tr>
        <tr>
            <td>23.03.2023</td>
            <td>02h30</td>
            <td>Create all flow page graphics</td>
            <td>Benoît</td>
        </tr>
        <tr>
            <td>25.03.2023</td>
            <td>03h00</td>
            <td>Create and add content to "Description" page</td>
            <td>Francesco</td>
        </tr>
        <tr>
            <td>26.03.2023</td>
            <td>03h00</td>
            <td>Create and add content to "Sketch" page</td>
            <td>Leticia</td>
        </tr>
        <tr>
            <td></td>
            <td>03h30</td>
            <td>Create and add content to "Homepage"</td>
            <td>Valentin</td>
        </tr>
        <tr>
            <td></td>
            <td>02h00</td>
            <td>Create and add content to "Flow" page</td>
            <td>Benoît</td>
        </tr>
        <tr>
            <td></td>
            <td>01h00</td>
            <td>Team meeting: Check modification on the website</td>
            <td>Group</td>
        </tr>
        <tr>
            <td>28.03.2023</td>
            <td>02h30</td>
            <td>Improve content of the "Homepge"</td>
            <td>Valentin</td>
        </tr>
        <tr>
            <td></td>
            <td>01h30</td>
            <td>Team meeting: Help to improve the homepage</td>
            <td>Valentin and Benoît</td>
        </tr>
        <tr>
            <td></td>
            <td>01h00</td>
            <td>Team meeting: Helpt to improve the homepage</td>
            <td>Valentin, Benoît and Leticia</td>
        </tr>
        <tr>
            <td>10-30.03.2023</td>
            <td>16h00</td>
            <td>Designing and creation of the website, bug fixing</td>
            <td>Francesco</td>
        </tr>
        <tr>
            <td></td>
            <td>10h00</td>
            <td>Designing and creation of the website, bug fixing</td>
            <td>Leticia</td>
        </tr>
        <tr>
            <td></td>
            <td>05h00</td>
            <td>Bug fixing</td>
            <td>Benoît</td>
        </tr>
        <tr>
            <td></td>
            <td>40h00</td>
            <td>Study, design and implementation of the game's JS code</td>
            <td>Benoît</td>
        </tr>
        <tr>
            <td>31.03.2023</td>
            <td>00h15</td>
            <td>Remove unused ressourcees, code optimisation</td>
            <td>Leticia</td>
        </tr>
    </table>
    <table>
        <thead>
        <tr>
            <th>Key Objective</th>
            <th>Deliverables</th>
            <th>Start Date</th>
            <th/>
            <th>End Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Sprint #0: Project Kickoff and start of Game Engine</td>
            <td>HTML/CSS/JS learning basics and games as proof of concept creation.</td>
            <td>10/03/2023</td>
            <td>➡</td>
            <td>23/03/2023</td>
        </tr>
        <tr>
            <td>Sprint #1: Game Engine et text of website</td>
            <td>Static website delivery</td>
            <td>24/03/2023</td>
            <td>➡</td>
            <td>30/03/2023</td>
        </tr>
        <tr>
            <td>Sprint #2: Finishing website</td>
            <td></td>
            <td>31/03/2023</td>
            <td>➡</td>
            <td>06/04/2023</td>
        </tr>
        <tr>
            <td>Sprint #3: Global work on Game Engine</td>
            <td></td>
            <td>07/04/2023</td>
            <td>➡</td>
            <td>13/04/2023</td>
        </tr>
        <tr>
            <td>Sprint #4: Finishing Game Engine Development</td>
            <td></td>
            <td>14/04/2023</td>
            <td>➡</td>
            <td>20/04/2023</td>
        </tr>
        <tr>
            <td>Sprint #5: Creation start of the first level of the game</td>
            <td></td>
            <td>21/04/2023</td>
            <td>➡</td>
            <td>27/04/2023</td>
        </tr>
        <tr>
            <td>Sprint #5: Finishing first level of the game</td>
            <td></td>
            <td>21/04/2023</td>
            <td>➡</td>
            <td>27/04/2023</td>
        </tr>
        <tr>
            <td>Sprint #7: Creation start of the second level of the game</td>
            <td></td>
            <td>28/04/2023</td>
            <td>➡</td>
            <td>04/05/2023</td>
        </tr>
        <tr>
            <td>Sprint #8: Link between levels</td>
            <td></td>
            <td>05/05/2023</td>
            <td>➡</td>
            <td>11/05/2023</td>
        </tr>
        <tr>
            <td>Sprint #9: Objective to define</td>
            <td>Delivery of the game beta version</td>
            <td>12/05/2023</td>
            <td>➡</td>
            <td>18/05/2023</td>
        </tr>
        <tr>
            <td>Sprint #10: Objective to define</td>
            <td>Start of react.js and CMS integration project</td>
            <td>19/05/2023</td>
            <td>➡</td>
            <td>25/05/2023</td>
        </tr>
        <tr>
            <td>Sprint #11: Objective to define</td>
            <td></td>
            <td>26/05/2023</td>
            <td>➡</td>
            <td>01/06/2023</td>
        </tr>
        <tr>
            <td>Sprint #12: Objective to define</td>
            <td>Game testing and finishing last tasks</td>
            <td>02/06/2023</td>
            <td>➡</td>
            <td>08/06/2023</td>
        </tr>
        <tr>
            <td>Sprint #13: Objective to define</td>
            <td>Global delivery</td>
            <td>09/06/2023</td>
            <td>➡</td>
            <td>15/06/2023</td>
        </tr>
        </tbody>
    </table>
</main>

  )
}
