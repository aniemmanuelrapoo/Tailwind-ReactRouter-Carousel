import React from 'react'
import image1 from '../images/18-185317_fifa-real-cristiano-17-16-18-ronaldo-clipart.png'

const Content = () => {
    return (
        <div>
            <div className="card_t">
            <img src={image1} alt="ronal" className="h-full rounded mb-20 shadow" />
            <div className="card_text">
                <h2 className="text-2xl mb-2">Egg RapooCook</h2>
                <p className="mb-2">Rapoo The Almighty Cooker</p>
                <span>$16</span>
            </div>
            </div>

            <div className="card_t">
            <img src={image1} alt="ronal" className="h-full rounded mb-20 shadow" />
            <div className="card_text">
                <h2 className="text-2xl mb-2">Egg RapooCook</h2>
                <p className="mb-2">Rapoo The Almighty Cooker</p>
                <span>$16</span>
            </div>
            </div>
        </div>
        
    )
}

export default Content
