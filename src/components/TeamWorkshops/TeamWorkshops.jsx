import { Link } from 'react-router-dom';
import './TeamWorkshops.scss';

const formats = [
  {
    title: 'Team workshops',
    text: 'Hands on sessions at your office or online, built around the presentations, pitches, and meetings your team actually has coming up.',
  },
  {
    title: 'Leadership keynotes',
    text: 'Talks on executive presence and making your message land, for offsites, conferences, and company events.',
  },
  {
    title: 'Coaching for leaders',
    text: 'One on one follow up for the leaders who carry the biggest moments: the board meeting, the all hands, the client pitch.',
  },
];

const TeamWorkshops = () => (
  <section className="team-ws" aria-labelledby="team-ws-title">
    <p className="team-ws__eyebrow">For companies and organizations</p>
    <h2 id="team-ws-title" className="team-ws__title">
      I Bring Communication Training to Your Team
    </h2>
    <p className="team-ws__intro">
      Beyond one on one coaching, I work inside organizations. I train leadership
      teams, sales and client facing teams, and technical and research groups to
      present with clarity, align the room, and speak with presence when it
      counts.
    </p>
    <div className="team-ws__grid">
      {formats.map((f) => (
        <article className="team-ws__card" key={f.title}>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </article>
      ))}
    </div>
    <div className="team-ws__buttons">
      <Link to="/speaking" className="button__main">
        Workshops for Teams
      </Link>
      <a
        href="https://calendly.com/ivylevelspeaking/consultation"
        className="team-ws__secondary"
        target="_blank"
        rel="noreferrer"
      >
        Book a call about your team
      </a>
    </div>
  </section>
);

export default TeamWorkshops;
