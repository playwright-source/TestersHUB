const { World, setWorldConstructor } = require('@cucumber/cucumber')
const Home  = require('./../pom/home')
const PLP  = require('./../pom/plp')
const Cart = require('./../pom/cart')
const Forgotpwd = require('./../pom/forgotpwd')
const Filtersorting = require('./../pom/filtersorting')
const createAccount = require('./../pom/createaccount')


class CustomWorld extends World {

    home = null
    plp = null
    cart = null
    forgotpwd = null
    filtersorting = null
    createaccount = null


    constructor(opts) {
        super(opts)
    }

    async initSetUp(page){
        //handler will come in to act when there is a unexpected gift purchase popup
        await this.popUpHandler(page)
        this.home = new Home(page)
        this.plp = new PLP(page)
        this.cart = new Cart(page)
        this.forgotpwd = new Forgotpwd(page)
        this.filtersorting = new Filtersorting(page)
        this.createaccount = new createAccount(page)

    }

    async popUpHandler(page){
        await page.addLocatorHandler(page.locator(`//span[contains(.,'Free YETI Gift with Purchase!')]`), async()=>{
            await page.getByRole('button', { name: 'Close dialog' }).click()
        })
    }

}

module.exports = CustomWorld