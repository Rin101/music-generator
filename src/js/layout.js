import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';
//  import from file
import { getGeneratedList } from './randomNotes';
import { MusicPlayer } from './music-player'
// material-ui
import Button from '@material-ui/core/Button'


// ---------

export function Generator() {

    const [createdSongs, setCreatedList] = useState([])
    const [customSettings, setCustomSettings] = useState({"length": "4", "scale": ["majorScale","C"], "rest": false})

    const mouseCursor = useRef()
    const settingCard = useRef()
    const selectors = useRef()
    const applySettingsButton = useRef()
    const selectScale = useRef()
    const selectKey = useRef()

    const createSong = (customSettings) => {

        let randomBpm = Math.floor(Math.random() * (150 - 70) + 70)
        Tone.Transport.bpm.value = randomBpm

        let theList = getGeneratedList(customSettings)
        if (createdSongs === undefined || createdSongs.length == 0) {
            setCreatedList([theList])   
        } else {
            setCreatedList([theList, ...createdSongs])
            console.log(createdSongs)
        }
        console.log(createdSongs)
    }

    const MusicPlayers = () => {
        if (createdSongs.length > 0) {
            return (
                createdSongs.map(song => {
                    return (
                        <MusicPlayer song={song} key={song}></MusicPlayer>
            )}))
        } else {
            return null
        }
    }

    const cursor = (e) => {
        mouseCursor.current.style.display = "block"
        mouseCursor.current.style.top = e.pageY + "px"
        mouseCursor.current.style.left = e.pageX + "px"
    }

    const hideCursor = () => {
        mouseCursor.current.style.display = "none"
    }

    const showSelectors = () => {
        settingCard.current.style.display = "none"
        selectors.current.style.display = "flex"
    }

    const applySettings = () => {
        let list = [selectScale.current.value, selectKey.current.value]
        let arr = ["scale", "key"]
        let defaultValue = ["majorScale", "C"]
        let i = 0
        while (i < arr.length) {
            arr[i] = (list[i] != "None") ? list[i] : defaultValue[i]
            i += 1
        }
        setCustomSettings({"scale": [selectScale.current.value, selectKey.current.value]})
    }

    return (
        <div className="generator">

            <div ref={ mouseCursor } className="cursor"></div>
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
                    <div className="generator-button-container" onClick={() => createSong(customSettings)}>
                        <Button variant="contained" className="generator-button">
                            GENERATE
                        </Button>
                    </div>
                    {/* <div className="generator-button-container" onClick={() => createSong()}>
                        <Button variant="contained" className="generator-button2">
                            GENERATE
                        </Button>
                    </div> */}

                    <div className="music-player-container">
                        <MusicPlayers></MusicPlayers>
                    </div>
                </div>

                <div className="custom-settings">
                    <div className="setting-card" ref={settingCard} onMouseMove={(e) => cursor(e)} onMouseLeave={() => hideCursor()} onClick={() => showSelectors()}>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div ref={selectors} className="selectors" onMouseMove={(e) => cursor(e)} onMouseLeave={() => hideCursor()}>
                        <label>scale : </label>
                        <select ref={ selectScale } name="scale" id="scale">
                            <option value="None">None</option>
                            <option value="Major">Major</option>
                            <option value="Minor">Minor</option>
                            <option value="Major Pentatonic">Major Pentatonic</option>
                            <option value="Minor Pentatonic">Minor Pentatonic</option>
                        </select>
                        <label>key : </label>
                        <select ref={ selectKey } name="key" id="key">
                            <option value="None">None</option>
                            <option value="C">C</option>
                            <option value="C#">C#</option>
                            <option value="D">D</option>
                            <option value="D#">D#</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="F#">F#</option>
                            <option value="G">G</option>
                            <option value="G#">G#</option>
                            <option value="A">A</option>
                            <option value="A#">A#</option>
                            <option value="B">B</option>
                        </select>

                        <div ref={ applySettingsButton } className="apply-settings" onClick={() => applySettings()}>
                            <p><i className="fas fa-sliders-h"></i> apply settings</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}