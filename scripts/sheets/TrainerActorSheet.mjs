import {
  ATTRIBUTES,
  ATTRIBUTES_SOCIAL,
  RANKS,
  SKILLS_FIGHT,
  SKILLS_KNOWLEDGE,
  SKILLS_SOCIAL,
  SKILLS_SURVIVAL,
} from "../localizedData.mjs";
import { TEMPLATES } from "../templates.mjs";

export class TrainerActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return TEMPLATES.TRAINER_ACTOR_SHEET;
  }

  /** @override */
  async getData() {
    const context = await super.getData();
    context.ATTRIBUTES = ATTRIBUTES;
    context.ATTRIBUTES_SOCIAL = ATTRIBUTES_SOCIAL;
    context.SKILLS_FIGHT = SKILLS_FIGHT;
    context.SKILLS_SURVIVAL = SKILLS_SURVIVAL;
    context.SKILLS_SOCIAL = SKILLS_SOCIAL;
    context.SKILLS_KNOWLEDGE = SKILLS_KNOWLEDGE;

    // for parts
    context.TEMPLATES = TEMPLATES;

    // put these in compendiums items
    context.NATURES = { quirky: "Quirky" };
    context.RANKS = RANKS;

    return context;
  }
}
