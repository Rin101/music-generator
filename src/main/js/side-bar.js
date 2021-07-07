import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// material-uis
import Button from '@material-ui/core/Button'

export function SideBar () {

    const sideBar = useRef()
    const menuButton = useRef()

    const showMenu = () => {
        menuButton.current.querySelector('i.fas').classList.add("showMenu")
        sideBar.current.style.width = "10%"
        for (const item of sideBar.current.querySelectorAll('.side-menu')) {
            item.style.display = "block"
        }
    }

    const hideMenu = () => {
        menuButton.current.querySelector('i.fas').classList.remove("showMenu")
        sideBar.current.style.width = "3%"
        for (const item of sideBar.current.querySelectorAll('.side-menu')) {
            item.style.display = "none"
        }
    }

    const toggleMenu = () => {
        const isShowing = menuButton.current.querySelector('i.fas').classList.contains("showMenu")

        if (isShowing) hideMenu()
        else showMenu()
    }

    return(
        <section className="side-bar" ref={sideBar}>
            <div className="side-menu settings">Settings</div>
            <div className="side-menu login">Editor</div>
            <div className="side-menu about">Tones</div>
            <div className="side-menu faq">Liked Songs</div>
            <div className="side-menu faq">--</div>
            <div className="side-menu faq">--</div>
            <div className="side-menu faq">--</div>
            <div className="side-menu about"><i className="fas fa-building"></i>About</div>
            <div className="side-menu faq"><i className="fas fa-question-circle"></i>FAQ</div>
        </section>
    )
}