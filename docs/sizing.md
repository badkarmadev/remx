# Sizing

Utilities for controlling the width, height, and aspect ratio of elements.

## Width

Utilities for setting the `width`, `max-width`, and `min-width` properties.

| Class | Description |
| :--- | :--- |
| `.w-auto` | `width: auto` |
| `.w-full` / `.w-100` | `width: 100%` |
| `.w-fit` | `width: fit-content` |
| `.w-max` | `width: max-content` |
| `.w-min` | `width: min-content` |
| `.w-{size}` | Sets width based on size scale. |
| `.max-w-{size}` | Sets max-width based on size scale. |
| `.min-w-{size}` | Sets min-width based on size scale. |

Available sizes: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`.

## Height

Utilities for setting the `height`, `max-height`, and `min-height` properties.

| Class | Description |
| :--- | :--- |
| `.h-auto` | `height: auto` |
| `.h-full` / `.h-100` | `height: 100%` |
| `.h-fit` | `height: fit-content` |
| `.h-max` | `height: max-content` |
| `.h-min` | `height: min-content` |
| `.h-{size}` | Sets height based on size scale. |
| `.max-h-{size}` | Sets max-height based on size scale. |
| `.min-h-{size}` | Sets min-height based on size scale. |

Available sizes: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`.

## Aspect Ratio

Utilities for controlling the aspect ratio of elements.

| Class | Ratio |
| :--- | :--- |
| `.aspect-square` | `1 / 1` |
| `.aspect-16-9` | `16 / 9` |
| `.aspect-9-16` | `9 / 16` |
| `.aspect-4-3` | `4 / 3` |
| `.aspect-3-4` | `3 / 4` |
| `.aspect-2-1` | `2 / 1` |
| `.aspect-1-2` | `1 / 2` |
| `.aspect-21-9` | `21 / 9` |
| `.aspect-9-21` | `9 / 21` |

### Responsive Aspect Ratio

Format: `.aspect-{breakpoint}-{ratio}`
Example: `.aspect-m-16-9`
