/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var objectInverse = require( '@stdlib/utils-object-inverse' );
var enumeration = require( '@stdlib/ndarray-dtypes' ).enum;


// VARIABLES //

var hash = objectInverse( enumeration(), {
	'duplicates': false
});


// MAIN //

/**
* Returns the data type string associated with an ndarray data type enumeration constant.
*
* @param {integer} dtype - data type enumeration constant
* @returns {(string|null)} data type string or null
*
* @example
* var str2enum = require( '@stdlib/ndarray-base-dtype-str2enum' );
*
* var v = str2enum( 'float64' );
* // returns <number>
*
* var dt = enum2str( v );
* // returns 'float64'
*/
function enum2str( dtype ) {
	var v = hash[ dtype ];
	return ( typeof v === 'string' ) ? v : null; // note: we include this guard to prevent walking the prototype chain
}


// EXPORTS //

module.exports = enum2str;
