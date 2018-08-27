var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 *
 * @author
 * 游戏结束界面
 */
var GameEndPanel = (function (_super) {
    __extends(GameEndPanel, _super);
    function GameEndPanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    //开启监听
    GameEndPanel.prototype.start = function () {
        this.restartBtn.touchEnabled = true;
        this.restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
    };
    //初始化
    GameEndPanel.prototype.init = function () {
        this.bg = new egret.Bitmap(RES.getRes('gameEndBgImage'));
        this.addChild(this.bg);
        this.restartBtn = new egret.TextField();
        this.restartBtn.text = '重新开始游戏';
        this.addChild(this.restartBtn);
        this.restartBtn.x = (480 - this.restartBtn.width) * 0.5;
        this.restartBtn.y = 400;
    };
    GameEndPanel.prototype.onTouchTab = function (e) {
        var changeEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        changeEvent.eventType = GameStartPanel.GAME_START;
        changeEvent.obj = this;
        ViewManager.getInstance().dispatchEvent(changeEvent);
    };
    //结束界面，释放监听
    GameEndPanel.prototype.end = function () {
        this.restartBtn.touchEnabled = false;
        if (this.restartBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.restartBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
    };
    GameEndPanel.GAME_END = "gameEnd";
    return GameEndPanel;
}(egret.Sprite));
__reflect(GameEndPanel.prototype, "GameEndPanel");
//# sourceMappingURL=GameEndPanel.js.map