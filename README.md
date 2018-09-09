# takeshape-starter
Bare minimum file structure for new TakeShape projects.

Uses [spaghetti](https://github.com/the-couch/spaghetti) for JS & CSS compilation, [live-server](https://github.com/tapio/live-server), and of course the TakeShape CLI.

# Usage
Install dependencies:
```bash
npm i
```

Set up your site using the TakeShape CLI:
```bash
npm run init
```

## Commands
All commands are run via npm scripts i.e. `npm run <cmd>`.

### `deploy`
Compile assets, build site, and deploy to your configured static site.

### `build`
Compile assets and build site.

### `watch`
Compile assets, build site, and serve locally. URL will default to `localhost:8080`.

# License
MIT License
(c) 2018 Friends of Friends
