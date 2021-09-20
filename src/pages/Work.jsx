import React from 'react'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import "./Work.css"


function WorkList(){
    return (
        <div className="work-list">
        <div className="work_thumb">
                            <img src="https://user-images.githubusercontent.com/30069626/133368773-d63c29b5-af38-4ac4-962a-6be46f627fde.png" alt="" />
        </div>
        <div className="work_list_content">
            <h3>Designing Dashboards</h3>
            <div className="work_meta">
                <div className="work-year">
                    2020
                </div>
                <div className="work-type">
                Dashboard
                </div>
            </div>
            <div className="work_desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos adipisci optio sed cum accusantium eos maxime aliquid fuga natus modi dolor vitae, omnis quam dolorum dicta at est necessitatibus. Commodi.
            </div>
        </div>
        </div>
        
    )
}
function Work() {
    const [toggle,setToggle] = React.useState(false);
    return (
        <div>
           
            <Navbar toggle={toggle} setToggle={setToggle}/>
            <MobileNav toggle={toggle}/>
            <div className="work__body">
                <div className="work__container">
                    <h1>Work</h1>
                    <div className="work_list">
                        <WorkList/>
                        <WorkList/>
                        <WorkList/>
                        <WorkList/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Work
