import { Accordion, Container } from 'react-bootstrap';
import AccordionItme from '../components/AccordionItme';
import Services from '../components/Services';
import '../styles/Blogs.css';

const Blogs = () => {
  return (
    <>
      <section id='questions'>
         <Container>
            <h3>Questions</h3>
            <div className='question'>
               <Accordion defaultActiveKey="0">
                  <AccordionItme
                    eventKey="0" 
                    title="How does prototypical inheritance work?"
                    description="The ability to access object properties from another object is referred to as prototypical inheritance. We modify an existing object constructor by adding new attributes and methods using a JavaScript prototype. So, in essence, we can instruct our JS code to take properties from a prototype. Through a reference pointer function, prototypical inheritance enables us to reuse the attributes or methods from one JavaScript object to another. The prototype inheritance chain is headed by the Object.prototype. Player, Date, and Array objects all descended from Object.prototype."
                  />
                  <AccordionItme
                    eventKey="1" 
                    title="What is a unit test? Why should we write unit tests?"
                    description="A unit test is essentially a technique that creates a tiny section of our program and checks its functionality apart from other components. Typically, a unit test comprises three phases: The system under test, often known as the SUT, is initialized first. Next, a stimulus is applied to the system under test (typically by invoking a method on it), and then the behavior that results is observed. The unit test succeeds if the observed behavior matches the expectations; if not, it fails, suggesting that there is a fault with the system being tested. The acronym AAA, or arrange, act, and assert, is another name for these three unit test steps. <br/></br> Writing testable code obviously needs some self-control, focus, and extra work. However, creating software is a complicated mental process, so we should always exercise caution and refrain from hastily slapping new code together off the top of our heads. We'll get clean, reusable, loosely coupled, easy to maintain APIs as a reward for this proper software quality assurance action that won't hurt developers' brains when they try to understand them. The ability to easily understand, maintain, and extend that code is ultimately what makes testable code superior to non-testable code."
                  />
                  <AccordionItme 
                    eventKey="2" 
                    title="What are the different ways to manage a state in a React application?"
                    description="The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components. There are four main types of state you need to properly manage in your React apps:<br/></br>Local state </br> Global state </br> Server state </br> URL state"
                  />
                  <AccordionItme
                     eventKey="3" 
                     title="React vs. Angular vs. Vue?"
                     description="Every frontend developer has heard of the three frameworks for creating web applications: React, Angular, and Vue.js. A progressive framework is Vue.js, Angular is a full-featured front-end framework, and React is a UI library. It makes useful to compare them and comprehend their differences as they are not exactly the same but can be used to construct front-end apps practically interchangeably. Each framework supports the quick development of UI features and is component-based. They all have unique structures, though, so we'll start by examining these distinctions in order to comprehend the underlying principles. <br/><br/> <b>React</b><br/>React may be used as a UI toolkit to render elements without imposing a particular project structure, which is why it's not technically a framework. The tiniest React app building pieces are called React Elements. Due of the React DOM's quick updating anytime something changes, they are more potent than DOM elements. Components are more substantial building components that specify autonomous and reusable parts to be utilized all through the program. They take in inputs known as props and output items that are subsequently shown to the user.<br/><br/> <b>Angular</b><br/>An MVC (Model-View-Controller) framework is what the initial version of AngularJS is called. However, because Angular 2 is also component-based, there is not a tight relationship between it and MV*-patterns. Angular projects are divided into Modules, Components, and Services. There are at least one root component and one root module in every Angular application. A Template, a Class that specifies the application logic, and MetaData are all included in each Angular component. Angular is informed where to find the building blocks it needs to create and display its view by the component's metadata.<br/><br/> <b>Vue</b><br/>Only the View layer is the focus of the Vue.js core framework. Because you may expand its capabilities using official and unofficial packages like Vue Router or Vuex to make it a genuine framework, it is known as a progressive framework. Vue's architecture was partially influenced by the MVVM (Model-View-ViewModel) paradigm even though it is not explicitly related to it."
                  />
               </Accordion>
            </div>
         </Container>
      </section>
      <Services/>
    </>
  )
}

export default Blogs