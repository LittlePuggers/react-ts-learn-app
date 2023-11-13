import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Faqs() {
  const faqs = [
    {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
      answer:
        "Atque deleniti facilis temporibus non veniam ullam. Maiores nulla doloribus saepe a assumenda fugiat deserunt ratione quasi, rerum placeat dolorem quam error.",
    },
    {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
      answer:
        "Atque deleniti facilis temporibus non veniam ullam. Maiores nulla doloribus saepe a assumenda fugiat deserunt ratione quasi, rerum placeat dolorem quam error.",
    },
    {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
      answer:
        "Atque deleniti facilis temporibus non veniam ullam. Maiores nulla doloribus saepe a assumenda fugiat deserunt ratione quasi, rerum placeat dolorem quam error.",
    },
    {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
      answer:
        "Atque deleniti facilis temporibus non veniam ullam. Maiores nulla doloribus saepe a assumenda fugiat deserunt ratione quasi, rerum placeat dolorem quam error.",
    },
    {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
      answer:
        "Atque deleniti facilis temporibus non veniam ullam. Maiores nulla doloribus saepe a assumenda fugiat deserunt ratione quasi, rerum placeat dolorem quam error.",
    },
  ];
  return (
    <div>
      {faqs.map((faq, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: "bold" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "small", width: "70%" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
