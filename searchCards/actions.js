var FILTERS = {
  classes: ['neutral',
  'druid',
  'mage',
  'paladin',
  'warrior',
  'hunter',
  'shaman',
  'priest',
  'rogue'],
  mana: [
  'mana0',
  'mana1',
  'mana2',
  'mana3',
  'mana4',
  'mana5',
  'mana6',
  'mana7',
  'mana8',
  'mana9',
  'mana10'],
  attack: [
  'atk0',
  'atk1',
  'atk2',
  'atk3',
  'atk4',
  'atk5',
  'atk6',
  'atk7',
  'atk8',
  'atk9',
  'atk10'],
  health: [
  'hp0',
  'hp1',
  'hp2',
  'hp3',
  'hp4',
  'hp5',
  'hp6',
  'hp7',
  'hp8',
  'hp9',
  'hp10' ],
  races: [
  'beast',
  'murloc',
  'demon',
  'mech',
  'totem',
  'pirate',
  'dragon']
};

//Function to handle filters by creating a map called 'filter' with filter name and bool value
function filterHandling() {
  var filter = {
    classes: [],
    mana: [],
    attack: [],
    health: [],
    races: [],
    name: ''
  };
  FILTERS.classes.forEach(function(f) {
    if ($('#' + f).is(':checked')) {
      filter.classes.push(f);
    }
  });
  FILTERS.races.forEach(function(f) {
    if ($('#' + f).is(':checked')) {
      filter.races.push(f);
    }
  });
  FILTERS.mana.forEach(function(f, index) {
    if ($('#' + f).is(':checked')) {
      filter.mana.push(index);
    }
  });
  FILTERS.attack.forEach(function(f, index) {
    if ($('#' + f).is(':checked')) {
      filter.attack.push(index);
    }
  });
  FILTERS.health.forEach(function(f, index) {
    if ($('#' + f).is(':checked')) {
      filter.health.push(index);
    }
  });
  console.log(filter);
}

//Loop to create change events for each filter checkbox
Object.keys(FILTERS).forEach(function(key) {
  FILTERS[key].forEach(function(filter) {
    $('#' + filter).change(filterHandling);
  });
});
