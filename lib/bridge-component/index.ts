import { createApp } from "../runtime";

export function MapComponent(props, { slots }) {
  console.log(slots);
  return {
    onMounted() {
      const app = createApp(slots.default);
    },
    
  };
}
