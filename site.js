// Keep bookmarks to sections of the original one-page site working.
const formerSections = new Map([
  ["#experience", "experience.html"],
  ["#blogs", "blog.html"]
]);

const destination = formerSections.get(window.location.hash);
if (destination) window.location.replace(destination);
