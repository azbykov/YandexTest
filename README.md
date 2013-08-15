Yandex Test
========

1. Напишите функцию разбора query-строки в набор параметров.
Для решения этого задания необходимо использовать [urlBuilder](https://github.com/azbykov/urlBuilder)
## Usage
```javascript
var urlB = new urlBuilder('http://www.yandex.ru/yandsearch?text=azbykov&lr=2');
urlB.getParams();
```

2. Напишите систему сравнения двух наборов параметров форм (включая html-интерфейс). Имена параметров могут повторяться. Система должна отвечать на вопрос: «Что изменилось в параметрах?».
Основной скрипт 2/formCompare.js

3. Допустим, параметры http-запроса хранятся как свойства объекта. Напишите функцию сериализации параметров в query-строку с добавлением к произвольному url.
Для этого задания так же необходимо использовать [urlBuilder](https://github.com/azbykov/urlBuilder)
## Usage
```javascript
var urlB = new urlBuilder('http://www.yandex.ru/yandsearch?text=azbykov&lr=2');
urlB.setParams({'text': 'urlBuilder'});
urlB.getUrl();
```

4. Реализуйте систему для показа презентаций. Подумайте, как реализовать переключение слайдов и навигацию. Предусмотрите возможность размещения нескольких презентаций на одной странице. Рекомендуется использование jQuery. Код необходимо разместить на одном из специализированных хранилищ: GitHub, Bitbucket, code.google.com и т. д.
Пока не реализованно :(