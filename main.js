
import * as THREE from 'three';
import { GLTFLoader } from 'models\cat';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add light
const light = new THREE.AmbientLight(0xffffff, 1); // Soft white light
scene.add(light);

// Load the GLTF file
const loader = new GLTFLoader();
loader.load(
  './path/to/your/model.gltf', // Path to the .gltf file
  (gltf) => {
    scene.add(gltf.scene); // Add the loaded model to the scene
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Progress log
  },
  (error) => {
    console.error('An error happened:', error); // Error log
  }
);

camera.position.z = 5; // Set camera position

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
import { OrbitControls } from 'models\cat';

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

