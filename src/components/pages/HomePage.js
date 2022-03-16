import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Paragraph from "../ui/Paragraph";

function HomePage() {
  return (
    <div>
      <Card width="600px">
        <h1>Hello World</h1>
        <Input type="text" label="First Name" />
        <Input type="text" label="Last Name" />
        <Input type="email" label="Email" />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu
          nunc a nisl egestas faucibus eget scelerisque orci. Nam ipsum arcu,
          pharetra vel leo nec, commodo pretium eros. Vestibulum eget tortor
          quis lacus euismod pharetra. Mauris commodo, enim eget pharetra
          auctor, metus nibh cursus ante, nec mollis nibh lacus a sem. Morbi sit
          amet quam in urna pulvinar tristique ac nec arcu. In eget condimentum
          nisl. Etiam consectetur aliquam dolor pharetra fringilla. Donec id
          odio ligula. Ut in tristique enim, vel luctus neque. Aenean a turpis
          quis orci venenatis dictum. Nullam nec suscipit dolor. Quisque ac
          magna sit amet tortor dapibus dictum.
        </Paragraph>
        <Button buttonText="Submit" flex="flex-end" />
      </Card>
      <Card width="500px">
        <h1>Gabriela is the most beautiful woman alive!</h1>
        <Input type="text" label="Do you agree?" />
        <Button buttonText="AGREE!" flex="flex-start" />
      </Card>
    </div>
  );
}

export default HomePage;
