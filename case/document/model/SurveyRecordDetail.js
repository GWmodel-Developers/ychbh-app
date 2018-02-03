/**
 * 勘验笔录详情
 * @param {Object} params 初始化参数
 */
function SurveyRecordDetail(params) {
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