<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

After you're finished please remove all the comments and instructions!
-->

<div align="center">

  <img src="murple_logo.png" alt="logo" width="140"  height="auto" />
  <br/>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)

- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [🙏 Acknowledgements](#acknowledgements)

<!-- PROJECT DESCRIPTION -->

# 📖 Hello React Rails <a name="about-project"></a>

**Hello React Rails** is an app project that I implemented to practice integrating react with rails.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Ruby on Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> Some features of the application.

- **Rails api**
- **React view**
- **Redux data management**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:


<!--
Example command:

```sh
 gem install rails
```
 -->
 
- Ruby runtime environment
- Postgresql
- Rails
- React.js
- Redux

### Setup

Clone this repository to your desired folder:

-[Download the ZIP from this location](https://github.com/Carshy/hello-react-frontend/archive/refs/heads/main.zip), or run the following [git](https://git-scm.com/downloads) command to clone the files to your machine.
- Once the files are on your machine, open the hello-react-redux folder in your code editor.
- Open the config/database.yml file in the project directory and change the username and password to your PostgreSQL username and password.
Edit the default section of the file to look like this:
```
  default: &default
  adapter: postgresql
  encoding: unicode
  # For details on connection pooling, see Rails configuration guide
  # http://guides.rubyonrails.org/configuring.html#database-pooling
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: <your PostgreSQL role username>
  password: <your PostgreSQL role password>

```

- Use the following commands to
    - install necessary gems `bundle install`
    - rails db:create, rails db:migrate to setup the database
    - rails s to start the server
    
- For frontend:
    - Clone [this repository](https://github.com/Carshy/hello-react-frontend)
    - install dependecies with npm install
    - run npm start to start the server

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="author"></a>

👤 **Collins Musoko**

- GitHub: [@Github](https://github.com/Carshy)
- Twitter: [@Twitter](https://twitter.com/CarshyCollins)
- Linkedin: [Linkedin](https://www.linkedin.com/in/collins-musoko/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank microverse for providing the curriculum to guide me on this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>
