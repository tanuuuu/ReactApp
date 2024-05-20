import CalibrationData from "../Interactormodels/CalibrationData";
import Side from "../constants/Side";

// const rightCalibrationData = new CalibrationData(
    
//     rightCalibrationData.setSide(0),


//         rightCalibrationData.setAlpha0(-0.0148333921216046),
//         rightCalibrationData.setAlpha1(0),
//         rightCalibrationData.setAlpha2(0),

//         rightCalibrationData.setBeta0(1.3044560556876),
//         rightCalibrationData.setBeta1(0),
//         rightCalibrationData.setBeta2(0),

//         rightCalibrationData.setGamma0(0.000206489053517399),
//         rightCalibrationData.setGamma1(0),
//         rightCalibrationData.setGamma2(0),

//         rightCalibrationData.setaAstig0(0.654983463196288),
//         rightCalibrationData.setaAstig1(0),
//         rightCalibrationData.setaAstig2(0),

//         rightCalibrationData.setEpsilon0(0.0171896689876217),
//         rightCalibrationData.setEpsilon1(0),
//         rightCalibrationData.setEpsilon2(0),

//         rightCalibrationData.setV00(50.5215),
//         rightCalibrationData.setV01(0.0),
//         rightCalibrationData.setV02(0.0),

//         rightCalibrationData.setCylinder0D0(0),
//         rightCalibrationData.setCylinder0D1(0),
//         rightCalibrationData.setCylinder0D2(0),

//         rightCalibrationData.setAxis0D0(0),
//         rightCalibrationData.setAxis0D1(0),
//         rightCalibrationData.setAxis0D2(0),

//         rightCalibrationData.setTcalib(25),

// )




// export { rightCalibrationData};

const  getMockCalibDataRight = () => {
    const rightCalibrationData = new CalibrationData();
    rightCalibrationData.setSide(Side.RIGHT);


        rightCalibrationData.setAlpha0(-0.0148333921216046);
        rightCalibrationData.setAlpha1(0);
        rightCalibrationData.setAlpha2(0);

        rightCalibrationData.setBeta0(1.3044560556876);
        rightCalibrationData.setBeta1(0);
        rightCalibrationData.setBeta2(0);

        rightCalibrationData.setGamma0(0.000206489053517399);
        rightCalibrationData.setGamma1(0);
        rightCalibrationData.setGamma2(0);

        rightCalibrationData.setaAstig0(0.654983463196288);
        rightCalibrationData.setaAstig1(0);
        rightCalibrationData.setaAstig2(0);

        rightCalibrationData.setEpsilon0(0.0171896689876217);
        rightCalibrationData.setEpsilon1(0);
        rightCalibrationData.setEpsilon2(0);

        rightCalibrationData.setV00(50.5215);
        rightCalibrationData.setV01(0.0);
        rightCalibrationData.setV02(0.0);

        rightCalibrationData.setCylinder0D0(0);
        rightCalibrationData.setCylinder0D1(0);
        rightCalibrationData.setCylinder0D2(0);

        rightCalibrationData.setAxis0D0(0);
        rightCalibrationData.setAxis0D1(0);
        rightCalibrationData.setAxis0D2(0);

        rightCalibrationData.setTcalib(25);
    // Call other setter methods as needed...
    return rightCalibrationData;

}

// function getMockCalibData() {
//     const rightCalibrationData = new CalibrationData();
//     rightCalibrationData.setSide(Side.RIGHT);


//         rightCalibrationData.setAlpha0(-0.0148333921216046);
//         rightCalibrationData.setAlpha1(0);
//         rightCalibrationData.setAlpha2(0);

//         rightCalibrationData.setBeta0(1.3044560556876);
//         rightCalibrationData.setBeta1(0);
//         rightCalibrationData.setBeta2(0);

//         rightCalibrationData.setGamma0(0.000206489053517399);
//         rightCalibrationData.setGamma1(0);
//         rightCalibrationData.setGamma2(0);

//         rightCalibrationData.setaAstig0(0.654983463196288);
//         rightCalibrationData.setaAstig1(0);
//         rightCalibrationData.setaAstig2(0);

//         rightCalibrationData.setEpsilon0(0.0171896689876217);
//         rightCalibrationData.setEpsilon1(0);
//         rightCalibrationData.setEpsilon2(0);

//         rightCalibrationData.setV00(50.5215);
//         rightCalibrationData.setV01(0.0);
//         rightCalibrationData.setV02(0.0);

//         rightCalibrationData.setCylinder0D0(0);
//         rightCalibrationData.setCylinder0D1(0);
//         rightCalibrationData.setCylinder0D2(0);

//         rightCalibrationData.setAxis0D0(0);
//         rightCalibrationData.setAxis0D1(0);
//         rightCalibrationData.setAxis0D2(0);

//         rightCalibrationData.setTcalib(25);
//     // Call other setter methods as needed...
//     return rightCalibrationData;
// }


const  getMockCalibDataLeft = () => {
    const leftCalibrationData = new CalibrationData();
    
        leftCalibrationData.setSide(Side.LEFT);


        leftCalibrationData.setAlpha0(-0.0146908915234943);
        leftCalibrationData.setAlpha1(0);
        leftCalibrationData.setAlpha2(0);

        leftCalibrationData.setBeta0(1.20670975114037);
        leftCalibrationData.setBeta1(0);
        leftCalibrationData.setBeta2(0);

        leftCalibrationData.setGamma0(0.000257324017702897);
        leftCalibrationData.setGamma1(0);
        leftCalibrationData.setGamma2(0);

        leftCalibrationData.setaAstig0(0.710118011176747);
        leftCalibrationData.setaAstig1(0);
        leftCalibrationData.setaAstig2(0);

        leftCalibrationData.setEpsilon0(0.0186852934517613);
        leftCalibrationData.setEpsilon1(0);
        leftCalibrationData.setEpsilon2(0);

        leftCalibrationData.setV00(44.9145);
        leftCalibrationData.setV01(0.0);
        leftCalibrationData.setV02(0.0);

        leftCalibrationData.setCylinder0D0(-0.25);
        leftCalibrationData.setCylinder0D1(0);
        leftCalibrationData.setCylinder0D2(0);


        leftCalibrationData.setAxis0D0(43);
        leftCalibrationData.setAxis0D1(0);
        leftCalibrationData.setAxis0D2(0);


        leftCalibrationData.setTcalib(25);
    // Call other setter methods as needed...
    return leftCalibrationData;

}




export { getMockCalibDataRight,getMockCalibDataLeft };