import React from 'react';
import { Formik, Field, Form } from 'formik';
import { string, number, object, date } from 'yup';
import { ErrorMessage } from 'formik';
import 'tailwindcss/tailwind.css';

const initialValues = {
  nombre: '',
  edad: 18,
  procedencia: '',
  ci: '',
  fechaNacimiento: '',
  nacionalidad: 'Paraguaya',
  ocupacion: '',
  estadoCivil: 'soltero/a',
  fiUrg: '',
  feRea: '',
  fiCm: '',
  fiUtiA: '',
  motivoIngreso: '',
  aea: '',
  evolucion: '',
  PA: '',
  PAM: '',
  FC: '',
  FR: '',
  T: '',
  SATO2: '',
  FIO2: '',
  VVC: '',
  SV: '',
  TOT: '',
  aspectoHemodinamico: '',
  aspectoRespiratorio: '',
  aspectoAbdominal: '',
  aspectoNeurologico: '',
  miembros: '',
  aspectoRenoMineral: '',
  aspectoInfeccioso: '',
  diagnosticosIngreso: '',
  planes: '',
};



const validationSchema = object({
  nombre: string().required('Este campo es requerido'),
  edad: number().required('Este campo es requerido'),
  procedencia: string().required('Este campo es requerido'),
  ci: number().required('Este campo es requerido'),
  fechaNacimiento: date().required('Este campo es requerido'),
  nacionalidad: string().required('Este campo es requerido'),
  ocupacion: string().required('Este campo es requerido'),
  estadoCivil: string().required('Este campo es requerido'),
  fiUrg: date().required('Este campo es requerido'),
  feRea: date().required('Este campo es requerido'),
  fiCm: date().required('Este campo es requerido'),
  fiUtiA: date().required('Este campo es requerido'),
  motivoIngreso: string().required('Este campo es requerido'),
  aea: string().required('Este campo es requerido'),
  evolucion: string().required('Este campo es requerido'),
  PA: string().required('Este campo es requerido'),
  PAM: string().required('Este campo es requerido'),
  FC: string().required('Este campo es requerido'),
  FR: string().required('Este campo es requerido'),
  T: string().required('Este campo es requerido'),
  SATO2: string().required('Este campo es requerido'),
  FIO2: string().required('Este campo es requerido'),
  VVC: string().required('Este campo es requerido'),
  SV: string().required('Este campo es requerido'),
  TOT: string().required('Este campo es requerido'),
  aspectoHemodinamico: string().required('Este campo es requerido'),
  aspectoRespiratorio: string().required('Este campo es requerido'),
  aspectoAbdominal: string().required('Este campo es requerido'),
  aspectoNeurologico: string().required('Este campo es requerido'),
  miembros: string().required('Este campo es requerido'),
  aspectoRenoMineral: string().required('Este campo es requerido'),
  aspectoInfeccioso: string().required('Este campo es requerido'),
  diagnosticosIngreso: string().required('Este campo es requerido'),
  planes: string().required('Este campo es requerido'),
});


const MyForm = () => (
  <div className="flex items-center justify-center pt-8 w-full bg-[#CCC]">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-4xl">
      <h1 className="text-3xl mb-4 text-center">Resumen de Ingreso a UTI-A</h1>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}>
        <Form className="grid gap-y-4">
          <h2 className="text-2xl">Datos Basicos</h2>
          <div>
            <label htmlFor="nombre" className="block">Nombre</label>
            <Field
  name="nombre"
  type="text"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  placeholder="Ingrese el nombre aquí"
/>

          </div>
          <div>
            <label htmlFor="edad" className="block">Edad</label>
            <Field name="edad" type="number"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          {/* sigue para otros campos... */}

          <h2 className="text-2xl pt-8">FI A OTROS SERVICIOS</h2>
          <div>
            <label htmlFor="fiUrg" className="block">FI URG</label>
            <Field name="fiUrg" type="date"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          {/* sigue para otros campos... */}

          <h2 className="text-2xl pt-8">Motivo de Ingreso a UTI</h2>
          <div>
            <label htmlFor="motivoIngreso" className="block">Motivo de Ingreso a UTI</label>
            <Field name="motivoIngreso" type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          {/* sigue para otros campos... */}

          <h2 className="text-2xl pt-8">EVOLUCION - INGRESO A UTI-A</h2>
          <div>
            <label htmlFor="evolucion" className="block">Campo de Evolucion a UTI</label>
            <Field name="evolucion" type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          {/* sigue para otros campos... */}

          <h2 className="text-2xl pt-8">SIGNOS VITALES AL INGRESO A UTI-A</h2>
          <div>
            <label htmlFor="PA" className="block">PA</label>
            <Field name="PA" type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          {/* sigue para otros campos... */}

          <h2 className="text-2xl pt-8">Examen Físico y Evolución por aspectos al ingreso a UTI-A</h2>
          <div>
            <label htmlFor="aspectoHemodinamico" className="block">Aspecto Hemodinamico</label>
            <Field name="aspectoHemodinamico" type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          {/* sigue para otros campos... */}

          <h2 className="text-2xl pt-8">Diagnosticos al ingreso de UTI-A</h2>
          <div>
            <label htmlFor="diagnosticosIngreso" className="block">Diagnósticos al ingreso de UTI-A</label>
            <Field name="diagnosticosIngreso" type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <h2 className="text-2xl pt-8">Planes</h2>
          <div>
            <label htmlFor="planes" className="block">Opción de viñeta o enumeración</label>
            <Field name="planes" type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded shadow-md">Enviar</button>
        </Form>
      </Formik>
    </div>
  </div>
);

export default MyForm;
