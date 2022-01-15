const canvas = document.querySelector(".webgl");
//scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1,);
const material = new THREE.MeshBasicMaterial({
    color: 'purple'
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//sizes
const size = {
    width: 800,
    height: 600
}
//camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3
camera.position.x = 1
camera.scale.x = 3
scene.add(camera);

//renderer
const renderer =  new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);