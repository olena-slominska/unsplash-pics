import './NoResultsMessage.css';

function NoResultsMessage({ query }) {
  return (
    <div className="no-results-message">
      <p>No results found for "{query}". Please check spelling of the search word</p>
    </div>
  )
}

export default NoResultsMessage;