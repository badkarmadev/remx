# Layout

Utilities for controlling the layout of elements, including grid system, containers, display, positioning, and z-index.

## Containers

Containers center your content and provide a max-width based on the screen size.

| Class | Description |
| :--- | :--- |
| `.container` | Sets `max-width` based on breakpoints and centers content. |

### Responsive Max-Widths

| Breakpoint | Max-Width Variable | Approx. Width |
| :--- | :--- | :--- |
| `< 480px` | `--container-xxs` | 100% |
| `≥ 480px` | `--container-xs` | 480px |
| `≥ 576px` | `--container-s` | 576px |
| `≥ 768px` | `--container-m` | 720px |
| `≥ 992px` | `--container-l` | 960px |
| `≥ 1200px` | `--container-xl` | 1140px |
| `≥ 1400px` | `--container-xxl` | 1320px |
| `≥ 1600px` | `--container-3xl` | 1440px |
| `≥ 1800px` | `--container-4xl` | 1600px |
| `≥ 2160px` | `--container-5xl` | 1920px |

## Grid System

A 12-column grid system.

| Class | Description |
| :--- | :--- |
| `.grid-row` | Creates a grid container with 12 columns. |
| `.col-1` to `.col-12` | Spans the specified number of columns. |
| `.col-auto` | Spans auto columns. |

### Responsive Columns

Format: `.col-{breakpoint}-{size}`

| Breakpoint | Prefix | Example |
| :--- | :--- | :--- |
| `≥ 360px` | `xxs` | `.col-xxs-6` |
| `≥ 480px` | `xs` | `.col-xs-6` |
| `≥ 576px` | `s` | `.col-s-6` |
| `≥ 768px` | `m` | `.col-m-6` |
| `≥ 992px` | `l` | `.col-l-6` |
| `≥ 1200px` | `xl` | `.col-xl-6` |
| `≥ 1400px` | `xxl` | `.col-xxl-6` |
| `≥ 1600px` | `3xl` | `.col-3xl-6` |
| `≥ 1920px` | `4xl` | `.col-4xl-6` |
| `≥ 2560px` | `5xl` | `.col-5xl-6` |

## Display

Utilities for controlling the `display` property.

| Class | Value |
| :--- | :--- |
| `.d-block` / `.block` | `block` |
| `.d-inline` / `.inline` | `inline` |
| `.d-inline-block` / `.inline-block` | `inline-block` |
| `.d-flex` / `.flex` | `flex` |
| `.d-inline-flex` / `.inline-flex` | `inline-flex` |
| `.d-grid` / `.grid` | `grid` |
| `.d-none` | `none` |

### Responsive Display

Format: `.d-{breakpoint}-{value}`
Example: `.d-m-flex` (Display flex on medium screens and up)

Available breakpoints: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`.

## Positioning

Utilities for controlling the `position` property.

| Class | Value |
| :--- | :--- |
| `.position-static` | `static` |
| `.position-relative` | `relative` |
| `.position-absolute` | `absolute` |
| `.position-fixed` | `fixed` |
| `.position-sticky` | `sticky` |

### Responsive Positioning

Format: `.position-{breakpoint}-{value}`
Example: `.position-m-absolute`

### Top / Right / Bottom / Left

Utilities for positioning elements.

| Class | Value |
| :--- | :--- |
| `.top-0`, `.right-0`, ... | `0` |
| `.top-xxs` ... `.top-5xl` | Based on size scale |
| `.right-xxs` ... `.right-5xl` | Based on size scale |
| `.bottom-xxs` ... `.bottom-5xl` | Based on size scale |
| `.left-xxs` ... `.left-5xl` | Based on size scale |

## Z-Index

Utilities for controlling the `z-index` property.

| Class | Value |
| :--- | :--- |
| `.z-0` to `.z-50` | `0` to `50` |
| `.z-auto` | `auto` |
