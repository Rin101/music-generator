import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';
// material-ui
import Button from '@material-ui/core/Button'

export function MusicPlayer(props) {

    const playpause = useRef()
    // create these functions in different js file
    const progressContainer = useRef()
    const progressBar = useRef()
    // traversy media
    // progressPercent = (currentTime/songLength) * 100
    // progressBar.style.width = progressPercent
    // ================================================
    const synth = new Tone.Synth().toDestination()

    const sampler = new Tone.Sampler({
        urls: {
            A1: "A1.mp3",
            A2: "A2.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/casio/",
    }).toDestination();
    
    // const checkSound = () => {
    //     // synth.triggerAttackRelease("8n", 1)
    //     sampler.triggerAttackRelease("C3", "8n", now)
    //     sampler.triggerAttackRelease("C4", "8n", now+1)
    // }

    // ===================================================-
   
    const bpmCalc = (bpm) => {
        const timeForEachBeat = 1/(bpm/60)
        // const timeForEachBeat = Math.round(1/(bpm/60) * 1000) / 1000
        return timeForEachBeat
    }

    const calcSongLength= (bpm) =>{
        const totalBeat = 8*4
        let songLength = totalBeat * (1/(bpm/60))

        let currentBeat = 0
        let songProgress = (currentBeat/totalBeat)*100

        // let songTime = songLength  -> progressBar goes to 0 ~ 100% in songTime seconds

        return songLength

    }


    function playSong(song) {
        const now = Tone.now()

        playpause.current.classList.add("playing")
        playpause.current.querySelector("i.fas").classList.remove("fa-play")
        playpause.current.querySelector("i.fas").classList.add("fa-pause")

        let bpm = song["bpm"]
        Tone.Transport.bpm.value = bpm
        let i = 0
        let timeSum = 0
        while (i < song["song"].length && playpause.current.classList.contains("playing")) {
            if (song["song"][i][0] != "rest") {
                synth.triggerAttackRelease(song["song"][i][0], (bpmCalc(bpm))*song["song"][i][1], now+timeSum)
                // sampler.triggerAttackRelease(song[i][0], (bpmCalc(bpm))*song[i][1], now+timeSum)
            } 
            timeSum += (bpmCalc(bpm))*song["song"][i][1]
            i += 1
        }
        // while (playpause.current.classList.contains("playing")) {
            // song["song"].map(s => {
            //     synth.triggerAttackRelease(s[0], (bpmCalc(bpm))*s[1], now+timeSum)
            //     timeSum += (bpmCalc(bpm))*s[1]
            // })
        // }
    }

    function pauseSong() {
        playpause.current.classList.remove("playing")
        playpause.current.querySelector("i.fas").classList.remove("fa-pause")
        playpause.current.querySelector("i.fas").classList.add("fa-play")
    }

    function playPause(song) {
        const isPlaying = playpause.current.classList.contains('playing')
        if (isPlaying) {
            pauseSong()
        }
        else {
            playSong(song)
        }
    }

    // ======= progresss bar===========

    // function updateProgress(e) {
    //     const { duration, currentTime } = e.srcElement;
    //     const progressPercent = (currentTime / duration) * 100;
    //     progress.style.width = `${progressPercent}%`;
    // }
    
    // Set progress bar
    function setProgress(clientWidth, offsetX) {
        const width = clientWidth;
        const clickX = offsetX;
        const progressPercent = (clickX/width)*100
        progressBar.current.style.width = `${progressPercent}%`;

        console.log(width, clickX, progressPercent)
        // const duration = audio.duration;
        
        // audio.currentTime = (clickX / width) * duration;
    }

    // // Time/song update
    // audio.addEventListener('timeupdate', updateProgress);

    // // Click on progress bar
    // progressContainer.addEventListener('click', setProgress);

    // // Song ends
    // audio.addEventListener('ended', nextSong);

    // // Time of song
    // audio.addEventListener('timeupdate',DurTime);


    return (
        <div className="music-player-item">
            <div className="music-player">
                <div className="play-pause-container">
                    <div className="play-pause" ref={ playpause } onClick={() => playPause(props.song)}>
                        <button className="play-pause-button"><i className="fas fa-play"></i></button>
                        {/* <button className="play-pause play" ref={ playpause } onClick={() => ring(props.song)}><i className="fas fa-play"></i></button> */}
                    </div>
                </div>
                <div className="progress-container" ref={ progressContainer } onClick={(e) => setProgress(e.target.clientWidth, e.target.offsetX)}>
                    <div className="progress" ref={ progressBar }></div>
                </div>
                <button className="like-unlike unliked"><i className="far fa-heart"></i></button>
            </div>
            <div className="song-details">
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
        // <div className="music-player">
        //     <div className="navigation">
        //         <button id="prev" className="action-btn"><i className="fas fa-backward"></i></button>
        //         <button id="play" className="play-pause play action-btn action-btn-big" onClick={() => ring(props.song)}><i className="fas fa-play"></i></button>
        //         {/* <i class="fas fa-pause"></i> */}
        //         <button id="next" className="action-btn"><i className="fas fa-forward" onClick={() => checkSound()}></i></button>
        //     </div>
        //     <div className="progress-container">
        //         <div className="progress" ref={ progressBar }></div>
        //     </div>
        //     <button className="like-unlike unliked"><i className="far fa-heart"></i></button>
        //     {/* <i class="fas fa-heart"></i> */}
        // </div>
    )
}