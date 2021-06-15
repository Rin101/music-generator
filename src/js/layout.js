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
            return (
                <div className="empty-player">
                    <p>Click the Generate button to create music!</p>
                </div>
            )
        }
    }

    return (
        <div className="generator">
            <section className="side-bar">
                <div className="side-menu-container">
                    <div className="menu-bar"><i className="fas fa-bars"></i></div>
                    <div className="side-menu account"><i className="fas fa-user-circle"></i>Account</div>
                    <div className="side-menu login"><i className="fas fa-sign-in-alt"></i>Login</div>
                    <div className="side-menu about"><i className="fas fa-building"></i>About</div>
                    <div className="side-menu faq"><i className="fas fa-question-circle"></i>FAQ</div>
                </div>
            </section>
            <section className="content">
                <div className="top-image">
                    <h1>Music Genarator AI</h1>
                </div>
                <div className="thin-line"></div>
                <div className="music">
                    <div className="laboratory">
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

                        <div className="settings-container">
                            <Settings customSettings={customSettings} setCustomSettings={setCustomSettings}></Settings>
                        </div>
                    </div>

                    <div className="music-player-container">
                        <MusicPlayers></MusicPlayers>
                    </div>
                </div>
            </section>
        </div>
    )

}