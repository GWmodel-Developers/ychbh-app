function CaseIndex(params) {
    this.caseID = null;
    this.documentId = null;
    this.illegalID = null;
    this.unsettleType = null;
    this.sourceID = null;
    this.informantID = null;
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
    this.recordDate = null;
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
    this.formPunishmentDecisionExamSate = null;
    this.formNotPunishmentDecisionExamSate = null;
    this.formPunishmentState = null;
    this.discussionCaseState = null;
    this.formKeepEvidenceState = null;
    this.formTransferCaseState = null;
    this.decisionPunishmentInSpotState = null;
    this.discussionImportantCaseState = null;
    this.noteHearingPunishmentState = null;
    this.noticePunishmentPretellState = null;
    this.reportEndInvestigateSate = null;
    this.noticeHearingPunishmentState = null;
    this.formDetainEvidenceState = null;
    this.reportEndCasePunishmentState = null;
    this.opinionHearingPunishmentState = null;
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var element = params[key];
            this[key] = element;
        }
    }
}

CaseIndex.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办"
};

CaseIndex.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事"
};

CaseIndex.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区"
};

CaseIndex.prototype.stateText = {
    "0": "未立案",
    "1": "案件在办",
    "2": "已办结"
}

CaseIndex.prototype.getCaseState = function () {
    var caseState = parseInt(this.caseState);
    if (caseState == 0) {
        return 0;
    }
    if ((caseState > 49999 && caseState < 79999 && caseState != 59999 && caseState != 69999 && caseState != 99999 && caseState != 99998) || (caseState < 5 && caseState > 0)) {
        return 1;
    }
    if (caseState == 59999 || caseState == 69999 || caseState == 79999 || caseState == 99999 || caseState == 99998) {
        return 2;
    }
}

CaseIndex.prototype.docStateText = {
    "0": "未填写",
    "1": "审核中",
    "2": "审批中",
    "3": "已填写"
}

CaseIndex.prototype.docMap = [
    {
        name: "案源管理文书",
        docs: [{
            key: "formRegistrationState",
            name: "案源登记表",
            link: "registration",
            state: function (params) {
                return params[this.key]
            }
        }]
    },{
        name: "移送立案文书",
        docs: [{
            key: "formUnRegisterCaseSate",
            name: "立案呈批表",
            link: "registercase",
            state: function (params) {
                return params[this.key]
            }
        }]
    },{
        name: "扣押物品文书",
        docs: [{
            key: "formUnRegisterCaseSate",
            name: "扣押物品呈批表",
            link: "registercase",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "formUnRegisterCaseSate",
            name: "先行登记保存物品呈批表",
            link: "registercase",
            state: function (params) {
                return params[this.key]
            }
        }]
    },{
        name: "调重取证文书",
        docs: [{
            key: "formUnRegisterCaseSate",
            name: "立案呈批表",
            link: "registercase",
            state: function (params) {
                return params[this.key]
            }
        }]
    },{
        name: "行政命令文书",
        docs: []
    },{
        name: "行政处罚文书",
        docs: [{
            key: "formWithdrawCaseState",
            name: "撤案呈批表",
            link: "withdrawcase",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "formPunishmentState",
            name: "行政处罚呈批表",
            link: "punishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "noticePunishmentPretellState",
            name: "行政处罚事先告知书",
            link: "punishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "decisionPunishmentInSpotState",
            name: "当场行政处罚决定书",
            link: "decisionpunishmentinspot",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "noticeGHearingPunishmentState",
            name: "行政处罚听证通知书",
            link: "noticehearingpunishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "noticeHearingPunishmentState",
            name: "行政处罚听证告知书",
            link: "noticeghearingpunishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "notePleadState",
            name: "陈述申辩笔录",
            link: "punishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "noteHearingPunishmentState",
            name: "行政处罚听证笔录",
            link: "punishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "opinionHearingPunishmentState",
            name: "行政处罚听证意见书",
            link: "punishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "discussionImportantCaseState",
            name: "重大案件集体讨论记录",
            link: "discussimportantcase",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "formPunishmentDecisionExamSate",
            name: "行政处罚决定审批表",
            link: "punishmentdecisionexam",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "decisionPunishmentState",
            name: "行政处罚决定书",
            link: "decisionpunishment",
            state: function (params) {
                return params[this.key]
            }
        },{
            key: "reportEndCasePunishmentState",
            name: "行政处罚结案报告",
            link: "punishment",
            state: function (params) {
                return params[this.key]
            }
        }]
    }
];