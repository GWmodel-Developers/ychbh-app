/**
 * 不予立案呈批表
 * @param {Object} params 初始化参数
 */
function UnRegisterCase(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

UnRegisterCase.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]