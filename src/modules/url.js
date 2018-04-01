class Url {
  constructor () {

  }

  getCharacter(realm, character) {
    return 'https://eu.api.battle.net/wow/character/'+ realm +'/'+ character +'?locale=en_GB&apikey=f8g9xhcpeebdcpma9a5u8fpnswqfwcaa'
    // return 'https://eu.api.battle.net/wow/character/the-maelstrom/Sernaos?locale=en_GB&apikey=k84zmmc5y24g6w6wzebm2zbd6uqzwn5h'
  }
}

export default Url
