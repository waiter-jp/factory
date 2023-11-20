import { IRuleSet } from './ruleSet';

/**
 * プロジェクト
 */
export interface IProject {
    id: string;
    hasRuleSet: IRuleSet[];
}
