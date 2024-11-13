import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export const metadata = {
  title: "1.2.1.- Condiciones para convalidar FOL"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={6} />

      <div className="flex flex-col">
        <p className="mb-4">Para poder convalidar el módulo de FOL (Formación y Orientación Laboral) es necesario acreditar alguna de las siguientes condiciones:</p>

        <ItemLista>Si el módulo a convalidar pertenece a un ciclo LOE (Ley Orgánica 2/2006, de 3 de mayo). <b>Para esta convalidación es indiferente que los módulos que se aporten sean de grado medio o superior.</b></ItemLista>
        
          <ItemLista interior={true}><b>Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente.</b></ItemLista>
          <ItemLista interior={true}><b>Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre) y poseer un certificado que acredite que se posee la formación establecida para el desempeño de las funciones de nivel básico de la actividad preventiva </b>(PRL). Sirve cualquier curso de PRL impartido por alguna entidad legalmente constituida, de una duración no inferior a 30 horas y cuyos contenidos incluyan los que indica el anexo IV del Real Decreto 39/1997, de 17 de enero (BOE de 31 de enero de 1997), por el que se aprueba el Reglamento de los Servicios de Prevención. <b>El certificado del curso de PRL deberá hacer constar específicamente tanto la duración como los contenidos impartidos.</b></ItemLista>
          <div className="mb-4">
          <ItemLista interior={true}><b>Poseer el título de Técnico Superior en Prevención de Riesgos Profesionales derivado de la Ley Orgánica 1/1990, de 3 de octubre.</b></ItemLista>
        </div>
        <ItemLista>Si el módulo a convalidar pertenece a un ciclo LOGSE de grado medio (Ley Orgánica 1/1990, de 3 de octubre):</ItemLista>
        <ItemLista interior={true}><b>Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre).</b></ItemLista>
        <div className="mb-4">
        <ItemLista interior={true}><b>Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente.</b></ItemLista>
        </div>
        <ItemLista>Si el módulo a convalidar pertenece a un ciclo LOGSE de grado superior (Ley Orgánica 1/1990, de 3 de octubre):</ItemLista>
        <ItemLista interior={true}><b>Tener aprobado el módulo de FOL en un Ciclo LOGSE de Grado Superior (Ley Orgánica 1/1990, de 3 de octubre).</b></ItemLista>

        <table className="w-full lg:w-[80%] self-center border-separate mt-8">
          <tbody>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200 w-[400px] ">Módulo a convalidar</th>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Formación a aportar</th>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">FOL GM (LOGSE Ley Orgánica 1/1990, de 3 de octubre)</th>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOGSE</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOGSE</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOE</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOE</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">FOL GS (LOGSE Ley Orgánica 1/1990, de 3 de octubre)</th>
              <td className="border-2 border-blue-200 p-4 hover:bg-blue-200">FOL GS LOGSE</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">FOL GM (LOE Ley Orgánica 2/2006, de 3 de mayo)</th>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOE</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOE</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">Título Técnico Superior en Prevención de Riesgos Profesionales</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">FOL GS (LOE Ley Orgánica 2/2006, de 3 de mayo)</th>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOE</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOE</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col hover:bg-blue-200">Título Técnico Superior en Prevención de Riesgos Profesionales</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
