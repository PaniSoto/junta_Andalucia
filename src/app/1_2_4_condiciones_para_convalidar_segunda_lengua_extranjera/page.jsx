import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";

export const metadata = {
  title: "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={9} />

      <div className="flex flex-col gap-4">

        <p>Para poder convalidar el módulo de Segunda Lengua Extranjera debe aportarse siempre estudios cursados y superados en la misma lengua que se desee convalidar. Es necesario acreditar alguna de las siguientes condiciones:</p>

        <table className="w-full lg:w-[80%] self-center border-separate mt-8">
          <tbody>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200 w-[320px]">Módulo a convalidar</th>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">Formación a aportar</th>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">2ª Lengua Extranjera LOGSE</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">MP Segunda Lengua Extranjera LOGSE, siempre que sea la misma que la que se desea convalidar.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado de Nivel Intermedio (B1), equivalente o superior, de la Escuela Oficial de Idiomas (RD 1629/2006, de 29 de diciembre) siempre que sea de la misma lengua extranjera que la que se desea convalidar.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Título de Grado en Filología o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Título de Grado Traducción e Interpretación, o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">0180 2ª Lengua Extranjera.</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Segunda Lengua Extranjera LOGSE. <br /> Cuando la lengua extranjera cursada y superada sea la misma que se desea convalidar.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado del Ciclo Elemental o de Aptitud, de la Escuela Oficial de Idiomas. <br /> (RD 967/1988, de 2 de septiembre). <br /> (De la misma lengua extranjera que se desea convalidar).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado de Nivel Intermedio (B1), o superior, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre). <br /> (De la misma lengua extranjera que se desea convalidar).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Título de Grado, o equivalente, en Filología o en Traducción e Interpretación. <br /> (De la misma especialidad que la lengua extranjera que se desea convalidar).</td>
            </tr>
          </tbody>
        </table>

        <div className=" mx-4 flex flex-col gap-2 bg-[#f5ff3235] p-10 rounded-3xl shadow-[4px_4px_0px_rgba(50,51,50,0.2)] border-[2px] border-[#643d34]">
          <div className="flex flex-row items-center">
            <Image
              src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/icon_parasabermasfpd.png"
              width={50}
              height={50}
              alt=""
            />
            <p className="text-[30px] font-bold text-[#643d34] px-4">Para saber más</p>
          </div>
          <p className="text-[#643d34]">Por tanto, no es posible, <b className="underline bg-[#f3ff00]">EN NINGÚN CASO</b>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
        </div>
      </div>
    </>
  );
}
