# Spacing

Utilities for controlling margins, paddings, and gaps.

## Notation

The classes are named using the format: `{property}{side}-{size}` for base classes, and `{property}{side}-{breakpoint}-{size}` for responsive classes.

### Property
- `m`: Margin
- `p`: Padding
- `gap`: Gap (for flex/grid containers)

### Side
- *empty*: All sides
- `t`: Top
- `b`: Bottom
- `s`: Start (Left in LTR)
- `e`: End (Right in LTR)
- `x`: Horizontal (Start + End)
- `y`: Vertical (Top + Bottom)

### Size
- `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`
- Corresponds to the size scale variables (`--size-*`).

## Margin

| Class | Description |
| :--- | :--- |
| `.m-{size}` | Margin on all sides. |
| `.mt-{size}` | Margin top. |
| `.mb-{size}` | Margin bottom. |
| `.ms-{size}` | Margin start (left). |
| `.me-{size}` | Margin end (right). |
| `.mx-{size}` | Margin horizontal. |
| `.my-{size}` | Margin vertical. |

### Responsive Margin

Format: `.m{side}-{breakpoint}-{size}`
Example: `.mt-m-xl` (Margin top extra large on medium screens and up)

## Padding

| Class | Description |
| :--- | :--- |
| `.p-{size}` | Padding on all sides. |
| `.pt-{size}` | Padding top. |
| `.pb-{size}` | Padding bottom. |
| `.ps-{size}` | Padding start (left). |
| `.pe-{size}` | Padding end (right). |
| `.px-{size}` | Padding horizontal. |
| `.py-{size}` | Padding vertical. |

### Responsive Padding

Format: `.p{side}-{breakpoint}-{size}`
Example: `.px-l-s` (Padding horizontal small on large screens and up)

## Gap

Used for `flex` and `grid` layouts.

| Class | Description |
| :--- | :--- |
| `.gap-{size}` | Gap between items. |

### Responsive Gap

Format: `.gap-{breakpoint}-{size}`
Example: `.gap-s-m` (Gap medium on small screens and up)
