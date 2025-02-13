import { Logger } from "../util/log";
import { MapContext } from "./MapRenderInterface";

export const ContextMap = new Map();

export function createContext() {
  const uuid = Math.random();
  const instance = new MapContext();

  ContextMap.set(uuid, instance);
  return instance;
}

export function getContextByUUID(id: string) {
  const instance = ContextMap.get(id);
  if (!instance) {
    Logger.warn.CORE("cant get map context with uuid ");
    return null;
  }

  return instance;
}

export function removeContext(id: string) {
  ContextMap.delete(id);
}
