
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/dialog/clause_dialog');
require('./assets/script/dialog/comment_dialog');
require('./assets/script/dialog/confirmExit_dialog');
require('./assets/script/dialog/gameover_dialog');
require('./assets/script/dialog/setting_dialog');
require('./assets/script/dialog/timeOut_dialog');
require('./assets/script/game');
require('./assets/script/hall');
require('./assets/script/loading');
require('./assets/script/prefeb/imgItem');
require('./assets/script/prefeb/newhand');
require('./assets/script/tool/AssetUtils');
require('./assets/script/tool/AudioUtils');
require('./assets/script/tool/BxAutoAsset');
require('./assets/script/tool/StorageUtils');
require('./assets/script/tool/gameData');
require('./assets/script/tool/global');
require('./assets/script/tool/scrollview_util');
require('./assets/script/tool/utils');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();