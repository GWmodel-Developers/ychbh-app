function CaseIndex(params) {
    this.caseID = null;
    this.illegalID = null;
    this.unsettleType = null;
    this.sourceID = null;
    this.informantId = null;
    this.informant = null;
    this.placeID = null;
    this.reportTime = null;
    this.caseDescription = null;
    this.objectType = null;
    this.objectID = null;
    this.caseState = null;
    this.objUninformant = null;
    this.formRegisterCase = null;
    this.formWithdrawCase = null;
    this.noteExam = null;
    this.noteInspect = null;
    this.notePlead = null;
    this.noteSurvey = null;
    this.noticeDetainEvidence = null;
    this.noticeKeepEvidence = null;
    this.noticeNoPunish = null;
    this.noticeStop = null;
    this.voucherDetainEvidence = null;
    this.voucherKeepEvidence = null;
    this.letterCaseTransfer = null;
    this.occurTime = null;
    this.occurPlace = null;
    this.content = null;
    this.objectName = null;
    this.recorder = null;
    this.examResponsible = null;
    this.excutor = null;
    this.examDate = null;
    this.examSuggestion = null;
    this.group = null;
    this.formRegistrationState = null;
    this.formPunishExamState = null;
    this.formRegisterCaseSate = null;
    this.formWithdrawCaseState = null;
    this.formUnRegisterCaseSate = null;
    this.noteExamState = null;
    this.noteInspectState = null;
    this.notePleadState = null;
    this.noteSurveyState = null;
    this.noticeDetainEvidenceState = null;
    this.noticeKeepEvidenceState = null;
    this.noticeNoPunishState = null;
    this.noticeStopState = null;
    this.voucherDetainEvidenceState = null;
    this.voucherKeepEvidenceState = null;
    this.letterCaseTransferState = null;
    this.formTransferCaseState = null;
    this.formKeepEvidenceState = null;
    this.formNotPunishmentDecisionExamSate = null;
    this.formPunishmentDecisionExamSate = null;
    this.reportEndCasePunishmentState = null;
    this.formDetainEvidenceState = null;
    this.decisionPunishmentInSpotState = null;
    this.discussionImportantCaseState = null;
    this.noteHearingPunishmentState = null;
    this.noticeHearingPunishmentState = null;
    this.opinionHearingPunishmentState = null;
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var element = params[key];
            this[key] = element;
        }
    }
}

CaseIndex.prototype.sources = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办"
};

CaseIndex.prototype.illegalTypes = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事"
};

CaseIndex.prototype.places = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区"    
};

CaseIndex.prototype.domMap = [
    {
        key: "caseID",
        type: "text",
        name: "案件编号",
        hidden: false,
        get: function (params) {
            return params.caseID;
        }
    },
    {
        key: "illegalID",
        type: "text",
        name: "违法类型",
        hidden: false,
        get: function (params) {
            return CaseIndex.prototype.illegalTypes[params.illegalID];
        }
    },
    {
        key: "sourceID",
        type: "text",
        name: "来源类型",
        hidden: false,
        get: function (params) {
           return CaseIndex.prototype.sources[params.sourceID]; 
        }
    },
    {
        key: "reportDate",
        type: "text",
        name: "举报时间",
        hidden: false,
        get: function (params) {
           return params.reportDate; 
        }
    },
    {
        key: "caseDescription",
        type: "text",
        name: "案件描述",
        hidden: false,
        get: function (params) {
           return params.caseDescription; 
        }
    },
    {
        key: "placeId",
        type: "text",
        name: "区域",
        hidden: false,
        get: function (params) {
           return CaseIndex.prototype.places[params.placeId]; 
        }
    },
    {
        key: "informantName",
        type: "text",
        name: "举报人姓名",
        hidden: false,
        get: function (params) {
           return params.informantName; 
        }
    },
    {
        key: "informantId",
        type: "text",
        name: "举报人证件号",
        hidden: false,
        get: function (params) {
           return params.informantId; 
        }
    },
    {
        key: "informantPersonAddress",
        type: "textarea",
        name: "举报人地址、单位",
        hidden: false,
        get: function (params) {
           return params.informantPersonAddress; 
        }
    },
    {
        key: "informantPhoneNumber",
        type: "text",
        name: "举报人电话",
        hidden: false,
        get: function (params) {
           return params.informantPhoneNumber; 
        }
    },
    {
        key: "uInformantName",
        type: "text",
        name: "被举报人姓名",
        hidden: false,
        get: function (params) {
           return params.uInformantName; 
        }
    },
    {
        key: "",
        type: "text",
        name: "被举报人证件类型",
        hidden: false,
        get: function (params) {
           return params.caseID; 
        }
    },
    {
        key: "",
        type: "text",
        name: "被举报人证件号",
        hidden: false,
        get: function (params) {
           return params.caseID; 
        }
    },
    {
        key: "",
        type: "text",
        name: "被举报人地址",
        hidden: false,
        get: function (params) {
           return params.caseID; 
        }
    },
    {
        key: "",
        type: "text",
        name: "被举报人电话号码",
        hidden: false,
        get: function (params) {
           return params.caseID; 
        }
    },
    {
        key: "",
        type: "text",
        name: "立案处理情况",
        hidden: false,
        get: function (params) {
           return params.caseID; 
        }
    },
    {
        key: "",
        type: "text",
        name: "撤案处理情况",
        hidden: false,
        get: function (params) {
           return params.caseID; 
        }
    },
    {
        key: "",
        type: "text",
        name: "行政处罚处理情况",
        hidden: false,
        get: function (params) {
           return params.caseID; 
        }
    },
];