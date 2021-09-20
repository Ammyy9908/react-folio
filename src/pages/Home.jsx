import React from 'react'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'
import WorkCard from '../components/WorkCard'
import "./Home.css"
function Home() {

    const [toggle,setToggle] = React.useState(false);
    return (
        <div className="home">
            <Navbar toggle={toggle} setToggle={setToggle}/>
            <MobileNav toggle={toggle}/>
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="user__avatar">
                    <img src="https://images.unsplash.com/photo-1622626426572-c268eb006092?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="hero__content__left">
                        <h1>Hi, I am John Doe,Creative Technologist</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptas rerum aperiam perferendis nulla consectetur neque non dolorum, repudiandae labore maxime earum corporis expedita. Quam recusandae dignissimos veritatis voluptas repellendus.</p>

                        <a href="#download" className="resume_btn">Download Resume</a>
                    </div>
                    <div className="hero__content__right">
                        <img src="https://images.unsplash.com/photo-1622626426572-c268eb006092?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
            </div>

            <section className="posts">
                <div className="posts__wrapper">
                    <div className="posts_header">
                        <h3>Recent Posts</h3>
                        <a href="#all">View all</a>
                    </div>
                    <div className="posts__container">
                        <PostCard/>
                        <PostCard/>
                      
                    </div>
                </div>
            </section>

            <section className="works">
                <div className="work__wrapper">
                    <div className="work__header">
                        <h3>Featured works</h3>
                    </div>

                    <div className="works_list">
                        <WorkCard/>
                        <WorkCard/>
                        <WorkCard/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home
