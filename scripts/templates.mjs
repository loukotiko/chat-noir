import { ID } from "./consts.mjs";

export const TEMPLATES = {
  DAEMON_ACTOR_SHEET: `systems/${ID}/scripts/sheets/daemon-actor-sheet.hbs`,
  WITCH_ACTOR_SHEET: `systems/${ID}/scripts/sheets/witch-actor-sheet.hbs`,
  WITCH_ACTOR_SHEET__BIOGRAPHY: `systems/${ID}/scripts/sheets/witch-actor-sheet_biography.hbs`,
  WITCH_ACTOR_SHEET__ATTRIBUTES: `systems/${ID}/scripts/sheets/witch-actor-sheet_attributes.hbs`,
};

export async function initializeTemplatesAndDialogs() {
  loadTemplates(Object.values(TEMPLATES));
}
