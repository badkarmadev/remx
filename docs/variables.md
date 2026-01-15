# Variables

Remx.css uses CSS variables to maintain consistency across the framework. These variables define the sizing scale, font sizes, and container widths.

## Base

| Variable | Value | Description |
| :--- | :--- | :--- |
| `--base` | `1rem` | The base unit for the framework (typically 16px). |

## Size Scale

Used for margins, paddings, gaps, and other sizing utilities.

| Variable | Value | Calculation | Approx. px (if base=16px) |
| :--- | :--- | :--- | :--- |
| `--size-xxs` | `0.25rem` | `base * 0.25` | 4px |
| `--size-xs` | `0.5rem` | `base * 0.5` | 8px |
| `--size-s` | `0.75rem` | `base * 0.75` | 12px |
| `--size-m` | `1rem` | `base * 1` | 16px |
| `--size-l` | `1.25rem` | `base * 1.25` | 20px |
| `--size-xl` | `1.5rem` | `base * 1.5` | 24px |
| `--size-xxl` | `2rem` | `base * 2` | 32px |
| `--size-3xl` | `3rem` | `base * 3` | 48px |
| `--size-4xl` | `4rem` | `base * 4` | 64px |
| `--size-5xl` | `7.5rem` | `base * 7.5` | 120px |

## Font Size Scale

| Variable | Value | Calculation | Approx. px (if base=16px) |
| :--- | :--- | :--- | :--- |
| `--font-size-xxs` | `0.625rem` | `base * 0.625` | 10px |
| `--font-size-xs` | `0.75rem` | `base * 0.75` | 12px |
| `--font-size-s` | `0.875rem` | `base * 0.875` | 14px |
| `--font-size-m` | `1rem` | `base * 1` | 16px |
| `--font-size-l` | `1.25rem` | `base * 1.25` | 20px |
| `--font-size-xl` | `1.5rem` | `base * 1.5` | 24px |
| `--font-size-xxl` | `2rem` | `base * 2` | 32px |
| `--font-size-3xl` | `2.5rem` | `base * 2.5` | 40px |
| `--font-size-4xl` | `3rem` | `base * 3` | 48px |
| `--font-size-5xl` | `4rem` | `base * 4` | 64px |

## Container Widths

| Variable | Value | Description |
| :--- | :--- | :--- |
| `--container-xxs` | `100%` | |
| `--container-xs` | `480px` | |
| `--container-s` | `576px` | |
| `--container-m` | `720px` | |
| `--container-l` | `960px` | |
| `--container-xl` | `1140px` | |
| `--container-xxl` | `1320px` | |
| `--container-3xl` | `1440px` | |
| `--container-4xl` | `1600px` | |
| `--container-5xl` | `1920px` | |

## Fonts

| Variable | Value |
| :--- | :--- |
| `--font` | `system-ui, -apple-system, "Segoe UI", Roboto, ...` |
