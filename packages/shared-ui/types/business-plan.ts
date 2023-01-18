import { RichTextContent } from '@graphcms/rich-text-types'

export interface WorkState {
    [key: string]: LandCost | Renovations | BusinessPlan
}

export type BusinessPlanAction =
    | {
          type: BusinessPlanActionType.Load
          option: string
          payload: WorkState
      }
    | {
          type: BusinessPlanActionType.UpdateLandCost
          payload: {
              area?: number
              price?: number
              funding?: Array<{ funderName: string; amount: number | '' }>
          }
      }
    | {
          type: BusinessPlanActionType.UpdateRenovations
          payload: Renovations
      }
    | {
          type: BusinessPlanActionType.UpdateBusinessPlan
          option: string
          planSection: 'capitalCosts' | 'runningCosts' | 'cashFlow'
          payload: CapitalCosts | RunningCosts | CashFlow
      }

export interface FourYearCosts {
    year1: number | ''
    year2: number | ''
    year3: number | ''
    year4: number | ''
}

export interface LandCost {
    area: number | 0
    price: number | 0
    funding: Array<{ funderName: string; amount: number | '' }>
}

export interface Renovations {
    costs: Array<{ details: string; cost: number | '' }>
    funding: Array<{ funderName: string; amount: number | '' }>
}

export interface CapitalCosts {
    costs: Array<{ details: string; cost: number | '' }>
    funding: Array<{ funderName: string; amount: number | '' }>
}

export interface RunningCosts {
    costs: Array<{ details: string } & FourYearCosts>
    incomes: Array<{ details: string } & FourYearCosts>
}

export interface CashFlow {
    income: FourYearCosts
    costs: FourYearCosts
    balance: FourYearCosts
}
export interface BusinessPlan {
    capitalCosts: CapitalCosts
    runningCosts: RunningCosts
    cashFlow: CashFlow
}

export enum BusinessPlanActionType {
    Load,
    UpdateLandCost,
    UpdateRenovations,
    UpdateBusinessPlan,
}

export interface SectionProps {
    devOption: {
        option: string
        display_name: string
    }
    workState: WorkState
    workDispatch?: React.Dispatch<BusinessPlanAction>
    docSubmitted: boolean
    questionText?: { raw: RichTextContent }
}
