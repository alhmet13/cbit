import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  Cpu,
  Globe2,
  Hotel,
  Landmark,
  Layers,
  Server,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { useLanguage } from "../context/useLanguage";

const sectorIconMap = [
  Layers,      // Baraj
  Server,      // Veri Merkezi
  Building,    // AVM
  Landmark,    // Hastane
  Cpu,         // Teknoloji Kampüsü
  Hotel,       // Turizm
];

const companyIconMap = [
  Building2,   // İnşaat
  Cpu,         // Teknoloji
  Zap,         // Enerji
  Hotel,       // Turizm
];

export default function Hakkimizda() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="global-container">
            <div className="about-hero-content">
              <div className="hero-eyebrow">{t.hakkimizda.hero.eyebrow}</div>
              <h1 className="about-hero-title">{t.hakkimizda.hero.baslik}</h1>
              <p className="about-hero-lead">{t.hakkimizda.hero.lead}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BİZ KİMİZ */}
      <section className="section-global bg-light">
        <div className="global-container">
          <div className="about-bizkimiz-grid">
            <div className="about-bizkimiz-content">
              <div className="section-eyebrow">{t.hakkimizda.bizKimiz.eyebrow}</div>
              <h2 className="section-title">{t.hakkimizda.bizKimiz.baslik}</h2>
              <p className="section-description">{t.hakkimizda.bizKimiz.aciklama}</p>
            </div>
            <div className="about-stats-column">
              {t.hakkimizda.bizKimiz.stats.map((st, idx) => (
                <div
                  key={idx}
                  className={`about-stat-box ${st.isRed ? "stat-highlight-red" : ""}`}
                >
                  <div className="about-stat-number">{st.deger}</div>
                  <div className="about-stat-label">{st.baslik}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VİZYON, MİSYON VE DEĞERLERİMİZ */}
      <section className="section-global">
        <div className="global-container">
          <div className="section-header-center">
            <div className="section-eyebrow">{t.hakkimizda.vizyonMisyon.eyebrow}</div>
            <h2 className="section-title">{t.hakkimizda.vizyonMisyon.baslik}</h2>
          </div>

          <div className="grid-layout two-col gap-medium mt-large">
            {/* Vizyon Kartı */}
            <div className="card vision-card">
              <div className="card-icon-header">
                <div className="icon-badge badge-blue">
                  <Compass size={28} />
                </div>
                <h3>{t.hakkimizda.vizyonMisyon.vizyon.baslik}</h3>
              </div>
              <p className="card-body-text">
                {t.hakkimizda.vizyonMisyon.vizyon.aciklama}
              </p>
            </div>

            {/* Misyon Kartı */}
            <div className="card mission-card">
              <div className="card-icon-header">
                <div className="icon-badge badge-red">
                  <Target size={28} />
                </div>
                <h3>{t.hakkimizda.vizyonMisyon.misyon.baslik}</h3>
              </div>
              <p className="card-body-text">
                {t.hakkimizda.vizyonMisyon.misyon.aciklama}
              </p>
            </div>
          </div>

          {/* Değerlerimiz */}
          <div className="values-container mt-large">
            <h3 className="values-title">
              <Sparkles size={20} className="values-title-icon" />
              {t.hakkimizda.vizyonMisyon.degerler.baslik}
            </h3>
            <div className="values-grid">
              {t.hakkimizda.vizyonMisyon.degerler.liste.map((val, idx) => (
                <div key={idx} className="value-item">
                  <CheckCircle2 size={18} className="value-check-icon" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CEVAHİR GRUBU HAKKINDA & SEKTÖRLER */}
      <section className="section-global bg-light">
        <div className="global-container">
          <div className="section-header-center">
            <div className="section-eyebrow">{t.hakkimizda.cevahirGrup.eyebrow}</div>
            <h2 className="section-title">{t.hakkimizda.cevahirGrup.baslik}</h2>
            <p className="section-description max-w-700">
              {t.hakkimizda.cevahirGrup.aciklama}
            </p>
            <div className="countries-badge mt-small">
              <Globe2 size={16} />
              <span>{t.hakkimizda.cevahirGrup.ulkelerNotu}</span>
            </div>
          </div>

          {/* 4 Stats Grid */}
          <div className="stats-grid four-col mt-large">
            {t.hakkimizda.cevahirGrup.stats.map((st, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{st.deger}</div>
                <div className="stat-label">{st.baslik}</div>
              </div>
            ))}
          </div>

          {/* Faaliyet Sektörleri */}
          <div className="sectors-grid mt-large">
            {t.hakkimizda.cevahirGrup.sektorler.map((sek, idx) => {
              const IconComp = sectorIconMap[idx] || Building2;
              return (
                <div key={idx} className="sector-tile">
                  <div className="sector-icon-wrapper">
                    <IconComp size={24} />
                  </div>
                  <span className="sector-name">{sek.baslik}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CEVAHİR GRUBU TARİHÇESİ (TIMELINE) */}
      <section className="section-global">
        <div className="global-container">
          <div className="section-header-center">
            <div className="section-eyebrow">{t.hakkimizda.tarihce.eyebrow}</div>
            <h2 className="section-title">{t.hakkimizda.tarihce.baslik}</h2>
          </div>

          <div className="timeline-wrapper mt-large">
            <div className="timeline-line" />
            <div className="timeline-grid">
              {t.hakkimizda.tarihce.liste.map((item, idx) => (
                <div key={idx} className="timeline-card">
                  <div className="timeline-year-badge">
                    <Calendar size={14} />
                    <span>{item.yil}</span>
                  </div>
                  <h4 className="timeline-item-title">{item.baslik}</h4>
                  <p className="timeline-item-desc">{item.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERİ MERKEZİ ÖLÇEĞİMİZ (DARK ACCENT) */}
      <section className="section-global dc-scale-section">
        <div className="global-container">
          <div className="section-header-center text-white">
            <div className="hero-eyebrow text-red-light">
              {t.hakkimizda.veriMerkeziOlcek.eyebrow}
            </div>
            <h2 className="section-title text-white">
              {t.hakkimizda.veriMerkeziOlcek.baslik}
            </h2>
          </div>

          <div className="grid-layout three-col gap-medium mt-large">
            {t.hakkimizda.veriMerkeziOlcek.stats.map((st, idx) => (
              <div key={idx} className="dc-scale-card">
                <div className="dc-scale-val">
                  <span className="dc-number">{st.deger}</span>
                  {st.birim && <span className="dc-unit"> {st.birim}</span>}
                </div>
                <div className="dc-scale-label">{st.baslik}</div>
              </div>
            ))}
          </div>

          <div className="quote-box mt-large">
            <p>{t.hakkimizda.veriMerkeziOlcek.alinti}</p>
          </div>
        </div>
      </section>

      {/* 7. GRUP ŞİRKETLERİMİZ */}
      <section className="section-global bg-light">
        <div className="global-container">
          <div className="section-header-center">
            <div className="section-eyebrow">{t.hakkimizda.grupSirketleri.eyebrow}</div>
            <h2 className="section-title">{t.hakkimizda.grupSirketleri.baslik}</h2>
          </div>

          <div className="grid-layout four-col gap-medium mt-large">
            {t.hakkimizda.grupSirketleri.liste.map((sirket, idx) => {
              const IconComp = companyIconMap[idx] || Building2;
              return (
                <div
                  key={idx}
                  className={`card company-card ${
                    sirket.featured ? "company-card-featured" : ""
                  }`}
                >
                  {sirket.featured && (
                    <div className="featured-tag">CBIT & CDC</div>
                  )}
                  <div className="company-icon-circle">
                    <IconComp size={26} />
                  </div>
                  <h3 className="company-title">{sirket.baslik}</h3>
                  <p className="company-desc">{sirket.aciklama}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA BANDI */}
      <section className="section-global cta-band-section">
        <div className="global-container">
          <div className="cta-band-card">
            <div className="cta-band-content">
              <h2>{t.hakkimizda.cta.baslik}</h2>
              <p>{t.hakkimizda.cta.aciklama}</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/iletisim" className="btn-primary">
                {t.hakkimizda.cta.btnIletisim}
                <ArrowRight size={18} />
              </Link>
              <Link to="/cozumler" className="btn-secondary">
                {t.hakkimizda.cta.btnCozumler}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
