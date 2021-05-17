//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
 
  //火
ctx.beginPath()
  ctx.moveTo(125,50-(time%3)-mouse.y/4)
  ctx.lineTo(150,75)
  ctx.lineTo(200,35-(time%3)-mouse.y/4) 
  ctx.lineTo(250,75)
  ctx.lineTo(275,50-(time%3)-mouse.y/2)
  ctx.lineTo(300,140)
  ctx.lineTo(100,140)
ctx.closePath()
ctx.fillStyle="#FD8C07"
ctx.fill()
ctx.lineWidth="15"
ctx.strokeStyle="#FF6C14"
ctx.stroke()
  
 //油站主體
ctx.beginPath() //清掉先前路徑
  ctx.moveTo(50,100)
  ctx.lineTo(350,100)
  ctx.lineTo(350,150)
  ctx.lineTo(50,150)
ctx.closePath()  
ctx.fillStyle="#F2B705"
ctx.fill()


//油站左邊柱子
ctx.beginPath() //清掉先前路徑
  ctx.moveTo(65,150)
  ctx.lineTo(65,300)
  ctx.moveTo(50,300)
  ctx.lineTo(80,300)
ctx.lineWidth = 10 
ctx.closePath()  
ctx.strokeStyle="orange" //原先沿用到上個色彩設定，所以改回來黑色
ctx.stroke()

//油站右邊邊柱子
ctx.beginPath() //清掉先前路徑
  ctx.moveTo(335,150)
  ctx.lineTo(335,300)
  ctx.moveTo(320,300)
  ctx.lineTo(350,300)
ctx.lineWidth = 10 
ctx.closePath()  
ctx.fillStyle="red"
ctx.fill()
ctx.strokeStyle="orange" //原先沿用到上個色彩設定，所以改回來黑色
ctx.stroke()

// 左油箱
ctx.beginPath() //清掉先前路徑
  ctx.moveTo(125,200)
  ctx.lineTo(175,200)
  ctx.lineTo(175,300)
  ctx.lineTo(125,300)
ctx.lineWidth = 3 
ctx.closePath() 
ctx.fillStyle="#D99E30" //原先沿用到上個色彩設定，所以改回來黑色
ctx.fill()

// 左邊郵箱正方
ctx.beginPath()
 ctx.moveTo(135,225)
 ctx.lineTo(165,225)
 ctx.lineTo(165,250)
 ctx.lineTo(135,250)
ctx.closePath()
ctx.fillStyle="#ADD4D9" //原先沿用到上個色彩設定，所以改回來黑色
ctx.fill()

//左油箱底綫
ctx.beginPath()
 ctx.moveTo(120,300)
 ctx.lineTo(180,300)
ctx.closePath()
ctx.strokeStyle="#61808C" //原先沿用到上個色彩設定，所以改回來黑色
ctx.stroke()

//左油槍
ctx.beginPath()
  ctx.moveTo(175,225)
  ctx.lineTo(185,225)
  ctx.moveTo(185,225)
  ctx.lineTo(185,275)
  ctx.moveTo(185,275)
  ctx.lineTo(195,275)
  ctx.moveTo(195,275)
  ctx.lineTo(195,220)
  ctx.moveTo(195,220)
  ctx.lineTo(185,200)
ctx.closePath()
ctx.strokeStyle="#61808C" //原先沿用到上個色彩設定，所以改回來黑色
ctx.stroke()

// 右邊油箱
ctx.beginPath() //清掉先前路徑
  ctx.moveTo(225,200)
  ctx.lineTo(275,200)
  ctx.lineTo(275,300)
  ctx.lineTo(225,300)
ctx.lineWidth = 3 
ctx.closePath() 
ctx.fillStyle="#D99E30" //原先沿用到上個色彩設定，所以改回來黑色
ctx.fill()

// 右邊郵箱正方
ctx.beginPath()
 ctx.moveTo(235,225)
 ctx.lineTo(265,225)
 ctx.lineTo(265,250)
 ctx.lineTo(235,250)
ctx.closePath()
ctx.fillStyle="#ADD4D9" //原先沿用到上個色彩設定，所以改回來黑色
ctx.fill()

//右油箱底綫
ctx.beginPath()
 ctx.moveTo(220,300)
 ctx.lineTo(280,300)
ctx.closePath()
ctx.strokeStyle="#61808C" //原先沿用到上個色彩設定，所以改回來黑色
ctx.stroke()

//右油槍
ctx.beginPath()
  ctx.moveTo(275,225)
  ctx.lineTo(285,225)
  ctx.moveTo(285,225)
  ctx.lineTo(285,275)
  ctx.moveTo(285,275)
  ctx.lineTo(295,275)
  ctx.moveTo(295,275)
  ctx.lineTo(295,220)
  ctx.moveTo(295,220)
  ctx.lineTo(285,200)
ctx.closePath()
ctx.strokeStyle="#61808C" //原先沿用到上個色彩設定，所以改回來黑色
ctx.stroke()

//馬路
ctx.beginPath()
  ctx.moveTo(0,310)
  ctx.lineTo(400,310)
  ctx.lineTo(400,400)
  ctx.lineTo(0,400)
ctx.closePath()
ctx.fillStyle="black"
ctx.fill()

//馬路中間
ctx.beginPath()
  ctx.moveTo(0,350)
  ctx.lineTo(400,350)
ctx.closePath()
ctx.strokeStyle="white"
ctx.stroke()

//車
ctx.beginPath()
let carx = time%440-40
  ctx.moveTo(carx+50,350)
  ctx.lineTo(carx+60,350)
  ctx.lineTo(carx+60,340)
  ctx.lineTo(carx+80,340)
  ctx.lineTo(carx+80,350)
  ctx.lineTo(carx+90,350)
  ctx.lineTo(carx+90,365)
  ctx.lineTo(carx+50,365)  
  ctx.lineTo(carx+50,350)
 ctx.closePath()
 ctx.fillStyle="#F2B544"
 ctx.fill()
 ctx.strokeStyle="#F2B544"
 ctx.stroke()
 
//輪子
 ctx.beginPath()
    ctx.arc(carx+60,365,5,0,Math.PI*2)
    ctx.arc(carx+80,365,5,0,Math.PI*2)
 ctx.closePath()
 ctx.fillStyle="#575757"
 ctx.fill()

 //確認滑鼠事件有抓取到
ctx.beginPath()
  ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
ctx.fillStyle="black"
ctx.fill()

}
//draw()

//設定連續繪製
setInterval(draw,30)

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})