import formatterPtBR from "./pt-BR/formatter";

const factory = locale => {
    switch ( locale ) {
        case "pt-BR":
            return formatterPtBR;
        default:
            return null;
    }
};

const formatter = locale => factory( locale );
export default formatter;