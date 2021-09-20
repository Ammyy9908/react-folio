import React from 'react'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import "./Blog.css"

function BlogList(){
    return (
        <div className="blog-list">
            <h3>UI Interactions of the week</h3>
            <div className="blog-meta">
                <time>12 Feb 2019</time>
                <div className="divider"></div>
                <div className="blog-type">
                Express, Handlebars
                </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto odio itaque, exercitationem tempore ad voluptatem eveniet iusto doloremque eligendi culpa rem ea placeat aut, quae repudiandae blanditiis! Ex, sequi assumenda?</p>
        </div>
    )
}
function Blog() {
    const [toggle,setToggle] = React.useState(false);
    return (
        <div>
           <Navbar toggle={toggle} setToggle={setToggle}/>
            <MobileNav toggle={toggle}/>
            <div className="blog_body">
                <div className="blog__wrapper">
                    <h1>Blog</h1>
                    <div className="blogs__container">
                        <BlogList/>
                        <BlogList/>
                        <BlogList/>
                        <BlogList/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
