import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import usePageMeta from '../../usePageMeta';
import '../Hero.scss';
import './ServicePage.scss';

const CALENDLY = 'https://calendly.com/ivylevelspeaking/consultation';

// One template for every specialized coaching page. Content lives in servicePages.js.
const ServicePage = ({ page }) => {
  usePageMeta(page.title, page.description);

  useEffect(() => {
    const url = `https://ivylevelspeaking.com${page.path}`;
    const data = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: page.serviceName,
        serviceType: page.serviceType,
        provider: {
          '@type': 'ProfessionalService',
          name: 'Ivy Level Speaking',
          url: 'https://ivylevelspeaking.com',
          founder: { '@type': 'Person', name: 'Dennis Kenney' },
        },
        areaServed: page.areaServed,
        url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ];
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.text = JSON.stringify(data);
    document.head.appendChild(tag);
    return () => tag.remove();
  }, [page]);

  return (
    <>
      <div
        className="top-section top-section__svc"
        style={{
          '--hero-img': `url(${page.image})`,
          '--hero-ratio': page.imageRatio,
        }}
      >
        <div className="hero-photo" aria-hidden="true"></div>
        <Header />
        <div className="hero hero--left svc__hero">
          <aside className="hero__left svc__hero-text">
            <h1 className="hero__headline">{page.h1}</h1>
            <p className="hero__text">{page.tagline}</p>
            <a
              href={CALENDLY}
              className="button__main button__main--lr-zero-margin"
              target="_blank"
              rel="noreferrer"
            >
              {page.cta}
            </a>
          </aside>
        </div>
      </div>

      <main className="svc">
        <section className="svc__intro">
          <p>{page.intro}</p>
        </section>

        <section className="svc__grid">
          {page.cards.map((c) => (
            <article className="svc__card" key={c.h}>
              <h2>{c.h}</h2>
              <p>{c.p}</p>
            </article>
          ))}
        </section>

        {page.example && (
          <section className="svc__example">
            <p className="svc__example-label">Practice example</p>
            <h2>{page.example.h}</h2>
            <p className="svc__example-before">{page.example.before}</p>
            <p className="svc__example-after">{page.example.after}</p>
            <p>{page.example.why}</p>
          </section>
        )}

        <section className="svc__how">
          <h2 className="svc__heading">{page.stepsTitle}</h2>
          <ol className="svc__steps">
            {page.steps.map((s) => (
              <li key={s.b}>
                <strong>{s.b}</strong> {s.t}
              </li>
            ))}
          </ol>
        </section>

        <section className="svc__who">
          <h2 className="svc__heading">Who you will work with</h2>
          <p>{page.who}</p>
          <Link to="/about" className="svc__link">
            Read my full background
          </Link>
        </section>

        <section className="svc__faq">
          <h2 className="svc__heading">{page.faqTitle}</h2>
          {page.faqs.map((f) => (
            <details key={f.q} className="svc__faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {page.related && (
          <section className="svc__related">
            {page.related.map((r, i) => (
              <span key={r.to}>
                {i > 0 && ' · '}
                <Link to={r.to}>{r.label}</Link>
              </span>
            ))}
          </section>
        )}

        <section className="svc__cta">
          <h2>{page.closingTitle}</h2>
          <p>{page.closingText}</p>
          <div className="svc__cta-buttons">
            <a
              href={CALENDLY}
              className="button__main"
              target="_blank"
              rel="noreferrer"
            >
              {page.cta}
            </a>
            <Link to="/contact" className="button__main">
              Send a message
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
