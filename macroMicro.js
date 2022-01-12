let particles = []
let particles2 = []
let points = []
let points2 = []
let points3 = []
let angle, vec, angle2, vec2
let mult = 0.0008;
let grandAlpha = 0.4


let colMult
let baseCol
let baseS, baseB, randMult, baseC
let alphaD, alphaD2
let minX, maxX, minY, maxY
let centerX, centerY
let rad

let circles = []
let sCircles
let cX, cY
let colMin, colMax

let plaX, plaY, plaMaxX, plaMaxY
let plaCenterX, plaCenterY
let anguloIncremento
let canvas2, canvas3, canvas4
let ellipSize
let xoff, yoff, zoff
let mouseIsMoving = false;




let count = 1000
let step = 5
let radP;

let a = 50

let textRand, textRand3

function grad() {

    for (i = 0; i < 500000; i++) {
        points.push(new Point());
    }
    for (let i = 0; i < points.length; i++) {
        points[i].show();
    }

}

function grad2() {

    for (i = 0; i < 500000; i++) {
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
        canvas3.stroke(baseC, 50, 60, random(0.5))
        canvas3.strokeWeight(random(0, 1.4))
        canvas3.point(this.pos.x, this.pos.y)
    }
}

class Point2 {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.w = 1
    }
    show() {
        canvas2.stroke(baseC, 50, 60, random(0.5))
        canvas2.strokeWeight(random(0, 1.4))
        canvas2.point(this.pos.x, this.pos.y)
    }
}




function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(4000, 4000);
    canvas2 = createGraphics(4000, 4000)
    canvas3 = createGraphics(4000, 4000)
    canvas4 = createGraphics(4000, 4000)
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

    col()

    // grad()

    xoff = 0.001
    yoff = 0.0001
    zoff = 0.000001;

    angulo = random(20);
    background(0, 0, 9)
    canvas2.background(0, 0, 9, 0)
    canvas3.background(0, 0, 9, 0)
    canvas4.background(0, 0, 9, 0)

    translate(width / 2, height / 2)
    canvas2.translate(width / 2, height / 2)
    canvas3.translate(width / 2, height / 2)
    canvas4.translate(width / 2, height / 2)

    anguloIncremento = 5;

    noCursor()

    textRand = random(1)

    canvas3Draw();
    canvas2Draw();
    canvas4Draw()


}

function col() {
    baseC = random([20, 150, 200, 350]);
    baseS = 30;
    baseB = 20;

    baseCol = color(baseC, baseS, baseB, 0.5)

}


function canvas4Draw() {

    canvas4.clear()

    canvas4.push()

    // canvas4.beginShape()
    // canvas4.noFill()
    // canvas4.stroke(0, 0, 9, 1)
    // for (let a = 0; a < TWO_PI; a += 0.1) {

    //     let x = cos(a) * 1000;
    //     let y = sin(a) * 1000;
    //     canvas4.drawingContext.shadowOffsetX = 0;
    //     canvas4.drawingContext.shadowOffsetY = 0;
    //     canvas4.drawingContext.shadowBlur = 100;
    //     canvas4.drawingContext.shadowColor = color(baseC, 20, 25);
    //     canvas4.vertex(x, y)
    //     canvas4.drawingContext.shadowBlur = 0;
    // }
    // canvas4.endShape()






    // canvas3.translate(width / 2, height / 2)
    canvas4.drawingContext.shadowOffsetX = -50;
    canvas4.drawingContext.shadowOffsetY = 50;
    canvas4.drawingContext.shadowBlur = 100;
    canvas4.drawingContext.shadowColor = color(baseC, 0, 0);
    canvas4.noStroke()
    canvas4.fill(0, 0, 9, 1)
    // canvas4.strokeWeight(0.1)
    canvas4.ellipse(0, 0, 2000)
    canvas4.drawingContext.shadowBlur = 0;




    canvas4.pop()

}


function canvas3Draw() {
    canvas3.background(0, 0, 9, 1)
    canvas3.push()
    // textRand3 = random(1)
    for (let y = -300; y <= height + 100; y += 50) {
        canvas3.beginShape()
        a = abs(sin(angulo) + 5) * 5;
        for (let x = -300; x <= width + 100; x += 10) {

            angle = map(noise.noise2D(x * mult, y * mult), 0, 1, 0, TWO_PI * 10);

            canvas3.stroke(hsbModify(baseCol, (x + y) / 120, random(30, 50), random(30, 50))) // /5 tan ise

            alphaD = random(0.5)

            canvas3.strokeWeight(random(1.5) * a)

            canvas3.rotate(angle / 1000) // angle/1000

            if (textRand3 < 0.50) {
                canvas3.curveVertex((x + cos(angle) * a) + randomGaussian(-10, 10), (y + sin(angle) * a) + randomGaussian(-10, 10))
            } else {
                canvas3.curveVertex((x + tan(angle) * a) + randomGaussian(-10, 10), (y + tan(angle) * a) + randomGaussian(-10, 10))
            }

            if (random(0, 1) > random(0.1, 0.9)) {
                canvas3.endShape();
                canvas3.beginShape();
            }
            angulo += anguloIncremento;
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
    // textRand = random(1)
    for (let y = -300; y <= height + 100; y += 50) {
        canvas2.beginShape()
        a = abs(sin(angulo) + 5) * 5;
        for (let x = -300; x <= width + 100; x += 10) {

            angle = map(noise.noise2D(x * mult, y * mult), 0, 1, 0, TWO_PI * 10);

            alphaD2 = map(dist(width / 2, height / 2, x, y), 0, 4000, 0, 1)

            drawingContext.setLineDash([]);

            canvas2.stroke(hsbModify2(baseCol, (x + y) / 120, random(30, 50), random(30, 50)))

            canvas2.strokeWeight(random(0.15) * angle)

            canvas2.rotate(a / 1000)

            if (textRand < 0.20) {
                canvas2.curveVertex((x + tan(angle) * a) + random(-10, 10), (y + 1 / tan(angle) * a) + random(-10, 10)) // yumak
            } else if (textRand > 0.20 && textRand < 0.40) {
                canvas2.curveVertex((x + tan(angle) * a) + random(-10, 10), (y + sin(angle) * a) + random(-10, 10)) // yumak 2
            } else if (textRand > 0.40 && textRand < 0.60) {
                canvas2.curveVertex((x + tan(angle) * a) + random(-10, 10), (y + sq(angle) * a) + random(-10, 10)) // silik tan
            } else if (textRand > 0.60 && textRand < 0.80) {
                canvas2.curveVertex((x + cos(angle) * a) + random(-10, 10), (y + sin(angle) * a) + random(-10, 10)) // silik 1
            } else if (textRand > 0.80) {
                canvas2.curveVertex((x + sin(angle) * a) + random(-10, 10), (y + sin(angle) * a) + random(-10, 10)) // silik 2
            }

            if (random(0, 1) > 0.9) {
                canvas2.endShape();
                canvas2.beginShape();
            }
            angulo += anguloIncremento;
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
    let size = map(mouseY, 0, height, 10000, 3000)
    rotate(map(mouseX, 0, width, 1, 0))
    image(canvas3, 0, 0, size * 2, size * 2)
    pop()


    push()
    translate(width / 2, height / 2)
    rotate(map(mouseX, 0, width, 0, TWO_PI))


    if (mouseMoved()) {
        rotate(map(noise.noise3D(xoff, yoff, zoff), 0, 1, -2, 2))
    }
    image(canvas4, 0, 0, 6000, 6000)
    pop()



    push()
    translate(width / 2, height / 2)
    rotate(map(mouseX, 0, width, 0, 1))
    if (mouseMoved()) {
        rotate(map(noise.noise3D(xoff, yoff, zoff), 0, 1, -0.5, 0.5))

    }

    ellipSize = map(mouseY, 0, height, 1500, 10000)

    fill(0, 0, 9, 0)

    stroke(0, 0, 0, 0)

    ellipse(0, 0, 3000)

    drawingContext.clip()

    image(canvas2, 0, 0, ellipSize * 2, ellipSize * 2)
    pop()



    xoff += 0.00001
    yoff += 0.0001
    zoff += 0.001



    push()
    translate(0, 0)
    if (mouseIsPressed == true) {
        if (dist(mouseX, mouseY, width / 2, height / 2) > 500 && dist(mouseX, mouseY, width / 2, height / 2) < 1500) {
            if (mouseX > width / 2) {
                textRand = random(0, 0.40)
            } else {
                textRand = random(0.40, 1)
            }
            canvas2.clear()
            canvas2Draw();
        }
        if (dist(mouseX, mouseY, width / 2, height / 2) > 1500) {

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
    if (dist(width / 2, height / 2, mouseX, mouseY) < 500) {
        // noStroke()
        if (mouseIsMoving == false) {
            grandAlpha -= 0.002
        } else {
            grandAlpha = 1
        }
        noStroke()
        fill(baseC, 50, 50, grandAlpha)
        circle(mouseX, mouseY, 100)
    } else if (dist(width / 2, height / 2, mouseX, mouseY) > 500 && dist(width / 2, height / 2, mouseX, mouseY) < 1500) {
        if (mouseX < width / 2) {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.004
            } else {
                grandAlpha = 1
            }
            strokeWeight(10)
            stroke(baseC, 65, 50, grandAlpha)
            // curveTightness(4);
            bezierDetail(1)
            bezier(mouseX - 100, mouseY, mouseX - 50, mouseY - 200, mouseX, mouseY + 50, mouseX + 100, mouseY - 100)
            strokeWeight(4)
            bezier(mouseX - 100, mouseY - 25, mouseX - 50, mouseY - 225, mouseX, mouseY + 25, mouseX + 100, mouseY - 125)
        } else {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.004
            } else {
                grandAlpha = 1
            }
            strokeWeight(8)
            stroke(baseC, 65, 50, grandAlpha)
            line(mouseX - 50, mouseY - 50, mouseX + 50, mouseY + 50)
            line(mouseX - 50, mouseY - 50, mouseX + 25, mouseY + 45)
            line(mouseX - 45, mouseY - 30, mouseX + 30, mouseY + 0)
            // line(mouseX - 50, mouseY - 50, mouseX + 25, mouseY + 45)
        }
    } else {
        if (mouseX < width / 2) {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.002
            } else {
                grandAlpha = 0.4
            }

            stroke(baseC, 50, 50, grandAlpha)
            strokeWeight(100)
            bezier(mouseX - 50, mouseY + 50, mouseX, mouseY, mouseX, mouseY, mouseX + 50, mouseY, +50)
            strokeWeight(70)
            bezier(mouseX - 50, mouseY + 50, mouseX, mouseY, mouseX, mouseY, mouseX + 40, mouseY, +60)
        } else {
            if (mouseIsMoving == false) {
                grandAlpha -= 0.002
            } else {
                grandAlpha = 0.4
            }
            strokeWeight(100)
            stroke(baseC, 50, 50, grandAlpha)
            line(mouseX - 100, mouseY - 100, mouseX + 100, mouseY + 100)
            strokeWeight(90)
            line(mouseX - 90, mouseY - 110, mouseX + 110, mouseY + 80)
        }

    }





    pop()

    // console.log(grandAlpha)



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
    if (dist(mouseX, mouseY, width / 2, height / 2) < 500) {
        col()
    }
    // textRand3 = random(1)

    // points2.length = 0;

}


function hsbModify(base, hv, sv, bv) {
    /* The hue should be wrapped around if it crosses 360 */
    let new_hue = (hue(base) + hv) % 360;
    let new_sat = constrain(saturation(base) + sv, 0, 100);
    let new_bri = constrain(brightness(base) + bv, 0, 100);
    return color(new_hue, new_sat, new_bri, alphaD);
}

function hsbModify2(base, hv, sv, bv) {
    /* The hue should be wrapped around if it crosses 360 */
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