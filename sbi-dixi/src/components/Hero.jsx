import { LuArrowDownRight, LuMapPin } from 'react-icons/lu';
import Badge from './Badge';
import { useLang } from '../i18n';
import { useBranchStatus } from '../hooks/useBranchStatus';

const IMG = `${import.meta.env.BASE_URL}images/hero-farmer.jpg`;

export default function Hero() {
  const { t } = useLang();
  const open = useBranchStatus();

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__copy">
          <div className="hero__meta">
            <span className={`pill ${open ? 'is-open' : 'is-closed'}`}>
              <i className="pill__dot" />
              {open ? t('status.open') : t('status.closed')} · {t('hours.range')}
            </span>
            <span className="hero__bank">{t('hero.bank')}</span>
          </div>

          <h1 className="hero__title">
            <span>{t('hero.l1')}</span>
            <span>{t('hero.l2')}</span>
            <em>{t('hero.accent')}</em>
          </h1>

          <p className="hero__sub">{t('hero.sub')}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#services">
              {t('hero.explore')}
              <LuArrowDownRight aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#branch">
              <LuMapPin aria-hidden="true" />
              {t('hero.details')}
            </a>
          </div>
        </div>

        <figure className="hero__art">
          <div className="arch">
            <img src={IMG} alt="" loading="eager" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
          <Badge />
          <figcaption className="arch__ifsc">
            <span>IFSC</span>
            <strong>SBIN0017500</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
