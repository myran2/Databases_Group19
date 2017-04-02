var FILTERS = [
  'neutral',
  'druid',
  'mage',
  'paladin',
  'warrior',
  'hunter',
  'shaman',
  'priest',
  'rogue'
];

//Function to handle filters by checking which are true and which are false
function filterHandling() {
  var filter = {};
  FILTERS.forEach(function(f) {
    filter[f] = $('#' + f).is(':checked');
  });
  console.log(filter);
}

//Loop to create change events for each filter checkbox
FILTERS.forEach(function(filter) {
  $('#' + filter).change(filterHandling);
});
