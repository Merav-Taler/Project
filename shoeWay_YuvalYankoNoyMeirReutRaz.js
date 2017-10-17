(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"shoeWay_YuvalYankoNoyMeirReutRaz_atlas_", frames: [[3873,3220,200,200],[3873,3422,200,200],[0,4458,960,760],[0,2182,1600,1136],[1602,2182,1600,1136],[3983,365,91,41],[3904,96,182,41],[3904,184,130,37],[3671,2138,214,34],[3671,2098,222,38],[3904,223,113,36],[3904,139,117,43],[3983,408,91,41],[3402,0,500,267],[3973,568,87,36],[3973,527,83,39],[3973,606,83,36],[3973,682,87,34],[3973,644,83,36],[3983,451,101,36],[4019,223,77,36],[3204,2182,756,350],[3973,718,79,36],[3983,489,90,36],[3973,756,77,36],[3983,313,80,50],[3983,261,80,50],[0,3320,1600,1136],[1602,4131,1391,601],[2995,4131,1023,790],[1602,3320,2000,809],[4000,0,94,94],[3904,0,94,94],[962,4734,1024,534],[0,0,3400,2180],[3402,1671,267,173],[3742,2534,267,171],[3402,965,267,177],[3402,1144,267,175],[3671,1225,267,175],[538,5383,267,149],[269,5383,267,149],[2454,5396,267,145],[2185,5396,267,145],[3602,5251,267,159],[1988,5070,267,163],[3604,3389,267,167],[807,5270,267,157],[3064,5090,267,161],[538,5220,267,161],[2795,5253,267,159],[2526,5233,267,161],[3333,5090,267,161],[1076,5270,267,157],[2257,5070,267,163],[0,5220,267,161],[269,5220,267,161],[3204,2707,267,171],[3604,3558,267,167],[3671,1046,267,177],[3473,2707,267,171],[1231,4458,267,167],[3604,3896,267,167],[962,4458,267,167],[3604,3727,267,167],[2795,4923,267,165],[3064,4923,267,165],[1988,4734,267,167],[2257,4734,267,167],[2257,4903,267,165],[3333,4923,267,165],[3064,5253,267,159],[3333,5253,267,159],[3742,3049,267,169],[3402,1846,267,171],[3671,1752,267,171],[2526,4734,267,165],[3671,1925,267,171],[3402,1321,267,173],[2526,5068,267,163],[3602,5088,267,161],[3402,2019,267,161],[1988,5235,267,159],[1647,5270,267,151],[0,5383,267,151],[1916,5396,267,147],[3204,3051,267,167],[3742,2878,267,169],[3602,4923,267,163],[3742,2707,267,169],[3204,2880,267,169],[3473,3051,267,167],[3473,2534,267,171],[3402,784,267,179],[3671,865,267,179],[3671,1577,267,173],[3473,2880,267,169],[2526,4901,267,165],[3204,2534,267,171],[3671,1402,267,173],[3402,1496,267,173],[3704,499,267,183],[3704,684,267,179],[1345,5270,300,139],[3402,499,300,283],[2257,5235,267,159],[2795,5090,267,161],[3604,3220,267,167],[1988,4903,267,165],[3402,269,579,228]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._12adidaslogopngclipartthumbpngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._62nikelogofreepngimagethumb = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Artboard4 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.asicslogo = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap111 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap112 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap113 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap114 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap115 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap116 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap117 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap119 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap122 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap123 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap125 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap126 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap127 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap128 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap129 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap130 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap131 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap133 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap85 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.box = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_002 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_003 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_004 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_008 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_009 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_011 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_011pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_013 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_013pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_021 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_022 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_023 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_024 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_026 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_026pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_027 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_028 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_031 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_032 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_033 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_034 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_035 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_036 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_037 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_038 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_041 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_042 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_042pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_043 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_043pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_044 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_044pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_047pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_047pngcopy2 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_050 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_050pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_053 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_053pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_057 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_058 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_058pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_059 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_060 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_062 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_064 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_065 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_066 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_067 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_068 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_068pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_070 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_073 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_077 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_078 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_082 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_082pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_083pngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_085 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_086 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_088 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_089 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_090 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_094 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_095 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_096 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_097 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_103 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.HoS12_quizpngcopy = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.New_BalancelogoF34722CB97seeklogocom = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.pumalogoF9E13B654Cseeklogocom = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.unnamed1 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.unnamed2 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.unnamed3 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.unnamed4 = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.ספרינג = function() {
	this.spriteSheet = ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zoomKybe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_086();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.yeezyBoots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_097();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.year2017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRA3IAEgUIAGgVIAHgRIAIgRIAHgOIAFgJIg2AAIAAgKIBFAAIAAAHIgGALIgIAOIgIARIgIASIgFAVQgDAJgBALg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_1.setTransform(5.2,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOA1QgHgEgEgHQgFgHgCgJQgCgLAAgNQAAgNACgLQADgLAEgIQAFgHAGgDQAIgEAIAAQAhAAABA3QgBANgCAKQgDAMgEAGQgEAIgIAEQgGADgIAAQgIAAgGgDgAgWACQAAArAXABQAWgBAAgsQAAgugWAAQgXAAAAAvg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggA4IAAgGQAAgHABgFQACgGADgEIAJgKIAOgLIAJgHIAHgHIADgIIABgJQAAgFgCgEIgEgGQgCgDgEgBIgHgBIgIABIgGADIgGAEIgHAFIAAgNQAGgFAGgDQAHgCAJAAQAGAAAFACQAGACAFADQAEAEACAFQADAGAAAHQAAAHgCAEQgBAGgDAEIgIAIIgLAJIgMAJIgHAIQgEADgBAEIgBAIIA1AAIAAALg");
	this.shape_3.setTransform(-11,6.5);

	this.instance = new lib.Bitmap119();
	this.instance.parent = this;
	this.instance.setTransform(-18,-3,0.424,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,41,35.9);


(lib.year2010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_1.setTransform(5.2,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOA1QgHgEgEgHQgFgHgCgJQgCgLAAgNQAAgNACgLQADgLAEgIQAFgHAGgDQAIgEAIAAQAhAAABA3QgBANgCAKQgDAMgEAGQgEAIgIAEQgGADgIAAQgIAAgGgDgAgWACQAAArAXABQAWgBAAgsQAAgugWAAQgXAAAAAvg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggA4IAAgGQAAgHABgFQACgGADgEIAJgKIAOgLIAJgHIAHgHIADgIIABgJQAAgFgCgEIgEgGQgCgDgEgBIgHgBIgIABIgGADIgGAEIgHAFIAAgNQAGgFAGgDQAHgCAJAAQAGAAAFACQAGACAFADQAEAEACAFQADAGAAAHQAAAHgCAEQgBAGgDAEIgIAIIgLAJIgMAJIgHAIQgEADgBAEIgBAIIA1AAIAAALg");
	this.shape_3.setTransform(-11,6.5);

	this.instance = new lib.Bitmap122();
	this.instance.parent = this;
	this.instance.setTransform(-21,-3,0.515,0.515);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_5.setTransform(4.5,6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgnACQAAgcALgPQAKgOAUAAQAmAAAAA3QAAAbgLAOQgKAQgTgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_6.setTransform(-3.9,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AgjA4IAAgIQAAgJACgHQADgHAEgEIAKgKIAJgIIAIgFIAGgGIAEgHIABgGQAAgHgEgEQgEgEgHABQgOAAgNALIAAgVQAOgJARAAQAIAAAHACQAGACAFAEQAFAEACAGQACAFAAAHQAAAIgCAGQgCAFgEAFQgEAEgFAFIgKAHIgHAFIgFAGIgFAEIgBAFIAtAAIAAAUg");
	this.shape_7.setTransform(-13.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-17.9,44.8,35.9);


(lib.year2000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPA1QgGgEgFgHQgEgHgCgJQgCgLgBgNQABgNACgLQACgLAFgIQAFgHAGgDQAHgEAIAAQAjAAAAA3QAAANgCAKQgEAMgEAGQgFAIgGAEQgIADgHAAQgIAAgHgDgAgWACQAAArAWABQAXgBAAgsQAAgugXAAQgWAAAAAvg");
	this.shape_1.setTransform(5.8,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOA1QgHgEgEgHQgFgHgCgJQgCgLAAgNQAAgNACgLQADgLAEgIQAFgHAGgDQAIgEAIAAQAhAAABA3QgBANgCAKQgDAMgEAGQgEAIgIAEQgGADgIAAQgIAAgGgDgAgWACQAAArAXABQAWgBAAgsQAAgugWAAQgXAAAAAvg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggA4IAAgGQAAgHABgFQACgGADgEIAJgKIAOgLIAJgHIAHgHIADgIIABgJQAAgFgCgEIgEgGQgCgDgEgBIgHgBIgIABIgGADIgGAEIgHAFIAAgNQAGgFAGgDQAHgCAJAAQAGAAAFACQAGACAFADQAEAEACAFQADAGAAAHQAAAHgCAEQgBAGgDAEIgIAIIgLAJIgMAJIgHAIQgEADgBAEIgBAIIA1AAIAAALg");
	this.shape_3.setTransform(-11,6.5);

	this.instance = new lib.Bitmap123();
	this.instance.parent = this;
	this.instance.setTransform(-22,-4,0.51,0.51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmACQAAgcAKgPQALgOASAAQAmAAAAA3QABAbgLAOQgLAQgSgBQgmAAAAg2gAgPABQAAAlAPAAQAPAAAAgmQAAglgPAAQgPAAAAAmg");
	this.shape_5.setTransform(5,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnACQAAgcALgPQAKgOAUAAQAmAAAAA3QAAAbgLAOQgKAQgTgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_6.setTransform(-3.9,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA4IAAgIQAAgJACgHQADgHAEgEIAKgKIAJgIIAIgFIAGgGIAEgHIABgGQAAgHgEgEQgEgEgHABQgOAAgNALIAAgVQAOgJARAAQAIAAAHACQAGACAFAEQAFAEACAGQACAFAAAHQAAAIgCAGQgCAFgEAFQgEAEgFAFIgKAHIgHAFIgFAGIgFAEIgBAFIAtAAIAAAUg");
	this.shape_7.setTransform(-13.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-17.9,42.4,35.9);


(lib.year1990 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_1.setTransform(5.8,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap125();
	this.instance.parent = this;
	this.instance.setTransform(-20,-3,0.51,0.51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfA0IAAgUQAJAGALAAQAMAAAHgJQAHgIAAgQIgBAAQgHALgNAAQgIAAgFgDQgFgDgFgEQgEgEgCgGQgCgFgBgIQAAgIAEgIQACgHAFgFQAFgFAIgCQAGgDAIAAQAJAAAHADQAHAEAFAGQAFAHACAJQAEAJAAAMQgBAOgDALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgKgEgAgFgkIgFAEIgDAGIgBAHIABAHQABAEACACIAFADQADACACAAQADAAACgCIAFgDIADgFIABgGIgBgIIgDgHIgFgDIgFgCIgFABg");
	this.shape_5.setTransform(5,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA0IAAgUQAKAGAMAAQALAAAHgJQAHgIAAgQIAAAAQgIALgOAAQgGAAgGgDQgFgDgEgEQgFgEgCgGQgDgFABgIQAAgIACgIQADgHAFgFQAFgFAHgCQAIgDAHAAQAJAAAHADQAHAEAFAGQAFAHACAJQADAJAAAMQABAOgEALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgLgEgAgGgkIgEAEIgDAGIgBAHIABAHQABAEACACIAEADQAEACACAAQADAAADgCIAEgDIADgFIABgGIgBgIIgDgHIgEgDIgGgCIgGABg");
	this.shape_6.setTransform(-4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_7.setTransform(-13.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,42.8,35.9);


(lib.year1980 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNA2QgHgDgEgEQgFgEgDgGQgCgGAAgHIABgIIAEgJIAGgHQAEgCAFgCQgHgDgEgHQgFgGAAgHQAAgHADgFQACgFAEgEQAEgEAGgBQAFgCAGAAQAHAAAFACQAGABAEAEQAEAEACAFQADAFAAAHQAAAHgEAGQgFAHgHADQAFACAEACIAGAHIAEAJIABAIQAAAHgCAGQgDAGgEAEQgFAEgHADQgGADgIgBQgHABgGgDgAgIACQgEACgDADIgEAHQgCAEAAAFQAAAFACAEQABAEADADQADADAEACQAEABAEAAQAFAAAEgBQAEgCADgDIAFgHQABgEAAgFQAAgEgBgFIgFgGIgHgGQgEgBgFAAQgEAAgEABgAgGgrQgEABgCACIgEAGIgBAIIABAHIAEAFQADADADABQADABADABIAHgCIAGgEIAEgFIABgHQAAgFgBgDIgEgGIgGgDIgHgCQgDAAgDACg");
	this.shape_1.setTransform(5.8,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap126();
	this.instance.parent = this;
	this.instance.setTransform(-18,-1,0.476,0.476);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOA2QgIgCgFgFQgFgDgDgGQgDgGAAgHQAAgEACgEIAEgIIAGgHQAEgCAGgBQgJgFgEgGQgFgHAAgHQAAgHADgFQADgFAEgFQAFgDAGgCQAHgCAGAAQAIAAAHACQAGACAFADQAEAFADAEQADAGAAAGQAAAIgFAGQgFAHgJAEQAGACAEACIAGAGQADADACAFIABAJQAAAHgDAFQgDAGgFAEQgFAEgHADQgHADgJgBQgHABgHgDgAgFAIIgFADIgEAGIgBAGIABAGQABADADADIAFADIAFABIAHgBQADgBACgCIADgGIABgGIgBgGIgDgGIgFgDIgHgBIgFABgAgEglIgEADQgCACgBACIgBAFQAAADACADIACAEIAEADIAEACIAGgCIAEgDIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAIgEACg");
	this.shape_5.setTransform(5,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA0IAAgUQAKAGAMAAQALAAAHgJQAHgIAAgQIAAAAQgIALgOAAQgGAAgGgDQgFgDgEgEQgFgEgCgGQgDgFABgIQAAgIACgIQADgHAFgFQAFgFAHgCQAIgDAHAAQAJAAAHADQAHAEAFAGQAFAHACAJQADAJAAAMQABAOgEALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgLgEgAgGgkIgEAEIgDAGIgBAHIABAHQABAEACACIAEADQAEACACAAQADAAADgCIAEgDIADgFIABgGIgBgIIgDgHIgEgDIgGgCIgGABg");
	this.shape_6.setTransform(-4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_7.setTransform(-13.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,43.8,35.9);


(lib.year1970 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRA3IAEgUIAGgVIAHgRIAIgRIAHgOIAFgJIg2AAIAAgKIBFAAIAAAHIgGALIgIAOIgIARIgIASIgFAVQgDAJgBALg");
	this.shape_1.setTransform(5.8,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap127();
	this.instance.parent = this;
	this.instance.setTransform(-19,-2,0.51,0.51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWA3IAGgZIAIgXIAJgVIALgUIgxAAIAAgTIBLAAIAAANIgOAZIgKAWIgHAWIgFAag");
	this.shape_5.setTransform(5.1,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA0IAAgUQAKAGAMAAQALAAAHgJQAHgIAAgQIAAAAQgIALgOAAQgGAAgGgDQgFgDgEgEQgFgEgCgGQgDgFABgIQAAgIACgIQADgHAFgFQAFgFAHgCQAIgDAHAAQAJAAAHADQAHAEAFAGQAFAHACAJQADAJAAAMQABAOgEALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgLgEgAgGgkIgEAEIgDAGIgBAHIABAHQABAEACACIAEADQAEACACAAQADAAADgCIAEgDIADgFIABgGIgBgIIgDgHIgEgDIgGgCIgGABg");
	this.shape_6.setTransform(-4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_7.setTransform(-13.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,43.8,35.9);


(lib.year1960 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNA1QgHgDgFgHQgEgGgCgJQgDgKAAgLQAAgOADgLQAEgMAFgJQAGgHAIgFQAIgFAKABQALAAAHADIAAALQgJgEgJAAQgHAAgFADQgGAEgEAFQgEAHgDAIQgCAJAAAJQAIgNAQAAQAIAAAFADQAGACAEAEQAEAEACAGQADAGAAAIQAAAIgDAHQgDAGgEAFQgFAFgGADQgGACgIAAQgHAAgGgDgAgHAAQgEABgDACQgDADgBAFQgCADAAAFQAAAGACAEQABAFADAEQADAEAEACQAEACAEAAQAFgBADgBIAHgFQADgDABgFQACgEAAgGQAAgFgCgFQgBgFgDgDQgDgDgDAAQgEgCgFAAQgEAAgEACg");
	this.shape_1.setTransform(5.9,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap128();
	this.instance.parent = this;
	this.instance.setTransform(-25,-3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-17.9,51.5,35.9);


(lib.year1950 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAzIAAgOQALAIAMAAQAGgBAEgBIAIgFQADgDACgFQACgEAAgFQAAgLgHgGQgIgFgMAAIgFAAIgFABIgEAAIgFAAIAEg2IAyAAIAAAKIgnAAIgCAhIAFAAIAFgBQAHAAAHADQAHACAFAEQAFADACAHQADAFAAAIQAAAIgDAHQgDAGgFAFQgFAEgHADQgHADgIgBQgPAAgIgEg");
	this.shape_1.setTransform(5.9,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap129();
	this.instance.parent = this;
	this.instance.setTransform(-19,-3,0.51,0.51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAzIAAgVQALAHAMAAQAKAAAEgEQAGgFAAgIQAAgQgWAAIgUABIAEg7IA5AAIAAATIgmAAIgCAWIAKgBQAQAAAKAJQAJAIAAAPQAAARgLAKQgMAKgSAAQgQAAgKgEg");
	this.shape_5.setTransform(5,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA0IAAgUQAKAGAMAAQALAAAHgJQAHgIAAgQIAAAAQgIALgOAAQgGAAgGgDQgFgDgEgEQgFgEgCgGQgDgFABgIQAAgIACgIQADgHAFgFQAFgFAHgCQAIgDAHAAQAJAAAHADQAHAEAFAGQAFAHACAJQADAJAAAMQABAOgEALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgLgEgAgGgkIgEAEIgDAGIgBAHIABAHQABAEACACIAEADQAEACACAAQADAAADgCIAEgDIADgFIABgGIgBgIIgDgHIgEgDIgGgCIgGABg");
	this.shape_6.setTransform(-4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_7.setTransform(-13.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,40.8,35.9);


(lib.year1940 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMA3IAAgaIgyAAIAAgLIAOgRIAPgSIALgSIAKgSIAMAAIAABHIAPAAIAAALIgPAAIAAAagAACgRIgJAOIgJALIgIAKIAkAAIAAg1IgKASg");
	this.shape_1.setTransform(5.6,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap130();
	this.instance.parent = this;
	this.instance.setTransform(-15,-1,0.431,0.431);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGA3IAAgXIguAAIAAgTIANgOIANgRIAMgSIAIgRIAWAAIAABDIANAAIAAASIgNAAIAAAXgAABgNIgGAKIgHAIIgHAJIAZAAIAAglIgFAKg");
	this.shape_5.setTransform(4.9,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA0IAAgUQAKAGAMAAQALAAAHgJQAHgIAAgQIAAAAQgIALgOAAQgGAAgGgDQgFgDgEgEQgFgEgCgGQgDgFABgIQAAgIACgIQADgHAFgFQAFgFAHgCQAIgDAHAAQAJAAAHADQAHAEAFAGQAFAHACAJQADAJAAAMQABAOgEALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgLgEgAgGgkIgEAEIgDAGIgBAHIABAHQABAEACACIAEADQAEACACAAQADAAADgCIAEgDIADgFIABgGIgBgIIgDgHIgEgDIgGgCIgGABg");
	this.shape_6.setTransform(-4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_7.setTransform(-13.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-15}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{x:-16}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,40.8,35.9);


(lib.year1930 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAyIAAgNQALAJAOAAIAKgBQAEgCAEgDQADgCACgEQACgFAAgEQAAgWgdAAIgJAAIAAgKIAIAAQAaAAAAgTQAAgTgUAAQgLAAgKAIIAAgNQAKgFAPAAQAFAAAGACQAGABAEADQAEAEACAFQACAEAAAGQAAAWgWAGIAAABQAFAAAFACQAFABAEADIAEAIQACAFAAAFQAAAIgCAGQgDAGgFAEQgFAEgHADQgIADgHgBQgQABgJgHg");
	this.shape_1.setTransform(5.7,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap131();
	this.instance.parent = this;
	this.instance.setTransform(-20,-2,0.51,0.51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAzIAAgVQALAIAPAAQAIAAAFgEQAFgEAAgHQAAgIgGgEQgFgDgMAAIgKAAIAAgRIAKAAQAUAAAAgPQAAgNgPAAQgLAAgLAHIAAgUQAMgGAPABQAQgBAJAIQAKAHAAANQAAAVgWAGIAAAAQALABAHAGQAHAHAAAKQAAAQgLAIQgMAKgSgBQgRAAgLgFg");
	this.shape_5.setTransform(4.9,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA0IAAgUQAKAGAMAAQALAAAHgJQAHgIAAgQIAAAAQgIALgOAAQgGAAgGgDQgFgDgEgEQgFgEgCgGQgDgFABgIQAAgIACgIQADgHAFgFQAFgFAHgCQAIgDAHAAQAJAAAHADQAHAEAFAGQAFAHACAJQADAJAAAMQABAOgEALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgLgEgAgGgkIgEAEIgDAGIgBAHIABAHQABAEACACIAEADQAEACACAAQADAAADgCIAEgDIADgFIABgGIgBgIIgDgHIgEgDIgGgCIgGABg");
	this.shape_6.setTransform(-4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_7.setTransform(-13.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,46.3,35.9);


(lib.year1920 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghA4IAAgGQABgHABgFQABgGAEgEIAJgKIAOgLIAJgHIAGgHIAEgIIABgJQAAgFgBgEIgFgGQgDgDgEgBIgGgBIgHABIgHADIgHAEIgFAFIAAgNQAFgFAGgDQAHgCAJAAQAGAAAFACQAHACADADQAFAEACAFQADAGgBAHQABAHgCAEQgCAGgCAEIgIAIIgLAJIgMAJIgIAIQgCADgBAEIgBAIIA1AAIAAALg");
	this.shape_1.setTransform(5.8,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,40.8,35.9);


(lib.year1910 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_1.setTransform(5.2,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,40.8,35.9);


(lib.year1900 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA1QgHgEgFgHQgEgHgCgJQgDgLAAgNQAAgNADgLQADgLAEgIQAEgHAIgDQAHgEAHAAQAjAAgBA3QAAANgCAKQgCAMgFAGQgFAIgGAEQgIADgHAAQgIAAgGgDgAgVACQAAArAVABQAXgBAAgsQAAgugXAAQgVAAAAAvg");
	this.shape.setTransform(14.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPA1QgGgEgFgHQgEgHgCgJQgCgLgBgNQABgNACgLQACgLAFgIQAFgHAGgDQAHgEAIAAQAjAAAAA3QAAANgCAKQgEAMgEAGQgFAIgGAEQgIADgHAAQgIAAgHgDgAgWACQAAArAWABQAXgBAAgsQAAgugXAAQgWAAAAAvg");
	this.shape_1.setTransform(5.8,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1IAAgNQAJAGALAAQAHAAAFgDQAGgDAEgGQAEgGACgIQACgJAAgLIAAAAQgHAOgRAAQgHAAgFgDQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgIADgHQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGADQAGADAFAGQAEAHACAJQADAJAAAMQAAAOgDAMQgDALgGAJQgGAIgIAEQgIAEgKAAQgKAAgJgDgAgIgrQgEACgDADQgDADgBAEQgCAFAAAFQAAAGACAFQABAEADADQADADAEABQAEACAEAAQAFAAADgBIAHgEIAFgGQABgFAAgEQAAgGgBgFIgFgJQgDgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(-2.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA4IAAheIgEAEIgFADIgHAEIgIACIAAgMIAJgDIAJgFIAHgFIAHgFIAFAAIAABvg");
	this.shape_3.setTransform(-11.6,6.5);

	this.instance = new lib.Bitmap133();
	this.instance.parent = this;
	this.instance.setTransform(-18,-3,0.51,0.51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnACQAAgcALgPQALgOATAAQAlAAABA3QAAAbgLAOQgLAQgSgBQgmAAgBg2gAgOABQAAAlAOAAQAPAAAAgmQAAglgOAAQgQAAABAmg");
	this.shape_4.setTransform(14,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmACQAAgcAKgPQALgOASAAQAmAAAAA3QABAbgLAOQgLAQgSgBQgmAAAAg2gAgPABQAAAlAPAAQAPAAAAgmQAAglgPAAQgPAAAAAmg");
	this.shape_5.setTransform(5,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA0IAAgUQAKAGAMAAQALAAAHgJQAHgIAAgQIAAAAQgIALgOAAQgGAAgGgDQgFgDgEgEQgFgEgCgGQgDgFABgIQAAgIACgIQADgHAFgFQAFgFAHgCQAIgDAHAAQAJAAAHADQAHAEAFAGQAFAHACAJQADAJAAAMQABAOgEALQgDAMgGAIQgHAIgIAEQgJAEgKAAQgNAAgLgEgAgGgkIgEAEIgDAGIgBAHIABAHQABAEACACIAEADQAEACACAAQADAAADgCIAEgDIADgFIABgGIgBgIIgDgHIgEgDIgGgCIgGABg");
	this.shape_6.setTransform(-4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA4IAAhUIgEAEIgGACIgGADIgHABIAAgVQAKgCAIgFIAOgJIAPAAIAABvg");
	this.shape_7.setTransform(-13.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.9,41.7,35.9);


(lib.walkingShoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaAwIAAg4QAAgIgCgFQgCgGgDgDQgEgDgFgBIgMgBIgJAAIgKACIgKABIgHABIABgMIAIgBIAKgCIAJAAIAKgBQAIAAAIADQAHACAFAEQAFAFADAHQADAHAAAKIAAA5gAglAwIAAg2IANgGIAAA8g");
	this.shape.setTransform(16,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSBBIAEgLIAFAAIAGgBIAFgBIAFgDIAFgDIAEgGIACgHIABgHIACgWIABgCIAAgEQAAgEgCgCQgBgDgCgCIgGgDIgIgBIglAAIAAguIANAAIAAAjIAbAAQAGAAAGACIAJAEQAEAEACAEQACAFAAAEIgBAFIAAADIgCAWIgBAJIgDAIIgEAIQgDAEgDACQgEADgFACIgJADIgJABIgJAAg");
	this.shape_1.setTransform(6.3,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape_2.setTransform(0.1,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAwIgGgBIgFgBIgEgBIACgKIAJABIAKABQAJAAAFgCQAHgDAEgEQAFgEACgHQACgHAAgKQAAgIgCgHQgCgGgEgFQgEgFgHgCQgFgDgJAAIgFAAIgHABIgGABIgFAAIABgKIAFgCIAGAAIAGgBIAGAAQAKAAAJADQAIADAGAGQAGAGADAJQADAJAAAMQAAAXgMAMQgLAMgXAAIgHAAg");
	this.shape_3.setTransform(-6.4,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaAwIAAg4QAAgIgCgFQgCgGgDgDQgEgDgFgBIgMgBIgJAAIgKACIgKABIgHABIABgMIAIgBIAKgCIAJAAIAKgBQAIAAAIADQAHACAFAEQAFAFADAHQADAHAAAKIAAA5gAglAwIAAg2IANgGIAAA8g");
	this.shape_4.setTransform(-15.7,7.3);

	this.instance = new lib.Bitmap117();
	this.instance.parent = this;
	this.instance.setTransform(-29,-4,0.51,0.51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAwIAAg0QAAgKgEgGQgGgHgLABIgOABIgZADIACgTQAVgFAUgBQAUAAAMAMQAKAKAAAUIAAA1gAgoAwIAAg1IAYgMIAABBg");
	this.shape_5.setTransform(15.9,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBBIAGgUIAFAAQAIAAAEgCQAFgCACgEQADgFABgGIABgVIAAgCQAAgDgBgDIgEgEQgDgBgGAAIgmAAIAAg3IAZAAIAAAjIARAAQARAAAJAHQAJAIAAAPIAAAEIgDAVQgCATgKAKQgLAJgUAAg");
	this.shape_6.setTransform(5.8,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_7.setTransform(-0.8,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAtIACgTQANACAMAAQAJAAAFgDQAGgDACgFQADgGAAgKQAAgLgDgGQgCgGgGgCQgFgDgJAAQgPAAgNADIACgUIANgCIAQgBQAPAAAKAFQAMAFAEAKQAFALABAQQAAAZgNAMQgLALgZAAQgRAAgLgDg");
	this.shape_8.setTransform(-7.9,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAwIAAg0QAAgKgEgGQgGgHgLABIgOABIgZADIACgTQAVgFAUgBQAUAAAMAMQAKAKAAAUIAAA1gAgoAwIAAg1IAYgMIAABBg");
	this.shape_9.setTransform(-17.7,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-17.9,65.6,35.9);


(lib.waffleTread = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_021();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.vans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-30,-15,0.03,0.037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-15,60,30);


(lib.ultraBoost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_096();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.trainer80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_032();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.trackSpikes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unnamed4();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-82.5,267,165);


(lib.tiger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_026();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.superAtomPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_013pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-260.9,-141.7,1.954,1.954);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.superAtomPic, new cjs.Rectangle(-260.9,-141.7,521.8,283.4), null);


(lib.superAtom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_013();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.sqash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_024();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.springCourt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ספרינג();
	this.instance.parent = this;
	this.instance.setTransform(-40,-19,0.138,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-19,80,38);


(lib.sportElegant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAtQgIgEgFgGQgFgGgCgJQgDgJAAgKIAAgtIAKgBIALgBIAKgBIALAAQAKAAAIAEQAIADAGAHQAFAGADAJQADAJAAAKQAAAKgDAJQgDAIgGAHQgGAGgIAEQgIADgKAAQgKAAgIgDgAgPgjIgOACIAAAhIABANQACAHADAFQADAFAGADQAFAEAIAAQAIAAAGgEQAGgDADgFQAEgFACgGQACgHAAgGQAAgHgCgHQgCgHgEgFQgEgFgFgDQgGgDgHAAIgPABg");
	this.shape.setTransform(43.9,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAwIgJgBIgJgBIgHgCIACgLIANACIAQABQAHAAAHgBQAGgCAEgEQAFgFACgGQACgHAAgKQAAgRgIgKQgHgKgQAAIgMABIgJABIAAAeIAaAAIgDAKIgjAAIAAgwIAHgCIAJgCIAJgBIAHAAQAKAAAJADQAIADAGAGQAGAGADAJQADAKAAALQAAAMgDAJQgDAJgGAGQgGAGgJACQgIADgKAAIgHAAg");
	this.shape_1.setTransform(33.8,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_2.setTransform(26.7,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAwIAAg4QAAgOgHgHQgHgGgNAAIgPABIgOACIACgLIAGgBIAIgCIAHAAIAGgBQAIAAAIADQAHACAGAEQAFAGADAHQADAGAAAKIAAA5g");
	this.shape_3.setTransform(19.7,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAtQgHgDgGgGQgFgGgDgJQgDgJAAgLIAAgvIANAAIAAAuIACANQABAHADAFQADAFAGADQAFAEAJAAQAGAAAGgDQAGgDAEgFQAEgEACgHQACgGAAgHIAAgKQAAgGgCgFIgEgJIgGgFQgEgDgFAAIgHABIgHABIACgMIAGgBIAIAAQAHAAAFADQAGACAEAFQAFAGACAHQADAHAAAJIAAAJQAAAKgDAJQgDAJgGAGQgGAGgIAEQgIADgKAAQgJAAgIgDg");
	this.shape_4.setTransform(10.7,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAFIAAgJIApAAIAAAJg");
	this.shape_5.setTransform(2.2,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAvIgGgKIgGgJIgGgIIgFgJIgGgJIgIgLQgEAEgCADIgDAEIgBAHIAAAIIAAAeIgOAAIAAgfIABgKIAEgIIAEgIIAIgHIgRgXIAMgGIAGAJIAHAJIAGAJIAFAIIALAPQANgHAAgQIAAgaIANAAIAAAYIgBALIgEAJIgGAHIgJAHIAYAig");
	this.shape_6.setTransform(-5.7,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSBBIAEgLIAFAAIAGgBIAFgBIAFgDIAFgDIAEgGIACgHIABgHIACgWIABgCIAAgEQAAgEgCgCQgBgDgCgCIgGgDIgIgBIglAAIAAguIANAAIAAAjIAbAAQAGAAAGACIAJAEQAEAEACAEQACAFAAAEIgBAFIAAADIgCAWIgBAJIgDAIIgEAIQgDAEgDACQgEADgFACIgJADIgJABIgJAAg");
	this.shape_7.setTransform(-15.2,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAvIgDglQgGACgFADQgDADgEADIgDAFIgCAHIgDAHIgCAHIgMAAIADgMIACgEIACgFIACgFIACgDQADgEAEgDIAHgEIAGgEIAIgDIgCgTQAAgFgBgCIgFgFQgDgCgCgBIgHgBIgQAAIACgLIANAAQAIAAAEACQAGABAEADQAEADADAFQADAFAAAHIAFBDg");
	this.shape_8.setTransform(-23,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAwIACgNIAaAAIAAgvIgBgKQAAgDgCgEQgCgDgDgBQgCgCgFAAIgDAAIgCABIgDAAIgCAAIACgMIAFAAIAHgBQAEAAAEACQADABADADIAFAFIADAHIABAIIABAJIAAA8g");
	this.shape_9.setTransform(-29.5,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAtQgHgDgGgGQgFgGgDgJQgDgJAAgLIAAgvIANAAIAAAuIACANQABAHADAFQADAFAGADQAFAEAJAAQAGAAAGgDQAGgDAEgFQAEgEACgHQACgGAAgHIAAgKQAAgGgCgFIgEgJIgGgFQgEgDgFAAIgHABIgHABIACgMIAGgBIAIAAQAHAAAFADQAGACAEAFQAFAGACAHQADAHAAAJIAAAJQAAAKgDAJQgDAJgGAGQgGAGgIAEQgIADgKAAQgJAAgIgDg");
	this.shape_10.setTransform(-37.5,7.4);

	this.instance = new lib.Bitmap115();
	this.instance.parent = this;
	this.instance.setTransform(-56,-3,0.514,0.519);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiAlQgMgMAAgXIAAgsIAYgEQAJgBAKAAQAZAAAMAMQANAMAAAXQAAAXgMANQgMAMgXAAQgWAAgMgLgAgVgaIAAAbQAAAOAGAHQAFAHAKAAQALAAAFgHQAGgIAAgOQAAgOgGgHQgGgHgMAAQgLAAgIACg");
	this.shape_11.setTransform(43.5,7.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqAsIADgTQAQAEAMAAQAPAAAHgHQAHgHAAgPQAAgPgGgHQgGgGgNAAIgKABIAAAQIALAAIgDATIghAAIAAgzQARgEAUAAQAZAAALALQAMAMAAAYQAAAYgMAMQgNAMgZAAQgTAAgQgEg");
	this.shape_12.setTransform(32.6,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAvIAAhdIAXAAIAABdg");
	this.shape_13.setTransform(24.9,7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQAwIAAg0QAAgLgGgGQgFgFgMAAQgNAAgTADIACgUQARgEASAAQAUAAALAMQALAKAAAVIAAA0g");
	this.shape_14.setTransform(17.4,7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghAkQgMgLAAgXIAAgwIAZAAIAAAuQAAANAFAIQAGAHAJAAQALAAAFgGQAGgHAAgMIAAgJQAAgLgFgFQgFgFgJAAQgEAAgJACIACgTQAIgDAKAAQASAAAJALQAJAKAAAVIAAAGQAAAXgLAMQgMAMgXAAQgWAAgLgMg");
	this.shape_15.setTransform(8,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAIIAAgQIApAAIAAAQg");
	this.shape_16.setTransform(-0.8,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAwIgNgUIgTgcQgEAEgCAFQgBAEAAAKIAAAZIgZAAIAAgbQAAgIACgFQACgHAEgDQAEgGAJgHIgSgVIAJgFIAOgGIASAZIAOAVQAFgGADgDQACgFAAgIIAAgVIAYAAIAAAXQAAAKgFAJQgFAGgNAKIAYAig");
	this.shape_17.setTransform(-9.5,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBBIAHgUIAFAAQAIAAAEgCQAEgCADgEQACgFABgGIACgVIAAgCQAAgDgBgDIgEgEQgCgBgHAAIgmAAIAAg3IAZAAIAAAjIAQAAQASAAAJAHQAIAIAAAPIAAAEIgBAVQgCATgLAKQgLAJgUAAg");
	this.shape_18.setTransform(-20,5.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAJAvIgBgdQgFACgDADQgCADgCAFIgEAQIgYAAQAEgRAEgJQAEgJAIgGQAIgFAKgDIgCgOQAAgFgEgDQgCgCgIAAIgQAAIAEgUIAQAAQARAAAIAHQAIAGABAOIAFBCg");
	this.shape_19.setTransform(-28.5,7.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAwIADgUIAXAAIAAgjQAAgMgCgEQgDgEgIAAIgJACIADgTQAGgDAIAAQAJAAAHAEQAHAEADAHQAEAJAAAMIAAA7g");
	this.shape_20.setTransform(-35.8,7.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghAkQgMgLAAgXIAAgwIAZAAIAAAuQAAANAFAIQAGAHAJAAQALAAAFgGQAGgHAAgMIAAgJQAAgLgFgFQgFgFgJAAQgEAAgJACIACgTQAIgDAKAAQASAAAJALQAJAKAAAVIAAAGQAAAXgLAMQgMAMgXAAQgWAAgLgMg");
	this.shape_21.setTransform(-44.2,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-17.9,122.2,35.9);


(lib.spikeShoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_002();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.spezial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_028();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.speedcat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-40,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-25,80,50);


(lib.sneaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_003();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.shoesNikeAir1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_047pngcopy2();
	this.instance.parent = this;
	this.instance.setTransform(-250.2,-156.5,1.875,1.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoesNikeAir1, new cjs.Rectangle(-250.2,-156.5,500.5,313.1), null);


(lib.shaqnosis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_060();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.SBdunk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_073();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.298,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.samba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_011();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.runningShoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAwIAAg4QAAgOgHgHQgHgGgNAAIgPABIgOACIACgLIAGgBIAIgCIAHAAIAGgBQAIAAAIADQAHACAGAEQAFAGADAHQADAGAAAKIAAA5g");
	this.shape.setTransform(13.6,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape_1.setTransform(7.7,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglAvIAEgMIA0AAIg2hMIAMgFIAiAwIAFgDIAEgGIADgIQACgEAAgGIAAgUIANAAIAAASQAAAIgCAGQgBAFgDAFQgDADgEAEIgIAHIARAYIgEAMg");
	this.shape_2.setTransform(0.8,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaAwIAAg4QAAgIgCgFQgCgGgDgDQgEgDgFgBIgMgBIgJAAIgKACIgKABIgHABIABgMIAIgBIAKgCIAJAAIAKgBQAIAAAIADQAHACAFAEQAFAFADAHQADAHAAAKIAAA5gAglAwIAAg2IANgGIAAA8g");
	this.shape_3.setTransform(-8.8,7.3);

	this.instance = new lib.Bitmap111();
	this.instance.parent = this;
	this.instance.setTransform(-29,-6,0.659,0.659);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"],83), null, new cjs.Matrix2D(1,0,0,1,-0.5,-0.5)).s().p("AjwByIAAjkIHhAAIAADkg");
	this.shape_4.setTransform(3.7,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAwIAAg0QAAgLgGgGQgFgFgMAAQgNAAgTADIACgUQARgEASAAQAUAAALAMQALAKAAAVIAAA0g");
	this.shape_5.setTransform(13.3,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_6.setTransform(7,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqAwIAEgUIAuAAIguhAIAWgLIAeApIADgIIABgNIAAgRIAZAAIAAATQAAAKgEAIQgEAIgLAJIAPAVIgEARg");
	this.shape_7.setTransform(-0.6,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAwIAAg0QgBgKgFgGQgFgHgLABIgOABIgZADIACgTQAWgFATgBQAUAAALAMQALAKAAAUIAAA1gAgpAwIAAg1IAZgMIAABBg");
	this.shape_8.setTransform(-10.7,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AAAAFIAAgJ");
	this.shape_9.setTransform(-22.3,18.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"],83), null, new cjs.Matrix2D(1,0,0,1,-0.3,-0.5)).s().p("AjhByIgMAAIAAjjIHbAAIAADjg");
	this.shape_10.setTransform(0.3,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance,p:{x:-29}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.instance,p:{x:-30}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-17.9,60,39);


(lib.regularButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("הצג הכל", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-1.5,-10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AAADAQi0AAiOggQgzgJgugPQiug5ABhPQgBhPCug4QAugOAzgLQCOgeC0gBIAGAAQC2ABCOAeQAuALArAOQCuA4AABPQAAAhgeAdQgrAphlAhQgrAOguAKQiOAgi2AAIgGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-19.2,118.7,38.4);


(lib.pumpFury = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_065();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.pumaLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pumalogoF9E13B654Cseeklogocom();
	this.instance.parent = this;
	this.instance.setTransform(-54.1,-51.1,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pumaLogo, new cjs.Rectangle(-54.1,-51.1,108.4,102.2), null);


(lib.puma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-40,-19,0.16,0.142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-19,80,38);


(lib.practiceShoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXAvIgGgKIgGgJIgGgIIgFgJIgHgJIgIgLQgDAEgBADIgEAEIgBAHIAAAIIAAAeIgNAAIAAgfIABgKIACgIIAGgIIAHgHIgQgXIALgGIAGAJIAHAJIAGAJIAGAIIAKAPQANgHAAgQIAAgaIANAAIAAAYIgBALIgEAJIgGAHIgIAHIAWAig");
	this.shape.setTransform(48,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape_1.setTransform(40.9,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAwIgGgDIADgKIAEABIAGABQAFAAADgCIAEgEIADgHIACgJIAAgSIgBgHIgCgIIgDgHQgCgDgEgCIgGgEQgFgBgGgBIgFABIgHADIgHAEIgEAFIgBADIgBADIAABAIgNAAIAAhMIgBgHIgBgHIALgEIACAFIABAIQAGgGAIgEQAGgDAJAAQAJAAAIADQAHADAFAGQAEAFADAJQACAHAAAKIAAASQAAAIgBAGQgCAHgEAFQgEAEgFACQgFADgHAAIgIgBg");
	this.shape_2.setTransform(33.7,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_3.setTransform(26.2,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFBCIAAiDIALAAIAACDg");
	this.shape_4.setTransform(22.1,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFAwIgGgDIADgKIAFABIAFABQAEAAADgCIAGgEIACgHIABgJIAAgSIAAgHIgCgIIgDgHQgCgDgEgCIgHgEQgEgBgGgBIgFABIgHADIgHAEIgEAFIgCADIAAADIAABAIgNAAIAAhMIAAgHIgCgHIALgEIACAFIABAIQAGgGAIgEQAGgDAJAAQAJAAAHADQAHADAGAGQAEAFADAJQACAHABAKIAAASQgBAIgBAGQgCAHgEAFQgDAEgGACQgFADgHAAIgIgBg");
	this.shape_5.setTransform(10.6,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAvIgOhdIAOAAIAIA5IAIgDIAGgDIAFgFQADgBABgEIADgJIACgMIAAgHIABgGIABgHIAMAAIAAAGIgBAHIgBAIIgDASQgDAHgEAFQgEAGgHAEQgHAEgKADIACAMIAiAAIAJgBQAEgCADgDQAEgEACgHQADgGABgKIADgVIABgPIABgLIAOAAIgCAKIgBAPIgDAVQgBAMgDAJQgDAJgFAGQgFAGgGACQgHADgJAAg");
	this.shape_6.setTransform(-0.9,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBDIAAheIAOAAIAABegAgCARQAFAAAGgCQAHgCADgFQAFgEADgFQACgHACgKIABgKIAAgBIAAgCIAAgDIAAgCQAAgEgCgEQgBgEgEgCQgDgDgGgBQgEgBgIAAIgMAAIgMABIgLACIgNACIADgNIAIgBIALAAIAMgBIANgBQALAAAIACQAIACAEAEQAGADACAHQADAFgBAIIAAADIAAADIgBAJQAAAOgFAHQgDAKgGAGQgGAGgIACQgJADgKACg");
	this.shape_7.setTransform(-12.4,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_8.setTransform(-19.4,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSBBIAEgLIAFAAIAGgBIAFgBIAFgDIAFgDIAEgGIACgHIABgHIACgWIABgCIAAgEQAAgEgCgCQgBgDgCgCIgGgDIgIgBIglAAIAAguIANAAIAAAjIAbAAQAGAAAGACIAJAEQAEAEACAEQACAFAAAEIgBAFIAAADIgCAWIgBAJIgDAIIgEAIQgDAEgDACQgEADgFACIgJADIgJABIgJAAg");
	this.shape_9.setTransform(-25.9,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_10.setTransform(-32.1,7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqAwIgFAAIABgMIADABIADAAIAFgBIAFgEIACgHIAAgJIAAgxIgGABIgFABIABgNIAJgBIAKgBIAMgBIALAAQAJAAAJACQAIACAFAFQAHAEACAHQAEAHAAAKIAAA5IgNAAIAAg4QAAgHgCgGQgCgFgFgDQgEgDgGgCIgQgBIgHAAIgIABIAAAxIAAAJIgBAIIgCAHQgCADgCACQgDADgDABQgEABgFAAIgFAAg");
	this.shape_11.setTransform(-40.3,7.4);

	this.instance = new lib.Bitmap114();
	this.instance.parent = this;
	this.instance.setTransform(-57,-1,0.526,0.526);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAwIgNgUIgTgcQgEAEgCAFQgBAEAAAKIAAAZIgZAAIAAgbQAAgIACgFQACgHAEgDQAEgGAJgHIgSgVIAJgFIAOgGIASAZIAOAVQAFgGADgDQACgFAAgIIAAgVIAYAAIAAAXQAAAKgFAJQgFAGgNAKIAYAig");
	this.shape_12.setTransform(47.2,7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_13.setTransform(39.2,5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACAvQgEAAgFgDIAFgRIAJACQAOAAAAgQIAAgSQABgLgGgFQgFgHgLABQgDAAgFACQgFACgCAEQgCAEgBADIAAA7IgZAAIAAhJIAAgHIgCgGIAVgIQAEAEACAHQAGgGAGgDQAGgCAHAAQASAAAKALQAKALAAATIAAATQAAAMgDAIQgFAHgIAEQgHAFgLAAIgJgCg");
	this.shape_14.setTransform(31.6,7.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAvIAAhdIAXAAIAABdg");
	this.shape_15.setTransform(23.8,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBCIAAiDIAXAAIAACDg");
	this.shape_16.setTransform(19.1,9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AACAvQgEAAgEgDIAEgRIAJACQAPAAAAgQIAAgSQgBgLgFgFQgGgHgJABQgFAAgEACQgFACgCAEQgDAEAAADIAAA7IgYAAIAAhJIAAgHIgDgGIAWgIQADAEABAHQAHgGAGgDQAGgCAHAAQARAAALALQALALAAATIAAATQgBAMgEAIQgEAHgHAEQgIAFgKAAIgKgCg");
	this.shape_17.setTransform(7.2,7.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgrAvIgOhdIAYAAIAHAwQAGgCADgDQADgDABgFIADgQIACgTIAXAAIgDAWQgCARgDAHQgEAHgGAFQgHAFgNAEIABAGIAVAAQAKAAAGgCQAGgDADgGQAEgGABgJIAFgvIAYAAIgFAuQgCASgGAKQgFAKgKAEQgKAFgQAAg");
	this.shape_18.setTransform(-4.5,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnBDIAAhfIAZAAIAABfgAgDAJQAJgBAEgDQAFgDADgDQACgFABgJIACgPQAAgHgDgDQgCgDgFgCQgFgBgJgBQgTABgaAFIACgVQAZgEAUAAQAZAAALAIQAKAHAAAQIAAAPQgCASgFAJQgGALgLAFQgKAFgSACg");
	this.shape_19.setTransform(-16.5,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAvIAAhdIAXAAIAABdg");
	this.shape_20.setTransform(-23.9,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgWBBIAGgUIAGAAQAIAAADgCQAFgCADgEQADgFAAgGIADgVIAAgCQAAgDgCgDIgEgEQgCgBgHAAIglAAIAAg3IAYAAIAAAjIAQAAQASAAAJAHQAIAIAAAPIAAAEIgCAVQgBATgLAKQgLAJgUAAg");
	this.shape_21.setTransform(-31.1,5.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAvIAAhdIAXAAIAABdg");
	this.shape_22.setTransform(-37.7,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgzAvIACgTIAFABQAGAAADgEQACgEAAgJIAAglIgMADIADgVQAUgEAeAAQAVAAAMAJQALAKAAATIAAA4IgZAAIAAg0QAAgMgEgFQgGgGgKAAIgPABIAAArQAAALgDAHQgEAHgIAEQgHADgKAAIgLgBg");
	this.shape_23.setTransform(-46.3,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-17.9,121.7,35.9);


(lib.onitsuka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unnamed2();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.oldSkool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_027();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.nmd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_095();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.nikey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_quizpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.nikeLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._62nikelogofreepngimagethumb();
	this.instance.parent = this;
	this.instance.setTransform(-67,-67,0.671,0.671);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nikeLogo, new cjs.Rectangle(-67,-67,134.1,134.1), null);


(lib.nikeHyperdunkPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_082pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-237.2,-150.1,1.777,1.777);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nikeHyperdunkPic, new cjs.Rectangle(-237.2,-150.1,474.4,300.3), null);


(lib.nikeAirYeezyPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_083pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-248.6,-155.5,1.862,1.862);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nikeAirYeezyPic, new cjs.Rectangle(-248.6,-155.5,497.2,311), null);


(lib.nike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-19,0.073,0.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-19,75,38);


(lib.newBalnce574pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_050pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-251,-155.1,1.88,1.88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.newBalnce574pic, new cjs.Rectangle(-251,-155.1,502.1,310.3), null);


(lib.newBalanceLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.New_BalancelogoF34722CB97seeklogocom();
	this.instance.parent = this;
	this.instance.setTransform(-86.9,-40.3,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.newBalanceLogo, new cjs.Rectangle(-86.9,-40.3,174,80.6), null);


(lib.newBalance574 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_050();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.298,0.302);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.newBalance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-40,-19,0.106,0.109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-19,80,38);


(lib.micropacer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_044();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.magicJohnson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_036();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.298,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.keds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-40,-17,0.058,0.057);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-17,80,34);


(lib.jazz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_034();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.Hyperdunk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_082();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.hyperadapt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_103();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.harruchePic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_058pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-264.3,-169.2,1.98,1.98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.harruchePic, new cjs.Rectangle(-264.3,-169.2,528.6,338.6), null);


(lib.harruche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_058();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.hamburg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_035();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-26,0.298,0.323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-26,79.7,52);


(lib.halfCab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_062();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.gv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_031();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.298,0.31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.GTII = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_043();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.goodRich = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_008();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.frzier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_022();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.free50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_077();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.fredPerry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_033();
	this.instance.parent = this;
	this.instance.setTransform(-40,-27,0.298,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-27,79.7,49.8);


(lib.footballShoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAwIACgNIAaAAIAAgvIgBgKQAAgDgCgEQgCgDgDgBQgCgCgFAAIgDAAIgCABIgDAAIgCAAIACgMIAFAAIAHgBQAEAAAEACQADABADADIAFAFIADAHIABAIIABAJIAAA8g");
	this.shape.setTransform(41.2,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAmIAIAAIAIgCIAHgBIAHgCIgehTIANAAIAbBPIAIgFIAHgGIAEgIQABgFAAgFIAAgyIANAAIAAAvQAAAKgDAIQgDAIgFAGQgFAGgHADIgOAGIgQAEIgQADg");
	this.shape_1.setTransform(33.3,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSBBIAEgLIAFAAIAGgBIAFgBIAFgDIAFgDIAEgGIACgHIABgHIACgWIABgCIAAgEQAAgEgCgCQgBgDgCgCIgGgDIgIgBIglAAIAAguIANAAIAAAjIAbAAQAGAAAGACIAJAEQAEAEACAEQACAFAAAEIgBAFIAAADIgCAWIgBAJIgDAIIgEAIQgDAEgDACQgEADgFACIgJADIgJABIgJAAg");
	this.shape_2.setTransform(24.5,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAaIAAgzIANAAIAAAzg");
	this.shape_3.setTransform(18.3,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAwIgGgBIgFgBIgEgBIACgKIAJABIAKABQAJAAAFgCQAHgDAEgEQAFgEACgHQACgHAAgKQAAgIgCgHQgCgGgEgFQgEgFgHgCQgFgDgJAAIgFAAIgHABIgGABIgFAAIABgKIAFgCIAGAAIAGgBIAGAAQAKAAAJADQAIADAGAGQAGAGADAJQADAJAAAMQAAAXgMAMQgLAMgXAAIgHAAg");
	this.shape_4.setTransform(7.6,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFAvIAAg+QABgGACgFQACgFAFgEIgDAAIgCAAIgDAAIgDAAIglAAIABgLIBCAAIgCALIgDAAQgDAAgDACIgCAEIgCAFIAAAFIAABCg");
	this.shape_5.setTransform(-0.3,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAvIAAhdIAMAAIAABdg");
	this.shape_6.setTransform(-6.1,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAwIAAg4QAAgOgHgHQgHgGgNAAIgPABIgOACIACgLIAGgBIAIgCIAHAAIAGgBQAIAAAIADQAHACAGAEQAFAGADAHQADAGAAAKIAAA5g");
	this.shape_7.setTransform(-13,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAvIgDglQgGACgFADQgDADgEADIgDAFIgDAHIgCAHIgCAHIgMAAIADgMIACgEIACgFIACgFIADgDQACgEAEgDIAGgEIAHgEIAIgDIgBgTQgBgFgBgCIgFgFQgDgCgCgBIgHgBIgQAAIACgLIANAAQAIAAAEACQAGABAEADQAFADACAFQADAFAAAHIAGBDg");
	this.shape_8.setTransform(-20.5,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSBBIAEgLIAFAAIAGgBIAFgBIAFgDIAFgDIAEgGIACgHIABgHIACgWIABgCIAAgEQAAgEgCgCQgBgDgCgCIgGgDIgIgBIglAAIAAguIANAAIAAAjIAbAAQAGAAAGACIAJAEQAEAEACAEQACAFAAAEIgBAFIAAADIgCAWIgBAJIgDAIIgEAIQgDAEgDACQgEADgFACIgJADIgJABIgJAAg");
	this.shape_9.setTransform(-28.1,5.6);

	this.instance = new lib.Bitmap112();
	this.instance.parent = this;
	this.instance.setTransform(-41,-1,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAwIADgUIAXAAIAAgjQAAgMgCgEQgDgEgIAAIgJACIADgTQAGgDAIAAQAJAAAHAEQAHAEADAHQAEAJAAAMIAAA7g");
	this.shape_10.setTransform(40.9,7.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpAcQARgBALgDIgbhKIAaAAIAXBCQADgCACgEQACgDABgFIABgKIAAgqIAYAAIAAAoQAAAOgDALQgEAKgJAHQgIAHgOAEQgMAEgaAEg");
	this.shape_11.setTransform(32.6,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBBIAHgUIAFAAQAIAAADgCQAFgCADgEQADgFAAgGIACgVIAAgCQAAgDgBgDIgEgEQgCgBgHAAIglAAIAAg3IAYAAIAAAjIAQAAQASAAAJAHQAIAIAAAPIAAAEIgBAVQgCATgLAKQgLAJgUAAg");
	this.shape_12.setTransform(23.3,5.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_13.setTransform(16.7,5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglAtIACgTQANACALAAQAKAAAFgDQAGgDACgFQADgGAAgKQAAgLgDgGQgDgGgFgCQgFgDgJAAQgPAAgNADIACgUIANgCIAQgBQAPAAAKAFQAMAFAEAKQAGALAAAQQgBAZgMAMQgLALgZAAQgRAAgLgDg");
	this.shape_14.setTransform(5.3,7.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAvIAAg2QAAgGABgFQABgFAEgEIgPABIgeAAIADgUIBMAAIgDAUIgCAAQgGAAgDAEQgDADAAAKIAAA4g");
	this.shape_15.setTransform(-3.5,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLAvIAAhdIAXAAIAABdg");
	this.shape_16.setTransform(-9.7,7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQAwIAAg0QAAgLgGgGQgFgFgMAAQgNAAgTADIACgUQARgEASAAQAUAAALAMQALAKAAAVIAAA0g");
	this.shape_17.setTransform(-17.2,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAKAvIgCgdQgFACgDADQgCADgCAFIgEAQIgZAAQAFgRAEgJQAFgJAHgGQAIgFAJgDIgBgOQAAgFgDgDQgDgCgHAAIgQAAIACgUIARAAQARAAAIAHQAIAGABAOIAFBCg");
	this.shape_18.setTransform(-25.4,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVBBIAGgUIAFAAQAIAAAEgCQAFgCACgEQADgFABgGIABgVIAAgCQAAgDgBgDIgEgEQgDgBgGAAIgmAAIAAg3IAZAAIAAAjIARAAQARAAAJAHQAJAIAAAPIAAAEIgDAVQgCATgKAKQgLAJgUAAg");
	this.shape_19.setTransform(-33.8,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-1}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-17.9,99.5,35.9);


(lib.flykint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_088();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.exitButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap85();
	this.instance.parent = this;
	this.instance.setTransform(-14,-14,0.298,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-14,28,28);


(lib.era95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unnamed1();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.elegantShoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXAvIgGgKIgGgJIgGgIIgFgJIgGgJIgIgLQgEAEgCADIgCAEIgCAHIAAAIIAAAeIgOAAIAAgfIABgKIAEgIIAEgIIAIgHIgRgXIALgGIAHAJIAHAJIAGAJIAFAIIALAPQANgHAAgQIAAgaIANAAIAAAYIgBALIgEAJIgGAHIgJAHIAYAig");
	this.shape.setTransform(22.9,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSBBIAEgLIAFAAIAGgBIAFgBIAFgDIAFgDIAEgGIACgHIABgHIACgWIABgCIAAgEQAAgEgCgCQgBgDgCgCIgGgDIgIgBIglAAIAAguIANAAIAAAjIAbAAQAGAAAGACIAJAEQAEAEACAEQACAFAAAEIgBAFIAAADIgCAWIgBAJIgDAIIgEAIQgDAEgDACQgEADgFACIgJADIgJABIgJAAg");
	this.shape_1.setTransform(13.4,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQAvIgDglQgGACgFADQgDADgEADIgDAFIgDAHIgCAHIgCAHIgMAAIADgMIACgEIACgFIACgFIADgDQACgEAEgDIAGgEIAHgEIAIgDIgBgTQgBgFgBgCIgFgFQgDgCgCgBIgHgBIgQAAIACgLIANAAQAIAAAEACQAGABAEADQAFADACAFQADAFAAAHIAGBDg");
	this.shape_2.setTransform(5.6,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAwIACgNIAaAAIAAgvIgBgKQAAgDgCgEQgCgDgDgBQgCgCgFAAIgDAAIgCABIgDAAIgCAAIACgMIAFAAIAHgBQAEAAAEACQADABADADIAFAFIADAHIABAIIABAJIAAA8g");
	this.shape_3.setTransform(-0.9,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAtQgHgDgGgGQgFgGgDgJQgDgJAAgLIAAgvIANAAIAAAuIACANQABAHADAFQADAFAGADQAFAEAJAAQAGAAAGgDQAGgDAEgFQAEgEACgHQACgGAAgHIAAgKQAAgGgCgFIgEgJIgGgFQgEgDgFAAIgHABIgHABIACgMIAGgBIAIAAQAHAAAFADQAGACAEAFQAFAGACAHQADAHAAAJIAAAJQAAAKgDAJQgDAJgGAGQgGAGgIAEQgIADgKAAQgJAAgIgDg");
	this.shape_4.setTransform(-8.9,7.4);

	this.instance = new lib.Bitmap113();
	this.instance.parent = this;
	this.instance.setTransform(-33,-7,0.578,0.578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAwIgNgUIgTgcQgEAEgCAFQgBAEAAAKIAAAZIgZAAIAAgbQAAgIACgFQACgHAEgDQAEgGAJgHIgSgVIAJgFIAOgGIASAZIAOAVQAFgGADgDQACgFAAgIIAAgVIAYAAIAAAXQAAAKgFAJQgFAGgNAKIAYAig");
	this.shape_5.setTransform(22.1,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBBIAGgUIAGAAQAIAAADgCQAFgCADgEQADgFAAgGIACgVIAAgCQAAgDgBgDIgEgEQgCgBgHAAIglAAIAAg3IAYAAIAAAjIAQAAQASAAAJAHQAIAIAAAPIAAAEIgBAVQgCATgLAKQgLAJgUAAg");
	this.shape_6.setTransform(11.6,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJAvIgBgdQgFACgDADQgCADgCAFIgEAQIgYAAQAEgRAEgJQAEgJAIgGQAHgFAKgDIgBgOQAAgFgEgDQgCgCgIAAIgQAAIAEgUIAQAAQARAAAIAHQAIAGABAOIAFBCg");
	this.shape_7.setTransform(3.1,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAwIADgUIAXAAIAAgjQAAgMgCgEQgDgEgIAAIgJACIADgTQAGgDAIAAQAJAAAHAEQAHAEADAHQAEAJAAAMIAAA7g");
	this.shape_8.setTransform(-4.2,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAkQgMgLAAgXIAAgwIAZAAIAAAuQAAANAFAIQAGAHAJAAQALAAAFgGQAGgHAAgMIAAgJQAAgLgFgFQgFgFgJAAQgEAAgJACIACgTQAIgDAKAAQASAAAJALQAJAKAAAVIAAAGQAAAXgLAMQgMAMgXAAQgWAAgLgMg");
	this.shape_9.setTransform(-12.6,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-7}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{y:-4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-17.9,75.2,35.9);


(lib.dunkLow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_078();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.disc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_059();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.298,0.302);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.clyde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_094();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.closePopUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap87();
	this.instance.parent = this;
	this.instance.setTransform(-23.3,-23.3,0.496,0.496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-23.3,46.6,46.6);


(lib.classic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_038();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.casualShoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape.setTransform(26.8,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAvIAAhdIANAAIAABdg");
	this.shape_1.setTransform(22.7,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnAwIAAhaIATgEIAUgBQAJAAAIADQAHACAGAFQAFAFADAHQACAHAAAJIAAArIgDAOgAgRgiIgJACIAABDIA1AAIAAgsQAAgHgCgFQgCgFgEgDQgEgDgFgBQgGgCgGAAIgPABg");
	this.shape_2.setTransform(15.2,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAFIAAgJIApAAIAAAJg");
	this.shape_3.setTransform(6.7,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAaIAAgzIANAAIAAAzg");
	this.shape_4.setTransform(1.5,5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAvIAAhdIANAAIAABdg");
	this.shape_5.setTransform(-2.6,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFAwIgFgDIACgKIAFABIAFABQAEAAADgCIAGgEIACgHIABgJIAAgSIAAgHIgCgIIgDgHQgCgDgEgCIgHgEQgEgBgGgBIgGABIgGADIgGAEIgGAFIgBADIAAADIAABAIgNAAIAAhMIAAgHIgDgHIAMgEIACAFIABAIQAGgGAIgEQAHgDAHAAQAKAAAHADQAHADAGAGQAFAFACAJQADAHAAAKIAAASQAAAIgCAGQgCAHgDAFQgEAEgGACQgFADgHAAIgIgBg");
	this.shape_6.setTransform(-9.8,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape_7.setTransform(-17.3,5.3);

	this.instance = new lib.Bitmap116();
	this.instance.parent = this;
	this.instance.setTransform(-23,-1,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_8.setTransform(26.5,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAvIAAhdIAXAAIAABdg");
	this.shape_9.setTransform(21.8,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrAwIAAhaIAVgDIALgBIALgBQAUAAAMALQAMAKAAASIAAApIgEAPgAgTgZIAAA1IAnAAIAAghQAAgLgGgFQgFgGgLAAQgHAAgKACg");
	this.shape_10.setTransform(14,7.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAIIAAgQIApAAIAAAQg");
	this.shape_11.setTransform(5.2,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_12.setTransform(-0.3,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAvIAAhdIAXAAIAABdg");
	this.shape_13.setTransform(-5,7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACAvQgEAAgEgDIAEgRIAJACQAPAAAAgQIAAgSQgBgLgFgFQgGgHgJABQgFAAgEACQgFACgCAEQgDAEAAADIAAA7IgYAAIAAhJIAAgHIgDgGIAWgIQADAEABAHQAHgGAGgDQAGgCAHAAQARAAALALQALALAAATIAAATQgBAMgEAIQgEAHgHAEQgIAFgKAAIgKgCg");
	this.shape_14.setTransform(-12.6,7.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_15.setTransform(-20.3,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-17.9,75.5,35.9);


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-540.6,-391.7,0.318,0.359);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Box, new cjs.Rectangle(-540.6,-391.7,1081.4,783.4), null);


(lib.blazer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_023();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.bapesta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_064();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.atom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_009();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.asicsTigerPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_026pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-241.5,-145.6,1.809,1.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.asicsTigerPic, new cjs.Rectangle(-241.5,-145.6,483.1,291.3), null);


(lib.asicsTGIIpic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_043pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-247.8,-155,1.857,1.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.asicsTGIIpic, new cjs.Rectangle(-247.8,-155,495.7,310.1), null);


(lib.asicsLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.asicslogo();
	this.instance.parent = this;
	this.instance.setTransform(-81.1,-57.6,0.101,0.101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.asicsLogo, new cjs.Rectangle(-81.1,-57.6,162.3,115.2), null);


(lib.asics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-40,-29.5,0.05,0.052);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-29.5,80,59);


(lib.allStarBasketball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_004();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.allStar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-40,-19,0.05,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-19,80,38);


(lib.akeemTheDream = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_041();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.airYeezy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unnamed3();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-83.5,267,167);


(lib.airWoven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_070();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.338);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.airMaxTNpic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_068pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-261.8,-148,1.961,1.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.airMaxTNpic, new cjs.Rectangle(-261.8,-148,523.7,296.2), null);


(lib.airMaxTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-40,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-25,80,50);


(lib.airMax97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_067();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.airMax95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_066();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.airMax1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_057();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.airMag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_085();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.299,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.airJordanXI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_089();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.airJordanPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_042pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-248.8,-155.6,1.864,1.864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.airJordanPic, new cjs.Rectangle(-248.8,-155.6,497.7,311.3), null);


(lib.airJordannPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_053pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-243.3,-144.8,1.822,1.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.airJordannPic, new cjs.Rectangle(-243.3,-144.8,486.6,289.8), null);


(lib.airJordan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_042();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.299,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.7,49.8);


(lib.airJoradan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_053();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.airForce1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_037();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.298,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.airFoamiste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_090();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.9,0.299,0.295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.9,79.7,49.8);


(lib.air1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_047pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-39.8,-24.8,0.298,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-24.8,79.6,49.8);


(lib.AdidasSambaPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_011pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-275,-153.4,2.06,2.06);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.AdidasSambaPic, new cjs.Rectangle(-275,-153.4,550.1,307), null);


(lib.adidasMicropacerPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HoS12_044pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-266.3,-164.5,1.995,1.995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.adidasMicropacerPic, new cjs.Rectangle(-266.3,-164.5,532.6,329.2), null);


(lib.adidasLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._12adidaslogopngclipartthumbpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-62,-62,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.adidasLogo, new cjs.Rectangle(-62,-62,124,124), null);


(lib.adidas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-30,-20,0.059,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-20,60,40);


(lib.ActiveButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("הצג פעילים", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0.5,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AmlCRQivg9AAhUQAAhUCvg8QCvg7D2AAQD4AACuA7QCvA8AABUQAABUivA9QiuA7j4AAQj2AAivg7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-20.4,119.4,40.9);


// stage content:
(lib.shoeWayYuvalYankoNoyMeirReutRaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickedMouse = 0;
		this.exitButton.alpha = 0;
		
		//פונקציה הצג הכל
		function showAll() {
			this.airJoradan.alpha = 0.9
			this.tiger.alpha = 0.9
			this.GTII.alpha = 0.9
			this.fredPerry.alpha = 0.9
			this.Hyperdunk.alpha = 0.9
			this.airJordan1.alpha = 0.9
			this.trackSpikes.alpha = 0.9
			this.airYeezy.alpha = 0.9
			this.micropacer.alpha = 0.9
			this.classic.alpha = 0.9
			this.air1.alpha = 0.9
			this.atom.alpha = 0.9
			this.flykint.alpha = 0.9
			this.goodRich.alpha = 0.9
			this.samba.alpha = 0.9
			this.SBdunk.alpha = 0.9
			this.airJordanXI.alpha = 0.9
			this.akeemTheDream.alpha = 0.9
			this.airForce1.alpha = 0.9
			this.newBalance574.alpha = 0.9
			this.hamburg.alpha = 0.9
			this.airMax1.alpha = 0.9
			this.disc.alpha = 0.9
			this.airMag.alpha = 0.9
			this.free5.alpha = 0.9
			this.airFoamiste.alpha = 0.9
			this.allStarBasketball.alpha = 0.9
			this.gv.alpha = 0.9
			this.magicJohnson.alpha = 0.9
			this.ultraBoost.alpha = 0.9
			this.zoomKybe.alpha = 0.9
			this.spezial.alpha = 0.9
			this.pumpFury.alpha = 0.9
			this.jazz.alpha = 0.9
			this.clyde.alpha = 0.9
			this.dunkLow.alpha = 0.9
			this.trainer80.alpha = 0.9
			this.spikeShoe.alpha = 0.9
			this.airMaxTN.alpha = 0.9
			this.frzier.alpha = 0.9
			this.blazer.alpha = 0.9
			this.sneaker.alpha = 0.9
			this.sqash.alpha = 0.9
			this.airMax95.alpha = 0.9
			this.shaqnosis.alpha = 0.9
			this.oldSkool.alpha = 0.9
			this.waffleTread.alpha = 0.9
			this.bapesta.alpha = 0.9
			this.harruche.alpha = 0.9
			this.nikey.alpha = 0.9
			this.halfCab.alpha = 0.9
			this.hyperadapt.alpha = 0.9
			this.airWoven.alpha = 0.9
			this.nmd.alpha = 0.9
			this.onitsuka.alpha = 0.9
			this.era95.alpha = 0.9
			this.speedcat.alpha = 0.9
			this.airMax97.alpha = 0.9
			this.yeezyBoots.alpha = 0.9
			this.superAtom.alpha = 0.9
			this.keds.alpha = 0.9
			this.adidas.alpha = 0.9
			this.vans.alpha = 0.9
			this.nike.alpha = 0.9
			this.allStar.alpha = 0.9
			this.puma.alpha = 0.9
			this.newBalance.alpha = 0.9
			this.asics.alpha = 0.9
			this.springCourt.alpha = 0.9
			this.year2017.alpha = 0.9
			this.year2010.alpha = 0.9
			this.year2000.alpha = 0.9
			this.year1990.alpha = 0.9
			this.year1980.alpha = 0.9
			this.year1970.alpha = 0.9
			this.year1960.alpha = 0.9
			this.year1950.alpha = 0.9
			this.year1940.alpha = 0.9
			this.year1930.alpha = 0.9
			this.year1920.alpha = 0.9
			this.year1910.alpha = 0.9
			this.year1900.alpha = 0.9
			this.runningShoes.alpha = 0.9
			this.footballShoes.alpha = 0.9
			this.elegantShoes.alpha = 0.9
			this.practiceShoes.alpha = 0.9
			this.sportElegant.alpha = 0.9
			this.casualShoes.alpha = 0.9
			this.walkingShoes.alpha = 0.9
			clickedMouse = 0;
		}
		
		//פונקציה  החשך הכל
		function fadeAll() {
			this.airJoradan.alpha = 0.1
			this.tiger.alpha = 0.1
			this.GTII.alpha = 0.1
			this.fredPerry.alpha = 0.1
			this.Hyperdunk.alpha = 0.1
			this.airJordan1.alpha = 0.1
			this.trackSpikes.alpha = 0.1
			this.airYeezy.alpha = 0.1
			this.micropacer.alpha = 0.1
			this.classic.alpha = 0.1
			this.air1.alpha = 0.1
			this.atom.alpha = 0.1
			this.flykint.alpha = 0.1
			this.goodRich.alpha = 0.1
			this.samba.alpha = 0.1
			this.SBdunk.alpha = 0.1
			this.airJordanXI.alpha = 0.1
			this.akeemTheDream.alpha = 0.1
			this.airForce1.alpha = 0.1
			this.newBalance574.alpha = 0.1
			this.hamburg.alpha = 0.1
			this.airMax1.alpha = 0.1
			this.disc.alpha = 0.1
			this.airMag.alpha = 0.1
			this.free5.alpha = 0.1
			this.airFoamiste.alpha = 0.1
			this.allStarBasketball.alpha = 0.1
			this.gv.alpha = 0.1
			this.magicJohnson.alpha = 0.1
			this.ultraBoost.alpha = 0.1
			this.zoomKybe.alpha = 0.1
			this.spezial.alpha = 0.1
			this.pumpFury.alpha = 0.1
			this.jazz.alpha = 0.1
			this.clyde.alpha = 0.1
			this.dunkLow.alpha = 0.1
			this.trainer80.alpha = 0.1
			this.spikeShoe.alpha = 0.1
			this.airMaxTN.alpha = 0.1
			this.frzier.alpha = 0.1
			this.blazer.alpha = 0.1
			this.sneaker.alpha = 0.1
			this.sqash.alpha = 0.1
			this.airMax95.alpha = 0.1
			this.shaqnosis.alpha = 0.1
			this.oldSkool.alpha = 0.1
			this.waffleTread.alpha = 0.1
			this.bapesta.alpha = 0.1
			this.harruche.alpha = 0.1
			this.nikey.alpha = 0.1
			this.halfCab.alpha = 0.1
			this.hyperadapt.alpha = 0.1
			this.airWoven.alpha = 0.1
			this.nmd.alpha = 0.1
			this.onitsuka.alpha = 0.1
			this.era95.alpha = 0.1
			this.speedcat.alpha = 0.1
			this.airMax97.alpha = 0.1
			this.yeezyBoots.alpha = 0.1
			this.superAtom.alpha = 0.1
			this.keds.alpha = 0.1
			this.adidas.alpha = 0.1
			this.vans.alpha = 0.1
			this.nike.alpha = 0.1
			this.allStar.alpha = 0.1
			this.puma.alpha = 0.1
			this.newBalance.alpha = 0.1
			this.asics.alpha = 0.1
			this.springCourt.alpha = 0.1
			this.year2017.alpha = 0.1
			this.year2010.alpha = 0.1
			this.year2000.alpha = 0.1
			this.year1990.alpha = 0.1
			this.year1980.alpha = 0.1
			this.year1970.alpha = 0.1
			this.year1960.alpha = 0.1
			this.year1950.alpha = 0.1
			this.year1940.alpha = 0.1
			this.year1930.alpha = 0.1
			this.year1920.alpha = 0.1
			this.year1910.alpha = 0.1
			this.year1900.alpha = 0.1
			this.runningShoes.alpha = 0.1
			this.footballShoes.alpha = 0.1
			this.elegantShoes.alpha = 0.1
			this.practiceShoes.alpha = 0.1
			this.sportElegant.alpha = 0.1
			this.casualShoes.alpha = 0.1
			this.walkingShoes.alpha = 0.1
		}
		
		//כפתור משבית פעילות עכבר בכפתור הצג פעילים
		function disableAll() {
			this.keds.mouseEnabled = false
			this.adidas.mouseEnabled = false
			this.vans.mouseEnabled = false
			this.nike.mouseEnabled = false
			this.allStar.mouseEnabled = false
			this.puma.mouseEnabled = false
			this.newBalance.mouseEnabled = false
			this.asics.mouseEnabled = false
			this.springCourt.mouseEnabled = false
			this.year2017.mouseEnabled = false
			this.year2010.mouseEnabled = false
			this.year2000.mouseEnabled = false
			this.year1990.mouseEnabled = false
			this.year1980.mouseEnabled = false
			this.year1970.mouseEnabled = false
			this.year1960.mouseEnabled = false
			this.year1950.mouseEnabled = false
			this.year1940.mouseEnabled = false
			this.year1930.mouseEnabled = false
			this.year1920.mouseEnabled = false
			this.year1910.mouseEnabled = false
			this.year1900.mouseEnabled = false
			this.runningShoes.mouseEnabled = false
			this.footballShoes.mouseEnabled = false
			this.elegantShoes.mouseEnabled = false
			this.practiceShoes.mouseEnabled = false
			this.sportElegant.mouseEnabled = false
			this.casualShoes.mouseEnabled = false
			this.walkingShoes.mouseEnabled = false
		}
		
		function enableAll() {
			this.keds.mouseEnabled = true
			this.adidas.mouseEnabled = true
			this.vans.mouseEnabled = true
			this.nike.mouseEnabled = true
			this.allStar.mouseEnabled = true
			this.puma.mouseEnabled = true
			this.newBalance.mouseEnabled = true
			this.asics.mouseEnabled = true
			this.springCourt.mouseEnabled = true
			this.year2017.mouseEnabled = true
			this.year2010.mouseEnabled = true
			this.year2000.mouseEnabled = true
			this.year1990.mouseEnabled = true
			this.year1980.mouseEnabled = true
			this.year1970.mouseEnabled = true
			this.year1960.mouseEnabled = true
			this.year1950.mouseEnabled = true
			this.year1940.mouseEnabled = true
			this.year1930.mouseEnabled = true
			this.year1920.mouseEnabled = true
			this.year1910.mouseEnabled = true
			this.year1900.mouseEnabled = true
			this.runningShoes.mouseEnabled = true
			this.footballShoes.mouseEnabled = true
			this.elegantShoes.mouseEnabled = true
			this.practiceShoes.mouseEnabled = true
			this.sportElegant.mouseEnabled = true
			this.casualShoes.mouseEnabled = true
			this.walkingShoes.mouseEnabled = true
		}
		//לחיצה על כפתור הצג פעילים
		this.ActiveButton.addEventListener("click", ClickOverActiveButton.bind(this));
		
		function ClickOverActiveButton() {
			clickedMouse = 2;
			this.ActiveButton.alpha = 0;
			fadeAll.bind(this)();
			this.air1.alpha=0.9
			this.GTII.alpha=0.9
			this.micropacer.alpha=0.9
			this.airYeezy.alpha=0.9
			this.airJordan1.alpha=0.9
			this.Hyperdunk.alpha=0.9
			this.newBalance574.alpha=0.9
			this.airJoradan.alpha=0.9
			this.samba.alpha=0.9
			this.tiger.alpha=0.9
			this.airJoradan.alpha=0.9
			this.airMaxTN.alpha=0.9
			this.harruche.alpha=0.9
			this.keds.alpha=0.9
			this.adidas.alpha=0.9
			this.vans.alpha=0.9
			this.nike.alpha=0.9
			this.allStar.alpha=0.9
			this.puma.alpha=0.9
			this.newBalance.alpha=0.9
			this.asics.alpha=0.9
			this.springCourt.alpha=0.9
			this.year2010.alpha=0.9
			this.year2000.alpha=0.9
			this.year1990.alpha=0.9
			this.year1980.alpha=0.9
			this.year1970.alpha=0.9
			this.year1950.alpha=0.9
			this.year1940.alpha=0.9
			this.year1930.alpha=0.9
			this.year1900.alpha=0.9
			this.runningShoes.alpha=0.9
			this.footballShoes.alpha=0.9
			this.elegantShoes.alpha=0.9
			this.practiceShoes.alpha=0.9
			this.sportElegant.alpha=0.9
			this.casualShoes.alpha=0.9
			this.walkingShoes.alpha=0.9
		}
		//יציאה מפתור הצג פעילים ע"י לחיצה הצג הכל
		this.regularButton.addEventListener("click", ClickOverregularButton.bind(this));
		
		function ClickOverregularButton() {
			clickedMouse = 1;
			this.ActiveButton.alpha = 1
			showAll.bind(this)();
		}
		
		//הסתרת פופאפים
		this.Box.alpha = 0
		this.closePopUp.alpha = 0
		
		this.nikeHarruche1.alpha = 0
		this.nikeHarruche2.alpha = 0
		this.harruchePic.alpha = 0
		this.nikeLogo.alpha = 0
		this.year1991.alpha = 0
		this.footballNwalkingShoes.alpha = 0
		
		this.nikeAir1.alpha = 0
		this.nikeAir2.alpha = 0
		this.shoesNikeAir1.alpha = 0
		this.yearNikeAir1.alpha = 0
		this.styleElegant.alpha = 0
		
		this.airMaxTN1.alpha = 0
		this.airMaxTN2.alpha = 0
		this.airMaxTNpic.alpha = 0
		this.year1998.alpha = 0
		
		this.asicsTiger1.alpha = 0
		this.asicsTiger2.alpha = 0
		this.asicsTigerPic.alpha = 0
		this.asicsLogo.alpha = 0
		this.year1977.alpha = 0
		this.sportElegantNcasual.alpha = 0
		
		this.newBalance1.alpha = 0
		this.newBalance2.alpha = 0
		this.newBalnce574pic.alpha = 0
		this.newBalanceLogo.alpha = 0
		this.year1988.alpha = 0
		this.walkingShoesStyle.alpha = 0
		
		this.AdidasSamba1.alpha = 0
		this.AdidasSamba2.alpha = 0
		this.AdidasSambaPic.alpha = 0
		this.adidasLogo.alpha = 0
		this.year19500.alpha = 0
		this.footballStyle.alpha = 0
		
		this.nikeJordan1.alpha = 0
		this.nikeJordan2.alpha = 0
		this.airJordannPic.alpha = 0
		this.year1989.alpha = 0
		this.practiceShoesStyle.alpha = 0
		
		this.nikeHyperdunk1.alpha = 0
		this.nikeHyperdunk2.alpha = 0
		this.nikeHyperdunkPic.alpha = 0
		this.year2008.alpha = 0
		this.practiceNwalkingStyle.alpha = 0
		
		this.nikeAirJordan1.alpha = 0
		this.nikeAirJordan2.alpha = 0
		this.airJordanPic.alpha = 0
		this.year1985.alpha = 0
		this.practiceNcasualStyle.alpha = 0
		
		this.nikeAirYeezy1.alpha = 0
		this.nikeAirYeezy2.alpha = 0
		this.nikeAirYeezyPic.alpha = 0
		this.year2009.alpha = 0
		
		
		this.adidasMicropacer1.alpha = 0
		this.adidasMicropacer2.alpha = 0
		this.adidasMicropacerPic.alpha = 0
		this.year1986.alpha = 0
		this.runningShoe1.alpha = 0
		
		this.pumaAtom1.alpha = 0
		this.pumaAtom2.alpha = 0
		this.superAtomPic.alpha = 0
		this.pumaLogo.alpha = 0
		this.year1952.alpha = 0
		
		this.tgII1.alpha = 0
		this.tgII2.alpha = 0
		this.asicsTGIIpic.alpha = 0
		this.year1987.alpha = 0
		this.sportEleganyStyle.alpha = 0
		
		//פונקציה שמסתירה את כל הפופ-אפים
		function hidePopUp() {
			this.Box.alpha = 0
			this.closePopUp.alpha = 0
		
			this.nikeHarruche1.alpha = 0
			this.nikeHarruche2.alpha = 0
			this.harruchePic.alpha = 0
			this.nikeLogo.alpha = 0
			this.year1991.alpha = 0
			this.footballNwalkingShoes.alpha = 0
		
			this.nikeAir1.alpha = 0
			this.nikeAir2.alpha = 0
			this.shoesNikeAir1.alpha = 0
			this.yearNikeAir1.alpha = 0
			this.styleElegant.alpha = 0
		
			this.airMaxTN1.alpha = 0
			this.airMaxTN2.alpha = 0
			this.airMaxTNpic.alpha = 0
			this.year1998.alpha = 0
		
			this.asicsTiger1.alpha = 0
			this.asicsTiger2.alpha = 0
			this.asicsTigerPic.alpha = 0
			this.asicsLogo.alpha = 0
			this.year1977.alpha = 0
			this.sportElegantNcasual.alpha = 0
		
			this.newBalance1.alpha = 0
			this.newBalance2.alpha = 0
			this.newBalnce574pic.alpha = 0
			this.newBalanceLogo.alpha = 0
			this.year1988.alpha = 0
			this.walkingShoesStyle.alpha = 0
		
			this.AdidasSamba1.alpha = 0
			this.AdidasSamba2.alpha = 0
			this.AdidasSambaPic.alpha = 0
			this.adidasLogo.alpha = 0
			this.year19500.alpha = 0
			this.footballStyle.alpha = 0
		
			this.nikeJordan1.alpha = 0
			this.nikeJordan2.alpha = 0
			this.airJordannPic.alpha = 0
			this.year1989.alpha = 0
			this.practiceShoesStyle.alpha = 0
		
			this.nikeHyperdunk1.alpha = 0
			this.nikeHyperdunk2.alpha = 0
			this.nikeHyperdunkPic.alpha = 0
			this.year2008.alpha = 0
			this.practiceNwalkingStyle.alpha = 0
		
			this.nikeAirJordan1.alpha = 0
			this.nikeAirJordan2.alpha = 0
			this.airJordanPic.alpha = 0
			this.year1985.alpha = 0
		
			this.nikeAirYeezy1.alpha = 0
			this.nikeAirYeezy2.alpha = 0
			this.nikeAirYeezyPic.alpha = 0
			this.year2009.alpha = 0
			this.practiceNcasualStyle.alpha = 0
		
			this.adidasMicropacer1.alpha = 0
			this.adidasMicropacer2.alpha = 0
			this.adidasMicropacerPic.alpha = 0
			this.year1986.alpha = 0
			this.runningShoe1.alpha = 0
		
			this.pumaAtom1.alpha = 0
			this.pumaAtom2.alpha = 0
			this.superAtomPic.alpha = 0
			this.pumaLogo.alpha = 0
			this.year1952.alpha = 0
		
			this.tgII1.alpha = 0
			this.tgII2.alpha = 0
			this.asicsTGIIpic.alpha = 0
			this.year1987.alpha = 0
			this.sportEleganyStyle.alpha = 0
		}
		//כפתור יציאה מפופ-אפ
		this.closePopUp.addEventListener("click", ClickOverclosePopUp.bind(this));
		
		function ClickOverclosePopUp() {
			hidePopUp.bind(this)();
		}
		
		this.asics.addEventListener("mouseover", fl_overToAsics.bind(this));
		
		//תחילת FADE על ASICS;
		
		function fl_overToAsics() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.tiger.alpha = 0.9
					this.GTII.alpha = 0.9
					this.asics.alpha = 0.9
				}
			}
		}
		//סיום FADE על ASICS;
		
		this.asics.addEventListener("mouseout", fl_outToAsics.bind(this));
		
		
		function fl_outToAsics() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		//לחיצה על ASICS;
		
		this.asics.addEventListener("click", fl_ClickToAsics.bind(this));
		function fl_ClickToAsics() {
		
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.tiger.alpha = 0.9
			this.GTII.alpha = 0.9
			this.asics.alpha = 0.9
			disableAll.bind(this)();
		
		
		}
		//תחילת FADE על keds;
		this.keds.addEventListener("mouseover", fl_overToKeds.bind(this));
		function fl_overToKeds() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.keds.alpha = 0.9
					this.sneaker.alpha = 0.9
		
				}
			}
		}
		//סיום FADE על keds;
		
		this.keds.addEventListener("mouseout", fl_outToKeds.bind(this));
		function fl_outToKeds() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		//לחיצה על KEDS;
		
		this.keds.addEventListener("click", fl_clickToKeds.bind(this));
		
		function fl_clickToKeds() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.keds.alpha = 0.9
			this.sneaker.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.adidas.addEventListener("mouseover", fl_overToAdidas.bind(this));
		
		//תחילת FADE על adidas;
		
		function fl_overToAdidas() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.adidas.alpha = 0.9
					this.micropacer.alpha = 0.9
					this.samba.alpha = 0.9
					this.hamburg.alpha = 0.9
					this.ultraBoost.alpha = 0.9
					this.spezial.alpha = 0.9
					this.nmd.alpha = 0.9
					this.trackSpikes.alpha = 0.9
		
				}
			}
		}
		
		this.adidas.addEventListener("mouseout", fl_outToAdidas.bind(this));
		//סיום FADE על adidas;
		
		
		function fl_outToAdidas() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		this.adidas.addEventListener("click", fl_clickToAdidas.bind(this));
		//לחיצה על ADIDAS;
		
		function fl_clickToAdidas() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.adidas.alpha = 0.9
			this.micropacer.alpha = 0.9
			this.samba.alpha = 0.9
			this.hamburg.alpha = 0.9
			this.ultraBoost.alpha = 0.9
			this.spezial.alpha = 0.9
			this.nmd.alpha = 0.9
			this.trackSpikes.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.vans.addEventListener("mouseover", fl_overToVans.bind(this));
		//תחילת FADE על vans;
		
		function fl_overToVans() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.vans.alpha = 0.9
					this.oldSkool.alpha = 0.9
					this.halfCab.alpha = 0.9
					this.era95.alpha = 0.9
				}
			}
		}
		
		this.vans.addEventListener("mouseout", fl_outToVans.bind(this));
		
		//סיום FADE על vans;
		
		
		function fl_outToVans() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		this.vans.addEventListener("click", fl_clickToVans.bind(this));
		//לחיצה על VANS;
		
		function fl_clickToVans() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.vans.alpha = 0.9
			this.oldSkool.alpha = 0.9
			this.halfCab.alpha = 0.9
			this.era95.alpha = 0.9
			disableAll.bind(this)();
		}
		
		
		this.nike.addEventListener("mouseover", fl_overToNike.bind(this));
		//תחילת FADE על nike;
		
		function fl_overToNike() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.nike.alpha = 0.9
					this.airJoradan.alpha = 0.9
					this.Hyperdunk.alpha = 0.9
					this.airJordan1.alpha = 0.9
					this.airYeezy.alpha = 0.9
					this.air1.alpha = 0.9
					this.flykint.alpha = 0.9
					this.SBdunk.alpha = 0.9
					this.airJordanXI.alpha = 0.9
					this.airForce1.alpha = 0.9
					this.airMax1.alpha = 0.9
					this.airMag.alpha = 0.9
					this.free5.alpha = 0.9
					this.airFoamiste.alpha = 0.9
					this.dunkLow.alpha = 0.9
					this.airMaxTN.alpha = 0.9
					this.blazer.alpha = 0.9
					this.airMax95.alpha = 0.9
					this.harruche.alpha = 0.9
					this.nikey.alpha = 0.9
					this.airWoven.alpha = 0.9
					this.airMax97.alpha = 0.9
					this.yeezyBoots.alpha = 0.9
					this.hyperadapt.alpha = 0.9
					this.waffleTread.alpha = 0.9
					this.pumpFury.alpha = 0.9
					this.zoomKybe.alpha = 0.9
				}
			}
		}
		
		this.nike.addEventListener("mouseout", fl_outToNike.bind(this));
		//סיום FADE על nike;
		
		
		function fl_outToNike() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		this.nike.addEventListener("click", fl_clickToNike.bind(this));
		//לחיצה על NIKE;
		
		function fl_clickToNike() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.nike.alpha = 0.9
			this.airJoradan.alpha = 0.9
			this.Hyperdunk.alpha = 0.9
			this.airJordan1.alpha = 0.9
			this.airYeezy.alpha = 0.9
			this.air1.alpha = 0.9
			this.flykint.alpha = 0.9
			this.SBdunk.alpha = 0.9
			this.airJordanXI.alpha = 0.9
			this.airForce1.alpha = 0.9
			this.airMax1.alpha = 0.9
			this.airMag.alpha = 0.9
			this.free5.alpha = 0.9
			this.airFoamiste.alpha = 0.9
			this.dunkLow.alpha = 0.9
			this.airMaxTN.alpha = 0.9
			this.blazer.alpha = 0.9
			this.airMax95.alpha = 0.9
			this.harruche.alpha = 0.9
			this.nikey.alpha = 0.9
			this.airWoven.alpha = 0.9
			this.airMax97.alpha = 0.9
			this.yeezyBoots.alpha = 0.9
			this.hyperadapt.alpha = 0.9
			this.waffleTread.alpha = 0.9
			this.pumpFury.alpha = 0.9
			this.zoomKybe.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.allStar.addEventListener("mouseover", fl_overToAllStar.bind(this));
		//תחילת FADE על allStar;
		
		function fl_overToAllStar() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.allStar.alpha = 0.9
					this.allStarBasketball.alpha = 0.9
					this.magicJohnson.alpha = 0.9
				}
			}
		}
		this.allStar.addEventListener("mouseout", fl_outToAllStar.bind(this));
		//סיום FADE על allStar;
		
		function fl_outToAllStar() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.allStar.addEventListener("click", fl_clickToAllStar.bind(this));
		//לחיצה על ALLSTAR;
		
		function fl_clickToAllStar() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.allStar.alpha = 0.9
			this.allStarBasketball.alpha = 0.9
			this.magicJohnson.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.puma.addEventListener("mouseover", fl_overToPuma.bind(this));
		//תחילת FADE על puma;
		
		function fl_overToPuma() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.puma.alpha = 0.9
					this.atom.alpha = 0.9
					this.superAtom.alpha = 0.9
					this.clyde.alpha = 0.9
					this.frzier.alpha = 0.9
					this.speedcat.alpha = 0.9
				}
			}
		}
		this.puma.addEventListener("mouseout", fl_outToPuma.bind(this));
		//סיום FADE על allStar;
		
		function fl_outToPuma() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.puma.addEventListener("click", fl_clickToPuma.bind(this));
		//לחיצה על PUMA;
		
		function fl_clickToPuma() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.puma.alpha = 0.9
			this.atom.alpha = 0.9
			this.superAtom.alpha = 0.9
			this.clyde.alpha = 0.9
			this.frzier.alpha = 0.9
			this.speedcat.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.newBalance.addEventListener("mouseover", fl_overToNewBalance.bind(this));
		//תחילת FADE על newBalance;
		
		function fl_overToNewBalance() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.newBalance.alpha = 0.9
					this.classic.alpha = 0.9
					this.newBalance574.alpha = 0.9
				}
			}
		}
		
		this.newBalance.addEventListener("mouseout", fl_outToNewBalance.bind(this));
		//סיום FADE על newBalance;
		
		function fl_outToNewBalance() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.newBalance.addEventListener("click", fl_clickToNewBalance.bind(this));
		//לחיצה על NEW BALANCE;
		
		function fl_clickToNewBalance() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.newBalance.alpha = 0.9
			this.classic.alpha = 0.9
			this.newBalance574.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.springCourt.addEventListener("mouseover", fl_overToSpringCourt.bind(this));
		//תחילת FADE על springCourt;
		
		function fl_overToSpringCourt() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.goodRich.alpha = 0.9
					this.springCourt.alpha = 0.9
				}
			}
		}
		
		this.springCourt.addEventListener("mouseout", fl_outToSpringCourt.bind(this));
		//סיום FADE על springCourt;
		
		function fl_outToSpringCourt() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.springCourt.addEventListener("click", fl_clickToSpringCourt.bind(this));
		//לחיצה על springCourt;
		
		function fl_clickToSpringCourt() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.goodRich.alpha = 0.9
			this.springCourt.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.year2010.addEventListener("mouseover", fl_overToYear2010.bind(this));
		//תחילת FADE על שנת 2010;
		
		function fl_overToYear2010() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year2010.alpha = 0.9
					this.ultraBoost.alpha = 0.9
					this.clyde.alpha = 0.9
					this.airFoamiste.alpha = 0.9
					this.flykint.alpha = 0.9
					this.zoomKybe.alpha = 0.9
					this.airMag.alpha = 0.9
					this.nmd.alpha = 0.9
				}
			}
		}
		this.year2010.addEventListener("mouseout", fl_outToYear2010.bind(this));
		//סיום שנת 2010;
		
		function fl_outToYear2010() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year2010.addEventListener("click", fl_clickToYear2010.bind(this));
		//לחיצה על שנת 2010;
		
		function fl_clickToYear2010() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year2010.alpha = 0.9
			this.year2010.alpha = 0.9
			this.ultraBoost.alpha = 0.9
			this.clyde.alpha = 0.9
			this.airFoamiste.alpha = 0.9
			this.flykint.alpha = 0.9
			this.zoomKybe.alpha = 0.9
			this.airMag.alpha = 0.9
			this.nmd.alpha = 0.9
			disableAll.bind(this)();
		
		}
		
		this.year2000.addEventListener("mouseover", fl_overToYear2000.bind(this));
		//תחילת FADE על שנת 2000;
		
		function fl_overToYear2000() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year2000.alpha = 0.9
					this.hyperadapt.alpha = 0.9
					this.speedcat.alpha = 0.9
					this.dunkLow.alpha = 0.9
					this.free5.alpha = 0.9
					this.SBdunk.alpha = 0.9
				}
			}
		}
		
		this.year2000.addEventListener("mouseout", fl_outToYear2000.bind(this));
		//סיום שנת 2000;
		
		function fl_outToYear2000() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year2000.addEventListener("click", fl_clickToYear2000.bind(this));
		//לחיצה על שנת 2000;
		
		function fl_clickToYear2000() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year2000.alpha = 0.9
			this.hyperadapt.alpha = 0.9
			this.speedcat.alpha = 0.9
			this.dunkLow.alpha = 0.9
			this.free5.alpha = 0.9
			this.SBdunk.alpha = 0.9
			disableAll.bind(this)();
		
		}
		
		this.year1990.addEventListener("mouseover", fl_overToYear1990.bind(this));
		
		//תחילת FADE על שנת 1990;
		
		function fl_overToYear1990() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year1990.alpha = 0.9
					this.airMax95.alpha = 0.9
					this.pumpFury.alpha = 0.9
					this.bapesta.alpha = 0.9
					this.halfCab.alpha = 0.9
					this.shaqnosis.alpha = 0.9
					this.airMax1.alpha = 0.9
					this.airMaxTN.alpha = 0.9
					this.airMax97.alpha = 0.9
					this.harruche.alpha = 0.9
				}
			}
		}
		
		this.year1990.addEventListener("mouseout", fl_outToYear1990.bind(this));
		//סיום שנת 1990;
		function fl_outToYear1990() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year1990.addEventListener("click", fl_clickToYear1990.bind(this));
		//לחיצה על שנת 1990;
		
		function fl_clickToYear1990() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year1990.alpha = 0.9
			this.airMax95.alpha = 0.9
			this.pumpFury.alpha = 0.9
			this.bapesta.alpha = 0.9
			this.halfCab.alpha = 0.9
			this.shaqnosis.alpha = 0.9
			this.airMax1.alpha = 0.9
			this.airMaxTN.alpha = 0.9
			this.airMax97.alpha = 0.9
			this.harruche.alpha = 0.9
			disableAll.bind(this)();
		
		}
		this.year1980.addEventListener("mouseover", fl_overToYear1980.bind(this));
		
		//תחילת FADE על שנת 1980;
		
		function fl_overToYear1980() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year1980.alpha = 0.9
					this.fredPerry.alpha = 0.9
					this.hamburg.alpha = 0.9
					this.magicJohnson.alpha = 0.9
					this.classic.alpha = 0.9
					this.akeemTheDream.alpha = 0.9
					this.airJordan1.alpha = 0.9
					this.GTII.alpha = 0.9
					this.micropacer.alpha = 0.9
					this.air1.alpha = 0.9
					this.newBalance574.alpha = 0.9
					this.airJoradan.alpha = 0.9
					this.trainer80.alpha = 0.9
				}
			}
		}
		
		this.year1980.addEventListener("mouseout", fl_outToYear1980.bind(this));
		//סיום שנת 1980;
		function fl_outToYear1980() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year1980.addEventListener("click", fl_clickToYear1980.bind(this));
		//לחיצה על שנת 1980;
		
		function fl_clickToYear1980() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year1980.alpha = 0.9
			this.fredPerry.alpha = 0.9
			this.hamburg.alpha = 0.9
			this.magicJohnson.alpha = 0.9
			this.classic.alpha = 0.9
			this.akeemTheDream.alpha = 0.9
			this.airJordan1.alpha = 0.9
			this.GTII.alpha = 0.9
			this.micropacer.alpha = 0.9
			this.air1.alpha = 0.9
			this.newBalance574.alpha = 0.9
			this.airJoradan.alpha = 0.9
			this.trainer80.alpha = 0.9
			disableAll.bind(this)();
		}
		this.year1970.addEventListener("mouseover", fl_overToYear1970.bind(this));
		
		//תחילת FADE על שנת 1970;
		
		function fl_overToYear1970() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year1970.alpha = 0.9
					this.era95.alpha = 0.9
					this.tiger.alpha = 0.9
					this.spezial.alpha = 0.9
					this.waffleTread.alpha = 0.9
					this.frzier.alpha = 0.9
				}
			}
		}
		
		this.year1970.addEventListener("mouseout", fl_outToYear1970.bind(this));
		//סיום שנת 1970;
		function fl_outToYear1970() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year1970.addEventListener("click", fl_clickToYear1970.bind(this));
		//לחיצה על שנת 1970;
		
		function fl_clickToYear1970() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year1970.alpha = 0.9
			this.era95.alpha = 0.9
			this.tiger.alpha = 0.9
			this.spezial.alpha = 0.9
			this.waffleTread.alpha = 0.9
			this.frzier.alpha = 0.9
			disableAll.bind(this)();
		}
		this.year1950.addEventListener("mouseover", fl_overToYear1950.bind(this));
		
		//תחילת FADE על שנת 1950;
		
		function fl_overToYear1950() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year1950.alpha = 0.9
					this.superAtom.alpha = 0.9
					this.onitsuka.alpha = 0.9
				}
			}
		}
		
		this.year1950.addEventListener("mouseout", fl_outToYear1950.bind(this));
		//סיום שנת 1950;
		function fl_outToYear1950() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year1950.addEventListener("click", fl_clickToYear1950.bind(this));
		//לחיצה על שנת 1950;
		
		function fl_clickToYear1950() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year1950.alpha = 0.9
			this.superAtom.alpha = 0.9
			this.onitsuka.alpha = 0.9
			disableAll.bind(this)();
		}
		this.year1940.addEventListener("mouseover", fl_overToYear1940.bind(this));
		
		//תחילת FADE על שנת 1940;
		
		function fl_overToYear1940() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year1940.alpha = 0.9
					this.atom.alpha = 0.9
				}
			}
		}
		
		this.year1940.addEventListener("mouseout", fl_outToYear1940.bind(this));
		//סיום שנת 1940;
		function fl_outToYear1940() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year1940.addEventListener("click", fl_clickToYear1940.bind(this));
		//לחיצה על שנת 1940;
		
		function fl_clickToYear1940() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year1940.alpha = 0.9
			this.atom.alpha = 0.9
			disableAll.bind(this)();
		}
		this.year1930.addEventListener("mouseover", fl_overToYear1930.bind(this));
		
		//תחילת FADE על שנת 1930;
		
		function fl_overToYear1930() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year1930.alpha = 0.9
					this.goodRich.alpha = 0.9
				}
			}
		}
		
		this.year1930.addEventListener("mouseout", fl_outToYear1930.bind(this));
		//סיום שנת 1930;
		function fl_outToYear1930() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year1930.addEventListener("click", fl_clickToYear1930.bind(this));
		//לחיצה על שנת 1930;
		
		function fl_clickToYear1930() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year1930.alpha = 0.9
			this.goodRich.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.year1900.addEventListener("mouseover", fl_overToYear1900.bind(this));
		
		//תחילת FADE על שנת 1900;
		
		function fl_overToYear1900() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.year1900.alpha = 0.9
					this.allStarBasketball.alpha = 0.9
					this.sneaker.alpha = 0.9
				}
			}
		}
		this.year1900.addEventListener("mouseout", fl_outToYear1900.bind(this));
		//סיום שנת 1900;
		function fl_outToYear1900() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.year1900.addEventListener("click", fl_clickToYear1900.bind(this));
		//לחיצה על שנת 1900;
		
		function fl_clickToYear1900() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.year1900.alpha = 0.9
			this.allStarBasketball.alpha = 0.9
			this.sneaker.alpha = 0.9
			disableAll.bind(this)();
		}
		this.runningShoes.addEventListener("mouseover", fl_overToRunningShoes.bind(this));
		
		//תחילת FADE על נעלי ריצה;
		
		function fl_overToRunningShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)()
					this.runningShoes.alpha = 0.9
					this.air1.alpha = 0.9
					this.trackSpikes.alpha = 0.9
					this.newBalance574.alpha = 0.9
					this.free5.alpha = 0.9
					this.airMax1.alpha = 0.9
					this.trainer80.alpha = 0.9
					this.airMax95.alpha = 0.9
					this.airMaxTN.alpha = 0.9
					this.airMax97.alpha = 0.9
				}
			}
		}
		
		this.runningShoes.addEventListener("mouseout", fl_outToRunningShoes.bind(this));
		//סיום סגנון ריצה;
		function fl_outToRunningShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
		
				}
			}
		}
		this.runningShoes.addEventListener("click", fl_clickToRunningShoes.bind(this));
		//לחיצה על נעלי ריצה;
		
		function fl_clickToRunningShoes() {
			clickedMouse = 1
			fadeAll.bind(this)()
			this.exitButton.alpha = 1;
			this.runningShoes.alpha = 0.9
			this.air1.alpha = 0.9
			this.trackSpikes.alpha = 0.9
			this.newBalance574.alpha = 0.9
			this.free5.alpha = 0.9
			this.airMax1.alpha = 0.9
			this.trainer80.alpha = 0.9
			this.airMax95.alpha = 0.9
			this.airMaxTN.alpha = 0.9
			this.airMax97.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.footballShoes.addEventListener("mouseover", fl_overToFootballShoes.bind(this));
		
		//תחילת FADE על נעלי כדורגל;
		
		function fl_overToFootballShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.footballShoes.alpha = 0.9
					this.spikeShoe.alpha = 0.9
					this.trackSpikes.alpha = 0.9
					this.GTII.alpha = 0.9
					this.atom.alpha = 0.9
					this.superAtom.alpha = 0.9
					this.samba.alpha = 0.9
					this.harruche.alpha = 0.9
		
				}
			}
		}
		
		this.footballShoes.addEventListener("mouseout", fl_outToFootballShoes.bind(this));
		//סיום סגנון נעלי כדורגל;
		function fl_outToFootballShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.footballShoes.addEventListener("click", fl_clickToFootballShoes.bind(this));
		//לחיצה על נעלי כדורגל;
		
		function fl_clickToFootballShoes() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.footballShoes.alpha = 0.9
			this.spikeShoe.alpha = 0.9
			this.trackSpikes.alpha = 0.9
			this.GTII.alpha = 0.9
			this.atom.alpha = 0.9
			this.superAtom.alpha = 0.9
			this.samba.alpha = 0.9
			this.harruche.alpha = 0.9
			disableAll.bind(this)();
		}
		
		this.elegantShoes.addEventListener("mouseover", fl_overToElegantShoes.bind(this));
		
		//תחילת FADE על נעלי אלגנט;
		
		function fl_overToElegantShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.elegantShoes.alpha = 0.9
					this.onitsuka.alpha = 0.9
					this.era95.alpha = 0.9
					this.speedcat.alpha = 0.9
					this.fredPerry.alpha = 0.9
					this.goodRich.alpha = 0.9
					this.spezial.alpha = 0.9
					this.oldSkool.alpha = 0.9
					this.airForce1.alpha = 0.9
				}
			}
		}
		
		this.elegantShoes.addEventListener("mouseout", fl_outToElegantShoes.bind(this));
		//סיום סגנון נעלי אלגנט;
		function fl_outToElegantShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.elegantShoes.addEventListener("click", fl_clickToElegantShoes.bind(this));
		//לחיצה על נעלי אלגנט;
		
		function fl_clickToElegantShoes() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.elegantShoes.alpha = 0.9
			this.onitsuka.alpha = 0.9
			this.era95.alpha = 0.9
			this.speedcat.alpha = 0.9
			this.fredPerry.alpha = 0.9
			this.goodRich.alpha = 0.9
			this.spezial.alpha = 0.9
			this.oldSkool.alpha = 0.9
			this.airForce1.alpha = 0.9
			disableAll.bind(this)();
		}
		
		//תחילת FADE על נעלי אימון משקולות;
		this.practiceShoes.addEventListener("mouseover", fl_overToPracticeShoes.bind(this));
		
		
		function fl_overToPracticeShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.practiceShoes.alpha = 0.9
					this.micropacer.alpha = 0.9
					this.airYeezy.alpha = 0.9
					this.airJordan1.alpha = 0.9
					this.airJoradan.alpha = 0.9
					this.akeemTheDream.alpha = 0.9
					this.airMag.alpha = 0.9
					this.jazz.alpha = 0.9
					this.waffleTread.alpha = 0.9
					this.shaqnosis.alpha = 0.9
					this.airWoven.alpha = 0.9
					this.hyperadapt.alpha = 0.9
		
		
				}
			}
		}
		//סיום סגנון נעלי אימון משקולות;
		
		this.practiceShoes.addEventListener("mouseout", fl_outToPracticeShoes.bind(this));
		function fl_outToPracticeShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		//לחיצה על נעלי אימון משקולות;
		
		this.practiceShoes.addEventListener("click", fl_clickToPracticeShoes.bind(this));
		
		function fl_clickToPracticeShoes() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.practiceShoes.alpha = 0.9
			this.micropacer.alpha = 0.9
			this.airYeezy.alpha = 0.9
			this.airJordan1.alpha = 0.9
			this.airJoradan.alpha = 0.9
			this.akeemTheDream.alpha = 0.9
			this.airMag.alpha = 0.9
			this.jazz.alpha = 0.9
			this.waffleTread.alpha = 0.9
			this.shaqnosis.alpha = 0.9
			this.airWoven.alpha = 0.9
			this.hyperadapt.alpha = 0.9
			disableAll.bind(this)();
		}
		
		//תחילת FADE על נעלי ספורט אלגנט;
		
		this.sportElegant.addEventListener("mouseover", fl_overToSportElegant.bind(this));
		
		
		function fl_overToSportElegant() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.sportElegant.alpha = 0.9
					this.air1.alpha = 0.9
					this.magicJohnson.alpha = 0.9
					this.tiger.alpha = 0.9
					this.hamburg.alpha = 0.9
		
				}
			}
		}
		
		this.sportElegant.addEventListener("mouseout", fl_outToSportElegant.bind(this));
		//סיום סגנון נעלי ספורט אלגנט;
		function fl_outToSportElegant() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		//לחיצה על נעלי ספורט אלגנט;
		
		this.sportElegant.addEventListener("click", fl_clickToSportElegant.bind(this));
		
		function fl_clickToSportElegant() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.sportElegant.alpha = 0.9
			this.air1.alpha = 0.9
			this.magicJohnson.alpha = 0.9
			this.tiger.alpha = 0.9
			this.hamburg.alpha = 0.9
			disableAll.bind(this)();
		
		}
		
		//תחילת FADE על נעלי יום-יומי;
		
		this.casualShoes.addEventListener("mouseover", fl_overToCasualShoes.bind(this));
		
		function fl_overToCasualShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.casualShoes.alpha = 0.9
					this.micropacer.alpha = 0.9
					this.airYeezy.alpha = 0.9
					this.fredPerry.alpha = 0.9
					this.magicJohnson.alpha = 0.9
					this.clyde.alpha = 0.9
					this.spezial.alpha = 0.9
					this.tiger.alpha = 0.9
					this.oldSkool.alpha = 0.9
					this.frzier.alpha = 0.9
					this.speedcat.alpha = 0.9
					this.era95.alpha = 0.9
		
				}
			}
		}
		//סיום סגנון יום-יומי;
		
		this.casualShoes.addEventListener("mouseout", fl_outToCasualShoes.bind(this));
		function fl_outToCasualShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		//לחיצה על נעלי יום-יומי;
		
		this.casualShoes.addEventListener("click", fl_clickToCasualShoes.bind(this));
		
		function fl_clickToCasualShoes() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.casualShoes.alpha = 0.9
			this.micropacer.alpha = 0.9
			this.airYeezy.alpha = 0.9
			this.fredPerry.alpha = 0.9
			this.magicJohnson.alpha = 0.9
			this.clyde.alpha = 0.9
			this.spezial.alpha = 0.9
			this.tiger.alpha = 0.9
			this.oldSkool.alpha = 0.9
			this.frzier.alpha = 0.9
			this.speedcat.alpha = 0.9
			this.era95.alpha = 0.9
			disableAll.bind(this)();
		
		}
		
		//תחילת FADE על נעלי הליכה;
		
		this.walkingShoes.addEventListener("mouseover", fl_overToWalkingShoes.bind(this));
		
		
		function fl_overToWalkingShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.walkingShoes.alpha = 0.9
					this.newBalance574.alpha = 0.9
					this.flykint.alpha = 0.9
					this.free5.alpha = 0.9
					this.jazz.alpha = 0.9
					this.zoomKybe.alpha = 0.9
					this.airMax97.alpha = 0.9
					this.nmd.alpha = 0.9
					this.nikey.alpha = 0.9
					this.harruche.alpha = 0.9
		
				}
			}
		}
		//סיום סגנון נעלי הליכה;
		
		this.walkingShoes.addEventListener("mouseout", fl_outToWalkingShoes.bind(this));
		function fl_outToWalkingShoes() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		//לחיצה על נעלי הליכה;
		
		this.walkingShoes.addEventListener("click", fl_clickToWalkingShoes.bind(this));
		
		function fl_clickToWalkingShoes() {
			clickedMouse = 1
			this.exitButton.alpha = 1;
			fadeAll.bind(this)();
			this.walkingShoes.alpha = 0.9
			this.newBalance574.alpha = 0.9
			this.flykint.alpha = 0.9
			this.free5.alpha = 0.9
			this.jazz.alpha = 0.9
			this.zoomKybe.alpha = 0.9
			this.airMax97.alpha = 0.9
			this.nmd.alpha = 0.9
			this.nikey.alpha = 0.9
			this.harruche.alpha = 0.9
			disableAll.bind(this)();
		
		}
		
		//תחילת FADE על נעל AIR1;
		
		this.air1.addEventListener("mouseover", fl_overToAir1.bind(this));
		
		function fl_overToAir1() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.air1.alpha = 0.9
					this.year1980.alpha = 0.9
					this.nike.alpha = 0.9
					this.sportElegant.alpha = 0.9
		
				}
			}
		}
		
		//סיום FADE על נעל AIR1;
		
		this.air1.addEventListener("mouseout", fl_outToAir1.bind(this));
		function fl_outToAir1() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		//לחיצה על נעל AIR1;
		
		this.air1.addEventListener("click", fl_clickToAir1.bind(this));
		
		function fl_clickToAir1() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.nikeLogo.alpha = 1
			this.nikeAir1.alpha = 1
			this.nikeAir2.alpha = 1
			this.shoesNikeAir1.alpha = 1
			this.yearNikeAir1.alpha = 1
			this.styleElegant.alpha = 1
		}
		//תחילת FADE על נעל GTII;
		
		this.GTII.addEventListener("mouseover", fl_overToGTII.bind(this));
		
		function fl_overToGTII() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.asics.alpha = 0.9
					this.year1980.alpha = 0.9
					this.casualShoes.alpha = 0.9
					this.GTII.alpha = 0.9
				}
			}
		}
		//סיום FADE על נעל GTII;
		
		this.GTII.addEventListener("mouseout", fl_outToGTII.bind(this));
		function fl_outToGTII() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		//לחיצה על נעל GTII;
		
		this.GTII.addEventListener("click", fl_clickToGTII.bind(this));
		
		function fl_clickToGTII() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.asicsLogo.alpha = 1
			this.tgII1.alpha = 1
			this.tgII2.alpha = 1
			this.asicsTGIIpic.alpha = 1
			this.year1987.alpha = 1
			this.sportEleganyStyle.alpha = 1
		}
		
		
		//תחילת FADE על נעל SUPERATOM;
		
		this.superAtom.addEventListener("mouseover", fl_overToSuperAtom.bind(this));
		function fl_overToSuperAtom() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.puma.alpha = 0.9
					this.year1950.alpha = 0.9
					this.footballShoes.alpha = 0.9
					this.superAtom.alpha = 0.9
				}
			}
		}
		this.superAtom.addEventListener("mouseout", fl_outToSuperAtom.bind(this));
		//סיום FADE על נעל SUPERATOM;
		function fl_outToSuperAtom() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		//לחיצה על נעל superAtom;
		
		this.superAtom.addEventListener("click", fl_clickTosuperAtom.bind(this));
		
		function fl_clickTosuperAtom() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.pumaAtom1.alpha = 1
			this.pumaAtom2.alpha = 1
			this.superAtomPic.alpha = 1
			this.pumaLogo.alpha = 1
			this.year1952.alpha = 1
			this.footballStyle.alpha = 1
		}
		//תחילת FADE על נעל Micropacer;
		
		this.micropacer.addEventListener("mouseover", fl_overToMicropacer.bind(this));
		function fl_overToMicropacer() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.micropacer.alpha = 0.9
					this.adidas.alpha = 0.9
					this.practiceShoes.alpha = 0.9
					this.casualShoes.alpha = 0.9
					this.year1980.alpha = 0.9
				}
			}
		}
		
		//סיום FADE על נעל Micropacer;
		
		this.micropacer.addEventListener("mouseout", fl_outToMicropacer.bind(this));
		function fl_outToMicropacer() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		
		//לחיצה על נעל Micropacer;
		
		this.micropacer.addEventListener("click", fl_clickToMicropacer.bind(this));
		
		function fl_clickToMicropacer() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.adidasMicropacer1.alpha = 1
			this.adidasMicropacer2.alpha = 1
			this.adidasMicropacerPic.alpha = 1
			this.adidasLogo.alpha = 1
			this.year1986.alpha = 1
			this.runningShoe1.alpha = 1
		}
		
		//תחילת FADE על נעל AirYeezyr;
		
		this.airYeezy.addEventListener("mouseover", fl_overToAirYeezy.bind(this));
		
		function fl_overToAirYeezy() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.airYeezy.alpha = 0.9
					this.practiceShoes.alpha = 0.9
					this.casualShoes.alpha = 0.9
					this.year2000.alpha = 0.9
					this.nike.alpha = 0.9
				}
			}
		}
		this.airYeezy.addEventListener("mouseout", fl_outToAirYeezy.bind(this));
		//סיום FADE על נעל AirYeezy;
		function fl_outToAirYeezy() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.airYeezy.addEventListener("click", fl_clickToAirYeezy.bind(this));
		//לחיצה על נעל AirYeezy;
		
		function fl_clickToAirYeezy() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.nikeAirYeezy1.alpha = 1
			this.nikeAirYeezy2.alpha = 1
			this.nikeAirYeezyPic.alpha = 1
			this.nikeLogo.alpha = 1
			this.year2009.alpha = 1
			this.practiceNcasualStyle.alpha = 1
		}
		
		this.Hyperdunk.addEventListener("mouseover", fl_overTohyperdunk.bind(this));
		
		//תחילת FADE על נעל Hyperdunk;
		
		function fl_overTohyperdunk() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					console.log("hit")
					fadeAll.bind(this)();
					this.Hyperdunk.alpha = 0.9
					this.practiceShoes.alpha = 0.9
					this.walkingShoes.alpha = 0.9
					this.year2000.alpha = 0.9
					this.nike.alpha = 0.9
				}
			}
		}
		this.Hyperdunk.addEventListener("mouseout", fl_outToHyperdunk.bind(this));
		//סיום FADE על נעל Hyperdunk;
		function fl_outToHyperdunk() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.Hyperdunk.addEventListener("click", fl_clickToHyperdunk.bind(this));
		//לחיצה על נעל Hyperdunk;
		
		function fl_clickToHyperdunk() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.nikeHyperdunk1.alpha = 1
			this.nikeHyperdunk2.alpha = 1
			this.nikeHyperdunkPic.alpha = 1
			this.nikeLogo.alpha = 1
			this.year2008.alpha = 1
			this.practiceNwalkingStyle.alpha = 1
		}
		
		
		this.airJordan1.addEventListener("mouseover", fl_overToAirJordan1.bind(this));
		
		//תחילת FADE על נעל AirJordan1;
		
		function fl_overToAirJordan1() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.airJordan1.alpha = 0.9
					this.practiceShoes.alpha = 0.9
					this.year1980.alpha = 0.9
					this.nike.alpha = 0.9
				}
			}
		}
		this.airJordan1.addEventListener("mouseout", fl_outToAirJordan1.bind(this));
		//סיום FADE על נעל AirJordan1;
		function fl_outToAirJordan1() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.airJordan1.addEventListener("click", fl_clickToAirJordan1.bind(this));
		//לחיצה על נעל AirJordan1;
		
		function fl_clickToAirJordan1() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.nikeAirJordan1.alpha = 1
			this.nikeAirJordan2.alpha = 1
			this.airJordanPic.alpha = 1
			this.nikeLogo.alpha = 1
			this.year1985.alpha = 1
			this.practiceNcasualStyle.alpha = 1
		}
		
		
		this.samba.addEventListener("mouseover", fl_overToSamba.bind(this));
		//תחילת FADE על נעל Samba;
		
		function fl_overToSamba() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.samba.alpha = 0.9
					this.adidas.alpha = 0.9
					this.year1950.alpha = 0.9
					this.elegantShoes.alpha = 0.9
					this.casualShoes.alpha = 0.9
				}
			}
		}
		this.samba.addEventListener("mouseout", fl_outToSamba.bind(this));
		//סיום FADE על נעל Samba;
		function fl_outToSamba() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.samba.addEventListener("click", fl_clickToSamba.bind(this));
		//לחיצה על נעל Samba;
		function fl_clickToSamba() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.AdidasSamba1.alpha = 1
			this.AdidasSamba2.alpha = 1
			this.AdidasSambaPic.alpha = 1
			this.adidasLogo.alpha = 1
			this.year19500.alpha = 1
			this.footballStyle.alpha = 1
		}
		
		
		this.airJoradan.addEventListener("mouseover", fl_overToAirJoradan.bind(this));
		
		//תחילת FADE על נעל AirJoradan;
		
		function fl_overToAirJoradan() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.airJoradan.alpha = 0.9
					this.nike.alpha = 0.9
					this.year1980.alpha = 0.9
					this.practiceShoes.alpha = 0.9
				}
			}
		}
		this.airJoradan.addEventListener("mouseout", fl_outToAirJoradan.bind(this));
		//סיום FADE על נעל AirJoradan;
		function fl_outToAirJoradan() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.airJoradan.addEventListener("click", fl_clickToAirJoradan.bind(this));
		//לחיצה על נעל AirJoradan;
		
		function fl_clickToAirJoradan() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.nikeJordan1.alpha = 1
			this.nikeJordan2.alpha = 1
			this.airJordannPic.alpha = 1
			this.nikeLogo.alpha = 1
			this.year1989.alpha = 1
			this.practiceShoesStyle.alpha = 1
		}
		
		
		this.newBalance574.addEventListener("mouseover", fl_overToNewBalance574.bind(this));
		//תחילת FADE על נעל NewBalance574;
		
		function fl_overToNewBalance574() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.newBalance574.alpha = 0.9
					this.newBalance.alpha = 0.9
					this.year1980.alpha = 0.9
					this.walkingShoes.alpha = 0.9
				}
			}
		}
		this.newBalance574.addEventListener("mouseout", fl_outToNewBalance574.bind(this));
		//סיום FADE על נעל NewBalance574;
		function fl_outToNewBalance574() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.newBalance574.addEventListener("click", fl_clickToNewBalance574.bind(this));
		//לחיצה על נעל NewBalance574;
		
		function fl_clickToNewBalance574() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.newBalance1.alpha = 1
			this.newBalance2.alpha = 1
			this.newBalnce574pic.alpha = 1
			this.newBalanceLogo.alpha = 1
			this.year1988.alpha = 1
			this.walkingShoesStyle.alpha = 1
		}
		
		
		this.tiger.addEventListener("mouseover", fl_overToTiger.bind(this));
		
		//תחילת FADE על נעל Tiger;
		
		function fl_overToTiger() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.tiger.alpha = 0.9
					this.asics.alpha = 0.9
					this.year1970.alpha = 0.9
					this.sportElegant.alpha = 0.9
					this.casualShoes.alpha = 0.9
				}
			}
		}
		this.tiger.addEventListener("mouseout", fl_outToTiger.bind(this));
		//סיום FADE על נעל Tiger;
		function fl_outToTiger() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		
		}
		this.tiger.addEventListener("click", fl_clickToTiger.bind(this));
		//לחיצה על נעל Tiger;
		
		function fl_clickToTiger() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.asicsTiger1.alpha = 1
			this.asicsTiger2.alpha = 1
			this.asicsTigerPic.alpha = 1
			this.asicsLogo.alpha = 1
			this.year1977.alpha = 1
			this.sportElegantNcasual.alpha = 1
		}
		
		this.airMaxTN.addEventListener("mouseover", fl_overToAirMaxTN.bind(this));
		//תחילת FADE על נעל AirMaxTN;
		
		function fl_overToAirMaxTN() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.airMaxTN.alpha = 0.9
					this.nike.alpha = 0.9
					this.year1990.alpha = 0.9
					this.runningShoes.alpha = 0.9
				}
			}
		}
		this.airMaxTN.addEventListener("mouseout", fl_outToAirMaxTN.bind(this));
		//סיום FADE על נעל AirMaxTN;
		function fl_outToAirMaxTN() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		}
		this.airMaxTN.addEventListener("click", fl_clickToAirMaxTN.bind(this));
		//לחיצה על נעל AirMaxTN;
		
		function fl_clickToAirMaxTN() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.airMaxTN1.alpha = 1
			this.airMaxTN2.alpha = 1
			this.airMaxTNpic.alpha = 1
			this.nikeLogo.alpha = 1
			this.year1998.alpha = 1
			this.runningShoe1.alpha = 1
		}
		
		
		this.harruche.addEventListener("mouseover", fl_overToHarruche.bind(this));
		
		//תחילת FADE על נעל Harruche;
		
		function fl_overToHarruche() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					fadeAll.bind(this)();
					this.harruche.alpha = 0.9
					this.nike.alpha = 0.9
					this.year1990.alpha = 0.9
					this.footballShoes.alpha = 0.9
					this.walkingShoes.alpha = 0.9
				}
			}
		}
		this.harruche.addEventListener("mouseout", fl_outToHarruche.bind(this));
		//סיום FADE על נעל Harruche
		function fl_outToHarruche() {
			if (clickedMouse == 0 || clickedMouse == 3) {
				if (clickedMouse == 0 || clickedMouse == 2) {
					showAll.bind(this)();
				}
			}
		
		}
		this.harruche.addEventListener("click", fl_clickToHarruche.bind(this));
		//לחיצה על נעל Harruche;
		
		function fl_clickToHarruche() {
			this.Box.alpha = 1
			this.closePopUp.alpha = 1
			this.nikeHarruche1.alpha = 1
			this.nikeHarruche2.alpha = 1
			this.harruchePic.alpha = 1
			this.nikeLogo.alpha = 1
			this.year1991.alpha = 1
			this.footballNwalkingShoes.alpha = 1
		}
		
		this.exitButton.addEventListener("click", fl_outToNormal.bind(this));
		//חזרה למצב רגיל לאחר לחיצה על איקס
		function fl_outToNormal() {
			showAll.bind(this)();
			enableAll.bind(this)();
			clickedMouse = 0;
			this.exitButton.alpha = 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// harruche
	this.harruchePic = new lib.harruchePic();
	this.harruchePic.parent = this;
	this.harruchePic.setTransform(262.3,350.3);

	this.footballNwalkingShoes = new cjs.Text("נעלי כדורגל/ הליכה", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.footballNwalkingShoes.name = "footballNwalkingShoes";
	this.footballNwalkingShoes.textAlign = "center";
	this.footballNwalkingShoes.lineHeight = 21;
	this.footballNwalkingShoes.parent = this;
	this.footballNwalkingShoes.setTransform(264.8,649.4,1.772,1.969);

	this.year1991 = new cjs.Text("1991", "bold 14px 'Segoe UI'");
	this.year1991.name = "year1991";
	this.year1991.textAlign = "center";
	this.year1991.lineHeight = 21;
	this.year1991.lineWidth = 85;
	this.year1991.parent = this;
	this.year1991.setTransform(269.9,534.7,4.936,5.68);

	this.nikeHarruche2 = new cjs.Text("נעל זו התפרסמה לראשונה בשנת 1991\nאך, שוחררה מחדש בשנת 2008 וזכתה\n.לפופולאריות רבה\nנחשב לאחד הדגמים הנוחים שחברת נייק\n.פרסמו", "bold 11px 'Segoe UI'");
	this.nikeHarruche2.name = "nikeHarruche2";
	this.nikeHarruche2.textAlign = "right";
	this.nikeHarruche2.lineHeight = 17;
	this.nikeHarruche2.lineWidth = 205;
	this.nikeHarruche2.parent = this;
	this.nikeHarruche2.setTransform(894.1,375.6,1.79,1.92);

	this.nikeHarruche1 = new cjs.Text("Air Harruche/נייק הוראצ'י", "bold 12px 'Segoe UI'");
	this.nikeHarruche1.name = "nikeHarruche1";
	this.nikeHarruche1.textAlign = "center";
	this.nikeHarruche1.lineHeight = 18;
	this.nikeHarruche1.lineWidth = 175;
	this.nikeHarruche1.parent = this;
	this.nikeHarruche1.setTransform(710,289.6,2.71,3.816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nikeHarruche1},{t:this.nikeHarruche2},{t:this.year1991},{t:this.footballNwalkingShoes},{t:this.harruchePic}]}).wait(1));

	// airMaxTN
	this.airMaxTNpic = new lib.airMaxTNpic();
	this.airMaxTNpic.parent = this;
	this.airMaxTNpic.setTransform(264.8,375.1);

	this.year1998 = new cjs.Text("1998", "bold 14px 'Segoe UI'");
	this.year1998.name = "year1998";
	this.year1998.textAlign = "center";
	this.year1998.lineHeight = 21;
	this.year1998.lineWidth = 85;
	this.year1998.parent = this;
	this.year1998.setTransform(269.6,534.7,4.936,5.68);

	this.airMaxTN2 = new cjs.Text("ידועות גם בשם אייר מקס פלוס, בעלות\n.פתחי איוורור מרובים\nדגם זה החזיק בשיא המכירות של נייק \n.במשך כ-15 שנים ברציפות", "bold 11px 'Segoe UI'");
	this.airMaxTN2.name = "airMaxTN2";
	this.airMaxTN2.textAlign = "right";
	this.airMaxTN2.lineHeight = 17;
	this.airMaxTN2.lineWidth = 205;
	this.airMaxTN2.parent = this;
	this.airMaxTN2.setTransform(893.9,375.6,1.79,1.92);

	this.airMaxTN1 = new cjs.Text("Air MaxTN/נייק אייר מקס", "bold 12px 'Segoe UI'");
	this.airMaxTN1.name = "airMaxTN1";
	this.airMaxTN1.textAlign = "center";
	this.airMaxTN1.lineHeight = 18;
	this.airMaxTN1.lineWidth = 175;
	this.airMaxTN1.parent = this;
	this.airMaxTN1.setTransform(711.3,291.6,2.53,3.562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.airMaxTN1},{t:this.airMaxTN2},{t:this.year1998},{t:this.airMaxTNpic}]}).wait(1));

	// tiger
	this.asicsTigerPic = new lib.asicsTigerPic();
	this.asicsTigerPic.parent = this;
	this.asicsTigerPic.setTransform(271.6,374.7);

	this.asicsTiger2 = new cjs.Text("תוכננו במקור כנעלי ריצה מתחרות לדגם\n.CORTEZ של חברת נייק\nהמעצב של חברת נייק עזב לטובת אסיקס\nועיצב תחילה את הדגם שהולך ומוכר עם\n.החברה עד היום", "bold 11px 'Segoe UI'");
	this.asicsTiger2.name = "asicsTiger2";
	this.asicsTiger2.textAlign = "right";
	this.asicsTiger2.lineHeight = 17;
	this.asicsTiger2.lineWidth = 205;
	this.asicsTiger2.parent = this;
	this.asicsTiger2.setTransform(898.1,367.8,1.79,1.92);

	this.asicsTiger1 = new cjs.Text("Asics Tiger/אסיקס טייגר", "bold 12px 'Segoe UI'");
	this.asicsTiger1.name = "asicsTiger1";
	this.asicsTiger1.textAlign = "center";
	this.asicsTiger1.lineHeight = 18;
	this.asicsTiger1.lineWidth = 175;
	this.asicsTiger1.parent = this;
	this.asicsTiger1.setTransform(707.2,286.1,2.923,3.779);

	this.sportElegantNcasual = new cjs.Text("נעלי ספורט אלגנט/ יום-יומי", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.sportElegantNcasual.name = "sportElegantNcasual";
	this.sportElegantNcasual.textAlign = "center";
	this.sportElegantNcasual.lineHeight = 21;
	this.sportElegantNcasual.lineWidth = 176;
	this.sportElegantNcasual.parent = this;
	this.sportElegantNcasual.setTransform(265.2,655.3,1.772,1.969);

	this.year1977 = new cjs.Text("1977", "bold 14px 'Segoe UI'");
	this.year1977.name = "year1977";
	this.year1977.textAlign = "center";
	this.year1977.lineHeight = 21;
	this.year1977.lineWidth = 85;
	this.year1977.parent = this;
	this.year1977.setTransform(265.9,532.8,4.936,5.68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.year1977},{t:this.sportElegantNcasual},{t:this.asicsTiger1},{t:this.asicsTiger2},{t:this.asicsTigerPic}]}).wait(1));

	// samba
	this.AdidasSambaPic = new lib.AdidasSambaPic();
	this.AdidasSambaPic.parent = this;
	this.AdidasSambaPic.setTransform(268,366.5);

	this.year19500 = new cjs.Text("1950", "bold 14px 'Segoe UI'");
	this.year19500.name = "year19500";
	this.year19500.textAlign = "center";
	this.year19500.lineHeight = 21;
	this.year19500.lineWidth = 85;
	this.year19500.parent = this;
	this.year19500.setTransform(263.5,547,4.936,5.68);

	this.AdidasSamba2 = new cjs.Text("נעלי הכדורגל הקלאסיות של חברת\n.אדידס\nבמקור תוכננות בתור נעליים לאימון\n.באולם ספורט מקורה\nאנשים כמו פרדי מרקורי ואדי מרפי נעלו\nאת הדגם והפכו אותו לאייקוני", "bold 11px 'Segoe UI'");
	this.AdidasSamba2.name = "AdidasSamba2";
	this.AdidasSamba2.textAlign = "right";
	this.AdidasSamba2.lineHeight = 17;
	this.AdidasSamba2.lineWidth = 205;
	this.AdidasSamba2.parent = this;
	this.AdidasSamba2.setTransform(893.5,381.9,1.79,1.92);

	this.AdidasSamba1 = new cjs.Text("Adidas Samba/אדידס סמבה", "bold 9px 'Segoe UI'");
	this.AdidasSamba1.name = "AdidasSamba1";
	this.AdidasSamba1.textAlign = "center";
	this.AdidasSamba1.lineHeight = 14;
	this.AdidasSamba1.lineWidth = 175;
	this.AdidasSamba1.parent = this;
	this.AdidasSamba1.setTransform(710.3,287.2,3.107,5.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.AdidasSamba1},{t:this.AdidasSamba2},{t:this.year19500},{t:this.AdidasSambaPic}]}).wait(1));

	// airJoradan
	this.airJordannPic = new lib.airJordannPic();
	this.airJordannPic.parent = this;
	this.airJordannPic.setTransform(268.3,380.9);

	this.practiceShoesStyle = new cjs.Text("נעלי אימון משקולות", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.practiceShoesStyle.name = "practiceShoesStyle";
	this.practiceShoesStyle.textAlign = "center";
	this.practiceShoesStyle.lineHeight = 21;
	this.practiceShoesStyle.parent = this;
	this.practiceShoesStyle.setTransform(264.2,649.1,1.772,1.969);

	this.year1989 = new cjs.Text("1989", "bold 14px 'Segoe UI'");
	this.year1989.name = "year1989";
	this.year1989.textAlign = "center";
	this.year1989.lineHeight = 21;
	this.year1989.lineWidth = 85;
	this.year1989.parent = this;
	this.year1989.setTransform(269.2,534.4,4.936,5.68);

	this.nikeJordan2 = new cjs.Text("דגם נוסף של נייקי מסדרת ג'ורדן. צבעי\nהמקור של נעלי ההתעמלות היו לבן ואפור\n.הן בעלות רשת קלילה וכנפיים מפלסטיק\n\nספייק לי הציג את אייר ג'ורדן בסרט \n.\"עשה את הדבר הנכון\"", "bold 11px 'Segoe UI'");
	this.nikeJordan2.name = "nikeJordan2";
	this.nikeJordan2.textAlign = "right";
	this.nikeJordan2.lineHeight = 17;
	this.nikeJordan2.lineWidth = 205;
	this.nikeJordan2.parent = this;
	this.nikeJordan2.setTransform(893.5,375.3,1.79,1.92);

	this.nikeJordan1 = new cjs.Text("Nike Jordan/נייק ג'ורדן", "bold 12px 'Segoe UI'");
	this.nikeJordan1.name = "nikeJordan1";
	this.nikeJordan1.textAlign = "center";
	this.nikeJordan1.lineHeight = 18;
	this.nikeJordan1.lineWidth = 175;
	this.nikeJordan1.parent = this;
	this.nikeJordan1.setTransform(707.7,286.7,2.192,3.562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nikeJordan1},{t:this.nikeJordan2},{t:this.year1989},{t:this.practiceShoesStyle},{t:this.airJordannPic}]}).wait(1));

	// newBalance574
	this.newBalnce574pic = new lib.newBalnce574pic();
	this.newBalnce574pic.parent = this;
	this.newBalnce574pic.setTransform(254.1,367.2);

	this.newBalanceLogo = new lib.newBalanceLogo();
	this.newBalanceLogo.parent = this;
	this.newBalanceLogo.setTransform(856,177.3);

	this.walkingShoesStyle = new cjs.Text("נעלי הליכה", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.walkingShoesStyle.name = "walkingShoesStyle";
	this.walkingShoesStyle.textAlign = "center";
	this.walkingShoesStyle.lineHeight = 21;
	this.walkingShoesStyle.parent = this;
	this.walkingShoesStyle.setTransform(265,649.1,1.772,1.969);

	this.year1988 = new cjs.Text("1988", "bold 14px 'Segoe UI'");
	this.year1988.name = "year1988";
	this.year1988.textAlign = "center";
	this.year1988.lineHeight = 21;
	this.year1988.lineWidth = 85;
	this.year1988.parent = this;
	this.year1988.setTransform(270,534.4,4.936,5.68);

	this.newBalance2 = new cjs.Text("ניו באלאנס 574 יצאו כנעלי ריצה עם\nעיצוב אטראקטיבי, בעלות מערכת ריפוד\n.עבור נוחות והגנה למשתמש\n.לדגם קיימים עיצובים וצבעים שונים", "bold 11px 'Segoe UI'");
	this.newBalance2.name = "newBalance2";
	this.newBalance2.textAlign = "right";
	this.newBalance2.lineHeight = 17;
	this.newBalance2.lineWidth = 205;
	this.newBalance2.parent = this;
	this.newBalance2.setTransform(894.3,375.3,1.79,1.92);

	this.newBalance1 = new cjs.Text("New Balance 574/ניו באלאנס 574 ", "bold 12px 'Segoe UI'");
	this.newBalance1.name = "newBalance1";
	this.newBalance1.textAlign = "center";
	this.newBalance1.lineHeight = 18;
	this.newBalance1.lineWidth = 191;
	this.newBalance1.parent = this;
	this.newBalance1.setTransform(705.8,290.2,1.956,3.178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.newBalance1},{t:this.newBalance2},{t:this.year1988},{t:this.walkingShoesStyle},{t:this.newBalanceLogo},{t:this.newBalnce574pic}]}).wait(1));

	// Hyperdunk
	this.nikeHyperdunkPic = new lib.nikeHyperdunkPic();
	this.nikeHyperdunkPic.parent = this;
	this.nikeHyperdunkPic.setTransform(272.2,389.2);

	this.practiceNwalkingStyle = new cjs.Text("נעלי אימון משקולות/ הליכה", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.practiceNwalkingStyle.name = "practiceNwalkingStyle";
	this.practiceNwalkingStyle.textAlign = "center";
	this.practiceNwalkingStyle.lineHeight = 21;
	this.practiceNwalkingStyle.parent = this;
	this.practiceNwalkingStyle.setTransform(264.8,650.3,1.772,1.969);

	this.year2008 = new cjs.Text("2008", "bold 14px 'Segoe UI'");
	this.year2008.name = "year2008";
	this.year2008.textAlign = "center";
	this.year2008.lineHeight = 21;
	this.year2008.lineWidth = 85;
	this.year2008.parent = this;
	this.year2008.setTransform(269.8,535.6,4.936,5.68);

	this.nikeHyperdunk2 = new cjs.Text("מעוצבות ע\"פ סדרות הסרטים \"בחזרה\n.לעתיד\", והפכו לנעליים אייקוניות\nהגירסא שיצאה בשנת 2010 לעולם לא\nתהיה זמינה לרכישה שוב, מאחר ומתנהל\n.משפט מול חברת נייק בנושא", "bold 11px 'Segoe UI'");
	this.nikeHyperdunk2.name = "nikeHyperdunk2";
	this.nikeHyperdunk2.textAlign = "right";
	this.nikeHyperdunk2.lineHeight = 17;
	this.nikeHyperdunk2.lineWidth = 205;
	this.nikeHyperdunk2.parent = this;
	this.nikeHyperdunk2.setTransform(894.1,376.5,1.79,1.92);

	this.nikeHyperdunk1 = new cjs.Text("Nike Hyperdunk/נייק הייפרדאנק ", "bold 12px 'Segoe UI'");
	this.nikeHyperdunk1.name = "nikeHyperdunk1";
	this.nikeHyperdunk1.textAlign = "center";
	this.nikeHyperdunk1.lineHeight = 18;
	this.nikeHyperdunk1.lineWidth = 186;
	this.nikeHyperdunk1.parent = this;
	this.nikeHyperdunk1.setTransform(707.3,287.9,2.192,3.562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nikeHyperdunk1},{t:this.nikeHyperdunk2},{t:this.year2008},{t:this.practiceNwalkingStyle},{t:this.nikeHyperdunkPic}]}).wait(1));

	// airJordan1
	this.airJordanPic = new lib.airJordanPic();
	this.airJordanPic.parent = this;
	this.airJordanPic.setTransform(262.8,376.6);

	this.practiceNcasualStyle = new cjs.Text("נעלי אימון משקולות/ יום-יומי", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.practiceNcasualStyle.name = "practiceNcasualStyle";
	this.practiceNcasualStyle.textAlign = "center";
	this.practiceNcasualStyle.lineHeight = 21;
	this.practiceNcasualStyle.parent = this;
	this.practiceNcasualStyle.setTransform(263.7,649.8,1.772,1.969);

	this.year1985 = new cjs.Text("1985", "bold 14px 'Segoe UI'");
	this.year1985.name = "year1985";
	this.year1985.textAlign = "center";
	this.year1985.lineHeight = 21;
	this.year1985.lineWidth = 85;
	this.year1985.parent = this;
	this.year1985.setTransform(268.7,535,4.936,5.68);

	this.nikeAirJordan2 = new cjs.Text("נקראות על שמו של שחקן הכדורסל\nהמוכר מייקל ג'ורדן, וגרמו להרבה בעיות\nמאחר והיו שונות מנעלי הענף של אותה\n.התקופה\nבכל שנה הדגמים ע\"ש השחקן מכניסים\n.למעלה מ-100 מיליון דולר", "bold 11px 'Segoe UI'");
	this.nikeAirJordan2.name = "nikeAirJordan2";
	this.nikeAirJordan2.textAlign = "right";
	this.nikeAirJordan2.lineHeight = 17;
	this.nikeAirJordan2.lineWidth = 205;
	this.nikeAirJordan2.parent = this;
	this.nikeAirJordan2.setTransform(893,375.9,1.79,1.92);

	this.nikeAirJordan1 = new cjs.Text("Nike Air Jordan/נייק אייר ג'ורדן", "bold 12px 'Segoe UI'");
	this.nikeAirJordan1.name = "nikeAirJordan1";
	this.nikeAirJordan1.textAlign = "center";
	this.nikeAirJordan1.lineHeight = 18;
	this.nikeAirJordan1.lineWidth = 175;
	this.nikeAirJordan1.parent = this;
	this.nikeAirJordan1.setTransform(707.2,287.3,2.192,3.562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nikeAirJordan1},{t:this.nikeAirJordan2},{t:this.year1985},{t:this.practiceNcasualStyle},{t:this.airJordanPic}]}).wait(1));

	// airYeezy
	this.nikeAirYeezyPic = new lib.nikeAirYeezyPic();
	this.nikeAirYeezyPic.parent = this;
	this.nikeAirYeezyPic.setTransform(254.2,389.8);

	this.year2009 = new cjs.Text("2009", "bold 14px 'Segoe UI'");
	this.year2009.name = "year2009";
	this.year2009.textAlign = "center";
	this.year2009.lineHeight = 21;
	this.year2009.lineWidth = 85;
	this.year2009.parent = this;
	this.year2009.setTransform(268.2,536.5,4.936,5.68);

	this.nikeAirYeezy2 = new cjs.Text("שוחררו בשנת 2009 בשלושה צבעים\n.שחור/ ורוד/ אפור\nLED באב טיפוס של הנעל חיברו נורות \n.אבל היו להן בעיות בסוללה ולכן לא צלחו\nהדגם הפך מיד להצלחה מסחררת ונמכר\n.עד גמר המלאי", "bold 11px 'Segoe UI'");
	this.nikeAirYeezy2.name = "nikeAirYeezy2";
	this.nikeAirYeezy2.textAlign = "right";
	this.nikeAirYeezy2.lineHeight = 17;
	this.nikeAirYeezy2.lineWidth = 205;
	this.nikeAirYeezy2.parent = this;
	this.nikeAirYeezy2.setTransform(892.5,377.4,1.79,1.92);

	this.nikeAirYeezy1 = new cjs.Text("Nike Air Yeezy/נייר אייר ייזי", "bold 12px 'Segoe UI'");
	this.nikeAirYeezy1.name = "nikeAirYeezy1";
	this.nikeAirYeezy1.textAlign = "center";
	this.nikeAirYeezy1.lineHeight = 18;
	this.nikeAirYeezy1.lineWidth = 175;
	this.nikeAirYeezy1.parent = this;
	this.nikeAirYeezy1.setTransform(706.7,286.1,2.512,3.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nikeAirYeezy1},{t:this.nikeAirYeezy2},{t:this.year2009},{t:this.nikeAirYeezyPic}]}).wait(1));

	// micropacer
	this.runningShoe1 = new cjs.Text("נעלי ריצה", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.runningShoe1.name = "runningShoe1";
	this.runningShoe1.textAlign = "center";
	this.runningShoe1.lineHeight = 21;
	this.runningShoe1.parent = this;
	this.runningShoe1.setTransform(264.7,658,1.772,1.969);

	this.adidasMicropacerPic = new lib.adidasMicropacerPic();
	this.adidasMicropacerPic.parent = this;
	this.adidasMicropacerPic.setTransform(260.3,370.6);

	this.year1986 = new cjs.Text("1986", "bold 14px 'Segoe UI'");
	this.year1986.name = "year1986";
	this.year1986.textAlign = "center";
	this.year1986.lineHeight = 21;
	this.year1986.lineWidth = 85;
	this.year1986.parent = this;
	this.year1986.setTransform(264.4,547,4.936,5.68);

	this.adidasMicropacer2 = new cjs.Text("שוחררו בשנת 1986, וזהו הניסיון הראשון\nשל החברה להוציא נעלי ריצה עם מד\n.צעדים אלקטרוני מובנה\nנעל זו היוותה באופן נרחב את ההתחלה\n.\"של \"נעלי ספורט חכמות", "bold 11px 'Segoe UI'");
	this.adidasMicropacer2.name = "adidasMicropacer2";
	this.adidasMicropacer2.textAlign = "right";
	this.adidasMicropacer2.lineHeight = 17;
	this.adidasMicropacer2.lineWidth = 205;
	this.adidasMicropacer2.parent = this;
	this.adidasMicropacer2.setTransform(894.4,382,1.79,1.92);

	this.adidasMicropacer1 = new cjs.Text("Adidas Micropacer/אדידס מיקרופייסר", "bold 9px 'Segoe UI'");
	this.adidasMicropacer1.name = "adidasMicropacer1";
	this.adidasMicropacer1.textAlign = "center";
	this.adidasMicropacer1.lineHeight = 14;
	this.adidasMicropacer1.lineWidth = 175;
	this.adidasMicropacer1.parent = this;
	this.adidasMicropacer1.setTransform(708.1,294.7,2.392,4.206);

	this.adidasLogo = new lib.adidasLogo();
	this.adidasLogo.parent = this;
	this.adidasLogo.setTransform(879,181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.adidasLogo},{t:this.adidasMicropacer1},{t:this.adidasMicropacer2},{t:this.year1986},{t:this.adidasMicropacerPic},{t:this.runningShoe1}]}).wait(1));

	// pumaSuper
	this.footballStyle = new cjs.Text("נעלי ריצה", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.footballStyle.name = "footballStyle";
	this.footballStyle.textAlign = "center";
	this.footballStyle.lineHeight = 21;
	this.footballStyle.parent = this;
	this.footballStyle.setTransform(268.3,660.7,1.772,1.969);

	this.superAtomPic = new lib.superAtomPic();
	this.superAtomPic.parent = this;
	this.superAtomPic.setTransform(260.9,387.1);

	this.pumaLogo = new lib.pumaLogo();
	this.pumaLogo.parent = this;
	this.pumaLogo.setTransform(876.2,195.5);

	this.pumaAtom2 = new cjs.Text("חברת פומה פיתחה את נעלי הכדורגל\nהראשונות בעולם עם קפיצים בסוליה\n.\"שלימים, נקראו \"פקקים\nהן אפשרו לחפור לתוך האדמה, ונתנו\n.אחיזה טובה יותר לשחק בעת משחק", "bold 11px 'Segoe UI'");
	this.pumaAtom2.name = "pumaAtom2";
	this.pumaAtom2.textAlign = "right";
	this.pumaAtom2.lineHeight = 17;
	this.pumaAtom2.lineWidth = 205;
	this.pumaAtom2.parent = this;
	this.pumaAtom2.setTransform(893.8,382.3,1.79,1.92);

	this.year1952 = new cjs.Text("1952", "bold 14px 'Segoe UI'");
	this.year1952.name = "year1952";
	this.year1952.textAlign = "center";
	this.year1952.lineHeight = 21;
	this.year1952.lineWidth = 85;
	this.year1952.parent = this;
	this.year1952.setTransform(265.1,546.8,4.936,5.68);

	this.pumaAtom1 = new cjs.Text("Puma Super Atom/פומה סופר אטום", "bold 9px 'Segoe UI'");
	this.pumaAtom1.name = "pumaAtom1";
	this.pumaAtom1.textAlign = "center";
	this.pumaAtom1.lineHeight = 14;
	this.pumaAtom1.lineWidth = 175;
	this.pumaAtom1.parent = this;
	this.pumaAtom1.setTransform(710.6,297.7,2.392,4.206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pumaAtom1},{t:this.year1952},{t:this.pumaAtom2},{t:this.pumaLogo},{t:this.superAtomPic},{t:this.footballStyle}]}).wait(1));

	// tgII
	this.asicsTGIIpic = new lib.asicsTGIIpic();
	this.asicsTGIIpic.parent = this;
	this.asicsTGIIpic.setTransform(259.9,370);

	this.asicsLogo = new lib.asicsLogo();
	this.asicsLogo.parent = this;
	this.asicsLogo.setTransform(864.1,170.6);

	this.tgII2 = new cjs.Text("אסיקס GT II בעלות מערכת ריפוד עבור\nבלימת זעזועים, והחלה מהפיכה\n.בעולם האימון \nדגם זה היווה תפיסה חדשנית\nומודרנית בתחום נעלי הריצה. אנקדוטה-\nהיה זה הג'ל בדגם זה ששם את חברת\n.אסיקס על המפה של נעלי ריצה וספורט", "bold 11px 'Segoe UI'");
	this.tgII2.name = "tgII2";
	this.tgII2.textAlign = "right";
	this.tgII2.lineHeight = 17;
	this.tgII2.lineWidth = 205;
	this.tgII2.parent = this;
	this.tgII2.setTransform(903.8,387.5,1.973,1.664);

	this.tgII1 = new cjs.Text("Asics TGII/אסיקס GT II ", "bold 12px 'Segoe UI'");
	this.tgII1.name = "tgII1";
	this.tgII1.textAlign = "center";
	this.tgII1.lineHeight = 18;
	this.tgII1.lineWidth = 175;
	this.tgII1.parent = this;
	this.tgII1.setTransform(707.2,285.2,3.009,3.89);

	this.sportEleganyStyle = new cjs.Text("נעלי ספורט אלגנט", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.sportEleganyStyle.name = "sportEleganyStyle";
	this.sportEleganyStyle.textAlign = "center";
	this.sportEleganyStyle.lineHeight = 21;
	this.sportEleganyStyle.lineWidth = 118;
	this.sportEleganyStyle.parent = this;
	this.sportEleganyStyle.setTransform(269.3,653.8,1.772,1.969);

	this.year1987 = new cjs.Text("1987", "bold 14px 'Segoe UI'");
	this.year1987.name = "year1987";
	this.year1987.textAlign = "center";
	this.year1987.lineHeight = 21;
	this.year1987.lineWidth = 85;
	this.year1987.parent = this;
	this.year1987.setTransform(265.9,532.8,4.936,5.68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.year1987},{t:this.sportEleganyStyle},{t:this.tgII1},{t:this.tgII2},{t:this.asicsLogo},{t:this.asicsTGIIpic}]}).wait(1));

	// nileAir1
	this.nikeLogo = new lib.nikeLogo();
	this.nikeLogo.parent = this;
	this.nikeLogo.setTransform(878.1,178.1);

	this.shoesNikeAir1 = new lib.shoesNikeAir1();
	this.shoesNikeAir1.parent = this;
	this.shoesNikeAir1.setTransform(267.3,373.5);

	this.styleElegant = new cjs.Text("נעלי ספורט אלגנט", "bold 14px 'Segoe UI'", "#FFFFFF");
	this.styleElegant.name = "styleElegant";
	this.styleElegant.textAlign = "center";
	this.styleElegant.lineHeight = 21;
	this.styleElegant.parent = this;
	this.styleElegant.setTransform(280,651.8,1.772,1.969);

	this.yearNikeAir1 = new cjs.Text("1987", "bold 14px 'Segoe UI'");
	this.yearNikeAir1.name = "yearNikeAir1";
	this.yearNikeAir1.textAlign = "center";
	this.yearNikeAir1.lineHeight = 21;
	this.yearNikeAir1.lineWidth = 85;
	this.yearNikeAir1.parent = this;
	this.yearNikeAir1.setTransform(266.5,530.9,4.936,5.68);

	this.nikeAir2 = new cjs.Text("שוחררו בשנת 1987, הציעו פתרון חדשני\nלענפי הספורט של שנות ה-80. אפשרו\nלנעול את אותו הזוג בידיעה שתוכל\n.לעסוק בכל ענף ספורט או פעילות בקלות\nנוחות ותמיכה מוצעים בסגנון זה, ומגיעים\nבמגוון רחב של צבעים, ניתנות להתאמה\nלכל אחד והסגנון שלו", "bold 11px 'Segoe UI'");
	this.nikeAir2.name = "nikeAir2";
	this.nikeAir2.textAlign = "right";
	this.nikeAir2.lineHeight = 17;
	this.nikeAir2.lineWidth = 205;
	this.nikeAir2.parent = this;
	this.nikeAir2.setTransform(889,388.7,1.773,1.733);

	this.nikeAir1 = new cjs.Text("Nike Air 1/ניייק אייר 1", "bold 12px 'Segoe UI'");
	this.nikeAir1.name = "nikeAir1";
	this.nikeAir1.textAlign = "center";
	this.nikeAir1.lineHeight = 18;
	this.nikeAir1.lineWidth = 175;
	this.nikeAir1.parent = this;
	this.nikeAir1.setTransform(708,285.1,3.009,3.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nikeAir1},{t:this.nikeAir2},{t:this.yearNikeAir1},{t:this.styleElegant},{t:this.shoesNikeAir1},{t:this.nikeLogo}]}).wait(1));

	// box
	this.closePopUp = new lib.closePopUp();
	this.closePopUp.parent = this;
	this.closePopUp.setTransform(57.6,159.3);
	new cjs.ButtonHelper(this.closePopUp, 0, 1, 1);

	this.Box = new lib.Box();
	this.Box.parent = this;
	this.Box.setTransform(497.9,420.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Box},{t:this.closePopUp}]}).wait(1));

	// Actions
	this.exitButton = new lib.exitButton();
	this.exitButton.parent = this;
	this.exitButton.setTransform(46,189);
	new cjs.ButtonHelper(this.exitButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.exitButton).wait(1));

	// Layer 1
	this.ActiveButton = new lib.ActiveButton();
	this.ActiveButton.parent = this;
	this.ActiveButton.setTransform(884.9,21.6);
	new cjs.ButtonHelper(this.ActiveButton, 0, 1, 1);

	this.regularButton = new lib.regularButton();
	this.regularButton.parent = this;
	this.regularButton.setTransform(884.6,22.9);
	new cjs.ButtonHelper(this.regularButton, 0, 1, 1);

	this.trackSpikes = new lib.trackSpikes();
	this.trackSpikes.parent = this;
	this.trackSpikes.setTransform(428.8,341.9,0.298,0.302);
	new cjs.ButtonHelper(this.trackSpikes, 0, 1, 1);

	this.airYeezy = new lib.airYeezy();
	this.airYeezy.parent = this;
	this.airYeezy.setTransform(519.2,343.9,0.298,0.298);
	new cjs.ButtonHelper(this.airYeezy, 0, 1, 1);

	this.walkingShoes = new lib.walkingShoes();
	this.walkingShoes.parent = this;
	this.walkingShoes.setTransform(182.8,294);
	new cjs.ButtonHelper(this.walkingShoes, 0, 1, 1);

	this.casualShoes = new lib.casualShoes();
	this.casualShoes.parent = this;
	this.casualShoes.setTransform(265.2,293);
	new cjs.ButtonHelper(this.casualShoes, 0, 1, 1);

	this.sportElegant = new lib.sportElegant();
	this.sportElegant.parent = this;
	this.sportElegant.setTransform(392.9,292.8);
	new cjs.ButtonHelper(this.sportElegant, 0, 1, 1);

	this.practiceShoes = new lib.practiceShoes();
	this.practiceShoes.parent = this;
	this.practiceShoes.setTransform(524.4,292.8);
	new cjs.ButtonHelper(this.practiceShoes, 0, 1, 1);

	this.elegantShoes = new lib.elegantShoes();
	this.elegantShoes.parent = this;
	this.elegantShoes.setTransform(638.4,294);
	new cjs.ButtonHelper(this.elegantShoes, 0, 1, 1);

	this.footballShoes = new lib.footballShoes();
	this.footballShoes.parent = this;
	this.footballShoes.setTransform(741.3,294);
	new cjs.ButtonHelper(this.footballShoes, 0, 1, 1);

	this.runningShoes = new lib.runningShoes();
	this.runningShoes.parent = this;
	this.runningShoes.setTransform(833.6,294.8);
	new cjs.ButtonHelper(this.runningShoes, 0, 1, 1);

	this.year1900 = new lib.year1900();
	this.year1900.parent = this;
	this.year1900.setTransform(163.6,185.2);
	new cjs.ButtonHelper(this.year1900, 0, 1, 1);

	this.year1910 = new lib.year1910();
	this.year1910.parent = this;
	this.year1910.setTransform(219.4,185.2);
	new cjs.ButtonHelper(this.year1910, 0, 1, 1);

	this.year1920 = new lib.year1920();
	this.year1920.parent = this;
	this.year1920.setTransform(274.6,185.2);
	new cjs.ButtonHelper(this.year1920, 0, 1, 1);

	this.year1930 = new lib.year1930();
	this.year1930.parent = this;
	this.year1930.setTransform(334.4,185.2);
	new cjs.ButtonHelper(this.year1930, 0, 1, 1);

	this.year1940 = new lib.year1940();
	this.year1940.parent = this;
	this.year1940.setTransform(394.1,185.2);
	new cjs.ButtonHelper(this.year1940, 0, 1, 1);

	this.year1950 = new lib.year1950();
	this.year1950.parent = this;
	this.year1950.setTransform(451.3,185.2);
	new cjs.ButtonHelper(this.year1950, 0, 1, 1);

	this.year1960 = new lib.year1960();
	this.year1960.parent = this;
	this.year1960.setTransform(506.4,185.2);
	new cjs.ButtonHelper(this.year1960, 0, 1, 1);

	this.year1970 = new lib.year1970();
	this.year1970.parent = this;
	this.year1970.setTransform(564.6,185.2);
	new cjs.ButtonHelper(this.year1970, 0, 1, 1);

	this.year1980 = new lib.year1980();
	this.year1980.parent = this;
	this.year1980.setTransform(620.6,185.2);
	new cjs.ButtonHelper(this.year1980, 0, 1, 1);

	this.year1990 = new lib.year1990();
	this.year1990.parent = this;
	this.year1990.setTransform(679.1,185.2);
	new cjs.ButtonHelper(this.year1990, 0, 1, 1);

	this.year2000 = new lib.year2000();
	this.year2000.parent = this;
	this.year2000.setTransform(739.3,185.2);
	new cjs.ButtonHelper(this.year2000, 0, 1, 1);

	this.year2010 = new lib.year2010();
	this.year2010.parent = this;
	this.year2010.setTransform(794.2,185.2);
	new cjs.ButtonHelper(this.year2010, 0, 1, 1);

	this.year2017 = new lib.year2017();
	this.year2017.parent = this;
	this.year2017.setTransform(845.6,185.2);
	new cjs.ButtonHelper(this.year2017, 0, 1, 1);

	this.atom = new lib.atom();
	this.atom.parent = this;
	this.atom.setTransform(56.9,401.9);
	new cjs.ButtonHelper(this.atom, 0, 1, 1);

	this.asics = new lib.asics();
	this.asics.parent = this;
	this.asics.setTransform(833,245.5);
	new cjs.ButtonHelper(this.asics, 0, 1, 1);

	this.keds = new lib.keds();
	this.keds.parent = this;
	this.keds.setTransform(748,243);
	new cjs.ButtonHelper(this.keds, 0, 1, 1);

	this.adidas = new lib.adidas();
	this.adidas.parent = this;
	this.adidas.setTransform(665,240);
	new cjs.ButtonHelper(this.adidas, 0, 1, 1);

	this.vans = new lib.vans();
	this.vans.parent = this;
	this.vans.setTransform(593,242);
	new cjs.ButtonHelper(this.vans, 0, 1, 1);

	this.nike = new lib.nike();
	this.nike.parent = this;
	this.nike.setTransform(520.5,245);
	new cjs.ButtonHelper(this.nike, 0, 1, 1);

	this.allStar = new lib.allStar();
	this.allStar.parent = this;
	this.allStar.setTransform(436,244);
	new cjs.ButtonHelper(this.allStar, 0, 1, 1);

	this.puma = new lib.puma();
	this.puma.parent = this;
	this.puma.setTransform(352,241);
	new cjs.ButtonHelper(this.puma, 0, 1, 1);

	this.newBalance = new lib.newBalance();
	this.newBalance.parent = this;
	this.newBalance.setTransform(266,241);
	new cjs.ButtonHelper(this.newBalance, 0, 1, 1);

	this.springCourt = new lib.springCourt();
	this.springCourt.parent = this;
	this.springCourt.setTransform(186,246);
	new cjs.ButtonHelper(this.springCourt, 0, 1, 1);

	this.air1 = new lib.air1();
	this.air1.parent = this;
	this.air1.setTransform(895.2,342.1);
	new cjs.ButtonHelper(this.air1, 0, 1, 1);

	this.nmd = new lib.nmd();
	this.nmd.parent = this;
	this.nmd.setTransform(521.8,642.9);
	new cjs.ButtonHelper(this.nmd, 0, 1, 1);

	this.airWoven = new lib.airWoven();
	this.airWoven.parent = this;
	this.airWoven.setTransform(429.8,641.6);
	new cjs.ButtonHelper(this.airWoven, 0, 1, 1);

	this.hyperadapt = new lib.hyperadapt();
	this.hyperadapt.parent = this;
	this.hyperadapt.setTransform(337.8,641.9);
	new cjs.ButtonHelper(this.hyperadapt, 0, 1, 1);

	this.halfCab = new lib.halfCab();
	this.halfCab.parent = this;
	this.halfCab.setTransform(245.8,642.9);
	new cjs.ButtonHelper(this.halfCab, 0, 1, 1);

	this.nikey = new lib.nikey();
	this.nikey.parent = this;
	this.nikey.setTransform(149.8,639.9);
	new cjs.ButtonHelper(this.nikey, 0, 1, 1);

	this.harruche = new lib.harruche();
	this.harruche.parent = this;
	this.harruche.setTransform(57.8,638.9);
	new cjs.ButtonHelper(this.harruche, 0, 1, 1);

	this.airMax97 = new lib.airMax97();
	this.airMax97.parent = this;
	this.airMax97.setTransform(891.3,642.9);
	new cjs.ButtonHelper(this.airMax97, 0, 1, 1);

	this.speedcat = new lib.speedcat();
	this.speedcat.parent = this;
	this.speedcat.setTransform(801.1,642.5);
	new cjs.ButtonHelper(this.speedcat, 0, 1, 1);

	this.classic = new lib.classic();
	this.classic.parent = this;
	this.classic.setTransform(800.9,406.6);
	new cjs.ButtonHelper(this.classic, 0, 1, 1);

	this.oldSkool = new lib.oldSkool();
	this.oldSkool.parent = this;
	this.oldSkool.setTransform(707.9,578.6);
	new cjs.ButtonHelper(this.oldSkool, 0, 1, 1);

	this.airMax95 = new lib.airMax95();
	this.airMax95.parent = this;
	this.airMax95.setTransform(524.8,582.9);
	new cjs.ButtonHelper(this.airMax95, 0, 1, 1);

	this.sqash = new lib.sqash();
	this.sqash.parent = this;
	this.sqash.setTransform(431.8,580.9);
	new cjs.ButtonHelper(this.sqash, 0, 1, 1);

	this.sneaker = new lib.sneaker();
	this.sneaker.parent = this;
	this.sneaker.setTransform(337.8,579.9);
	new cjs.ButtonHelper(this.sneaker, 0, 1, 1);

	this.blazer = new lib.blazer();
	this.blazer.parent = this;
	this.blazer.setTransform(244.8,582.9);
	new cjs.ButtonHelper(this.blazer, 0, 1, 1);

	this.frzier = new lib.frzier();
	this.frzier.parent = this;
	this.frzier.setTransform(149.8,581.9);
	new cjs.ButtonHelper(this.frzier, 0, 1, 1);

	this.airMaxTN = new lib.airMaxTN();
	this.airMaxTN.parent = this;
	this.airMaxTN.setTransform(58,582);
	new cjs.ButtonHelper(this.airMaxTN, 0, 1, 1);

	this.bapesta = new lib.bapesta();
	this.bapesta.parent = this;
	this.bapesta.setTransform(890.8,580.9);
	new cjs.ButtonHelper(this.bapesta, 0, 1, 1);

	this.waffleTread = new lib.waffleTread();
	this.waffleTread.parent = this;
	this.waffleTread.setTransform(801.3,579.9);
	new cjs.ButtonHelper(this.waffleTread, 0, 1, 1);

	this.superAtom = new lib.superAtom();
	this.superAtom.parent = this;
	this.superAtom.setTransform(702,341.5);
	new cjs.ButtonHelper(this.superAtom, 0, 1, 1);

	this.shaqnosis = new lib.shaqnosis();
	this.shaqnosis.parent = this;
	this.shaqnosis.setTransform(613.9,579.9);
	new cjs.ButtonHelper(this.shaqnosis, 0, 1, 1);

	this.jazz = new lib.jazz();
	this.jazz.parent = this;
	this.jazz.setTransform(523.8,525.9);
	new cjs.ButtonHelper(this.jazz, 0, 1, 1);

	this.pumpFury = new lib.pumpFury();
	this.pumpFury.parent = this;
	this.pumpFury.setTransform(427.8,524.9);
	new cjs.ButtonHelper(this.pumpFury, 0, 1, 1);

	this.spezial = new lib.spezial();
	this.spezial.parent = this;
	this.spezial.setTransform(335.8,522.9);
	new cjs.ButtonHelper(this.spezial, 0, 1, 1);

	this.zoomKybe = new lib.zoomKybe();
	this.zoomKybe.parent = this;
	this.zoomKybe.setTransform(245.8,524.9);
	new cjs.ButtonHelper(this.zoomKybe, 0, 1, 1);

	this.ultraBoost = new lib.ultraBoost();
	this.ultraBoost.parent = this;
	this.ultraBoost.setTransform(147.8,521.9);
	new cjs.ButtonHelper(this.ultraBoost, 0, 1, 1);

	this.tiger = new lib.tiger();
	this.tiger.parent = this;
	this.tiger.setTransform(54.5,521.9);
	new cjs.ButtonHelper(this.tiger, 0, 1, 1);

	this.spikeShoe = new lib.spikeShoe();
	this.spikeShoe.parent = this;
	this.spikeShoe.setTransform(889.8,521.6);
	new cjs.ButtonHelper(this.spikeShoe, 0, 1, 1);

	this.trainer80 = new lib.trainer80();
	this.trainer80.parent = this;
	this.trainer80.setTransform(798.8,522.9);
	new cjs.ButtonHelper(this.trainer80, 0, 1, 1);

	this.dunkLow = new lib.dunkLow();
	this.dunkLow.parent = this;
	this.dunkLow.setTransform(707.9,521.6);
	new cjs.ButtonHelper(this.dunkLow, 0, 1, 1);

	this.clyde = new lib.clyde();
	this.clyde.parent = this;
	this.clyde.setTransform(612.8,525.9);
	new cjs.ButtonHelper(this.clyde, 0, 1, 1);

	this.free5 = new lib.free50();
	this.free5.parent = this;
	this.free5.setTransform(523.8,465.9);
	new cjs.ButtonHelper(this.free5, 0, 1, 1);

	this.airMag = new lib.airMag();
	this.airMag.parent = this;
	this.airMag.setTransform(426.9,462.9);
	new cjs.ButtonHelper(this.airMag, 0, 1, 1);

	this.disc = new lib.disc();
	this.disc.parent = this;
	this.disc.setTransform(339.9,460.9);
	new cjs.ButtonHelper(this.disc, 0, 1, 1);

	this.airMax1 = new lib.airMax1();
	this.airMax1.parent = this;
	this.airMax1.setTransform(244.8,462);
	new cjs.ButtonHelper(this.airMax1, 0, 1, 1);

	this.hamburg = new lib.hamburg();
	this.hamburg.parent = this;
	this.hamburg.setTransform(151.4,462.5);
	new cjs.ButtonHelper(this.hamburg, 0, 1, 1);

	this.newBalance574 = new lib.newBalance574();
	this.newBalance574.parent = this;
	this.newBalance574.setTransform(149.3,342.7);
	new cjs.ButtonHelper(this.newBalance574, 0, 1, 1);

	this.magicJohnson = new lib.magicJohnson();
	this.magicJohnson.parent = this;
	this.magicJohnson.setTransform(892.6,461.1);
	new cjs.ButtonHelper(this.magicJohnson, 0, 1, 1);

	this.gv = new lib.gv();
	this.gv.parent = this;
	this.gv.setTransform(798.9,460.9);
	new cjs.ButtonHelper(this.gv, 0, 1, 1);

	this.allStarBasketball = new lib.allStarBasketball();
	this.allStarBasketball.parent = this;
	this.allStarBasketball.setTransform(707.9,461.6);
	new cjs.ButtonHelper(this.allStarBasketball, 0, 1, 1);

	this.airFoamiste = new lib.airFoamiste();
	this.airFoamiste.parent = this;
	this.airFoamiste.setTransform(616.5,461.6);
	new cjs.ButtonHelper(this.airFoamiste, 0, 1, 1);

	this.SBdunk = new lib.SBdunk();
	this.SBdunk.parent = this;
	this.SBdunk.setTransform(524.9,404.9);
	new cjs.ButtonHelper(this.SBdunk, 0, 1, 1);

	this.samba = new lib.samba();
	this.samba.parent = this;
	this.samba.setTransform(54.5,460.9);
	new cjs.ButtonHelper(this.samba, 0, 1, 1);

	this.goodRich = new lib.goodRich();
	this.goodRich.parent = this;
	this.goodRich.setTransform(336.9,401.9);
	new cjs.ButtonHelper(this.goodRich, 0, 1, 1);

	this.yeezyBoots = new lib.yeezyBoots();
	this.yeezyBoots.parent = this;
	this.yeezyBoots.setTransform(245.9,400.9);
	new cjs.ButtonHelper(this.yeezyBoots, 0, 1, 1);

	this.flykint = new lib.flykint();
	this.flykint.parent = this;
	this.flykint.setTransform(150.9,404.9);
	new cjs.ButtonHelper(this.flykint, 0, 1, 1);

	this.airJoradan = new lib.airJoradan();
	this.airJoradan.parent = this;
	this.airJoradan.setTransform(56.8,345.1);
	new cjs.ButtonHelper(this.airJoradan, 0, 1, 1);

	this.airForce1 = new lib.airForce1();
	this.airForce1.parent = this;
	this.airForce1.setTransform(890.8,405);
	new cjs.ButtonHelper(this.airForce1, 0, 1, 1);

	this.GTII = new lib.GTII();
	this.GTII.parent = this;
	this.GTII.setTransform(798.9,344.7);
	new cjs.ButtonHelper(this.GTII, 0, 1, 1);

	this.akeemTheDream = new lib.akeemTheDream();
	this.akeemTheDream.parent = this;
	this.akeemTheDream.setTransform(707.9,403.4);
	new cjs.ButtonHelper(this.akeemTheDream, 0, 1, 1);

	this.airJordanXI = new lib.airJordanXI();
	this.airJordanXI.parent = this;
	this.airJordanXI.setTransform(613.9,405);
	new cjs.ButtonHelper(this.airJordanXI, 0, 1, 1);

	this.airJordan1 = new lib.airJordan1();
	this.airJordan1.parent = this;
	this.airJordan1.setTransform(333.9,345.9);
	new cjs.ButtonHelper(this.airJordan1, 0, 1, 1);

	this.Hyperdunk = new lib.Hyperdunk();
	this.Hyperdunk.parent = this;
	this.Hyperdunk.setTransform(244.8,345.9);
	new cjs.ButtonHelper(this.Hyperdunk, 0, 1, 1);

	this.fredPerry = new lib.fredPerry();
	this.fredPerry.parent = this;
	this.fredPerry.setTransform(428.6,401.7);
	new cjs.ButtonHelper(this.fredPerry, 0, 1, 1);

	this.micropacer = new lib.micropacer();
	this.micropacer.parent = this;
	this.micropacer.setTransform(612.8,340.3);
	new cjs.ButtonHelper(this.micropacer, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUA7IAGgSIAFAAQAHAAADgCQAEgCADgEQACgDACgHIABgSIAAgCIgBgFIgEgEQgDgCgFAAIgjAAIAAgyIAXAAIAAAgIAPAAQARAAAHAHQAIAHAAAOIAAADIgBATQgCASgKAJQgKAIgTAAg");
	this.shape.setTransform(885.9,134.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnAsIAFgTIApAAIgqg5IAVgLIAaAmQADgDABgEIABgNIAAgQIAWAAIAAATQAAAJgDAIQgEAFgKAJIAOATIgEAQg");
	this.shape_1.setTransform(877.2,136.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnAoIAEgRQAOADALAAQAOAAAGgGQAHgGAAgOQAAgOgGgGQgFgGgMAAIgKABIAAAPIALAAIgDARIgeAAIAAguQAPgEASAAQAXAAALAKQALALAAAWQAAAWgMALQgLALgXAAQgSAAgPgEg");
	this.shape_2.setTransform(868.1,136.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_3.setTransform(861,134.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_4.setTransform(856.7,134.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARAsIAAgvQAAgKgFgFQgFgGgKAAIgMAAIgYAFIACgTQAUgEASgBQASAAALAKQAKAKAAATIAAAwgAglAsIAAgxIAXgKIAAA7g");
	this.shape_5.setTransform(849.6,136.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAsIADgSIAYAAQALgBAFgGQAGgFAAgOIAAgGQAAgSgYgBIgNABIgMACIADgRIAOgDIAOgBQATABALAIQAKAIAAATIAAAGQAAAJgCAGQgEAHgFAFIARAAIgDASg");
	this.shape_6.setTransform(836.5,136.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnAoIAEgRQAOADALAAQAOAAAGgGQAHgGAAgOQAAgOgGgGQgFgGgMAAIgKABIAAAPIALAAIgDARIgeAAIAAguQAPgEASAAQAXAAALAKQALALAAAWQAAAWgMALQgLALgXAAQgSAAgPgEg");
	this.shape_7.setTransform(827.4,136.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOAsIAAgwQAAgJgFgGQgFgFgKAAQgMAAgSADIACgTQAQgCAQgBQATAAAKAKQAKALAAASIAAAwg");
	this.shape_8.setTransform(817.7,136.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAhQgKgLAAgUIAAgsIAWAAIAAAqQAAAMAFAHQAFAHAJAAQAKAAAFgGQAFgGAAgLIAAgIQAAgLgEgEQgFgFgIAAQgEAAgIACIABgSQAIgCAJAAQAQAAAJAKQAIAKAAASIAAAFQAAAWgLALQgKALgVAAQgUAAgLgLg");
	this.shape_9.setTransform(809.1,136.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_10.setTransform(801.7,134.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAsIAAgvQAAgKgFgFQgFgGgKAAIgMAAIgYAFIACgTQAUgEASgBQATAAAKAKQAKAKAAATIAAAwgAglAsIAAgxIAXgKIAAA7g");
	this.shape_11.setTransform(790.8,136.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAsIADgTIAVAAIAAgfQAAgLgCgEQgDgDgGgBIgKACIADgSIANgCQAJABAGADQAGADADAHQAEAIAAAMIAAA1g");
	this.shape_12.setTransform(782.5,136.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgmAaQAQgBALgDIgZhEIAXAAIAVA8QADgBACgEIADgHIAAgKIAAgmIAXAAIAAAlQAAANgEAJQgEAKgHAGQgIAGgMAEQgLAEgZAEg");
	this.shape_13.setTransform(774.9,136.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUA7IAGgSIAFAAQAHAAAEgCQAEgCACgEQADgDABgHIABgSIAAgCIgBgFIgEgEQgDgCgFAAIgiAAIAAgyIAWAAIAAAgIAPAAQARAAAIAHQAHAHAAAOIAAADIgCATQgBASgKAJQgKAIgSAAg");
	this.shape_14.setTransform(766.4,134.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_15.setTransform(760.3,134.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_16.setTransform(755.9,134.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoAsIAAhTIAUgDIAKAAIAKgBQATAAALAKQALAJAAARIAAAlIgEAOgAgRgXIAAAxIAjAAIAAgfQAAgJgFgFQgFgFgKgBIgPACg");
	this.shape_17.setTransform(748.7,136.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAaQAQgBALgDIgZhEIAXAAIAVA8QADgBACgEIADgHIAAgKIAAgmIAXAAIAAAlQAAANgEAJQgEAKgHAGQgIAGgMAEQgLAEgZAEg");
	this.shape_18.setTransform(734.9,136.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmAsIADgSIAZAAQAKgBAGgGQAFgFAAgOIAAgGQAAgSgZgBIgMABIgLACIACgRIAPgDIANgBQATABALAIQALAIAAATIAAAGQAAAJgEAGQgDAHgGAFIASAAIgDASg");
	this.shape_19.setTransform(726.4,136.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOAsIAAgwQAAgJgFgGQgFgFgKAAQgMAAgSADIACgTQAQgCAQgBQATAAAKAKQAKALAAASIAAAwg");
	this.shape_20.setTransform(717.3,136.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_21.setTransform(711.5,136.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmAaQAQgBALgDIgZhEIAXAAIAVA8QADgBACgEIADgHIAAgKIAAgmIAXAAIAAAlQAAANgEAJQgEAKgHAGQgIAGgMAEQgLAEgZAEg");
	this.shape_22.setTransform(700.6,136.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgoAsIAAhTIAUgDIAKAAIAKgBQATAAALAKQALAJAAARIAAAlIgEAOgAgRgXIAAAxIAjAAIAAgfQAAgJgFgFQgFgFgKgBIgPACg");
	this.shape_23.setTransform(691.4,136.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARAsIAAgvQAAgKgFgFQgFgGgKAAIgMAAIgYAFIADgTQATgEASgBQATAAAJAKQALAKgBATIAAAwgAglAsIAAgxIAWgKIAAA7g");
	this.shape_24.setTransform(677.5,136.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmAaQAQgBALgDIgZhEIAXAAIAVA8QADgBACgEIADgHIAAgKIAAgmIAXAAIAAAlQAAANgEAJQgEAKgHAGQgIAGgMAEQgLAEgZAEg");
	this.shape_25.setTransform(667.7,136.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiApIACgRQAMACAKAAQAJAAAFgDQAFgDACgFQADgFAAgKQAAgJgDgFQgCgGgGgCQgEgDgIAAQgOAAgMADIACgSIAMgCIAPgBQANAAAKAEQAKAFAFAJQAEAKAAAPQAAAXgLAKQgKALgXAAQgQAAgKgDg");
	this.shape_26.setTransform(659.2,136.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgmAsIADgSIAZAAQAKgBAGgGQAFgFAAgOIAAgGQAAgSgZgBIgMABIgLACIACgRIAPgDIANgBQATABALAIQALAIAAATIAAAGQAAAJgEAGQgDAHgGAFIASAAIgDASg");
	this.shape_27.setTransform(650.8,136.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAOAsIAAgwQAAgJgFgGQgFgFgKAAQgMAAgSADIACgTQAQgCAQgBQATAAAKAKQAKALAAASIAAAwg");
	this.shape_28.setTransform(641.7,136.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_29.setTransform(632,136.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUA7IAGgSIAFAAQAHAAAEgCQAEgCACgEQADgDABgHIABgSIAAgCIgBgFIgEgEQgDgCgFAAIgjAAIAAgyIAXAAIAAAgIAPAAQAQAAAIAHQAIAHAAAOIAAADIgCATQgBASgKAJQgKAIgSAAg");
	this.shape_30.setTransform(625.4,134.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AARAsIAAgwQAAgKgFgFQgEgFgJAAIgPABIAABDIgXAAIAAhTIASgCQAKgBAMgBQASAAALAKQAKALgBASIAAAwg");
	this.shape_31.setTransform(616.6,136.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnAsIAFgTIAqAAIgrg5IAVgLIAaAmQADgDABgEIABgNIAAgQIAWAAIAAATQAAAJgDAIQgEAFgKAJIAOATIgEAQg");
	this.shape_32.setTransform(606.8,136.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_33.setTransform(600.3,136.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgmAaQAQgBALgDIgZhEIAXAAIAVA8QADgBACgEIADgHIAAgKIAAgmIAXAAIAAAlQAAANgEAJQgEAKgHAGQgIAGgMAEQgLAEgZAEg");
	this.shape_34.setTransform(589.4,136.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUA7IAGgSIAFAAQAHAAAEgCQAEgCACgEQADgDABgHIABgSIAAgCIgBgFIgEgEQgDgCgFAAIgjAAIAAgyIAXAAIAAAgIAPAAQAQAAAIAHQAIAHAAAOIAAADIgCATQgBASgKAJQgKAIgSAAg");
	this.shape_35.setTransform(580.9,134.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AARAsIAAgvQAAgKgFgFQgEgGgLAAIgNAAIgWAFIABgTQAUgEASgBQASAAALAKQAJAKABATIAAAwgAglAsIAAgxIAXgKIAAA7g");
	this.shape_36.setTransform(568.2,136.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAsIADgTIAVAAIAAgfQAAgLgCgEQgDgDgGgBIgKACIADgSIANgCQAJABAGADQAGADADAHQAEAIAAAMIAAA1g");
	this.shape_37.setTransform(559.9,136.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgmAaQAQgBALgDIgZhEIAXAAIAVA8QADgBACgEIADgHIAAgKIAAgmIAXAAIAAAlQAAANgEAJQgEAKgHAGQgIAGgMAEQgLAEgZAEg");
	this.shape_38.setTransform(552.3,136.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUA7IAGgSIAFAAQAHAAADgCQAEgCADgEQACgDABgHIACgSIAAgCIgBgFIgEgEQgDgCgFAAIgjAAIAAgyIAXAAIAAAgIAPAAQARAAAHAHQAJAHgBAOIAAADIgBATQgCASgKAJQgKAIgTAAg");
	this.shape_39.setTransform(543.8,134.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AARAsIAAgvQAAgKgFgFQgEgGgLAAIgNAAIgWAFIACgTQATgEASgBQATAAAJAKQAKAKAAATIAAAwgAglAsIAAgxIAWgKIAAA7g");
	this.shape_40.setTransform(531.1,136.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAOAsIAAgwQAAgJgFgGQgFgFgKAAQgMAAgSADIACgTQAQgCAQgBQATAAAKAKQAKALAAASIAAAwg");
	this.shape_41.setTransform(521.4,136.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgnAsIAFgTIApAAIgqg5IAVgLIAbAmQACgDABgEIABgNIAAgQIAXAAIAAATQAAAJgFAIQgDAFgKAJIAOATIgEAQg");
	this.shape_42.setTransform(513,136.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_43.setTransform(506.5,136.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_44.setTransform(502.2,134.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AARAsIAAgvQAAgKgFgFQgEgGgLAAIgMAAIgYAFIACgTQAUgEASgBQATAAAKAKQAKAKgBATIAAAwgAglAsIAAgxIAXgKIAAA7g");
	this.shape_45.setTransform(495.1,136.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgNARIAIgiIATAAIgKAig");
	this.shape_46.setTransform(488,140.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAsIgMgTIgRgZQgEAEgBAEQgCAEAAAJIAAAXIgWAAIAAgZQAAgHACgFQABgFAEgEQADgFAJgGIgRgTIAJgFIAMgGIARAXIANASQAFgEACgEQACgEAAgHIAAgUIAWAAIAAAVQAAAKgFAIQgFAGgLAIIAWAgg");
	this.shape_47.setTransform(477.4,136.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_48.setTransform(469.9,136.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUA7IAGgSIAFAAQAHAAAEgCQAEgCACgEQADgDABgHIABgSIAAgCIgBgFIgEgEQgDgCgFAAIgiAAIAAgyIAWAAIAAAgIAPAAQARAAAIAHQAHAHAAAOIAAADIgCATQgBASgKAJQgKAIgSAAg");
	this.shape_49.setTransform(459.5,134.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AARAsIAAgwQAAgKgFgFQgEgFgIAAIgQABIAABDIgXAAIAAhTIASgCQAKgBAMgBQASAAALAKQAKALgBASIAAAwg");
	this.shape_50.setTransform(450.7,136.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUA7IAGgSIAFAAQAHAAADgCQAEgCADgEQACgDACgHIABgSIAAgCIgBgFIgEgEQgDgCgFAAIgjAAIAAgyIAXAAIAAAgIAPAAQARAAAHAHQAJAHgBAOIAAADIgBATQgCASgKAJQgKAIgTAAg");
	this.shape_51.setTransform(441.3,134.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_52.setTransform(435.2,136.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgnAoIAEgRQAOADALAAQAOAAAGgGQAHgGAAgOQAAgOgGgGQgFgGgMAAIgKABIAAAPIALAAIgDARIgeAAIAAguQAPgEASAAQAXAAALAKQALALAAAWQAAAWgMALQgLALgXAAQgSAAgPgEg");
	this.shape_53.setTransform(428.3,136.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_54.setTransform(421.2,134.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgKA9IAAh5IAVAAIAAB5g");
	this.shape_55.setTransform(416.8,138.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgNARIAIgiIATAAIgKAig");
	this.shape_56.setTransform(412.4,140.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgmAsIADgSIAYAAQALgBAGgGQAFgFAAgOIAAgGQAAgSgYgBIgNABIgMACIADgRIAPgDIANgBQAUABAKAIQAKAIAAATIAAAGQABAJgDAGQgEAHgFAFIARAAIgDASg");
	this.shape_57.setTransform(402.6,136.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AARAsIAAgwQAAgKgEgFQgFgFgJAAIgPABIAABDIgXAAIAAhTIASgCQAKgBAMgBQASAAALAKQAJALABASIAAAwg");
	this.shape_58.setTransform(393.3,136.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAOAsIAAgwQAAgJgFgGQgFgFgKAAQgMAAgSADIACgTQAQgCAQgBQATAAAKAKQAKALAAASIAAAwg");
	this.shape_59.setTransform(383.6,136.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_60.setTransform(377.8,136.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgmAsIADgSIAZAAQAKgBAGgGQAFgFAAgOIAAgGQAAgSgYgBIgNABIgLACIACgRIAPgDIANgBQATABALAIQALAIAAATIAAAGQAAAJgDAGQgEAHgFAFIARAAIgDASg");
	this.shape_61.setTransform(367.4,136.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgvArIACgRIAFAAQAGAAACgDQADgDAAgJIAAgiIgLACIACgTQASgDAbAAQAUAAAKAJQALAIAAASIAAAzIgXAAIAAgwQAAgLgEgEQgFgFgJAAIgOAAIAAAnQAAALgDAGQgDAHgHADQgHADgJAAIgLgBg");
	this.shape_62.setTransform(357.3,136.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgnAoIAEgRQAOADALAAQAOAAAGgGQAHgGAAgOQAAgOgGgGQgFgGgMAAIgKABIAAAPIALAAIgDARIgeAAIAAguQAPgEASAAQAXAAALAKQALALAAAWQAAAWgMALQgLALgXAAQgSAAgPgEg");
	this.shape_63.setTransform(347.6,136.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAOAsIAAgwQAAgJgFgGQgFgFgKAAQgMAAgSADIACgTQAQgCAQgBQATAAAKAKQAKALAAASIAAAwg");
	this.shape_64.setTransform(338,136.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_65.setTransform(332.2,134.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgfAhQgKgLAAgUIAAgsIAWAAIAAAqQAAAMAFAHQAFAHAJAAQAKAAAFgGQAFgGAAgLIAAgIQAAgLgEgEQgFgFgIAAQgEAAgIACIABgSQAIgCAJAAQAQAAAJAKQAIAKAAASIAAAFQAAAWgLALQgKALgVAAQgUAAgLgLg");
	this.shape_66.setTransform(325,136.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgmAsIADgSIAZAAQAKgBAGgGQAFgFAAgOIAAgGQAAgSgYgBIgNABIgLACIACgRIAPgDIANgBQATABALAIQALAIAAATIAAAGQAAAJgDAGQgEAHgFAFIARAAIgDASg");
	this.shape_67.setTransform(311.6,136.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AABArQgCAAgFgCIAEgQIAJABQANAAgBgOIAAgQQAAgLgEgFQgFgFgKAAQgDAAgEACQgFACgCADQgCAEAAADIAAA2IgWAAIAAhCIgBgHIgCgGIATgIQAEAFABAGQAGgFAFgCQAGgDAHAAQAPAAAKAKQAKAKAAASIAAARQAAAKgEAIQgEAHgHAEQgHADgKAAIgJgBg");
	this.shape_68.setTransform(302.4,136.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_69.setTransform(295.2,136.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgvArIACgRIAFAAQAGAAACgDQADgDAAgJIAAgiIgLACIACgTQASgDAbAAQAUAAAKAJQALAIAAASIAAAzIgXAAIAAgwQAAgLgEgEQgFgFgJAAIgOAAIAAAnQAAALgDAGQgDAHgHADQgHADgJAAIgLgBg");
	this.shape_70.setTransform(287.3,136.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAJArIgCgbIgHAFIgEAIQgBAEgCAKIgWAAQADgPAEgIQAEgJAHgFQAHgFAJgDIgBgMQgBgFgDgCQgCgDgHAAIgOAAIADgSIAOAAQAQAAAIAGQAGAGACANIAEA8g");
	this.shape_71.setTransform(278.5,136.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgNARIAIgiIATAAIgKAig");
	this.shape_72.setTransform(273,140.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgmAsIADgSIAZAAQAKgBAFgGQAGgFAAgOIAAgGQAAgSgZgBIgLABIgMACIADgRIANgDIAOgBQAUABAKAIQALAIAAATIAAAGQgBAJgDAGQgDAHgGAFIASAAIgCASg");
	this.shape_73.setTransform(263.1,136.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgeAiQgLgLAAgVIAAgoIAVgEIASgBQAWAAAMALQALALgBAVQABAVgLAMQgMALgUAAQgUAAgKgKgAgTgYIAAAZQAAAMAFAHQAFAGAJAAQAKAAAFgGQAFgHAAgNQAAgNgGgGQgGgGgKAAQgKAAgHABg");
	this.shape_74.setTransform(253.7,136.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAJArIgCgbIgHAFIgEAIQgCAEgBAKIgXAAQAEgPAEgIQAEgJAHgFQAHgFAJgDIgBgMQgBgFgDgCQgCgDgHAAIgOAAIACgSIAPAAQAQAAAIAGQAGAGACANIAEA8g");
	this.shape_75.setTransform(244.6,136.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgXAsIADgTIAVAAIAAgfQAAgLgCgEQgDgDgGgBIgKACIADgSIANgCQAJABAGADQAGADADAHQAEAIAAAMIAAA1g");
	this.shape_76.setTransform(237.9,136.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_77.setTransform(233,136.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgKA9IAAh5IAVAAIAAB5g");
	this.shape_78.setTransform(228.6,138.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAQAsIgMgTIgRgZQgEAEgBAEQgCAEAAAJIAAAXIgWAAIAAgZQAAgHACgFQABgFAEgEQADgFAJgGIgRgTIAJgFIAMgGIARAXIANASQAFgEACgEQACgEAAgHIAAgUIAWAAIAAAVQAAAKgFAIQgFAGgLAIIAWAgg");
	this.shape_79.setTransform(217.5,136.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_80.setTransform(210,136.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgmAsIADgSIAYAAQALgBAGgGQAFgFAAgOIAAgGQAAgSgYgBIgNABIgLACIACgRIAPgDIANgBQAUABAKAIQAKAIAAATIAAAGQAAAJgCAGQgEAHgFAFIARAAIgDASg");
	this.shape_81.setTransform(199.6,136.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgoArIgMhVIAWAAIAHAsQAEgCAEgDQACgCABgFIADgOIACgSIAVAAIgCAVQgCAPgEAGQgDAHgGAFQgHAEgLAEIAAAFIAUAAQAJABAGgDQAFgDADgFQADgFABgJIAFgrIAWAAIgEAqQgDARgFAJQgFAIgIAFQgKAEgOAAg");
	this.shape_82.setTransform(189.5,136.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXAsIADgTIAVAAIAAgfQAAgLgCgEQgDgDgGgBIgKACIADgSIANgCQAJABAGADQAGADADAHQAEAIAAAMIAAA1g");
	this.shape_83.setTransform(180.4,136.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_84.setTransform(175.4,134.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgoAsIAAhTIAUgDIAKAAIAKgBQATAAALAKQALAJAAARIAAAlIgEAOgAgRgXIAAAxIAjAAIAAgfQAAgJgFgFQgFgFgKgBIgPACg");
	this.shape_85.setTransform(168.2,136.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AARAsIAAgvQAAgKgFgFQgFgGgKAAIgNAAIgWAFIACgTQATgEASgBQASAAAKAKQAKAKAAATIAAAwgAglAsIAAgxIAWgKIAAA7g");
	this.shape_86.setTransform(154.3,136.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAOAsIAAgwQAAgJgFgGQgFgFgKAAQgMAAgSADIACgTQAQgCAQgBQATAAAKAKQAKALAAASIAAAwg");
	this.shape_87.setTransform(144.7,136.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgmAsIADgTIAqAAIgqg5IAVgLIAbAmQACgDABgEIABgNIAAgQIAXAAIAAATQAAAJgFAIQgDAFgKAJIAOATIgEAQg");
	this.shape_88.setTransform(136.3,136.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_89.setTransform(129.8,136.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_90.setTransform(125.4,134.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_91.setTransform(121.1,136.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgvArIACgRIAFAAQAGAAACgDQADgDAAgJIAAgiIgLACIACgTQASgDAbAAQAUAAAKAJQALAIAAASIAAAzIgXAAIAAgwQAAgLgEgEQgFgFgJAAIgOAAIAAAnQAAALgDAGQgDAHgHADQgHADgJAAIgLgBg");
	this.shape_92.setTransform(113.2,136.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgJAIQgDgDAAgFQAAgEADgDQAEgEAFABQAFgBAEAEQAEADAAAEQAAAGgEACQgEADgFAAQgFAAgEgDg");
	this.shape_93.setTransform(106.4,139.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.micropacer},{t:this.fredPerry},{t:this.Hyperdunk},{t:this.airJordan1},{t:this.airJordanXI},{t:this.akeemTheDream},{t:this.GTII},{t:this.airForce1},{t:this.airJoradan},{t:this.flykint},{t:this.yeezyBoots},{t:this.goodRich},{t:this.samba},{t:this.SBdunk},{t:this.airFoamiste},{t:this.allStarBasketball},{t:this.gv},{t:this.magicJohnson},{t:this.newBalance574},{t:this.hamburg},{t:this.airMax1},{t:this.disc},{t:this.airMag},{t:this.free5},{t:this.clyde},{t:this.dunkLow},{t:this.trainer80},{t:this.spikeShoe},{t:this.tiger},{t:this.ultraBoost},{t:this.zoomKybe},{t:this.spezial},{t:this.pumpFury},{t:this.jazz},{t:this.shaqnosis},{t:this.superAtom},{t:this.waffleTread},{t:this.bapesta},{t:this.airMaxTN},{t:this.frzier},{t:this.blazer},{t:this.sneaker},{t:this.sqash},{t:this.airMax95},{t:this.oldSkool},{t:this.classic},{t:this.speedcat},{t:this.airMax97},{t:this.harruche},{t:this.nikey},{t:this.halfCab},{t:this.hyperadapt},{t:this.airWoven},{t:this.nmd},{t:this.air1},{t:this.springCourt},{t:this.newBalance},{t:this.puma},{t:this.allStar},{t:this.nike},{t:this.vans},{t:this.adidas},{t:this.keds},{t:this.asics},{t:this.atom},{t:this.year2017},{t:this.year2010},{t:this.year2000},{t:this.year1990},{t:this.year1980},{t:this.year1970},{t:this.year1960},{t:this.year1950},{t:this.year1940},{t:this.year1930},{t:this.year1920},{t:this.year1910},{t:this.year1900},{t:this.runningShoes},{t:this.footballShoes},{t:this.elegantShoes},{t:this.practiceShoes},{t:this.sportElegant},{t:this.casualShoes},{t:this.walkingShoes},{t:this.airYeezy},{t:this.trackSpikes},{t:this.regularButton},{t:this.ActiveButton}]}).wait(1));

	// Vector Smart Object
	this.onitsuka = new lib.onitsuka();
	this.onitsuka.parent = this;
	this.onitsuka.setTransform(612.8,640.9);
	new cjs.ButtonHelper(this.onitsuka, 0, 1, 1);

	this.era95 = new lib.era95();
	this.era95.parent = this;
	this.era95.setTransform(707.9,638.9);
	new cjs.ButtonHelper(this.era95, 0, 1, 1);

	this.instance = new lib.Artboard4();
	this.instance.parent = this;

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#CC3333").ss(1,1,1).p("EBHggCfQgJBjizBGQixBGj2AFQgRAAgRAAQgTAAgTAAIh1AAIAAgHQiqgQiDg0Qi9hKAAhqQAAhqC9hLQCDg0CqgPQBKgHBRAAQEMAAC9BKQCzBHAJBkQABAFAAAFQAAAGgBAFIAAD0IpjAAEA7AgGiIAAhWIMgAAIAAFEEA81ABVQg9gCg4gFEAnAgCaQAABOhiA4QhiA3iLAAQiMAAhig3Qhig4AAhOQAAhPBig4QBig3CMAAQCLAABiA3QBiA4AABPgEhAKAGLQAAAthFAhQhEAghiAAQhhAAhFggQhFghAAgtQAAguBFggQBFggBhAAQBiAABEAgQBFAgAAAug");
	this.shape_94.setTransform(466.7,92.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("EhGbAHYQhFgfAAguQAAgtBFghQBFggBhAAQBiAABFAgQBFAhgBAtQABAuhFAfQhFAhhiAAQhhAAhFghgEA98ABVIghAAIgnAAQg9gCg3gFQiqgQiDg0Qi9hJAAhqQAAhrC9hKQCDg1CqgPQBJgHBSAAQEMAAC8BLQC0BHAJBjIAAALIAAAKQgJBji0BGQixBGj2AFQD2gFCxhGQC0hGAJhjIAAD0gEA7AABVIAAgHQA3AFA9ACgAeDgUQhig3AAhPQAAhPBig3QBig4CMAAQCLAABiA4QBiA3AABPQAABPhiA3QhiA3iLAAQiMAAhig3gEBHggC0QgJhji0hHQi8hLkMAAQhSAAhJAHIAAhWIMgAAIAAFEIAAAAg");
	this.shape_95.setTransform(466.7,92.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.instance},{t:this.era95},{t:this.onitsuka}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.3,380,1081.4,812.3);
// library properties:
lib.properties = {
	id: 'A67F882DCE478F48B1C61B1ADAE52134',
	width: 960,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/shoeWay_YuvalYankoNoyMeirReutRaz_atlas_.png", id:"shoeWay_YuvalYankoNoyMeirReutRaz_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A67F882DCE478F48B1C61B1ADAE52134'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;