import Image from "next/image";
export function Footer() {
  return <footer id="contact" className="footer section-wrap"><div className="footer-top"><a className="brand" href="#top" aria-label="NACOS Nile home"><Image src="/logo.svg" alt="" width={64} height={31} style={{ height: "auto" }} /><span>NACOS<span className="brand-sub">NILE UNIVERSITY</span></span></a><p>Nigeria Association of Computing Students<br />Nile University of Nigeria, Abuja, FCT.</p><a href="#top" className="text-link">Back to top <span aria-hidden="true">↑</span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NACOS Nile. All rights reserved.</span><span>Built for students. By students.</span></div></footer>;
}
