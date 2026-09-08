(() => {
  const host = location.hostname;
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isPages = host.endsWith(".github.io");
  const user = isPages ? host.split(".")[0] : "YOUR_GITHUB_USERNAME";
  const repo = isPages ? (pathParts[0] || "ArchDeck") : "ArchDeck";
  const repoUrl = `https://github.com/${user}/${repo}`;
  const releasesUrl = `${repoUrl}/releases/latest`;

  ["repo-link","footer-repo"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = repoUrl;
  });
  ["download-link","release-link"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = releasesUrl;
  });

  document.querySelectorAll(".shot").forEach(shot => {
    shot.addEventListener("click", () => {
      const dlg = document.getElementById("lightbox");
      const img = document.getElementById("lightbox-image");
      img.src = shot.dataset.image;
      img.alt = shot.querySelector("img")?.alt || "ArchDeck screenshot";
      dlg.showModal();
    });
  });

  const dlg = document.getElementById("lightbox");
  document.getElementById("lightbox-close")?.addEventListener("click", () => dlg.close());
  dlg?.addEventListener("click", e => {
    const r = dlg.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside) dlg.close();
  });
})();
