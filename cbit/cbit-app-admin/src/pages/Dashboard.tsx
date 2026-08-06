import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function Dashboard() {
  const [stats, setStats] = useState({ newsCount: 0, messagesCount: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.haberler.list(), api.messages.list()])
      .then(([news, messages]) => {
        setStats({
          newsCount: news ? news.length : 0,
          messagesCount: messages ? messages.length : 0,
        });
      })
      .catch((err) => console.error("Stats error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">CBIT Yönetim Paneli</h1>
          <p className="page-subtitle">CBIT projesi haberlerini ve gelen iletişim mesajlarını buradan yönetebilirsiniz.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Toplam Haber</span>
          <span className="stat-value">{loading ? "..." : stats.newsCount}</span>
          <span className="stat-desc">Yayınlanmış haberler ve duyurular</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Toplam Mesaj</span>
          <span className="stat-value">{loading ? "..." : stats.messagesCount}</span>
          <span className="stat-desc">İletişim formundan gelen mesajlar</span>
        </div>
      </div>

      <div className="card-table-wrap" style={{ marginTop: "40px", padding: "30px" }}>
        <h3 style={{ marginBottom: "15px", fontFamily: "var(--font-display)" }}>Hızlı Başlangıç</h3>
        <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
          Sol taraftaki menüyü kullanarak haberlerinizi ekleyebilir, güncelleyebilir veya silebilir; gelen iletişim mesajlarını inceleyebilirsiniz.
          Eklediğiniz tüm içerikler eşzamanlı olarak kullanıcıların gördüğü ana web sayfasında listelenecektir.
        </p>
      </div>
    </div>
  );
}
