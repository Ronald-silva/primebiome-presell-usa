import {
  CheckCircle2,
  ChevronRight,
  Play,
  Star,
  ShieldCheck,
  Microscope,
  FlameKindling,
  Leaf,
} from 'lucide-react';
import './index.css';

// ─── Brand colors (matching primebiome24.com) ────────────────────────────────
const CORAL = '#E87272';
const CORAL_DARK = '#c85c5c';
const DARK = '#2B2B2B';

// ─── Font shortcuts ───────────────────────────────────────────────────────────
const F_BODY = "'Quicksand', 'Helvetica Neue', Arial, sans-serif";
const F_HEAD = "'Roboto Condensed', 'Quicksand', Arial, sans-serif";

// ─── Dynamic date ─────────────────────────────────────────────────────────────
const TODAY = new Date().toLocaleDateString('en-US', {
  month: 'long', day: 'numeric', year: 'numeric',
});

function Header() {
  return (
    <header style={{ background: '#fff', borderBottom: '2px solid #f0f0f0' }}>
      <div style={{ maxWidth: 896, margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: F_BODY }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ background: CORAL, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 4 }}>
            Sponsored
          </span>
          <span className="header-secondary" style={{ fontSize: 11, color: '#aaa' }}>Health &amp; Wellness Research</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 10, color: '#aaa', margin: 0 }}>Today&#39;s Featured Report</p>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#555', margin: 0 }}>{TODAY}</p>
        </div>
        <div className="header-right" style={{ fontSize: 11, color: '#aaa' }}>
          <ShieldCheck size={12} style={{ color: CORAL }} />
          <span>Verified Research</span>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #fce8e8 0%, #fdf4f4 60%, #fff 100%)' }}>
      <div className="fade-in" style={{ maxWidth: 896, margin: '0 auto', padding: '48px 16px', textAlign: 'center', fontFamily: F_BODY }}>

        {/* Category tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <Microscope size={14} style={{ color: CORAL }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: CORAL }}>
            Skin Microbiome Research · Exclusive Report
          </span>
        </div>

        {/* Headline — Roboto Condensed Bold */}
        <h1 style={{ fontFamily: F_HEAD, color: DARK, fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.2, maxWidth: 780, margin: '0 auto 20px' }}>
          The 30-Second Morning Ritual That{' '}
          <span style={{ color: CORAL }}>Flushes Skin Toxins</span> and Reignites Your
          Sluggish Metabolism — Scientists Call It the{' '}
          <em style={{ fontStyle: 'italic' }}>"Microbiome Reset"</em>
        </h1>

        {/* Sub-headline */}
        <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: '#555', maxWidth: 640, margin: '0 auto 24px', lineHeight: 1.85, fontWeight: 500 }}>
          A groundbreaking discovery linking your gut microbiome to visible skin aging
          has dermatologists and gastroenterologists rethinking everything — and women
          over 35 across the country are already seeing the difference.
        </p>

        {/* Meta bar — no fake author/numbers */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 12, fontSize: 12, color: '#888' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {[0,1,2,3,4].map(i => <Star key={i} size={12} fill={CORAL} style={{ color: CORAL }} />)}
          </span>
          <span className="meta-sep">|</span>
          <span>Health &amp; Wellness Research</span>
          <span className="meta-sep">|</span>
          <span>8 min read</span>
        </div>
      </div>
    </section>
  );
}

function ArticleBody() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto', padding: '40px 16px', fontFamily: F_BODY }}>

      <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: '#444', marginBottom: 24, fontWeight: 500 }}>
        If you&#39;re a woman over 35 and you&#39;ve noticed that your skin seems{' '}
        <strong>duller, looser, and harder to manage</strong> — no matter how many
        serums or creams you try — there&#39;s a very good reason. And it has almost
        nothing to do with your skincare routine.
      </p>

      {/* Product image */}
      <figure style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', margin: '32px 0', background: 'linear-gradient(135deg, #fce8e8 0%, #fdf4f4 100%)' }}>
        <img
          src="/primebiome.png"
          alt="PrimeBiome — Skin & Gut Essential Probiotics"
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
        />
      </figure>

      <p style={{ fontSize: '1rem', lineHeight: 1.95, color: '#555', marginBottom: 24, fontWeight: 500 }}>
        Peer-reviewed research shows that the trillions of bacteria living in your gut
        directly regulate{' '}
        <strong>skin cell turnover, collagen production, and inflammatory responses</strong>{' '}
        — three of the biggest drivers of premature aging. When this delicate ecosystem
        falls out of balance (a state scientists call <em>"gut dysbiosis"</em>), the
        cascade of consequences shows up not just on your waistline, but on your face.
      </p>

      {/* Pull quote — no fake attribution */}
      <blockquote style={{ borderLeft: `4px solid ${CORAL}`, paddingLeft: 20, paddingTop: 8, paddingBottom: 8, margin: '32px 0', fontStyle: 'italic', fontSize: '1.1rem', color: '#555', lineHeight: 1.85 }}>
        "The gut microbiome isn&#39;t just your digestive system — it is your body&#39;s
        master control center for inflammation, hormone balance, and yes, the health of your skin."
      </blockquote>

      <p style={{ fontSize: '1rem', lineHeight: 1.95, color: '#555', marginBottom: 24, fontWeight: 500 }}>
        The exciting news? Researchers have now identified a precise combination of
        probiotic strains and prebiotic co-factors that can{' '}
        <strong>reboot this system in as little as 30 days</strong>. They call it the{' '}
        <strong style={{ color: CORAL }}>"Microbiome Reset"</strong> — and early
        adopters are reporting results that have stunned their dermatologists.
      </p>

      {/* Mechanism box */}
      <div style={{ background: '#fdf4f4', border: `1px solid #f5d0d0`, borderRadius: 16, padding: '24px 28px', margin: '32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <FlameKindling size={20} style={{ color: CORAL }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: DARK, fontFamily: F_HEAD, margin: 0 }}>
            How the <span style={{ color: CORAL }}>Microbiome Reset</span> Works
          </h2>
        </div>
        <p style={{ color: '#666', marginBottom: 16, lineHeight: 1.75, fontSize: 14, fontWeight: 500 }}>
          The process operates through three interconnected mechanisms scientists call the{' '}
          <strong>"Bio-Shield Repair Cascade"</strong>:
        </p>
        {[
          {
            icon: <ShieldCheck size={18} style={{ color: CORAL }} />,
            title: 'Bio-Shield Repair',
            desc: 'Restores the protective mucosal lining of the gut wall, preventing inflammatory toxins from entering the bloodstream and triggering skin breakdown.',
          },
          {
            icon: <Microscope size={18} style={{ color: CORAL }} />,
            title: 'Microbiome Reset',
            desc: 'Reintroduces clinically studied probiotic strains that crowd out harmful bacteria, rebalancing the gut ecosystem within 21–30 days.',
          },
          {
            icon: <FlameKindling size={18} style={{ color: CORAL }} />,
            title: 'Metabolic Synergy',
            desc: 'Activates short-chain fatty acid (SCFA) production, boosting mitochondrial energy output and fat metabolism — the reason so many women also report a slimmer waistline.',
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
            <div style={{ flexShrink: 0, marginTop: 2 }}>{icon}</div>
            <div>
              <p style={{ fontWeight: 700, color: '#333', marginBottom: 4, fontSize: 15 }}>{title}</p>
              <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7, margin: 0, fontWeight: 500 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '1rem', lineHeight: 1.95, color: '#555', fontWeight: 500 }}>
        This is precisely the science behind <strong>PrimeBiome</strong>. Unlike
        standard probiotics that contain only 1–2 strains — and rarely survive the
        acidic journey to your gut — PrimeBiome delivers a{' '}
        <strong>precision-engineered blend of Skin &amp; Gut Essential Probiotics</strong>{' '}
        with micro-encapsulation technology for significantly higher survivability
        compared to ordinary supplements.
      </p>
    </article>
  );
}

function BenefitsList() {
  const benefits = [
    'Visibly smoother, firmer skin within 30 days — or your money back',
    'Reduces stubborn puffiness and under-eye inflammation linked to gut imbalance',
    'Supports healthy skin cell turnover and natural collagen synthesis',
    'Helps flatten and tone the midsection through Metabolic Synergy activation',
    'Promotes a balanced mood by supporting the gut-brain axis',
    'Formulated with 100% natural, non-GMO, GMP-certified ingredients',
    'No refrigeration required — stays potent at room temperature',
  ];

  return (
    <section style={{ background: DARK }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 16px', fontFamily: F_BODY }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <Leaf size={20} color={CORAL} />
          <h2 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, fontFamily: F_HEAD, margin: 0 }}>
            What Women Are Experiencing with PrimeBiome
          </h2>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px' }}>
          {benefits.map((b) => (
            <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
              <CheckCircle2 size={20} style={{ color: '#4CAF50', flexShrink: 0, marginTop: 2 }} />
              <span style={{ color: '#ddd', lineHeight: 1.75, fontSize: 15, fontWeight: 500 }}>{b}</span>
            </li>
          ))}
        </ul>

        {/* Trust badges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
          {[
            { label: 'GMP Certified', sub: 'Good Manufacturing Practice' },
            { label: 'FDA Registered', sub: 'Made in USA Facility' },
            { label: '100% Natural', sub: 'Non-GMO Ingredients' },
            { label: 'GMO Free', sub: 'Third-Party Tested' },
          ].map(({ label, sub }) => (
            <div key={label} style={{ border: '1px solid #444', borderRadius: 12, padding: '14px 12px', textAlign: 'center' }}>
              <p style={{ fontWeight: 700, color: '#fff', fontSize: 13, margin: '0 0 4px' }}>{label}</p>
              <p style={{ color: '#888', fontSize: 11, margin: 0, fontWeight: 500 }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials: placeholder cards for real customer reviews ────────────────
function Testimonials() {
  const placeholders = [
    { avatar: '01', platform: 'Facebook' },
    { avatar: '02', platform: 'Instagram' },
    { avatar: '03', platform: 'Facebook' },
  ];

  return (
    <section style={{ background: '#f9f9f9' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 16px', fontFamily: F_BODY }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, textAlign: 'center', color: DARK, fontFamily: F_HEAD, marginBottom: 8 }}>
          Real Women. Real Results.
        </h2>
        <p style={{ textAlign: 'center', color: '#aaa', fontSize: 13, marginBottom: 32, fontWeight: 500 }}>
          From verified customers across the United States
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {placeholders.map(({ avatar, platform }) => (
            <div key={avatar} style={{ background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#e5e7eb', flexShrink: 0 }} />
                <div>
                  <div style={{ height: 10, width: 90, background: '#e5e7eb', borderRadius: 4, marginBottom: 6 }} />
                  <div style={{ height: 8, width: 60, background: '#f3f4f6', borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
                {[0,1,2,3,4].map(i => <Star key={i} size={12} fill={CORAL} style={{ color: CORAL }} />)}
              </div>
              <div style={{ height: 10, background: '#f3f4f6', borderRadius: 4, marginBottom: 6 }} />
              <div style={{ height: 10, background: '#f3f4f6', borderRadius: 4, marginBottom: 6 }} />
              <div style={{ height: 10, width: '70%', background: '#f3f4f6', borderRadius: 4, marginBottom: 12 }} />
              <p style={{ fontSize: 10, color: '#ccc', fontStyle: 'italic', textAlign: 'center', margin: 0 }}>
                [Add real {platform} review here]
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10, paddingTop: 10, borderTop: '1px solid #f0f0f0' }}>
                <span style={{ fontSize: 11, color: '#ccc' }}>via {platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #fce8e8 0%, #fdf4f4 100%)', borderTop: `3px solid ${CORAL}` }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '64px 16px', textAlign: 'center', fontFamily: F_BODY }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: CORAL, marginBottom: 12 }}>
          Limited Time · Watch the Free Presentation
        </p>
        <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: 700, color: DARK, fontFamily: F_HEAD, lineHeight: 1.25, marginBottom: 16 }}>
          Discover the Exact{' '}
          <span style={{ color: CORAL }}>Microbiome Reset Protocol</span>{' '}
          in the Free Video Below
        </h2>
        <p style={{ color: '#666', fontSize: 14, lineHeight: 1.9, marginBottom: 32, fontWeight: 500 }}>
          In this short presentation, you&#39;ll learn the precise probiotic strains that
          activate the <strong>Bio-Shield Repair Cascade</strong>, why standard probiotics
          fail within 20 minutes of ingestion, and how thousands of women over 35 are
          reclaiming youthful skin — without needles, prescriptions, or expensive procedures.
        </p>

        {/* CTA Button */}
        <a
          href="http://primebiome24.com/text.php#aff=renato20"
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-cta cta-btn"
          style={{
            background: `linear-gradient(135deg, ${CORAL}, ${CORAL_DARK})`,
            color: '#fff',
            fontSize: 'clamp(0.9rem, 3vw, 1.05rem)',
            boxShadow: `0 8px 32px rgba(232,114,114,0.4)`,
            fontFamily: F_HEAD,
          }}
        >
          <Play size={20} fill="#fff" />
          WATCH: Restoring Your Skin Microbiome Today
          <ChevronRight size={20} />
        </a>

        <p style={{ marginTop: 14, fontSize: 12, color: '#aaa', fontWeight: 500 }}>
          Free presentation · No credit card required · 100% secure
        </p>

        {/* Urgency */}
        <div
          className="urgency-strip"
          style={{ background: '#fff4e5', color: '#b45309', border: '1px solid #fcd34d' }}
        >
          ⚠️ Due to high demand, this presentation may be taken down at any time.
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#888', fontFamily: F_BODY }}>
      <div style={{ maxWidth: 896, margin: '0 auto', padding: '40px 16px' }}>

        {/* FDA Disclaimer */}
        <div style={{ background: '#242424', border: '1px solid #333', borderRadius: 12, padding: '20px 24px', marginBottom: 24 }}>
          <p style={{ fontWeight: 700, color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, marginBottom: 8 }}>
            ★ FDA Disclaimer
          </p>
          <p style={{ color: '#666', fontSize: 12, lineHeight: 1.8, margin: '0 0 10px', fontWeight: 500 }}>
            These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
            The information on this website is provided for educational purposes only and
            does not substitute for professional medical advice. Always consult your
            physician or qualified healthcare provider before starting any dietary
            supplement, especially if you are pregnant, nursing, taking medication, or have
            a medical condition. Individual results may vary.
          </p>
          <p style={{ color: '#666', fontSize: 12, lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
            This page is a sponsored advertorial and may contain affiliate links.
            If you purchase through these links, we may earn a commission at no additional
            cost to you.
          </p>
        </div>

        {/* Policy links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Affiliate Disclosure', href: '#' },
            { label: 'Contact Us', href: 'mailto:support@drrpros.com' },
            { label: 'Unsubscribe', href: 'mailto:support@drrpros.com?subject=Unsubscribe' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ color: '#666', textDecoration: 'underline', fontSize: 12, fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright + Digistore24 compliance */}
        <p style={{ textAlign: 'center', fontSize: 11, color: '#444', lineHeight: 1.9, fontWeight: 500 }}>
          © {new Date().getFullYear()} Health Discovery Media · All Rights Reserved<br />
          The advertiser is not affiliated with any government agency. Results depicted may not be typical.<br />
          Digistore24 Inc. is the authorized retailer of products on this site.<br />
          DIGISTORE24 INC., 2140 S DUPONT HWY, CAMDEN DE 19934, USA · Digistore24 GmbH,
          Stiftsstr. 10, 31582 Nienburg (Weser), Germany.
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
      <BenefitsList />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
