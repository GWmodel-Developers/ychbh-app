/**
 * 添加勘验笔录
 * @param {Object} params 初始化参数
 */
function SurveyRecordAdd(params) {
    this.brief = null;
    if(params){
        for(var key in params){
            if(params.hasOwnProperty(key)){
                var element = params[key];
                this[key] = element;
            }
        }
    }
}