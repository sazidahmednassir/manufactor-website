import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/CzX7WK8/1.png"
            className="w-48 h-80"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold">
            Name: <span>Sazid Ahmed Nassir</span>
          </h2>
          <h2 class="card-title font-bold">
            Email: <span>nassirctg1234@gmail.com</span>
          </h2>
          <h2 class="card-title font-bold">
            Education: <span>BSC in CSE at IIUC</span>
          </h2>
          <p>
            <span>Skills:</span>
            <div class="my-1">
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>HTML, CSS, BootStrap & Tailwind CSS Frameworks</span>
              </p>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Basic Javascript, JS ES6 & React JS Library</span>
              </p>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Express JS, Nodejs & Mongodb</span>
              </p>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Firebase, Heroku & Netlify</span>
              </p>
            </div>
          </p>
          <div class="card-actions justify-start">
          <span>Projects:</span>
              <div><a  href="https://splendorous-nougat-410b2d.netlify.app/" class="btn btn-primary">Project 1</a></div>
              <div><a  href="https://spontaneous-cucurucho-d4592d.netlify.app/" class="btn btn-primary">Project 2</a></div>
              <div><a  href="https://smartphoneinventory.web.app/" class="btn btn-primary">Project 3</a></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
