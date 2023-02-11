addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  let url = new URL(request.url)
  let imageUrl = url.searchParams.get("url")
  if (!imageUrl) {
    return new Response("Please provide an image URL using by doing cloudflare_worker_link/?url=*imagelink*", {
      status: 400,
      headers: { 'content-type': 'text/plain' },
    })
  }

  let html = `

    <html>
    <head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
        <title>PixelPlayz | CDN</title>
        <meta name="twitter:site" content="@twitter_handle">
        <meta name="twitter:title" content="Your_Title_Here">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image:src" content="${imageUrl}">
        <meta property="og:type" content="article">
        <meta property="og:url" content="${url}">
        <meta property="og:image" content="${imageUrl}">
        <meta property="og:image:width" content="1920">
        <meta property="og:image:height" content="1080">
        <meta property="og:image:alt" content="Description_for_your_image">
        <meta property="og:type" content="website">
        <meta name="theme-color" content="#00FF8E">
        <style>
        body {
        background: #000000;
            margin: 0;
            padding: 0;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        </style>
    </head>
    <body>
        <img src="${imageUrl}" alt="">
    </body>
    </html>
  `

  return new Response(html, {
    headers: { 'content-type': 'text/html' },
  })
}
