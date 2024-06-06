<div align="center">
<img src="https://i.ibb.co/Wsb97z4/image.png" alt="logo" width="120" height="120" />
</div>

<h3 align="center">Apillonium</h3>
  <p align="center">
  <br />
    <a href="http://apillonium.surge.sh">Demo v0.0.1</a>
    ·
    <a href="https://www.youtube.com/watch?v=bmSqY1mnvYo">Youtube</a>
    ·
    <a href="https://github.com/frankgito/apillonium">Repo</a>
  </p>
</div>

## Screenshot

![Screenshot](https://i.ibb.co/5LQ3Tgf/image.png)

## Summary

```md
Hola :wave:,

We are Ope and Frank. Nice to have you here.

This is Apillonium.
The Idea behind Apillonium is simple. Click generate, own a 3D Model.

The User can generate a 3D Model via meshy.ai api call.
By clicking generate the User automatically mints his 3D Model.

Every Week there is a new Theme Happening. This Weeks is Monkey Week.
Every Week only 10 Creatures can get minted. Next Week is Horse Week.

After sucessfully finishing 7 rounds of week themes, we build an Explore Page.
The Explore Page contains the give Theme and the created Collection.

After suessfully implenting a joyful Explore Page. We will create a Buy Page.
The Buy Page allows you to buy from the Creator real world products based on the minted 3D Model.
The owner get 10% of the sell. Every Sell is 50 Bucks.

This is how Apillonium can be seen. As the existing of the repo indiciates,
its in his current state a technical exploration of the Apillon SDK.

Thank you for zapping in : )

Cheers :partially_sunny:
```

## Deep Dive

- [Frontend README.md](./frontend/README.md)
- [Deployment README.md](./deployment/README.md)
- [NFT README.md](./nifty/README.md)

## Our doings:

We followed an iterative apprach.
We created Frontend, nifty and deployment.

### What works

```md
**Start**
5dd6d7f :zap: (./README.md) initialise
0c18ef4 :zap: (frontend) intialise 3D Scene with TresJS
ab8efb4 Update README.md
86f56a7 :zap: (deployment) intialise deployment

**Display a Monkey**
f8f90d6 :zap: (frontend) cleanup, add kingKong
c2c583c :zap: (nifty) intiliase nifty
8ec02e7 :abc: (./README.md) layout structure
c334287 :zap: (nifty) add apillonSDK and tsx, test it

**Get @apillon/nft example running**
e5563ce :zap: (nifty) intialise example, ran out of token in the process ^^'
eb7bf80 :zap: (nifty) get deployed contract sucessfully
f19897b :zap: (nifty) rm index.ts
3708655 :zap: (nifty) add createCollection.ts
96dc89d :zap: (nifty) add burn, mint, getCollection
1c4250f :zap: (nifty) add search, transfer
68229fa :zap: (nifty) intilaise cli.ts
da04252 :zap: (nifty) add & export & use greeting.ts
2e45dd6 :zap: (nifty) rearange for get, mint, burn via cli
9d8e428 :zap: (nifty) burn only works if revokable was true

**Get @apillon/nft gist of functionality**
e6b81ed :zap: (nifty) add transfer collection
b1708b2 :zap: (nifty) reshuffle

**Get @apillon/storage example running**
4c3b5ce :zap: (nifty) modify creatBucket.ts

**Get @apillon/nft gist of functionality**
2538c63 :zap: (nifty) add addFileToBucket.ts, getFileFromBucket.ts
776815f :zap: (nifty) adjust utils
0a4d67f :zap: (nifty) adjust cli, create metadata folder & upload

**Get @apillon/cli gist of functionality**
174c78f :zap: (deploymnt) deploy website via apillon-cli, add pnpm script
224590a :zap: (fileserver) create fileserver
9d64080 :zap: (nifty) add option and adjust
f452d0f :zap: (nifty) record cli exploration
bb323a6 :zap: (nifty) update to record cli exploration
bed7acb :zap: (nifty) update Numero 2 to record cli exploration

**Get a working cli for creating 3D NFT Collection & Mint Index 1 running**
43e8f27 :zap: (nifty) add recording, final fix of cli.ts
88bde46 :zap: (frontend) add shacdn/vue & implent great butto
53eea1a :zap: (frontend) add vue-router & etablish bare bone views
c6bcc4c Worked on Router and Home Page
4e60b35 Fixed Spelling mistake

**Write api call for 3D Model generation**
df70421 :zap: (nifty) add aiutily for meshy call
64c63c0 Added Teams and About Views
3018202 :zap: (frontend) change scrollbar style
8115d29 :zap: (frontend) add composables, add useMeshy, useApillon, implent in ExperienceView.vue
4bb0cf1 Added Download Button
52e515b Added Home Na button to Experience View
8c7bfb6 :zap: (frontend) change to HomeIcon
b44dfe7 :zap: (frontend) change route colors and button
321d618 :zap: (frontend) change monkes

**Redeploy Website which displays 2 Monkeys**
c7717ab :zap: (deployment) redeploy
e31c4cd :abc: (deployment) add README.md
0c17b68 :abc: (fileserver) add READMe.md)
a9f323c :abc: (nifty) update README.md

**Redeploy Website which displays more Monkeys**
ef92e07 :zap: (frontend) add models, add counter, make arrows clicky
9fba0f2 :abc: (frontend) update README.md
8191d24 :zap: (deployment) last deploy
3ae8d51 :abc: (deployment) add surge deployment link as backup
d85bea7 :zap: (frontend) add .ico, modify readme.md
```

### What has to be done for Alpha version.

- [ ] fix performance, improve render loop
- [ ] On click generate, call meshy.ai API, create x.json metadata, mint NFT
- [ ] After Mint 10 is reached, deploy 1-10.json to ipfs via storage, reset base_uri
- [ ] readjust Frontend

## Team

| -          | Name      |
| :--------- | :-------- |
| :ice_cube: | FrankBevr |
| :fire:     | OpeOginni |
