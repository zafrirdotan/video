const mockUrl =
  "https://mirror.clarkson.edu/blender/demo/movies/BBB/bbb_sunflower_1080p_30fps_normal.mp4";

export function getVideo(): Promise<string> {
  return new Promise((resolve) => {
    if (Math.random() < 0.2) {
      throw new Error("Failed to load video");
    }

    setTimeout(() => {
      resolve(mockUrl);
    }, getRandomSecondes(1, 30));
  });
}

function getRandomSecondes(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}
