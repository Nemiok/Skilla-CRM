## Описание проделанной работы
- листинг звонков
- выбор звонков
- проигрывание записи (так как сервер не отправляет записи, я воспользовался mock файлом vivaldi.mp3)
- меню - статика без функционала, активный раздел "Звонки"
## Техническое задание
Требуется взять из фигмы проект и разработать часть на реакте
Данные можно взять с бека по апи отсюда https://api.skilla.ru/testapi Токен для тестовых testtoken
Тестовый токен — testtoken
Часть из фигмы, которую берем в разработку:
- листинг звонков с выборкой по датам
- выбор входящих, исходящих или всех звонков
- проигрывание записи (если есть)
- сортировка на клиенте
- меню - статика без функционала, активный раздел "Звонки"
Фигма тут — https://www.figma.com/file/gvmxvc9SOiBIHmBxFkLlzy/Test-task-for-the-developer-(Copy)-(Copy)?node-id=0%3A1

## Deploy
https://main--jazzy-bonbon-f68193.netlify.app/calls

## Использованные технологии
`React`, `Redux-thunk`, `Redux-toolkit`, `Typescript`, `Webpack`, `react-router-dom`, `axios`

## Инструкция по запуску
1. Откройте терминал и перейдите в корневую директорию проекта
2. Установите зависимости с помощью команды `npm install`
3. Запустите приложение локально с помощью `npm start`
