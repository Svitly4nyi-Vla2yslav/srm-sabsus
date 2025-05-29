import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine, IShapeDrawer } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);

    // Додаємо форму чотирикутної зірки
    engine.addShape('four-point-star', new FourPointStarDrawer());
  }, []);

  return (
    <>
      <Particles
        init={particlesInit}
        options={{
          background: { color: '#000' },
          particles: {
            number: { value: 100 },
            color: { value: '#1a1f37' },
            shape: { type: 'four-point-star' }, // Використовуємо нашу кастомну форму
            size: {
              value: { min: 1, max: 2 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 2,
                sync: false,
              },
            },
            opacity: {
              value: { min: 0.3, max: 1 },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.3,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.05,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

// 🎨 Кастомний рендер чотирикутної зірки
class FourPointStarDrawer implements IShapeDrawer {
  draw(context: CanvasRenderingContext2D, _particle: any, radius: number) {
    context.beginPath();
    context.moveTo(0, -radius);
    context.lineTo(radius / 2, 0);
    context.lineTo(0, radius);
    context.lineTo(-radius / 2, 0);
    context.closePath();
    context.fill();
  }

  getSidesCount(): number {
    return 4;
  }
}

export default ParticlesBackground;