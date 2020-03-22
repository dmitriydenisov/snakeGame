const ROWS = 10
const COLUMNS = 10
const COOLDOWN = 250

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

const map = creatGameMap(COLUMNS, ROWS)

getRandomFreeCell(map).food = true

const snake = [getRandomFreeCell(map)] 
snake[0].snake = true

let snakeDirect = ''


//регистрация функции к следующему моменту обновлению монитоара
requestAnimationFrame(loop)

let prevTick = 0

function loop (timestamp){
    //зацикливание вызова функции
    requestAnimationFrame(loop)
    
    clearCanvas()

    if (prevTick + COOLDOWN <= timestamp) {
        moveSnake() 
        prevTick = timestamp
    }

  
    drawGameMap(map)
}

document.addEventListener("keydown", function ( event ) {
    if ( event.key === "ArrowUp" ) {
        snakeDirect = 'top'
    } else if ( event.key === "ArrowDown" ) {
        snakeDirect = 'down'
    } else if ( event.key === "ArrowLeft" ) {
        snakeDirect = 'left'
    } else if ( event.key === "ArrowUp" ) {
        snakeDirect = 'top'
    } else if ( event.key === "ArrowRight" ) {
        snakeDirect = 'right'
    }
})