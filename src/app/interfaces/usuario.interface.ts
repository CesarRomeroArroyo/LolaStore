export interface UsuarioInterface {
    nombre: string,
    email: string,
    cedula: string,
    contacto: string,
    ciudad: string,
    direccion: string,
    direcciones: string[],
    estado?: number,
    id?: string,
    idunico?: string,
}