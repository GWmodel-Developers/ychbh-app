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

ProjectBasic.prototype.domMap = {
    projectID: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    companyName: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    companyID: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    license: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    productScale: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    mineName: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    caveNumber: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    groundTank: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    onlineNumber: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    remarks: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    mineCaveNumber: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    lifeOutletNumber: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    administration: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    lifePowerNumber: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    groundTankVolume: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    },
    productOutletNumber: {
        name: "项目ID",
        type: "text",
        hidden: {
            listview: true,
            form: true
        }
    }
}