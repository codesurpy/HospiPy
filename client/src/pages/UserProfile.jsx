import React from 'react'

const UserProfile = () => {
    return (
        <div className="bg-gray-100 p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Perfil de Usuario</h1>

            <div className="flex">
                <div className="avatar rounded-full overflow-hidden mr-6">
                    <img src="ruta_de_la_imagen_del_avatar.jpg" alt="Avatar" />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Nombre del Usuario</h2>

                    <ul className="list-disc pl-6">
                        <li className="text-gray-700 mb-2"><span className="font-bold">Email:</span> doctor@example.com</li>
                        <li className="text-gray-700 mb-2"><span className="font-bold">Especialidad/Area</span> Cardiología</li>
                
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserProfile