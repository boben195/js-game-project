import kaplay from "kaplay";

const k = kaplay({
    width: 1280,
    height: 720,
});
k.loadBean();
k.setGravity(2000);

const player = k.add([
    k.sprite("bean"),
    k.pos(k.center()),
    k.area(),
    k.body(),
    k.offscreen(),
    
])

player.onKeyPress("space", () => {
    if (player.isGrounded()) player.jump();
})

player.onExitScreen(() => {
    k.go("gameover");
})

k.scene("gameover", () => {
    k.add([k.text("GAME IS OVER!"), k.pos(center())]);
})

k.add([
    k.rect(k.width(), 300),
    k.pos(0, 500),
    k.area(),
    k.outline(3),
    k.body({ isStatic: true })
])

let counter = 0

const conterUi = k.add([k.text("0")]);
k.loop(1, () => {
    counter++;
    conterUi.text = counter;

    const speads = [300, 500, 800, 600, 375]
    const currentSpeed = speads[Math.floor(Math.random() * speads.length)]

    k.add([
        k.rect(50, 50),
        k.pos(1000, 500),
        k.area(),
        k.body(),
        k.outline(3),
        k.move(k.vec2(-1, 0), currentSpeed),
    ])
})











// loadBean();
// setGravity(1600);

// // const player = add([
// //     sprite("bean"),
// //     pos(center()),
// //     area(),
// //     body(),
// // ]);

// add([
//     rect(width(), 48),
//     outline(4),
//     area(),
//     pos(0, height() - 48),
//     body({ isStatic: true }),
// ]);

// const bean = add([sprite("bean"), pos(80, 40), area(), body()]);  

// onKeyPress("space", () => {
//     bean.jump();
// });

// // onkeypress("space", () => {
// //     console.log("space is on");
    
// //     if (player.isGrounded()) {
// //         player.jump();
// //     }
// // });