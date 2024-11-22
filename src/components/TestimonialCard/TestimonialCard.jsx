import { FormatQuote } from "@mui/icons-material";

const TestimonialCard = ({ quote }) => {
  return (
    <article className="testimonials__card">
      <p>{quote.quote}</p>
      <p className="testimonials__attribution">
        - {quote.name}
        <br />
        {quote.title}, {quote.company}
      </p>
      <FormatQuote className="testimonials__icon" />
    </article>
  );
};

export default TestimonialCard;
