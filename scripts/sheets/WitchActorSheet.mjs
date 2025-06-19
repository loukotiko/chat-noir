import { TEMPLATES } from "../templates.mjs";

export class WitchActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return TEMPLATES.WITCH_ACTOR_SHEET;
  }

  /** @override */
  async getData() {
    const context = await super.getData();

    context.MENU = {
      attributes: { icon: "fa-thin fa-sparkles" },
      biography: { icon: "fa-thin fa-feather-pointed" },
      daemon: { icon: "fa-thin fa-skull-cow" },
      inventory: { icon: "fa-thin fa-flask-round-potion" },
      spells: { icon: "fa-thin fa-book" },
      effects: { icon: "fa-thin fa-snooze" },
      settings: { icon: "fa-thin fa-cog" },
    };

    // for parts
    context.TEMPLATES = TEMPLATES;

    return context;
  }
}
