/**
 * 不予立案呈批表
 * @param {Object} params 初始化参数
 */
function UnRegisterCase(params) {
    this.caseID = null;
    this.sourceID = null;
    this.informantID = null;
    this.informantName = null;
    this.informantAdress = null;
    this.informantAge = null;
    this.informantSex = null;
    this.content = null;
    this.suggestion = null;
    this.reportDate = null;
    this.reponsible = null;
    this.responsible = null;
    this.excutor1 = null;
    this.excutor2 = null;
    this.excuteDate = null;
    this.userName = null;
    this.userId = null;
    this.caseId = null;
    this.caseName = null;
    this.caseType = null;
    this.documentName = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

UnRegisterCase.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办"
};

UnRegisterCase.prototype.illegalTypesTextText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事"
};

UnRegisterCase.prototype.placesTextText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区"    
};

UnRegisterCase.prototype.cardTypesTextText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证"
}

UnRegisterCase.prototype.caseStateText = {
    "0": "未申请",
    "1": "已提交",
    "2": "已审核",
    "3": "已审批"
}

UnRegisterCase.prototype.domMap = [
    {
        key: "caseID",
        name: "案件编号",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "sourceID",
        name: "来源类型",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return UnRegisterCase.prototype.sourceTypesText[params[this.key]];
        }
    },{
        key: "reportDate",
        name: "举报时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantName",
        name: "举报人姓名",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantID",
        name: "举报人证件号",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantAdress",
        name: "举报人地址、单位",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantSex",
        name: "举报人性别",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantAge",
        name: "举报人年龄",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "content",
        name: "案件内容",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "",
        name: "当事人行为",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "responsible",
        name: "负责人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "excutor1",
        name: "经办人1",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "excutor1",
        name: "经办人2",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "",
        name: "办理日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "",
        name: "审核意见",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "reponsible",
        name: "综合执法支队负责人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "",
        name: "审核日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "",
        name: "审批意见",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "",
        name: "主管领导",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "",
        name: "审批日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
]