yarn init -y
npx tsc --init

yarn add express
yarn add ts-node-dev typescript @types/node @types/express -D

below is tsconfig.json (template)
"target": "es6",
"outDir": "./server/dist",  
"rootDir": "./server",  
"moduleResolution": "node",

below is package json
"main": "server/dist/index.js"
"scripts" : {
"start": "node server/dist/index.js",
"dev": "ts-node-dev server/index.ts",
"build": "tsc"
}

last array in tsconfig for client
"include": [
"src"
]

last array in tsconfig for server
"include": [
"server/**/*"
]
