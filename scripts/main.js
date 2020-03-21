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

const cell = getRandomFreeCell(map)
const snake = [cell, cell, cell]

cell.snake = true

 
snake[0].snake = true

let snakeDirect = 'top'


//обновление изменения изображения при обновлении экрана
requestAnimationFrame(loop)

let prevTick = 0

function loop (timestamp){
    //зацикливание обновления
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
        if ( snake.length === 1 || snakeDirect === "left" || snakeDirect === "right" ){
            snakeDirect = 'top' 
        }
           } else if ( event.key === "ArrowDown" ) {
        if (snake.length === 1 || snakeDirect === "left" || snakeDirect === "right" ){
            snakeDirect = 'down'
        }
            } else if ( event.key === "ArrowLeft" ) {
        if (snake.length === 1 || snakeDirect === "top" || snakeDirect === "down" ){
            snakeDirect = 'left'
        }
            } else if ( event.key === "ArrowRight" ) {
        if (snake.length === 1 || snakeDirect === "top" || snakeDirect === "down" ){
            snakeDirect = 'right'
        }
        
    }
}) 