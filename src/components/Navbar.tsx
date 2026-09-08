import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const links = [["about", "About"], ["disciplines", "Disciplines"], ["events", "Events"], ["excos", "Excos"], ["community", "Community"], ["contact", "Contact"]];

export function Navbar() {
  return <header className="site-header" id="top">
    <a className="brand" href="#top" aria-label="NACOS Nile home"><Image src="/logo.svg" alt="" width={64} height={31} style={{ height: "auto" }} /><span>NACOS<span className="brand-sub">NILE UNIVERSITY</span></span></a>
    <nav className="desktop-nav" aria-label="Primary">{links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <div className="header-actions"><ThemeToggle /><a className="button small header-cta" href="#community">Find your people <span aria-hidden="true">↗</span></a></div>
    <details className="mobile-menu"><summary>Menu</summary><nav aria-label="Mobile">{links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></details>
  </header>;
}
