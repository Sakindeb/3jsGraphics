import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//define the geometry
const points = [];
points.push( new THREE.Vector3( -10, 0 , 0 ) );
points.push( new THREE.Vector3( 0, 10 , 0 ) );
points.push( new THREE.Vector3( 10, 0 , 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints(points);

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const line = new THREE.Line( geometry, material);
scene.add( line );



function animate() {
	requestAnimationFrame( animate );
    line.rotation.x += 0.01;
	line.rotation.y += 0.01;


	

	renderer.render( scene, camera );
}

animate();