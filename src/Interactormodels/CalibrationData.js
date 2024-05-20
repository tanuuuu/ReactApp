class CalibrationData {
  constructor() {
    this.side = 0;
    this.timestamp = '';
    this.deviceId = '';
    this.lensID = '';
    this.alpha0 = 0;
    this.alpha1 = 0;
    this.alpha2 = 0;
    this.beta0 = 0;
    this.beta1 = 0;
    this.beta2 = 0;
    this.gamma0 = 0;
    this.gamma1 = 0;
    this.gamma2 = 0;
    this.epsilon0 = 0;
    this.epsilon1 = 0;
    this.epsilon2 = 0;
    this.aAstig0 = 0;
    this.aAstig1 = 0;
    this.aAstig2 = 0;
    this.Tcurrent = 0;
    this.V00 = 0;
    this.V01 = 0;
    this.V02 = 0;
    this.cylinder0D0 = 0;
    this.cylinder0D1 = 0;
    this.cylinder0D2 = 0;
    this.axis0D0 = 0;
    this.axis0D1 = 0;
    this.axis0D2 = 0;
    this.Tcalib = 25;
    this.onePointCalibration = '';
    this.phi0 = 0;
    this.phi1 = 0;
    this.phi2 = 0;
  }

  getPhi0() {
    return this.phi0;
  }

  setPhi0(phi0) {
    this.phi0 = phi0;
  }

  getPhi1() {
    return this.phi1;
  }

  setPhi1(phi1) {
    this.phi1 = phi1;
  }

  getPhi2() {
    return this.phi2;
  }

  setPhi2(phi2) {
    this.phi2 = phi2;
  }

  getV0() {
    return (
      this.V00 +
      this.V01 * (this.Tcurrent - this.Tcalib) * (this.Tcurrent - this.Tcalib) +
      this.V02 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getAlpha() {
    return (
      this.alpha0 +
      this.alpha1 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) +
      this.alpha2 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getBeta() {
    return (
      this.beta0 +
      this.beta1 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) +
      this.beta2 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getGamma() {
    return (
      this.gamma0 +
      this.gamma1 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) +
      this.gamma2 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getEpsilon() {
    return (
      this.epsilon0 +
      this.epsilon1 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) +
      this.epsilon2 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getAastig() {
    return (
      this.aAstig0 +
      this.aAstig1 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) +
      this.aAstig2 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getCylinder0D() {
    return (
      this.cylinder0D0 +
      this.cylinder0D1 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) +
      this.cylinder0D2 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getAxis0D() {
    return (
      this.axis0D0 +
      this.axis0D1 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) +
      this.axis0D2 *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib) *
        (this.Tcurrent - this.Tcalib)
    );
  }

  getLensID() {
    return this.lensID;
  }

  setLensID(lensID) {
    this.lensID = lensID;
  }

  getAlpha0() {
    return this.alpha0;
  }

  setAlpha0(alpha0) {
    this.alpha0 = alpha0;
  }

  getAlpha1() {
    return this.alpha1;
  }

  setAlpha1(alpha1) {
    this.alpha1 = alpha1;
  }

  getAlpha2() {
    return this.alpha2;
  }

  setAlpha2(alpha2) {
    this.alpha2 = alpha2;
  }

  getBeta0() {
    return this.beta0;
  }

  setBeta0(beta0) {
    this.beta0 = beta0;
  }

  getBeta1() {
    return this.beta1;
  }

  setBeta1(beta1) {
    this.beta1 = beta1;
  }

  getBeta2() {
    return this.beta2;
  }

  setBeta2(beta2) {
    this.beta2 = beta2;
  }

  getGamma0() {
    return this.gamma0;
  }

  setGamma0(gamma0) {
    this.gamma0 = gamma0;
  }

  getGamma1() {
    return this.gamma1;
  }

  setGamma1(gamma1) {
    this.gamma1 = gamma1;
  }

  getGamma2() {
    return this.gamma2;
  }

  setGamma2(gamma2) {
    this.gamma2 = gamma2;
  }

  getEpsilon0() {
    return this.epsilon0;
  }

  setEpsilon0(epsilon0) {
    this.epsilon0 = epsilon0;
  }

  getEpsilon1() {
    return this.epsilon1;
  }

  setEpsilon1(epsilon1) {
    this.epsilon1 = epsilon1;
  }

  getEpsilon2() {
    return this.epsilon2;
  }

  setEpsilon2(epsilon2) {
    this.epsilon2 = epsilon2;
  }

  getaAstig0() {
    return this.aAstig0;
  }

  setaAstig0(aAstig0) {
    this.aAstig0 = aAstig0;
  }

  getaAstig1() {
    return this.aAstig1;
  }

  setaAstig1(aAstig1) {
    this.aAstig1 = aAstig1;
  }

  getaAstig2() {
    return this.aAstig2;
  }

  setaAstig2(aAstig2) {
    this.aAstig2 = aAstig2;
  }

  getTcurrent() {
    return this.Tcurrent;
  }

  setTcurrent(tcurrent) {
    this.Tcurrent = tcurrent;
  }

  getV00() {
    return this.V00;
  }

  setV00(v00) {
    this.V00 = v00;
  }

  getV01() {
    return this.V01;
  }

  setV01(v01) {
    this.V01 = v01;
  }

  getV02() {
    return this.V02;
  }

  setV02(v02) {
    this.V02 = v02;
  }

  getCylinder0D0() {
    return this.cylinder0D0;
  }

  setCylinder0D0(cylinder0D0) {
    this.cylinder0D0 = cylinder0D0;
  }

  getCylinder0D1() {
    return this.cylinder0D1;
  }

  setCylinder0D1(cylinder0D1) {
    this.cylinder0D1 = cylinder0D1;
  }

  getCylinder0D2() {
    return this.cylinder0D2;
  }

  setCylinder0D2(cylinder0D2) {
    this.cylinder0D2 = cylinder0D2;
  }

  getAxis0D0() {
    return this.axis0D0;
  }

  setAxis0D0(axis0D0) {
    this.axis0D0 = axis0D0;
  }

  getAxis0D1() {
    return this.axis0D1;
  }

  setAxis0D1(axis0D1) {
    this.axis0D1 = axis0D1;
  }

  getAxis0D2() {
    return this.axis0D2;
  }

  setAxis0D2(axis0D2) {
    this.axis0D2 = axis0D2;
  }

  getTcalib() {
    return this.Tcalib;
  }

  setTcalib(tcalib) {
    this.Tcalib = tcalib;
  }

  getSide() {
    return this.side;
  }

  setSide(side) {
    this.side = side;
  }

  getTimestamp() {
    return this.timestamp;
  }

  setTimestamp(timestamp) {
    this.timestamp = timestamp;
  }

  getDeviceId() {
    return this.deviceId;
  }

  setDeviceId(deviceId) {
    this.deviceId = deviceId;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getAAstig0() {
    return this.aAstig0;
  }

  setAAstig0(aAstig0) {
    this.aAstig0 = aAstig0;
  }

  getAAstig1() {
    return this.aAstig1;
  }

  setAAstig1(aAstig1) {
    this.aAstig1 = aAstig1;
  }

  getAAstig2() {
    return this.aAstig2;
  }

  setAAstig2(aAstig2) {
    this.aAstig2 = aAstig2;
  }

  getOnePointCalibration() {
    return this.onePointCalibration;
  }

  setOnePointCalibration(onePointCalibration) {
    this.onePointCalibration = onePointCalibration;
  }
}

export default CalibrationData;
