const SecretArea = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4 text-purple-600">Área Secreta</h1>
            <p className="text-gray-600 mb-4">
                ¡Felicidades! Has accedido al área protegida.
            </p>
            <div className="bg-purple-100 border-l-4 border-purple-500 p-4">
                <p className="text-purple-700">
                    Este contenido solo es visible para usuarios autorizados.
                </p>
            </div>
        </div>
    );
};

export default SecretArea;
