import React from 'react'
import "./WorkCard.css"
function WorkCard() {
    return (
        <div className="work-card">
            <div className="work_card_image">
                <img src="https://user-images.githubusercontent.com/30069626/133368773-d63c29b5-af38-4ac4-962a-6be46f627fde.png" alt="" />
            </div>
            <div className="work__meta">
                <h2>Designing Dashboards</h2>
                <div className="work__meta__small">
                    <div className="work__year">
                        2020
                    </div>
                    <div className="work_type">
                        <span>Dashboard</span>
                    </div>
                </div>
                <p className="work__description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            </div>
            
        </div>
    )
}

export default WorkCard
