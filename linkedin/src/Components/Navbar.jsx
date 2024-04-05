import React from 'react'
import  '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
    const linkedin ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEUKZsL///8AY8Hy9foVaMMAU7y7yucAX8AAWL73+fyWr91Wh81ci851m9UAYcB8otgAXL8/esgATruIq9vU4PLl7PfI1u0wdcdOgsve5vSuveLs8flEeMgAS7pHfsrD0eo2bMSrwuWOp9mdt+BvlNJZgMszcMV4Q6RPAAADsElEQVR4nO2c63LqIBRGAwFzU8QYbydWTaN5/0c86cV6KduxjRDpfGum4x8mw+qWDdmAQQAAAAAAAAAAAAAAAAAAAAAAAAC4gn/Sdz+6o1Swa5ZZNtkJrvz24arZVyV7IynSpVB9d6gDajcu2ImkynTfXfotQq8H7JLZq6c2IloX7Bt13He/foVSBhfGUtl3x35DvjW5sHDvYWz0KDHKsMLDlCZXZhcWvsai7879ED0KCRk2927ylNdZ+cRsGPXdux8SzUmZ0LfJhi+MefkD3+YataTGf8s/zzLA35LZ3JKRfslwcWPMpJ6NmSCms1k58iybBXFNrGba9czEtwWNmswomYF362aRU0uAcujbt6wNTVOaZSrvAtOGRo7NI8bPqoasDS6rg/ZrkjkSpd8yWnHwbPY/ofZXU2e19jQub6hmfJahB4fAy/FyhCu1mW5XZVlUo53yWuUdpWWe5zKOfHtZJhDC35ECgMeIvzH2hOBKx1LKONYR91tJxS96M07rqqrTcRa8yChw7MMjM/yeVueNdL6oizJMWlj7F5ZlNYyl0wmYi8zM5LyjfGFuJL4aaTkyFHqSQZM7LPJyQRQBtueFptj0mtByNFZ6TNUSik3kLDpcENsAgwuZ728JZzKK36olsqpxFZwHyEQNEbcjs6GjtWt3mSija29Hpm5eKjrLRMNbX7EjtZOSQleZaEgW3s5J6sDBq0VHGb25y6W1eXUQmm4y6xs7b1eEe/tFxW4yi/Rel3bCWVuPTTeZ5f0ubUqzPmq6yfyI5GA7NA5lWGU7NC5lWGPZxqlMajmhOZUJLW+TOJVhG7vrZ7cytd3d+AfKJCWxCXeifPFCZj4SuiXY317fxFbz2WNkKp1/FDe4fmlunJNgdnd9HyFTZpJ/NRaRruimqdUduQfIFOvLf7cS9Im8rdUM0F1mtbzeM9R0fWNlNQN0ljEdsdFk8zK36NJdpjJstdHH2EKr6ayrzMw4qWtq1IRWj+R2lRkYD6WR7UPxxDKh+VBaNCQWA08tM9PGzvEFMWieWmZOpNqYWAY8tUxlngRF7qPM1HwoVUjzRZanlkmIyp6g7hg8tQxx+QEykIEMZCADGchABjKQgQxkIAMZyEAGMpCBDGQgAxnIQAYykIEMZCADGcj0I9Pl0ikjZYgTGolVmSDYj4xk55dd1HJ8wfTIgrgSozLzU/dWVd5+2YSrdz4/Pj+vLmpT0E89f+bXxx/5tREAAAAAAAAAAAAAAAAAAAAAAADAFf8BTbVVnh054DkAAAAASUVORK5CYII='

    const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
        <div className="Navbar">
            <div className="Navbar-wrap">

                <div className="navbarContentcolOne">
                    <div className="logoContainer">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="appSearchNavbar">
                        <input type="text" placeholder="Search"/>
                        <div className="SearchIcon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

                <div className="navbarContentcolTwo">
                    <ul>
                       
                        <li><Link className='linkone' to="/">
                            <div className="RouteIconTab">
                                <i className="fa-solid fa-house-chimney"></i>
                                <div className="RouteIconTabTest">
                                <p>Home</p>
                                </div>
                            </div></Link>
                        </li>
                       
                       
                       <li><Link className='linkone' to="/Network">
                            <div className="RouteIconTab">
                                <i className="fa-solid fa-house"></i>
                            </div>
                            <div className="RouteIconTabTest ">
                               <p> My Networks</p>
                            </div></Link>
                        </li>
                       
                      
                      <li><Link className='linkone' to="/Jobs">
                            <div className="RouteIconTab">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="RouteIconTabTest">
                                <p>Jobs</p>
                            </div></Link>
                        </li>
                      
                    
                        <li><Link className='linkone' to="/Messaging">
                            <div className="RouteIconTab">
                                <i className="fa-solid fa-message"></i>
                            </div>
                            <div className="RouteIconTabTest">
                                <p>Messaging</p>
                            </div></Link>
                        </li>
                    
                    
                        <li><Link className='linkone' to="/Notification">
                            <div className="RouteIconTab">
                                <i className="fa-solid fa-bell"></i>
                            </div>
                            <div className="RouteIconTabTest">
                                <p>Notifications</p>
                            </div></Link>
                        </li>
                        

                        <li>
                                {/* <div className="userIconCircle">

                                </div>
                                <div className="RouteIconTabTest">
                                    <p className='ME'>Me <i className="fa-solid fa-caret-down"></i></p> 
                                    
                                </div> */}
                                {/* <div className="nod"> */}
                                 {/* <img src="" id='und' alt="" /> */}
                            <div className="userIconCircle">

                            </div>
                            {/* <div className="doem">
                                <p>me</p>
                                <div className="dropdown">

                                <button  onClick={toggleDropdown} className="dropdown-toggle"> <MdOutlineArrowDropDown /></button>
                                {isOpen && (
                                <div className="dropdown-menu">
                                <div className="profile">
                                <div className="pro">
                                    <img className='mag' src="./asserts/background.jpg" alt="" />
                                    <div className="text">
                                    <h3 className='tet'>Tetteh victor</h3>
                                    <p className='txte'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <button className='prof'><Link className='profe'>view profile</Link></button>
                                <hr className='hed' />
                                <div className="cotn">

                                        </div>
                                        </div>
                                    </div>
                                    )}
                            </div> */}
                       </li>
                                

                    
                       <div className="navline"></div>


                    
                        <li><Link className='linkone' to="/Business">
                            <div className="RouteIconTab">
                              </div>
                                <div className="userIconCircle">
                                </div>
                                <div className="RouteIconTabTest">
                                    <p className='Business'>for business <i className="fa-solid fa-caret-down"></i></p>
                                     
                                </div></Link>
                        </li>
                   
                    
                    
                        <li> 
                            <Link className='linkone' to="/Premium">
                            <div className="RouteIconTab">
                                <p className='Naira-main'>Try premium for</p>
                                <div className="navPremuim">
                                    <p className='Naira'>NGN0</p>
                                </div>
                            </div>
                            </Link>
                        </li>
                     

                    </ul>
                </div>

            </div>
        </div>

    </>
  )
}

export default Navbar