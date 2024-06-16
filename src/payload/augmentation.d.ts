// payload-augmentation.d.ts

import  Types  from './payload-types.ts';

declare module 'payload' {
  // Augment the existing GeneratedTypes interface
  interface GeneratedTypes extends Types {}
}
