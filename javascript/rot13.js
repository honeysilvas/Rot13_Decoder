/**
 * Rot13 Decoder
 * Decodes Rot13 ciphers.  Rot13 is a substitution cipher that rotates by 13 places.
 *
 */

// Decode a string using rot13.
function decode_rot13( encoded_string ){
	var decoded_string = "";
	var alphabet_start = 65;	
	var alphabet_end = 122;
	var character;
	var case_flag;
	
	// Split encoded string into individual characters.
	encoded_string_array = encoded_string.split( "" );

	for ( var i = 0; i < encoded_string_array.length; i++ ){
		// Get ASCII code of character.
		character = encoded_string_array[ i ].charCodeAt( 0 );

		// Check if character is part of the alphabet.
		if ( ( character > alphabet_start ) && ( character <= alphabet_end ) ){
			
			// Preserve character case.
			if ( character > alphabet_start + 26 ) {
				case_flag = "lower";
			} else {
				case_flag = "higher"
			}
		
			// Add 13 to character (rot13).
			character = character + 13;

			// Rotate character to the beginning of the alphabet.
			if ( character > alphabet_end ){
				character = character - ( alphabet_end - alphabet_start + 1 );
			}

			// Convert ASCII code back to alphabet.
			character = String.fromCharCode( character );
			
			// Preserve character case.
			if ( case_flag == "lower" ) {
				character = character.toLowerCase();
			} else {
				character = character.toUpperCase();
			}
			
			// Add character to decoded string.
			decoded_string += character;
			
		// Do not decode non-alphabetical characters.
		} else {
			decoded_string += encoded_string_array [ i ];
		}	
	}
	return decoded_string;
}