import { useEffect, useState } from 'react';
import { LuPhone, LuMenu, LuX } from 'react-icons/lu';
import SbiLogo from './SbiLogo';
import { useLang } from '../i18n';

const LINKS = [
  { id: 'branch', key: 'nav.branch' },
  { id: 'services', key: 'nav.services' },
  { id: 'calculator', key: 'nav.calculator' },
  { id: 'team', key: 'nav.team' },
  { id: 'visit', key: 'nav.visit' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e) => e.key === 'Escape' && setMenu(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  return (
    <header className="nav">
      <div className="nav__bar">
        <a className="nav__brand" href="#top" onClick={() => setMenu(false)}>
          <SbiLogo size={30} />
          <span>
            SBI <b>Dixi</b>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <div className="lang" role="group" aria-label={t('nav.lang')}>
            <button
              type="button"
              className={lang === 'mr' ? 'is-on' : ''}
              aria-pressed={lang === 'mr'}
              onClick={() => setLang('mr')}
              lang="mr"
            >
              मराठी
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'is-on' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
              lang="en"
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'hi' ? 'is-on' : ''}
              aria-pressed={lang === 'hi'}
              onClick={() => setLang('hi')}
              lang="hi"
            >
              हिन्दी
            </button>
          </div>
          <a className="nav__call" href="tel:18001234">
            <LuPhone aria-hidden="true" />
            <span>1800 1234</span>
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label={t('nav.menu')}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>

      {menu && (
        <nav className="nav__sheet" aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMenu(false)}>
              {t(l.key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
