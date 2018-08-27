/**
 *
 * @author 
 * 游戏结束界面
 */
class GameEndPanel extends egret.Sprite {
    public static GAME_END: string = "gameEnd";
    private bg: egret.Bitmap;// 背景
    private restartBtn: egret.TextField;//这里我们使用textfield当做按钮
    public constructor() {
        super();
        this.init();
    }
    	
    //开启监听
    public start() {
        this.restartBtn.touchEnabled = true;
        this.restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
    }
    //初始化
    private init() {
        this.bg = new egret.Bitmap(RES.getRes('gameEndBgImage'));
        this.addChild(this.bg);

        this.restartBtn = new egret.TextField();
        this.restartBtn.text = '重新开始游戏';
        this.addChild(this.restartBtn);
        this.restartBtn.x = (480 - this.restartBtn.width) * 0.5;
        this.restartBtn.y = 400;
    }

    private onTouchTab(e: egret.TouchEvent) {
        var changeEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        changeEvent.eventType = GameStartPanel.GAME_START;
        changeEvent.obj = this;
        ViewManager.getInstance().dispatchEvent(changeEvent);
    }
        	
    //结束界面，释放监听
    public end() {
        this.restartBtn.touchEnabled = false;
        if(this.restartBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.restartBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
    }
}
