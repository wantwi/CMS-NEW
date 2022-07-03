// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import AdultClassReducer from "../features/setups/adulClassSlice"
import OperationSetup from "../features/setups/operationSetupSlice"
import CommitteeSetup from '../features/setups/committeeSetupSlice'
import ContributionSetup from '../features/setups/contributionSetupSlice'

const rootReducer = {
  auth,
  adultclass: AdultClassReducer,
  operationsetup: OperationSetup,
  committeesetup: CommitteeSetup,
  contributionsetup: ContributionSetup,
  navbar,
  layout
}

export default rootReducer
