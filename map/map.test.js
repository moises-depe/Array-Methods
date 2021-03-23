const map = require('./map')

describe('map function',() => {
    
    it('it takes in an Array and a callback then it creates a new Array that will return value of each called callback', () => {

    const pizzaToppings = ['pepperoni','pineapple', 'mediterranean', 'anchovies' ]

    const makeUpperCase = (string)=>{
        return string.toUpperCase();
    }

    expect(map(pizzaToppings, makeUpperCase)).toEqual(['PEPPERONI','PINEAPPLE', 'MEDITERRANEAN','ANCHOVIES'])
    })
})