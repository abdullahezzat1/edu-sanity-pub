import { builder } from "../Client";

export function getImageUrlBuilder(imageSource) {
  return builder.image(imageSource);
}
