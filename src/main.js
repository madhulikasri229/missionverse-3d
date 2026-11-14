import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050816);

// Create the camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / 500,
    0.1,
    1000
);

camera.position.z = 4;

// Create the 3D renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 500);

document.getElementById("scene-container").appendChild(renderer.domElement);

// Create a planet
const geometry = new THREE.SphereGeometry(1.2, 32, 32);

const material = new THREE.MeshStandardMaterial({
    color: 0x2277dd,
    roughness: 0.8
});

const planet = new THREE.Mesh(geometry, material);
scene.add(planet);

// Add lighting
const light = new THREE.PointLight(0xffffff, 100);
light.position.set(3, 3, 4);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Animate the planet
function animate() {
    requestAnimationFrame(animate);

    planet.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// Adjust when the window is resized
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 500);
});
