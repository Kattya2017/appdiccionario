// Generated by https://quicktype.io

export interface ResultPalabra {
    ok:   boolean;
    msg:  string;
    resp: Resp[];
}

export interface Resp {
    id:                  number;
    titulo:              string;
    titulo_shipibo:      string;
    descripcion:         string;
    descripcion_shipibo: string;
    audio:               string;
    id_abecedario:       number;
}