import { camelize, markRaw, type VNodeProps } from "vue";
import { Logger } from "../util/log";
import { MapRenderElement } from "./MapRenderInterface";

export const ClassCatalog: {
  [key: string]: any;
} = {};

export function registerMapObjectClass(
  tagName: string,
  classConstructor: unknown
) {
  const tagNameCamel = camelize(tagName);
  const hasSameName = ClassCatalog[tagNameCamel];
  if (hasSameName) {
    Logger.warn.CORE("map class ", tagNameCamel, " has already been register");
  }

  ClassCatalog[tagNameCamel] = classConstructor;
}

export function getMapObjectClassByTagName(tagName: string) {
  const tagNameCamel = camelize(tagName);
  const clazz = ClassCatalog[tagNameCamel];

  if (!clazz) {
    Logger.warn.CORE(
      "map class named ",
      tagName,
      " does not exist, please check if its registered correctly"
    );

    return null;
  }

  return clazz;
}

export class MapObjectFactory {
  static createMapTextNode() {}
  static createMapCommentNode() {}
  
  static createMapElementByTagName(
    tagName: string,
    props?:
      | (VNodeProps & {
          [key: string]: any;
        })
      | null
  ) {
    const clazz = getMapObjectClassByTagName(tagName);
    if (!clazz) {
      Logger.error.CORE("cant find a class named ", tagName);
      return null;
    }

    let mapRenderObject: unknown;

    if (props === null || props === undefined) {
      mapRenderObject = markRaw(new clazz());
    } else {
      mapRenderObject = markRaw(new clazz(...(props as Iterable<string>)));
    }

    const mapElement = new MapRenderElement(tagName);
    markRaw(mapElement);

    mapElement.renderObject = mapRenderObject;

    return mapElement;
  }
}
