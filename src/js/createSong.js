import { lengthCalc} from './lengthCalc.js';
import { getScale } from './scales.js';

const setDefault = (settings) => {

  const scales = [
    "majorScale", "minorScale", "majorPentatonic", "minorPentatonic", "harmonicMinor", "harmonicMajor",
    "majorScale", "minorScale"
  ]
  const keys = ["C", "C#", "D", "D#", "E", "F", "G", "G#", "A", "A#", "B", "B#"]
  
  const scale = settings["scale"] == "None" ? scales[Math.floor(Math.random() * scales.length)] : settings["scale"]
  const key = settings["key"] == "None" ? keys[Math.floor(Math.random() * keys.length)] : settings["key"]
  const bpm = settings["bpm"] == "None" ? Math.floor(Math.random() * (150 - 70) + 70) : settings["bpm"]
  const selectedNotes = settings["selectedNotes"] == "None" ? null : settings["selectedNotes"]
  const rest = settings["rest"]
  const length = settings["length"]

  return {"scale": scale, "key": key, "bpm": bpm, "selectedNotes": selectedNotes, "rest": rest, "length": length}
}

export function createSong(settings) {

  let s = setDefault(settings)

  let song = []

  let lengthArr = lengthCalc(s["length"])
  let notesArr = 
    s["selectedNotes"] || getScale(s["scale"], s["key"])

  s["rest"] ? notesArr.push("rest") :

  lengthArr.forEach(l => {
    song.push([notesArr[Math.floor(Math.random() * notesArr.length)], l])
  })

  let res = {"song": song, "bpm": s["bpm"], "details": {"scale": s["scale"], "key": s["key"]}}

  console.log(res)
  return res
}
