import { render, screen } from '@testing-library/react';
import App from './App';

it("shouldReturnHelloWorld", ()=>{
  const component = render(<App/>);
  const componentValue=component.getByTestId("1");
  expect(componentValue).toHaveTextContent("Hello World")

})