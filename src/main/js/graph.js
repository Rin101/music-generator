import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// css
import '../css/graph.css';
// file 
import { getCoordinates, draw } from '../generator/analyze/graph-visualizer';
import { convertToIndex } from './general';


export const Canvas = (props) => {
    const canvasRef = useRef()

    let song = convertToIndex(props.song["song"], props.song["details"]["key"])
    
    useEffect(() => {
        const canvas = canvasRef.current
        let ctx = canvas.getContext("2d");
        
        //draw come here
        draw(ctx, getCoordinates(song))
    }, [draw])

    return(
        <div className="canvas-container">
            <canvas className="canvas" ref={canvasRef} width="500" height="300"></canvas>
        </div>
    )
}

export function Graph (props) {

    const getCanvas = () => {
        return (
            props.songs.map(song => {
                return (
                    <Canvas song={song} key={song.song}></Canvas>
        )}))
    }

    return(
        <div className="graph">
            { getCanvas() }
        </div>
    )
}