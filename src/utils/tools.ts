// This file is kept for backward compatibility
// All functionality has been moved to the modular structure in ./tools/

// Types
export type { Tool, Tag } from "./types";
export { tagColorMap } from "./types";

// Individual tool categories
export { fontsAndTypography } from "./tools/fonts-and-typography";
export { designAndUI } from "./tools/design-and-ui";
export { aiAndData } from "./tools/ai-and-data";
export { documentationAndLearning } from "./tools/documentation-and-learning";
export { audioAndVideo } from "./tools/audio-and-video";
export { developmentLibrariesAndFrameworks } from "./tools/development-libraries-and-frameworks";
export { openSourceToolsAndUtilities } from "./tools/open-source-tools-and-utilities";
export { productivityAndUtilities } from "./tools/productivity-and-utilities";

// Combined data array for backward compatibility
import { fontsAndTypography } from "./tools/fonts-and-typography";
import { designAndUI } from "./tools/design-and-ui";
import { aiAndData } from "./tools/ai-and-data";
import { documentationAndLearning } from "./tools/documentation-and-learning";
import { audioAndVideo } from "./tools/audio-and-video";
import { developmentLibrariesAndFrameworks } from "./tools/development-libraries-and-frameworks";
import { openSourceToolsAndUtilities } from "./tools/open-source-tools-and-utilities";
import { productivityAndUtilities } from "./tools/productivity-and-utilities";
import type { Tool } from "./types";

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
