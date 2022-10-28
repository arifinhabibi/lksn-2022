const intro = new Intro()
intro.render()


const game = new Game()

game.render()

class Hexaria {
    constructor(){
        this.screens = {
            intro,
            game
        }
        this.activeScreen = null
    }
    render(){
        this.setActiveScreen('intro')
    }

    setActiveScreen(screen){
        if (this.activeScreen) {
            this.screens[this.activeScreen].unMount()
        }
        this.screens[screen]?.mount()
        this.activeScreen = screen
    }

}

const hexaria = new Hexaria()
hexaria.render()