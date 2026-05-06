import Image1 from "./../../assets/oportuna.jpg";
import Image2 from "./../../assets/amorecacau.jpg";
import Image3 from "./../../assets/amorecacau2.jpg";
import Image4 from "./../../assets/amorecacau3.jpg";
import Image5 from "./../../assets/oportuna2.jpg";
import Image6 from "./../../assets/oportuna3.jpg";
import Image7 from "./../../assets/icefrost.png";
import Image8 from "./../../assets/icefrost2.png";
import Image9 from "./../../assets/icefrost3.png";
import { Project } from "../components/ProjectModal";

export const projects: Project[] = [
  {
    id: "01",
    title: "OPORTUNA CONECTA",
    client: "Match de Oportunidades de Carreira",
    image: Image1,
    images: [Image1, Image5, Image6],
    description: "Oportuna Conecta — Plataforma web de empregabilidade que conecta alunos egressos de programas de qualificação profissional a vagas na indústria. Possui gestão de alunos, cadastro de vagas, avaliação técnica e psicológica de competências industriais (NR-10, NR-35, Soldagem, Automação, CLP e mais), sistema de matching com score de compatibilidade e um assistente de IA conversacional para análise de dados. Desenvolvido com React, TypeScript, Tailwind CSS e shadcn/ui.",
    roles: ["Frontend", "Backend", "WebSockets"],
    github: "https://github.com/Santozs2/oportunaconecta",
    link: "",
  },
  {
    id: "02",
    title: "AMOR & CACAU",
    client: "E-commerce",
    image: Image2,
    images: [Image2, Image3, Image4],
    description: "E-commerce completo para confeitaria artesanal, desenvolvido com React, TypeScript e Supabase. Conta com catálogo de produtos por categorias, carrinho de compras, checkout com cálculo de frete via CEP, pagamento via PIX com QR Code, histórico de pedidos e painel administrativo com dashboard de vendas, gestão de produtos e exportação de dados em CSV.",
    roles: ["JavaScript", "TypeScript", "Supabase"],
    github: "https://github.com/Santozs2/amor-cacau",
    link: "https://amor-cacau.onrender.com",
  },
  {
    id: "03",
    title: "ICEFROST",
    client: "Gestor de sorveteria",
    image: Image7,
    images: [Image7, Image8, Image9],
    description: "Gestor de uma sorveteria desenvolvido com Django e MySql lite 3. O sistema inclui cadastro de sorvetes, fornecedores, etc. O projeto foi criado para uma avaliação formativa de Django do meu curso técnico.",
    roles: ["Django", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Santozs2/icefrost",
    link: "",
  },
];
