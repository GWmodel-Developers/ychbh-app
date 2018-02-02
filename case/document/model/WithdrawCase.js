/**
 * 撤案呈批表
 * @param {Object} params 初始化参数
 */
function WithdrawCase(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

WithdrawCase.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]