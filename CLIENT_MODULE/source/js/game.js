class Game {
    constructor(){
        this.display = document.querySelector('.display-game')
        this.templatGame = document.querySelector('.game')
        this.honeys = []
        this.cells = []
        this.turnNumber = document.querySelector('.turn')
        this.canClick = true
        this.playerScore = document.querySelector('.player-score')
        this.botScore = document.querySelector('.bot-score')
        this.playerBot = document.querySelector('.player-bot')
        this.countNumberUser = []
        this.arrayNumUser = []
        this.arrayNumBot = []
        // this.domUsername = document.getElementById('name')
    }
    mount (){
        this.display.classList.add('active')
    }
    unMount (){
        this.display.classList.remove('active')
    }

    render(){
        this.create()
        this.listen()
        // this.domUsername.innerHTML = intro.username.value
    }

    listen(){
        let number = Math.ceil(Math.random() * 20)
        this.turnNumber.innerHTML = number
            this.cells.forEach((cell) => {
            // debug
            // console.log(cell)    
            cell.domCell.addEventListener('click', () => {
                if (this.canClick == true) {
                    if (cell.turn == null) {
                        this.canClick = false
                        cell.number = number
                        cell.turn = 'user'
                        this.arrayNumUser = []
                        this.playerChoose(cell.row, cell.col, cell.number)
                        
                        
                        this.turnNumber.style.backgroundImage = "url('./source/img/blue.png')"
                        number = Math.ceil(Math.random() * 20)
                        this.turnNumber.innerHTML = number
                        
                        setTimeout(() => {
                            // bot choose
                            this.arrayNumBot = []
                            this.botChoose(number)
                            this.turnNumber.style.backgroundImage = "url('./source/img/red.png')"
                            number = Math.ceil(Math.random() * 20)
                            this.turnNumber.innerHTML = number
                            this.canClick = true
                        }, 1000)
                    }
                    
                }
            })


        })
    }

    botChoose(number){

        const cellNull = this.cells.filter((cell) => cell.turn == null)

        const index = Math.floor(Math.random() * cellNull.length)
        
        const findDom = cellNull[index]

        findDom.domNumber.innerHTML = number
        
        findDom.number = number
        
        findDom.turn = 'bot'
        
        findDom.domCell.src = './source/img/blue.png'
        
        this.countNumberBot = this.countNumberBot + number
        
        if (findDom.row % 2 == 0) {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col)
            // kanan atas
            const rightTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col + 1)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == findDom.row && cell.col == findDom.col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col)
            // kiri
            const left = this.cells.find((cell) => cell.row == findDom.row && cell.col == findDom.col - 1)
            
            
            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'user') {
                leftTop.domCell.src = './source/img/blue.png'
                leftTop.turn == 'bot'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'user') {
                rightTop.domCell.src = './source/img/blue.png'
                rightTop.turn == 'bot'
            }
            
            if (right && findDom.number > right.number && right.turn == 'user') {
                right.domCell.src = './source/img/blue.png'
                right.turn == 'bot'
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'user') {
                bottomLeft.domCell.src = './source/img/blue.png'
                bottomLeft.turn == 'bot'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'user') {
                bottomRight.domCell.src = './source/img/blue.png'
                bottomRight.turn == 'bot'
            }
            
            if (left && findDom.number > left.number && left.turn == 'user') {
                left.domCell.src = './source/img/blue.png'
                left.turn == 'bot'
            }
            
            
            // nambah satu
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'user') {
                leftTop.domCell.src = './source/img/red.png'
                leftTop.turn = 'bot'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'user') {
                rightTop.domCell.src = './source/img/red.png'
                rightTop.turn = 'bot'
            }
            
            if (right && findDom.number > right.number && right.turn == 'user') {
                right.domCell.src = './source/img/red.png'
                right.turn = 'bot'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'user') {
                bottomLeft.domCell.src = './source/img/red.png'
                bottomLeft.turn = 'bot'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'user') {
                bottomRight.domCell.src = './source/img/red.png'
                bottomRight.turn = 'bot'
            }
            
            if (left && findDom.number > left.number && left.turn == 'user') {
                left.domCell.src = './source/img/red.png'
                left.turn = 'bot'
            } 
            
            
        } else {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col - 1)
            // kanan atas 
            const rightTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == findDom.row && cell.col == findDom.col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col - 1)
            // kiri
            const left = this.cells.find((cell) => cell.row == findDom.row && cell.col == findDom.col - 1)
            
            
            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'user') {
                leftTop.domCell.src = './source/img/blue.png'
                leftTop.turn = 'bot'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'user') {
                rightTop.domCell.src = './source/img/blue.png'
                rightTop.turn = 'bot'
            }
            
            if (right && findDom.number > right.number && right.turn == 'user') {
                right.domCell.src = './source/img/blue.png'
                right.turn = 'bot'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'user') {
                bottomLeft.domCell.src = './source/img/blue.png'
                bottomLeft.turn = 'bot'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'user') {
                bottomRight.domCell.src = './source/img/blue.png'
                bottomRight.turn = 'bot'
            }
            
            if (left && findDom.number > left.number && left.turn == 'user') {
                left.domCell.src = './source/img/blue.png'
                left.turn = 'bot'
            } 

            
            // nambah satu
            if (leftTop && leftTop.turn == 'bot') {
                leftTop.number += 1
                leftTop.domNumber.innerHTML = leftTop.number
            }
            
            if (rightTop &&  rightTop.turn == 'bot') {
                rightTop.number += 1
                rightTop.domNumber.innerHTML = rightTop.number
            }
            
            if (right && right.turn == 'bot') {
                right.number += 1
                right.domNumber.innerHTML = right.number
            }
            
            if (bottomLeft && bottomLeft.turn == 'bot') {
                bottomLeft.number += 1
                bottomLeft.domNumber.innerHTML = bottomLeft.number
                
            }
            
            if (bottomRight && bottomRight.turn == 'bot') {
                bottomRight.number += 1
                bottomRight.domNumber.innerHTML = bottomRight.number
                
            }
            
            if (left && left.turn == 'bot') {
                left.number += 1
                left.domNumber.innerHTML = left.number
            } 
            

        }

        const cellBot = this.cells.filter((cell) => cell.turn == 'bot' && cell.number !=  null)

        cellBot.forEach((cell) => {
            this.arrayNumBot.push(cell.number)
        })


        this.arrayNumBot.reduce((total, num) => 
            this.botScore.innerHTML = total + num
        , 0)


    }
    
    playerChoose(row, col, number){
        const findDom = this.cells.find((cell) => cell.row == row && cell.col == col)
        
        findDom.domNumber.innerHTML = number
        
        findDom.domCell.src = './source/img/red.png'
        
        this.countNumberUser = this.countNumberUser + number
        
        if (row % 2 == 0) {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col)
            // kanan atas
            const rightTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col + 1)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == row && cell.col == col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == row + 1 && cell.col == col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == row + 1 && cell.col == col)
            // kiri
            const left = this.cells.find((cell) => cell.row == row && cell.col == col - 1)
            
            
            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'bot') {
                leftTop.domCell.src = './source/img/red.png'
                leftTop.turn = 'user'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'bot') {
                rightTop.domCell.src = './source/img/red.png'
                rightTop.turn = 'user'
            }
            
            if (right && findDom.number > right.number && right.turn == 'bot') {
                right.domCell.src = './source/img/red.png'
                right.turn = 'user'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'bot') {
                bottomLeft.domCell.src = './source/img/red.png'
                bottomLeft.turn = 'user'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'bot') {
                bottomRight.domCell.src = './source/img/red.png'
                bottomRight.turn = 'user'
            }
            
            if (left && findDom.number > left.number && left.turn == 'bot') {
                left.domCell.src = './source/img/red.png'
                left.turn = 'user'
            } 



            // nambah satu
            if (leftTop && leftTop.turn == 'user') {
                leftTop.number += 1
                leftTop.domNumber.innerHTML = leftTop.number
            }
            
            if (rightTop &&  rightTop.turn == 'user') {
                rightTop.number += 1
                rightTop.domNumber.innerHTML = rightTop.number
            }
            
            if (right && right.turn == 'user') {
                right.number += 1
                right.domNumber.innerHTML = right.number
            }
            
            if (bottomRight && bottomRight.turn == 'user') {
                bottomRight.number += 1
                bottomRight.domNumber.innerHTML = bottomRight.number
                
            }
            
            if (bottomLeft && bottomLeft.turn == 'user') {
                bottomLeft.number += 1
                bottomLeft.domNumber.innerHTML = bottomLeft.number
                
            }
            
            if (left && left.turn == 'user') {
                left.number += 1
                left.domNumber.innerHTML = left.number
            } 
            
            
            
        } else {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col - 1)
            // kanan atas 
            const rightTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == row && cell.col == col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == row + 1 && cell.col == col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == row + 1 && cell.col == col - 1)
            // kiri
            const left = this.cells.find((cell) => cell.row == row && cell.col == col - 1)


            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'bot') {
                leftTop.domCell.src = './source/img/red.png'
                leftTop.turn = 'user'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'bot') {
                rightTop.domCell.src = './source/img/red.png'
                rightTop.turn = 'user'
            }
            
            if (right && findDom.number > right.number && right.turn == 'bot') {
                right.domCell.src = './source/img/red.png'
                right.turn = 'user'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'bot') {
                bottomLeft.domCell.src = './source/img/red.png'
                bottomLeft.turn = 'user'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'bot') {
                bottomRight.domCell.src = './source/img/red.png'
                bottomRight.turn = 'user'
            }
            
            if (left && findDom.number > left.number && left.turn == 'bot') {
                left.domCell.src = './source/img/red.png'
                left.turn = 'user'
            } 



            // nambah satu
            if (leftTop && leftTop.turn == 'user') {
                leftTop.number += 1
                leftTop.domNumber.innerHTML = leftTop.number
            }
            
            if (rightTop &&  rightTop.turn == 'user') {
                rightTop.number += 1
                rightTop.domNumber.innerHTML = rightTop.number
            }
            
            if (right && right.turn == 'user') {
                right.number += 1
                right.domNumber.innerHTML = right.number
            }
            
            if (bottomRight && bottomRight.turn == 'user') {
                bottomRight.number += 1
                bottomRight.domNumber.innerHTML = bottomRight.number
                
            }
            
            if (bottomLeft && bottomLeft.turn == 'user') {
                bottomLeft.number += 1
                bottomLeft.domNumber.innerHTML = bottomLeft.number
                
            }
            
            if (left && left.turn == 'user') {
                left.number += 1
                left.domNumber.innerHTML = left.number
            } 
            
        }

        const cellUser = this.cells.filter((cell) => cell.turn == 'user' && cell.number !=  null)

        cellUser.forEach((cell) => {
            this.arrayNumUser.push(cell.number)
        })


        this.arrayNumUser.reduce((total, num) => 
            this.playerScore.innerHTML = total + num
        , 0)


    }

    create(){
        // honeys
        for (let row = 1; row <= 8; row++) {
            const honeys  = new Honeys(row)
            honeys.render()
            this.honeys.push(honeys)
        }
        
        const y = -10
        this.honeys.forEach((honeyRow) => {
            if (honeyRow.row == 1) {
                honeyRow.domHoneys.style.transform = `translate(0px, 0px)`
            }else if (honeyRow.row % 2 == 0) {
                honeyRow.domHoneys.style.transform = `translate(20px, ${(honeyRow.row - 1) * y}px)`
            } else {
                honeyRow.domHoneys.style.transform = `translate(0px, ${(honeyRow.row - 1 ) * y}px)`
            }
        })

    }
}
