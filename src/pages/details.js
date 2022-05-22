import Navigation from "../components/navigation";
import { useLocation } from "react-router-dom";

const Details = () => {
  const routeLocation = useLocation();
  const { data } = routeLocation.state;
  const {
    imgUrl,
    logoBackground,
    apply,
    company,
    postedAt,
    contract,
    position,
    description,
    requirements,
    role,
    location,
  } = data;
  const { content: requirementContent, items: requirementItems } = requirements;
  const { content, items } = role;
  return (
    <div className="details">
      <Navigation
        page="detail"
        detailsData={{ imgUrl, logoBackground, apply, company }}
      />
      <main className="main details-main">
        <div className="description-wrapper">
          <div className="description-top">
            <div className="d-container">
              <p>
                {postedAt}.{contract}
              </p>
              <h1>{position}</h1>
              <p className="location">{location}</p>
            </div>
            <a href="#" className="apply-now">
              Apply now
            </a>
          </div>
          <div className="description-bottom">
            <p className="description">{description}</p>
            <div className="requirements">
              <h2>Requirements</h2>
              <p>{requirementContent}</p>
              <div className="items">
                <ul>
                  {requirementItems?.map((item, index) => {
                    const rand = (Math.random() + 10).toString(36).substring(7);
                    return <li key={rand + index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="role">
              <h2>What you will do.</h2>
              <p>{content}</p>
              <div className="items">
                <ol>
                  {items?.map((item, index) => {
                    const rand = (Math.random() + 10).toString(36).substring(8);
                    return <li key={rand + index}>{item}</li>;
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed-bottom">
        <div className="details hide">
          <h1>{position}</h1>
          <p>{company}</p>
        </div>
        <a href="#" className="btn-apply">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Details;
