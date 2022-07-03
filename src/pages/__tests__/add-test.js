import renderer from 'react-test-renderer';
import {add} from '../add'
jest.mock('node-fetch');

import fetch, {Response} from 'node-fetch';

// it('renders when new dog record is create', () => {
//     const tree = renderer.create(<Add />).toJSON();
//     expect(tree).toMatchSnapshot();
// });

test('createDog calls fetch with the right args and returns the dog id', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response('4')));
  
    const dogId = await add();
  
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/dogs/', {
      method: 'POST',
    });
    expect(dogId).toBe('4');
  });