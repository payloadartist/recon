#!/usr/bin/env node
// Author: Arif Khan (@payloadartist)

const got = require('got');
const fs = require('fs');
const cheerio = require('cheerio');
const { exec } = require("child_process");

// default output file
var outFile = 'apple_assets.txt'

// custom output file specified in argument
if(process.argv.slice(2)[0] != null) {
    outFile = process.argv.slice(2)[0]
}

(async () => {
    try {
        const ackPage = "https://support.apple.com/en-us/HT201536"
        console.log(`Loading response from ${ackPage}`)
        await got(`${ackPage}`)
            .then((response) => {
                console.log(`Loaded response from ${ackPage}\n`)
                $ = cheerio.load(response.body)
                var count = $(`#sections > div:nth-child(1) > div > p`).length
                var writeStream = fs.createWriteStream(`tmp.txt`);
// parse response to collect the assets
                for (var i = count - 1; i -= 2;) {
                    asset = $(`#sections > div:nth-child(1) > div > p:nth-child(${i}) > em`).text().split(' ')[1]
                    if (asset != undefined) {
                        console.log(asset)
                        writeStream.write(`${asset}\n`, 'utf8');
                    } else {
                        break;
                    }
                }
                writeStream.on('finish', () => {
                    console.log(`\nCollected assets`);
                });
                writeStream.end();
            })

            console.log(`\nFiltering duplicates and saving to ${outFile}`)
// collect uniques
            exec(`cat tmp.txt | sort -u | uniq >> ${outFile} && rm tmp.txt`, (error) => {
                if (error) {
                    console.log(`Error occured while filtering duplicates`);
                    return;
                }
            });

    } catch(error) {
        console.log('Error:\n', error)
    }
})()
