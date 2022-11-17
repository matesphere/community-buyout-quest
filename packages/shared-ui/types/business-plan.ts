import { RichTextContent } from '@graphcms/rich-text-types'

export interface WorkState {
    [key: string]: LandCost | BusinessPlan
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
              area?: number | ''
              price?: number | ''
              funder?: string
              amountOfFunding?: number | ''
          }
      }
    | {
          type: BusinessPlanActionType.UpdateBusinessPlan
          option: string
          planSection: 'capitalCosts' | 'runningCosts' | 'cashFlow'
          payload: CapitalCosts | RunningCosts | CashFlow
      }

interface FourYearCosts {
    year1: number | ''
    year2: number | ''
    year3: number | ''
    year4: number | ''
}

export interface LandCost {
    area: number | ''
    price: number | ''
    funder: string
    amountOfFunding: number | ''
}

export interface CapitalCosts {
    costs: Array<{ details: string; cost: number | '' }>
    funding: Array<{ funderName: string; amount: number | '' }>
}

export interface RunningCosts {
    costs: Array<{ details: string } & FourYearCosts>
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
