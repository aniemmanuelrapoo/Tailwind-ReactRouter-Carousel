import React, { useEffect, useState } from 'react'

const ImageMover = ({ images = [], autoPlay = true, autoPlayTime = 3000, children, ...props }) => {
    const [currentSlid, setCurrentSlid] = useState(0)
    const nextSlid = (slidIndex = currentSlid + 1) => {
        const newSlidIndex = slidIndex >= images.length  ? 0 : slidIndex
            setCurrentSlid(newSlidIndex)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlid()
        }, autoPlayTime)

        return () => {
            clearTimeout(timer)
        }
    }, [currentSlid])
    // console.log(images.length)

    return (
        <div className="h-screen flex flex-nowrap overflow-x-hidden relative">
                {images.map((image, index) => (
                <div key={index} className="h-full w-screen flex-shrink-0 bg-center bg-cover bg-url transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${image})`, marginLeft: index === 0 ? `-${currentSlid * 100}%` : undefined}}></div>
                ))}
                
                <div className="w-full h-full absolute top-0 left-0 bg-opacity-75 bg-black"></div>
                <IndicatorRapper currentSlid={currentSlid} amountSlides={images.length} nextSlid={nextSlid} />
                <div className="absolute t-52 left-52 transform translate-x-52 translate-y-52">{children}</div>
                
        </div>
    )
}

const IndicatorRapper = ({currentSlid, amountSlides, nextSlid}) => {
    const isActive = currentSlid
    return(
        <div className="flex flex-nowrap absolute bottom-14 right-14">
            {Array(amountSlides).fill(1).map((_, i) => <div className={`w-2 rounded-full h-2 bg-white ${isActive === i ? 'opacity-80' : 'opacity-40'} m-5 transition-all duration-700 ease-in-out`} key={i} onClick={() => nextSlid(i)}></div>)}
        </div>
    )
}

export default ImageMover
