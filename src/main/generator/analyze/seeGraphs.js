import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// css
import '../../css/graph.css';
// file 
import { Canvas } from '../../js/graph';


// test
const testList = [
    
]


export function TestGraphs (props) {

    const getCanvas = () => {
        return (
            testList.map(song => {
                return (
                    <Canvas song={song.song} key={song.song}></Canvas>
        )}))
    }

    return(
        <div className="graph">
            { getCanvas() }
        </div>
    )
}