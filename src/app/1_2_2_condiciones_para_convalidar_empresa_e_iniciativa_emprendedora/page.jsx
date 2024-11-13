import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={7} />

      <div className="flex flex-col gap-4">

        <p className="mb-2">Para poder convalidar el módulo de <b>Empresa e Iniciativa Emprendedora</b> es necesario acreditar alguna de las siguientes condiciones:</p>

        <ItemLista>Tener <b>aprobado el módulo de Empresa e Iniciativa Emprendedora de otro ciclo formativo,</b> cualquiera que sea el grado, incluso en grados cruzados -medio o superior-.</ItemLista>
        <ItemLista>Tener <b>aprobado el módulo de Administración, gestión y comercialización en la pequeña empresa</b> (o con una denominación similar).</ItemLista>
        <ItemLista><b>Poseer el Título de Técnico en Gestión administrativa o Técnico superior en Administración y finanzas.</b></ItemLista>

        <table className="w-full lg:w-[80%] self-center border-separate mt-8">
          <tbody>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200 w-[350px]">Módulo a convalidar</th>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">Formación a aportar</th>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">Empresa e Iniciativa Emprendedora. (Cualquier ciclo formativo)</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Administración, gestión y comercialización en la pequeña empresa.
                (Cualquier ciclo formativo)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Administración y gestión de un pequeño establecimiento comercial.
                Ciclo Comercio. (Comercio y Marketing)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Organización y gestión de una explotación agraria familiar <br />
                Ciclo Trabajos Forestales y de Conservación del Medio Natural. (RD 1713/1996, de 12 de julio). (Agraria) <br />
                Ciclo Jardinería. (RD 1714/1996, de 12 de julio). (Agraria) <br />
                Ciclo Explotaciones Agrarias Extensivas. (RD 1715/1996, de 12 de julio) (Agraria) <br />
                Ciclo Explotaciones Agrícolas Intensivas. (RD 1716/1996, de 12 de julio). (Agraria) <br />
                Ciclo Explotaciones Ganaderas. (RD 1717/1996, de 12 de julio). (Agraria)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Ciclo completo de Gestión administrativa. (RD 1662/1994, de 22 de julio). (Administración y Gestión)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Administración, gestión y comercialización en la pequeña empresa.
                (Cualquier ciclo formativo)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Organización y gestión de una pequeña empresa de actividades de tiempo libre y socioeducativas. <br />
                Ciclo Animación Sociocultural. (Servicios
                Socioculturales y a la Comunidad) <br />
                Ciclo Animación de Actividades Físicas y Deportivas. (Actividades Físicas y Deportivas) <br />
                Ciclo Animación Turística. (Hostelería y Turismo)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Organización y control en agencias de viajes. <br /> Ciclo Agencias de Viajes. (Hostelería y Turismo)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Administración de establecimientos de restauración. <br />  Ciclo Restauración. (Hostelería y Turismo)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Administración y gestión de una unidad/gabinete de Ortoprotésica. <br />  Ciclo Ortoprotésica. (Sanidad)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Organización, administración y gestión de una unidad/gabinete de prótesis dentales. <br />  Ciclo Prótesis Dentales. (Sanidad)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Administración y gestión de un gabinete audioprotésico. <br />  Ciclo Audioprótesis. (Sanidad)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Organización y gestión de una empresa agraria. <br />  Ciclo Gestión y Organización de los <br />  Recursos Naturales y Paisajísticos. (Agraria) Ciclo Gestión y Organización de Empresas Agropecuarias. (Agraria)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Ciclo completo de Administración y finanzas. (RD 1659/1994, de 22 de julio). (Administración y Gestión)</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Técnico en Gestión Administrativa LOE. Ciclo completo</td>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Técnico en Superior en Administración y Finanzas LOE. Ciclo completo</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">0402. Empresa e iniciativa emprendedora.</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Gestión económico-administrativa en agencias de viajes. Organización y control en agencias de viajes.</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">0863. Empresa e iniciativa emprendedora.</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Organización, administración y gestión de una unidad/gabinete de prótesis dentales.</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-2 text-center bg-blue-200">Empresa e Iniciativa Emprendedora. (Cualquier ciclo formativo LOE)</th>
              <td className="border-2 border-blue-200 p-2 flex flex-col">Empresa e Iniciativa Emprendedora. <br /> (Cualquier ciclo formativo LOE)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
