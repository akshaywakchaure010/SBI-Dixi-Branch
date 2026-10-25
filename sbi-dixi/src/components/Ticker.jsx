import SbiLogo from './SbiLogo';
import { SERVICES } from '../data/services';
import { useLang } from '../i18n';

// Endless marquee of service names. The list is rendered twice so the loop is seamless.
export default function Ticker() {
  const { loc } = useLang();
  const names = SERVICES.map((s) => loc(s.title));

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[0, 1].map((copy) => (
          <ul className="ticker__list" key={copy}>
            {names.map((n) => (
              <li key={n}>
                <span>{n}</span>
                <SbiLogo size={34} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
