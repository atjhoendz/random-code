// input
let oldArr = [
    {julia: 1, date: "02/06/2020"},
    {julio: 3, date: "02/06/2020"},
    {julian: 5, date: "02/06/2020"},
    {julia: 3, date: "21/07/2021"},
    {julio: 1, date: "21/07/2021"},
    {julian: 2, date: "21/07/2021"},
    {julia: 7, date: "27/12/2022"},
    {julio: 3, date: "27/12/2022"},
    {julian: 1, date: "27/12/2022"},
]

// output:
// [
//     { julia: 1, date: '02/06/2020', julio: 3, julian: 5, total: 9 },
//     { julia: 3, date: '21/07/2021', julio: 1, julian: 2, total: 6 },
//     { julia: 7, date: '27/12/2022', julio: 3, julian: 1, total: 11 },
// ]

const mapObjByAFieldValue = (arrOfObj) => {
    let res = []
    let currDate
    let newObj = {}
    let total = 0

    for (let i = 0; i < arrOfObj.length; i++) {
        let objVals = Object.values(arrOfObj[i])
        let objKeys = Object.keys(arrOfObj[i])

        if (!currDate) {
            currDate = objVals[1]
        }
        if (currDate != objVals[1]) {
            newObj.total = total
            res.push(newObj)
            newObj = {}
            currDate = objVals[1]
            total = 0
        }

        newObj[objKeys[0]] = objVals[0]
        newObj[objKeys[1]] = objVals[1]
        total += newObj[objKeys[0]]

        if (i == (oldArr.length - 1)) {
            newObj.total = total
            res.push(newObj)
        }
    }
    return res
}



console.log(mapObjByAFieldValue(oldArr))