import type { InsertableNode, InsertParentNode } from "../runtime/node-ops";

export abstract class Plugable<
  P extends InsertParentNode | null,
  T extends InsertableNode | null
> {
  children?: T[] = [];
  parentNode?: P = undefined;
  // 对应的地图对象
  __plugin_created_instance: any = null;
  constructor() {
    this.children = [];
    this.parentNode = undefined;
    this.__plugin_created_instance = null;
  }

  abstract __plugin_onCreate(): void;
  abstract __plugin_onDestroy(): void;
  abstract __plugin_onUpdate(): void;
  abstract __plugin_onRemoveNode(child: T): void;
  abstract __plugin_onAppendNode(child: T, ref?: T): void;
}

export class MapApp extends Plugable<null, Layer | Overlay> {
  __plugin_onCreate(): void {}
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child: Layer | Overlay): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child: Layer | Overlay, ref?: Layer | Overlay): void {
    child.parentNode = this;
    this.children?.push(child);
  }
  constructor(props) {
    super(props);
    this.__plugin_created_instance = this.__plugin_onCreate(props);
  }
}

export class Layer extends Plugable<MapApp, Feature> {
  __plugin_onCreate(): void {}
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child: Feature): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child: Feature, ref?: Feature): void {
    child.parentNode = this;
    this.children?.push(child);
  }
  constructor(props) {
    super(props);
    this.__plugin_created_instance = this.__plugin_onCreate(props);
  }
}

export class Feature extends Plugable<MapApp, Geometry> {
  __plugin_onCreate(): void {}
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child: Geometry): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child: Geometry, ref?: Geometry): void {
    child.parentNode = this;
    this.children?.push(child);
  }
  constructor(props) {
    super(props);
    this.__plugin_created_instance = this.__plugin_onCreate(props);
  }
}

export class Geometry extends Plugable<Feature, null> {
  __plugin_onCreate(): void {}
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child: null): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child: null, ref?: null): void {
    throw new Error("Method not implemented.");
  }
  constructor(props) {
    super(props);
    this.__plugin_created_instance = this.__plugin_onCreate(props);
  }
}

export class Overlay extends Plugable<MapApp, HTMLElement> {
  __plugin_onCreate(): void {}
  __plugin_onDestroy(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onUpdate(): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onRemoveNode(child: HTMLElement): void {
    throw new Error("Method not implemented.");
  }
  __plugin_onAppendNode(child: HTMLElement, ref?: HTMLElement): void {
    this.children?.push(child);
  }
  constructor(props) {
    super(props);
    this.__plugin_created_instance = this.__plugin_onCreate(props);
  }
}
