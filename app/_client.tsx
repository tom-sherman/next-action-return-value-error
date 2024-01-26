"use client";
import { useFormState } from "react-dom";

type Props = {
  action: (d: FormData) => Promise<unknown>;
};

export function ClientForm({ action }: Props) {
  return (
    <form action={action}>
      <button>Client form</button>
    </form>
  );
}

export function ClientFormWithState({ action }: Props) {
  const [state, wrapped] = useFormState(action, undefined);
  return (
    <form action={wrapped}>
      <button>Client form with state</button>
    </form>
  );
}

export function OnClick({ action }: Props) {
  return <button onClick={() => action(new FormData())}>onClick</button>;
}
