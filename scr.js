const scene = new THREE.Scene();

// Create a group
// const group = new THREE.Group();
// scene.add(group);
// group.scale.set(1.5,1.5,1.5)

// First box
// const box = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: "green" })
// );
// box.position.x = -2;
// group.add(box);

// Second box
const box1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "00ffff" })
);
box1.scale.set(2,2,2)
scene.add(box1)

// Third box
// const box2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: "white" })
// );
// box2.position.x = 2;
// group.add(box2);

// Renderer size
const size = {
    width: 1230,
    height: 550,
};

// Camera setup
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 4;
scene.add(camera);

// Rendering 
const target = document.querySelector(".wbg");
const renderer = new THREE.WebGLRenderer({ canvas: target, antialias: true });
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

// let time = Date.now();
let clock = new THREE.Clock();
const anm =  ()=>{
    const elapsedtime = clock.getElapsedTime();
    console.log(elapsedtime);
    
    // const currentTime = Date.now();
    // const delta = currentTime - time;
    // time =  currentTime;
    // console.log(delta);
   box1.rotation.y = elapsedtime;
    
    renderer.render(scene, camera);
    window.requestAnimationFrame(anm);
}
anm();