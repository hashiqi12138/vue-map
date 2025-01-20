export interface MapPlugin {
  onCreate(): void;
  onDestroy(): void;
  onUpdate(): void;
  onRemoveNode(): void;
  onAppendNode(): void;
}
