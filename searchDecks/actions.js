var classes = [
  'druid',
  'mage',
  'paladin',
  'warrior',
  'hunter',
  'shaman',
  'priest',
  'rogue']

function filterHandling() {
  var filter = {
    class: [],
    isStandard: true,
    isWild: true,
    card: '',
    createdBefore: '',
    createdAfter: '',
    modifiedBefore: '',
    modifiedAfter: '',
    name: ''
  };
  classes.forEach(function(f) {
    if ($('#' + f).is(':checked')) {
      filter.class.push(f);
    }
  });

  filter.isWild = $('#wild').is(':checked');
  filter.isStandard = $('#stand').is(':checked');
  filter.name = $('#searchBar').val();
  filter.createdBefore = $('#createdBefore').val();
  filter.createdAfter = $('#createdAfter').val();
  filter.modifiedBefore = $('#modifiedBefore').val();
  filter.modifiedAfter = $('#modifiedAfter').val();

  console.log(filter);
}

$('#searchDeckBtn').click(filterHandling);