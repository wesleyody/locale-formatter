import formatterPtBR from "./pt-BR/formatter";

const factory = locale => {
    switch ( locale ) {
        case "pt-BR":
            return formatterPtBR;
        default:
            return value => value ? value.replace( /[^0-9]+/g, "" ) : value;
    }
};

const formatter = locale => factory( locale );
export default formatter;