import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={13} />

      <div className="flex flex-col gap-4">

        <p className="w-[800px] text-[18px] leading-5"><b>Salvo el módulo de Formación en Centros de Trabajo</b><i>(las &quot; prácticas &quot;)</i>,<b>la respuesta es no</b>. En general, <b>no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral</b>.</p>
        <p className="w-[800px] text-[18px] leading-5">Si alguna persona cree que con su experiencia profesional ha adquirido las competencias necesarias de un módulo concreto, debe acreditar la posesión de esas unidades de competencia bien mediante un <b>certificado de profesionalidad</b> o bien porque ha participado en un <a href="https://todofp.es/acreditacion-de-competencias.html" className="text-blue-500 underline">procedimiento de acreditación de competencias profesionales</a> y así se lo han reconocido, <span className="underline">no a través de un certificado de vida laboral</span>. <b>Tampoco serán válidos los resguardos de haber solicitado el certificado de profesionalidad, los diplomas o certificados de asistencia expedidos por el centro o entidad de formación u otros documentos justificativos distintos de los indicados.</b>  Estas convalidaciones se regulan en el anexo V.A del Real Decreto que crea el título que se está estudiando (en este anexo se indican las unidades de competencia que se adquieren al superar cada módulo profesional).</p>
        <p className="w-[800px] text-[18px] leading-5">Por tanto, <b>las unidades de competencia debidamente acreditadas pueden ser aportadas para solicitar la convalidación de módulos profesionales según lo regulado en el anexo V.A del Real Decreto</b>  que regula cada título siempre que se aporte el <b>certificado de profesionalidad</b> o la <b>certificación oficial de la acreditación de la Unidad de Competencia.</b></p>
        
        <div className="flex-row-reverse absolute top-[130px] right-[50px]">
          <img className="float-end w-[350px] h-[332px] border-2 border-black self-center " title="Trabajo" alt="Trabajo" src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/industrial-1636390_960_720.jpg" width="960" height="720 f" />
        </div>
      </div>
    </>
  );
}
