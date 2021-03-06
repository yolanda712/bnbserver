var constants = require('./Const')
var Point = require('./Point')

var GROUND = constants.GROUND;
var NG_W_1 = constants.NO_GIFT_WALL_1;
var NG_W_2 = constants.NO_GIFT_WALL_2;
var G_W = constants.GIFT_WALL;

var S_W_1 = constants.SOLID_WALL_1;
var S_W_2 = constants.SOLID_WALL_2;
var S_W_3 = constants.SOLID_WALL_3;

var PAOPAO = constants.PAOPAO;

var I_PAOPAO = constants.ITEM_ADD_PAOPAO;
var I_POWER = constants.ITEM_ADD_POWER;
var I_SCORE = constants.ITEM_ADD_SCORE;
var I_SPEED = constants.ITEM_ADD_SPEED;

//背景地图
var backGroundMap = [ 
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1,   S_W_1,   S_W_1,   S_W_1, S_W_1,   S_W_1,  S_W_1, S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1 ], 
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND,  GROUND, GROUND,  S_W_1,  GROUND,  GROUND,   S_W_1,GROUND,  GROUND, GROUND,GROUND,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,    G_W,    G_W,  GROUND, GROUND,    G_W,  GROUND,  GROUND,    G_W, GROUND,  GROUND,   G_W,    G_W,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,  S_W_1, GROUND,   S_W_1,    G_W,    G_W,     G_W,     G_W,    G_W,    G_W,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND,   S_W_1, GROUND, GROUND,  GROUND,  GROUND, GROUND, GROUND,  S_W_1, GROUND, GROUND,    G_W, GROUND,     G_W,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W, GROUND,    G_W,  GROUND,    G_W,  S_W_1,     G_W,     G_W,  S_W_1,    G_W, GROUND,    G_W, GROUND,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,    G_W, GROUND,   S_W_1, GROUND,    G_W,  GROUND,  GROUND,    G_W, GROUND,  S_W_1, GROUND,    G_W,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,  S_W_1, GROUND,   S_W_1, GROUND,    G_W,  GROUND,  GROUND,    G_W, GROUND,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,    G_W, GROUND,   S_W_1, GROUND,    G_W,  GROUND,  GROUND,    G_W, GROUND,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,  S_W_1, GROUND,   S_W_1, GROUND,    G_W,  GROUND,  GROUND,    G_W, GROUND,  S_W_1, GROUND,    G_W,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W, GROUND,    G_W,  GROUND,    G_W,  S_W_1,     G_W,     G_W,  S_W_1, GROUND, GROUND,    G_W, GROUND,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1,    G_W, GROUND,    G_W, GROUND, GROUND,   S_W_1, GROUND, GROUND,  GROUND,  GROUND, GROUND,    G_W,  S_W_1, GROUND, GROUND,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,    G_W, GROUND,   S_W_1,    G_W,    G_W,     G_W,     G_W,    G_W, GROUND,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  GROUND, GROUND,    G_W,  GROUND,  GROUND,    G_W,    G_W, GROUND,    G_W,    G_W,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND,  GROUND, GROUND,  S_W_1,  GROUND,  GROUND,  S_W_1, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1,  S_W_1,    S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1 ],
 ];

var backGroundMap0 = [ 
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1,   S_W_1,  S_W_1,  S_W_1,    S_W_1,  S_W_1,  S_W_1,   S_W_1, S_W_1,   S_W_1,  S_W_1, S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1 ], 
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND,  GROUND, GROUND,  S_W_1,  GROUND, GROUND,    G_W,      G_W, GROUND, GROUND,   S_W_1,GROUND,  GROUND, GROUND,GROUND,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,    G_W,    G_W,  GROUND, GROUND,    G_W,  GROUND,  S_W_1,  GROUND,  GROUND,  S_W_1, GROUND,    G_W, GROUND,  GROUND,   G_W,    G_W,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,  S_W_1, GROUND,   S_W_1,    G_W,    G_W,     G_W, GROUND,  GROUND,  GROUND, GROUND,    G_W,    G_W,    G_W,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND,   S_W_1, GROUND, GROUND,  GROUND, GROUND,     G_W,     G_W, GROUND, GROUND, GROUND, GROUND,  S_W_1, GROUND, GROUND,    G_W, GROUND,     G_W,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W, GROUND,    G_W,  GROUND,    G_W,  S_W_1,     G_W,  S_W_1,  GROUND,  GROUND,  S_W_1,    G_W,  S_W_1,    G_W, GROUND,    G_W, GROUND,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,    G_W, GROUND,   S_W_1, GROUND,    G_W,  GROUND, GROUND,  GROUND,  GROUND, GROUND, GROUND,    G_W, GROUND,  S_W_1, GROUND,    G_W,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,  S_W_1, GROUND,   S_W_1, GROUND,    G_W,  GROUND, GROUND,     G_W,     G_W, GROUND, GROUND,    G_W, GROUND,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W, GROUND,    G_W,  GROUND, GROUND,  S_W_1,  GROUND,  S_W_1,  GROUND,  GROUND,  S_W_1, GROUND,  S_W_1, GROUND, GROUND,    G_W, GROUND,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND,  GROUND,    G_W,    G_W,     G_W, GROUND,  GROUND,  GROUND, GROUND,    G_W,    G_W,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND,  GROUND,    G_W,    G_W,     G_W, GROUND,  GROUND,  GROUND, GROUND,    G_W,    G_W,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W, GROUND,    G_W,  GROUND, GROUND,  S_W_1,  GROUND, S_W_1,   GROUND,  GROUND,  S_W_1, GROUND,  S_W_1, GROUND, GROUND,    G_W, GROUND,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,    G_W, GROUND,   S_W_1, GROUND,    G_W,  GROUND, GROUND,     G_W,     G_W, GROUND, GROUND,    G_W, GROUND,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,  S_W_1, GROUND,   S_W_1, GROUND,    G_W,  GROUND, GROUND,  GROUND,  GROUND, GROUND, GROUND,    G_W, GROUND,  S_W_1, GROUND,    G_W,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W, GROUND,    G_W,  GROUND,    G_W,  S_W_1,     G_W,  S_W_1,  GROUND,  GROUND,  S_W_1,    G_W,  S_W_1, GROUND, GROUND,    G_W, GROUND,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1,    G_W, GROUND,    G_W, GROUND, GROUND,   S_W_1, GROUND, GROUND,  GROUND, GROUND,     G_W,     G_W, GROUND, GROUND, GROUND,    G_W,  S_W_1, GROUND, GROUND,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W,    G_W, GROUND,   S_W_1,    G_W,    G_W,     G_W, GROUND,  GROUND,  GROUND, GROUND,    G_W,    G_W, GROUND,  S_W_1, GROUND,  S_W_1,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  GROUND, GROUND,    G_W,  GROUND,  S_W_1,  GROUND,  GROUND,  S_W_1, GROUND,    G_W,    G_W, GROUND,    G_W,    G_W,    G_W,  S_W_1,  GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND,  GROUND, GROUND,  S_W_1,  GROUND, GROUND,     G_W,     G_W, GROUND, GROUND,  S_W_1, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND,  GROUND,  S_W_1 ],
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1,  S_W_1,   S_W_1,   S_W_1,   S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,   S_W_1,  S_W_1 ],
 ];

var backGroundMap1 = [ 
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1 ], 
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,    G_W,    G_W, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,    G_W,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND, GROUND,  S_W_1 ],
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1 ]
 ];

 var backGroundMap2 = [ 
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1 ], 
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1 ]
 ];

 var backGroundMap3 = [ 
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1 ], 
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,    G_W,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND, GROUND,  S_W_1 ],
    [  S_W_1, GROUND,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1,    G_W,  S_W_1, GROUND,  S_W_1 ],
    [  S_W_1, GROUND, GROUND,    G_W, GROUND, GROUND, GROUND, GROUND, GROUND,    G_W, GROUND, GROUND,  S_W_1 ],
    [  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1,  S_W_1 ]
 ];

 /**
  * Map类，用于构建游戏地图
  *
  * @param {string} mapName
  */
 var Map = function(mapName){
    this.mapName = mapName;
    this.map = copyMap(backGroundMap);
    this.roleStartPointArr = roleStartPointArr.concat();
    this.monsterStartPointArr = monsterStartPointArr.concat();
 }

Map.prototype.getXLen = function(){
    return this.map[0].length;
}

Map.prototype.getYLen = function(){
    return this.map.length;
}

Map.prototype.getValue = function(x,y){
    return this.map[x][y];
}

Map.prototype.setValue = function(x,y,value){
    this.map[x][y] = value;
}

Map.prototype.isPositionPassable = function(x,y){
    if(this.getValue(x,y)==0 || this.getValue(x,y)>100) return true;
    return false;
}

Map.prototype.isPositionAnItem = function(x,y){
    if(this.getValue(x,y)>100) return true;
    return false;
}

Map.prototype.isPositionAPaopao = function(x,y){
    if(this.getValue(x,y)==100) return true;
    return false;
}

Map.prototype.getMapLocation = function(x,y){

    xIndex = Math.round(x/32);
    yIndex = Math.round(y/32);
    return {x: this.getYLen()-1-yIndex, y: xIndex};
}

// 将二维地图索引转换为cocos坐标
Map.prototype.convertMapIndexToCocosAxis = function (yMapLen,x,y) {
    var cocosPos ={};
    cocosPos.x = 32*y;
    cocosPos.y = 32*(yMapLen-x-1);
    return cocosPos;
};

var roleStartPointArr = [
    new Point(14,1),
    new Point(1,18),
]

var monsterStartPointArr = [
   new Point(14,18),
   new Point(1,1),
]

var copyMap = function(mapArr){
   var newMap = [];
   for(var i=0; i<mapArr.length; i++){
       newMap.push(mapArr[i].concat());
   }
   return newMap;
}

 module.exports = Map;
