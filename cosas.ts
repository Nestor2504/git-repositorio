interface Cosas {
  id: number;
  name: string;
  descripcion: string;
}

const cosas: Cosas[] = [
  { id: 1, name: "objeto1", descripcion: "descripcion del objeto 1" },
  { id: 2, name: "objeto2", descripcion: "descripcion del objeto 2" },
  { id: 3, name: "objeto3", descripcion: "descripcion del objeto 3" },
];

export function getAll() {
  return cosas;
}

export function getById(Id: number) {
  return cosas.find((id) => id.id == Id);
}
