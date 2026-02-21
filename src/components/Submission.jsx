import styled from 'styled-components';

const StyledSubmission = styled.div`
  border: 2px solid grey;
  border-radius: 1rem;
`;

const StyledUl = styled.ul`
  border-radius: 1rem;
`;

function Submission({ name, email, message, date }) {
  const formattedDate = new Date(date);

  return (
    <StyledSubmission class="card" className="mb-3">
      <StyledUl className="list-group">
        <li className="list-group-item">
          <span>
            <strong>Nume: </strong>
          </span>
          <span>{name}</span>
        </li>
        <li class="list-group-item">
          <span>
            <strong>Email: </strong>
          </span>
          <span>{email}</span>
        </li>
        <li class="list-group-item">
          <span>
            <strong>Mesaj: </strong>
          </span>
          <span>{message}</span>
        </li>
        <li class="list-group-item">
          <span>
            <strong>Dată: </strong>
          </span>
          <span>{formattedDate}</span>
        </li>
      </StyledUl>
    </StyledSubmission>
  );
}

export default Submission;
