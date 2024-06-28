import { loadAll } from "@tsparticles/all";
import { default as configs } from "@tsparticles/configs";

const log = console.log.bind(console);
const $ = document.querySelector.bind(document);
const print = false;

const ts1 = tsParticles;
// const ts2 = tsParticles;

Object.keys(configs).forEach((preset) => {
  log(preset);
});

if (print) $("#print").innerText = JSON.stringify(configs.linkTriangles);

loadAll(tsParticles);

ts1
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

// ts2
//   .load(
//     // {
//     //   id: "tsparticles",
//     //   options: configs.linkTriangles,
//     // }
//     {
//       id: "tsparticles2",
//       url: "./config2.json",
//     }
//   )
//   .catch((error) => {
//     console.error(error);
//   });
