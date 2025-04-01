import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Model = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, and Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      "../../../assets/model/scene.gltf", // Path to your GLTF file
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    // Add Orbit Controls (optional for rotation/zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // For smoother interactions

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // If using OrbitControls
      renderer.render(scene, camera);
    };

    // Handle Resizing
    const onWindowResize = () => {
      camera.aspect = containerRef?.current?.clientWidth / containerRef?.current?.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef?.current?.clientWidth,
        containerRef?.current?.clientHeight
      );
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup on Component Unmount
    return () => {
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
};

export default Model;
