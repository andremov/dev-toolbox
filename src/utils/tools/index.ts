// Re-export types
export type { Tool, Tag } from "../types";
export { tagColorMap } from "../types";

// Re-export all tool categories
export { fontsAndTypography } from "./fonts-and-typography";
export { designAndUI } from "./design-and-ui";
export { aiAndData } from "./ai-and-data";
export { documentationAndLearning } from "./documentation-and-learning";
export { audioAndVideo } from "./audio-and-video";
export { developmentLibrariesAndFrameworks } from "./development-libraries-and-frameworks";
export { openSourceToolsAndUtilities } from "./open-source-tools-and-utilities";
export { productivityAndUtilities } from "./productivity-and-utilities";

// Combined data for backward compatibility
import { fontsAndTypography } from "./fonts-and-typography";
import { designAndUI } from "./design-and-ui";
import { aiAndData } from "./ai-and-data";
import { documentationAndLearning } from "./documentation-and-learning";
import { audioAndVideo } from "./audio-and-video";
import { developmentLibrariesAndFrameworks } from "./development-libraries-and-frameworks";
import { openSourceToolsAndUtilities } from "./open-source-tools-and-utilities";
import { productivityAndUtilities } from "./productivity-and-utilities";
import type { Tool } from "../types";

export const data: Tool[] = [
  ...fontsAndTypography,
  ...designAndUI,
  ...aiAndData,
  ...documentationAndLearning,
  ...audioAndVideo,
  ...developmentLibrariesAndFrameworks,
  ...openSourceToolsAndUtilities,
  ...productivityAndUtilities,
];

export default data;
