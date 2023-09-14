import Group from "./components/Group";
import Label from "./components/Label";

export default function Home() {
  return (
    <div className="p-8 flex justify-center h-full gap-6 dark:text-slate-50">
      <div className=" w-[30%] flex flex-col gap-4">
        <Label title="New" />
        <Group>
          <p>Description</p>
        </Group>
      </div>
      <div className=" w-[30%] flex flex-col gap-4">
        <Label title="New" />
        <Group>
          <p>Description</p>
        </Group>
      </div>
      <div className=" w-[30%] flex flex-col gap-4">
        <Label title="New" />
        <Group>
          <p>Description</p>
        </Group>
      </div>
    </div>
  );
}
