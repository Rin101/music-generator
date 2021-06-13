import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';
//  import from file
import { createSong } from './createSong';
import { MusicPlayer } from './music-player'
import { Settings } from './settings'
// material-ui
import Button from '@material-ui/core/Button'

// ---------

export function Generator() {

    const [createdSongs, setCreatedList] = useState([])
    const [customSettings, setCustomSettings] = useState({
        "length": "4", "scale": "None", "key": "None", "rest": false, "bpm": "None", "selectedNotes": "None"
    })


    const generateSong = (customSettings) => {
        const song = createSong(customSettings)
        setCreatedList([song, ...createdSongs])
    }

    const MusicPlayers = () => {
        if (createdSongs.length > 0) {
            return (
                createdSongs.map(song => {
                    return (
                        <MusicPlayer song={song} key={song.song}></MusicPlayer>
            )}))
        } else {
            return null
        }
    }

    return (
        <div className="generator">

            <section className="top-image">
                <h1>Music Genarator AI</h1>
            </section>
            <section className="thin-line"></section>

            <section className="content">
                <div className="side-bar">
                    <div className="side-menu-container">
                        <div className="menu-bar"><i className="fas fa-bars"></i></div>
                        <div className="side-menu account"><i className="fas fa-user-circle"></i>Account</div>
                        <div className="side-menu login"><i className="fas fa-sign-in-alt"></i>Login</div>
                        <div className="side-menu about"><i className="fas fa-building"></i>About</div>
                        <div className="side-menu faq"><i className="fas fa-question-circle"></i>FAQ</div>
                    </div>
                    <div className="border-svg">
                        <div className="svg-container">
                            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                            </svg>
                        </div>
                        {/* <div className="svg-container-overlay">
                            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                            </svg>
                        </div> */}
                        {/* <div className="original-svg-container">
                            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                            </svg>
                        </div> */}
                    </div>
                </div>

                {/* <div className="empty-side-bar"></div> */}

                <div className="music">
                    <div className="generator-button-container">
                        <Button variant="contained" className="generator-button" onClick={() => generateSong(customSettings)}>
                            GENERATE
                        </Button>
                    </div>
                    {/* <div className="generator-button-container" onClick={() => generateSong()}>
                        <Button variant="contained" className="generator-button2">
                            GENERATE
                        </Button>
                    </div> */}

                    <div className="music-player-container">
                        <MusicPlayers></MusicPlayers>
                    </div>
                </div>

                <div className="settings-container">
                    <Settings customSettings={customSettings} setCustomSettings={setCustomSettings}></Settings>
                </div>
  
            </section>
        </div>
    )

}