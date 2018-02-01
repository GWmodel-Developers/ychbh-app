/**
 * 当场行政处罚决定书
 * @param {Object} params 初始化参数
 */
function DecisionPunishmentInSpot(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

DecisionPunishmentInSpot.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]