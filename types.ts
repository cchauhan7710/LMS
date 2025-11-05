// Fix: Augment the global Window interface to include `__initial_auth_token`.
// This informs the TypeScript compiler about this custom property, resolving type errors across the application.
declare global {
  interface Window {
    __initial_auth_token?: string;
  }
}

// This empty export ensures the file is treated as a module, allowing for global augmentation.
export {};
