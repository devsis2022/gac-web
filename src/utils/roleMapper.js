const map = {
  admin: "Administrador",
  manager: "Gestor",
  coordinator: "Coordenador",
};

export const roleMapper = (role) => map[role] || "";
