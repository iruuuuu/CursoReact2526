const PublicHome = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">Página Pública</h1>
            <p className="text-gray-600 mb-4">
                Esta es una página accesible para todos.
            </p>
            <a 
                href="/secret" 
                className="text-blue-500 hover:text-blue-700 underline"
            >
                Intentar acceder a área secreta
            </a>
        </div>
    );
};

export default PublicHome;
