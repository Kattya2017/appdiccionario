// Generated by https://quicktype.io

export interface ResultAbecedario {
    ok:   boolean;
    msg:  string;
    resp: Resp[];
}

export interface Resp {
    id:                 number;
    abecedario:         string;
    abecedario_shipibo: string;
    titulo:             string;
    titulo_shipibo:     string;
    estado:             number;
}