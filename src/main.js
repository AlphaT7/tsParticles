import { loadAll } from "@tsparticles/all";
import { default as configs } from "@tsparticles/configs";

const log = console.log.bind(console);

log(configs);

loadAll(tsParticles);

tsParticles
  .load(
    // { id: "tsparticles", options: configs.multiplePolygonMasks }
    {
      id: "tsparticles",
      url: "./config.polygon.json",
    }
  )
  .then((container) => {
    log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });
