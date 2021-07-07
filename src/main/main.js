import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';
//  import from file
import { createSong } from './generator/createSong';
import { MusicPlayer } from './music-player/music-player'
import { Settings } from './js/settings'
import { SideBar } from "./js/side-bar"
// material-ui
import Button from '@material-ui/core/Button'
// css
import './css/main.css';


export function Main() {

    const [createdSongs, setCreatedSongs] = useState([])
    const [customSettings, setCustomSettings] = useState({
        "length": "2", "scale": "random", "key": "random", "rest": false, "bpm": "random", "selectedNotes": "None"
    })
    const [likedSongs, setLikedSongs] = useState([])


    const generateSong = (customSettings) => {
        const song = createSong(customSettings)
        setCreatedSongs([song, ...createdSongs])
    }


    const MusicPlayers = () => {
        if (createdSongs.length > 0) {
            return (
                createdSongs.map(song => {
                    return (
                        <MusicPlayer song={song} createdSongs={createdSongs} setCreatedSongs={setCreatedSongs}
                        likedSongs={likedSongs} setLikedSongs={setLikedSongs} key={song.song}></MusicPlayer>
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
        <div className="main">
            <div className="top-menu">
                <h1>Music Genarator AI</h1>
                <div className="top-menu-items">
                    <div className="top-menu-item login"><i className="fas fa-sign-in-alt"></i>Login</div>
                    <div className="top-menu-item account"><i className="fas fa-user-circle"></i>Account</div>
                </div>
            </div>
            <div className="thin-line"></div>
            <div className="music">
                <SideBar></SideBar>
                <div className="laboratory">
                    <div className="settings-container">
                        <Settings customSettings={customSettings} setCustomSettings={setCustomSettings}></Settings>
                    </div>
                </div>

                <div className="music-player-container">
                    <div className="generator-button-container">
                        <Button variant="contained" className="generator-button" onClick={() => generateSong(customSettings)}>
                            GENERATE
                        </Button>
                    </div>
                    <MusicPlayers></MusicPlayers>
                     {/* <div className="generator-button-container" onClick={() => generateSong()}>
                        <Button variant="contained" className="generator-button2">
                        GENERATE
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    )

}