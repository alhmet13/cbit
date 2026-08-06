export interface Haber {
  id: string;
  haberAdi: string;
  haberAdiEn?: string | null;
  haberDetayi: string;
  haberDetayiEn?: string | null;
  haberResmi: string;
  createdAt: string;
}

export interface Message {
  id: string;
  adSoyad: string;
  eposta: string;
  konu: string;
  mesaj: string;
  createdAt: string;
}
