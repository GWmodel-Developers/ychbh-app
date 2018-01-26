function Approval(params) {
    this.projectID = "";
    this.approvalName = "";
    this.approvalID = "";
    this.approvalTime = "";
    this.approvalType = "";
    this.approvalNumber = "";
    this.approvalContent = "";
    this.approvalCompany = "";
    this.approvalEndline = "";
    if (params) {
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const element = params[key];
                this[key] = element
            }
        }
    }
}

Approval.prototype.toForm = function () {
    var data = "";
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            const element = this[key];
            data += ("&" + key + "=" + element);
        }
    }
    return data;
}