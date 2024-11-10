import sharp from 'sharp';
import { readdirSync } from 'fs';

Promise.all(
  readdirSync('assets')
    .filter((file) => file.endsWith('.webp'))
    .map(async (file) => {
      return sharp(`assets/${file}`).toFile(`assets/${file.split('.')[0]}.png`);
    }),
);
