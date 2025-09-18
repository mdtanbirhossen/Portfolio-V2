export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export const MeshLineGeometry;
  export const MeshLineMaterial;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry;
      meshLineMaterial;
    }
  }
}
