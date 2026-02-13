import { Routes, Route, Navigate } from "react-router-dom"
import FormTodoList from "../components/FormTodoList"

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/form-todo" replace/>} />
            <Route path="/form-todo" element={<FormTodoList />} />
        </Routes>
        </div>
    )
}

export default App;