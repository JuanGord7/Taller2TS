export class Serie {
    id: number;
    nombre: string;
    canal: string;
    numTemporadas: number;
    descripcion: string;
    enlace: string;
    imagen: string;
  
    constructor(id: number, nombre: string, canal: string, numTemporadas: number, descripcion: string, enlace: string, imagen: string) {
      this.id = id;
      this.nombre = nombre;
      this.canal = canal;
      this.numTemporadas=numTemporadas;
      this.descripcion=descripcion;
      this.enlace=enlace;
      this.imagen=imagen;
    }
  }