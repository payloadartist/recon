# 🕵🏾 recon
This script weaponizes the power of web scraping to collect assets from the Apple bug bounty program's acknowledgements page.
Since Apple's program doesn't have a well defined scope, the assets collected here can be used as a point of reference to perform further testing or, recon.

# ⚒️ Install
Make sure you have Node and npm installed. Then run,
```npm install```
to install the dependencies

If you simply want to use the file containing the assets, simply run

```wget https://github.com/payloadartist/recon/raw/main/assets.txt```

# ⚙️ Usage

To pull new assets on your own.

Run
```chmod +x extract.js``` (for the first time or you can skip this if you run with node)

```./extract.js assets.txt```
(default output file is ```apple_assets.js``` while you can specify a custom output file by providingg the second argument)

It will also output to stdout, for piping to other tools.

# 🙌 Credits

[Arif Khan](https://twitter.com/payloadartist)
