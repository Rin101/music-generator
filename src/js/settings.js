import { useEffect, useRef } from "react"

export function Settings (props) {

    let customSettings = props.customSettings
    const setCustomSettings = props.setCustomSettings

    const mouseCursor = useRef()
    const settingCard = useRef()
    const selectors = useRef()
    const applySettingsButton = useRef()
    const selectScale = useRef()
    const selectKey = useRef()

    const applySettings = () => {
        let list = [selectScale.current.value, selectKey.current.value]

        let defaultValue = ["None", "None"]
        let i = 0
        while (i < list.length) {
            list[i] = (list[i] != "None") ? list[i] : defaultValue[i]
            i += 1
        }

        let settings = {...customSettings}
        settings["scale"] = list[0]
        settings["key"] = list[1]
        setCustomSettings(settings)

        hideSelectors()
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

    const hideSelectors = () => {
        settingCard.current.style.display = "flex"
        selectors.current.style.display = "none"
    }

    return(
        <div className="custom-settings">
            <div ref={ mouseCursor } className="cursor"></div>
            <div className="setting-card" ref={settingCard} onMouseMove={(e) => cursor(e)} onMouseLeave={() => hideCursor()} onClick={() => showSelectors()}>
                <i className="fas fa-cog"></i>
            </div>
            <div ref={selectors} className="selectors" onMouseMove={(e) => cursor(e)} onMouseLeave={() => hideCursor()}>
                <label>scale : </label>
                <select ref={ selectScale } name="scale" id="scale">
                    <option value="None">None</option>
                    <option value="majorScale">Major</option>
                    <option value="minorScale">Minor</option>
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
    )
}