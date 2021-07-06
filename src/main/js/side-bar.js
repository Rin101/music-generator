import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// material-uis
import Button from '@material-ui/core/Button'

export function SideBar () {

    return(
        <section className="side-bar">
            <div className="side-menu-container">
                <div className="menu-bar"><i className="fas fa-bars"></i></div>
                <div className="side-menu account"><i className="fas fa-user-circle"></i>Account</div>
                <div className="side-menu login"><i className="fas fa-sign-in-alt"></i>Login</div>
                <div className="side-menu about"><i className="fas fa-building"></i>About</div>
                <div className="side-menu faq"><i className="fas fa-question-circle"></i>FAQ</div>
            </div>
        </section>
    )
}