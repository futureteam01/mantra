import React, { useState } from 'react';
import '../contact/insight.css';
import { useNavigate } from 'react-router-dom';
import POA from "../asset/gram2.jpg";
import WILL from "../asset/gram3.jpg";
import TRUST from "../asset/gram4.jpg";
import HEALTH from "../asset/gram5.jpg";

const articles = [
  {
    id: 1,
    title: "Power of Attorney: This document grants someone (family member, lawyer, etc ) the legal authority to make decision on your behalf.",
    date: "May 23, 2025",
    image: POA,
    fullText: "A Power of Attorney is a legal document (a written authorization) that grants someone (the agent or attorney-in-fact) the legal authority to make decisions on behalf of another person (principal) in financial, medical, or other matters. POA can either be revocable (can be cancelled) or irrevocable (cannot be cancelled)"
  },
  {
    id: 2,
    title: "Will and Testament: This document dictates how your asset will be distributed after your demise",
    date: "May 23, 2025",
    image: WILL,
    fullText: "A Will and Testament is a legal document that expresses a person's wish as to how they want their assets to be distributed after their death and who is to manage the property until its final distribution. A Will is to ensure that a person's final wishes are followed. It includes information about the assets, specific bequests (who is to get what), beneficiaries (who will inherit your assets), executors/administrators (who manages the assets), and guardians (who cares for their minor children)."
  },
  {
    id: 3,
    title: "Trust: A document which spells out who manages a property (trustee) and how the property should be managed and distributed",
    date: "May 23, 2025",
    image: TRUST,
    fullText: "A Trust is a legal arrangement where the owner of a property (grantor) gives it to another person (trustee) to manage on behalf of beneficiaries. Trust can help dictate the distribution of assets, ensure continued care of a loved one, insulate familyy wealth from lawsuits, creditors and divorce, and help care for family members/beneficiaries should anything happen to the Grantor."
  },
  {
    id: 4,
    title: "Healthcare Directive: This document allows you make your wishes known regarding medical treatment in case you are unable to make those decisions yourself",
    date: "May 23, 2025",
    image: HEALTH,
    fullText: "Healthcare directives is a legal document that allows individuals to make decisions about their health care in advance, in case they are no longer able to make the decisions themselves. Healthcare Directives can specify medical treatment preferences and appoint a healthcare proxy or surrogate decision maker."
  },
];

export default function ArticleCards() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar">
        <button onClick={() => navigate('/')} className="home-btn">Home</button>
        <h1 className="insight-title">Insight</h1>
      </div>

      <div className="intro-text">
        <p> <strong>Must-have Documents That Guarantee Peace of Mind! </strong><br></br> 
        Whether you're a parent, business owner, or you have assets, <br></br> responsibilities and 
        loved ones, having certain documents in place can <br></br> help you to plan for and protect your 
        life and future and those of your loved ones </p>
        
      </div>

      <div className="card-container">
        {articles.map(article => (
          <div className="card" key={article.id}>
            <img src={article.image} alt={article.title} />
            <div className="card-body">
              <h3>{article.title.length > 80 ? article.title.substring(0, 80) + '...' : article.title}</h3>
              <p className="date">{article.date}</p>
              <button onClick={() => setSelected(article)}>View More</button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.title}</h2>
            <p>{selected.fullText}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
