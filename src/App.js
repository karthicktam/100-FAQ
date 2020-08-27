// Design on Dribbble: https://dribbble.com/shots/3967265-FAQ -->
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function FaqComponent(props) {
  const { active, title, paragraph } = props.faq;

  return (
    <div className={active === true ? "faq active" : "faq"}>
      <h3 className="faq-title">{title}</h3>
      <p className="faq-text">{paragraph}</p>
      <button className="faq-toggle" onClick={props.clickHandler}>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
        <FontAwesomeIcon className="times" icon={faTimes} />
      </button>
    </div>
  );
}

export default function App() {
  const faqArr = [
    {
      id: 1,
      active: true,
      title: "Why shouldn't we trust atoms?",
      paragraph: "They make up everything."
    },
    {
      id: 2,
      active: false,
      title: "What do you call someone with no body and no nose?",
      paragraph: "Nobody knows."
    },
    {
      id: 3,
      active: false,
      title: "What's the object-oriented way to become wealthy?",
      paragraph: "Inheritance."
    },
    {
      id: 4,
      active: false,
      title: "How many tickles does it take to tickle an octopus?",
      paragraph: "Ten-tickles!"
    },
    {
      id: 5,
      active: false,
      title: "What is: 1 + 1?",
      paragraph: "Depends on who are you asking."
    }
  ];

  const [items, setItems] = useState(faqArr);

  const clickHandler = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.active = !item.active;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faqs-container">
        {items.map((faq) => (
          <FaqComponent
            key={faq.title}
            faq={faq}
            clickHandler={() => clickHandler(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}
