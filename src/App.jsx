import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./componets/CoreConcept";

import Header from "./componets/Header/Header";
import TabButton from "./componets/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => {
              return <CoreConcept key={index} {...concept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              selected={selectedTopic === "components"}
              onSelect={() => {
                onSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              selected={selectedTopic === "jsx"}
              onSelect={() => {
                onSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              selected={selectedTopic === "props"}
              onSelect={() => {
                onSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              selected={selectedTopic === "state"}
              onSelect={() => {
                onSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <h1>Please Select a Topic</h1>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
