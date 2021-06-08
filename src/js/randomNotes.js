import { lengthCalc} from './lengthCalc.js';
import { getScale } from './scales.js';

export function getGeneratedList(customSettings) {
  let lengthArr = lengthCalc(customSettings.length)
  let notesArr = getScale(customSettings.scale[0], customSettings.scale[1])
  if (customSettings.rest == true) {
    notesArr.push("rest")
  }

  let resList = []

  lengthArr.forEach(l => {
    resList.push([notesArr[Math.floor(Math.random() * notesArr.length)], l])
  })

  console.log(resList)

  return resList
}
