import * as THREE from 'three';
//instance of scene
const scene = new THREE.Scene();
//instance of camere using perspectivecamera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 50 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );
//instance of renderer using WebGLRenderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

//define the geometry
const points = [];
points.push( new THREE.Vector3( -10, 0 , 0 ) );
points.push( new THREE.Vector3( 0, 10 , 0 ) );
points.push( new THREE.Vector3( 10, 0 , 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.line( geometry, material);
scene.add(line);
function animate()
{
    requestAnimationFrame(animate);
    renderer.render( scene, camera);

}

animate();



