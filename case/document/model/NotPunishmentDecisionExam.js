/**
 * 行政处罚听证意见书
 * @param {Object} params 初始化参数
 */
function OpinionHearingPunishment(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

OpinionHearingPunishment.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]