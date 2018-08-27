/**
 *
 * @author 
 * 主要控制三个界面的切换
 */
class ViewManager extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    private static instance:ViewManager;
    private gameStartPanel: GameStartPanel; // 开始界面
    private gameEndPanel: GameEndPanel; //游戏结束界面
    private gamePlayingPanel: GamePlayingPanel; //游戏中界面 
	/**
	 * 这里初始化
	 */
    private init() {
        this.gameStartPanel = new GameStartPanel();
        this.gameEndPanel = new GameEndPanel();
        this.gamePlayingPanel = new GamePlayingPanel();
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT,this.onChangeScene,this);

    }
    
    //把顾客要点的菜分别都放在数组里，然后随意组合，表示是顾客的菜单
    meats:string[] = ["培根","虾","鱼块"];
    noodles:string[] = ["意大利面","蝴蝶面","面片"];
    vegetables:string[] = ["西蓝花","蘑菇","香菜"];
    
    //写一个方法，随机从上面的列表中组合得出菜单
    public generateMenuForCustomer(){
        var ret = []
        ret[0] = Math.floor(Math.random() * this.meats.length);
        ret[1] = Math.floor(Math.random() * this.noodles.length);
        ret[2] = Math.floor(Math.random() * this.vegetables.length);
        
        //console.log(this.meats[ret[0]]  + this.noodles[ret[1]] + this.vegetables[ret[2]]);
        console.log(ret);
        return ret;

    }
    
    public getFoodName( type:number , idx:number ) {
        if( type == 0 )
            return this.meats[idx] ; 
        if( type == 1 )
            return this.noodles[idx] ; 
        if( type == 2 )
            return this.vegetables[idx] ; 

        // var ret ;
        // if( type == 0 )
        //     ret = this.meats ; 
        // if( type == 1 )
        //     ret = this.noodles ; 
        // if( type == 2 )
        //     ret = this.vegetables ; 

        // return ret[idx] ;
    }
    

    //一个标记
    public curMakeMenu:number[] = [-1,-1,-1] ;
    public curKerenMenu:number[] = [-1,-1,-1] ;
    public score:number = 0 ;

    public resetMakeMenu() {
        this.curMakeMenu[0] = -1 ;
        this.curMakeMenu[1] = -1 ;
        this.curMakeMenu[2] = -1 ;
    }

    public start()
    {
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT,this.onChangeScene,this);
    }
    public static getInstance():ViewManager
    {
        if(ViewManager.instance == null)
        {
            ViewManager.instance = new ViewManager();
        }

        return ViewManager.instance;
    }

    public onChangeScene(e:ChangeSceneEvent)
    {
        e.obj.end();
        this.removeChildren();

        switch (e.eventType)
        {
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
            default :
                break;
        }
    }


        /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}
