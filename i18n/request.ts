import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "./config";
import enMessages from "@/messages/en.json";

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: enMessages,
  };
});
