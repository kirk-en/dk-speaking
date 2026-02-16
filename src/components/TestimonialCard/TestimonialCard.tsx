import './TestimonialCard.scss';
import { Box } from '@mui/material';

const TestimonialCard = ({ quote }): JSX.Element => {
  return (
    <article className="testimonials__card">
      <p>{quote.quote}</p>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p className="testimonials__attribution">
          - {quote.name}
          <br />
          <i>
            {quote.title}, {quote.company}
          </i>
        </p>
        {quote.logo && (
          <img
            src={`/${quote.logo}`}
            alt={`${quote.company} logo`}
            className="testimonials__icon"
          />
        )}
      </Box>
    </article>
  );
};

export default TestimonialCard;
