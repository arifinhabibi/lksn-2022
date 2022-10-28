class Intro {
    constructor(){
        this.display = document.querySelector('.display-intro')
        this.btnPlay = document.querySelector('.btn-play')
        this.username = document.querySelector('.username')
        this.enemy = document.querySelector('.enemy')
        this.player2 = document.querySelector('.player-2')
        this.bot = document.querySelector('.enemy-bot')
    }
    render(){
        this.listen()
    }
    mount (){
        this.display.classList.add('active')
    }
    unMount (){
        this.display.classList.remove('active')
    }

    listen(){
        
        this.enemy.addEventListener('change', () => {
            if (this.enemy.value == 'player2') {
                this.player2.style.display = 'block'
            } else if (this.enemy.value == 'bot') {
                this.bot.style.display = 'block'
            }
        })

        this.username.addEventListener('change', () => {
            if (this.username.value != null) {
                this.btnPlay.style.backgroundColor = 'blue'
                this.btnPlay.addEventListener('click', () => {
                    hexaria.setActiveScreen('game')
                })
            }
        })
       
    }

}