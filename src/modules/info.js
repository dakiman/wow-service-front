class Info {
  constructor() {

  }

  getClass(classId) {
    let classes = {
      1: 'Warrior',
      2: 'Paladin',
      3: 'Hunter',
      4: 'Rogue',
      5: 'Priest',
      6: 'Death Knight',
      7: 'Shaman',
      8: 'Mage',
      9: 'Warlock',
      10: 'Monk',
      11: 'Druid',
      12: 'Demon Hunter'
    }
    return classes[classId]
  }

  getRace(raceId) {
    let races = {
      1: 'Human',
      2: 'Orc',
      3: 'Dwarf',
      4: 'Night Elf',
      5: 'Undead',
      6: 'Tauren',
      7: 'Gnome',
      8: 'Troll',
      9: 'Goblin',
      10: 'Blood Elf',
      11: 'Draenei',
      22: 'Worgen',
      24: 'Pandaren',
      25: 'Pandaren',
      26: 'Pandaren',
      27: 'Nighborne',
      28: 'Highmountain Tauren',
      29: 'Void Elf',
      30: 'Lightforged Draenei'
    }
    return races[raceId]
  }

  getClassColor(classId) {
    let colors = {
      1: '#C79C6E',
      2: '#F58CBA',
      3: '#ABD473',
      4: '#FFF569',
      5: '#FFFFFF',
      6: '#C41F3B',
      7: '#0070DE',
      8: '#69CCF0',
      9: '#9482C9',
      10: '#00FF96',
      11: '#FF7D0A',
      12: '#A330C9'
    }
    return colors[classId]
  }
  
}

export default Info
