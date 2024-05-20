
import Power from "../Interactormodels/Power";
const power = new Power();

class VoltageCalculator {
    constructor() {
        this.mVolts = [0, 0, 0, 0];
         //this.power = new Power
        
        
    }
   

    // /**
    //  * Converts diopter to voltages
    //  * @param {string} refractionMode 
    //  * @param {object} power 
    //  * @param {object} calibrationData 
    //  * @returns {number[]} 4 voltage values applied to the lens
    //  */
    convertPowerToVoltage(refractionMode, power, calibrationData) {
        
        
        switch (refractionMode) {
            case "MANUAL":
                this.calculateManualAxisVoltage(calibrationData, power);
                console.log('refractionMode',refractionMode)
                break;
            case "JCC_Axis":
                this.calculateJCCAxisVoltage(calibrationData, power);
                break;
            case "JCC_CYL":
                this.calculateJccCyl(calibrationData, power);
                break;
            case "ZERNIKE":
                this.calculateZernikeVoltage(calibrationData, power);
                break;
            case "BLURRING":
                this.calculateBlurVoltage(calibrationData, power);
                break;
            case "POWER_VECTOR":
                this.calculateVoltageWithPowerVectors(calibrationData, power);
                break;
        }
        return this.mVolts;
    }

    calculateManualAxisVoltage(calibrationData, power) {
        
        let avgPower = power.getSphNvWithAddOn() * power.getCylWithAddOn();
        console.log("avgPower:",avgPower)
        this.calculateSphereVoltage(calibrationData, avgPower);
        let astig = calibrationData.getAastig() + calibrationData.getEpsilon() * avgPower;
         let deltaTheta = 0;
        let axis = power.getAxis() + deltaTheta;
        this.calculateAstigVoltage(astig, power.getCylWithAddOn(), axis);
    }

    // compensateResidualCylinder(calibrationData) {
    //     let cylComponent = calibrationData.beta * (-0.5 * calibrationData.cylinder0D) +
    //         calibrationData.alpha * (-0.5 * calibrationData.cylinder0D) * (-0.5 * calibrationData.cylinder0D);
    //     this.mVolts = this.mVolts.map(vol => vol + cylComponent);
    //     let astigCoeff0D = calibrationData.aastig + (calibrationData.epsilon * (-0.5 * calibrationData.cylinder0D));
    //     this.calculateAstigVoltage(astigCoeff0D, -calibrationData.cylinder0D, calibrationData.axis0D);
    // }

    // calculateJCCAxisVoltage(calibrationData, power) {
    //     this.calculateJccCyl(calibrationData, power);
    //     this.calculateAstigVoltage(calibrationData.aastig, (-2 * power.crossCylPower), power.crossCylAngle);
    // }

    // calculateJccCyl(calibrationData, power) {
    //     let avgPower = power.sphNvWithAddOn + (0.5 * power.cylWithAddOn);
    //     this.calculateSphereVoltage(calibrationData, avgPower);
    //     let astig = calibrationData.aastig + calibrationData.epsilon * avgPower;
    //     let axis = power.axis + 90;
    //     axis = axis % 180;
    //     let jccCyl = power.cylWithAddOn + power.crossCylPower;
    //     this.calculateAstigVoltage(astig, jccCyl, axis);
    // }

    calculateSphereVoltage(calibrationData, avgPower) {
        this.mVolts[0] = calibrationData.getV0() + calibrationData.getBeta() * avgPower +
        calibrationData.getAlpha() * (avgPower * avgPower) +
        calibrationData.getGamma() * (avgPower * avgPower * avgPower);

        

    this.mVolts[1] = this.mVolts[0];
    this.mVolts[2] = this.mVolts[0];
    this.mVolts[3] = this.mVolts[0];
    console.log(`mVolts : ${this.mVolts}`)
    }

    calculateAstigVoltage(astigCoefficient, cyl, axis) {
        axis = (axis < 0) ? 180 + axis : axis;
        let rad2Theta = (2 * axis) * (Math.PI / 180);
        let astigMatrix = [
            Math.cos(rad2Theta),
            -Math.sin(rad2Theta),
            -Math.cos(rad2Theta),
            Math.sin(rad2Theta)
        ];
        this.mVolts = this.mVolts.map((vol, i) =>
            vol - ((cyl * 0.5) / astigCoefficient) * astigMatrix[i]
        );

        console.log(`astigmVolts : ${this.mVolts}`)
    }

    // calculateZernikeVoltage(calibrationData, power) {
    //     power.cyl = this.computeZernikeCylinder(power.z0, power.z45);
    //     power.axis = Math.round(this.computeZernikeAngle(power.z0, power.z45, power.cyl));
    //     let avgPower = power.sph + (0.5) * power.cyl;
    //     this.calculateSphereVoltage(calibrationData, avgPower);
    //     let astig = calibrationData.aastig + calibrationData.epsilon * avgPower;
    //     let conv = (-(4.0 * 0.000001 * Math.sqrt(6.0)) / ((5.1 / 2000) * (5.1 / 2000)));
    //     conv = -conv / Math.sqrt(6.0);
    //     let astigMatrix = [
    //         power.z0 * conv,
    //         -power.z45 * conv,
    //         -power.z0 * conv,
    //         power.z45 * conv
    //     ];
    //     this.mVolts = this.mVolts.map((vol, j) =>
    //         vol - ((0.5) / astig) * astigMatrix[j]
    //     );
    // }

    // calculateVoltageWithPowerVectors(calibrationData, power) {
    //     let sph = calibrationData.v0 + calibrationData.beta * power.m +
    //         calibrationData.alpha * (power.m * power.m) +
    //         calibrationData.gamma * (power.m * power.m * power.m);
    //     let vector = [power.j0, -power.j45, -power.j0, power.j45];
    //     let astig = calibrationData.aastig + calibrationData.epsilon * power.m;
    //     for (let i = 0; i < 4; i++) {
    //         this.mVolts[i] = sph + (vector[i] / astig);
    //     }
    // }

    // calculateBlurVoltage(calibrationData, power) {
    //     this.mVolts = this.mVolts.map(() =>
    //         calibrationData.v0 + calibrationData.beta * power.sph +
    //         calibrationData.alpha * (power.sph * power.sph) +
    //         calibrationData.gamma * (power.sph * power.sph * power.sph)
    //     );
    // }

    // computeZernikeCylinder(z0, z45) {
    //     return (-Math.sqrt((z0 ** 2 + z0 ** 2)) * 4.0 * 0.000001) / ((5.1 / 2000) * (5.1 / 2000));
    // }

    // computeZernikeAngle(z0, z45, cylinder) {
    //     let theta = 0;
    //     if (z45 === 0) {
    //         theta = (z0 <= 0) ? 0.0 : 90.0;
    //     } else {
    //         let conv = (-(4.0 * 0.000001 * Math.sqrt(6.0)) / ((5.1 / 2000) * (5.1 / 2000))) / cylinder;
    //         let x = (z0 / -Math.sqrt(6.0)) * conv;
    //         let y = (z45 / -Math.sqrt(6.0)) * conv;
    //         let angle = Math.acos(x) * 180.0 / (2 * Math.PI);
    //         if (angle < 90) {
    //             theta = (y > 0) ? angle : 180.0 - angle;
    //         } else {
    //             theta = (y > 0) ? 180.0 - angle : angle;
    //         }
    //     }
    //     return theta;
    // }
}


export default VoltageCalculator;