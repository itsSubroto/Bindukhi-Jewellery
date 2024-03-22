// This is a placeholder for fetching and displaying customer reviews dynamically
const reviewsContainer = document.querySelector(".reviews");

// Simulated data for customer reviews
const reviewsData = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Beautiful necklace, exceeded my expectations!",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Lovely design, but chain could be slightly longer.",
  },
  // Add more reviews as needed
];

// Display customer reviews
reviewsData.forEach((review) => {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <p><strong>${review.name}</strong> - ${"⭐".repeat(review.rating)}</p>
    <p>${review.comment}</p>
  `;
  // reviewsContainer.appendChild(reviewElement);
});

//  wish list button funcionality

const wise = document.getElementById("wishList");
wise.style.background = "black";

if ((wise.style.background = "black")) {
  wise.addEventListener("click", () => {
    console.log("blue");
    wise.style.background = "blue";
    console.log(value((wise.style.background = "blue")));
  });
} else {
  wise.addEventListener("click", () => {
    console.log("green");
    wise.style.background = "green";
  });
}

const color1 = document.getElementById("color");

color1.addEventListener("click", () => {
  console.log("heloo");
  color1.style.background = "red";
});
