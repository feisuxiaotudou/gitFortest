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
 * 主要控制三个界面的切换
 */
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this) || this;
        //把顾客要点的菜分别都放在数组里，然后随意组合，表示是顾客的菜单
        _this.meats = ["培根", "虾", "鱼块"];
        _this.noodles = ["意大利面", "蝴蝶面", "面片"];
        _this.vegetables = ["西蓝花", "蘑菇", "香菜"];
        //一个标记
        _this.curMakeMenu = [-1, -1, -1];
        _this.curKerenMenu = [-1, -1, -1];
        _this.score = 0;
        _this.init();
        return _this;
    }
    /**
     * 这里初始化
     */
    ViewManager.prototype.init = function () {
        this.gameStartPanel = new GameStartPanel();
        this.gameEndPanel = new GameEndPanel();
        this.gamePlayingPanel = new GamePlayingPanel();
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);
    };
    //写一个方法，随机从上面的列表中组合得出菜单
    ViewManager.prototype.generateMenuForCustomer = function () {
        var ret = [];
        ret[0] = Math.floor(Math.random() * this.meats.length);
        ret[1] = Math.floor(Math.random() * this.noodles.length);
        ret[2] = Math.floor(Math.random() * this.vegetables.length);
        //console.log(this.meats[ret[0]]  + this.noodles[ret[1]] + this.vegetables[ret[2]]);
        console.log(ret);
        return ret;
    };
    ViewManager.prototype.getFoodName = function (type, idx) {
        if (type == 0)
            return this.meats[idx];
        if (type == 1)
            return this.noodles[idx];
        if (type == 2)
            return this.vegetables[idx];
        // var ret ;
        // if( type == 0 )
        //     ret = this.meats ; 
        // if( type == 1 )
        //     ret = this.noodles ; 
        // if( type == 2 )
        //     ret = this.vegetables ; 
        // return ret[idx] ;
    };
    ViewManager.prototype.resetMakeMenu = function () {
        this.curMakeMenu[0] = -1;
        this.curMakeMenu[1] = -1;
        this.curMakeMenu[2] = -1;
    };
    ViewManager.prototype.start = function () {
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);
    };
    ViewManager.getInstance = function () {
        if (ViewManager.instance == null) {
            ViewManager.instance = new ViewManager();
        }
        return ViewManager.instance;
    };
    ViewManager.prototype.onChangeScene = function (e) {
        e.obj.end();
        this.removeChildren();
        switch (e.eventType) {
            case GameStartPanel.GAME_START:
                this.gameStartPanel.start();
                this.addChild(this.gameStartPanel);
                break;
            case GamePlayingPanel.CHANGEPANEL:
                this.gamePlayingPanel.start();
                this.addChild(this.gamePlayingPanel);
                break;
            case GameEndPanel.GAME_END:
                this.gameEndPanel.start();
                this.addChild(this.gameEndPanel);
                break;
            default:
                break;
        }
    };
    /**
 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
 * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
 */
    ViewManager.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return ViewManager;
}(egret.Sprite));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map