import { useState } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import Eyebrow from './Eyebrow';
import ServiceDrawer from './ServiceDrawer';
import { SERVICES, CATEGORIES } from '../data/services';
import { useLang } from '../i18n';

const pad = (n) => String(n).padStart(2, '0');

export default function Services() {
  const { t, loc } = useLang();
  const [filter, setFilter] = useState('all');
  const [activeId, setActiveId] = useState(null);

  const list = SERVICES.map((s, i) => ({ ...s, no: i + 1 })).filter(
    (s) => filter === 'all' || s.cats.includes(filter),
  );
  const active = SERVICES.find((s) => s.id === activeId) ?? null;

  return (
    <section id="services" className="sec sec--navy">
      <div className="wrap">
        <Eyebrow n="02">{t('services.eyebrow')}</Eyebrow>
        <div className="sec__head">
          <h2 className="h2">{t('services.title')}</h2>
          <p className="sec__desc">{t('services.desc')}</p>
        </div>

        <div className="chips" role="tablist" aria-label={t('services.eyebrow')}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              className={`chip ${filter === c ? 'is-on' : ''}`}
              onClick={() => setFilter(c)}
            >
              {t(`filter.${c}`)}
            </button>
          ))}
        </div>

        <div className="svc-grid">
          {list.map(({ id, Icon, title, no }) => (
            <button key={id} type="button" className="svc" onClick={() => setActiveId(id)}>
              <span className="svc__icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="svc__no">{pad(no)}</span>
              <span className="svc__body">
                <span className="svc__title">{loc(title)}</span>
                <span className="svc__cta">
                  {t('services.cta')}
                  <LuArrowUpRight aria-hidden="true" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <ServiceDrawer service={active} onClose={() => setActiveId(null)} />
    </section>
  );
}
