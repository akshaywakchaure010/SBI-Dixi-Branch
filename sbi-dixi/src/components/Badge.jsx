import SbiLogo from './SbiLogo';

// Round badge with the logo and text running around it (slowly rotating).
export default function Badge({ text = 'State Bank of India • Dixi Branch • SBIN0017500 •' }) {
  return (
    <div className="badge" aria-hidden="true">
      <svg className="badge__ring" viewBox="0 0 200 200">
        <defs>
          <path id="badge-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text>
          <textPath href="#badge-circle" startOffset="0" textLength="496" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <SbiLogo className="badge__logo" size={104} />
    </div>
  );
}
