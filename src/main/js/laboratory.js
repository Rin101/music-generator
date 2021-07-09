import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// material-uis
import Button from '@material-ui/core/Button'
// import from files
import { Settings } from './settings'


export function Laboratory (props) {


    const laboratory = useRef()

    const toggleMenu = (menu) => {
        laboratory.current.querySelector(`.side-menu.selected`).classList.remove("selected")
        laboratory.current.querySelector(`.selected-item.selected`).classList.remove("selected")
        laboratory.current.querySelector(`.side-menu.${menu}`).classList.add("selected")
        laboratory.current.querySelector(`.selected-item.${menu}`).classList.add("selected")
    }

    return(
        <div className="laboratory" ref={laboratory}>
            <section className="side-bar">
                <div className="side-menu settings selected" onClick={() => toggleMenu("settings")}>Settings</div>
                <div className="side-menu editor" onClick={() => toggleMenu("editor")}>Editor</div>
                <div className="side-menu tones" onClick={() => toggleMenu("tones")}>Tones</div>
                <div className="side-menu likedSongs" onClick={() => toggleMenu("likedSongs")}>Liked Songs</div>
                <div className="side-menu faq">--</div>
                <div className="side-menu faq">--</div>
                <div className="side-menu about"><i className="fas fa-building"></i>About</div>
                <div className="side-menu faq"><i className="fas fa-question-circle"></i>FAQ</div>
            </section>
            <div className="selected-menu">
                <div className="selected-item settings selected">
                    <Settings customSettings={props.customSettings} setCustomSettings={props.setCustomSettings}></Settings>
                </div>
                <div className="selected-item editor">aafdssd</div>
                <div className="selected-item tones">false</div>
                <div className="selected-item likedSongs"></div>
            </div>
        </div>
    )
}