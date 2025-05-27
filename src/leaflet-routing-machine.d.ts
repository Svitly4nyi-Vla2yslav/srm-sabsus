import "leaflet";

declare module "leaflet" {
  namespace Routing {
    function control(options: any): any;
  }
}
