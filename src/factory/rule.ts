/**
 * サービス休止時間帯インターフェース
 */
export interface IUnavailableHoursSpecification {
    startDate: Date;
    endDate: Date;
}

/**
 * 許可証発行規則インターフェース
 */
export interface IRule {
    project: { id: string };
    /**
     * 規則名称
     */
    name: string;
    /**
     * 規則説明
     */
    description: string;
    /**
     * スコープ
     */
    scope: string;
    /**
     * 許可証数集計単位(秒)
     */
    aggregationUnitInSeconds: number;
    /**
     * 単位時間当たりの許可証数閾値
     */
    threshold: number;
    /**
     * 発行サービスを利用できない時間帯
     */
    unavailableHoursSpecifications: IUnavailableHoursSpecification[];
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    project?: {
        ids?: string[];
    };
}
