function ProjectBasic(params) {
    this.projectID = "";
    this.companyName = "";
    this.companyID = "";
    this.license = "";
    this.productScale = "";
    this.mineName = "";
    this.caveNumber = "";
    this.groundTank = "";
    this.onlineNumber = "";
    this.remarks = "";
    this.mineCaveNumber = "";
    this.lifeOutletNumber = "";
    this.administration = "";
    this.lifePowerNumber = "";
    this.groundTankVolume = "";
    this.productOutletNumber = "";
    if (params) {
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const element = params[key];
                this[key] = element;
            }
        }
    }
}

ProjectBasic.prototype.toForm = function () {
    var data = "";
    return data;
}