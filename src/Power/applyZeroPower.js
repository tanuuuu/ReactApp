import Power from '../Interactormodels/Power';
import SpectoInteractor from '../Spectointeractor/SpectoInteractor';
//mport SpectoInteractor, {applyPowerZero} from '../Spectointeractor/SpectoInteractor';
import Side from '../constants/Side';




const applyZeroPower = () => {
  // Assuming mView, Power, and Side are already defined elsewhere
  // mView.showProgressDialog("please wait..!"); // Commented out as React Native might not have a direct equivalent for this

  // Create instances of Power for left and right
  const leftZeroPower = new Power();
  const rightZeroPower = new Power();

  // Set properties for leftZeroPower
  leftZeroPower.setSph(0);
  leftZeroPower.setCyl(0);
  leftZeroPower.setAxis(0);
  leftZeroPower.setSide(Side.LEFT);

  // Set properties for rightZeroPower
  rightZeroPower.setSph(0);
  rightZeroPower.setCyl(0);
  rightZeroPower.setAxis(0);
  rightZeroPower.setSide(Side.RIGHT);
  //SpectoInteractor.applyPower()
  SpectoInteractor.applyPowerzero(leftZeroPower,rightZeroPower)

  // Assuming mSpectoInteractor.applyPower is defined elsewhere
  // Apply powers using the mSpectoInteractor

  //mSpectoInteractor.applyPower(rightZeroPower, leftZeroPower);
};

// Export the function for use in other files if needed
export {applyZeroPower};
