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
    <a href="https://github.com/victor-ojong/Lendsqr-Backend-Engineer-Assessment"><strong>Explore the postman docs »</strong></a>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
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
* A user can withdraw funds from their account.
* A user with records in the Lendsqr Adjutor Karma blacklist is never onboarded (can not create an account with us)


<div align="center">
<a href="https://victor-ojong-lendsqr-be-test.onrender.com/">
    <img src="/assets/e-r diagram.png" alt="Logo" width="80%">
  </a>
</div>
The Entity Relationship (E-R Diagram) above shows that the different entities of this software includes our Users, Transaction records, Adjutor bvn service and the Admin. The bvn validator and adjutor service makes it possible to detect blacklisted bvn owners and prevent them from accessing our services thereby reducing the risk of non-complaint debtors. The User id is an essential token that is created upon onboarding into the application and is included with every single transaction record on the application incuding the sender and reciever account details, transaction amount and current timestamp. This Services put together implements common wallet / banking processes in the real-world. 
<br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Tech Stack 

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* [![Nest.js](https://example.com/path/to/nestjs/icon.png)](https://nestjs.com/)
* [![TypeScript](https://example.com/path/to/typescript/icon.png)](https://www.typescriptlang.org/)
* [![Knex.js](https://example.com/path/to/knexjs/icon.png)](https://knexjs.org/)
* [![MySQL](https://example.com/path/to/mysql/icon.png)](https://www.mysql.com/)


* [![Next][Nest.js]][Nest-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]


NodeJS (LTS version)
KnexJS ORM
MySQL database
TypeScript

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._


1. Clone the repo
   ```sh
   git clone https://github.com/victor-ojong/Lendsqr-Backend-Engineer-Assessment.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. RUN THE SERVER IN DEVELOPMENT ENVIRONMENT
   ```sh
   npm run start:dev
   ```
3. RUN THE SERVER IN PRODUCTION ENVIRONMENT
   ```sh
   npm run start:prod
   ```
4. NOTE -- ENSURE TO CREATE MYSQL DATABASE CONNECTION FOR THIS APPLICATION AND ATTACH INTO YOUR CONFIGURATION FILE`
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Online - [@linkedIn](https://www.linkedin.com/in/victorojong) - victorojong500@gmail.com

Project Link: [https://victor-ojong-lendsqr-be-test.onrender.com](https://victor-ojong-lendsqr-be-test.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Helpful resources

* [Choose an Open Source License](https://postman.com)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
*

<p align="right">(<a href="#readme-top">back to top</a>)</p>



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
