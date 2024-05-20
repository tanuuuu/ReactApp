
import Power from "../Interactormodels/Power";

const latestPower = new Power()


const PlusStepClicked = (side, stepSize) => {
    console.log("PlusStepClicked")
    console.log('step:',stepSize)
    // Define variables
    let listener;
    let newSph = latestPower.getSph() + stepSize;
    
    // Update lastClickedStep
    let lastClickedStep = -1 * stepSize;
    latestPower.setSph(newSph);
    console.log('latestpower:',latestPower.getSph())
    
    
    // Determine listener based on the new sph value
    // if (newSph > 0)
    //    // listener = addOnPlusListener;
    // else
    //    // listener = addOnMinusListener;

    // Check if the new sph value is within the sphere validation range

    // if (validateSphere(newSph)) {
    //     if (latestPower.isAddOnAdded()) {
    //         // Show add-on popup
    //         mView.showAddOnPopup(newSph, false, listener);
    //     } else {
    //         // Update sph and apply power
    //         latestPower.setSph(newSph);
    //         mSpectoInteractor.applyPower(latestPower);
    //     }
    // } else {
    //     if (latestPower.isAddOnAdded()) {
    //         // Check if the new sph value is within the higher validation range
    //         if (validateHigher(newSph)) {
    //             // Update sph and apply power
    //             latestPower.setSph(newSph);
    //             mSpectoInteractor.applyPower(latestPower);
    //         } else {
    //             // Log value beyond range
    //             console.log("Value beyond range");
    //         }
    //     } else {
    //         // Show add-on popup
    //         mView.showAddOnPopup(newSph, true, listener);
    //     }
    // }
   
};

export default PlusStepClicked;