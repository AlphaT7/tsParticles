import { loadAll } from "@tsparticles/all";
import { default as configs } from "@tsparticles/configs";

const log = console.log.bind(console);
const $ = document.querySelector.bind(document);
const print = false;

Object.keys(configs).forEach((preset) => {
  log(preset);
});

if (print) $("#print").innerText = JSON.stringify(configs.linkTriangles);

loadAll(tsParticles);

tsParticles
  .load(
    // {
    //   id: "tsparticles",
    //   options: configs.linkTriangles,
    // }
    {
      id: "tsparticles",
      url: "./config.json",
    }
  )
  .catch((error) => {
    console.error(error);
  });
