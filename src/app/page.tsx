import { Button } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <div className="text-4xl text-primary-500">Hello world!</div>
      <div className="text-4xl text-primary-700">Hello world!</div>
      <div className="text-4xl text-primary-900">Hello world!</div>
      <Button variant="filled" color="blue">
        Botão Mantine
      </Button>
    </main>
  );
}
