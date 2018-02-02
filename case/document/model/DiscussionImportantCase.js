/**
 * 重大案件集体讨论记录
 * @param {Object} params 初始化参数
 */
function DiscussionImportantCase(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

DiscussionImportantCase.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]