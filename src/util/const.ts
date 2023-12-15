import { Connection, PublicKey } from "@solana/web3.js";
import { Program } from "@coral-xyz/anchor";
import { IDL, ledSwitch } from "./led_switch";

export const CONNECTION = new Connection(process.env.NEXT_PUBLIC_RPC ? process.env.NEXT_PUBLIC_RPC : 'https://api.devnet.solana.com', {
  wsEndpoint: process.env.NEXT_PUBLIC_WSS_RPC ? process.env.NEXT_PUBLIC_WSS_RPC : "wss://api.devnet.solana.com",
  commitment: 'confirmed'
});
const PROGRAM_ID = process.env.PROGRAM_ID || "F1jhXp9qCRWfUjEj1Gsw48zrfAtE78FtWxT6grQPy2L1";
export const LED_SWITCH_PROGRAM_ID = new PublicKey(PROGRAM_ID);

export const LED_SWITCH_PROGRAM = new Program<ledSwitch>(IDL, LED_SWITCH_PROGRAM_ID, { connection: CONNECTION })

export const LED_SWITCH_PDA = PublicKey.findProgramAddressSync(
  [
    Buffer.from("led-switch"),
  ],
  LED_SWITCH_PROGRAM_ID,
)[0];