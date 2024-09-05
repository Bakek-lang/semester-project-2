export function createCards(listings) {
  const container = document.querySelector("[data-container]");
  container.innerHTML = "";
  for (let i = 0; i < listings.data.length; i++) {
    if (
      !listings.data[i].media ||
      listings.data[i].media.length === 0 ||
      !listings.data[i].media[0].url
    ) {
      continue;
    }

    const card = document.createElement("div");
    card.classList.add(
      "max-w-sm",
      "rounded-xl",
      "bg-white",
      "mt-6",
      "drop-shadow-lg"
    );

    const img = document.createElement("img");
    img.classList.add("w-full", "rounded-t-xl");
    img.src = listings.data[i].media[0].url;
    img.alt = listings.data[i].media[0].alt;

    card.append(img);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("p-4");

    const title = document.createElement("h2");
    title.classList.add("text-2xl", "font-bold", "mb-2");
    title.textContent = listings.data[i].title;

    const description = document.createElement("p");
    description.classList.add("text-gray-700", "mb-4");
    description.textContent = listings.data[i].description;

    contentDiv.append(title, description);

    card.append(contentDiv);

    const grid = document.createElement("div");
    grid.classList.add(
      "grid",
      "grid-cols-2",
      "gap-4",
      "text-left",
      "mb-4",
      "p-4"
    );

    const numberBids = listings.data[i]._count.bids;
    const lastBidAmount =
      numberBids > 0 ? listings.data[i].bids[numberBids - 1].amount : 0;

    const gridItems = [
      { icon: "💵", text: lastBidAmount },
      { icon: "⏳", text: listings.data[i].endsAt },
      { icon: "🔨", text: numberBids },
      { icon: "👤", text: listings.data[i].seller.name },
    ];

    gridItems.forEach((item) => {
      const flexDiv = document.createElement("div");
      flexDiv.classList.add("flex", "items-center");

      const iconElement = document.createElement("i");
      iconElement.classList.add("text-3xl");
      iconElement.textContent = item.icon;

      const textElement = document.createElement("p");
      textElement.classList.add("ml-1");
      textElement.textContent = item.text;

      flexDiv.append(iconElement, textElement);

      grid.append(flexDiv);
    });

    card.append(grid);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("flex", "p-4");

    const button = document.createElement("button");
    button.classList.add("bg-orange-600", "py-2", "px-6", "rounded");
    button.textContent = "Bid Now";

    buttonContainer.append(button);

    card.append(buttonContainer);

    container.append(card);
  }
}
