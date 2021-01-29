import {
  getImportMapFromNodeModules,
  generateImportMapForProject,
} from "@jsenv/node-module-import-map";

const projectDirectoryUrl = new URL("./", import.meta.url);

generateImportMapForProject(
  [
    getImportMapFromNodeModules({
      projectDirectoryUrl,
      packagesManualOverrides: {
        "@lume/element": {
          exports: {
            "./": "./",
          },
        },
        "@lume/variable": {
          exports: {
            "./": "./",
          },
        },
      },
    }),
  ],
  {
    projectDirectoryUrl,
    importMapFileRelativeUrl: "./project.importmap",
  }
);
