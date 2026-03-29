document.getElementById("signIn-btn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(username);
  console.log(password);

  const defUsername = "admin";
  const defPassword = "admin123";

  if (username === defUsername && password === defPassword) {
    alert("Login Successfull!!");
  } else {
    alert("Login Failed");
  }
});

// Spinner

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("word-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("word-container").classList.remove("hidden");
  }
};

// const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data.data))

// Remoev active class from all buttons

const removeActive = () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  console.log("found filter btns:", filterBtns);
  filterBtns.forEach((btn) => btn.classList.remove("active"));
};

const activeBtn = (btnId) => {
  const button = document.getElementById(btnId);
  button.classList.add("active");
};

// Displaying Filtered Cards
const filteredCardsDisplay = (filter) => {
  let filterCards = "";

  if (filter === "all") {
    filterCards == cardsData;
  } else if (filter === "opened") {
    filterCard = cardData.filter((card) => card.status === "opened");
  } else if (filter === "closed") {
    filterCard = cardData.filter((card) => card.status === "closed");
  }
};

// Rendering labels
const renderLabels = (labels) => {
  let labelHTML = "";
  labels.forEach((label) => {
    let labelStyle = "";

    if (label === "bug") {
      labelStyle = "text-[#ef4444] bg-[#feecec] border-[#fecaca]";
    } else if (label === "help wanted") {
      labelStyles = "text-[#d97706] bg-[#fff8db] border-[#fde68a]";
    } else if (label === "enhancement") {
      labelStyles = "text-[#00a96e] bg-[#defce8] border-[#bbf7d0]";
    }

    labelHTML += `
        <h3 class="text-[12px] font-medium ${labelStyle} text-center rounded-2xl p-2 border">
                ${label.toUpperCase()}
            </h3>
        `;
  });
};

// Display cards
const displayCards = (cards) => {
  const container = document.getElementById("card-container");
  container.innerHTML = '';

  cards.forEach((card) => {
    const cardElements = document.createElement("div");
    cardElements.className = "card card-border bg-base-100 shadow-xl";

    if (card.status === "open") {
      cardElements.classList.add("border-t-4", "border-green-600");
    } else if (card.status === "closed") {
      cardElements.classList.add("border-t-4", "border-[#A855F7]");
    }

    cardElements.innerHTML = `
        <div class="card-body">
                        <div class="flex justify-between items-center">

                            <img src="${card.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}">

                            <h3
                                class="text-[12px] font-medium  text-center rounded-2xl px-4 py-1 
                                ${
                                  card.priority == "high"
                                    ? "text-[#ef4444] bg-[#feecec]"
                                    : card.priority == "medium"
                                      ? "text-[#d97706] bg-[#fff8db]"
                                      : card.priority == "low"
                                        ? "text-[#9ca3af] bg-[#eeeff2]"
                                        : ""
                                }">
                                ${card.priority.toUpperCase()}
                                </h3>

                        </div>

                        <h2 class="card-title">${card.title}</h2>
                        <p>${card.description}
                        </p>

                        <div class="flex gap-2">

                            ${renderLabels(card.labels)}

                        </div>



                        <div class="relative -mx-6 my-1">
                            <hr class="w-full border-t border-gray-100">
                        </div>

                        <div class="text-neutral/50">
                            <p>#${card.id} by ${card.author}</p>

                            <p>${card.createdAt}</p>
                        </div>



                    </div>        
        `;

        container.appendChild(cardElements)
  });
};
