import { useEffect, useRef } from 'react';
import { LuX, LuCircleCheck, LuInfo, LuUser, LuExternalLink } from 'react-icons/lu';
import { TEAM_BY_ID } from '../data/team';
import { useLang } from '../i18n';

// Right-hand slide-over with the full process for one service.
export default function ServiceDrawer({ service, onClose }) {
  const { t, loc } = useLang();
  const panelRef = useRef(null);
  const lastFocus = useRef(null);
  const open = Boolean(service);

  // Esc to close, lock page scroll, move focus in, and restore it on close.
  useEffect(() => {
    if (!open) return undefined;
    lastFocus.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus?.();
    };
  }, [open, onClose]);

  // Always start a newly opened service at the top.
  useEffect(() => {
    if (service && panelRef.current) panelRef.current.scrollTop = 0;
  }, [service]);

  if (!service) return null;
  const { Icon, title, tagline, meet, action } = service;
  const steps = loc(service.steps);
  const docs = loc(service.docs);

  return (
    <div className="drawer" role="presentation">
      <div className="drawer__scrim" onClick={onClose} />
      <aside
        ref={panelRef}
        className="drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        tabIndex={-1}
      >
        <button type="button" className="drawer__close" onClick={onClose} aria-label={t('drawer.close')}>
          <LuX aria-hidden="true" />
        </button>

        <header className="drawer__head">
          <span className="drawer__icon">
            <Icon aria-hidden="true" />
          </span>
          <h3 id="drawer-title">{loc(title)}</h3>
          <p>{loc(tagline)}</p>
        </header>

        <div className="drawer__body">
          {action && (
            <a className="drawer__action" href={action.href} target="_blank" rel="noreferrer">
              <span>{loc(action.label)}</span>
              <i>
                <LuExternalLink aria-hidden="true" />
              </i>
            </a>
          )}

          <h4 className="drawer__label">{t('drawer.steps')}</h4>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={i}>
                <b>{i + 1}</b>
                <span>{s}</span>
              </li>
            ))}
          </ol>

          <h4 className="drawer__label">{t('drawer.docs')}</h4>
          <ul className="docs">
            {docs.map((d, i) => (
              <li key={i}>
                <LuCircleCheck aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <h4 className="drawer__label">{t('drawer.meet')}</h4>
          <ul className="meet">
            {meet.map((id) => {
              const p = TEAM_BY_ID[id];
              return (
                <li key={id}>
                  <i>
                    <LuUser aria-hidden="true" />
                  </i>
                  <div>
                    <strong>{loc(p.name)}</strong>
                    <span>{loc(p.role)}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="drawer__note">
            <LuInfo aria-hidden="true" />
            <span>{t('drawer.note')}</span>
          </p>
        </div>
      </aside>
    </div>
  );
}
