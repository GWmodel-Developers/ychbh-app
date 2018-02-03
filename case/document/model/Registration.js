/**
 * 案源登记表
 * @param {Object} params 初始化参数
 */
function Registration(params) {
    this.formDetainEvidenceSate = null;
    this.reportEndCasePunishmentState = null;
    this.examDate = null;
    this.formUnRegisterCaseSate = null;
    this.uAddress = null;
    this.placID = null;
    this.occurTime = null;
    this.uSex = null;
    this.uInformantId = null;
    this.examResponsible = null;
    this.iSex = null;
    this.notePleadState = null;
    this.noteExamState = null;
    this.reportDate = null;
    this.formPunishmentState = null;
    this.excutor = null;
    this.noteInspectState = null;
    this.group = null;
    this.reportEndInvestigateSate = null;
    this.formTransferCaseState = null;
    this.formNotPunishmentDecisionExamSate = null;
    this.noticePunishmentPretellState = null;
    this.informantID = null;
    this.formPunishmentDecisionExamSate = null;
    this.caseID = null;
    this.noticeStopState = null;
    this.informantPersonAddress = null;
    this.occurPlace = null;
    this.uPhone = null;
    this.discussionCaseState = null;
    this.infotmantAddress = null;
    this.decisionPunishmentInSpotState = null;
    this.uInformantName = null;
    this.content = null;
    this.examSuggestion = null;
    this.informantName = null;
    this.caseDescription = null;
    this.recordDate = null;
    this.formRegisterCaseSate = null;
    this.uCardType = null;
    this.sourceID = null;
    this.recorder = null;
    this.iAge = null;
    this.formKeepEvidenceSate = null;
    this.informantCardType = null;
    this.formPunishExamState = null;
    this.formRegistrationState = null;
    this.illegalID = null;
    this.objectName = null;
    this.documentId = null;
    this.informantPhoneNumber = null;
    this.noteSurveyState = null;
    this.uAge = null;
    this.formWithdrawCaseState = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Registration.prototype.sources = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办"
};

Registration.prototype.illegalTypes = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事"
};

Registration.prototype.places = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区"    
};

Registration.prototype.cardTypes = {
    "1": "身份证",
    "1": "军官证",
    "1": "学生证",
    "1": "港澳台同胞证"
}

Registration.prototype.domMap = [
    {
        name: "违法类型",
        key: "illegalID",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return Registration.prototype.illegalTypes[params.illegalID];
        }
    },
    {
        name: "案件来源",
        key: "sourceID",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return Registration.prototype.sources[params.sourceID]; 
        }
    },
    {
        name: "报告时间",
        key: "reportTime",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.reportTime;
        }
    },
    {
        name: "案件名称",
        key: "caseDescription",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.caseDescription;
        }
    },
    {
        name: "主要内容",
        key: "content",
        type: "textarea",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.content;
        }
    },
    {
        name: "区域",
        key: "placID",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return Registration.prototype.places[params.placID];
        }
    },
    {
        name: "报告人姓名",
        key: "informantName",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantName;
        }
    },
    {
        name: "报告人证件类型",
        key: "informantCardType",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return Registration.prototype.cardTypes[params.informantCardType];
        }
    },
    {
        name: "报告人证件号",
        key: "informantId",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantId;
        }
    },
    {
        name: "报告人性别",
        key: "iSex",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.iSex;
        }
    },
    {
        name: "报告人年龄",
        key: "iAge",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.iAge;
        }
    },
    {
        name: "报告人地址、单位",
        key: "informantPersonAddress",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantPersonAddress;
        }
    },
    {
        name: "报告人联系方式",
        key: "informantPhoneNumber",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantPhoneNumber;
        }
    },
    {
        name: "记录人",
        key: "recorder",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.recorder;
        }
    },
    {
        name: "记录时间",
        key: "recordDate",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.recordDate;
        }
    },
    {
        name: "综合执法支队",
        key: "group",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.group;
        }
    },
    {
        name: "综合执法支队负责人",
        key: "examResponsible",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.examResponsible;
        }
    },
    {
        name: "处理意见(负责人填写)",
        key: "examSuggestion",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.examSuggestion;
        }
    },
    {
        name: "经办人",
        key: "excutor",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.excutor;
        }
    },
    {
        name: "处理时间",
        key: "examDate",
        type: "text",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.examDate;
        },
    }
]

