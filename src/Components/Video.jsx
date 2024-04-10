import React from 'react'
import "../Styling/Video.css"
import { VideoData } from '../Data/VideoData'

export default function VideoDisplay() {
   
  return (
    <div className='big-wrapper'>
        <h1 className='inter centered-head'>CHECK OUT OUR ART</h1>
        <div className='wrapper'>
        {VideoData.map((video, index) => {
            return (
                    <div key={index} className='wrapper-container-videos'>
                        <div className='player-container-video'>
                            <video muted controls={true} className='video-player'>
                                <source src={video.url} type="video/mp4" />
                            </video>
                        </div>
                    </div>
            )
        })}
        </div>
    </div>
    )
    }
    