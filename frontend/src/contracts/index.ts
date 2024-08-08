import Text from "./Text.json";

const AddressPrefix: Record<string, string> = {
  local: "",
  sepolia: "sepolia",
};

function createProxy(obj: any) {
  return new Proxy(obj, {
    get(_, name) {
      let key = name;

      if (name === "address" && process.env.NODE_ENV) {
        const prefix = AddressPrefix[process.env.NODE_ENV];
        key = [prefix, key].filter(Boolean).join("_");
      }

      return obj[key as keyof typeof obj];
    },
  });
}

export default {
  Text: createProxy({
    address: "0xC6bA8C3233eCF65B761049ef63466945c362EdD2",
    sepolia_Address: "0x9Fc8e9DE662781Acd1F7dBcD8E83F87A62E285F4",
    ...Text,
  }),
} as const;
