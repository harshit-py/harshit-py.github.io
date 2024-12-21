import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NetworkBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200; // Increased number of particles
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10; // Increased spread
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material with larger particles and better visibility
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: '#6B46C1',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Mouse move handler with enhanced sensitivity
    const onMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    // Window resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Animation with enhanced movement
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;

      // Enhanced response to mouse movement
      particlesMesh.rotation.x += mousePosition.current.y * 0.001;
      particlesMesh.rotation.y += mousePosition.current.x * 0.001;

      // Add slight wave motion
      particlesMesh.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      
      renderer.render(scene, camera);
    };

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', handleResize);
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default NetworkBackground;