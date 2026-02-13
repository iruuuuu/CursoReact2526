//este fichero no renderiza nada
import { useEffect, useState } from "react"

// T --> son Generics
//este hook se puede reutilizar siempre
export function useFetch<T>(url:string){

    //aqui guardamos la data final
    const [data, setData] = useState<T | null>(null)
    //mostra o no un loop que diga cargando...
    const [loading, setLoading] = useState<boolean>(true)
    //por si tenemos errores y fallamos
    const [error, setError] = useState<string | null>(null)


    //efecto de que cuando cargue el componente ( o renderice por primera vez haremos useEffect)
    useEffect(() => {
        setLoading(true)
        setError(null)
        //creamos un mando a distancia para abortar el fetch
        const controller = new AbortController()
        const signal = controller.signal
        const fetchData = async () => {
            try {
                //hacemos la llamada y pasamos la señal para abortar/cancelar
                const response = await fetch(url, { signal })
                if (!response.ok) {
                    throw new Error('Error en la peticion')
                }
                const result = await response.json()
                setData(result)
                setLoading(false)

            } catch (error  : unknown) {
                setError(error as string)
            } finally {
                setLoading(false)
            }
            return ()=>{};
        }

        //UNO DE LOS ERRORES MAS UTILIZADO  ES QUE NO LLAMAIS A LA FUNCION DENTRO DEL useEffect
        fetchData()

        return ()=>{
            controller.abort()
        }

    },[url])

    return {
        data,
        loading,
        error
    }
}