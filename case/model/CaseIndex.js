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
    "群众举报": "群众举报",
    "巡查发现": "巡查发现",
    "媒体发现": "媒体发现",
    "部门转办": "部门转办"
};

CaseIndex.prototype.illegalTypesText = {
    "水利": "水利",
    "环保": "环保",
    "渔业": "渔业",
    "海事": "海事"
};

CaseIndex.prototype.placesText = {
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区"
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
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        }]
    },{
        name: "移送立案文书",
        docs: [{
            key: "formRegisterCaseSate",
            name: "立案呈批表",
            link: "registercase",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "formTransferCaseState",
            name: "案件移送呈批表",
            link: "casetransferredform",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "letterTransferState",
            name: "案件移送函",
            link: "transferletter",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        }]
    },{
        name: "先行登记保存物品程序流程",
        docs: [{
            key: "formUnRegisterCaseSate",
            name: "先行登记保存物品呈批表",
            link: "advregsaveitemtbl",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "noticePreSaveState",
            name: "先行登记保存物品通知书",
            link: "advregsaveitemnoticetbl",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: null,
            name: "先行登记保存物品凭证",
            link: "advregsaveitemevidence1",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "relasePreSaveState",
            name: "解除先行登记保存物品通知书",
            link: "relieveadvregsavenotice",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        }]
    },{
        name: "扣押物品文书",
        docs: [{
            key: "formDetainGoodsState",
            name: "扣押物品呈批表",
            link: "formDetainGoods",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "detainInformLetterState",
            name: "扣押通知书",
            link: "noticesubtract",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "investDetainGoodsState",
            name: "扣押物品审批表",
            link: "objectsubtrackform",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "decisionDetainGoodsState",
            name: "扣押物品决定书",
            link: "objectsubtrackdecide",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: null,
            name: "扣押物品凭证",
            link: "objectsubtrackevidence1",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "redetainInformLetterState",
            name: "解除扣押物品决定书",
            link: "relievesubtrackobjectdecision",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        }]
    },{
        name: "调查取证文书",
        docs: [
        {
            key: "noteSurveyState",
            name: "勘验笔录",
            link: "surveyrecordlist",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noteInspectState",
            name: "检查笔录",
            link: "noteinspectlist",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noteExamState",
            name: "询问笔录",
            link: "noteinspectlist",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },
        {
            key: "reportEndInvestigateSate",
            name: "案件调查终结报告",
            link: "caseinvestigatereport",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "discussionCaseState",
            name: "案件集体讨论记录",
            link: "casediscussion",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },]
    },{
        name: "行政命令文书",
        docs: [{
            key: "noticeStopAllegedIllegalActsState",
            name: "责令停止涉嫌违法行为通知书",
            link: "stopIilegalinform",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticeCorrectIllegalityState",
            name: "责令改正违法行为通知书",
            link: "orderIilegalinform1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "decisionCorrectIllegalityState",
            name: "责令改正违法行为决定书",
            link: "stopIilegaldecide1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticeFufillObligationState",
            name: "履行义务催告通知书",
            link: "obligurgnotice1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "reportAfterAdminstrativeState",
            name: "行政执法后督查报告",
            link: "adminenforsuprep1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        }]
    },{
        name: "行政处罚文书",
        docs: [{
            key: "formWithdrawCaseState",
            name: "撤案呈批表",
            link: "withdrawcase",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "formPunishmentState",
            name: "行政处罚审批表",
            link: "punishmentexam",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "noticePunishmentPretellState",
            name: "行政处罚事先告知书",
            link: "noticepunishment",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "decisionPunishmentInSpotState",
            name: "当场行政处罚决定书",
            link: "decisionpunishmentinspot",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticeGHearingPunishmentState",
            name: "行政处罚听证通知书",
            link: "noticehearingpunishment",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticeHearingPunishmentState",
            name: "行政处罚听证告知书",
            link: "noticeghearingpunishment",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "notePleadState",
            name: "陈述申辩笔录",
            link: "statedefendnote",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noteHearingPunishmentState",
            name: "行政处罚听证笔录",
            link: "punishmenthearingnote",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "opinionHearingPunishmentState",
            name: "行政处罚听证意见书",
            link: "punishmenthearingopion",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "discussionImportantCaseState",
            name: "重大案件集体讨论记录",
            link: "discussimportantcase",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "formPunishmentDecisionExamSate",
            name: "行政处罚决定审批表",
            link: "punishmentdecisionexam",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        },{
            key: "decisionPunishmentState",
            name: "行政处罚决定书",
            link: "decisionpunishment",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "ormNotPunishmentDecisionExamSate",
            name: "不予行政处罚决定审批表",
            link: "noadministrativepenaltydecision1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "decisionNotPunishmentState",
            name: "不予行政处罚决定书",
            link: "noadministrativepenalty1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "proofThingsState",
            name: "没收物品凭证",
            link: "confiscationitemcertificate1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "formDelayFineState",
            name: "延（分）期缴纳罚款呈批表",
            link: "deferredpaymentoflines1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticeDelayPaymentFineState",
            name: "延（分）期缴纳罚款通知书",
            link: "delayedpaymentoffines1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticeAdministrativePenaltyState",
            name: "行政处罚催告通知书",
            link: "administrativepunishmentnotice1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticeEnforceAdministrativePenaltyState",
            name: "行政处罚强制执行申请书",
            link: "administrativepunishmentenforcementapplication1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "noticePeopleCourtInadmissReviewState",
            name: "人民法院不予受理（执行）裁定复议申请书",
            link: "courtnotaccept1",
            state: function (params) {
                return (params[this.key] ? params[this.key] * 3 : 0).toString()
            }
        },{
            key: "reportEndCasePunishmentState",
            name: "行政处罚结案报告",
            link: "endcasereport",
            state: function (params) {
                return params[this.key] ? params[this.key].toString() : "0"
            }
        }]
    },{
        name: "行政强制文书",
        docs: [{
            key: "formEnforceExamState",
            name: "行政强制执行审批表",
            link: "adimienforform1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeAdministrativeEnforcementDecisionState",
            name: "行政强制执行决定书",
            link: "adminenfordecision1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeAdministrativeEnforcementAnnouncementState",
            name: "行政强制执行公告",
            link: "adimienfornotice1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeAgreementAdministrativeEnforcementState",
            name: "行政强制执行协议",
            link: "adimienforpro1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "formEnforceStopExamState",
            name: "行政强制终止（中止）审批表",
            link: "adminenforterapp1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeAdministrativeEnforcementStopImplyState",
            name: "行政强制中止（终止）执行决定书",
            link: "adminenforsusform1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeAdministrativeEnforcementState",
            name: "行政强制执行催告书",
            link: "adminenforurgform1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "formImplementExamState",
            name: "待履行审批表",
            link: "pendingapprovalform1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeImplementDecisionState",
            name: "代履行决定书",
            link: "decibehalfofperfor1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeStopObligationState",
            name: "代履行催告通知书",
            link: "notiperforremin1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeAdministrativeEnforcementAttorneyState",
            name: "行政强制执行委托书",
            link: "powerattorneyadminenforce1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        },{
            key: "noticeAdministrativeEnforcementRecordState",
            name: "行政强制执行记录",
            link: "adminenforcerecords1",
            state: function (params) {
                return params[this.key] ? (params[this.key] === "2" ? "3" : params[this.key]) : "0"
            }
        }]
    }
];