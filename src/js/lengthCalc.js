
export const lengthCalc = (barCount) => {
    const lengths = [1/2, 1, 2, 1+1/2, 1/2, 1, 1/4]
    // const lengths = [8, 4, 3, 1, 2, 1, 1+1/2, 1/2, 1/4]
    const lengthsdic = {"1n":4}

    // explanation
    // 8*x + 4*y + 2*z = 8
    // range of x = 0 ~ 1 .  x = random(0 or 1)-> x = 0
    // 4*y + 2*z = 8 - 8*x -> 4*y + 2*z = 8 . range of y = 0 ~ 2. y= random(0 or 1 or 2)-> y = 1
    // 2*z = 8 - 4*y -> 2*z = 4 -> z=2 -> x=0, y=1, z=2 -> {[y, z, z]} -> randomSort([y, z, z]) -> [z, y, z]
    // for num in [z, y, z] -> pick each note for num -> {A5:z, G#4:y, C5:z} (y->whole note, z->quarter note)

    const totalLength = barCount*4

    let finalList = []

    let total = totalLength
    let i = 0
    while (total) {
        let maxRange = Math.trunc(total/lengths[i])
        let count = Math.floor(Math.random() * (maxRange+1))

        let a = count
        while (a > 0) {
            finalList.push(lengths[i])
             a -= 1
        }

        total -= count*lengths[i]
        i += 1
    }

    const sumRemainder = (array) => {
        let finalCount = 0
        array.forEach(num => {
            finalCount += num
        })
        if (finalCount < totalLength) {
            array.push(totalLength - finalCount)
        }
    }

    sumRemainder(finalList)


    function shuffle(array) {
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

    return shuffle(finalList)
}


// let generatedList = bpm 83
//         [["B4", 2],
//          ["rest", 1],
//          ["A4", 1.5],
//          ["A4", 1.5],
//          ["C3", 0.5],
//          ["rest", 0.5],
//          ["E3", 0.25],
//          ["E3", 1],
//          ["E3", 0.5],
//          ["B4", 1],
//          ["rest", 2],
//          ["rest", 0.5],
//          ["F3", 1],
//          ["F3", 0.5],
//          ["B4", 0.25],
//          ["rest", 0.5],
//          ["C3", 1.5],
//          ["E3", 1],
//          ["F3", 0.5],
//          ["A4", 1.5],
//          ["G3", 0.5],
//          ["rest", 0.5]]