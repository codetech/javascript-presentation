# JavaScript Presentation

## Intro

### History

- 1995; Brendan Eich created in 10 days
- Netscape Navigator
- Copied into IE as "JScript"

### The Name

- JavaScript is not Java
- It is a completely different language
- AKA "ECMAScript"

### Heritage

- Inspired by LISP, particularly Scheme
  - Functions as first-class objects
  - Optional arguments
  - Loose typing
  - Closure
  - Tail recursion (coming soon!)
- C syntax

### Usages

- Web & mobile apps
- Browser plugins
- Servers

## Use it in the browser

### REPL

- Click F12 (Cmd+Option+I on Mac)
- Choose "console"

### Persistence

- Create a folder called `project\`
- Open Notepad
- Create and save each of the following files
  - Be careful NOT to save as ".txt"! Choose "Save as type:" > "All files" and specify the file extensions.

`project\index.html`:

```html
<script src="index.js"></script>
```

`project\index.js`:

```js
console.log('Hello World!');
```

- Open `project\` folder, right-click on `index.html`
- Choose "Open with" > "Google Chrome"
- Click F12 and choose "console"

## Use it as a server

- Download Node.js
  - http://nodejs.org/dist/v0.12.2/node.exe

### REPL

- Open command line ("cmd")

```bat
cd Downloads
node.exe
> console.log('hello world')
hello world
undefined
```

- Type "Ctrl+C" to exit.

### Persistence

- Open Notepad
- Create and save each of the following files

`project\server.js`:

```js
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://localhost:1337/');
```

- Open command line again

```bat
node.exe server.js
Server running at http://localhost:1337/
```

- Open a web browser and navigate to `http://localhost:1337/`
