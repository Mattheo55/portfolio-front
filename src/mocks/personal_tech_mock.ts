import { PersonalTech } from "@/type/PersonalTech";
import { csharp, php, react } from "./tech_mock";

export const personalTechMock: PersonalTech[] = [
    {
        id: 0,
        tech: php,
        title: "PHP et Symfony",
        description: "Back-end",
        image: "/images/symfony.png",
        content: "J'adore symfony"
    },
    {
        id: 1,
        tech: react,
        title: "React, React Native et Next JS",
        description: "Front-end",
        image: "/images/react.png",
        content: "",
    },
    {
        id: 3,
        tech: csharp,
        title: "C#",
        description: "Logiciel",
        image: "/images/csharp.png",
        content: "",
    },
    {
        id: 4,
        tech: react,
        title: "Tauri et Rust",
        description: "Programmation Logiciel et Système",
        image: "/images/rust.png",
        content: "",
    }
]