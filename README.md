#####  игра змейка на чистом JavaScript


ROWS - количество рядов игры
COLUMNS - количество строк игры
COOLDOWN - скорость перемещения змейки
CELL_SIZE - размер ячейки
CELL_MARGIN - отступ между ячейками
GAME_PADDING - внутренний отступ поля игры
FOOD_COLOR - цвет ячейки с едой для змейки
SNAKE_COLOR - цвет ячейки тела змейки
FREE_COLOR - цвет пустых ячеейк
canvas - константа содержащая элемент страницы canvas
context - ждя обращения к канвосу для отрисовки элементов
map - содержит ячейки игры
snake - массив элементов змейки
snakeDirect - направление змейки
loop() - функция отрисовки изображения
drawRect() - функция передачи данных в context для прорисовки
clearCanvas() - функция очистки Canvas перед созданием нового квадрата
creatGameMap() - функция создания игрового поля
getRandomFreeCell() - функция возвращения случайной свободной ячейки от змейки и еды
freeCells - массив всех свободных ячеек
index - констанкта имющая рандомный индекс ячейки
drawGameMap() - отрисовка ячеек
param - параметры ячейки
getCell() - возвращвет ячейку карты по координатам x и y
moveSnake() - функция перемещения змейки

[онлайн демо](https://dmitriydenisov.github.io/snakeGame/)

##### Тестировать локально

git clone https://github.com/dmitriydenisov/snakeGame.git

cd snakeGame.