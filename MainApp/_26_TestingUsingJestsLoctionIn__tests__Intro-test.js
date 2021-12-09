import React from 'react';
import { FlatList,Text } from 'react-native';
import renderer from 'react-test-renderer';//this package provides a react renderer that can be used to render React components to pure JavaScript objects,without depending on the DOM or a native mobile environment.Essentially this package makes it easy to grab a snapshot of the platform view hierarchy rendered by a react DOM or React Native component without using a jsdom.
import Intro from '../src/utils/Intro';

//In the body of the test we first render the Intro component and convert it to json. Then we compare it with the previously saved Snapshot file. Now I run the test to see the result.
test('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});

// it function works like the test()
it('renders the Flatlist component', () => {
    const tree = renderer.create(
        <FlatList
            data={['Item1', 'Item2', 'Item3']}
            keyExtractor={item => item}
            renderItem={({ item }) => <Text>{item}</Text>}
        />
    ).toJSON;
    expect(tree).toMatchSnapshot();
});