import type { Calculator } from '../types';

/** Glasgow Koma Skalası (GKS). */
export const gcs: Calculator = {
  id: 'gcs',
  category: 'neurology',
  shortName: 'GKS',
  name: {
    tr: 'Glasgow Koma Skalası',
    az: 'Qlazqo Koma Şkalası',
    'tr-CY': 'Glasgow Koma Skalası',
  },
  description: {
    tr: 'Bilinç düzeyini göz, sözel ve motor yanıta göre değerlendirir.',
    az: 'Şüur səviyyəsini göz, nitq və motor cavaba görə qiymətləndirir.',
    'tr-CY': 'Bilinç düzeyini göz, sözel ve motor yanıta göre değerlendirir.',
  },
  resultUnit: { tr: 'puan', az: 'bal', 'tr-CY': 'puan' },
  inputs: [
    {
      id: 'eye',
      type: 'single',
      label: { tr: 'Göz açma', az: 'Göz açma', 'tr-CY': 'Göz açma' },
      options: [
        { value: 'e4', points: 4, label: { tr: 'Spontan', az: 'Spontan', 'tr-CY': 'Spontan' } },
        { value: 'e3', points: 3, label: { tr: 'Sese yanıt', az: 'Səsə cavab', 'tr-CY': 'Sese yanıt' } },
        { value: 'e2', points: 2, label: { tr: 'Ağrıya yanıt', az: 'Ağrıya cavab', 'tr-CY': 'Ağrıya yanıt' } },
        { value: 'e1', points: 1, label: { tr: 'Yanıt yok', az: 'Cavab yox', 'tr-CY': 'Yanıt yok' } },
      ],
    },
    {
      id: 'verbal',
      type: 'single',
      label: { tr: 'Sözel yanıt', az: 'Nitq cavabı', 'tr-CY': 'Sözel yanıt' },
      options: [
        { value: 'v5', points: 5, label: { tr: 'Oryante', az: 'Oriyentasiyalı', 'tr-CY': 'Oryante' } },
        { value: 'v4', points: 4, label: { tr: 'Konfüze', az: 'Çaşqın', 'tr-CY': 'Konfüze' } },
        { value: 'v3', points: 3, label: { tr: 'Uygunsuz kelimeler', az: 'Uyğunsuz sözlər', 'tr-CY': 'Uygunsuz kelimeler' } },
        { value: 'v2', points: 2, label: { tr: 'Anlaşılmaz sesler', az: 'Anlaşılmaz səslər', 'tr-CY': 'Anlaşılmaz sesler' } },
        { value: 'v1', points: 1, label: { tr: 'Yanıt yok', az: 'Cavab yox', 'tr-CY': 'Yanıt yok' } },
      ],
    },
    {
      id: 'motor',
      type: 'single',
      label: { tr: 'Motor yanıt', az: 'Motor cavabı', 'tr-CY': 'Motor yanıt' },
      options: [
        { value: 'm6', points: 6, label: { tr: 'Emirlere uyar', az: 'Əmrlərə tabe olur', 'tr-CY': 'Emirlere uyar' } },
        { value: 'm5', points: 5, label: { tr: 'Ağrıyı lokalize eder', az: 'Ağrını lokalizə edir', 'tr-CY': 'Ağrıyı lokalize eder' } },
        { value: 'm4', points: 4, label: { tr: 'Ağrıdan çekilme', az: 'Ağrıdan çəkilmə', 'tr-CY': 'Ağrıdan çekilme' } },
        { value: 'm3', points: 3, label: { tr: 'Anormal fleksiyon', az: 'Anormal fleksiya', 'tr-CY': 'Anormal fleksiyon' } },
        { value: 'm2', points: 2, label: { tr: 'Ekstansiyon', az: 'Ekstensiya', 'tr-CY': 'Ekstansiyon' } },
        { value: 'm1', points: 1, label: { tr: 'Yanıt yok', az: 'Cavab yox', 'tr-CY': 'Yanıt yok' } },
      ],
    },
  ],
  bands: [
    {
      min: 13,
      max: 15,
      severity: 'low',
      label: { tr: 'Hafif', az: 'Yüngül', 'tr-CY': 'Hafif' },
      detail: {
        tr: 'Hafif beyin hasarı (GKS 13–15).',
        az: 'Yüngül beyin zədəsi (GKS 13–15).',
        'tr-CY': 'Hafif beyin hasarı (GKS 13–15).',
      },
    },
    {
      min: 9,
      max: 12,
      severity: 'moderate',
      label: { tr: 'Orta', az: 'Orta', 'tr-CY': 'Orta' },
      detail: {
        tr: 'Orta düzey beyin hasarı (GKS 9–12).',
        az: 'Orta dərəcəli beyin zədəsi (GKS 9–12).',
        'tr-CY': 'Orta düzey beyin hasarı (GKS 9–12).',
      },
    },
    {
      min: 3,
      max: 8,
      severity: 'critical',
      label: { tr: 'Ağır', az: 'Ağır', 'tr-CY': 'Ağır' },
      detail: {
        tr: 'Ağır beyin hasarı (GKS ≤ 8); hava yolu güvenliği değerlendirilmeli.',
        az: 'Ağır beyin zədəsi (GKS ≤ 8); hava yolunun təhlükəsizliyi qiymətləndirilməlidir.',
        'tr-CY': 'Ağır beyin hasarı (GKS ≤ 8); hava yolu güvenliği değerlendirilmeli.',
      },
    },
  ],
  references: [
    'Teasdale G, Jennett B. Assessment of coma and impaired consciousness. Lancet. 1974.',
  ],
};
