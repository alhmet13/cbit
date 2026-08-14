import { useLanguage } from "../context/useLanguage";

export default function IsOrtaklari() {
  const { t } = useLanguage();

  return (
    <div className="partners-page">
      {/* HERO SECTION */}
      <section className="about-hero" style={{ paddingBottom: "48px" }}>
        <div className="about-hero-overlay" style={{ background: "none" }}>
          <div className="global-container" style={{ display: "block" }}>
            <div className="about-hero-content" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
              <h1 className="about-hero-title" style={{ 
                color: "#FAFAFA", 
                fontSize: "3rem", 
                fontWeight: "800", 
                marginTop: "12px",
                textShadow: "0 2px 8px rgba(255, 215, 0, 0.4)" 
              }}>
                {(t as any).isOrtaklariSayfasi.hero.baslik}
              </h1>
              <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "16px" }}>
                <span style={{ 
                  color: "#CBD5E1", /* Açık Gri */
                  fontSize: "1.25rem", 
                  lineHeight: "1.6",
                  textAlign: "center",
                  textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)" 
                }}>
                  {(t as any).isOrtaklariSayfasi.hero.lead}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS GRID SECTION */}
      <section className="section-global bg-light">
        <div className="global-container" style={{ display: "block" }}>
          <div className="partners-grid" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "32px" 
          }}>
            {(t as any).isOrtaklariSayfasi.kategoriler.map((kategori: any, idx: number) => (
              <div key={idx} className="partner-category-column" style={{
                background: "#222222",
                padding: "32px 24px",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.04)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.01)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <h3 className="category-title" style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#FAFAFA",
                  marginBottom: "24px",
                  textAlign: "center",
                  borderBottom: "2px solid #AC0000",
                  paddingBottom: "12px",
                  width: "100%"
                }}>
                  {kategori.baslik}
                </h3>
                
                <div className="logos-container" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  width: "100%"
                }}>
                  {kategori.logos.map((logo: string, logoIdx: number) => (
                    <div key={logoIdx} className="logo-card" style={{
                      background: "#1A1A1A",
                      padding: "24px",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,0.03)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    >
                      <img 
                        src={`/partners/${logo}`} 
                        alt={`${kategori.baslik} Partner`} 
                        style={{
                          maxWidth: "100%",
                          maxHeight: "60px",
                          objectFit: "contain",
                          opacity: 0.85,
                          transition: "opacity 0.3s"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0.85";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
