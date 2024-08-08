// Imports
// React imports
import React from 'react';

// Asset imports
import { BsStarFill } from 'react-icons/bs';

function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];

  return (
    <section class="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-center items-center xs:justify-between mb-6 xs:flex-row">
        <h2 class="text-2xl font-bold">Your reviews</h2>
        <p>
          Last <span class="font-bold">30 days</span>
        </p>
      </div>
      <img class="mx-auto mb-8" src="../reviews-graph.png" alt="Review graph" />
      <h3 class="text-xl font-bold mb-4">Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id} class="mb-8">
          <div class="flex items-center mb-2">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill class="text-yellow-500" key={i} />
            ))}
            <div class="ml-4 flex items-center gap-4">
              <p class="font-bold">{review.name}</p>
              <p class="text-gray-600">{review.date}</p>
            </div>
          </div>
          <p class="mb-4 text-left">{review.text}</p>
          <hr class="border-gray-300" />
        </div>
      ))}
    </section>
  );
}

export default Reviews;
