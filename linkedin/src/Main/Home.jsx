import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Home.css'

const Home = () => {
  const job = 'https://media.istockphoto.com/id/1314814370/photo/3d-illustration-of-business-team-informal-greeting-happy-working-people-giving-high-five-and.jpg?b=1&s=612x612&w=0&k=20&c=DYsWvbGB5nh7KJPv7qpRMMWuTVaBblPLfimnLzHEJHA='
  const eng = 'https://media.licdn.com/dms/image/D4D0BAQFbdyGhac0Ewg/company-logo_100_100/0/1687183693986/primatec_engineering_logo?e=1718841600&v=beta&t=yJVqJgdxYUERc5Mx6SqRAWl6PXNd89BUhnfXhpgmZ20'
  const girlpic = 'https://media.licdn.com/dms/image/D5603AQGMK49ZAFI0GA/profile-displayphoto-shrink_200_200/0/1684972565273?e=1716422400&v=beta&t=dV0seFvYmnxlh7hJhMAVLug3cdFH5OyRT8J4yGCfG9g'
  const neo = 'https://media.licdn.com/dms/image/C4E0BAQFzhG-h4GcJmA/company-logo_200_200/0/1630600216302/neoxam_tunisie_logo?e=1718841600&v=beta&t=SWJnXVU_1sI2WwN-bWOMOajsJMyHdjj8lISlygmzv7U'
  const cam = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR93fekeRnthhDceHoEdW6PJsaiBZZxWv9VaUrN4trDXnfS5Ld7'
  return (
    <>
      <Navbar />
      <div className="bodycontainer">
        <div className="Home-Page_card">

            <div className="Home-Page_card-one"> 
                <div className="ddd">
                    <div className="Home-Page_card-top"></div>
                    {/* <div className="Home-Page_card-topMID"></div> */}
                    <div className="Home-Page_card-topEND"></div>
                </div>
                
                <div className="Home-Page_card-top-circle">
                    <img src= {cam} alt="" className='cam' />
                </div>
                <div className="Home-Page_card-top-2">
                    <a className="welcome" href="#">Welcome, Etim!</a><br/>
                    <div className="ADD">
                        <a className="ADDphoto" href="#">Add a photo</a>
                    </div>
                    <div className="line1"></div>
                </div>
                <div className="Home-Page_card-top-2b">
                    <div className="connect">
                        <a className="co-color" href="">connections</a><br/>
                    </div>
                    <div className="alumni">
                        <a className="alum-color" href="">connect with alumni</a>
                    </div>
                    <div className="line2"></div>
                </div>
                <div className="Home-Page_card-top-2c">
                    <p>strengthen your profile with an AI <br/>  writing assitant</p>
                    <a href="">Try Premium for NGN0</a>
                    <div className="line3"></div>
                </div>
                <div className="Home-Page_card-top-2d">
                    <a href="">My items</a>
                </div>
                <div className="home-pagecard-onedrop">
                    <div className="home-pagecard-onedrop-ac">
                        <div className="group">
                            <a href="">Group</a>
                        </div>
                        <div className="event">
                            <a href="">Event</a>
                        <div className="hash">
                            <a href="">Followed Hastags</a>
                        </div>

                        <div className="line4"></div>

                        <div className="dis">
                            <a href="">Discover more</a>
                        </div>
                    </div>
    
                    </div>
                </div>
            </div>


            <div className="Home-Page_card-two">

                <div className="card-two-Sub">
                    <div className="card-two-head">
                        <div className="card-two-top">
                            <div className="card-two-top-text">
                                <h3>Get ahead with premium</h3>
                            </div>
                            <div className="three-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
    
                    <div className="card-two-pic">
                        <div className="card-picdddd">
                          <img src= {job} alt="" className='job' />
                        </div>
                        <div className="pic-text">
                            <h3>Looking for your next role?</h3>
                        </div>
                        <div className="pic-text-two">
                            <p>Premium members are 2.6* more likely to get hired on  </p>
                            <p id="Avenger">average</p>
                        </div>
                        <button className="Premium-btn">Get Premuim now</button>
                    </div>
                </div>

                <div className="card-two-sub1">

                </div>
            </div>


            <div className="Home-Page_card-three">
               <div className="first-three">
                 
                <div className="three-text">
                    <div className="text">
                        <h3>Add to your feed</h3>
                    </div>
                    <div className="three-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="three-list">
                    <div className="people-cart">
                        <div className="people-picddd">
                          <img src= {girlpic} alt="" className='girlpic' />
                        </div>
                        <div className="people-text">
                            <h4>Alexandra Stark, LMHC, LPCC, <br/> LPC</h4>
                        </div>
                    </div>
                    <div className="people-text-two">
                        <p>Executive Coach helping hign achievers</p>
                    </div>
                    <div className="people-btn">
                        <button className="people-btn-main">+ Follow</button>
                    </div>
                </div>
                <div className="three-list">
                    <div className="people-cart">
                        <div className="people-picddd">
                                <img src= {neo} alt="" className='neo' />
                        </div>
                        <div className="people-text">
                            <h4>NeoXam Tunisie</h4>
                        </div>
                    </div>
                    <div className="people-text-two">
                        <p>Computer . Computer Software</p>
                    </div>
                    <div className="people-btn">
                        <button className="people-btn-main">+ Follow</button>
                    </div>
                </div>
                <div className="three-list">
                    <div className="people-cart">
                        <div className="people-picdddd">
                          <img src= {eng} alt="" className='eng'/>
                        </div>
                        <div className="people-text">
                            <h4>Sofrecom Tunisie</h4>
                        </div>
                    </div>
                    <div className="people-text-two">
                        <p>Computer . Computer Technology and <br/> Services</p>
                    </div>
                    <div className="people-btn">
                        <button className="people-btn-main">+ Follow</button>
                    </div>
                </div>
                <div className="recom">
                    <button className="recom-btn">
                        <h3>Veiw all recommendatoins <i className="fa-solid fa-arrow-right"></i></h3>
                    </button>
                </div>
               </div>

               <div className="second-three">
                    <div className="second-three-link">
                    <a href="">Ad ...</a>
                    </div>
                    <div className="second-three-text-one">
                        <p>Etim, uncover new Opportunitirs with Linkedin</p>
                        <p id="second-three-premium">premuim</p>
                    </div>
                    <div className="second-three-logo"></div>
                    <div className="second-three-text-two">
                        <h3>See who viewed your profile in the last</h3>
                        <h3  id="second-three-days">90 days</h3>
                    </div>
                    <button className="try-btn">Try for free!</button>

               </div>
               
            </div>

        </div>
    </div>
    </>
  )
}

export default Home