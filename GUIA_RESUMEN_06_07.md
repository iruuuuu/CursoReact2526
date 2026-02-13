# 🎓 Guía para Entender React: Sesión 06 y 07

_(O explicado de forma que hasta tu abuela lo entendería)_

Esta guía resume lo más importante que has visto en las sesiones 06 y 07, usando ejemplos de la vida real para que los conceptos se te queden grabados a fuego. 🔥

---

# 📦 Sesión 06: Context API (El "Megáfono Familiar")

## 🤔 ¿Cuál es el problema?

Imagina una **Comida Familiar** en una mesa muy larga.
El **Abuelo** (componente padre) quiere pasarle la sal al **Bisnieto** (componente muy abajo en la jerarquía).

- **Sin Context (La forma antigua):**
  El Abuelo le da la sal al Padre -> El Padre al Hijo -> El Hijo al Nieto -> El Nieto al Bisnieto.
  _¡Es un lío! Todo el mundo tiene que tocar la sal aunque no la quiera._ Esto se llama **Prop Drilling** (o "Taladrar props").

## 💡 La Solución: Context API

El **Contexto** es como poner la sal en una **mesa giratoria en el centro** o usar un **megáfono**.
El Abuelo dice por el megáfono: _"¡Aquí está la sal!"_ y cualquiera, sin importar dónde esté sentado, puede cogerla directamente.

## 🛠️ ¿Qué hemos construido? (`FamiliContext`)

### 1. El Contexto (`FamiliContext.tsx`)

Es la caja mágica donde guardamos los datos.

```typescript
// Creamos la caja
const FamiliContext = createContext(null);
```

### 2. El Proveedor (`FamiliProvider`)

Es el componente que "envuelve" a toda la familia para darles acceso a la caja. Si no estás dentro del Provider, ¡no hay sal para ti!

```tsx
export function FamiliProvider({ children }) {
  const [mensaje, setMensaje] = useState("Hola familia!");

  return (
    // Aquí "emitimos" los datos para todos los hijos
    <FamiliContext value={{ mensaje, setMensaje }}>{children}</FamiliContext>
  );
}
```

### 3. El Hook Mágico (`useFamily`)

Para no tener que escribir código raro cada vez que quieras datos, creamos un "atajo".

```typescript
export function useFamily() {
  // Es como decir: "¡Dame los datos de la familia!"
  const context = useContext(FamiliContext);

  // Si intentas usarlo fuera de la familia, te avisa
  if (!context) throw new Error("¡No eres de la familia!");

  return context;
}
```

---

# 📝 Sesión 07: Formularios en React 19 (El "Mayordomo Automático")

## 🤔 ¿Cuál es el problema?

Antes, gestionar un formulario era como intentar controlar un avión manualmente:

1.  Tenías que crear un estado para el nombre (`nombre`).
2.  Otro estado para el loading (`cargando`).
3.  Otro para el error (`error`).
4.  Tenías que vigilar cada letra que el usuario escribía (`onChange`).
5.  Al enviar, tenías que poner `cargando(true)`, esperar, y luego `cargando(false)`.

_¡Mucho trabajo aburrido!_ 😴

## 💡 La Solución: `useActionState` (React 19)

Ahora contratas a un **Mayordomo** (el hook `useActionState`).
Tú solo le das el formulario y las instrucciones, y él se encarga de:

- Saber si se está enviando.
- Recoger los datos.
- Decirte si salió bien o mal.

## 🛠️ ¿Cómo funciona? (`FormTodoList.tsx`)

### 1. La Acción (`guardarAction`)

Son las instrucciones para el mayordomo. "¿Qué hago con estos datos?".

```typescript
// formData es como el sobre con todos los datos que rellenó el usuario
const guardarAction = async (estadoPrevio, formData) => {
  const nombre = formData.get("nombreTodo"); // "Sacas" el dato directamente del sobre

  if (!nombre) return { error: "¡Falta el nombre!" };

  await guardarEnBaseDeDatos(nombre);
  return { success: "¡Guardado!" };
};
```

### 2. El Hook en el Componente

Aquí contratas al mayordomo.

```tsx
const [state, formAction, isPending] = useActionState(guardarAction, null);
```

- **`state`**: El resultado final (¿Hubo error? ¿Éxito?).
- **`formAction`**: La función que le pegas al `<form action={formAction}>`.
- **`isPending`**: El "chivato". ¿Está trabajando el mayordomo ahora mismo? (True/False).

### 3. El HTML Simplificado

Fíjate que limpio queda. Ya no necesitamos `useState` para cada input.

```tsx
<form action={formAction}>
  <input name="nombreTodo" />

  {/* Deshabilitamos el botón automáticamente si está trabajando */}
  <button disabled={isPending}>{isPending ? "Guardando..." : "Guardar"}</button>

  {/* Mostramos errores si el mayordomo nos los trae */}
  {state?.error && <p>{state.error}</p>}
</form>
```

---

## 🏆 Resumen en 1 minuto

| Concepto      | Antes (Lo difícil)                                | Ahora (Lo enseñado)                                                            |
| :------------ | :------------------------------------------------ | :----------------------------------------------------------------------------- |
| **Sesión 06** | Pasar props de padre a hijo a nieto... 😫         | **Context**: Un "megáfono" global para que todos escuchen. 📢                  |
| **Sesión 07** | Controlar cada input y estado de carga a mano. ✍️ | **useActionState**: Un "mayordomo" que gestiona el envío y la carga por ti. 🤖 |

¡Y eso es todo! Programar moderno es trabajar menos y dejar que React trabaje más. 😉
