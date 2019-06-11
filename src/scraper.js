const puppeteer = require('puppeteer');
const TWITTER_URL = (handle) => `https://twitter.com/${handle}`;
const handle = `SumaaaaiL`;
(async () => {
    console.log('1');
    /* Initiate the Puppeteer browser */
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    console.log('1');
    /* Go to the IMDB Movie page and wait for it to load */
    await page.goto(TWITTER_URL(handle), { waitUntil: 'networkidle0' });
    /* Run javascript inside of the page */
    let data = await page.evaluate(() => {
        console.log('1');
        let tweets = document.querySelectorAll('p[class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text"]').innerText;
        //   let rating = document.querySelector('span[itemprop="_timestamp js-short-timestamp "]').innerText;
        //  let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
        console.log('1');
        console.table(tweets);
        // for (let i = 1; i < 3; i++) {
        //     let tweet = tweets[i]
        //     console.log(tweet)
        // }
        /* Returning an object filled with the scraped data */
        return {
            tweets,
            //    rating,
            //   ratingCount
        }
    });
    /* Outputting what we scraped */
    console.log(data);
    await browser.close();
})();

import React, { Component } from 'react'

export default class scrapmyass extends Component {
    render() {
        return (
            <div>
                scrapass
            </div>
        )
    }
}
