import { lengthCalc } from './lengthCalc.js';
import { getScale } from './scales.js';
import { getRandom } from '../js/general.js';

const setDefault = (settings) => {

  const scales = [
    "majorScale", "minorScale", "majorPentatonic", "minorPentatonic", "harmonicMinor", "harmonicMajor",
    "majorScale", "minorScale"
  ]
  const keys = ["C", "C#", "D", "D#", "E", "F", "G", "G#", "A", "A#", "B"]
  
  const scale = settings["scale"] == "random" ? scales[Math.floor(Math.random() * scales.length)] : settings["scale"]
  const key = settings["key"] == "random" ? keys[Math.floor(Math.random() * keys.length)] : settings["key"]
  const bpm = settings["bpm"] == "random" ? Math.floor(Math.random() * (130 - 90) + 90) : settings["bpm"]
  const selectedNotes = settings["selectedNotes"] == "None" ? null : settings["selectedNotes"]
  const rest = settings["rest"]
  const length = settings["length"]

  return {"scale": scale, "key": key, "bpm": bpm, "selectedNotes": selectedNotes, "rest": rest, "length": length}
}

export function createSong(settings) {

  let s = setDefault(settings)

  let song = []

  let lengthArr = lengthCalc(s["length"])
  // set unique notes
  let achivedScale = getRandom(getScale(s["scale"], s["key"]), 5)
  let notesArr = 
    s["selectedNotes"] || achivedScale


  s["rest"] ? notesArr.push("rest") :

  lengthArr.forEach(l => {
    song.push([notesArr[Math.floor(Math.random() * notesArr.length)], l])
  })

  // const ID = date()*Ddfadmfam*Dfadgin*dgnodadonaodn

  let res = {"song": song, "bpm": s["bpm"], "details": {"scale": s["scale"], "key": s["key"]}}

  console.log(res)
  return res
}
