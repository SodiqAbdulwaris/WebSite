const channels = [
  { name: "WhatsApp", status: "Primary channel — ask a member for the link" },
  { name: "Discord", status: "Setup in progress" },
  { name: "Telegram", status: "Setup in progress" },
  { name: "X / Twitter", status: "@NACOSNile — follow for updates" },
  { name: "Instagram", status: "Coming soon" },
  { name: "LinkedIn", status: "Coming soon" },
];

export function Community() {
  return (
    <section id="community" className="community">
      <div className="section-wrap">
        <p className="eyebrow">THERE&rsquo;S A PLACE FOR YOU HERE</p>
        <h2>
          You don&rsquo;t have to<br />
          figure it out alone.
        </h2>
        <p>
          First line of code or your next big idea.<br />
          Come as you are. We&rsquo;ll build from there.
        </p>
        <div className="channel-list" aria-label="Community channels">
          {channels.map((ch) => (
            <div className="channel" key={ch.name}>
              <span>{ch.name}</span>
              <span className="channel-status">{ch.status}</span>
            </div>
          ))}
        </div>
        <p className="join-note">
          Most of the action happens on WhatsApp. Talk to any member of the{" "}
          <a href="#excos">executive council</a> on campus to get connected —
          they&rsquo;ll add you to the right groups.
        </p>
      </div>
    </section>
  );
}
