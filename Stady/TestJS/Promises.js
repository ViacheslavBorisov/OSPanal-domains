// Промисы. fetch - запрос на отладочный сервер.
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error))

// Чтоб не писать 2 раза метод .then() - упрощаем:
const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  )

getData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.log(error.message))

// Асинхронные функции - всегда возвращают промис
const timerPromise = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
  console.log('Timer starts')
  const startTime = performance.now()
  await timerPromise()
  const endTime = performance.now()
// performance.now() - возвращает текущее время.
  console.log('Timer anded', endTime - startTime)
}

asyncFn() 

// С использованием синтаксиса ASYNC/AWAIT
// написание запроса на сервер еще упрощается
// по сравнению с .then .catch
/* const */getData = async (url) => { //была объявлена выше 
  const rez = await fetch(url)        //в другом примере
  const json = await rez.json()
  return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
// т.к. в случае возникновения ошибки в функции getData 
// та никак не обрабатывается, обработку и вывод конечного
// результата необходимо оборачивать в try/catch
try {
  const data = await getData(url)
//вообще-то await исп-ся только ВНУТРИ АФ, 
//но иногда КОНСОЛЬ БРАУЗЕРА такое делать 
//разрешает
  console.log(data)
} catch {
  console.log(error.massage)
}
// переписали запрос без классических промисов, а используя
// только асинхронные вызовы. Лаконичненько. АФ - тоже промис :)  