import { useLanguage } from '../context/useLanguage';
import { CheckCircle, FileText, TrendingDown, Clock, Globe, Settings, Building2, Server, Cog } from 'lucide-react';

export default function NedenCbit() {
  const { t } = useLanguage();
  const data = t.nedenCbitSayfasi;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle': return <CheckCircle className="neden-icon" />;
      case 'FileText': return <FileText className="neden-icon" />;
      case 'TrendingDown': return <TrendingDown className="neden-icon" />;
      case 'Clock': return <Clock className="neden-icon" />;
      case 'Globe': return <Globe className="neden-icon" />;
      case 'Settings': return <Settings className="neden-icon" />;
      default: return <CheckCircle className="neden-icon" />;
    }
  };

  const getDegerIcon = (index: number) => {
    switch (index) {
        case 0: return <Building2 className="deger-icon" />;
        case 1: return <Cog className="deger-icon" />;
        case 2: return <Server className="deger-icon" />;
        default: return <Building2 className="deger-icon" />;
    }
  }

  return (
    <div className="page-container neden-cbit-page">
      {/* 1. Hero Bölümü */}
      <section className="neden-hero-section">
        <div className="neden-hero-inner">
          <h1 className="neden-hero-title">{data.hero.baslik}</h1>
          <p className="neden-hero-subtitle">{data.hero.altBaslik}</p>
        </div>
      </section>

      {/* 2. Değer Önerisi (3'lü Kart Izgarası) */}
      <section className="neden-deger-section">
        <div className="neden-deger-grid">
          {data.degerOnerisi.map((item: any, idx: number) => (
            <div key={idx} className="neden-deger-card">
              <div className="deger-icon-wrapper">
                 {getDegerIcon(idx)}
              </div>
              <h3 className="deger-card-title">{item.baslik}</h3>
              <p className="deger-card-desc">{item.tanim}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Fark Yaratan Yaklaşımlarımız (6'lı Resimli Izgara) */}
      <section className="neden-fark-section">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>{data.farkYaratanYaklasimlarimiz.baslik}</h2>
        <div className="neden-fark-grid">
          {data.farkYaratanYaklasimlarimiz.maddeler.map((item: any, idx: number) => (
            <div key={idx} className="neden-fark-card">
               <div className="fark-card-icon-wrapper">
                  {getIcon(item.icon)}
               </div>
              <h4 className="fark-card-title">{item.baslik}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
