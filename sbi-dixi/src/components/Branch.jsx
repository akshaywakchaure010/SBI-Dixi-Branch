import { useRef, useState } from 'react';
import { LuMapPin, LuClock, LuPhoneCall, LuShieldAlert, LuCopy, LuCheck, LuArrowUpRight } from 'react-icons/lu';
import Eyebrow from './Eyebrow';
import { useLang } from '../i18n';
import { useBranchStatus } from '../hooks/useBranchStatus';

const IFSC = 'SBIN0017500';
const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=SBI+Branch+Dixi';
const PHOTO = `${import.meta.env.BASE_URL}images/phone-woman.jpg`;

export default function Branch() {
  const { t } = useLang();
  const open = useBranchStatus();
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  async function copy() {
    try {
      await navigator.clipboard.writeText(IFSC);
    } catch {
      // Fallback for non-secure contexts
      const ta = document.createElement('textarea');
      ta.value = IFSC;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="branch" className="sec sec--cream">
      <div className="wrap">
        <Eyebrow n="01">{t('branch.eyebrow')}</Eyebrow>
        <h2 className="h2">{t('branch.title')}</h2>

        <div className="bento">
          <article className="card card--navy bento__address">
            <LuMapPin className="card__icon" aria-hidden="true" />
            <div>
              <p className="label label--sky">{t('branch.address.label')}</p>
              <p className="card__big">{t('branch.address.value')}</p>
              <a className="btn btn--primary btn--sm" href={DIRECTIONS} target="_blank" rel="noreferrer">
                {t('branch.directions')}
                <LuArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="card card--white bento__ifsc">
            <p className="label label--blue">{t('branch.ifsc')}</p>
            <div className="ifsc__row">
              <span className="ifsc__code">{IFSC}</span>
              <button type="button" className="btn btn--outline btn--sm" onClick={copy}>
                {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
                <span aria-live="polite">{copied ? t('branch.copied') : t('branch.copy')}</span>
              </button>
            </div>
          </article>

          <article className="card card--blue bento__hours">
            <LuClock className="card__icon card__icon--navy" aria-hidden="true" />
            <div>
              <p className="label label--navy">{t('branch.hours')}</p>
              <p className="card__mono">{t('hours.short')}</p>
            </div>
          </article>

          <article className="card card--white bento__status">
            <i className={`dot ${open ? 'dot--green' : 'dot--amber'}`} aria-hidden="true" />
            <p className="card__status">{open ? t('status.openShort') : t('status.closedShort')}</p>
          </article>

          <article className="card card--photo bento__photo">
            <img src={PHOTO} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <div className="card__shade" />
            <div className="card__photo-text">
              <p className="label label--sky">{t('branch.promo.eyebrow')}</p>
              <p className="card__big card__big--lg">{t('branch.promo.title')}</p>
            </div>
          </article>

          <article className="card card--white bento__toll">
            <LuPhoneCall className="card__icon card__icon--blue" aria-hidden="true" />
            <div>
              <p className="label label--blue">{t('branch.toll')}</p>
              <p className="card__phones">1800 1234 · 1800 2100</p>
            </div>
          </article>

          <article className="card card--amber bento__alert">
            <LuShieldAlert className="card__icon card__icon--navy" aria-hidden="true" />
            <p className="card__phones">{t('branch.alert')}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
