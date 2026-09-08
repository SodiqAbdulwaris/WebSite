import Image from "next/image";

const members = [
  { name: "Zikora Fortune Nwafor", role: "President", photo: "president", featured: true },
  { name: "Abdullah Ali Ahmad", role: "Vice President", photo: "vp", featured: true },
  { name: "Sheila Jato", role: "Secretary General", photo: "sg" },
  { name: "Amira Ibrahim", role: "Financial Secretary", photo: "fc" },
  { name: "Elvis Francis", role: "Public Relations Officer", photo: "pro" },
  { name: "Ivoke Kamsi", role: "Director of Training & Development", photo: "dtd" },
  { name: "Zubaida Abdulazeez", role: "Provost", photo: "provost" },
  { name: "Saidat Ahmed", role: "Director of Socials", photo: "socials" },
  { name: "Danielle Ekunwe", role: "Director of Welfare", photo: "welfare" },
];

export function Excos() {
  return (
    <section id="excos" className="section-wrap council">
      <h2>Students like you.<br /><span>Showing up for you.</span></h2>
      <p className="section-copy">
        The people keeping NACOS Nile running — from organising hackathons to
        making sure your dues actually go somewhere.
      </p>
      <div className="member-grid">
        {members.map((m) => (
          <article
            className={`member ${m.featured ? "member-featured" : ""}`}
            key={m.name}
          >
            <div className="member-photo">
              <Image
                src={`/excos-pics/${m.photo}.jpg`}
                alt={`${m.name}, ${m.role}`}
                fill
                sizes={
                  m.featured
                    ? "(max-width: 760px) 100vw, 50vw"
                    : "(max-width: 760px) 44vw, (max-width: 1100px) 28vw, 22vw"
                }
              />
            </div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
