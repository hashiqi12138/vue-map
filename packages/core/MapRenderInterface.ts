export interface IMapContext<T> extends IMapRenderObject<T> {
  rootRenderObject: T;
  getRootRenderObject(): IMapRenderObject<T>;
  disposeRootRenderObject(): void;
}

export interface IMapRenderObject<T> {
  renderObject: T;
  getMapContext(): IMapContext<T>;
  getRootRenderObject(): IMapRenderObject<T>;
  getRenderObject(): T;
  disposeRenderObject(): void;
}

export interface IMapRenderNode<T> extends Node, IMapRenderObject<T> {}

export interface IMapRenderElement<T> extends Element, IMapRenderObject<T> {}

export interface IMapRenderTextNode<T> extends Text, IMapRenderObject<T> {}

export interface IMapRenderCommentNode<T>
  extends Comment,
    IMapRenderObject<T> {}

export class MapRenderNode<T> implements IMapRenderNode<T> {
  baseURI!: string;
  childNodes!: NodeListOf<ChildNode>;
  firstChild!: ChildNode | null;
  isConnected!: boolean;
  lastChild!: ChildNode | null;
  nextSibling!: ChildNode | null;
  nodeName!: string;
  nodeType!: number;
  nodeValue!: string | null;
  ownerDocument!: Document | null;
  parentElement!: HTMLElement | null;
  parentNode!: ParentNode | null;
  previousSibling!: ChildNode | null;
  textContent!: string | null;
  appendChild<T extends Node>(node: T): T {
    throw new Error("Method not implemented.");
  }
  cloneNode(deep?: boolean): Node {
    throw new Error("Method not implemented.");
  }
  compareDocumentPosition(other: Node): number {
    throw new Error("Method not implemented.");
  }
  contains(other: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  getRootNode(options?: GetRootNodeOptions): Node {
    throw new Error("Method not implemented.");
  }
  hasChildNodes(): boolean {
    throw new Error("Method not implemented.");
  }
  insertBefore<T extends Node>(node: T, child: Node | null): T {
    throw new Error("Method not implemented.");
  }
  isDefaultNamespace(namespace: string | null): boolean {
    throw new Error("Method not implemented.");
  }
  isEqualNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  isSameNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  lookupNamespaceURI(prefix: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  lookupPrefix(namespace: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  normalize(): void {
    throw new Error("Method not implemented.");
  }
  removeChild<T extends Node>(child: T): T {
    throw new Error("Method not implemented.");
  }
  replaceChild<T extends Node>(node: Node, child: T): T {
    throw new Error("Method not implemented.");
  }
  ELEMENT_NODE!: 1;
  ATTRIBUTE_NODE!: 2;
  TEXT_NODE!: 3;
  CDATA_SECTION_NODE!: 4;
  ENTITY_REFERENCE_NODE!: 5;
  ENTITY_NODE!: 6;
  PROCESSING_INSTRUCTION_NODE!: 7;
  COMMENT_NODE!: 8;
  DOCUMENT_NODE!: 9;
  DOCUMENT_TYPE_NODE!: 10;
  DOCUMENT_FRAGMENT_NODE!: 11;
  NOTATION_NODE!: 12;
  DOCUMENT_POSITION_DISCONNECTED!: 1;
  DOCUMENT_POSITION_PRECEDING!: 2;
  DOCUMENT_POSITION_FOLLOWING!: 4;
  DOCUMENT_POSITION_CONTAINS!: 8;
  DOCUMENT_POSITION_CONTAINED_BY!: 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC!: 32;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean
  ): void {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void {
    throw new Error("Method not implemented.");
  }
  renderObject!: T;
  getMapContext(): IMapContext<T> {
    throw new Error("Method not implemented.");
  }
  getRootRenderObject(): IMapRenderObject<T> {
    throw new Error("Method not implemented.");
  }
  getRenderObject(): T {
    throw new Error("Method not implemented.");
  }
  disposeRenderObject(): void {
    throw new Error("Method not implemented.");
  }
}

export class MapRenderElement<T> implements IMapRenderElement<T> {
  attributes!: NamedNodeMap;
  classList!: DOMTokenList;
  className!: string;
  clientHeight!: number;
  clientLeft!: number;
  clientTop!: number;
  clientWidth!: number;
  currentCSSZoom!: number;
  id!: string;
  innerHTML!: string;
  localName!: string;
  namespaceURI!: string | null;
  onfullscreenchange!: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror!: ((this: Element, ev: Event) => any) | null;
  outerHTML!: string;
  ownerDocument!: Document;
  part!: DOMTokenList;
  prefix!: string | null;
  scrollHeight!: number;
  scrollLeft!: number;
  scrollTop!: number;
  scrollWidth!: number;
  shadowRoot!: ShadowRoot | null;
  slot!: string;
  tagName!: string;
  attachShadow(init: ShadowRootInit): ShadowRoot {
    throw new Error("Method not implemented.");
  }
  checkVisibility(options?: CheckVisibilityOptions): boolean {
    throw new Error("Method not implemented.");
  }
  closest<K extends keyof HTMLElementTagNameMap>(
    selector: K
  ): HTMLElementTagNameMap[K] | null {
    throw new Error("Method not implemented.");
  }
  computedStyleMap(): StylePropertyMapReadOnly {
    throw new Error("Method not implemented.");
  }
  getAttribute(qualifiedName: string): string | null {
    throw new Error("Method not implemented.");
  }
  getAttributeNS(namespace: string | null, localName: string): string | null {
    throw new Error("Method not implemented.");
  }
  getAttributeNames(): string[] {
    throw new Error("Method not implemented.");
  }
  getAttributeNode(qualifiedName: string): Attr | null {
    throw new Error("Method not implemented.");
  }
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null {
    throw new Error("Method not implemented.");
  }
  getBoundingClientRect(): DOMRect {
    throw new Error("Method not implemented.");
  }
  getClientRects(): DOMRectList {
    throw new Error("Method not implemented.");
  }
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
    throw new Error("Method not implemented.");
  }
  getElementsByTagName<K extends keyof HTMLElementTagNameMap>(
    qualifiedName: K
  ): HTMLCollectionOf<HTMLElementTagNameMap[K]> {
    throw new Error("Method not implemented.");
  }
  getElementsByTagNameNS<T extends Element>(
    namespace: string | null,
    localName: string
  ): HTMLCollectionOf<T> {
    throw new Error("Method not implemented.");
  }
  getHTML(options?: GetHTMLOptions): string {
    throw new Error("Method not implemented.");
  }
  hasAttribute(qualifiedName: string): boolean {
    throw new Error("Method not implemented.");
  }
  hasAttributeNS(namespace: string | null, localName: string): boolean {
    throw new Error("Method not implemented.");
  }
  hasAttributes(): boolean {
    throw new Error("Method not implemented.");
  }
  hasPointerCapture(pointerId: number): boolean {
    throw new Error("Method not implemented.");
  }
  insertAdjacentElement(
    where: InsertPosition,
    element: Element
  ): Element | null {
    throw new Error("Method not implemented.");
  }
  insertAdjacentHTML(position: InsertPosition, string: string): void {
    throw new Error("Method not implemented.");
  }
  insertAdjacentText(where: InsertPosition, data: string): void {
    throw new Error("Method not implemented.");
  }
  matches(selectors: string): boolean {
    throw new Error("Method not implemented.");
  }
  releasePointerCapture(pointerId: number): void {
    throw new Error("Method not implemented.");
  }
  removeAttribute(qualifiedName: string): void {
    throw new Error("Method not implemented.");
  }
  removeAttributeNS(namespace: string | null, localName: string): void {
    throw new Error("Method not implemented.");
  }
  removeAttributeNode(attr: Attr): Attr {
    throw new Error("Method not implemented.");
  }
  requestFullscreen(options?: FullscreenOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }
  requestPointerLock(options?: PointerLockOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }
  scroll(x?: unknown, y?: unknown): void {
    throw new Error("Method not implemented.");
  }
  scrollBy(x?: unknown, y?: unknown): void {
    throw new Error("Method not implemented.");
  }
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void {
    throw new Error("Method not implemented.");
  }
  scrollTo(x?: unknown, y?: unknown): void {
    throw new Error("Method not implemented.");
  }
  setAttribute(qualifiedName: string, value: string): void {
    throw new Error("Method not implemented.");
  }
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string
  ): void {
    throw new Error("Method not implemented.");
  }
  setAttributeNode(attr: Attr): Attr | null {
    throw new Error("Method not implemented.");
  }
  setAttributeNodeNS(attr: Attr): Attr | null {
    throw new Error("Method not implemented.");
  }
  setHTMLUnsafe(html: string): void {
    throw new Error("Method not implemented.");
  }
  setPointerCapture(pointerId: number): void {
    throw new Error("Method not implemented.");
  }
  toggleAttribute(qualifiedName: string, force?: boolean): boolean {
    throw new Error("Method not implemented.");
  }
  webkitMatchesSelector(selectors: string): boolean {
    throw new Error("Method not implemented.");
  }
  addEventListener(type: unknown, listener: unknown, options?: unknown): void {
    throw new Error("Method not implemented.");
  }
  removeEventListener(
    type: unknown,
    listener: unknown,
    options?: unknown
  ): void {
    throw new Error("Method not implemented.");
  }
  baseURI!: string;
  childNodes!: NodeListOf<ChildNode>;
  firstChild!: ChildNode | null;
  isConnected!: boolean;
  lastChild!: ChildNode | null;
  nextSibling!: ChildNode | null;
  nodeName!: string;
  nodeType!: number;
  nodeValue!: string | null;
  parentElement!: HTMLElement | null;
  parentNode!: ParentNode | null;
  previousSibling!: ChildNode | null;
  textContent!: string | null;
  appendChild<T extends Node>(node: T): T {
    throw new Error("Method not implemented.");
  }
  cloneNode(deep?: boolean): Node {
    throw new Error("Method not implemented.");
  }
  compareDocumentPosition(other: Node): number {
    throw new Error("Method not implemented.");
  }
  contains(other: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  getRootNode(options?: GetRootNodeOptions): Node {
    throw new Error("Method not implemented.");
  }
  hasChildNodes(): boolean {
    throw new Error("Method not implemented.");
  }
  insertBefore<T extends Node>(node: T, child: Node | null): T {
    throw new Error("Method not implemented.");
  }
  isDefaultNamespace(namespace: string | null): boolean {
    throw new Error("Method not implemented.");
  }
  isEqualNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  isSameNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  lookupNamespaceURI(prefix: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  lookupPrefix(namespace: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  normalize(): void {
    throw new Error("Method not implemented.");
  }
  removeChild<T extends Node>(child: T): T {
    throw new Error("Method not implemented.");
  }
  replaceChild<T extends Node>(node: Node, child: T): T {
    throw new Error("Method not implemented.");
  }
  ELEMENT_NODE!: 1;
  ATTRIBUTE_NODE!: 2;
  TEXT_NODE!: 3;
  CDATA_SECTION_NODE!: 4;
  ENTITY_REFERENCE_NODE!: 5;
  ENTITY_NODE!: 6;
  PROCESSING_INSTRUCTION_NODE!: 7;
  COMMENT_NODE!: 8;
  DOCUMENT_NODE!: 9;
  DOCUMENT_TYPE_NODE!: 10;
  DOCUMENT_FRAGMENT_NODE!: 11;
  NOTATION_NODE!: 12;
  DOCUMENT_POSITION_DISCONNECTED!: 1;
  DOCUMENT_POSITION_PRECEDING!: 2;
  DOCUMENT_POSITION_FOLLOWING!: 4;
  DOCUMENT_POSITION_CONTAINS!: 8;
  DOCUMENT_POSITION_CONTAINED_BY!: 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC!: 32;
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  ariaAtomic!: string | null;
  ariaAutoComplete!: string | null;
  ariaBrailleLabel!: string | null;
  ariaBrailleRoleDescription!: string | null;
  ariaBusy!: string | null;
  ariaChecked!: string | null;
  ariaColCount!: string | null;
  ariaColIndex!: string | null;
  ariaColIndexText!: string | null;
  ariaColSpan!: string | null;
  ariaCurrent!: string | null;
  ariaDescription!: string | null;
  ariaDisabled!: string | null;
  ariaExpanded!: string | null;
  ariaHasPopup!: string | null;
  ariaHidden!: string | null;
  ariaInvalid!: string | null;
  ariaKeyShortcuts!: string | null;
  ariaLabel!: string | null;
  ariaLevel!: string | null;
  ariaLive!: string | null;
  ariaModal!: string | null;
  ariaMultiLine!: string | null;
  ariaMultiSelectable!: string | null;
  ariaOrientation!: string | null;
  ariaPlaceholder!: string | null;
  ariaPosInSet!: string | null;
  ariaPressed!: string | null;
  ariaReadOnly!: string | null;
  ariaRequired!: string | null;
  ariaRoleDescription!: string | null;
  ariaRowCount!: string | null;
  ariaRowIndex!: string | null;
  ariaRowIndexText!: string | null;
  ariaRowSpan!: string | null;
  ariaSelected!: string | null;
  ariaSetSize!: string | null;
  ariaSort!: string | null;
  ariaValueMax!: string | null;
  ariaValueMin!: string | null;
  ariaValueNow!: string | null;
  ariaValueText!: string | null;
  role!: string | null;
  animate(
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    options?: number | KeyframeAnimationOptions
  ): Animation {
    throw new Error("Method not implemented.");
  }
  getAnimations(options?: GetAnimationsOptions): Animation[] {
    throw new Error("Method not implemented.");
  }
  after(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  before(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
  replaceWith(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  nextElementSibling!: Element | null;
  previousElementSibling!: Element | null;
  childElementCount!: number;
  children!: HTMLCollection;
  firstElementChild!: Element | null;
  lastElementChild!: Element | null;
  append(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  prepend(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  querySelector<K extends keyof HTMLElementTagNameMap>(
    selectors: K
  ): HTMLElementTagNameMap[K] | null {
    throw new Error("Method not implemented.");
  }
  querySelectorAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K
  ): NodeListOf<HTMLElementTagNameMap[K]> {
    throw new Error("Method not implemented.");
  }
  replaceChildren(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  assignedSlot!: HTMLSlotElement | null;
  renderObject!: T;
  getMapContext(): IMapContext<T> {
    throw new Error("Method not implemented.");
  }
  getRootRenderObject(): IMapRenderObject<T> {
    return this.getMapContext().rootRenderObject;
  }
  getRenderObject(): T {
    return this.renderObject;
  }
  disposeRenderObject(): void {
    this.renderObject = null;
  }

  constructor(tagName: string) {
    const el = document.createElement(tagName);
    const keys2Replace = [
      "renderObject",
      "getMapContext",
      "getRootRenderObject",
      "getRenderObject",
      "disposeRenderObject",
    ];
    keys2Replace.forEach((key) => {
      el[key] = this[key];
    });

    return el as unknown as MapRenderElement<T>;
  }
}

export class MapRenderTextNode<T> implements IMapRenderTextNode<T> {
  wholeText!: string;
  splitText(offset: number): Text {
    throw new Error("Method not implemented.");
  }
  data!: string;
  length!: number;
  ownerDocument!: Document;
  appendData(data: string): void {
    throw new Error("Method not implemented.");
  }
  deleteData(offset: number, count: number): void {
    throw new Error("Method not implemented.");
  }
  insertData(offset: number, data: string): void {
    throw new Error("Method not implemented.");
  }
  replaceData(offset: number, count: number, data: string): void {
    throw new Error("Method not implemented.");
  }
  substringData(offset: number, count: number): string {
    throw new Error("Method not implemented.");
  }
  baseURI!: string;
  childNodes!: NodeListOf<ChildNode>;
  firstChild!: ChildNode | null;
  isConnected!: boolean;
  lastChild!: ChildNode | null;
  nextSibling!: ChildNode | null;
  nodeName!: string;
  nodeType!: number;
  nodeValue!: string | null;
  parentElement!: HTMLElement | null;
  parentNode!: ParentNode | null;
  previousSibling!: ChildNode | null;
  textContent!: string | null;
  appendChild<T extends Node>(node: T): T {
    throw new Error("Method not implemented.");
  }
  cloneNode(deep?: boolean): Node {
    throw new Error("Method not implemented.");
  }
  compareDocumentPosition(other: Node): number {
    throw new Error("Method not implemented.");
  }
  contains(other: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  getRootNode(options?: GetRootNodeOptions): Node {
    throw new Error("Method not implemented.");
  }
  hasChildNodes(): boolean {
    throw new Error("Method not implemented.");
  }
  insertBefore<T extends Node>(node: T, child: Node | null): T {
    throw new Error("Method not implemented.");
  }
  isDefaultNamespace(namespace: string | null): boolean {
    throw new Error("Method not implemented.");
  }
  isEqualNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  isSameNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  lookupNamespaceURI(prefix: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  lookupPrefix(namespace: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  normalize(): void {
    throw new Error("Method not implemented.");
  }
  removeChild<T extends Node>(child: T): T {
    throw new Error("Method not implemented.");
  }
  replaceChild<T extends Node>(node: Node, child: T): T {
    throw new Error("Method not implemented.");
  }
  ELEMENT_NODE!: 1;
  ATTRIBUTE_NODE!: 2;
  TEXT_NODE!: 3;
  CDATA_SECTION_NODE!: 4;
  ENTITY_REFERENCE_NODE!: 5;
  ENTITY_NODE!: 6;
  PROCESSING_INSTRUCTION_NODE!: 7;
  COMMENT_NODE!: 8;
  DOCUMENT_NODE!: 9;
  DOCUMENT_TYPE_NODE!: 10;
  DOCUMENT_FRAGMENT_NODE!: 11;
  NOTATION_NODE!: 12;
  DOCUMENT_POSITION_DISCONNECTED!: 1;
  DOCUMENT_POSITION_PRECEDING!: 2;
  DOCUMENT_POSITION_FOLLOWING!: 4;
  DOCUMENT_POSITION_CONTAINS!: 8;
  DOCUMENT_POSITION_CONTAINED_BY!: 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC!: 32;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean
  ): void {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void {
    throw new Error("Method not implemented.");
  }
  after(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  before(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
  replaceWith(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  nextElementSibling!: Element | null;
  previousElementSibling!: Element | null;
  assignedSlot!: HTMLSlotElement | null;
  renderObject!: T;
  getMapContext(): IMapContext<T> {
    throw new Error("Method not implemented.");
  }
  getRootRenderObject(): IMapRenderObject<T> {
    throw new Error("Method not implemented.");
  }
  getRenderObject(): T {
    throw new Error("Method not implemented.");
  }
  disposeRenderObject(): void {
    throw new Error("Method not implemented.");
  }
}

export class MapRenderCommentNode<T> implements IMapRenderCommentNode<T> {
  data!: string;
  length!: number;
  ownerDocument!: Document;
  appendData(data: string): void {
    throw new Error("Method not implemented.");
  }
  deleteData(offset: number, count: number): void {
    throw new Error("Method not implemented.");
  }
  insertData(offset: number, data: string): void {
    throw new Error("Method not implemented.");
  }
  replaceData(offset: number, count: number, data: string): void {
    throw new Error("Method not implemented.");
  }
  substringData(offset: number, count: number): string {
    throw new Error("Method not implemented.");
  }
  baseURI!: string;
  childNodes!: NodeListOf<ChildNode>;
  firstChild!: ChildNode | null;
  isConnected!: boolean;
  lastChild!: ChildNode | null;
  nextSibling!: ChildNode | null;
  nodeName!: string;
  nodeType!: number;
  nodeValue!: string | null;
  parentElement!: HTMLElement | null;
  parentNode!: ParentNode | null;
  previousSibling!: ChildNode | null;
  textContent!: string | null;
  appendChild<T extends Node>(node: T): T {
    throw new Error("Method not implemented.");
  }
  cloneNode(deep?: boolean): Node {
    throw new Error("Method not implemented.");
  }
  compareDocumentPosition(other: Node): number {
    throw new Error("Method not implemented.");
  }
  contains(other: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  getRootNode(options?: GetRootNodeOptions): Node {
    throw new Error("Method not implemented.");
  }
  hasChildNodes(): boolean {
    throw new Error("Method not implemented.");
  }
  insertBefore<T extends Node>(node: T, child: Node | null): T {
    throw new Error("Method not implemented.");
  }
  isDefaultNamespace(namespace: string | null): boolean {
    throw new Error("Method not implemented.");
  }
  isEqualNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  isSameNode(otherNode: Node | null): boolean {
    throw new Error("Method not implemented.");
  }
  lookupNamespaceURI(prefix: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  lookupPrefix(namespace: string | null): string | null {
    throw new Error("Method not implemented.");
  }
  normalize(): void {
    throw new Error("Method not implemented.");
  }
  removeChild<T extends Node>(child: T): T {
    throw new Error("Method not implemented.");
  }
  replaceChild<T extends Node>(node: Node, child: T): T {
    throw new Error("Method not implemented.");
  }
  ELEMENT_NODE!: 1;
  ATTRIBUTE_NODE!: 2;
  TEXT_NODE!: 3;
  CDATA_SECTION_NODE!: 4;
  ENTITY_REFERENCE_NODE!: 5;
  ENTITY_NODE!: 6;
  PROCESSING_INSTRUCTION_NODE!: 7;
  COMMENT_NODE!: 8;
  DOCUMENT_NODE!: 9;
  DOCUMENT_TYPE_NODE!: 10;
  DOCUMENT_FRAGMENT_NODE!: 11;
  NOTATION_NODE!: 12;
  DOCUMENT_POSITION_DISCONNECTED!: 1;
  DOCUMENT_POSITION_PRECEDING!: 2;
  DOCUMENT_POSITION_FOLLOWING!: 4;
  DOCUMENT_POSITION_CONTAINS!: 8;
  DOCUMENT_POSITION_CONTAINED_BY!: 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC!: 32;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean
  ): void {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void {
    throw new Error("Method not implemented.");
  }
  after(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  before(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
  replaceWith(...nodes: (Node | string)[]): void {
    throw new Error("Method not implemented.");
  }
  nextElementSibling!: Element | null;
  previousElementSibling!: Element | null;
  renderObject!: T;
  getMapContext(): IMapContext<T> {
    throw new Error("Method not implemented.");
  }
  getRootRenderObject(): IMapRenderObject<T> {
    throw new Error("Method not implemented.");
  }
  getRenderObject(): T {
    throw new Error("Method not implemented.");
  }
  disposeRenderObject(): void {
    throw new Error("Method not implemented.");
  }
}

export class MapContext<T> implements IMapContext<T> {
  rootRenderObject!: T;
  getRootRenderObject(): IMapRenderObject<T> {
    throw new Error("Method not implemented.");
  }
  disposeRootRenderObject(): void {
    throw new Error("Method not implemented.");
  }
  renderObject!: T;
  getMapContext(): IMapContext<T> {
    throw new Error("Method not implemented.");
  }
  getRenderObject(): T {
    throw new Error("Method not implemented.");
  }
  disposeRenderObject(): void {
    throw new Error("Method not implemented.");
  }

  constructor() {}
}

export class MapRenderObject<T> implements IMapRenderObject<T> {
  rootRenderObject!: T;
  getRootRenderObject(): IMapRenderObject<T> {
    throw new Error("Method not implemented.");
  }
  disposeRootRenderObject(): void {
    throw new Error("Method not implemented.");
  }
  renderObject!: T;
  getMapContext(): IMapContext<T> {
    throw new Error("Method not implemented.");
  }
  getRenderObject(): T {
    throw new Error("Method not implemented.");
  }
  disposeRenderObject(): void {
    throw new Error("Method not implemented.");
  }
}
