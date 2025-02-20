// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three'
// import { SVGLoader } from 'three/examples/jsm/Addons.js';

// const Carousel = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     const skillIcons = [
//         { name: "HTML5", file: "html-5.svg" },
//         { name: "CSS3", file: "css-3.svg" },
//         { name: "Tailwind CSS", file: "tailwindcss.svg" },
//         { name: "JavaScript", file: "javascript.svg" },
//         { name: "TypeScript", file: "typescript.svg" },
//         { name: "React", file: "react.svg" },
//         { name: "Next.js", file: "nextjs.svg" },
//         { name: "Node.js", file: "nodejs.svg" },
//         { name: "Three.js", file: "threejs.svg" },
//         { name: "PostgreSQL", file: "postgresql.svg" },
//         { name: "Prisma", file: "prisma.svg" },
//         { name: "ESLint", file: "eslint.svg" },
//         { name: "Prettier", file: "prettier.svg" },
//         { name: "Stylelint", file: "stylelint.svg" },
//         { name: "GitHub", file: "github.svg" },
//         { name: "Vercel", file: "vercel.svg" },
//         { name: "Figma", file: "figma.svg" },
//     ];

//     useEffect(() => {
//         if (!containerRef.current) return

//         //シーン
//         const scene = new THREE.Scene()

//         //サイズ
//         const sizes = {
//             width: window.innerWidth,
//             height: window.innerHeight
//         }

//         //カメラ
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             sizes.width / sizes.height,
//             0.1,
//             2700
//         );
//         camera.position.x = 0;
//         camera.position.y = 400;
//         camera.position.z = 1800;

//         //レンダラー
//         const renderer = new THREE.WebGLRenderer({ antialias: true })
//         renderer.setSize(sizes.width, sizes.height)
//         renderer.setClearColor(0xffffff, 1);
//         containerRef.current.appendChild(renderer.domElement)

//         //ライト
//         const ambientLight = new THREE.AmbientLight(0xffffff, 3)
//         scene.add(ambientLight)

//         //カルーセルの設定
//         const radius = 800;
//         const group = new THREE.Group();

//         //マテリアル、ジオメトリの作成
//         const loader = new SVGLoader();
//         skillIcons.forEach((skillName, index) => {
//             loader.load(
//                 `/skillIcons/${skillName.file}`,
//                 (data) => {
//                     const paths = data.paths;

//                     paths.forEach((path) => {
//                         const material = new THREE.MeshLambertMaterial({
//                             color: path.color || 0x0ed7b5,
//                             side: THREE.DoubleSide,
//                             depthWrite: false
//                         });

//                         const shapes = SVGLoader.createShapes(path);

//                         shapes.forEach((shapes) => {
//                             const geometry = new THREE.ShapeGeometry(shapes);
//                             const mesh = new THREE.Mesh(geometry, material);

//                             //円周上に配置
//                             const angle = (index / skillIcons.length) * Math.PI * 2;
//                             mesh.position.set(
//                                 radius * Math.cos(angle),
//                                 0,
//                                 radius * Math.sin(angle)
//                                 );
//                             mesh.rotation.x = 0;
//                             mesh.rotation.y = angle;
//                             mesh.lookAt(0, 0, 0);
//                             mesh.scale.y = -1;
//                             mesh.scale.x = -1;
//                             group.add(mesh);
//                         });
//                     });
//                 },
//                 undefined,
//                 (error) => {
//                     console.error(`Error loading ${skillName}:`, error);
//                 }
//             );
//         });
//         scene.add(group);

//         //スクロール
//         let isDragging = false;
//         let startX = 0;
//         let rotation = 0;

//         const handleMouseDown = (event: MouseEvent) => {
//             isDragging = true;
//             startX = event.clientX;
//         };

//         const handleMouseMove = (event: MouseEvent) => {
//             if (!isDragging) return;
//             const deltaX = event.clientX - startX;
//             rotation += deltaX * 0.005;
//             group.rotation.y = rotation;
//             startX = event.clientX;
//         };

//         const handleMouseUp = () => {
//             isDragging = false;
//             const closestIndex = Math.round((-rotation / (Math.PI * 2)) * skillIcons.length) % skillIcons.length;
//             const normalizedIndex = (closestIndex + skillIcons.length) % skillIcons.length;
//             setActiveIndex((closestIndex + skillIcons.length) % skillIcons.length);
//             rotation = -(normalizedIndex / skillIcons.length) * Math.PI * 2;
//             group.rotation.y = rotation;
//         }

//         //アニメーション
//         const animate = () => {
//             renderer.render(scene, camera);
//             requestAnimationFrame(animate);
//         };

//         containerRef.current?.addEventListener("mousedown", handleMouseDown);
//         window.addEventListener("mousemove", handleMouseMove);
//         window.addEventListener("mouseup", handleMouseUp);

//         animate();

//         //クリーンアップ
//         return () => {
//             containerRef.current?.removeEventListener("mousedown", handleMouseDown);
//             window.removeEventListener("mousemove", handleMouseMove);
//             window.removeEventListener("mouseup", handleMouseUp);
//         };
//     }, [skillIcons]);

//     return (
//         <div ref={containerRef} style={{ width: '100%', height: '100vh' }}>
//             <div
//                 style={{
//                     position: "absolute",
//                     bottom: "50px",
//                     width: "100%",
//                     textAlign: "center",
//                     fontSize: "24px",
//                     fontWeight: "bold"
//                 }}
//             >
//             </div>
//         </div>    
//     )
// };

// export default Carousel;