import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Building2, Camera, Flower2, MapPin, Menu, Sparkles } from "lucide-react";

const projects = [
  { title: "Apartamento Horizonte", location: "Belo Horizonte, MG", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85", className: "project-featured" },
  { title: "Casa Entre Folhas", location: "Nova Lima, MG", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", className: "" },
  { title: "Ateliê Trama", location: "São Paulo, SP", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85", className: "" },
];
const services = [["01", "Interiores residenciais", "Casas e apartamentos que acolhem a vida como ela é."], ["02", "Espaços comerciais", "Ambientes que traduzem marcas e tornam experiências memoráveis."], ["03", "Arquitetura cenográfica", "Stands e ativações que convidam o olhar a permanecer."]];

export default function Home() {
  return <main>
    <section className="hero" id="início">
      <nav className="site-nav container" aria-label="Navegação principal">
        <a className="brand" href="#início" aria-label="Luzz Arquitetura - início"><span>luzz</span><small>arquitetura</small></a>
        <div className="nav-links"><a href="#projetos">Projetos</a><a href="#sobre">O escritório</a><a href="#serviços">Serviços</a></div>
        <a className="button button-light nav-cta" href="#contato">Vamos conversar <ArrowUpRight size={16} /></a>
        <button className="menu-button" aria-label="Abrir menu"><Menu size={22} /></button>
      </nav>
      <div className="hero-media" aria-hidden="true"><Image src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90" alt="" fill priority sizes="100vw" /></div><div className="hero-overlay" />
      <div className="hero-content container"><p className="eyebrow eyebrow-light"><span /> BH & SP · desde 2023</p><h1>Espaços que<br /><em>fazem sentir.</em></h1><div className="hero-bottom"><p>Arquitetura e interiores desenhados para acompanhar histórias, rituais e novos começos.</p><a href="#projetos" className="round-link" aria-label="Conheça nossos projetos"><ArrowDownRight size={25} /></a></div></div>
      <div className="hero-counter">01 <span>/</span> 04</div>
    </section>
    <section className="intro container" id="sobre"><p className="eyebrow"><span /> A Luzz</p><div className="intro-grid"><h2>Mais que projetar ambientes, criamos <em>maneiras de habitar.</em></h2><div className="intro-copy"><p>Somos Luiza Geraldi e Luiza Mayr. Unimos precisão técnica, escuta atenta e uma sensibilidade apurada para transformar metros quadrados em experiências com propósito.</p><a className="text-link" href="#contato">Conheça o nosso olhar <ArrowUpRight size={17} /></a></div></div><div className="stat-row"><div><strong>+250</strong><span>projetos criados</span></div><div><strong>02</strong><span>cidades, um mesmo olhar</span></div><div><strong>∞</strong><span>possibilidades de viver bem</span></div></div></section>
    <section className="projects-section" id="projetos"><div className="container section-heading"><div><p className="eyebrow"><span /> Seleção de projetos</p><h2>Uma arquitetura<br />com <em>assinatura.</em></h2></div><a className="button button-dark" href="#contato">Ver todos os projetos <ArrowUpRight size={16} /></a></div><div className="projects-grid container">{projects.map((project) => <article className={`project-card ${project.className}`} key={project.title}><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 50vw" /><div className="project-shade" /><div className="project-info"><div><h3>{project.title}</h3><p><MapPin size={14} /> {project.location}</p></div><span className="project-arrow"><ArrowUpRight size={20} /></span></div></article>)}</div></section>
    <section className="approach" id="serviços"><div className="approach-image"><Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85" alt="Sala de estar com materiais naturais" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="approach-content"><p className="eyebrow eyebrow-light"><span /> Nosso método</p><h2>Beleza que começa<br />pela <em>escuta.</em></h2><p className="approach-text">Cada escolha tem intenção: da luz que acolhe ao material que desperta memórias. Nosso processo integra psicoarquitetura, biofilia e psicologia das cores para criar espaços que cuidam de quem os vive.</p><div className="method-tags"><span><Flower2 size={15} /> Biofilia</span><span><Sparkles size={15} /> Psicoarquitetura</span><span><Building2 size={15} /> Funcionalidade</span></div></div></section>
    <section className="services container"><p className="eyebrow"><span /> O que fazemos</p><div className="services-list">{services.map(([number, title, description]) => <article className="service" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow" size={21} /></article>)}</div></section>
    <section className="contact" id="contato"><div className="contact-pattern" /><div className="container contact-inner"><p className="eyebrow eyebrow-light"><span /> Seu espaço, sua história</p><h2>Vamos criar algo<br /><em>com a sua cara?</em></h2><a className="button button-sand" href="https://wa.me/5531988852271" target="_blank" rel="noreferrer">Iniciar uma conversa <ArrowUpRight size={17} /></a></div></section>
    <footer className="footer container"><a className="brand brand-dark" href="#início"><span>luzz</span><small>arquitetura</small></a><div className="footer-locations"><span>Belo Horizonte · Savassi</span><span>São Paulo · Pinheiros</span></div><a className="instagram-link" href="https://www.instagram.com/luzzarquitetura/" target="_blank" rel="noreferrer"><Camera size={17} /> @luzzarquitetura</a><p>© 2026 Luzz Arquitetura</p></footer>
  </main>;
}
