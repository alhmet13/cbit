import {
  Compass,
  Target,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function Hakkimizda() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero" style={{ paddingBottom: "0px" }}>
        <div className="about-hero-overlay" style={{ background: "none" }}>
          <div className="global-container" style={{ display: "block" }}>
            <div className="about-hero-content" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
              <div className="hero-eyebrow" style={{ color: "#eb1c23" }}>{t.hakkimizda.hero.eyebrow}</div>
              <h1 className="about-hero-title" style={{ color: "#111111", fontSize: "3rem", fontWeight: "800", marginTop: "12px" }}>
                {t.hakkimizda.hero.baslik}
              </h1>
              <p className="about-hero-lead" style={{ color: "#475569", fontSize: "1.25rem", marginTop: "16px", lineHeight: "1.6" }}>
                {t.hakkimizda.hero.lead}
              </p>
            </div>

            {/* Heritage Timeline Image */}
            <div
              className="about-hero-image-wrap"
              style={{
                marginTop: "48px",
                textAlign: "center",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <img
                src="/heritage-timeline-1.png"
                alt="Cevahir Mirası Zaman Tüneli"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "550px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BİZ KİMİZ (1959'dan Bugüne) */}
      <section className="section-global">
        <div className="global-container">
          <div className="about-bizkimiz-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div className="about-bizkimiz-content">
              <div className="section-eyebrow" style={{ color: "#eb1c23", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {t.hakkimizda.bizKimiz.eyebrow}
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: "800", marginTop: "12px", lineHeight: "1.3" }}>
                {t.hakkimizda.bizKimiz.baslik}
              </h2>
              <p className="section-description" style={{ marginTop: "24px", fontSize: "1.05rem", color: "#475569", lineHeight: "1.8" }}>
                {t.hakkimizda.bizKimiz.aciklama}
              </p>
            </div>
            <div
              className="about-bizkimiz-image-wrap"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <img
                src="/end-to-end-expertise.png"
                alt="Uçtan Uca Uzmanlık"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. RAKAMLARLA CEVAHİR */}
      <section className="section-global bg-light">
        <div className="global-container" style={{ display: "block" }}>
          <div className="section-header-center" style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">{t.hakkimizda.rakamlarlaCevahir.baslik}</h2>
          </div>

          <div className="stats-grid four-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {t.hakkimizda.rakamlarlaCevahir.stats.map((st: any, idx: number) => (
              <div
                key={idx}
                className="stat-card"
                style={{
                  background: "#fdfdfd",
                  padding: "32px 24px",
                  borderRadius: "16px",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.01)",
                }}
              >
                <div
                  className="stat-number"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "#eb1c23",
                    lineHeight: "1.1",
                  }}
                >
                  {st.deger}
                </div>
                <div
                  className="stat-label"
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    color: "#64748b",
                    marginTop: "12px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {st.baslik}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VİZYON, MİSYON VE DEĞERLERİMİZ */}
      <section className="section-global">
        <div className="global-container" style={{ display: "block" }}>
          <div className="section-header-center" style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-eyebrow" style={{ color: "#eb1c23" }}>{t.hakkimizda.vizyonMisyon.eyebrow}</div>
            <h2 className="section-title">{t.hakkimizda.vizyonMisyon.baslik}</h2>
          </div>

          <div className="grid-layout two-col gap-medium" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Vizyon Kartı */}
            <div className="card vision-card" style={{ padding: "40px", borderRadius: "20px", borderTop: "4px solid #3b82f6" }}>
              <div className="card-icon-header" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div className="icon-badge badge-blue" style={{ background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", padding: "12px", borderRadius: "12px" }}>
                  <Compass size={28} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", margin: "0" }}>{t.hakkimizda.vizyonMisyon.vizyon.baslik}</h3>
              </div>
              <p className="card-body-text" style={{ color: "#475569", lineHeight: "1.7", fontSize: "1.05rem" }}>
                {t.hakkimizda.vizyonMisyon.vizyon.aciklama}
              </p>
            </div>

            {/* Misyon Kartı */}
            <div className="card mission-card" style={{ padding: "40px", borderRadius: "20px", borderTop: "4px solid #eb1c23" }}>
              <div className="card-icon-header" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div className="icon-badge badge-red" style={{ background: "rgba(235, 28, 35, 0.1)", color: "#eb1c23", padding: "12px", borderRadius: "12px" }}>
                  <Target size={28} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", margin: "0" }}>{t.hakkimizda.vizyonMisyon.misyon.baslik}</h3>
              </div>
              <p className="card-body-text" style={{ color: "#475569", lineHeight: "1.7", fontSize: "1.05rem" }}>
                {t.hakkimizda.vizyonMisyon.misyon.aciklama}
              </p>
            </div>
          </div>

          {/* Değerlerimiz */}
          <div className="values-container" style={{ marginTop: "48px", background: "#fdfdfd", padding: "40px", borderRadius: "20px", border: "1px solid rgba(0,0,0,0.04)" }}>
            <h3 className="values-title" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.25rem", fontWeight: "700", color: "#111111", marginBottom: "28px" }}>
              <Sparkles size={20} className="values-title-icon" style={{ color: "#eb1c23" }} />
              {t.hakkimizda.vizyonMisyon.degerler.baslik}
            </h3>
            <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
              {t.hakkimizda.vizyonMisyon.degerler.liste.map((val: string, idx: number) => (
                <div key={idx} className="value-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={18} className="value-check-icon" style={{ color: "#eb1c23", flexShrink: "0" }} />
                  <span style={{ fontSize: "1rem", color: "#334155", fontWeight: "500" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
