import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import TodoList from "./TodoList";

function Recoil() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <RecoilAbout />
        <RecoilDocs />
      </div>
      <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
        <CharacterCounter />
        <TodoList />
      </div>
    </div>
  );
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h4>Counter App:</h4>
      <input type="text" value={text} onChange={onChange} />
      <p>Echo: {text}</p>
    </div>
  );
}

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <p>Character Count: {count}</p>;
}

function RecoilDocs() {
  return (
    <div style={{ width: '40%', padding: '20px' }}>
      <a
        style={{ display: "block" }}
        href="https://recoiljs.org/docs/introduction/core-concepts"
      >
        Core Concepts
      </a>
      <a
        style={{ display: "block" }}
        href="https://recoiljs.org/docs/basic-tutorial/intro"
      >
        Todo App with Recoil
      </a>
      <a
        style={{ display: "block" }}
        href="https://recoiljs.org/docs/guides/asynchronous-data-queries"
      >
        Asynchronous Data Queries
      </a>
      <a
        style={{ display: "block" }}
        href="https://recoiljs.org/docs/guides/dev-tools"
      >
        Development Tools
      </a>
    </div>
  );
}

function RecoilAbout() {
  return (
    <>
      <p style={{ width: "60%", margin: "20px" }}>
        Recoil lets you create a data-flow graph that flows from atoms (shared
        state) through selectors (pure functions) and down into your React
        components. Atoms are units of state that components can subscribe to.
        Selectors transform this state either synchronously or asynchronously.
      </p>
    </>
  );
}

export default Recoil;
