class UIInGameMenu extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	B3_png:eui.Button ;
	btn_keren:eui.Button ;
	score:eui.Label ;

	//定义扔掉按钮
	btn_reng:eui.Button ;
	btn_gei:eui.Button ;

	menu_0:eui.Label ;
	menu_1:eui.Label ;
	menu_2:eui.Label ;

	// menuList:eui.Label[] = [] ;
	//定义客人等待时间
	customer_bar:eui.ProgressBar ;
	 
	timer:egret.Timer ;

	makeMenu_0:eui.Label ;
	makeMenu_1:eui.Label ;
	makeMenu_2:eui.Label ;

	makeMenuList:eui.Label[]  ;

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	    this.btn_keren.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabKeren,this);

		// this.menuList.push(this.menu_0) ;
		// this.menuList.push(this.menu_1) ;
		// this.menuList.push(this.menu_2) ;

		this.makeMenuList = [] ;
		this.makeMenuList.push(this.makeMenu_0) ;
		this.makeMenuList.push(this.makeMenu_1) 
		this.makeMenuList.push(this.makeMenu_2) ;
		this.meat_0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabMeat_0,this);
		this.meat_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabMeat_1,this);
		this.meat_2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabMeat_2,this);
		this.noodles_0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabNoodles_0,this);
		this.noodles_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabNoodles_1,this);
		this.noodles_2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabNoodles_2,this);
		this.veges_0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabVeges_0,this);
		this.veges_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabVeges_1,this);
		this.veges_2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabVeges_2,this);
		//绑定扔掉按钮的事件
		this.btn_reng.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabRengDiao,this);
		this.btn_gei.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTabGei,this);
        
		
		this.timer = new egret.Timer(20,50); //9秒执行一次？
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.addCustomerBar,this);
		this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE ,this.createNowKeren,this);
	}
	 
     private addCustomerBar():void {
        this.customer_bar.value += 2;
    }

	private createNowKeren():void {
		this.onTabKeren() ;
		this.customer_bar.value = 0 ;
	}

     public onTabKeren():void{
		 ViewManager.getInstance().curKerenMenu = ViewManager.getInstance().generateMenuForCustomer();
		 this.addTheBar() ;
		 ViewManager.getInstance().resetMakeMenu() ;
		 this.showMakeMenu();
		 this.showKerenMenu() ;
	 }
    
	private addTheBar()
    {
        this.timer.reset() ;
        this.timer.start();
    }

     public onTabGei():void{
		 this.checkTheMenu() ;
		 this.createNowKeren() ;
	 }

	 public onTabRengDiao():void{
		 ViewManager.getInstance().resetMakeMenu() ;
		 this.showMakeMenu() ;
	 }

	 meat_0:eui.Button;
	 meat_1:eui.Button;
	 meat_2:eui.Button;
     
	 public onTabMeat_0():void{
		ViewManager.getInstance().curMakeMenu[0] = 0 ;
		this.showMakeMenu() ;
	 }

	 public onTabMeat_1():void{
		ViewManager.getInstance().curMakeMenu[0] = 1 ;
		this.showMakeMenu() ;
	 }

	 public onTabMeat_2():void{
		 ViewManager.getInstance().curMakeMenu[0] = 2 ;
		 this.showMakeMenu() ;
	 }
 
     noodles_0:eui.Button;
	 noodles_1:eui.Button;
	 noodles_2:eui.Button;

	 public onTabNoodles_0():void{
        ViewManager.getInstance().curMakeMenu[1] = 0 ;
		this.showMakeMenu();
	 }
	 public onTabNoodles_1():void{
		ViewManager.getInstance().curMakeMenu[1] = 1 ;
		this.showMakeMenu() ;

	 }
	 public onTabNoodles_2():void{
		 ViewManager.getInstance().curMakeMenu[1] = 2 ;
		 this.showMakeMenu() ;

	 }

	 veges_0:eui.Button;
	 veges_1:eui.Button;
	 veges_2:eui.Button;

	 public onTabVeges_0():void{
		 ViewManager.getInstance().curMakeMenu[2] = 0 ;
		 this.showMakeMenu() ;

	 }
	 public onTabVeges_1():void{
		 ViewManager.getInstance().curMakeMenu[2] = 1 ;
		 this.showMakeMenu() ;

	 }
	 public onTabVeges_2():void{
		 ViewManager.getInstance().curMakeMenu[2] = 2 ;
		 this.showMakeMenu();

	 }
	
	public showMakeMenu() {
		var oo = ViewManager.getInstance().curMakeMenu ;

		if( oo[0] < 0 )
			this.makeMenu_0.text = "" ;
		else
			this.makeMenu_0.text = ViewManager.getInstance().getFoodName(0 , oo[0]) ;

		if( oo[1] < 0 )
		    this.makeMenu_1.text = "";
		else
		    this.makeMenu_1.text = ViewManager.getInstance().getFoodName(1 , oo[1]) ;

		if ( oo[2] < 0)
		     this.makeMenu_2.text = "" ;
		else 
		     this.makeMenu_2.text = ViewManager.getInstance().getFoodName(2 , oo[2]) ;



		// this.menu_0.text = ViewManager.getInstance().getFoodName(0 , ret[0]) ;
		// this.menu_1.text = ViewManager.getInstance().getFoodName(1 , ret[1]) ;
		// this.menu_2.text = ViewManager.getInstance().getFoodName(2 , ret[2]) ;
		// for(var i = 0; i < ret.length; i ++ ) {
		// 	this.menuList[i].text = ViewManager.getInstance().getFoodName(i , ret[i]) ;
		// }

		console.log( oo ) ;
	}
   
	public addScore():void {	 	 
		 ViewManager.getInstance().score += 1 ;
		 this.score.text = "分数：" + ViewManager.getInstance().score ;
	}

	public showKerenMenu() {
		var ret = ViewManager.getInstance().curKerenMenu ;

		this.menu_0.text = ViewManager.getInstance().getFoodName(0 , ret[0]) ;
		this.menu_1.text = ViewManager.getInstance().getFoodName(1 , ret[1]) ;
		this.menu_2.text = ViewManager.getInstance().getFoodName(2 , ret[2]) ;
		// for(var i = 0; i < ret.length; i ++ ) {
		// 	this.menuList[i].text = ViewManager.getInstance().getFoodName(i , ret[i]) ;
		// } // ok now
		

		console.log( ret ) ;
	}
    
	
	public checkTheMenu(){
		var keren = ViewManager.getInstance().curKerenMenu ;
		var make  = ViewManager.getInstance().curMakeMenu ;
		
		var btn:eui.Button = (<eui.Button>this["btn_keren"]) ;
		if( keren[0] == make[0] && keren[1] == make[1] && keren[2] == make[2] && keren[0] != -1 ) {
            btn.label = 'OK,Bye' ;
			this.addScore() ;
			this.onTabKeren() ;
			
		} else {
			btn.label = 'error' ;
		}

	}

	public onTouchTab() {
		console.log("B3_png onTouchTab") ;
	}

}