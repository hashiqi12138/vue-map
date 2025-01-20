import {
  type CreateAppFunction,
  type RootRenderFunction,
  type VNode,
  createRenderer,
} from "@vue/runtime-core";
import { nodeOps, type InsertParentNode } from "./node-ops";
import { patchProp } from "./patch-props";
import { extend } from "@vue/shared";

const { render: baseRender, createApp: baseCreateApp } = createRenderer(
  extend({ patchProp }, nodeOps)
);

export const render = baseRender as RootRenderFunction<InsertParentNode>;
export const createApp = baseCreateApp as CreateAppFunction<InsertParentNode>;
