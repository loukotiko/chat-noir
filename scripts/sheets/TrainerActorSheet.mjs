import { ATTRIBUTES, RANKS, SKILLS, SKILLS_GROUPS } from "../localizedData.mjs";
import { TEMPLATES } from "../templates.mjs";

export class TrainerActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return TEMPLATES.TRAINER_ACTOR_SHEET;
  }

  /** @override */
  async getData() {
    const context = await super.getData();

    context.RANKS = RANKS;

    context.ATTRIBUTES = {
      base: {
        strength: ATTRIBUTES.strength,
        dexterity: ATTRIBUTES.dexterity,
        vitality: ATTRIBUTES.vitality,
        insight: ATTRIBUTES.insight,
      },
      social: {
        tough: ATTRIBUTES.tough,
        cool: ATTRIBUTES.cool,
        beauty: ATTRIBUTES.beauty,
        cute: ATTRIBUTES.cute,
        clever: ATTRIBUTES.clever,
      },
    };

    context.SKILLS_GROUPS = SKILLS_GROUPS;

    context.SKILLS = {
      fight: {
        brawl: SKILLS.brawl,
        throw: SKILLS.throw,
        evasion: SKILLS.evasion,
        weapons: SKILLS.weapons,
      },
      survival: {
        alert: SKILLS.alert,
        athletic: SKILLS.athletic,
        nature: SKILLS.nature,
        stealth: SKILLS.stealth,
      },
      social: {
        allure: SKILLS.allure,
        etiquette: SKILLS.etiquette,
        intimidate: SKILLS.intimidate,
        perform: SKILLS.perform,
      },
      knowledge: {
        crafts: SKILLS.crafts,
        lore: SKILLS.lore,
        medicine: SKILLS.medicine,
        science: SKILLS.science,
      },
    };

    // for parts
    context.TEMPLATES = TEMPLATES;

    // put these in compendiums items
    context.NATURES = { quirky: "Quirky" };

    return context;
  }
}
