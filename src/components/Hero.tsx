import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-heading">
        <p className="eyebrow">NIGERIA ASSOCIATION OF COMPUTING STUDENTS</p>
        <h1 id="hero-title">
          Where Nile&rsquo;s<br />
          computing students<br />
          <span>come together.</span>
        </h1>
      </div>
      <div className="hero-bottom">
        <div className="hero-copy">
          <p>
            Six disciplines. One community. Workshops, hackathons, study groups,
            and the people who make university worth showing up for.
          </p>
          <a className="button" href="#community">
            Join the community <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#events">
            See what we do <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-photo">
          <Image
            src="/nacos-students-hero.png"
            alt="Students collaborating around a laptop"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 62vw"
          />
        </div>
      </div>
    </section>
  );
}
