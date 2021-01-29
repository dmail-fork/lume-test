import { startServer, serveFile } from "@jsenv/server";

const rootDirectoryUrl = new URL("./", import.meta.url);

startServer({
  port: 3456,
  requestToResponse: (request) => {
    if (request.ressource === "/") {
      request = {
        ...request,
        ressource: "/index.html",
      };
    }
    return serveFile(request, { rootDirectoryUrl });
  },
});
