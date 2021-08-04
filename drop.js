function Drop(){

    this.x = random(2,width-1);
    this.y = random(-200,-100);
    this.z = random(0,20);
    this.yspeed = map(this.z,0,20,5,10);
    this.len = map(this.z,0,20,1,5);

    this.fall = function(grav){
        this.y = this.y + this.yspeed;
        //let grav = map(this.z,0,20,0,0.3);
        this.yspeed = this.yspeed + grav;
        if(this.y>height){
            this.y = random(-200,-100);
            this.yspeed = map(this.z,0,20,5,10);
        }
    }

    this.show = function(len,rgb){
        let thick = map(this.z,0,20,1,3);
        let alpha = map(this.z,0,20,0,255);
        strokeWeight(thick);
        stroke(rgb[0],rgb[1],rgb[2],alpha);
        line(this.x,this.y,this.x,this.y+len+this.len);
    }
}