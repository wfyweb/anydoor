<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_690832_w4qgw4q5bicqh0k9.css">
    <title>{{title}}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            margin: 30px;
            background: rgba(0, 0, 0, 0.8);
        }

        a {
            display: block;
            font-size: 18px;
            text-decoration: none;
            color: #309E30;
        }

        a:hover {
            color: #CB309E;
        }

        img {
            width: 20px;
            height: 20px;
        }
    </style>
</head>

<body>
    <div id="app">
        {{#each files}}
        <a href="{{../dir}}/{{file}}">
            {{{icon.icon}}} {{file}}
        </a>
        {{/each}}
    </div>

</body>

</html>