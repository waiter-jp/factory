import { IRule } from './rule';

export type IRuleInSet = Pick<
    IRule,
    'aggregationUnitInSeconds' | 'availableHoursSpecifications' | 'client' | 'scope' | 'threshold' | 'unavailableHoursSpecifications'
>;
export interface IRuleSet {
    identifier: string;
    hasRule: IRuleInSet[];
}
/**
 * プロジェクト
 */
export interface IProject {
    id: string;
    hasRuleSet: IRuleSet[];
}
