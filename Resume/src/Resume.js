import photo from './images/photo.jpg';
import star from './images/star_b.png';
import st from './images/star.png';
import music from './images/music.png';
import heart from './images/heart.png';
import dio from './images/diomond.png';
import graf from './images/graf.png';

function Resume() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
                {/* Left column */}
                <div className='col-8'>
                    <h1>JAMES MOORE</h1>
                    <h6 style={{"color":"#45b6fe","fontSize":"1.5625rem","marginTop":"-0.625rem"}}>Experienced Project Manager</h6>
                    <p>+1 000 *** **** @jamesmoore@gmail.com/james-moore  New York City,NY</p>

                    <h4>SUMMARY</h4>
                    <hr style={{"height": ".3125rem"}}></hr>
                    <p>Communicative financial analyst, specializing in informative and : The dynamic nature of recent times, particularly influenced by events like the pandemic, underscores the importance of agility. Professionals need to be adaptable to changing circumstances, such as the shift from office to remote work, and the ease of this transition often depends on their agility
                        financial with a variety of software programs, including SQL, Equitrak, and Lawson.</p>

                    <h4>EXPERIENCE</h4>
                    <hr style={{"height": ".3125rem"}}></hr>
                    <div  style={{"display":"flex"}}>
                        <h5>Senior IT Product Manager</h5>
                        <p style={{"marginLeft":"450px"}}>02/2019/ - Ongoing</p>
                    </div>
                    <div style={{"display":"flex"}}>
                        <h4 style={{"color":"#45b6fe","fontSize":"1.5625rem"}}>Rover Games</h4>
                        <p style={{"marginLeft":"570px"}}>San Fransico, CA</p>
                    </div>
                    <p>Having high ownership skills is crucial for interns/entry-level applicants to take responsibility, stay motivated and complete their work efficiently
                    </p>
                    <ul>
                        <li><p>Having high ownership skills is crucial for interns/entry-level applicants to take responsibility, stay motivated and complete their work efficiently</p></li>
                        <li><p>Working remotely relies heavily on technology for internal communication, client outreach, project collaboration, virtual meetings and more.</p></li>
                        <li><p>The dynamic nature of recent times, particularly influenced by events like the pandemic, underscores the importance of agility.</p></li>

                    </ul>

                    <div  style={{"display":"flex"}}>
                        <h5>Project Manager</h5>
                        <p style={{"marginLeft":"600px"}}>2012 - 2019</p>
                    </div>
                    <div style={{"display":"flex"}}>
                        <h4 style={{"color":"#45b6fe","fontSize":"1.5625rem"}}>Tesla</h4>
                        <p style={{"marginLeft":"665px"}}>Los Angeles, CA</p>
                    </div>

                    <p>Virtual work often demands creative thinking for adaptation. Interns may need to creatively use virtual</p>
                    <ul>
                        <li><p>Effective verbal as well as written communication is crucial for remote work as it is conducted through emails, video conferencing and phone calls. Clear and polite communication is especially of</p></li>
                        <li><p>Virtual work often demands creative thinking for adaptation. Interns may need to creatively use virtual means such as emails and phone calls to implement their client outreach strategiest</p></li>
                    </ul>

                    <div  style={{"display":"flex"}}>
                        <h5>Project Coordinator</h5>
                        <p style={{"marginLeft":"580px"}}>2012 - 2019</p>
                    </div>
                    <div style={{"display":"flex"}}>
                        <h4 style={{"color":"#45b6fe","fontSize":"1.5625rem"}}>Wolf Industry</h4>
                        <p style={{"marginLeft":"580px"}}>Los Angeles, CA</p>
                    </div> 

                    <p>Effective verbal as well as written communication is crucial for remote work as it is conducted through emails, video conferencing and phone calls. Clear and polite communication is especially of</p>
                    <ul>
                        <li><p>Internships and relevant real-world projects have the potential to validate your skill sets. It shows that you have professional exposure and hands-on experienc</p></li>
                        <li><p>While adding an internship experience or an academic project to your application, make sure to highlight the responsibilities you have held and the impact you were able to make while working on the same.</p></li>
                    </ul>

                    <h4>EDUCATION</h4>
                    <hr style={{"height": ".3125rem"}}></hr>

                    <div>
                        <div  style={{"display":"flex"}}>
                            <h5>Industrial Engineering MSc </h5>
                            <p style={{"marginLeft":"520px"}}>2000 - 2002</p>
                        </div>
                    </div>
                    <div>
                        <h4 style={{"color":"#45b6fe","fontSize":"1.5625rem","fontSize":"20px"}}>University of California, Berkeley</h4>                   
                    </div>

                     <div>
                        <div  style={{"display":"flex"}}>
                            <h5>Industrial Engineering BSc </h5>
                            <p style={{"marginLeft":"525px"}}>1996 - 2000</p>
                        </div>
                    </div>
                    <div>
                        <h4 style={{"color":"#45b6fe","fontSize":"1.5625rem","fontSize":"20px"}}>University of California, Berkeley</h4>                   
                    </div>
     
                </div>

                {/* Right column */}
                <div className='col-4' style={{"backgroundColor":"#013A63", "height": "1450px"}}><br />
                    <div>
                        <img src={photo} alt="" style={{"height": "6.25rem","borderRadius":"50%","marginLeft":"160px","marginTop":"20px"}}/ >
                        <h4 style={{"color":"White"}}>STRENGHTS</h4>
                        <hr style={{"backgroundColor":"white","height": ".3125rem"}}></hr>

                        <div className='row'>
                            <div className='col-1'>
                                <img src={star} alt="" style={{"height": "1.25rem"}}/>
                            </div>
                            <div className='col-11'>
                                <h6  style={{"color":"white"}}>Strategic Planner</h6>
                                <p style={{"color":"white"}}>Developing steps along the way to achieve 'big picture' results with market & stakeholders input</p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-1'>
                                <img src={st} alt="" style={{"height": ".9375rem"}}/>
                            </div>
                            <div className='col-11'>
                                <h6  style={{"color":"white"}}>Flexible</h6>
                                <p style={{"color":"white"}}>Developing steps along the way to achieve 'big picture' results with market & stakeholders input</p>
                            </div>
                        </div><br />

                        <h4 style={{"color":"White"}}>ACHIEVEMENTS</h4>
                        <hr style={{"backgroundColor":"white","height": ".3125rem"}}></hr>

                        <div className='row'>
                            <div className='col-1'>
                                <img src={dio} alt="" style={{"height": "1.25rem"}}/>
                            </div>
                            <div className='col-11'>
                                <h6  style={{"color":"white"}}>Strategic Planner</h6>
                                <p style={{"color":"white"}}>Developing steps along the way to achieve 'big picture' results with market & stakeholders input</p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-1'>
                                <img src={graf} alt="" style={{"height": ".9375rem"}}/>
                            </div>
                            <div className='col-11'>
                                <h6  style={{"color":"white"}}>Flexible</h6>
                                <p style={{"color":"white"}}>Developing steps along the way to achieve 'big picture' results with market & stakeholders input</p>
                            </div>
                        </div><br />

                        <h4 style={{"color":"White"}}>SKILLS</h4>
                        <hr style={{"backgroundColor":"white","height": ".3125rem"}}></hr>
                        <p style={{"color":"white"}}>Developing steps along the  'big picture' results with market & stakeholders input</p><br />

                        <h4 style={{"color":"White"}}>LANGUAGES</h4>
                        <hr style={{"backgroundColor":"white","height": ".3125rem"}}></hr>

                        <div class="progress">
                            <div class="progress-bar w-" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br />
                        <div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br />
                        <div class="progress">
                            <div class="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br /><br />
                        
                        <h4 style={{"color":"White"}}>PASSIONS</h4>
                        <hr style={{"backgroundColor":"white","height": ".3125rem"}}></hr>

                        <div className='row'>
                            <div className='col-1'>
                                <img src={heart} alt="" style={{"height": ".9375rem"}}/>
                            </div>
                            <div className='col-11'>
                                <p style={{"color":"White"}}>Family </p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-1'>
                                <img src={music} alt="" style={{"height": ".9375rem"}}/>
                            </div>
                            <div className='col-11'>
                                <p style={{"color":"White"}}>Composng music </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default Resume;