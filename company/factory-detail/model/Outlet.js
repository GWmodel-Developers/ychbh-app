function Outlet(params) {
    this.projectID = "";
	this.outletID = "";
	this.outletName = "";
	this.outletNumber = "";
	this.outletArea = "";
	this.outletRemarks = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Outlet.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Outlet.prototype.domMap = [
    {
        key: "projectID",
        name: "项目ID",
        type: "text",
        hidden: false
    },{
        key: "outletID",
        name: "排污设施ID",
        type: "text",
        hidden: false
    },{
        key: "outletName",
        name: "排污设施名称",
        type: "text",
        hidden: false
    },{
        key: "outletNumber",
        name: "排污设施数量",
        type: "number",
        hidden: false
    },{
        key: "outletArea",
        name: "排污设施面积",
        type: "numer",
        hidden: false
    },{
        key: "outletRemarks",
        name: "备注",
        type: "text",
        hidden: false
    }
]