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

var str2enum = require( '@stdlib/ndarray-base-dtype-str2enum' );
var enum2str = require( './../lib' );

var str = enum2str( str2enum( 'float64' ) );
console.log( str );
// => 'float64'

str = enum2str( str2enum( 'float32' ) );
console.log( str );
// => 'float32'

str = enum2str( str2enum( 'int32' ) );
console.log( str );
// => 'int32'

str = enum2str( str2enum( 'int16' ) );
console.log( str );
// => 'int16'

str = enum2str( str2enum( 'int8' ) );
console.log( str );
// => 'int8'

str = enum2str( str2enum( 'uint32' ) );
console.log( str );
// => 'uint32'

str = enum2str( str2enum( 'uint16' ) );
console.log( str );
// => 'uint16'

str = enum2str( str2enum( 'uint8' ) );
console.log( str );
// => 'uint8'
