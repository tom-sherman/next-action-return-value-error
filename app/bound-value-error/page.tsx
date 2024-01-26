import { ClientForm, ClientFormWithState, OnClick } from "../_client";

async function plainAction() {
  "use server";
}

class Foo {}

export default function BoundAction() {
  const bound = plainAction.bind(null, new Foo());

  return (
    <>
      <p>With bound action:</p>
      <ClientForm action={bound} />
      <ClientFormWithState action={bound} />
      <OnClick action={bound} />
    </>
  );
}
