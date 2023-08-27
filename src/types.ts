export type ReviewScore = {
    視覚過敏: number | null;
    聴覚過敏: number | null;
    嗅覚過敏: number | null;
    味覚過敏: number | null;
    触覚過敏: number | null;
};

export type Review = {
    投稿者名: string;
    点数: ReviewScore;
    内容: string;
};

export type SensitivityFlags = {
    視覚過敏: boolean;
    聴覚過敏: boolean;
    嗅覚過敏: boolean;
    味覚過敏: boolean;
    触覚過敏: boolean;
  }

export type Event = {
    市区町村名: string;
    イベント名: string;
    イベント名_カナ: string;
    イベント名_英語: string;
    カテゴリー: string;
    開始日: string;
    終了日: string;
    開始時間: string;
    終了時間: string;
    開始日時特記事項: string;
    説明: string;
    料金_基本: string;
    料金_詳細: string;
    連絡先名称: string;
    連絡先電話番号: string;
    主催者: string;
    場所名称: string;
    住所: string;
    緯度: number;
    経度: number;
    アクセス方法: string;
    駐車場情報: string;
    定員: string;
    参加申込終了日: string;
    参加申込終了時間: string;
    参加申込方法: string;
    URL: string;
    備考: string;
    郵便番号: string;
    共催協力: string;
    参加条件_詳細: string;
    駐車場_有無: number;
    託児所_有無: number;
    託児所_詳細: string;
    画像: string;
    画像_ライセンス: string;
    画像_詳細: string;
    最終確認日: string;
    口コミ: Review[];
    感覚過敏: SensitivityFlags;
    id: number;
};
