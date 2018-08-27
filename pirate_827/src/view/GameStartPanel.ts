/**
 *
 * @author 
 * 游戏开始界面
 */
class GameStartPanel extends egret.Sprite {

    public static GAME_START: string = "gameStart";
    private bg: egret.Bitmap;// 背景
    private startBtn: egret.TextField;//这里我们使用textfield当做按钮
    public constructor() {
        super();
        this.init();
    }
	
    //开启监听
    public start() {
        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
    }
    //初始化
    private init() {
        // let sky = ViewManager.createBitmapByName("bg_jpg");
        // this.addChild(sky);
        // let stageW = this.stage.stageWidth;
        // let stageH = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;

        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // topMask.y = 33;
        // this.addChild(topMask);

        // let icon: egret.Bitmap = ViewManager.createBitmapByName("egret_icon_png");
        // this.addChild(icon);
        // icon.x = 26;
        // icon.y = 33;

        // let line = new egret.Shape();
        // line.graphics.lineStyle(2, 0xffffff);
        // line.graphics.moveTo(0, 0);
        // line.graphics.lineTo(0, 117);
        // line.graphics.endFill();
        // line.x = 172;
        // line.y = 61;
        // this.addChild(line);


        // let colorLabel = new egret.TextField();
        // colorLabel.textColor = 0xffffff;
        // colorLabel.width = stageW - 172;
        // colorLabel.textAlign = "center";
        // colorLabel.text = "Hello Egret";
        // colorLabel.size = 24;
        // colorLabel.x = 172;
        // colorLabel.y = 80;
        // this.addChild(colorLabel);

        // let textfield = new egret.TextField();
        // this.addChild(textfield);
        // textfield.alpha = 0;
        // textfield.width = stageW - 172;
        // textfield.textAlign = egret.HorizontalAlign.CENTER;
        // textfield.size = 24;
        // textfield.textColor = 0xffffff;
        // textfield.x = 172;
        // textfield.y = 135;
        // this.textfield = textfield;

        let button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

        // this.bg = new egret.Bitmap(RES.getRes('gameStartBgImage'));
        // this.addChild(this.bg);

        this.startBtn = new egret.TextField();
        this.startBtn.text = '开始游戏';
        this.addChild(this.startBtn);
        this.startBtn.x = (480 - this.startBtn.width) * 0.5;
        this.startBtn.y = 400;
    }

    private textfield: egret.TextField;
    private onTouchTab(e: egret.TouchEvent) {
        var changeEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        changeEvent.eventType = GamePlayingPanel.CHANGEPANEL;
        changeEvent.obj = this;
        ViewManager.getInstance().dispatchEvent(changeEvent);
    }
	
    //结束界面，释放监听
    public end() {
        this.startBtn.touchEnabled = false;
        if(this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
    }

        /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }
}
