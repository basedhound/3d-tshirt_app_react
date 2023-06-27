import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#FF96AD",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./sample.png",
  fullDecal: "./sample.png",
});

export default state;
