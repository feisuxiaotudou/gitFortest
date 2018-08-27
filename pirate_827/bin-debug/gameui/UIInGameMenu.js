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
var UIInGameMenu = (function (_super) {
    __extends(UIInGameMenu, _super);
    function UIInGameMenu() {
        return _super.call(this) || this;
    }
    UIInGameMenu.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    UIInGameMenu.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_keren.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabKeren, this);
        // this.menuList.push(this.menu_0) ;
        // this.menuList.push(this.menu_1) ;
        // this.menuList.push(this.menu_2) ;
        this.makeMenuList = [];
        this.makeMenuList.push(this.makeMenu_0);
        this.makeMenuList.push(this.makeMenu_1);
        this.makeMenuList.push(this.makeMenu_2);
        this.meat_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabMeat_0, this);
        this.meat_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabMeat_1, this);
        this.meat_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabMeat_2, this);
        this.noodles_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabNoodles_0, this);
        this.noodles_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabNoodles_1, this);
        this.noodles_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabNoodles_2, this);
        this.veges_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabVeges_0, this);
        this.veges_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabVeges_1, this);
        this.veges_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabVeges_2, this);
        //绑定扔掉按钮的事件
        this.btn_reng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabRengDiao, this);
        this.btn_gei.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabGei, this);
        this.timer = new egret.Timer(20, 50); //9秒执行一次？
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.addCustomerBar, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.createNowKeren, this);
    };
    UIInGameMenu.prototype.addCustomerBar = function () {
        this.customer_bar.value += 2;
    };
    UIInGameMenu.prototype.createNowKeren = function () {
        this.onTabKeren();
        this.customer_bar.value = 0;
    };
    UIInGameMenu.prototype.onTabKeren = function () {
        ViewManager.getInstance().curKerenMenu = ViewManager.getInstance().generateMenuForCustomer();
        this.addTheBar();
        ViewManager.getInstance().resetMakeMenu();
        this.showMakeMenu();
        this.showKerenMenu();
    };
    UIInGameMenu.prototype.addTheBar = function () {
        this.timer.reset();
        this.timer.start();
    };
    UIInGameMenu.prototype.onTabGei = function () {
        this.checkTheMenu();
        this.createNowKeren();
    };
    UIInGameMenu.prototype.onTabRengDiao = function () {
        ViewManager.getInstance().resetMakeMenu();
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabMeat_0 = function () {
        ViewManager.getInstance().curMakeMenu[0] = 0;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabMeat_1 = function () {
        ViewManager.getInstance().curMakeMenu[0] = 1;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabMeat_2 = function () {
        ViewManager.getInstance().curMakeMenu[0] = 2;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabNoodles_0 = function () {
        ViewManager.getInstance().curMakeMenu[1] = 0;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabNoodles_1 = function () {
        ViewManager.getInstance().curMakeMenu[1] = 1;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabNoodles_2 = function () {
        ViewManager.getInstance().curMakeMenu[1] = 2;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabVeges_0 = function () {
        ViewManager.getInstance().curMakeMenu[2] = 0;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabVeges_1 = function () {
        ViewManager.getInstance().curMakeMenu[2] = 1;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.onTabVeges_2 = function () {
        ViewManager.getInstance().curMakeMenu[2] = 2;
        this.showMakeMenu();
    };
    UIInGameMenu.prototype.showMakeMenu = function () {
        var oo = ViewManager.getInstance().curMakeMenu;
        if (oo[0] < 0)
            this.makeMenu_0.text = "";
        else
            this.makeMenu_0.text = ViewManager.getInstance().getFoodName(0, oo[0]);
        if (oo[1] < 0)
            this.makeMenu_1.text = "";
        else
            this.makeMenu_1.text = ViewManager.getInstance().getFoodName(1, oo[1]);
        if (oo[2] < 0)
            this.makeMenu_2.text = "";
        else
            this.makeMenu_2.text = ViewManager.getInstance().getFoodName(2, oo[2]);
        // this.menu_0.text = ViewManager.getInstance().getFoodName(0 , ret[0]) ;
        // this.menu_1.text = ViewManager.getInstance().getFoodName(1 , ret[1]) ;
        // this.menu_2.text = ViewManager.getInstance().getFoodName(2 , ret[2]) ;
        // for(var i = 0; i < ret.length; i ++ ) {
        // 	this.menuList[i].text = ViewManager.getInstance().getFoodName(i , ret[i]) ;
        // }
        console.log(oo);
    };
    UIInGameMenu.prototype.addScore = function () {
        ViewManager.getInstance().score += 1;
        this.score.text = "分数：" + ViewManager.getInstance().score;
    };
    UIInGameMenu.prototype.showKerenMenu = function () {
        var ret = ViewManager.getInstance().curKerenMenu;
        this.menu_0.text = ViewManager.getInstance().getFoodName(0, ret[0]);
        this.menu_1.text = ViewManager.getInstance().getFoodName(1, ret[1]);
        this.menu_2.text = ViewManager.getInstance().getFoodName(2, ret[2]);
        // for(var i = 0; i < ret.length; i ++ ) {
        // 	this.menuList[i].text = ViewManager.getInstance().getFoodName(i , ret[i]) ;
        // } // ok now
        console.log(ret);
    };
    UIInGameMenu.prototype.checkTheMenu = function () {
        var keren = ViewManager.getInstance().curKerenMenu;
        var make = ViewManager.getInstance().curMakeMenu;
        var btn = this["btn_keren"];
        if (keren[0] == make[0] && keren[1] == make[1] && keren[2] == make[2] && keren[0] != -1) {
            btn.label = 'OK,Bye';
            this.addScore();
            this.onTabKeren();
        }
        else {
            btn.label = 'error';
        }
    };
    UIInGameMenu.prototype.onTouchTab = function () {
        console.log("B3_png onTouchTab");
    };
    return UIInGameMenu;
}(eui.Component));
__reflect(UIInGameMenu.prototype, "UIInGameMenu", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=UIInGameMenu.js.map