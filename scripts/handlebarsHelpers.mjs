export default function registerHandlebarsHelpers() {
  Handlebars.registerHelper("attributeRadios", function (count, name, options) {
    const checked = +options.hash["checked"] || null;

    const html = [...Array(count)].reduce((html, _, index) => {
      const value = index + 1;
      const isChecked = checked === value;
      return `${html}<input type="radio" name="${name}" value="${value}" ${
        isChecked ? "checked" : ""
      }>`;
    }, "");
    return new Handlebars.SafeString(html);
  });
}
