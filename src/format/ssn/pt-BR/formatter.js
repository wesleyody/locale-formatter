export const format = value => {
    if ( !value ) {
        return "";
    }

    // Limpa o valor
    const cleanValue = value.replace( /[^0-9]+/g, "" );

    if ( cleanValue.length > 3 && cleanValue.length <= 6 ) {
        return cleanValue.substring( 0, 3 ) + "."
            + cleanValue.substring( 3 );
    } else if ( cleanValue.length > 6 && cleanValue.length <= 9 ) {
        return cleanValue.substring( 0, 3 ) + "."
            + cleanValue.substring( 3, 6 ) + "."
            + cleanValue.substring( 6 );
    } else if ( cleanValue.length > 9 && cleanValue.length <= 11 ) {
        return cleanValue.substring( 0, 3 ) + "."
            + cleanValue.substring( 3, 6 ) + "."
            + cleanValue.substring( 6, 9 ) + "-"
            + cleanValue.substring( 9 );
    } else {
        return cleanValue;
    }
};

export default format;