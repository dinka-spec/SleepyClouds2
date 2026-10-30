const roles = [
  {title:"🌷 Обычные роли", icon:"🌷", items:[
    ["🫧","Cloudy","1 000","99 ₽"],["🌙","Moonlight","1 500","149 ₽"],["💤","Sleepy","2 000","179 ₽"],["🌸","Dreamy","2 500","199 ₽"],["🩵","Blue Hour","3 000","229 ₽"]
  ]},
  {title:"🌌 Редкие роли", icon:"🌌", items:[
    ["☁️","Dreamcore","4 000","299 ₽"],["🪞","Weirdcore","5 000","349 ₽"],["🪽","Angelcore","6 000","399 ₽"],["🎀","Pastel Dream","7 000","449 ₽"],["🚪","Backrooms","8 000","499 ₽"]
  ]},
  {title:"🌙 Особые роли", icon:"🌙", items:[
    ["🧸","Nostalgia","10 000","549 ₽"],["🌫️","Liminal","12 000","599 ₽"],["🌌","Dreamscape","15 000","649 ₽"],["🪐","Cosmic","18 000","699 ₽"],["💤","Lucid Dreamer","22 000","799 ₽"]
  ]},
  {title:"👑 Элитные роли", icon:"👑", items:[
    ["🗝️","Dream Keeper","28 000","899 ₽"],["🦢","Ethereal","35 000","999 ₽"],["🌑","Void","45 000","1 099 ₽"],["🌠","Dreamwalker","55 000","1 299 ₽"],["👑","Dream Royal","70 000","1 499 ₽"],["💎","VIP","100 000","1 799 ₽"]
  ]},
  {title:"🎨 Кастомная роль", icon:"🎨", items:[
    ["🎨","Кастомная роль","40 000","999 ₽"]
  ]}
];

const container = document.getElementById("role-groups");
roles.forEach((group, index) => {
  const section = document.createElement("section");
  section.className = "role-group";
  section.style.animationDelay = `${index * 90}ms`;
  const title = document.createElement("h3");
  title.className = "group-title";
  title.innerHTML = `<span class="group-icon">${group.icon}</span>${group.title.replace(group.icon,"").trim()}`;
  const list = document.createElement("div");
  list.className = "role-list";
  group.items.forEach(([emoji,name,coins,rubles]) => {
    const card = document.createElement("article");
    card.className = "role-card";
    const roleName = document.createElement("div");
    roleName.className = "role-name";
    roleName.innerHTML = `<span>${emoji}</span>${name}`;
    const prices = document.createElement("div");
    prices.className = "role-prices";
    prices.innerHTML = `<span class="price">${coins} ☁</span><span class="price cash">${rubles}</span>`;
    card.append(roleName, prices);
    list.append(card);
  });
  section.append(title,list);
  container.append(section);
});

function showPage(page) {
  document.querySelectorAll(".page").forEach(el => el.classList.remove("active"));
  document.getElementById(page).classList.add("active");
  document.querySelectorAll(".nav-link").forEach(el => el.classList.toggle("active", el.dataset.page === page));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(el => {
  el.addEventListener("click", () => showPage(el.dataset.page));
});
