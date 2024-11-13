import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";

export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={8} />

      <div className="flex flex-col gap-4">

        <p>La documentación a aportar varía en función del módulo Inglés que se desee convalidar. Siempre deben ser estudios cursados y superados de lengua inglesa.</p>
        <table className="w-full lg:w-[80%] self-center border-separate mt-8">
          <tbody>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200 w-[320px]">Módulo a convalidar</th>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">Formación a aportar</th>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">0156 Inglés</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Lengua Extranjera LOGSE (duración de 65 horas, según el Real Decreto que establece el título de formación profesional y sus enseñanzas mínimas) <br /> Cuando la lengua extranjera cursada y superada sea inglés.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Lengua Extranjera LOGSE o de la C.A. <br /> Cuando la lengua extranjera cursada y superada sea inglés</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Módulos Profesionales de Lengua <br /> Extranjera LOGSE de ciclos formativos de Grado Superior, en cualquiera de sus denominaciones, siempre que sea la misma que la que se desea convalidar.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado del Ciclo Elemental, de Inglés, de la Escuela Oficial de Idiomas. (RD 967/1988, de 2 de septiembre).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas. <br /> (RD 967/1988, de 2 de septiembre).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Título de Grado, o equivalente, en Filología Inglesa.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">0179 Inglés.</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">0179 Inglés</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Lengua Extranjera LOGSE (Inglés).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Lengua Extranjera (duración de 90 horas, según reales decretos por los que se establecen los títulos de formación profesional y sus enseñanzas mínimas) <br /> Cuando la lengua extranjera cursada y superada sea inglés</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Lengua Extranjera en Comercio Internacional. Cuando la lengua extranjera cursada y superada sea inglés.</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas. (RD 967/1988, de 2 de septiembre).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Título de Grado, o equivalente, en Filología Inglesa</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>
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
