// // var canvas = document.body.appendChild(document.createElement('canvas')),
// //     context = canvas.getContext('2d');
// // context.globalCompositeOperation = 'lighter';
// // canvas.width = 1280;
// // canvas.height = 800;
// // draw();

// // // var textStrip = ['诶', '比', '西', '迪', '伊', '吉', '艾', '杰', '开', '哦', '屁', '提', '维'];
// // // var textStrip = ['div', 'function', 'h1', 'react', 'python', 'ai', 'bot', 'css', 'javascript', 'iuliia', 'developer', 'html', 'future'];
// // var textStrip = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// // var stripCount = 60, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();

// // for (var i = 0; i < stripCount; i++) {
// //     stripX[i] = Math.floor(Math.random() * 1265);
// //     stripY[i] = -100;
// //     dY[i] = Math.floor(Math.random() * 7) + 3;
// //     stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
// // }

// // var theColors = ['#cefbe4', '#049EBE', '#EAF6F6', '#40514E', '#EAF6F6', '#43c728'];

// // var elem, context, timer;

// // function drawStrip(x, y) {
// //     for (var k = 0; k <= 20; k++) {
// //         var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
// //         if (context.fillText) {
// //             switch (k) {
// //                 case 0:
// //                     context.fillStyle = theColors[0]; break;
// //                 case 1:
// //                     context.fillStyle = theColors[1]; break;
// //                 case 3:
// //                     context.fillStyle = theColors[2]; break;
// //                 case 7:
// //                     context.fillStyle = theColors[3]; break;
// //                 case 13:
// //                     context.fillStyle = theColors[4]; break;
// //                 case 17:
// //                     context.fillStyle = theColors[5]; break;
// //             }
// //             context.fillText(randChar, x, y);
// //         }
// //         y -= stripFontSize[k];
// //     }
// // }

// // function draw() {
// //     // clear the canvas and set the properties
// //     context.clearRect(0, 0, canvas.width, canvas.height);
// //     context.shadowOffsetX = context.shadowOffsetY = 0;
// //     context.shadowBlur = 8;
// //     context.shadowColor = '#94f475';

// //     for (var j = 0; j < stripCount; j++) {
// //         context.font = stripFontSize[j] + 'px MatrixCode';
// //         context.textBaseline = 'top';
// //         context.textAlign = 'center';

// //         if (stripY[j] > 1358) {
// //             stripX[j] = Math.floor(Math.random() * canvas.width);
// //             stripY[j] = -100;
// //             dY[j] = Math.floor(Math.random() * 7) + 3;
// //             stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
// //             drawStrip(stripX[j], stripY[j]);
// //         } else drawStrip(stripX[j], stripY[j]);

// //         stripY[j] += dY[j];
// //     }
// //     setTimeout(draw, 70);
// // }

// // Set the canvas dimensions
// var canvasWidth = 800;
// var canvasHeight = 600;

// // Create the canvas element
// var canvas = document.createElement('canvas');
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;
// document.body.appendChild(canvas);

// // Get the canvas context
// var ctx = canvas.getContext('2d');

// // Set the font and text properties
// ctx.font = '48px monospace';
// ctx.fillStyle = '#00ff00';
// ctx.textAlign = 'center';

// // Set the spiral parameters
// var radius = 150;
// var angle = 0;
// var angleStep = Math.PI / 16;
// var x = canvasWidth / 2;
// var y = canvasHeight / 2;

// // Set the text to display in the matrix effect
// var text = 'Matrix';

// // Create a function to draw the matrix effect
// function drawMatrix() {
//     // Clear the canvas
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//     // Loop through the text characters
//     for (var i = 0; i < text.length; i++) {
//         // Save the current canvas state
//         ctx.save();

//         // Translate the canvas to the center of the spiral
//         ctx.translate(x, y);

//         // Rotate the canvas according to the current angle
//         ctx.rotate(angle);

//         // Draw the current character at the end of the spiral
//         ctx.fillText(text[i], 0, -radius);

//         // Restore the canvas to its previous state
//         ctx.restore();

//         // Increment the angle and radius for the next character
//         angle += angleStep;
//         radius += 5;
//     }

//     // Request another frame
//     requestAnimationFrame(drawMatrix);
// }

// // Start the animation
// // setTimeout(drawMatrix, 70);

// // copilot make a loop to draw animation




// // window.onload = function () {
// //     drawMatrix();
// // };

// function([string1, string2], target id, [color1, color2])
consoleText(['Monash IT Graduate', 'Full-Stack Developer', 'Web Designer'], 'text', ['tomato', 'white', 'lightblue']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}
