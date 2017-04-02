
var document = window.document,
    $_window = $( window ),

    _results = [
      'pyroblast'
    ],

      _rEscapeChars = /\/|\\|\.|\||\*|\&|\+|\(|\)|\[|\]|\?|\$|\^/g,
      _rMatch = /[A-Z]?[a-z]+|[0-9]+/g,

      _keys = [
      13,
      9
    ],

      _length = _results.length,

      $_result = $( '.result' ),
      $_search = $( '.search-bar' ),
      $_searchContainer = $( '.search-container' ),

      _resultPlaceholder = $_result.val();

$_search.on( "keydown", function ( e ) {

  if ( _keys.indexOf( e.keyCode ) !== -1 ) {

    $_search.val( $_result.val() );

    return false;

  }

}).on( "keyup", function () {

  var value = $_search.val().replace( _rEscapeChars, "" ),
      regex = new RegExp( "^"+value, "i" ),
      matches = [];


  if ( value ) {

    for ( var i = _length; i--; ) {

      if ( regex.test( _results[ i ] ) ) {

        matches.push( _results[ i ] );

      } else {

        $_result.val( "" );

      }

    }

    if ( matches.length ) {

      for ( var i = matches.length; i--; ) {

        $_result.val( matches[ i ] );

      }

    }

  } else {

    $_result.val( _resultPlaceholder );

  }
})
