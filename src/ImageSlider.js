import React from 'react'
import ImageMover from './componets1/ImageMover'

import image1 from './images/4fc15371cf2c0fc98ce468e3f9fa6e70.jpg'
import image2 from './images/5ea53a81a3aa0cc9be01127faa8c576f.png'
import image3 from './images/20190718_083043.png'
import image4 from './images/IMG_1335.JPG'
import image5 from './images/18-185317_fifa-real-cristiano-17-16-18-ronaldo-clipart.png'

const ImageSlider = () => {
    return (
        <div>
            <ImageMover images={[image1, image2, image3, image4, image5]}>
                <div className="flex flex-col text-center">
                    <h1 className="font-bold text-6xl text-white">React js image slider</h1>
                    <p className="text-gray-900">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat.</p>
                </div>
                
            </ImageMover>
        </div>
    )
}

export default ImageSlider
