import kaplay from "kaplay";

const k = kaplay({
    width: 1280,
    height: 720,
});
k.loadBean();
k.setGravity(1000);

const player = k.add([
    k.sprite("bean"),
    k.pos(k.center()),
    k.area(),
    k.body(),
])

k.add([
    k.rect(k.width(), 300),
    k.pos(0, 500),
    k.area(),
    k.outline(3),
    k.body({ isStatic: true })
])











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