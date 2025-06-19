import { ClassExtender } from "../utils.mjs";
import { DaemonActorSheet } from "./DaemonActorSheet.mjs";
import { WitchActorSheet } from "./WitchActorSheet.mjs";

export class LCNActorSheet extends ActorSheet {
  clx = new ClassExtender(
    () => this,
    () => this.actor.type,
    { witch: WitchActorSheet, daemon: DaemonActorSheet }
  );

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["lcn", "actor-sheet"],
      width: 500,
      height: "auto",
      tabs: [
        {
          navSelector: ".tab-menu",
          contentSelector: ".tab-contents",
          initial: "attributes",
        },
      ],
    });
  }

  /** @override */
  get template() {
    return this.clx.extends((ex) => ex.template);
  }

  /** @override */
  async getData() {
    return this.clx.extends((ex) => ex.getData)();
  }

  async _renderOuter() {
    const html = await super._renderOuter();
    const header = html[0].querySelector(".window-header");

    // Adjust header buttons.
    header.querySelectorAll(".header-button").forEach((btn) => {
      const label = btn.querySelector(":scope > i").nextSibling;
      btn.dataset.tooltip = label.textContent;
      btn.setAttribute("aria-label", label.textContent);
      btn.addEventListener("dblclick", (event) => event.stopPropagation());
      label.remove();
    });

    // Document UUID link.
    const firstButton = header.querySelector(".header-button");
    const idLink = header.querySelector(".document-id-link");
    if (idLink) {
      firstButton?.insertAdjacentElement("beforebegin", idLink);
      idLink.classList.add("pseudo-header-button");
      idLink.dataset.tooltipDirection = "DOWN";
    }

    return html;
  }
}
