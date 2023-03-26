import "../Components/NewsLette.css";
import NewsLetterContent from "./NewsletterContent";
import ImgBanner from "../Images/newsletter.webp";

const NewsLetter = () => {
  return (
    <div className="newsBody">
      <NewsLetterContent
        img={ImgBanner}
        newsTitle1="Stay home & get your daily"
        newsTitle2="needs from our shop"
        caption="Start Your Daily Shopping with Nest Mart"
      />
    </div>
  );
};

export default NewsLetter;
