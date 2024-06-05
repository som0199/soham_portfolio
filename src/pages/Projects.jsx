import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import crypto from "../assets/projects/Crypto.png";
import shop from "../assets/projects/happyshop.png";
import tasty from "../assets/projects/TastySlice.png";
import khatabook from "../assets/projects/khatabook.png";
import ticket from "../assets/projects/ticketease.png";
import quotes from "../assets/projects/quotes.png";
import todo from "../assets/projects/todo.png";
import calculator from "../assets/projects/calculator.png";
import wedding from "../assets/projects/wedding.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasty}
              isBlog={false}
              title="TastySlice"
              description="This online Pizza ordering platform boasts a responsive front-end design, complete and built using React and Bootstrap. Display the available pizzas with detailed descriptions and images. User have options for size, crust type, and toppings with dynamic price updates. Additionally, they can easily add, modify, and remove items with a real-time price total. Also User details form, order summary, and order confirmation with delivery estimate as per distance. With the integration of Google Maps, users can easily access the direction of store and contact for any related query."
              ghLink="https://tastyslicereact.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="TicketEase"
              description="Developed a support desk application using React, Bootstrap, Node.js, Express.js, and MongoDB. RESTful API with Node.js and Express.js for user and ticket management. Secure login system using JWT for authentication, form to create new support tickets with necessary details. Users can view their submitted tickets and track their status. Administrators can view all tickets, assign them to support agents, and track progress. Integrated MongoDB for robust and scalable data storage which ensured real-time updates and seamless user experience with dynamic content rendering."
              ghLink="https://ticketease.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Caddy"
              description="A sleek and interactive website to track trending cryptocurrency coins using React and Material UI, leveraging a crypto API for real-time data. Display a list of trending cryptocurrencies fetched from a crypto API, view detailed information about each coin, including links to their official websites, current price, market cap, and trading volume. It utilized Material UI for a modern and responsive design that ensures the website looks great on all devices.
                 Users can add cryptocurrencies to a cart to track their selected coins & can also remove coins from the cart as needed."
              ghLink="https://cryptocaddyreact.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Happy Shop"
              description="This responsive e-commerce website build on Reactjs and Bootstrap, uses a fake REST API for product data. Display a list of products fetched from a fake API, including images, names, prices, and brief descriptions. Users can view a grid of products with sorting and filtering options. Easily Add and Remove items to the cart with a single click also adjust the quantity of each product directly within the cart interface."
              ghLink="https://happyshopreact.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quotes}
              isBlog={false}
              title="Random Quotes"
              description="Developed a Random Quote Generator application using HTML, CSS, JavaScript and Bootstrap, leveraging a Quote API to fetch and display random quotes along with the author and type of quote. Implemented a responsive and user-friendly interface with dynamic content updates, allowing users to generate new quotes at the click of a button. Styled with Bootstrap to provide a clean and modern user interface."
              ghLink="https://randomquotesjs1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={khatabook}
              isBlog={false}
              title="KhataBook"
              description="Developed a responsive expense manager application using Reactjs and Bootstrap to help users track and manage their daily expenses efficiently. Implemented state management to handle expense data and user interactions. Users can add new expenses, including details such as amount, category, and description. Additionally list of all expenses with options to edit or delete entries."
              ghLink="https://expensemanagerreact.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo App"
              description="Created a responsive To-Do application using React and Bootstrap, featuring task management capabilities such as adding, editing , deleting and updating. Implemented state management in React to handle task operations and a seamless user experience with dynamic content rendering and real-time task updates."
              ghLink="https://todoreact0.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wedding}
              isBlog={false}
              title="Wedding"
              description="Developed a visually stunning and interactive wedding website using HTML, CSS, and AOS for smooth scroll animations. Implemented responsive design for compatibility across devices and created engaging sections including the couple's story, event details, photo gallery, and RSVP form. Ensured a seamless user experience with interactive elements and beautiful animations."
              ghLink="https://sorajwedding.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Developed a responsive expense manager application using Reactjs and Bootstrap to help users track and manage their daily expenses efficiently. Implemented state management to handle expense data and user interactions. Users can add new expenses, including details such as amount, category, and description. Additionally list of all expenses with options to edit or delete entries."
              ghLink="https://calculator1js.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
