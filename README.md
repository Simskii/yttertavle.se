# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Bokningsförfrågan

Sidan `/bokningsforfragan` är byggd för en enkel extern bokningslösning:

- Skapa en separat publik Google Calendar för bokningar och använd neutrala händelser som `Bokad`.
- Skapa ett Tally-formulär för bokningsförfrågningar och skicka notiser till `yttertavlebygdegard@gmail.com`.
- Embed-länkarna ligger som standard i koden. Kopiera `.env.example` till `.env` lokalt om du vill testa andra länkar:

```sh
PUBLIC_BOOKING_CALENDAR_EMBED_URL="https://calendar.google.com/calendar/embed?src=yttertavlebygdegard%40gmail.com&ctz=Europe%2FStockholm&mode=WEEK&wkst=2&showTitle=0&showPrint=0&showCalendars=0"
PUBLIC_BOOKING_TALLY_EMBED_URL="https://tally.so/embed/yPzz6B?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
```

Samma variabler kan sättas i Cloudflare Pages om kalendern eller formuläret ska kunna bytas utan kodändring.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
