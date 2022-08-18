# Link Shortener
## _Link Shortener App with SvelteKit, TypeScript, and Directus.io_

## Features
- headless CMS to store all the links at one place([directus])
- shorten your links with your custom solution

## Tech

Link Shortener uses following technology stacks:

- [svelte] - a free and open-sourSvelteKit is an application framework powered by Sveltece front end compiler
- [SvelteKit] - an application framework powered by Svelte
- [TypeScript] - a strongly typed programming language that builds on JavaScript, a strict syntactical superset of JavaScript and adds optional static typing to the language.
- [dotenv] - Loads environment variables from .env file.
- [directus] - an open-source data platform that instantly gives any new or existing SQL database an API (REST+GraphQL) and a no-code data collaboration app. (headless CMS)

## Installation

To run Link Shortener project,

- clone git repository

create .env file to the root directory of the project
- define following in the .env file
```
 DIRECTUS_API_TOKEN=YOUR_DIRECTUS_API_TOKEN
 DIRECTUS_URL=YOUR_DIRECTUS_URL
```


- run the following commands in terminal

```sh
npm install
```
For development environments...

```sh
npm run dev
```

Start script

```sh
npm run start
```

Build script

```sh
npm run build
```
    
   [svelte]: <https://svelte.dev/>
   [SvelteKit]: <https://kit.svelte.dev/>
   [dotenv]: <https://www.npmjs.com/package/dotenv/>
   [directus]: <https://directus.io/>
   [TypeScript]: <https://www.typescriptlang.org/>
   
