const { World, setWorldConstructor } = require('@cucumber/cucumber')
const Home  = require('./../pom/home')
const PLP  = require('./../pom/plp')
class CustomWorld extends World {

    home = null
    plp = null
    constructor(opts) {
        super(opts)
    }

    async initSetUp(page){
        console.log('executing inside')
        this.home = new Home(page)
        this.plp = new PLP(page)
    }

}

module.exports = CustomWorld