# hubot-pair-shuffler

A hubot that shuffles pairs

See [`src/pair-shuffler.coffee`](src/pair-shuffler.coffee) for full documentation.

## Installation

In hubot project repo, run:

`npm install hubot-pair-shuffler --save`

Then add **hubot-pair-shuffler** to your `external-scripts.json`:

```json
[
  "hubot-pair-shuffler"
]
```

## Sample Interaction

```
user1>> @hubot Generate random pairs of Brandyn, Dustin, and Dianne
hubot>> @Dianne pair with Brandyn on Brandyn's task
        @Brandyn pair with Dustin on Dustin's task
        @Dustin pair with Dianne on Dianne's task
```

## NPM Module

https://www.npmjs.com/package/hubot-pair-shuffler
