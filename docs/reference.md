# Class Reference

This document lists all available classes in `remx.css`.

> **Note on Responsiveness:**
> Many utilities support responsive prefixes using the format `.{prefix}-{breakpoint}-{value}`.
> Available breakpoints: `xxs` (360px), `xs` (480px), `s` (576px), `m` (768px), `l` (992px), `xl` (1200px), `xxl` (1400px), `3xl` (1600px), `4xl` (1920px), `5xl` (2560px).

## aspect-ratio.css

| Class | Description |
| :--- | :--- |
| `.aspect-{ratio}` | Sets aspect ratio. Ratios: `21-9`, `16-9`, `9-16`, `9-21`, `4-3`, `3-4`, `2-1`, `1-2`, `square` (1/1). |

## container.css

| Class | Description |
| :--- | :--- |
| `.container` | Centered container with max-width based on breakpoint. |

## display.css

| Class | Description |
| :--- | :--- |
| `.block`, `.d-block` | `display: block` |
| `.inline`, `.d-inline` | `display: inline` |
| `.inline-block`, `.d-inline-block` | `display: inline-block` |
| `.inline-flex`, `.d-inline-flex` | `display: inline-flex` |
| `.flex`, `.d-flex` | `display: flex` |
| `.grid`, `.d-grid` | `display: grid` |
| `.d-none` | `display: none` |

## gap.css

| Class | Description |
| :--- | :--- |
| `.gap-{size}` | Sets gap size. Sizes: `xxs` through `5xl`. |

## layout.css

| Class | Description |
| :--- | :--- |
| `.grid-row` | Sets `display: grid` with 12 columns. |
| `.col-{1-12}` | Spans 1 to 12 columns. |
| `.col-auto` | Spans auto columns. |

## margin.css

| Class | Description |
| :--- | :--- |
| `.m-{size}` | Margin on all sides. |
| `.mt-{size}` | Margin top. |
| `.mb-{size}` | Margin bottom. |
| `.ms-{size}`, `.ml-{size}` | Margin start (left). |
| `.me-{size}`, `.mr-{size}` | Margin end (right). |
| `.mx-{size}` | Margin horizontal (left & right). |
| `.my-{size}` | Margin vertical (top & bottom). |

## padding.css

| Class | Description |
| :--- | :--- |
| `.p-{size}` | Padding on all sides. |
| `.pt-{size}` | Padding top. |
| `.pb-{size}` | Padding bottom. |
| `.ps-{size}`, `.pl-{size}` | Padding start (left). |
| `.pe-{size}`, `.pr-{size}` | Padding end (right). |
| `.px-{size}` | Padding horizontal (left & right). |
| `.py-{size}` | Padding vertical (top & bottom). |

## positioning.css

| Class | Description |
| :--- | :--- |
| `.position-{type}` | `static`, `relative`, `absolute`, `fixed`, `sticky`. |
| `.top-{size}` | Top offset. Sizes: `0`, `xxs` to `5xl`. |
| `.bottom-{size}` | Bottom offset. Sizes: `0`, `xxs` to `5xl`. |
| `.left-{size}` | Left offset. Sizes: `0`, `xxs` to `5xl`. |
| `.right-{size}` | Right offset. Sizes: `0`, `xxs` to `5xl`. |

## sizing.css

| Class | Description |
| :--- | :--- |
| `.w-{size}` | Width. Sizes: `xxs` to `5xl`, `auto`, `full`, `100`, `fit`, `max`, `min`. |
| `.h-{size}` | Height. Sizes: `xxs` to `5xl`, `auto`, `full`, `100`, `fit`, `max`, `min`. |
| `.max-w-{size}` | Max-width. Sizes: `xxs` to `5xl`. |
| `.min-w-{size}` | Min-width. Sizes: `xxs` to `5xl`. |
| `.max-h-{size}` | Max-height. Sizes: `xxs` to `5xl`. |
| `.min-h-{size}` | Min-height. Sizes: `xxs` to `5xl`. |

## typography.css

| Class | Description |
| :--- | :--- |
| `.fs-{size}` | Font size. Sizes: `xxs` to `5xl`. |
| `.fw-{weight}` | Font weight. Weights: `100` to `900`. |
| `.text-{align}` | `left`, `center`, `right`, `justify`. |
| `.lowercase`, `.uppercase`, `.capitalize` | Text transform. |
| `.text-decoration-none`, `.underline`, `.line-through` | Text decoration. |
| `.line-height-{size}` | Line height. Sizes: `xxs` to `5xl`. |
| `.word-break-{type}` | `normal`, `words`, `all`, `keep`. |
| `.line-break-{type}` | `normal`, `words`, `all`, `keep`. |
| `.white-space-{type}` | `normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`. |

## utilities.css

| Class | Description |
| :--- | :--- |
| **Borders** |
| `.border` | Default border (1px solid currentcolor). |
| `.border-{style}` | `dashed`, `dotted`, `none`. |
| `.border-{side}` | `left`, `right`, `top`, `bottom` (1px width). |
| `.border-{width}` | `0`, `1`, `2`, `3` (all sides). |
| `.border-{side}-{width}` | Specific side and width (e.g. `border-top-2`). |
| **Flexbox** |
| `.flex-{wrap}` | `wrap`, `nowrap`. |
| `.flex-{grow|shrink}` | `grow`, `grow-0`, `shrink`, `shrink-0`. |
| `.flex-{basis}` | `basis`, `basis-0`. |
| `.flex-{direction}` | `row`, `row-reverse`, `column`, `column-reverse`. |
| `.justify-content-{align}` | `start`, `center`, `end`, `between`, `evenly`. |
| `.align-content-{align}` | `start`, `center`, `end`, `between`, `evenly`. |
| `.align-items-{align}` | `start`, `center`, `end`, `between`, `evenly`. |
| `.justify-items-{align}` | `start`, `center`, `end`, `between`, `evenly`. |
| `.align-self-{align}` | `start`, `center`, `end`, `between`, `evenly`. |
| `.justify-self-{align}` | `start`, `center`, `end`, `between`, `evenly`. |
| **Cursor & User Select** |
| `.cursor-{type}` | `auto`, `default`, `pointer`, `wait`, `help`, `not-allowed`. |
| `.select-{type}` | `none`, `all`, `auto`. |
| `.pointer-events-{type}` | `none`, `auto`. |
| **Overflow** |
| `.overflow-{type}` | `hidden`, `auto`, `scroll`, `visible`. |
| **Object Fit** |
| `.object-fit-{type}` | `contain`, `cover`, `fill`, `none`, `scale-down`. |
| **Order & Z-Index** |
| `.order-{1-12}` | Flex/grid order. |
| `.z-{0-10}` | Z-index 0 to 100 (steps of 10). |
| `.z-auto`, `.z-max` | Auto or max z-index. |
| **Line Clamp** |
| `.line-clamp-{1-10}` | Limit text lines. |
| `.line-clamp-none` | Reset line clamp. |
| **Radius** |
| `.rounded` | Default radius (m). |
| `.rounded-{size}` | `none`, `full`, `pill`, `circle`, `xxs` to `5xl`. |
| **Backdrop Blur** |
| `.backdrop-blur` | Default blur (base). |
| `.backdrop-blur-{size}` | `none`, `xxs` to `5xl`. |
| **Opacity** |
| `.opacity-{value}` | `0`, `25`, `50`, `75`, `100`. |
| **Visibility** |
| `.visible` | `visibility: visible` |
| `.invisible`, `.hidden` | `visibility: hidden` |
| `.sr-only` | Screen reader only (hidden). |
