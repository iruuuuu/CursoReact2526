import { useContext } from "react";
import FamiliContext from "../context/FamiliContext";
import type { FamiliContextType, FamiliActionType } from "../types";

export function useFamily(): FamiliContextType & FamiliActionType {
    const context = useContext(FamiliContext);
    if (!context) {
        throw new Error("useFamily debe usarse dentro de FamiliProvider");
    }
    return context;
}