'use stict';

const {Client} = require('discord.js');
const axios = require('axios');

const client = new Client();

client.once('ready', () => {
    console.log(`${client.user.username} is ready !`);
});

client.on('message', (message) => {
    if (message.content === '!hug') {
        return axios({
            url: 'https://yokoso.ohori.me/api/sfw/social/hug?exclude=webp&encode=1',
        }).then((response) => message.channel.send({embed: {
            description: `[No image display ? click here](${encodeURI(response.data.data.url)})`,
            image: {
                url: response.data.data.url,
            },
        }}));
    };
});

client.login(require('./config').token);