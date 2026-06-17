import PersonalTimeline from "@/components/PersonalTimeline";
import { Timeline, TimelineItem } from "@/components/reui/timeline";
import TechCard from "@/components/TechCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[75%] p-10 rounded-2xl mt-5 bg-gray-100 shadow-lg">
      {/* Header présentation */}
      <div className="items-center text-center flex flex-col gap-5">
        <Image
          src={"/images/react.png"}
          width={300}
          height={300}
          alt="Matthéo Bigorgne"
        />
        <p className="font-bold text-5xl">Matthéo Bigorgne</p>
        <div>
          <p className="text-3xl">Je suis actuellement étudiant a l'IUT de Metz spécialité RA (Réalistion d'application) et en stage chez Mairistem By JVS</p>
          <p className="text-xl mt-5">Passionné de développement Web, Mobile et Logiciel</p>
        </div>
      </div>

      {/* Stack Technique */}
      <div className="mt-20">
        <h1 className="text-3xl">Mes compétences techniques</h1>

        <div className="flex justify-center gap-4 mt-10">
          <TechCard description="Back-end" image="/images/symfony.png">PHP et Symfony</TechCard>
          <TechCard description="Front-end" image="/images/react.png">React, React Native et Next JS</TechCard>
          <TechCard description="Logiciel" image="/images/csharp.png">C#</TechCard>
          <TechCard description="Programmation Logiciel et Système" image="/images/rust.png">Tauri et Rust</TechCard>
        </div>
      </div>

      {/* Présentation de moi */}
      <div className="mt-20">
        <h1 className="text-3xl">À propos de moi</h1>


      </div>
      {/* Parcours scolaire */}
      <div className="mt-20">
        <h1 className="text-3xl">Parcours scolaire</h1>
        <div className="flex items-center justify-center mt-10">
          <PersonalTimeline />
        </div>
      </div>
      {/* Parcours Pro */}
    </div>
  );
}
