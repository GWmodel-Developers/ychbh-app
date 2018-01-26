function ProjectInfo(params) {
    this.address = "";
    this.type = "";
    this.river = "";
    this.projectID = "";
    this.companyID = "";
    this.designOutput = "";
    this.factOutput = "";
    this.opreationTime = "";
    this.locationx = "";
    this.locationy = "";
    this.projectStatus = "";
    this.projectName = "";
    this.projectCharger = "";
    if (params) {
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const element = params[key];
                this[key] = element;
            }
        }
    }
}

ProjectInfo.prototype.toForm = function (minename, companyname) {
    var data = "";
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            const element = this[key];
            switch (key) {
                case "projectID":
                    data += ("&" + key + "=" + element);
                    break;
                default:
                    data += ("&" + key.toLowerCase() + "=" + element);
                    break;
            }
        }
    }
    data += ("&minename" + "=" + minename);
    data += ("&companyname" + "=" + companyname);
    return data;
}