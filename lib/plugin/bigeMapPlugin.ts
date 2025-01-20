import { Feature, Geometry, Layer, MapApp, Overlay } from "../core";

export class BigeMap extends MapApp {
  __plugin_onCreate(props) {
    console.log("on create bige map", props);
    const { HttpUrl, accesToken } = props;
    window.BM.Config.HTTP_URL = HttpUrl;
    window.BM.accessToken = accesToken;
    return window.BM.map(props.mapDomId, "", props.mapConfig);
  }
  __plugin_onDestroy(): void {
    this.__plugin_created_instance.remove()
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child): void {
    this.__plugin_created_instance.removeLayer(child.__plugin_created_instance);
  }
  __plugin_onAppendNode(child, ref?): void {
    console.log("on append child", child, ref);

    child.parentNode = this;
    this.children?.push(child);

    this.__plugin_created_instance.addLayer(child.__plugin_created_instance);
  }
}

export class BigeLayer extends Layer {
  __plugin_onCreate(props) {
    const tLayerBase = BM.tileLayer(props.layerName);
    return tLayerBase;
  }
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child, ref?): void {
    child.parentNode = this;
    this.children?.push(child);
  }
}

export class BigeFeature extends Feature {
  __plugin_onCreate(props): void {
    const { longitude, latitude } = props;
    const marker = BM.marker([latitude, longitude], {
      ...props,
    });

    return marker;
  }
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child, ref?): void {
    child.parentNode = this;
    this.children?.push(child);
  }
}

export class BigeGeometry extends Geometry {
  __plugin_onCreate(): void {}
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child, ref?): void {
    child.parentNode = this;
    this.children?.push(child);
  }
}

export class BigeOverlay extends Overlay {
  __plugin_onCreate(props) {
    const { longitude, latitude } = props;
    const containerNode = document.createElement("div");
    const popup = BM.popup({ ...props })
      .setLatLng([latitude, longitude])
      .setContent(containerNode);

    return popup;
  }
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child): void {
    // throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child, ref?): void {
    this.children?.push(child);
    const content = this.__plugin_created_instance.getContent();
    content.appendChild(child);
  }
}

export function createPluginForRuntime() {
  return {
    MapApp: BigeMap,
    Layer: BigeLayer,
    Feature: BigeFeature,
    Geometry: BigeGeometry,
    Overlay: BigeOverlay,
  };
}
