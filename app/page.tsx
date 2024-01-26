import { ClientForm, ClientFormWithState, OnClick } from "./_client";

const action = async () => {
  "use server";
  return new Foo();
};

class Foo {}

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <form action={action}>
        <button>Server form</button>
      </form>
      <ClientForm action={action} />
      <ClientFormWithState action={action} />
      <OnClick action={action} />
    </>
  );
}
