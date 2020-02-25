// Exercise 2
// ----------
const doublesLater = (num) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(num * 2), 2000)
    })
}
const wierdFunc = async (num) =>{
    try{
        let first = await doublesLater(10)
        let second = await doublesLater(20)
        let third = await doublesLater(30)
        console.log(num+first+second+third)
        return num+first+second+third
    } catch (err) {
        console.log(err)
    }
}

wierdFunc(2)