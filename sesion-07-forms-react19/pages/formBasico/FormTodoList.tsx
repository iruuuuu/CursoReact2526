import { useActionState } from "react";
import type { TodoData, FormStage } from "../../types/index";

// Simular guardar en una base de datos
const guardarEnBaseDeDatos = async (todo: TodoData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    localStorage.setItem('todos', JSON.stringify(todo));
}

// Crear una función que ejecuta react al enviar el formulario
const guardarAction = async (
    _prevState: FormStage,
    formData: FormData, // <---- formData es el objeto FormData del formulario
): Promise<FormStage> => {
    // Extraer todos los datos del formulario
    const nombreTodo = formData.get("nombreTodo") as string;
    const estadoTodo = formData.get("estadoTodo") as string;
    
    if (!nombreTodo || !estadoTodo) {
        return {
            error: "Todos los campos son obligatorios",
            success: null,
        };
    }

    // Crear el objeto todo
    const todo: TodoData = {
        title: nombreTodo,
        completed: estadoTodo === "completado",
    };

    try {
        // Guardar en base de datos
        await guardarEnBaseDeDatos(todo);
        return {
            error: null,
            success: "Todo guardado correctamente",
        };
    } catch (error) {
        return {
            error: "Error al guardar el todo",
            success: null,
        };
    }
}

const FormTodoList = () => {
    const [state, formAction, isPending] = useActionState(guardarAction, {
        error: null,
        success: null,
    });

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Crear Todo</h2>
            
            <form action={formAction} className="space-y-4">
                <div>
                    <label htmlFor="nombreTodo" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre del Todo
                    </label>
                    <input
                        type="text"
                        name="nombreTodo"
                        id="nombreTodo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Escribe tu tarea..."
                    />
                </div>

                <div>
                    <label htmlFor="estadoTodo" className="block text-sm font-medium text-gray-700 mb-1">
                        Estado
                    </label>
                    <select
                        name="estadoTodo"
                        id="estadoTodo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecciona un estado</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="completado">Completado</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? "Guardando..." : "Guardar Todo"}
                </button>

                {state.error && (
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {state.error}
                    </div>
                )}

                {state.success && (
                    <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                        {state.success}
                    </div>
                )}
            </form>
        </div>
    );
}



export default FormTodoList;