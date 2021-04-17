const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');


const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Acess-Control-Allow-Origin', '*');
    res.writeHead(200);

    if (!fs.existsSync('./results')) {

        fs.mkdir('./results', (err) => {
            if (err) {
                console.log(err);
            }
            fetch('http://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(json => {
                    fs.writeFile('./results/post.json', JSON.stringify(json, null, 2), (err) => {
                        if (err) {
                            console.log(err);
                        }
                    })
                });
        })
    }

    html = `
        <h1>Node Js File System Project</h1>
    `;
    res.end(html);
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server started at port 3000');
})



