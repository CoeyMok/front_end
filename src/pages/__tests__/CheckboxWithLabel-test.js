// Copyright 2004-present Facebook. All Rights Reserved.

import {createRef} from 'react';

import * as TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel'

it('CheckboxWithLabel changes the text after click', () => {
  const checkboxLabelRef = createRef();
  const checkboxInputRef = createRef();

  TestUtils.renderIntoDocument(
    <CheckboxWithLabel
      labelRef={checkboxLabelRef}
      inputRef={checkboxInputRef}
      labelOn="remember"
      labelOff="not remember"
    />,
  );

  const labelNode = checkboxLabelRef.current;
  const inputNode = checkboxInputRef.current;

  expect(labelNode.textContent).toEqual('not remember');
  TestUtils.Simulate.change(inputNode);
  expect(labelNode.textContent).toEqual('remember');
});