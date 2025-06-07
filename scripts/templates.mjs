import { ID } from "./consts.mjs";

export const TEMPLATES = {
  POKEMON_ACTOR_SHEET: `systems/${ID}/scripts/sheets/pokemon-actor-sheet.hbs`,
  TRAINER_ACTOR_SHEET: `systems/${ID}/scripts/sheets/trainer-actor-sheet.hbs`,
  TRAINER_ACTOR_SHEET__BIOGRAPHY: `systems/${ID}/scripts/sheets/trainer-actor-sheet_biography.hbs`,
  TRAINER_ACTOR_SHEET__ATTRIBUTES: `systems/${ID}/scripts/sheets/trainer-actor-sheet_attributes.hbs`,
};

export async function initializeTemplatesAndDialogs() {
  loadTemplates(Object.values(TEMPLATES));
}
