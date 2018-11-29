/**
 * プロジェクトインターフェース
 */
export interface IProject {
    id: string;
    alternateName?: string;
    description: string;
    email: string;
    name: string;
    telephone: string;
    typeOf: 'Project';
}
