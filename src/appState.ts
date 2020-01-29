import { AppState } from "./types";
import { getDateTime } from "./utils";

const DEFAULT_PROJECT_NAME = `excalidraw-${getDateTime()}`;

export function getDefaultAppState(): AppState {
  return {
    draggingElement: null,
    resizingElement: null,
    editingElement: null,
    elementType: "selection",
    elementLocked: false,
    exportBackground: true,
    currentItemStrokeColor: "#455a64",
    currentItemBackgroundColor: "#cfd8dc",
    currentItemFillStyle: "hachure",
    currentItemStrokeWidth: 1,
    currentItemRoughness: 1,
    currentItemOpacity: 100,
    currentItemFont: "20px PatrickHandSC",
    viewBackgroundColor: "#ffffff",
    scrollX: 0,
    scrollY: 0,
    cursorX: 0,
    cursorY: 0,
    name: DEFAULT_PROJECT_NAME,
  };
}
