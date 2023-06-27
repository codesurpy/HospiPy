import React from 'react';

const UserProfile = () => {
    const doctorAvatarUrl = 'https://img.freepik.com/vector-premium/doctor-icono-o-avatar-blanco_136162-58.jpg?w=740';

    return (
        <div className="bg-gray-200 p-8 rounded-lg shadow-md flex flex-col items-center">
            <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                    <a href={doctorAvatarUrl} target="_blank" rel="noopener noreferrer">
                        <img src={doctorAvatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    </a>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Perfil de Usuario</h1>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Nombre:</span>
                    <span className="text-gray-800">Nombre del Usuario</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Email:</span>
                    <span className="text-gray-800">doctor@example.com</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Especialidad/Area:</span>
                    <span className="text-gray-800">Cardiología</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">ID:</span>
                    <span className="text-gray-800">123456789</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Teléfono:</span>
                    <span className="text-gray-800">123-456-7890</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Dirección:</span>
                    <span className="text-gray-800">Hospital General, Consultorio 123</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Horario:</span>
                    <span className="text-gray-800">Lunes a Viernes, 9 AM - 5 PM</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Historial Académico:</span>
                    <span className="text-gray-800">Universidad XYZ, MD</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Experiencia:</span>
                    <span className="text-gray-800">10 años de práctica médica</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Pacientes Asignados:</span>
                    <span className="text-gray-800">20</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Especialidades Adicionales:</span>
                    <span className="text-gray-800">Neurología, Medicina Interna</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Contacto de Emergencia:</span>
                    <span className="text-gray-800">Nombre del Contacto, Teléfono: 987-654-3210</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Habilidades:</span>
                    <span className="text-gray-800">Cirugía cardíaca, Electrocardiografía, Ecocardiografía</span>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
