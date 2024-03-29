import { memo, Suspense, useEffect, useRef } from 'react';
import { CameraControls, Environment, Text, useFont } from '@react-three/drei';
import { useAtom } from 'jotai';
import { Color, MathUtils } from 'three';
import Horse from './Model.jsx';
import Ground from './Ground.jsx';
import ProgressBar from './ProgressBar.jsx';
import { REDDISH_BLOOM_COLOR, WHITE_BLOOM_COLOR } from '../colors.js';
import { currentPageAtom, PAGES } from '../atoms.js';
import dawn from '../assets/dawn.exr.js';

const whiteBloomColor = new Color(WHITE_BLOOM_COLOR);
whiteBloomColor.multiplyScalar(5);
const reddishBloomColor = new Color(REDDISH_BLOOM_COLOR);
reddishBloomColor.multiplyScalar(12);

const FONT = 'fonts/roboto-webfont.ttf';
const { DEG2RAD } = MathUtils;

const Scene = () => {
  const controls = useRef();
  const fitScreenCamera = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const setCameraSmoothTime = (time) => (controls.current.smoothTime = time);
  const setCameraDolly = async (distance, enableTransition) =>
    await controls.current?.dolly(distance, enableTransition);
  const setCameraRotation = async (azimuthAngle, polarAngle, enableTransition) =>
    await controls.current?.rotate(azimuthAngle, polarAngle, enableTransition);
  const resetCameraToInitialPosition = async (enableTransition) => await controls.current?.reset(enableTransition);
  const setCameraTruck = async (x, y, enableTransition) => await controls.current?.truck(x, y, enableTransition);

  useEffect(() => {
    const updateCameraPosition = async () => {
      switch (currentPage) {
        case PAGES.CONFERENCE:
          setCameraSmoothTime(0.095);
          await setCameraDolly(-1, true);
          setCameraSmoothTime(0.5);
          await setCameraRotation(135 * DEG2RAD, 0, true);
          break;
        case PAGES.TEAM:
          setCameraSmoothTime(0.095);
          await setCameraDolly(-1, true);
          setCameraSmoothTime(0.5);
          await setCameraRotation(-135 * DEG2RAD, 0, true);
          break;
        case PAGES.SPEAKERS:
          setCameraSmoothTime(0.095);
          await setCameraDolly(-10, true);
          setCameraSmoothTime(0.5);
          await setCameraTruck(0, -4, true);
          break;
        case PAGES.HOME:
          await resetCameraToInitialPosition(true);
          break;
        default:
          return;
      }
    };

    updateCameraPosition();
  }, [currentPage]);

  const loadingExperience = async () => {
    await setCameraDolly(-12);
    setCameraSmoothTime(1.4);
    setTimeout(() => {
      setCurrentPage(PAGES.HOME);
    }, 1200);
    await fitCamera();
  };

  const fitCamera = async () => {
    controls.current.fitToBox(fitScreenCamera.current, true);
  };

  useEffect(() => {
    loadingExperience();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', fitCamera);
    return () => window.removeEventListener('resize', fitCamera);
  }, []);

  return (
    <>
      <CameraControls makeDefault ref={controls} maxPolarAngle={1.5} />
      {/*Mesh bellow is here to allow resize responsiveness*/}
      <mesh ref={fitScreenCamera} position-z={0.9} visible={false}>
        <boxGeometry args={[8, 2, 2]} />
        <meshBasicMaterial color="yellow" transparent opacity={0.5} />
      </mesh>
      <Suspense fallback={<ProgressBar />}>
        <group position-x={-2}>
          {'INIT'.split('').map((letter, index) => (
            <Text
              key={index}
              font={FONT}
              position={[index === 3 ? -0.1 : index - 3, 0, -4]}
              rotation-y={0}
              fontSize={1.9}
              textAlign="center"
            >
              {letter}
              <meshBasicMaterial color={index === 1 ? reddishBloomColor : whiteBloomColor} toneMapped={false} />
            </Text>
          ))}
        </group>
        <Suspense fallback={null}>
          <group rotation-y={0} position={[0, -0.8, 0]}>
            <Horse scale={0.015} />
          </group>
        </Suspense>
        <Text
          font={FONT}
          position={[3.4, 0, -4]}
          rotation-y={0}
          fontSize={1.9}
          letterSpacing={-0.05}
          textAlign="center"
        >
          2024
          <meshBasicMaterial color={whiteBloomColor} toneMapped={false} />
        </Text>
        <Ground />
      </Suspense>
      <Environment files={dawn} />
    </>
  );
};

useFont.preload(FONT);

export default memo(Scene);
