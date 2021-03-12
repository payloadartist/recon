# 🕵🏾 recon
This script weaponizes the power of scraping to collect assets for the Apple bug bounty program's acknowledgements page.

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
