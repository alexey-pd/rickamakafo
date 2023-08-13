import { createEffect, restore, sample } from "effector";
import { createGate } from "effector-react";

import wretch from "wretch";

interface Char {
  name: string;
  url: string;
  image: string;
  episode: string[];
  created: string;
}

const readFx = createEffect<void, Char[], Error>();

export const $character = restore(readFx.doneData, []);

const api = wretch("https://rickandmortyapi.com/api/").resolve((r) => r.json());

const characters = async () => {
  const res = (await api.get("character")) as {
    results: Char[];
    info: Record<string, number | string | null>;
  };

  return res.results;
};

export const AppGate = createGate();

readFx.use(characters);

sample({
  clock: AppGate.open,
  target: readFx
});
