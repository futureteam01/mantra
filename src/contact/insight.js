import React, { useState } from 'react';
import '../contact/insight.css';

const articles = [
  {
    id: 1,
    title: "Football Contracts: An Overview and Discourse of Implications of Long-Term Football Contracts.",
    date: "May 23, 2025",
    image: "/images/football.jpg",
    fullText: "This article explores legal implications of long-term contracts in professional football, including potential risks, club obligations, and player rights over time."
  },
  {
    id: 2,
    title: "Environmental, Social, and Governance (ESG) and Data Protection: A Nexus",
    date: "May 16, 2025",
    image: "/images/esg.jpg",
    fullText: "We dive into how ESG principles intersect with data privacy, focusing on regulatory frameworks and the rising role of digital ethics in corporate compliance."
  },
  {
    id: 3,
    title: "Copyright in the Age of Artificial Intelligence (AI): Legal Implications and Emerging Issues",
    date: "May 16, 2025",
    image: "/images/copyright.jpg",
    fullText: "With AI systems generating creative content, we discuss copyright ownership, fair use, and IP reforms in this evolving landscape."
  },
  {
    id: 4,
    title: "Major Highlights of the Investments and Securities Act, 2025: A New Dawn for Nigeria’s Capital Market",
    date: "May 5, 2025",
    image: "/images/securities.jpg",
    fullText: "The Act brings clarity and modernization to Nigeria's capital markets. This article breaks down the key updates, reforms, and opportunities."
  },
];

export default function ArticleCards() {
  const [selected, setSelected] = useState(null);

  return (
    <>
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
