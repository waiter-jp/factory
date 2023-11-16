import { IClient } from './client';

/**
 * 規則の所属プロジェクトインターフェース
 */
export interface IProject {
    id: string;
}

/**
 * サービス休止時間帯インターフェース
 */
export interface IOpeningHoursSpecification {
    startDate: Date;
    endDate: Date;
}

/**
 * 許可証発行規則インターフェース
 */
export interface IRule {
    /**
     * プロジェクト
     */
    project: IProject;
    /**
     * スコープ使用想定クライアント
     * 存在しなければクライアントを限定しない
     */
    client?: IClient[];
    /**
     * 規則名称
     */
    // name: string;
    /**
     * 規則説明
     */
    // description: string;
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
     * 発行サービス利用可能期間リスト
     * 値が存在すれば、ポジティブリストとして制限
     */
    availableHoursSpecifications?: IOpeningHoursSpecification[];
    /**
     * 発行サービス利用不可期間リスト
     * 値が存在すれば、ネガティブリストとして制限
     */
    unavailableHoursSpecifications?: IOpeningHoursSpecification[];
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    project?: {
        ids?: string[];
    };
    client?: {
        ids?: string[];
    };
    scopes?: string[];
}
