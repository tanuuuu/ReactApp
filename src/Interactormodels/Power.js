


export default class Power {
    constructor() {
        this.side = 0;
        this.sph = 0;
        this.cyl = 0;
        this.axis = 0;
        this.crossCylPower = 0;
        this.crossCylAngle = 0;
        this.nearVision = 0;
        this._m = 0;
        this._j0 = 0;
        this._j45 = 0;
        this.z0 = 0;
        this.z45 = 0;
        this.addOn = 0;
        this.addOnAdded = false;
        this.positiveDistance = 0.0097; // distance between lens and addOn lens //changed VD according to the latest ID [8/12/2023]
        this.negativeDistance = 0.0097; // ..........

        this.iD = ''
        this.UUID = ''
    }

    setID(iD){
        return this.iD = iD;
    }
    getID(){
        return this.iD;
    }

    setUUID(UUID){
        return this.UUID = UUID
    }
    getUUID(){
        return this.UUID
    }


    isAddOnAdded() {
        return this.addOnAdded;
    }

    setAddOnAdded(addOnAdded) {
        this.addOnAdded = addOnAdded;
    }

    getZ0() {
        return this.z0;
    }

    setZ0(z0) {
        this.z0 = z0;
    }

    getZ45() {
        return this.z45;
    }

    setZ45(z45) {
        this.z45 = z45;
    }

    getNearVision() {
        return this.nearVision;
    }

    setNearVision(nearVision) {
        this.nearVision = nearVision;
    }

    getAddOn() {
        return this.addOn;
    }

    setAddOn(addOn) {
        this.addOn = addOn;
    }

    getSide() {
        return this.side;
    }

    setSide(side) {
        this.side = side;
    }

    getSph() {
        // to round up to two decimal places.
        return Math.round(this.sph * 100.0) / 100.0;
    }

    setSph(sph) {
        this.sph = sph;
    }

    getCyl() {
        return Math.round(this.cyl * 100.0) / 100.0;
    }

    setCyl(cyl) {
        this.cyl = cyl;
    }

    getAxis() {
        return this.axis;
    }

    setAxis(axis) {
        this.axis = axis;
    }

    getCrossCylPower() {
        return this.crossCylPower;
    }

    setCrossCylPower(crossCylPower) {
        this.crossCylPower = crossCylPower;
    }

    getCrossCylAngle() {
        return this.crossCylAngle;
    }

    setCrossCylAngle(crossCylAngle) {
        this.crossCylAngle = crossCylAngle;
    }

    get_m() {
        return this._m;
    }

    set_m(_m) {
        this._m = _m;
    }

    get_j0() {
        return this._j0;
    }

    set_j0(_j0) {
        this._j0 = _j0;
    }

    get_j45() {
        return this._j45;
    }

    set_j45(_j45) {
        this._j45 = _j45;
    }

    getSphNvWithAddOn() {
        let sphericalWithAddon = this.sph + this.nearVision;
        let dist = 0;
        if (this.addOn === 10.0 || this.addOn === -10.0) {
            dist = this.addOn === 10.0 ? this.positiveDistance : this.negativeDistance;
            sphericalWithAddon = (sphericalWithAddon - this.addOn) / (1 - (dist * this.addOn));
        }
        return sphericalWithAddon;
    }

    getSphWithAddOn() {
        let sphericalWithAddon = this.sph;
        let dist = 0;
        if (this.addOn === 10.0 || this.addOn === -10.0) {
            dist = this.addOn === 10.0 ? this.positiveDistance : this.negativeDistance;
            sphericalWithAddon = (sphericalWithAddon - this.addOn) / (1 - (dist * this.addOn));
        }
        return sphericalWithAddon;
    }

    getCylWithAddOn() {
        let cylinderWithAddon = this.cyl;
        let dist = 0;
        if (this.addOn === 10.0 || this.addOn === -10.0) {
            dist = this.addOn === 10.0 ? this.positiveDistance : this.negativeDistance;
            cylinderWithAddon = this.cyl / (1 - (dist * this.addOn));
        }
        return cylinderWithAddon;
    }

    clone() {
        let power = new Power();
        power.setSide(this.side);
        power.setCrossCylAngle(this.crossCylAngle);
        power.setCrossCylPower(this.crossCylPower);
        power.setAxis(this.axis);
        power.setCyl(this.cyl);
        power.setSph(this.sph);
        power.set_j0(this._j0);
        power.set_j45(this._j45);
        power.set_m(this._m);
        power.setAddOn(this.addOn);
        power.setNearVision(this.nearVision);
        power.setZ0(this.z0);
        power.setZ45(this.z45);
        return power;
    }
}