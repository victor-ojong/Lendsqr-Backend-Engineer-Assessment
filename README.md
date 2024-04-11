<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://victor-ojong-lendsqr-be-test.onrender.com/">
    <img src="/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">DEMO CREDIT APP</h3>

  <p align="center">
    A comprehensive documentation for demo credit application 
    <br />
    <a href="https://documenter.getpostman.com/view/33326436/2sA3BhduLw"><strong>Explore the postman docs »</strong></a>
    <br />
    <br />
    <a href="https://victor-ojong-lendsqr-be-test.onrender.com/">View Demo</a>
    ·
    <a href="https://github.com/victor-ojong/Lendsqr-Backend-Engineer-Assessment/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
<a href="https://victor-ojong-lendsqr-be-test.onrender.com/">
    <img src="/assets/DATA FLOW DIAGRAM.png" alt="Logo" width="80%">
  </a>
</div>
Demo Credit is a mobile lending app that requires wallet functionality. This is needed as borrowers need a wallet to receive the loans they have been granted and also send the money for repayments. THis MVP (Minimun Viablw Product)provides endpoints for the following API features;

Features:
* A user can create an account
* A user can transfer funds to another user’s account
* A user can withdraw funds from their account
* An Admin user can aprove loans and credit other users
* A user with records in the Lendsqr Adjutor Karma blacklist is never onboarded.


<div align="center">
<a href="https://victor-ojong-lendsqr-be-test.onrender.com/">
    <img src="/assets/e-r diagram.png" alt="Logo" width="80%">
  </a>
</div>
The Entity Relationship (E-R Diagram) above shows that the different entities of this software includes our Users, Transaction records, Adjutor bvn service and the Admin. The bvn validator and adjutor service makes it possible to detect blacklisted bvn owners and prevent them from accessing our services thereby reducing the risk of non-complaint debtors. The User id is an essential token that is created upon onboarding into the application and is included with every single transaction record on the application incuding the sender and reciever account details, transaction amount and current timestamp. This Services put together implements common wallet / banking processes in the real-world. 
<br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Tech Stack 

These tools are preferred because they offer


* <b>Node.js (LTS version)</b>: A robust, scalable runtime environment for building server-side applications using JavaScript.
     <br>
* <b>Typescript</b>: Provides static typing, enhancing code maintainability, readability, and catching errors during development.
  <br>
* <b>MySQL database</b>: A widely-used, open-source relational database management system, offering reliability, scalability, and performance for storing and managing data.
   <br>
* <b>KnexJS ORM</b>: An SQL query builder for Node.js, facilitating database interactions, migrations, and seeding with ease, promoting productivity and maintainability.
  <br>
* <b>Restful API Design</b>: A standard approach for designing APIs, ensuring interoperability, scalability, and simplicity in communication between systems.
   <br>
* <b>NestJs</b>: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications, offering modularity, dependency injection, and robustness.
   <br>
* <b>Deployment - Render</b>: A cloud platform for deploying and scaling web applications easily, offering simplicity, scalability, and reliability in hosting infrastructure.
   <br>
* <b>CI/CD workflow</b>: Continuous Integration (CI) and Continuous Deployment (CD) automate the software delivery process, ensuring rapid, reliable, and consistent deployment of applications.
   <br>
* <b>Unit test - Jest</b>: A JavaScript testing framework with a focus on simplicity, ensuring code quality, reliability, and maintainability through automated testing.
   <br>
* <b>Authentication</b> - bcrypt: A widely-used library for hashing passwords securely, enhancing security and protecting user credentials from unauthorized access.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In other to get started, the foolowing steps will be useful.

### Prerequisites

You will need a MySQL database. To install other dependepcies run the following command on the applications root directory.
* npm
  ```sh
  npm install
  ```

### Installation

Below is a guide to for installing and running this project locally and in production_


1. Clone the repo
   ```sh
   git clone https://github.com/victor-ojong/Lendsqr-Backend-Engineer-Assessment.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. RUN server in development environment
   ```sh
   npm run start:dev
   ```
3. RUN server in production environment
   ```sh
   npm run start:prod
   ```
4. ENSURE TO CREATE MYSQL DATABASE CONNECTION FOR THIS APPLICATION AND ATTACH INTO YOUR CONFIGURATION FILE`
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<div align="center">
<a href="https://victor-ojong-lendsqr-be-test.onrender.com/">
    <img src="/assets/codebase.png" alt="Logo" width="80%">
  </a>
</div>



<!-- ROADMAP -->
## Roadmap

- [x] Initialize bvn and recieve OTP token
- [x] Send the OTP token with new demo credit account password 
- [x] If user not blacklisted in karma service
    - [x] Account is created
    - [x] User is onboared
- [ ] If User blacklisted in karma service
    - [ ] Access denied!
- [x] User Logs in
    - [x] Can transfer funds 
    - [x] Can recieve funds
    - [x] can request loan

- [x] If User is Admin
    - [x] can approve loan
    - [x] can get all Users on the platform 



<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- CONTACT -->
## Contact

Online - [@linkedIn](https://www.linkedin.com/in/victorojong) - victorojong500@gmail.com

Project Link: [https://victor-ojong-lendsqr-be-test.onrender.com](https://victor-ojong-lendsqr-be-test.onrender.com/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
