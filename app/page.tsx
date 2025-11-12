import Image from "next/image";
import InputGroup from "./components/InputGroup";
import LabelForm from "./components/LabelForm";
import Input from "./components/Input";

export default function Home() {
  return (
    <main className="w-full h-screen grid grid-cols-1 font-sans items-center justify-center md:grid-cols-2">
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-80 w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Iniciar Sesión</h2>
            <p className="text-sm text-gray-600">Ingrese sus credenciales para acceder</p>
          </div>
          <form action="" className="w-full flex flex-col gap-6">
            <InputGroup>
              <LabelForm nameFor="email" text="Email" />
              <Input type="text" name="email" placeholder="example@gmail.com" />
            </InputGroup>
            <InputGroup>
              <LabelForm nameFor="password" text="Contraseña" />
              <Input type="password" name="password" placeholder="Contraseña" />
            </InputGroup>
            <button className="bg-blue-600 text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 transition duration-200">Iniciar Sesión</button>
          </form>
          <div className="flex items-center justify-center text-sm gap-2">
            <p>Aún no tienes cuenta?</p>
            <a href="" className="font-semibold text-blue-600">Registrarme</a>
          </div>
        </div>
      </div>
      
      <div className="hidden w-full h-full bg-blue-800 text-white md:flex items-end p-14">
        <span className="text-4xl font-semibold">Empiece a vivir experiencias inolvidables en nuestra Plataforma todo en Uno.</span>
      </div>
    </main>
  );
}
