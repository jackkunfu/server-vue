const joinHtml =  html => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <head><title>Hello</title></head>
        <body>${html}</body>
        </html>
    `
}

module.exports = {
    joinHtml
}
