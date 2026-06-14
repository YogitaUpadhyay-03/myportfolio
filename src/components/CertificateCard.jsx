/**
 * Reusable Certificate Card component matching the Figma design from Desktop-12.
 */
export default function CertificateCard({ title, issuer, year, link, className = "" }) {
  return (
    <div 
      className={`relative group bg-[#e6e5db]/75 backdrop-blur-sm border-3 border-[#333333] rounded-3xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {/* Red dot in the top-right corner */}
      <div className="absolute top-4 right-4 w-3.5 h-3.5 bg-[#ef4444] rounded-full shadow-[0_0_4px_rgba(239,68,68,0.6)]" />

      {/* Certificate Text in VCR Font */}
      <div className="font-vcr text-left select-text space-y-3">
        {/* Title in retro slate/blue */}
        <h3 className="text-xl font-bold text-[#1f3a52] leading-snug tracking-wide uppercase">
          {title}
        </h3>
        
        {/* Metadata in dark charcoal */}
        <div className="text-base text-[#475569] font-medium space-y-1 leading-normal">
          <p>
            Issued by : {issuer} {year}
          </p>
          <p>
            Link : <a href={`https://${link}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-black hover:font-semibold transition-colors duration-150">{link}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
