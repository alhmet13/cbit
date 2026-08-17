import { Compass, Target } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function Hakkimizda() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero" style={{ paddingBottom: "0px", paddingTop: "60px" }}>
        <div className="about-hero-overlay" style={{ background: "none" }}>
          <div className="global-container" style={{ display: "block" }}>
            <div className="about-hero-header">
              <div className="about-hero-title-wrap">
                <h1 className="about-hero-title" style={{ color: "#ffffff", fontSize: "3rem", fontWeight: "800", margin: "0" }}>
                  {t.hakkimizda.hero.baslik}
                </h1>
              </div>
              <p className="about-hero-lead" style={{ color: "#cbd5e1", fontSize: "1.25rem", margin: "0", lineHeight: "1.6" }}>
                {t.hakkimizda.hero.lead}
              </p>
            </div>

            {/* Heritage Timeline Image */}
            <div
              className="about-hero-image-wrap"
              style={{
                position: "relative",
                marginTop: "32px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
                backgroundColor: "#111111",
              }}
            >
              <div style={{ display: "flex", width: "100%", aspectRatio: "21/9", position: "relative" }}>
                {/* 1960 */}
                <div style={{ flex: 1, backgroundImage: "url(/heritage-timeline-5.jpg?v=1)", backgroundSize: "400% 100%", backgroundPosition: "0% 50%", position: "relative" }}></div>
                {/* 1980 */}
                <div style={{ flex: 1, backgroundImage: "url(/heritage-timeline-5.jpg?v=1)", backgroundSize: "400% 100%", backgroundPosition: "33.333% 50%", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.2)" }}></div>
                {/* 2000 - Exact User Photo */}
                <div style={{ flex: 1, backgroundImage: "url(/cevahir-original.jpg)", backgroundSize: "cover", backgroundPosition: "center", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.2)" }}></div>
                {/* 2020 */}
                <div style={{ flex: 1, backgroundImage: "url(/heritage-timeline-5.jpg?v=1)", backgroundSize: "400% 100%", backgroundPosition: "100% 50%", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.2)" }}></div>
                
                {/* Dark Gradient Overlay to hide AI dates and improve text readability */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)", pointerEvents: "none" }}></div>
                
                {/* Uniform HTML Dates */}
                <div style={{ position: "absolute", bottom: "30px", left: 0, right: 0, display: "flex", pointerEvents: "none" }}>
                   <div style={{ flex: 1, textAlign: "center", color: "white", fontSize: "2.4rem", fontWeight: "bold", letterSpacing: "2px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>1960</div>
                   <div style={{ flex: 1, textAlign: "center", color: "white", fontSize: "2.4rem", fontWeight: "bold", letterSpacing: "2px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>1980</div>
                   <div style={{ flex: 1, textAlign: "center", color: "white", fontSize: "2.4rem", fontWeight: "bold", letterSpacing: "2px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>2000</div>
                   <div style={{ flex: 1, textAlign: "center", color: "white", fontSize: "2.4rem", fontWeight: "bold", letterSpacing: "2px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>2020</div>
                </div>
              </div>
              
              <div className="about-hero-bottom-band">
                <span className="about-hero-pill">{t.hakkimizda.bizKimiz.eyebrow}</span>
                <span style={{ fontSize: "16px", fontWeight: "500" }}>{t.hakkimizda.bizKimiz.baslik}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BİZ KİMİZ (1959'dan Bugüne) */}
      <section className="section-global">
        <div className="global-container">
          <div className="about-bizkimiz-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div className="about-bizkimiz-content">
              <div className="section-eyebrow" style={{ color: "#AC0000", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {t.hakkimizda.bizKimiz.eyebrow}
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: "800", marginTop: "12px", lineHeight: "1.3" }}>
                {t.hakkimizda.bizKimiz.baslik}
              </h2>
              <p className="section-description" style={{ marginTop: "24px", fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.8" }}>
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

      {/* 3. VİZYON & MİSYON */}
      <section className="section-global">
        <div className="global-container" style={{ display: "block" }}>
          <div className="section-header-center" style={{ textAlign: "center", marginBottom: "48px" }}>
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
              <p className="card-body-text" style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "1.05rem" }}>
                {t.hakkimizda.vizyonMisyon.vizyon.aciklama}
              </p>
            </div>

            {/* Misyon Kartı */}
            <div className="card mission-card" style={{ padding: "40px", borderRadius: "20px", borderTop: "4px solid #AC0000" }}>
              <div className="card-icon-header" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div className="icon-badge badge-red" style={{ background: "rgba(172, 0, 0, 0.1)", color: "#AC0000", padding: "12px", borderRadius: "12px" }}>
                  <Target size={28} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", margin: "0" }}>{t.hakkimizda.vizyonMisyon.misyon.baslik}</h3>
              </div>
              <p className="card-body-text" style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "1.05rem" }}>
                {t.hakkimizda.vizyonMisyon.misyon.aciklama}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
