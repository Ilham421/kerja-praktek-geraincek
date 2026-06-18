declare module "aos" {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    easing?: string;
    offset?: number;
    delay?: number;
    anchor?: string;
    placement?: string;
  }
  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
}

declare module "aos/dist/aos.css";