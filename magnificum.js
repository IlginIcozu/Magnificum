let particles = []
let particles2 = []
let points = []
let points2 = []
let points3 = []
let angle, vec, angle2, vec2
let mult = 0.0008;
let grandAlpha = 0.4
let mobileScale,mobileScale2

let colMult
let baseCol
let baseS, baseB, randMult, baseC, baseCArray
let colSel = 0
let alphaD, alphaD2
let minX, maxX, minY, maxY
let centerX, centerY
let rad
let den

let circles = []
let sCircles
let cX, cY
let colMin, colMax

let plaX, plaY, plaMaxX, plaMaxY
let plaCenterX, plaCenterY
let angleMan, angleInc
let canvas2, canvas3, canvas4
let ellipSize
let xoff, yoff, zoff
let mouseIsMoving = false;

let canvas3Scale = 4;
let zoomScl = 2
let cokluMult
let cokluMult2

let count = 1000
let step = 5
let radP;

let a = 50

let textRand, textRand3

function grad() {                            

    for (i = 0; i < height * 125; i++) {
        points.push(new Point());
    }
    for (let i = 0; i < points.length; i++) {
        points[i].show();
    }

}

function grad2() {

    for (i = 0; i < height * 125; i++) {
        points2.push(new Point2());
    }
    for (let i = 0; i < points.length; i++) {
        points2[i].show();
    }

}

class Point {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.w = 1
    }
    show() {
        canvas3.stroke(baseC, 50, random(60, 70), random(0.5))
        canvas3.strokeWeight(random(0, height / 2857.142857142857))
        canvas3.point(this.pos.x, this.pos.y)
    }
}

class Point2 {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.w = 1
    }
    show() {
        canvas2.stroke(baseC, 50, random(70, 90), random(0.5))
        canvas2.strokeWeight(random(0, height / 2857.142857142857))
        canvas2.point(this.pos.x, this.pos.y)
    }
}

function setup() {
    let sizeX = windowHeight
    let sizeY = windowHeight
    createCanvas(windowWidth, windowHeight);
    canvas2 = createGraphics(sizeX, sizeY)
    canvas3 = createGraphics(sizeX, sizeY)
    canvas4 = createGraphics(sizeX, sizeY)
    canvas2.clear()
    canvas3.clear()
    canvas4.clear()


    blendMode(BLEND)
    colorMode(HSB, 360, 100, 100, 1)
    noise = new OpenSimplexNoise(Date.now());

    rectMode(CENTER)
    imageMode(CENTER)
    angleMode(RADIANS);
    canvas2.blendMode(BLEND)
    canvas2.colorMode(HSB, 360, 100, 100, 1)
    canvas2.background(0, 0, 9)
    canvas2.rectMode(CENTER)
    canvas2.imageMode(CENTER)
    canvas2.angleMode(RADIANS);

    canvas3.blendMode(BLEND)
    canvas3.colorMode(HSB, 360, 100, 100, 1)
    canvas3.background(0, 0, 9)
    canvas3.rectMode(CENTER)
    canvas3.imageMode(CENTER)
    canvas3.angleMode(RADIANS);

    canvas2.noFill()
    canvas2.smooth()

    canvas3.noFill()
    canvas3.smooth()

    canvas4.blendMode(BLEND)
    canvas4.colorMode(HSB, 360, 100, 100, 1)
    canvas4.background(0, 0, 9)
    canvas4.rectMode(CENTER)
    canvas4.imageMode(CENTER)
    canvas4.angleMode(RADIANS);

    canvas3.noFill()
    canvas3.smooth()

    noFill()
    smooth()

    colSel = floor(random(5))

    col()

    xoff = 0.001
    yoff = 0.0001
    zoff = 0.000001;

    angleMan = random(20);
    background(0, 0, 9)

    canvas2.background(0, 0, 9, 0)
    canvas3.background(0, 0, 9, 0)
    canvas4.background(0, 0, 9, 0)

    translate(width / 2, height / 2)
    canvas2.translate(canvas2.width / 2, canvas2.height / 2)
    canvas3.translate(canvas3.width / 2, canvas3.height / 2)
    canvas4.translate(canvas4.width / 2, canvas4.height / 2)

    angleInc = 5;

    noCursor()

    textRand = random(1)

    cokluMult = random([1, 2])
    cokluMult2 = 4

    canvas3Draw();
    canvas2Draw();
    canvas4Draw();


}

function col() {
    baseCArray = [20, 120, 170, 200, 250, 350];
    baseC = baseCArray[colSel]
    baseS = 30;
    baseB = 20;
    baseCol = color(baseC, baseS, baseB, 0.5)

}


function canvas4Draw() {

    canvas4.clear()
    canvas4.push()

    canvas4.drawingContext.shadowOffsetX = -canvas4.width / 80;
    canvas4.drawingContext.shadowOffsetY = canvas4.height / 80;
    canvas4.drawingContext.shadowBlur = height / 20;
    canvas4.drawingContext.shadowColor = color(baseC, 0, 0);
    canvas4.noStroke()
    canvas4.fill(0, 0, 9, 1)
    canvas4.ellipse(0, 0, canvas4.height / 2)
    canvas4.drawingContext.shadowBlur = 0;

    canvas4.pop()

}


function canvas3Draw() {
    canvas3.background(0, 0, 9, 1)
    canvas3.push()
    canvas3.scale(canvas3Scale / 8)
    for (let y = -300; y <= height + 100; y += height / 80) {
        canvas3.beginShape()
        a = (sin(angleMan) + 5) * 5;
        for (let x = -300; x <= canvas3.width + 100; x += height / 200 * cokluMult) {
            angle = map(noise.noise2D(x * mult, y * mult), 0, 1, 0, TWO_PI * 10);

            canvas3.stroke(hsbModify(baseCol, (x + y) / 120, random(30, 50), random(30, 50))) 

            alphaD = random(0.5)

            canvas3.strokeWeight(random(height / 2666.666666666667) * a)

            canvas3.rotate(angle / 1000) 

            if (textRand3 < 0.50) {
                canvas3.curveVertex((x + cos(angle) * a) + randomGaussian(-10, 10), (y + sin(angle) * a) + randomGaussian(-10, 10))
            } else {
                canvas3.curveVertex((x + tan(angle) * a) + randomGaussian(-10, 10), (y + tan(angle) * a) + randomGaussian(-10, 10))
            }

            if (random(1) > 0.4) {
                canvas3.endShape();
                canvas3.beginShape();
            }
            angleMan += angleInc;
            canvas3.endShape();
        }
    }
    canvas3.pop()

    canvas3.push()
    canvas3.translate(-width / 2, -height / 2)
    grad()
    canvas3.pop()



}

function canvas2Draw() {
    canvas2.background(0, 0, 9, 1)
    canvas2.push()
    canvas2.scale(zoomScl / 4)
    for (let y = -300; y <= height + 100; y += height / 80) {
        canvas2.beginShape()
        a = (sin(angleMan) + 5) * 5;
        for (let x = -300; x <= canvas2.width + 100; x += height / 200 * cokluMult2 ) {

            angle = map(noise.noise2D(x * mult, y * mult), 0, 1, 0, TWO_PI * 10);

            alphaD2 = map(dist(canvas2.width / 2, canvas2.height / 2, x, y), 0, canvas2.height, 0, random(0.6, 1))

            canvas2.stroke(hsbModify2(baseCol, (x + y) / 140, random(30, 50), random(60, 80)))

            canvas2.strokeWeight(random(height/8000) * angle)

            canvas2.rotate(a / 1000)

            if (textRand < 0.20) {
                canvas2.curveVertex((x + tan(angle) * a) + random(-10, 10), (y + 1 / tan(angle) * a) + random(-10, 10)) // yumak
            } else if (textRand > 0.20 && textRand < 0.40) {
                canvas2.curveVertex((x + tan(angle) * a) + random(-10, 10), (y + sin(angle) * a) + random(-10, 10)) // yumak 2
            } else if (textRand > 0.40 && textRand < 0.60) {
                canvas2.curveVertex((x + sqrt(angle) * a) + random(-10, 10), (y + sqrt(angle / 2) * a) + random(-10, 10)) // silik tan
            } else if (textRand > 0.60 && textRand < 0.80) {
                canvas2.curveVertex((x + cos(angle) * a) + random(-10, 10), (y + sin(angle) * a) + random(-10, 10)) // silik 1
            } else if (textRand > 0.80) {
                canvas2.curveVertex((x + sin(angle) * a) + random(-10, 10), (y + sin(angle) * a) + random(-10, 10)) // silik 2
            }

             
            if(height > 1000){
                den = 0.8
            }else{
                den = 0.7
            }
            if (random(1) > den) {  
                canvas2.endShape();
                canvas2.beginShape();
                
            }
            angleMan += angleInc;
            canvas2.endShape();
        }

    }
    canvas2.pop()

    canvas2.push()
    canvas2.translate(-width / 2, -height / 2)
    grad2()
    canvas2.pop()
}

function draw() {

    push()
    translate(width / 2, height / 2)
    let size = map(mouseY, 0, height, height * 1.5, height / 1.33333333)
    rotate(map(mouseX, 0, width, 1, 0))
    image(canvas3, 0, 0, size * canvas3Scale, size * canvas3Scale)
    pop()


    push()
    translate(width / 2, height / 2)
    rotate(map(mouseX, 0, width, 0, TWO_PI))


    if (mouseMoved()) {
        rotate(map(noise.noise3D(xoff, yoff, zoff), 0, 1, -2, 2))
    }

    if(width < height){
        mobileScale2 = width * 1.5
    }else{
        mobileScale2 = height * 1.5
    }

    image(canvas4, 0, 0,mobileScale2,mobileScale2)
    pop()



    push()
    translate(width / 2, height / 2)
    rotate(map(mouseX, 0, width, 0, 1))
    if (mouseMoved()) {
        rotate(map(noise.noise3D(xoff, yoff, zoff), 0, 1, -0.5, 0.5))

    }

    ellipSize = map(mouseY, 0, height, height / 2.7, height * 1.5)

    fill(0, 0, 9, 0)

    stroke(0, 0, 0, 0)

    if(width < height){
        mobileScale = width/1.33333333
    }else{
        mobileScale = height / 1.33333333
    }

    ellipse(0, 0, mobileScale)

    drawingContext.clip()

    image(canvas2, 0, 0, ellipSize * zoomScl, ellipSize * zoomScl)
    pop()



    xoff += 0.00001
    yoff += 0.0001
    zoff += 0.001



    push()
    translate(0, 0)
    if (mouseIsPressed == true) {
        if (dist(mouseX, mouseY, width / 2, height / 2) > height / 8 && dist(mouseX, mouseY, width / 2, height / 2) < height / 2 - height / 8) {
            if (mouseX > width / 2) {
                textRand = random(0, 0.40)
            } else {
                textRand = random(0.40, 1)
            }
            canvas2.clear()
            canvas2Draw();

        }
        if (dist(mouseX, mouseY, width / 2, height / 2) > height / 2 - height / 8) {

            if (mouseX < width / 2) {
                textRand3 = 0
            } else {
                textRand3 = 1
            }
            canvas3.clear()
            points.length = 0;
            canvas3Draw();
        }


    }

    pop()



    push()
    if (dist(width / 2, height / 2, mouseX, mouseY) < height / 8) {
        if (mouseIsMoving == false) {
            grandAlpha -= 0.002
        } else {
            grandAlpha = 1
        }
        noStroke()
        fill(baseC, 50, 50, grandAlpha)
        circle(mouseX, mouseY, height / 40)
    } else if (dist(width / 2, height / 2, mouseX, mouseY) > height / 8 && dist(width / 2, height / 2, mouseX, mouseY) < height / 2.666666666666) {
        if (mouseX < width / 2) {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.004
            } else {
                grandAlpha = 1
            }
            strokeWeight(height / 400)
            stroke(baseC, 65, 50, grandAlpha)
            bezierDetail(1)
            bezier(mouseX - height / 40, mouseY, mouseX - height / 80, mouseY - height / 20, mouseX, mouseY + height / 80, mouseX + height / 40, mouseY - height / 40)
            strokeWeight(height / 1000)
            bezier(mouseX - height / 40, mouseY - height / 160, mouseX - height / 80, mouseY - height / 17.7777777777, mouseX, mouseY + height / 160, mouseX + height / 40, mouseY - height / 32)
        } else {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.004
            } else {
                grandAlpha = 1
            }
            strokeWeight(height / 500)
            stroke(baseC, 65, 50, grandAlpha)
            line(mouseX - height / 80, mouseY - height / 80, mouseX + height / 80, mouseY + height / 80)
            line(mouseX - height / 80, mouseY - height / 80, mouseX + height / 160, mouseY + height / 88.8888888888)
            line(mouseX - height / 88.8888888888, mouseY - height / 133.33333333, mouseX + height / 133.33333333, mouseY + 0)
        }
    } else {
        if (mouseX < width / 2) {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.002
            } else {
                grandAlpha = 0.4
            }

            stroke(baseC, 50, 50, grandAlpha)
            strokeWeight(height / 40)
            bezier(mouseX - height / 80, mouseY + height / 80, mouseX, mouseY, mouseX, mouseY, mouseX + height / 80, mouseY, +height / 80)
            strokeWeight(height / 57.14285714285714)
            bezier(mouseX - height / 80, mouseY + height / 80, mouseX, mouseY, mouseX, mouseY, mouseX + height / 100, mouseY, +height / 66.66666666)
        } else {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.002
            } else {
                grandAlpha = 0.4
            }
            strokeWeight(height / 40)
            stroke(baseC, 50, 50, grandAlpha)
            line(mouseX - height / 40, mouseY - height / 40, mouseX + height / 40, mouseY + height / 40)
            strokeWeight(height / 44.44444444)
            line(mouseX - height / 44.44444444, mouseY - height / 36.363636363636, mouseX + height / 36.363636363636, mouseY + height / 50)
        }

    }


    pop()

}

function mouseMoved() {

    mouseIsMoving = true;

    if (pmouseY == mouseY && pmouseX == mouseX) {
        mouseIsMoving = false;
    }
    return true
}

function mousePressed() {
    textRand = random(1)
    angleMan = random(20)
    angleInc = 5;
    if (mouseX < width / 2) {
        cokluMult = random([0.5, 2])
    } else {
        cokluMult = random([0.5, 2])
    }

    if (mouseX < width / 2) {
        cokluMult2 = random([1, 2, 3])
    } else {
        cokluMult2 = random([2, 3, 4])
    }
    if (dist(mouseX, mouseY, width / 2, height / 2) < height / 8) {
        colSel = colSel + 1
        if (colSel == baseCArray.length) {
            colSel = 0
        }
        col()
    }

    
}

function windowResized() {
    let sizeX = windowHeight
    let sizeY = windowHeight
    resizeCanvas(windowWidth, windowHeight);
    canvas2.resizeCanvas(sizeX, sizeY);
    canvas3.resizeCanvas(sizeX, sizeY);
    canvas4.resizeCanvas(sizeX, sizeY);
    canvas2.clear()
    canvas3.clear()
    canvas4.clear()

    col()


    xoff = 0.001
    yoff = 0.0001
    zoff = 0.000001;


    background(0, 0, 9)

    canvas2.background(0, 0, 9, 0)
    canvas3.background(0, 0, 9, 0)
    canvas4.background(0, 0, 9, 0)

    translate(width / 2, height / 2)
    canvas2.translate(canvas2.width / 2, canvas2.height / 2)
    canvas3.translate(canvas3.width / 2, canvas3.height / 2)
    canvas4.translate(canvas4.width / 2, canvas4.height / 2)


    noCursor()

    textRand = random(1)
    cokluMult = random([1, 2])
    cokluMult2 = 2

    points.length = 0;
    canvas3Draw();
    canvas2Draw();
    canvas4Draw();


}

function hsbModify(base, hv, sv, bv) {
    let new_hue = (hue(base) + hv) % 360;
    let new_sat = constrain(saturation(base) + sv, 0, 100);
    let new_bri = constrain(brightness(base) + bv, 0, 100);
    return color(new_hue, new_sat, new_bri, alphaD);
}

function hsbModify2(base, hv, sv, bv) {
    let new_hue = (hue(base) + hv) % 360;
    let new_sat = constrain(saturation(base) + sv, 0, 100);
    let new_bri = constrain(brightness(base) + bv, 0, 100);
    return color(new_hue, new_sat, new_bri, alphaD2);
}

function keyPressed() {
    if (key == 's') {
        saveCanvas('fidenza', 'png');
    }
}