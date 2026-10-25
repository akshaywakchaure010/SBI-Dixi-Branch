import Eyebrow from './Eyebrow';
import { TEAM } from '../data/team';
import { useLang } from '../i18n';

export default function Team() {
  const { t, loc } = useLang();
  return (
    <section id="team" className="sec sec--cream">
      <div className="wrap">
        <Eyebrow n="04">{t('team.eyebrow')}</Eyebrow>
        <div className="sec__head">
          <h2 className="h2">{t('team.title')}</h2>
          <p className="sec__desc">{t('team.desc')}</p>
        </div>

        <ul className="people">
          {TEAM.map((p, i) => (
            <li className="person" key={p.id}>
              <span className="person__no">{String(i + 1).padStart(2, '0')}</span>
              <span className="person__avatar" aria-hidden="true">
                {p.initials}
              </span>
              <div className="person__who">
                <h3>{loc(p.name)}</h3>
                <p>{loc(p.role)}</p>
              </div>
              <p className="person__desc">{loc(p.desc)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
