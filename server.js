const http = require('http');

const html = `
        <!doctype>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Node.js server tutorial</title>
                <link rel="stylesheet" href="app.css"
                <body>
                    <h1>Node.js Essentials</h1>
                    <button>Click me!</button>
                    <script src="app.js"></script>
                </body>
            </head>
        </html>
`;
const css = `
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    h1 {
        background-color: #43853d;
        color: white;
        padding: .5em;
        font-family: 'Consolas'
    }
`;

const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js in action.'));
`;

http.createServer((req, res) =>{
    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
            break;

        case '/app.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(css);
            break;

        case '/app.js':
            res.writeHead(200, {'Content-Type': 'text/js'});
            res.end(js);
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 not found');
    }
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(html);
}).listen(5000, () => console.log('Server started -->'));