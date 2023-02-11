# Sharex-Embed-On-Discord
This cloudflare worker script lets you share your images on discord in a cool way

### How to use 

Create a cloudflare worker and go to quick edit and paste the code from main.js file inside the code window

Replace Your_title_here with a title of your choice

Replace Description_for_your_image with a description of your choice

Replace cloudflare_worker_link with the link of your cloudflare worker 

Replace #00FF8E with the hex color code of your choice

eg: if your worker link is https://test.example.workers.dev replace cloudflare_worker_link with https://test.example.workers.dev if you have a custom domain replace it with your custom domain

Done!

### How to use

Go to your cloudflare worker link we are going to use https://test.example.workers.dev for now and add the parameters ?url=imagelink

Now going to https://test.example.workers.dev?url=https://i.imgur.com/eucAMTA.png will show the image and sending the link will show a cool embed with the image
