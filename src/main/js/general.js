export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

export function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const notes = [
    "A2", "A#2", "B2", "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", 
    "A3", "A#3", "B3", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3",
    "A4", "A#4", "B4", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4",
    "A5", "A#5", "B5", "C5","C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5",
    "A6", "A#6", "B6", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6",
    "A7", "A#7", "B7", "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7"
]

const translateFlats = (note) => {
    let res = note
    const ref = ["A", "B", "C", "D", "E", "F", "G"]
    if (note.includes("b")) {
        res = ""
        if (note[0] != "A") {
            res += ref[ref.indexOf(note[0]) - 1]
        } else {
            res += "G"
        }
        res += "G"
        res += note[2]
    }
    
    return res
}

const flatToSharp = (song) => {
    let res = []
    for(let note of song) {
        res.push([translateFlats(note[0]), note[1]])
    }
    return res
}

const noteToIndex = (note, root) => {
    const rootIndex = notes.indexOf(root+"3")
    const noteIndex = notes.indexOf(note)
    return noteIndex - rootIndex
}

export const convertToIndex = (song, root) => {
    let res = []
    let obj = flatToSharp(song)
        
    for (let i of obj) {
        if(i[0] != "rest") {
            res.push([noteToIndex(i[0], root), i[1]])
        } else {
            res.push([(noteToIndex(obj[1][0], root))])
        }
    }

    return res
}