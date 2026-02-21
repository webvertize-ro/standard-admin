function Submission({ name, email, message }) {
  return (
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span>Nume: </span>
          <span>{name}</span>
        </li>
        <li class="list-group-item">
          <span>Email: </span>
          <span>{email}</span>
        </li>
        <li class="list-group-item">
          <span>Mesaj: </span>
          <span>{message}</span>
        </li>
      </ul>
    </div>
  );
}

export default Submission;
