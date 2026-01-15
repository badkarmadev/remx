# Utilities

A collection of useful helper classes.

## Flexbox

Utilities for controlling flexbox behavior.

| Class | Description |
| :--- | :--- |
| `.flex-grow` / `.flex-grow-0` | Controls flex grow. |
| `.flex-shrink` / `.flex-shrink-0` | Controls flex shrink. |
| `.flex-basis` / `.flex-basis-0` | Controls flex basis. |
| `.flex-row` / `.flex-row-reverse` | Sets flex direction to row. |
| `.flex-column` / `.flex-column-reverse` | Sets flex direction to column. |
| `.flex-nowrap` | Sets flex wrap to nowrap. |

### Alignment

| Class | Property |
| :--- | :--- |
| `.justify-content-{start\|center\|end\|between\|evenly}` | `justify-content` |
| `.align-content-{start\|center\|end\|between\|evenly}` | `align-content` |
| `.align-items-{start\|center\|end\|between\|evenly}` | `align-items` |
| `.justify-items-{start\|center\|end\|between\|evenly}` | `justify-items` |
| `.align-self-{start\|center\|end\|between\|evenly}` | `align-self` |
| `.justify-self-{start\|center\|end\|between\|evenly}` | `justify-self` |


## Borders

Utilities for controlling borders.

| Class | Description |
| :--- | :--- |
| `.border` | Default border (1px solid). |
| `.border-{dashed\|dotted\|none}` | Border style. |
| `.border-{side}` | 1px border on specific side (left, right, top, bottom). |
| `.border-{0-3}` | Border width (0px, 1px, 2px, 3px). |
| `.border-{side}-{0-3}` | Border width on specific side. |

## Border Radius


Utilities for controlling the `border-radius` property.

| Class | Description |
| :--- | :--- |
| `.rounded` | Default radius (size-m). |
| `.rounded-none` | 0 radius. |
| `.rounded-full` | 100% radius. |
| `.rounded-pill` | 9999px radius. |
| `.rounded-circle` | 50% radius. |
| `.rounded-{size}` | Sets radius based on size scale. |

Available sizes: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`.

## Backdrop Blur

Utilities for controlling the `backdrop-filter: blur()` property.

| Class | Description |
| :--- | :--- |
| `.backdrop-blur` | Default blur (base). |
| `.backdrop-blur-none` | No blur. |
| `.backdrop-blur-{size}` | Sets blur radius based on size scale. |

Available sizes: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`.

## Line Clamp

Utilities for limiting text to a specific number of lines.

| Class | Description |
| :--- | :--- |
| `.line-clamp-{1-10}` | Limits text to 1-10 lines. |
| `.line-clamp-none` | Removes line clamp. |

## Overflow

Utilities for controlling the `overflow` property.

| Class | Value |
| :--- | :--- |
| `.overflow-hidden` | `hidden` |
| `.overflow-auto` | `auto` |
| `.overflow-scroll` | `scroll` |
| `.overflow-visible` | `visible` |

## Object Fit

Utilities for controlling the `object-fit` property.

| Class | Value |
| :--- | :--- |
| `.object-fit-contain` | `contain` |
| `.object-fit-cover` | `cover` |
| `.object-fit-fill` | `fill` |
| `.object-fit-none` | `none` |
| `.object-fit-scale-down` | `scale-down` |

## Cursor

Utilities for controlling the `cursor` property.

| Class | Value |
| :--- | :--- |
| `.cursor-auto` | `auto` |
| `.cursor-default` | `default` |
| `.cursor-pointer` | `pointer` |
| `.cursor-wait` | `wait` |
| `.cursor-help` | `help` |
| `.cursor-not-allowed` | `not-allowed` |

## User Select

Utilities for controlling the `user-select` property.

| Class | Value |
| :--- | :--- |
| `.select-none` | `none` |
| `.select-all` | `all` |
| `.select-auto` | `auto` |

## Pointer Events

Utilities for controlling the `pointer-events` property.

| Class | Value |
| :--- | :--- |
| `.pointer-events-none` | `none` |
| `.pointer-events-auto` | `auto` |

## Order

Utilities for controlling the `order` property of flex/grid items.

| Class | Value |
| :--- | :--- |
| `.order-{1-12}` | `1` to `12` |
