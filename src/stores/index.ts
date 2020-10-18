import { Production } from "./production";

export const stores = {
  production: new Production()
};

(window as any).stores = stores