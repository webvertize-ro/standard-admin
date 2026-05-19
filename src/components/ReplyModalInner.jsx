import { useForm } from "react-hook-form";
import { useReply } from "../hooks/useReply";

function ReplyModalInner({ email, name, onCloseModal }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      to: email,
      subject: `Răspuns la solicitarea dumneavoastră`,
      message: `Bună ziua, ${name}, \n`,
    },
  });

  const { mutate: sendReply, isPending } = useReply();

  function onSubmit(data) {
    sendReply(data, {
      onSuccess: () => onCloseModal(),
    });
  }

  return (
    <div>
      <h4>Raspunde la solicitare</h4>
      <p>
        Solicitare de la: <strong>{name}</strong>
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Catre</label>
        <input {...register("to")} readOnly style={{ background: "#f5f5f5" }} />

        <label>Subiect</label>
        <input {...register("subject")} />

        <label>Mesaj</label>
        <textarea {...register("message")} rows={8} />

        <div>
          <button type="button" onClick={onCloseModal} disabled={isPending}>
            Anuleaza
          </button>
          <button type="submit" disabled={isPending}>
            {isPending ? "Se trimite..." : "Trimite raspuns"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReplyModalInner;
