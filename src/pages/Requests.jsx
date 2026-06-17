import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Request from "../components/Request";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteSubmission,
  getSubmissions,
  subscribeToMessages,
} from "../services/apiSubmissions";
import supabase from "../services/supabase";

const StyledAdmin = styled.div`
  color: #fff;
  min-height: calc(100vh - 64px - 41px);
`;

const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const PageHeading = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(126, 200, 176, 0.5);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(126, 200, 176, 0.1);
`;

const SpinnerContainer = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: rgba(126, 200, 176, 0.35);
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export default function Requests() {
  const queryClient = useQueryClient();

  const { data: submissions = [], isPending } = useQuery({
    queryKey: ["submissions"],
    queryFn: () => getSubmissions(),
  });

  const { mutate: deleteSub } = useMutation({
    mutationFn: deleteSubmission,
    onError: (error) => console.error(error),
  });

  useEffect(() => {
    const channel = subscribeToMessages((payload) => {
      if (payload.eventType === "INSERT") {
        queryClient.setQueryData(["submissions"], (old = []) => [
          ...old,
          payload.new,
        ]);
      }
      if (payload.eventType === "DELETE") {
        queryClient.setQueryData(["submissions"], (old) =>
          old.filter((s) => s.id !== payload.old.id),
        );
      }
    });

    return () => supabase.removeChannel(channel);
  }, [queryClient]);

  return (
    <StyledAdmin>
      <Container className="container">
        <PageHeading>Solicitări primite</PageHeading>

        {isPending ? (
          <SpinnerContainer></SpinnerContainer>
        ) : submissions.length === 0 ? (
          <EmptyState>Nicio solicitare primită</EmptyState>
        ) : (
          submissions.map((e) => (
            <Request
              key={e.id}
              name={e.name}
              email={e.email}
              message={e.message}
              date={e.created_at}
              id={e.id}
              onDelete={deleteSub}
            />
          ))
        )}
      </Container>
    </StyledAdmin>
  );
}
