import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Award,
  Building,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Compass,
  Cpu,
  Factory,
  Gauge,
  Globe2,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  Layers,
  Radio,
  Server,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { useLanguage } from "../context/useLanguage";

const solutionIcons = [
  Server,
  Cloud,
  Cpu,
  Shield,
  Headphones,
  ClipboardCheck,
];

const whyUsIcons = [
  Compass,
  Award,
  Gauge,
  Target,
];

const sectorIcons = [
  Radio,
  HeartPulse,
  GraduationCap,
  Factory,
  Landmark,
  Building,
];

const cevahirIcons = [
  Building2,
  Globe2,
  Users,
  Layers,
];

export default function Anasayfa() {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="main-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-grid-2">
              <div className="hero-left-side">
                <div className="hero-eyebrow">
                  {t.anasayfa.hero.badge}
                </div>
                <h1>{t.anasayfa.hero.baslik}</h1>
                <p className="hero-subtext">{t.anasayfa.hero.aciklama}</p>
                <div className="hero-actions">
                  <Link to="/cozumler" className="btn-primary">
                    {t.anasayfa.hero.ctaCozumler}
                  </Link>
                  <Link to="/neden-biz" className="btn-secondary">
                    {t.anasayfa.hero.ctaNedenBiz}
                  </Link>
                  <Link to="/iletisim" className="btn-outline">
                    {t.anasayfa.hero.ctaIletisim}
                  </Link>
                </div>
              </div>

              <div className="hero-right-side">
                <div className="hero-visual-card">
                  <div className="noc-header">
                    <span>{t.anasayfa.hero.nocBadge}</span>
                    <span className="pulse-badge">
                      <span className="pulse-dot" /> Online
                    </span>
                  </div>
                  <div>
                    <div className="noc-value">{t.anasayfa.hero.nocDeger}</div>
                    <div className="noc-label">{t.anasayfa.hero.nocBaslik}</div>
                  </div>
                  <div className="noc-chip">
                    <Activity size={16} color="#eb1c23" />
                    <span>
                      <strong>{t.anasayfa.hero.responseChip}</strong>{" "}
                      {t.anasayfa.hero.responseDesc}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (4 KART) */}
      <section className="section-global stats-section">
        <div className="global-container">
          <div className="stats-grid four-col">
            {t.anasayfa.hero.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-card-value">{stat.deger}</span>
                <span className="stat-card-desc">{stat.baslik}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BİZ KİMİZ SECTION */}
      <section className="section-global bg-light">
        <div className="global-container">
          <div className="global-text-side">
            <span className="why-us-subtitle">{t.anasayfa.bizKimiz.eyebrow}</span>
            <h2 className="section-title">{t.anasayfa.bizKimiz.baslik}</h2>
            <p className="lead-paragraph">{t.anasayfa.bizKimiz.lead}</p>
            <p className="section-lead">{t.anasayfa.bizKimiz.aciklama}</p>

            <div className="value-pills-wrap">
              {t.anasayfa.bizKimiz.degerler.map((val, idx) => (
                <span key={idx} className="value-pill">
                  <CheckCircle2 className="value-pill-icon" />
                  {val}
                </span>
              ))}
            </div>

            <div className="mt-medium">
              <Link to="/hakkimizda" className="btn-primary">
                {t.anasayfa.bizKimiz.btnHikaye} &nbsp;→
              </Link>
            </div>
          </div>
          <div className="global-image-side">
            <div className="why-us-image-wrapper">
              <img
                src="/hero.png"
                alt="CBIT Bilgi ve İletişim Teknolojileri"
              />
              <div className="image-overlay-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ÇÖZÜMLERİMİZ (6 KART) */}
      <section className="section-global">
        <div className="global-container" style={{ display: "block" }}>
          <div className="services-summary-header">
            <span className="why-us-subtitle">{t.anasayfa.cozumler.eyebrow}</span>
            <h2 className="section-title">{t.anasayfa.cozumler.baslik}</h2>
            <p className="section-lead">{t.anasayfa.cozumler.aciklama}</p>
          </div>

          <div className="solution-cards-grid">
            {t.anasayfa.cozumler.liste.map((item, idx) => {
              const IconComp = solutionIcons[idx] || Server;
              return (
                <div
                  key={idx}
                  className={`solution-card ${idx === 0 ? "featured" : ""}`}
                >
                  <div>
                    <div className="solution-card-top">
                      <div className="solution-icon-box">
                        <IconComp size={24} />
                      </div>
                      <span className="solution-number">{item.no}</span>
                    </div>
                    <h3>{item.baslik}</h3>
                    <p>{item.tanim}</p>
                  </div>
                  <div>
                    <Link to={item.link} className="solution-link">
                      {item.linkText} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VERİ MERKEZİ SPOTLIGHT (ÖNE ÇIKAN ÇÖZÜM) */}
      <section className="section-global bg-light">
        <div className="global-container" style={{ display: "block" }}>
          <div className="spotlight-box">
            <div className="spotlight-content">
              <span className="why-us-subtitle" style={{ color: "#eb1c23" }}>
                {t.anasayfa.veriMerkeziSpotlight.eyebrow}
              </span>
              <h2>{t.anasayfa.veriMerkeziSpotlight.baslik}</h2>
              <p>{t.anasayfa.veriMerkeziSpotlight.aciklama}</p>
            </div>

            <div className="spotlight-metrics">
              {t.anasayfa.veriMerkeziSpotlight.stats.map((st, idx) => (
                <div key={idx} className="spotlight-metric-card">
                  <div className="spotlight-metric-val">{st.deger}</div>
                  <div className="spotlight-metric-lbl">{st.etiket}</div>
                </div>
              ))}
            </div>

            <div>
              <Link to="/cozumler" className="btn-primary">
                {t.anasayfa.veriMerkeziSpotlight.cta} &nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEDEN CBIT? (01-04 KARTLAR) */}
      <section className="section-global why-us-section">
        <div className="global-container why-us-container">
          <div className="why-us-header">
            <span className="why-us-subtitle">{t.anasayfa.nedenCbit.eyebrow}</span>
            <h2 className="why-us-title">{t.anasayfa.nedenCbit.baslik}</h2>
            <p className="section-lead" style={{ marginTop: "12px" }}>
              {t.anasayfa.nedenCbit.aciklama}
            </p>
          </div>
          <div className="why-us-main-layout">
            <div className="why-us-grid">
              {t.anasayfa.nedenCbit.maddeler.map((item, idx) => {
                const IconComp = whyUsIcons[idx] || Compass;
                return (
                  <div key={idx} className="card why-us-card">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="why-us-number">{item.no}</div>
                      <IconComp size={24} color="#eb1c23" />
                    </div>
                    <h3>{item.baslik}</h3>
                    <p>{item.tanim}</p>
                  </div>
                );
              })}
            </div>
            <div className="why-us-image-side">
              <div className="why-us-image-wrapper">
                <img
                  src="/tasarim-muhendislik.jpg"
                  alt="CBIT Neden Biz"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/hero.png";
                  }}
                />
                <div className="image-overlay-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEKTÖREL DENEYİM */}
      <section className="section-global bg-light">
        <div className="global-container" style={{ display: "block" }}>
          <div className="text-center">
            <span className="why-us-subtitle">{t.anasayfa.sektorler.eyebrow}</span>
            <h2 className="section-title" style={{ borderLeft: "none", textAlign: "center" }}>
              {t.anasayfa.sektorler.baslik}
            </h2>
          </div>

          <div className="sectors-flex justify-center mt-large">
            {t.anasayfa.sektorler.liste.map((sektor, idx) => {
              const IconComp = sectorIcons[idx] || Building;
              return (
                <div key={idx} className="sector-tag">
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <IconComp size={18} />
                    {sektor}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CEVAHİR GRUBU GÜVENCESİ (1959'DAN BUGÜNE) */}
      <section className="section-global">
        <div className="global-container">
          <div className="global-text-side">
            <span className="why-us-subtitle">
              {t.anasayfa.cevahirTrust.eyebrow}
            </span>
            <h2 className="section-title">{t.anasayfa.cevahirTrust.baslik}</h2>
            <p className="section-lead">{t.anasayfa.cevahirTrust.aciklama}</p>

            <div className="stats-grid four-col mt-large">
              {t.anasayfa.cevahirTrust.stats.map((st, idx) => {
                const IconComp = cevahirIcons[idx] || Building2;
                return (
                  <div key={idx} className="stat-card">
                    <div style={{ marginBottom: "12px", color: "#eb1c23" }}>
                      <IconComp size={28} />
                    </div>
                    <span className="stat-card-value">{st.deger}</span>
                    <span className="stat-card-desc">{st.etiket}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-large">
              <Link to="/hakkimizda" className="btn-secondary">
                {t.anasayfa.cevahirTrust.btnText} &nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EKOSİSTEM / İŞ ORTAKLARIMIZ */}
      <section className="section-global bg-light">
        <div className="global-container" style={{ display: "block" }}>
          <div className="text-center">
            <span className="why-us-subtitle">{t.anasayfa.isOrtaklari.eyebrow}</span>
            <h2
              className="section-title"
              style={{ borderLeft: "none", textAlign: "center" }}
            >
              {t.anasayfa.isOrtaklari.baslik}
            </h2>
            <p className="section-lead max-width-text">
              {t.anasayfa.isOrtaklari.aciklama}
            </p>
          </div>

          <div className="partners-roles-wrap">
            {t.anasayfa.isOrtaklari.roller.map((rol, idx) => (
              <div key={idx} className="partner-role-badge">
                {rol}
              </div>
            ))}
          </div>

          <div className="text-center mt-large">
            <Link to="/iletisim" className="btn-primary">
              {t.anasayfa.isOrtaklari.btnText} &nbsp;→
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CTA BANDI */}
      <section className="section-global">
        <div className="global-container" style={{ display: "block" }}>
          <div className="cta-banner-cbit">
            <h2>{t.anasayfa.ctaBand.baslik}</h2>
            <p>{t.anasayfa.ctaBand.aciklama}</p>
            <div className="cta-banner-actions">
              <Link to="/iletisim" className="btn-primary">
                {t.anasayfa.ctaBand.btnTeklif}
              </Link>
              <Link to="/cozumler" className="btn-outline">
                {t.anasayfa.ctaBand.btnCozumler}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
