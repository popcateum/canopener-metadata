const fs = require('fs')

function genMetadata(name, imgURL, homepage) {
  return {
    name: name,
    image: imgURL,
    external_url: homepage,
    attributes: [
      {
        trait_type: 'TYPE',
        value: 'Can Opener Membership',
      },
    ],
  }
}

let metadata = []

for (let i = 0; i < 10001; i++) {
  const name = `Can Opener #${i}`
  const image = 'ipfs://QmW2ti1AFYzWK4TbjPsBCjmcAUfX8SsffjXit2N27a7RB4'
  const homepage = 'https://canopener.popcateum.org'
  const data = genMetadata(name, image, homepage)
  metadata.push(data)
  fs.writeFileSync(`./metadata/${i}`, JSON.stringify(data))
}

fs.writeFileSync('./metadata.json', JSON.stringify(metadata))
