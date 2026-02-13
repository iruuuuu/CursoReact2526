// Tipos para el estado del formulario
export interface FormStage {
    error: string | null;
    success: string | null;
}

// Tipos para los datos del todo
export interface TodoData {
    title: string;
    completed: boolean;
}

// Tipos para login (para futuro uso)
export interface Login {
    email: string;
    password: string;
}

// Tipos para registro (para futuro uso)
export interface Register {
    name: string;
    email: string;
    password: string;
}
