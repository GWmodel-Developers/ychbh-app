function CaseIndex(params) {
    this.caseID = null;
    this.documentId = null;
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
        },{
            key: "formUnRegistrationState",
            name: "不予立案呈批表",
            link: "unregistercase",
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
    }
];