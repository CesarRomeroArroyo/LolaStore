export interface PedidoInterface {
    descuento: string,
    domicilio: number,
    estado: number,
    fecha: string,
    hora: string,
    subtotal: number,
    total: number,
    usuarioid: string,
    productos: any,
    usuario: any,
    estrellas?: number,
    comentario: string,
    atencion: string,
    idunico?: string;
    url?: string;
    id?: string;
}