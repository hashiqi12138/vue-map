import { markRaw } from "@vue/reactivity";
import { Overlay, Feature, Layer, MapApp, Geometry, Plugable } from "../core";
import { Logger } from "./log";

export type InsertableNode = Layer | Feature | Geometry | Overlay | Node;
export type InsertParentNode =
  | MapApp
  | Layer
  | Feature
  | Geometry
  | Node
  | Overlay;

export type InsertableMapNode = Layer | Feature | Geometry | Overlay;
export type InsertMapParentNode = MapApp | Layer | Feature | Geometry | Overlay;

export const svgNS = "http://www.w3.org/2000/svg";
export const mathmlNS = "http://www.w3.org/1998/Math/MathML";

const logNodeOp = ((...args) => {
  const newArgs = [];
  args.forEach((i) => {
    newArgs.push(i);
    newArgs.push("===");
  });
  return console.log.bind(this, ...newArgs);
})();

export const componentClassMap: {
  MapApp: typeof MapApp;
  Layer: typeof Layer;
  Feature: typeof Feature;
  Geometry: typeof Geometry;
  Overlay: typeof Overlay;
} = {
  MapApp: MapApp,
  Layer: Layer,
  Feature: Feature,
  Geometry: Geometry,
  Overlay: Overlay,
};

export function registerMapPlugin(plugin) {
  const { MapApp, Layer, Feature, Geometry, Overlay } = plugin;

  componentClassMap.MapApp = MapApp;
  componentClassMap.Layer = Layer;
  componentClassMap.Feature = Feature;
  componentClassMap.Geometry = Geometry;
  componentClassMap.Overlay = Overlay;
}

function createElement(tag: string, namespace, is, props): InsertParentNode {
  logNodeOp("[createText] ", ...arguments);
  if (tag === "map-app") {
    return markRaw(new componentClassMap.MapApp(props));
  }
  if (tag === "layer") {
    return markRaw(new componentClassMap.Layer(props));
  }
  if (tag === "feature") {
    return markRaw(new componentClassMap.Feature(props));
  }
  if (tag === "geometry") {
    return markRaw(new componentClassMap.Geometry(props));
  }
  if (tag === "overlay") {
    return markRaw(new componentClassMap.Overlay(props));
  }

  // DOM

  const el =
    namespace === "svg"
      ? document.createElementNS(svgNS, tag)
      : namespace === "mathml"
      ? document.createElementNS(mathmlNS, tag)
      : is
      ? document.createElement(tag, { is })
      : document.createElement(tag);

  if (tag === "select" && props && props.multiple != null) {
    (el as HTMLSelectElement).setAttribute("multiple", props.multiple);
  }

  return el;
}

function createText(text: string) {
  logNodeOp("[createText]", ...arguments);
  return document.createTextNode(text);
}

function createComment(text: string) {
  logNodeOp("[createComment] ", ...arguments);
  return document.createComment(text);
}

function setText(node: InsertParentNode, text: string): void {
  logNodeOp("[setText] ", ...arguments);
  if (node instanceof HTMLElement) {
    node.nodeValue = text;
  } else {
    Logger.runtime("setText", "This type cant set text content");
  }
}

function insert(
  child: InsertableNode,
  parent: InsertParentNode,
  ref?: InsertableNode | null
): void {
  logNodeOp("[insert] ", ...arguments);
  if (parent instanceof Node) {
    // 如果是都是 DOM 元素的情况下
    // 使用 DOM 方法插入

    if (!ref) {
      if (child instanceof HTMLElement) {
        parent.insertBefore(child, ref || null);
      } else {
        console.error(
          "[VueMap] [runtime] while Parent is a dom element， try to insert a child or ref that is not DOM element",
          child,
          ref
        );
      }
    } else {
      if (child instanceof HTMLElement && ref instanceof HTMLElement) {
        parent.insertBefore(child, ref || null);
      } else {
        console.error(
          "[VueMap] [runtime] while Parent is a dom element， try to insert a child or ref that is not DOM element",
          child,
          ref
        );
      }
    }
  } else if (parent instanceof Overlay) {
    // Overlay 仅支持插入 HTML

    if (!ref) {
      if (!(child instanceof HTMLElement)) {
        console.error(
          "[VueMap] [runtime] Overlay child should be HTMLElement",
          child,
          ref
        );
      } else {
        parent.__plugin_onAppendNode(child);
      }
    } else {
      if (!(child instanceof HTMLElement) && !(ref instanceof HTMLElement)) {
        console.error(
          "[VueMap] [runtime] Overlay child should be HTMLElement",
          child,
          ref
        );
      } else {
        parent.__plugin_onAppendNode(child, ref);
      }
    }
  } else if (parent instanceof MapApp) {
    if (!ref) {
      if (
        !(child instanceof Overlay) &&
        !(child instanceof Layer) &&
        !(child instanceof Feature)
      ) {
        console.error(
          "[VueMap] [runtime] MapApp can only be Overlay and Layer",
          child,
          ref
        );
      } else {
        // ref 只会为 Layer 或者 Overlay 或者 Feature
        parent.__plugin_onAppendNode(child);
      }
    } else {
      if (
        !(child instanceof Overlay) &&
        !(child instanceof Layer) &&
        !(child instanceof Feature)
      ) {
        console.error(
          "[VueMap] [runtime] MapApp can only be Overlay and Layer",
          child,
          ref
        );
      } else {
        // ref 只会为 Layer 或者 Overlay
        parent.__plugin_onAppendNode(child, ref as Layer | Overlay);
      }
    }
  } else if (parent instanceof Geometry) {
    console.error("[VueMap] [runtime] Gemetry cant own children", child, ref);
  } else if (parent instanceof Layer) {
    if (!ref) {
      if (!(child instanceof Feature)) {
        console.error(
          "[VueMap] [runtime] Feature can only be placed under Layer",
          child,
          ref
        );
      } else {
        parent.__plugin_onAppendNode(child);
      }
    } else {
      if (!(child instanceof Feature) || !(ref instanceof Feature)) {
        console.error(
          "[VueMap] [runtime] Feature can only be placed under Layer",
          child,
          ref
        );
      } else {
        parent.__plugin_onAppendNode(child, ref);
      }
    }
  } else {
    if (!ref) {
      if (!(child instanceof Geometry)) {
        console.error(
          "[VueMap] [runtime] Geometry can only be placed under Feature",
          child,
          ref
        );
      } else {
        parent.__plugin_onAppendNode(child);
      }
    } else {
      if (!(child instanceof Geometry) || !(ref instanceof Geometry)) {
        console.error(
          "[VueMap] [runtime] Geometry can only be placed under Feature",
          child,
          ref
        );
      } else {
        parent.__plugin_onAppendNode(child, ref);
      }
    }
  }
}

function remove<T extends InsertableNode>(child: T): void {
  logNodeOp("[remove] ", ...arguments);
  const parent = child.parentNode;

  if (child instanceof MapApp) {
    child.__plugin_onDestroy();
    return
  }

  if (!parent) {
    Logger.runtime(
      "remove",
      "cannot remove node, node has no parent",
      child,
      child.parentNode
    );
    return;
  }
  if (parent instanceof HTMLElement) {
    // 如果是都是 DOM 元素的情况下
    // 使用 DOM 方法插入
    if (child instanceof HTMLElement) {
      parent.removeChild(child);
    } else {
      Logger.runtime(
        "remove",
        "HTMLElement can only remove HTMLElement",
        child,
        child.parentNode
      );
    }
  } else {
    // FIXME: type 系统是否切换到 interface
    (parent as Plugable<InsertMapParentNode, T>).__plugin_onRemoveNode(child);
  }
}

function setElementText(el: InsertParentNode, text: string): void {
  logNodeOp("[setElementText] ", ...arguments);
  if (el instanceof HTMLElement) {
    el.textContent = text;
    return;
  }

  if (el instanceof Overlay) {
    const textNode = document.createElement("span");
    textNode.innerText = text;
    el.__plugin_onAppendNode(textNode);
    return;
  }

  Logger.runtime("setElementText", "This type cant add text content");
}

function parentNode(
  node: InsertParentNode
): InsertParentNode | null | undefined {
  logNodeOp("[parentNode] ", ...arguments);
  if (node instanceof HTMLElement) {
    return node.parentNode as HTMLElement;
  }
  return node.parentNode;
}

function nextSibling(node: InsertableNode): InsertableNode | null {
  logNodeOp("[nextSibling] ", ...arguments);
  const parent = node.parentNode;
  if (!parent) {
    return null;
  }
  if (parent instanceof Node && node instanceof Node) {
    return node.nextSibling;
  }
  const children = parent.children || [];
  const i = children.indexOf(node as any);
  return children[i + 1] || null;
}

function querySelector(selector) {
  logNodeOp("[querySelector] ", ...arguments);
  return doc.querySelector(selector);
  // Logger.runtime("[querySelector]","querySelector not supported in this type.");
}

function setScopeId(el: InsertParentNode, id: string): void {
  logNodeOp("[setScopeId] ", ...arguments);
  if (el instanceof HTMLElement) {
    el.setAttribute(id, "");
    return;
  }
  Logger.runtime("[setScopeId] setScopeId not supported in this type.");
}

export const nodeOps: {
  insert: typeof insert;
  remove: typeof remove;
  createElement: typeof createElement;
  createText: typeof createText;
  createComment: typeof createComment;
  setText: typeof setText;
  setElementText: typeof setElementText;
  parentNode: typeof parentNode;
  nextSibling: typeof nextSibling;
  querySelector: typeof querySelector;
  setScopeId: typeof setScopeId;
} = {
  insert,
  remove,
  createElement,
  createText,
  createComment,
  setText,
  setElementText,
  parentNode,
  nextSibling,
  querySelector,
  setScopeId,
};

export function createNodeOps() {
  return nodeOps;
}
