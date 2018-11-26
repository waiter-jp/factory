/**
 * 許可証発行単位
 */
export interface IIssueUnit {
    /**
     * 許可証発行単位識別子
     * 発行単位内で整理番号付けを行う
     * スコープ+日時で一意になる想定
     */
    identifier: string;
    /**
     * いつから有効な発行単位か
     * unix timestampe
     */
    validFrom: number;
    /**
     * いつまで有効な発行単位か
     * unix timestampe
     */
    validThrough: number;
    /**
     * 許可証発行リクエスト数
     */
    numberOfRequests: number;
}

/**
 * 許可証インターフェース
 * どういうスコープに対する許可なのか、という情報を持つ。
 * 実際には許可証がjsonwebtokenに変換されて発行されるので、許可証の有効期間に関してはtokenが責任を持つことになる。
 */
export interface IPassport {
    /**
     * プロジェクト
     */
    aud: string;
    /**
     * 許可証のスコープ
     * 発行依頼者が事前に設定する想定
     */
    scope: string;
    /**
     * 発行unixタイムスタンプ
     */
    iat: number;
    /**
     * 期限unixタイムスタンプ
     */
    exp: number;
    /**
     * 許可証発行者
     * @example https://waiter.example.com
     */
    iss: string;
    /**
     * 許可証発行単位名
     * 発行単位内で整理番号付けを行う
     */
    issueUnit: IIssueUnit;
}

export type IEncodedPassport = string;
