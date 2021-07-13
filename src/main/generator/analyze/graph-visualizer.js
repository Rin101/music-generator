
export const getCoordinates = (obj) => {
    const canvasWidth = 500
    const canvasHeight = 300

    let res = []

    let totalLength = 0
    for (let i of obj) {
        if (obj.indexOf(i) != obj.length - 1) {
            totalLength += i[1]
        }
    }


    let lowest = 1000
    let highest = 0
    for (let i of obj) {
        if (i[0] < lowest) {
            lowest = i[0]
        }
        if (i[0] > highest) {
            highest = i[0]
        }
    }

    let maxDiff = highest - lowest

    let heightForNote = (canvasHeight-70)/maxDiff
    let widthForNote = (canvasWidth-70)/totalLength
    let startCoordinate = [20, 20]

    for (let i of obj) {
        let coordinate = new Array(2)
        coordinate[1] = canvasHeight -  (startCoordinate[1] + (i[0] - lowest)*heightForNote)
        coordinate[0] = startCoordinate[0]
        startCoordinate[0] += widthForNote*i[1]

        res.push({note: i, coordinate})
    }

    console.log(res)
    return res
}

export const draw = (ctx, obj) => {

    let currentCoordinate = [obj[0].coordinate[0], obj[0].coordinate[1]]

    // circle of start point
    ctx.fillStyle = 'rgb(249, 150, 51)'
    ctx.beginPath()
    ctx.arc(obj[0].coordinate[0], obj[0].coordinate[1], 5, 0, 2*Math.PI)
    ctx.fill()

    for (let i of obj) {
        if (obj.indexOf(i) != 0) {

            let x = i.coordinate[0]
            let y = i.coordinate[1]
            
            ctx.moveTo(currentCoordinate[0], currentCoordinate[1])
            ctx.lineTo(x, y)
            ctx.stroke()

            currentCoordinate = [x, y]

            // circle
            ctx.fillStyle = 'rgb(249, 150, 51)'
            ctx.beginPath()
            ctx.arc(x, y, 5, 0, 2*Math.PI)
            ctx.fill()
        }
    }

}
