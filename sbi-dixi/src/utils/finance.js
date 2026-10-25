// Standard reducing-balance EMI. Returns the *unrounded* EMI.
export function calcEmi(principal, annualRatePct, years) {
  const n = Math.round(years * 12);
  const r = annualRatePct / 12 / 100;
  if (n <= 0) return 0;
  if (r === 0) return principal / n;
  const f = Math.pow(1 + r, n);
  return (principal * r * f) / (f - 1);
}

// Fixed deposit maturity with quarterly compounding (SBI's standard FD basis).
export function calcFdMaturity(principal, annualRatePct, years) {
  return principal * Math.pow(1 + annualRatePct / 100 / 4, 4 * years);
}

const nf = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
// Indian digit grouping: 33,72,024
export const formatINR = (n) => nf.format(Math.round(n));
