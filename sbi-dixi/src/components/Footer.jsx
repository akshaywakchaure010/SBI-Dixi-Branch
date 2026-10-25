import SbiLogo from './SbiLogo';
import { useLang } from '../i18n';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <SbiLogo className="footer__logo" size={160} />
          <span className="footer__word">DIXI</span>
        </div>
        <div className="footer__row">
          <p>{t('footer.note')}</p>
          <p className="footer__links">
            <a href="https://sbi.co.in" target="_blank" rel="noreferrer">sbi.co.in</a>
            <a href="https://onlinesbi.sbi" target="_blank" rel="noreferrer">onlinesbi.sbi</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
