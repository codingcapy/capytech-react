
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: video component for CapyTV
 */

export function Video(props) {
    return (
        <div>
            <video src={props.src} controls className="video"></video>
        </div>
    )
}