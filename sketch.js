let time=0;
let waves=[];
function setup() {
  createCanvas(800,550);
}

function draw() {
 background(0);
 translate(200,200);

 stroke(255);
 noFill();
 let x=0;
 let y=0;
 for (let i=0;i<2;i++) {
     let prevx = x;
    let n=i*2+1;
     let prevy = y;
     let raduis=50*(4/(n*PI));
     x += raduis * cos(n * time);
     y += raduis * sin(n * time);

     stroke(255,100);
     noFill();
     ellipse(prevx, prevy, raduis*2 );
     fill(255);
     stroke(255);
     line(prevx, prevy, x, y);
     ellipse(x, y, 7);

 }
    waves.unshift(y);
 translate(200,0);
    line(x - 200, y, 0, waves[0]);
    beginShape();
 noFill();
 for (let i=0;i<waves.length;i++){
     vertex(i,waves[i]);
 }

 endShape();
 time+=0.03;
}