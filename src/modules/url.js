class Url {
  constructor () {

  }

  getCharacter (realm, character) {
    return 'https://eu.api.battle.net/wow/character/' + realm + '/' + character + '?locale=en_GB&apikey=f8g9xhcpeebdcpma9a5u8fpnswqfwcaa'
  }

  getCharacterData (realm, character, fields) {
    return 'https://eu.api.battle.net/wow/character/' + realm + '/' + character + '?fields='+ fields +'&locale=en_GB&apikey=f8g9xhcpeebdcpma9a5u8fpnswqfwcaa'
  }
}

export default Url
