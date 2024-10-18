import "./NewsletterModal.scss";
import ilsLogo from "../../assets/ils-logo.png";

const newsletterToken = localStorage.getItem("newsletterToken");

const NewsletterModal = () => {
  return (
    <article className="modal">
      <div className="modal__content">
        <img
          src={ilsLogo}
          alt="a crest with student, brain, and speaking podium icons"
          className="modal__logo"
        />
        <div>
          <h2 className="modal__main modal__main--title">
            Subscribe to the Ivy Level Speaking newsletter.
          </h2>
          <p className="modal__main modal__terms">
            Please verify your age to view Pines Play Studios.
          </p>
          <div className="modal__form-container">
            <button className="modal__button modal__close">Submit</button>
          </div>
          <p className="modal__terms">
            By entering this website you are agreeing to our terms of use and
            privacy policy.
          </p>
        </div>
      </div>
    </article>
  );
};

export default NewsletterModal;
