import { IRule } from './rule';

export type IRuleInSet = Pick<
    IRule,
    'aggregationUnitInSeconds' | 'availableHoursSpecifications' | 'client' | 'scope' | 'threshold' | 'unavailableHoursSpecifications'
>;
/**
 * 規則分類
 */
export interface IRuleSet {
    identifier: string;
    hasRule: IRuleInSet[];
}
export interface ISearchConditions {
    project?: {
        id?: { $eq?: string };
    };
    identifier?: {
        $eq?: string;
    };
}
