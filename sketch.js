var drops = [];
let sliderOfLength;
let sliderOfDrops; 
let sliderOfSpeed;
let colorPickerBackground;
let colorPicker;

function setup(){
    sliderOfLength = createSlider(1, 30, 15,1);
    sliderOfLength.position(900, 100);
    sliderOfLength.style('width', '100px');

    sliderOfDrops = createSlider(1, 1500, 750,10);
    sliderOfDrops.position(900, 200);
    sliderOfDrops.style('width', '100px');

    sliderOfSpeed = createSlider(0,1,0.3,0.01);
    sliderOfSpeed.position(900, 300);
    sliderOfSpeed.style('width', '100px');

    colorPickerBackground = createColorPicker('#ffffff');
    colorPickerBackground.position(900, 400);

    colorPicker = createColorPicker('#63b6eb');
    colorPicker.position(900, 500);

    createCanvas(800,800);
    for(let i=0;i<1500;i++){
        drops[i] = new Drop();
    }
}

function draw() {

    background(colorPickerBackground.color());
    stroke(0);
    noFill();
    rect(0,0,width,height);

    let length = sliderOfLength.value();
    let droplets = sliderOfDrops.value();
    let speed = sliderOfSpeed.value();
    let color = colorPicker.color();
    let rgb = [color.levels[0],color.levels[1],color.levels[2]];

    for(let i=0;i<droplets;i++){
        drops[i].fall(speed);
        drops[i].show(length,rgb);
    }
}