import { useEffect, useId, useState } from 'react';
import Eyebrow from './Eyebrow';
import { useLang } from '../i18n';
import { calcEmi, calcFdMaturity, formatINR } from '../utils/finance';

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Slider + typeable number box. The box keeps a draft string so typing isn't fought by clamping.
function Field({ label, value, onChange, min, max, step, unit }) {
  const id = useId();
  const [draft, setDraft] = useState(String(value));
  useEffect(() => setDraft(String(value)), [value]);

  const pct = ((value - min) / (max - min)) * 100;
  const commit = () => {
    const n = parseFloat(draft);
    onChange(Number.isFinite(n) ? clamp(n, min, max) : value);
  };

  return (
    <div className="field">
      <div className="field__row">
        <label htmlFor={id}>{label}</label>
        <span className="field__box">
          <input
            type="number"
            inputMode="decimal"
            value={draft}
            min={min}
            max={max}
            step={step}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
            aria-label={label}
          />
          <em>{unit}</em>
        </span>
      </div>
      <input
        id={id}
        className="range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ '--pct': `${pct}%` }}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default function Calculator() {
  const { t } = useLang();

  // Loan
  const [loan, setLoan] = useState(1000000);
  const [loanRate, setLoanRate] = useState(9);
  const [loanYears, setLoanYears] = useState(10);
  // FD
  const [dep, setDep] = useState(100000);
  const [depRate, setDepRate] = useState(7);
  const [depYears, setDepYears] = useState(1);

  const emi = calcEmi(loan, loanRate, loanYears);
  const totalPayable = emi * loanYears * 12; // from the unrounded EMI
  const totalInterest = totalPayable - loan;

  const maturity = calcFdMaturity(dep, depRate, depYears);
  const earned = maturity - dep;

  const yrs = t('calc.yrs');

  return (
    <section id="calculator" className="sec sec--navy">
      <div className="wrap">
        <Eyebrow n="03">{t('calc.eyebrow')}</Eyebrow>
        <h2 className="h2 h2--wide">{t('calc.title')}</h2>

        <div className="calc">
          <article className="calc__card">
            <h3>{t('calc.emi')}</h3>
            <Field label={t('calc.loanAmount')} value={loan} onChange={setLoan} min={50000} max={5000000} step={10000} unit="₹" />
            <Field label={t('calc.rate')} value={loanRate} onChange={setLoanRate} min={1} max={20} step={0.1} unit="%" />
            <Field label={t('calc.tenure')} value={loanYears} onChange={setLoanYears} min={1} max={30} step={1} unit={yrs} />

            <div className="result">
              <p className="result__label">{t('calc.monthlyEmi')}</p>
              <p className="result__value">₹{formatINR(emi)}</p>
              <dl className="result__split">
                <div>
                  <dt>{t('calc.totalInterest')}</dt>
                  <dd>₹{formatINR(totalInterest)}</dd>
                </div>
                <div>
                  <dt>{t('calc.totalPayable')}</dt>
                  <dd>₹{formatINR(totalPayable)}</dd>
                </div>
              </dl>
            </div>
          </article>

          <article className="calc__card">
            <h3>{t('calc.fd')}</h3>
            <Field label={t('calc.depositAmount')} value={dep} onChange={setDep} min={10000} max={5000000} step={1000} unit="₹" />
            <Field label={t('calc.rate')} value={depRate} onChange={setDepRate} min={1} max={12} step={0.1} unit="%" />
            <Field label={t('calc.period')} value={depYears} onChange={setDepYears} min={1} max={10} step={1} unit={yrs} />

            <div className="result">
              <p className="result__label">{t('calc.maturity')}</p>
              <p className="result__value">₹{formatINR(maturity)}</p>
              <dl className="result__split">
                <div>
                  <dt>{t('calc.interestEarned')}</dt>
                  <dd>₹{formatINR(earned)}</dd>
                </div>
                <div>
                  <dt>{t('calc.compounding')}</dt>
                  <dd>{t('calc.quarterly')}</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>

        <p className="calc__note">{t('calc.note')}</p>
      </div>
    </section>
  );
}
