import {
  ChevronRight,
  Star,
  ShieldCheck,
  Microscope,
  Gift,
} from 'lucide-react';
import './index.css';

const CORAL = '#E87272';
const CORAL_DARK = '#c85c5c';
const DARK = '#2B2B2B';
const F_BODY = "'Quicksand', 'Helvetica Neue', Arial, sans-serif";
const F_HEAD = "'Roboto Condensed', 'Quicksand', Arial, sans-serif";

const TODAY = new Date().toLocaleDateString('en-US', {
  month: 'long', day: 'numeric', year: 'numeric',
});

function Header() {
  return (
    <header style={{ background: '#fff', borderBottom: '2px solid #f0f0f0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: F_BODY }}>
        <span style={{ background: CORAL, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 4 }}>
          Sponsored
        </span>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 10, color: '#aaa', margin: 0 }}>Today&#39;s Featured Report</p>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#555', margin: 0 }}>{TODAY}</p>
        </div>
        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#aaa' }}>
          <ShieldCheck size={12} style={{ color: CORAL }} />
          <span>SSL Secured</span>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #fce8e8 0%, #fdf4f4 60%, #fff 100%)' }}>
      <div className="fade-in" style={{ maxWidth: 720, margin: '0 auto', padding: '36px 16px 28px', textAlign: 'center', fontFamily: F_BODY }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
          <Microscope size={13} style={{ color: CORAL }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: CORAL }}>
            Skin Microbiome Research · Sponsored Content
          </span>
        </div>

        <h1 style={{ fontFamily: F_HEAD, color: DARK, fontSize: 'clamp(1.6rem, 6vw, 2.6rem)', fontWeight: 700, lineHeight: 1.2, maxWidth: 680, margin: '0 auto 16px' }}>
          The 30-Second Morning Ritual That{' '}
          <span style={{ color: CORAL }}>Reignites Dull, Aging Skin</span> —
          Scientists Call It the{' '}
          <em>"Microbiome Reset"</em>
        </h1>

        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', color: '#555', maxWidth: 560, margin: '0 auto 20px', lineHeight: 1.8, fontWeight: 500 }}>
          A breakthrough linking your gut health to visible skin aging has women
          over 35 seeing dramatic results — without serums, needles, or expensive procedures.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 8, fontSize: 12, color: '#888' }}>
          <span style={{ display: 'flex', gap: 2 }}>
            {[0,1,2,3,4].map(i => <Star key={i} size={12} fill={CORAL} style={{ color: CORAL }} />)}
          </span>
          <span className="meta-sep">|</span>
          <span>19,479 verified reviews</span>
          <span className="meta-sep">|</span>
          <span>8 min read</span>
        </div>
      </div>
    </section>
  );
}

function ArticleBody() {
  return (
    <article style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px', fontFamily: F_BODY }}>

      <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#444', marginBottom: 20, fontWeight: 500 }}>
        If you&#39;re a woman over 35 and your skin seems{' '}
        <strong>duller, looser, and harder to manage</strong> — no matter how many
        products you try — the real cause may surprise you. It starts in your gut.
      </p>

      <figure style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 24px rgba(0,0,0,0.09)', margin: '24px 0' }}>
        <img
          src="/primebiome.png"
          alt="PrimeBiome — Skin & Gut Probiotics"
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
        />
      </figure>

      <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#555', marginBottom: 20, fontWeight: 500 }}>
        Peer-reviewed research confirms that the bacteria in your gut directly control{' '}
        <strong>skin cell turnover, collagen production, and inflammation</strong> —
        the three biggest drivers of premature aging. When this ecosystem falls out of
        balance, the effects show up on your face.
      </p>

      <div style={{ borderLeft: `4px solid ${CORAL}`, paddingLeft: 18, paddingTop: 10, paddingBottom: 10, margin: '24px 0', background: '#fdf4f4', borderRadius: '0 8px 8px 0' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1rem', color: '#555', lineHeight: 1.8, margin: 0 }}>
          Current research on the gut-skin axis shows the microbiome plays a central
          role in regulating inflammation, hormone balance, and skin cell renewal —
          making it a key target for healthy aging strategies.
        </p>
      </div>

      <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#555', marginBottom: 0, fontWeight: 500 }}>
        Researchers have now identified a precise blend of probiotic strains that can{' '}
        <strong>reboot this system in as little as 30 days</strong> — and the results
        are turning heads. This is the science behind{' '}
        <strong style={{ color: CORAL }}>PrimeBiome</strong>, a delicious daily probiotic
        gummy formulated specifically for the gut-skin connection.
      </p>
    </article>
  );
}

function CTASection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #fce8e8 0%, #fdf4f4 100%)', borderTop: `3px solid ${CORAL}` }}>
      <div style={{ maxWidth: 580, margin: '0 auto', padding: '48px 16px', textAlign: 'center', fontFamily: F_BODY, boxSizing: 'border-box', width: '100%' }}>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: CORAL, marginBottom: 10 }}>
          Limited Time · Free Access
        </p>

        <h2 style={{ fontSize: 'clamp(1.3rem, 5vw, 1.75rem)', fontWeight: 700, color: DARK, fontFamily: F_HEAD, lineHeight: 1.25, marginBottom: 14 }}>
          Discover the Exact <span style={{ color: CORAL }}>Microbiome Reset Protocol</span> — and Claim Your Discount
        </h2>

        <p style={{ color: '#666', fontSize: 14, lineHeight: 1.85, marginBottom: 20, fontWeight: 500 }}>
          Learn why standard probiotics fail, which strains actually work,
          and how to get PrimeBiome at a special discounted price — while stocks last.
        </p>

        {/* Product + rating */}
        <div className="product-rating" style={{ marginBottom: 20 }}>
          <img
            src="/prime.png"
            alt="PrimeBiome"
            style={{ width: 90, height: 90, objectFit: 'contain', borderRadius: 18, filter: 'drop-shadow(0 6px 18px rgba(232,114,114,0.3))' }}
          />
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
              {[0,1,2,3,4].map(i => <Star key={i} size={14} fill={CORAL} style={{ color: CORAL }} />)}
            </div>
            <p style={{ fontWeight: 700, color: DARK, fontSize: 14, margin: '0 0 2px' }}>4.9 / 5</p>
            <p style={{ color: '#aaa', fontSize: 12, margin: 0, fontWeight: 500 }}>19,479 verified reviews</p>
          </div>
        </div>

        {/* Bonuses */}
        <div style={{ background: '#fff', border: `1px solid #f5d0d0`, borderRadius: 14, padding: '14px 18px', marginBottom: 22, textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 8, flexWrap: 'wrap' }}>
            <Gift size={16} style={{ color: CORAL, flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontWeight: 700, color: DARK, fontSize: 13, margin: 0, flex: 1, minWidth: 0 }}>
              Order Today &amp; Get 3 FREE Bonuses (Worth $163!)
            </p>
          </div>
          {[
            'See You Never, Cellulite!',
            'Hello, Dazzling Hair!',
            'White In a Flash!',
          ].map((bonus, i) => (
            <p key={i} style={{ fontSize: 12, color: '#666', margin: '0 0 4px', fontWeight: 500 }}>
              ✓ <strong>Bonus #{i + 1}:</strong> {bonus}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://primebiome24.com/text.php#aff=renato20"
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-cta cta-btn"
          style={{
            background: `linear-gradient(135deg, ${CORAL}, ${CORAL_DARK})`,
            color: '#fff',
            fontSize: 'clamp(0.9rem, 3vw, 1rem)',
            boxShadow: `0 8px 28px rgba(232,114,114,0.4)`,
            fontFamily: F_HEAD,
          }}
        >
          YES — SHOW ME HOW IT WORKS
          <ChevronRight size={18} />
        </a>

        <p style={{ marginTop: 12, fontSize: 12, color: '#aaa', fontWeight: 500 }}>
          No credit card required · 100% secure
        </p>

        {/* Guarantee */}
        <div className="guarantee-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 12, padding: '12px 18px', marginTop: 16 }}>
          <ShieldCheck size={24} style={{ color: '#4CAF50', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: 700, color: DARK, fontSize: 13, margin: '0 0 2px' }}>60-Day Money Back Guarantee</p>
            <p style={{ color: '#888', fontSize: 12, margin: 0, fontWeight: 500 }}>Not satisfied? Full refund, no questions asked.</p>
          </div>
        </div>

        {/* Urgency */}
        <div className="urgency-strip" style={{ background: '#fff4e5', color: '#b45309', border: '1px solid #fcd34d' }}>
          ⚠️ High demand — this presentation may be taken down at any time.
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#888', fontFamily: F_BODY }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 16px' }}>

        <div style={{ background: '#242424', border: '1px solid #333', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
          <p style={{ fontWeight: 700, color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, marginBottom: 8 }}>
            ★ FDA Disclaimer
          </p>
          <p style={{ color: '#666', fontSize: 12, lineHeight: 1.8, margin: '0 0 8px', fontWeight: 500 }}>
            These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
            Consult your physician before use. Individual results may vary.
          </p>
          <p style={{ color: '#666', fontSize: 12, lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
            This page is a sponsored advertorial and may contain affiliate links.
            If you purchase through these links, we may earn a commission at no additional cost to you.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
          {[
            { label: 'Privacy Policy', href: '/privacy.html' },
            { label: 'Terms of Service', href: '/terms.html' },
            { label: 'Contact Us', href: 'mailto:support@drrpros.com' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{ color: '#666', textDecoration: 'underline', fontSize: 12, fontWeight: 500 }}>
              {label}
            </a>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 11, color: '#444', lineHeight: 1.9, fontWeight: 500 }}>
          © {new Date().getFullYear()} Health Discovery Media · All Rights Reserved<br />
          Results depicted may not be typical. Not affiliated with any government agency.<br />
          Digistore24 Inc. is the authorized retailer of products on this site.<br />
          DIGISTORE24 INC., 2140 S DUPONT HWY, CAMDEN DE 19934, USA
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <HeroSection />
      <ArticleBody />
      <CTASection />
      <Footer />
    </div>
  );
}
