import { LuArrowUpRight, LuExternalLink } from 'react-icons/lu';
import Eyebrow from './Eyebrow';
import { useLang } from '../i18n';

const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=SBI+Branch+Dixi';
// Keyless embed. If you add a Maps API key later, swap for the official Embed API URL.
const MAP_SRC = 'https://maps.google.com/maps?q=SBI%20Branch%20Dixi&z=14&output=embed';

export default function Visit() {
  const { t } = useLang();
  const facts = [
    [t('visit.address'), t('branch.address.value')],
    [t('visit.hours'), t('hours.range')],
    [t('visit.ifsc'), 'SBIN0017500'],
    [t('visit.toll'), '1800 1234 / 1800 2100'],
  ];

  return (
    <section id="visit" className="sec sec--navy">
      <div className="wrap visit">
        <div className="visit__info">
          <Eyebrow n="05">{t('visit.eyebrow')}</Eyebrow>
          <h2 className="h2">{t('visit.title')}</h2>

          <dl className="facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <a className="btn btn--primary" href={MAPS_LINK} target="_blank" rel="noreferrer">
            {t('visit.openMaps')}
            <LuArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="map">
          <a className="map__chip" href={MAPS_LINK} target="_blank" rel="noreferrer">
            {t('visit.openMapsShort')}
            <LuExternalLink aria-hidden="true" />
          </a>
          <iframe
            title={t('visit.mapTitle')}
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
