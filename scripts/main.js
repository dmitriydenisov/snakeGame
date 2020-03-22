const ROWS = 10 
const COLUMNS = 10 
const START_COOLDOWN = 250 
const LEVEL_COOLDOWN = 20

const CELL_SIZE = 50 
const CELL_MARGIN = 2 
const GAME_PADDING = 5 

const FOOD_COLOR = 'green' 
const SNAKE_COLOR =  'gray' 
const FREE_COLOR = 'rgb(240, 240, 240)' 

const canvas  = document.querySelector('canvas') 
const context = canvas.getContext('2d') 

canvas.width = CELL_SIZE * COLUMNS + (COLUMNS - 1) * CELL_MARGIN + 2 * GAME_PADDING
canvas.height = CELL_SIZE * ROWS + (ROWS - 1) * CELL_MARGIN + 2 * GAME_PADDING

let map = creatGameMap(COLUMNS, ROWS)

getRandomFreeCell(map).food = true

const cell = getRandomFreeCell(map)
let snake = [cell]

cell.snake = true

 
snake[0].snake = true

let snakeDirect = 'top'
let nextSnakeDirect = 'top'


//обновление изменения изображения при обновлении экрана
requestAnimationFrame(loop)

let prevTick = 0
let play = true
let cooldown = START_COOLDOWN

function loop (timestamp){
    //зацикливание обновления
    requestAnimationFrame(loop)
    
    clearCanvas()

    if (prevTick + cooldown <= timestamp && play) {
        prevTick = timestamp

        snakeDirect = nextSnakeDirect
        moveSnake()
        const head = snake[0]
        const tails = snake[snake.length - 1]
        
        if ( head.food){
            head.food = false
            snake.push(tails)

            getRandomFreeCell(map).food = true
            cooldown -= LEVEL_COOLDOWN
        }

        //проверка пересечения головы и тела змейки
        else {
            let isEnd = false
            for ( let i = 1; i < snake.length; i++ ) {
                if ( snake[i] === snake[0] ) {
                    isEnd = true
                    break
                }
            }
            if (isEnd) {
                play = false
            }
        }
        
        
    }
    
    drawGameMap(map)
    showState()

    if (!play) {        
        drawPaused()
    }
}

document.addEventListener("keydown", function ( event ) {
    if ( event.key === "ArrowUp" ) {
        if ( snake.length === 1 || snakeDirect === "left" || snakeDirect === "right" ){
            nextSnakeDirect = 'top' 
        }
           } else if ( event.key === "ArrowDown" ) {
        if (snake.length === 1 || snakeDirect === "left" || snakeDirect === "right" ){
            nextSnakeDirect = 'down'
        }
            } else if ( event.key === "ArrowLeft" ) {
        if (snake.length === 1 || snakeDirect === "top" || snakeDirect === "down" ){
            nextSnakeDirect = 'left'
        }
            } else if ( event.key === "ArrowRight" ) {
        if (snake.length === 1 || snakeDirect === "top" || snakeDirect === "down" ){
            nextSnakeDirect = 'right'
        }
        
    } else if (event.key === 'Enter') {
        if (play) {
            return
        }

        init()
    }
}) 
