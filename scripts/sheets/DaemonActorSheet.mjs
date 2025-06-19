import { TEMPLATES } from "../templates.mjs";

export class DaemonActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return TEMPLATES.DAEMON_ACTOR_SHEET;
  }

  /** @override */
  async getData() {
    const context = await super.getData();

    return context;
  }
}
