import {useState, useCallback, useEffect} from 'react';
import {View, TextInput, PermissionsAndroid} from 'react-native';

import TestClassComp from './TestClassComp';
import TestFuncComp from './TestFuncComp';
import {PersistanceHelper} from '../../helpers';

const TestPureComponent = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');

  const myAsyncFetchMethod = async () => {
    //const fetchedValue = await PersistanceHelper.getValue('testkey');
    const fetchedObject = await PersistanceHelper.getObject('testkey');
    console.log(fetchedValue);
  };

  useEffect(() => {
    myAsyncFetchMethod();
  }, []);

  console.log('test pure component is rendering');

  const mymethod = useCallback(() => {
    console.log('some console log');
  }, []);

  return (
    <View>
      <TextInput
        value={inputVal}
        onChangeText={changedText => {
          setInputVal(changedText);
        }}
        placeholder="test"
        style={{backgroundColor: 'yellow', height: 40, margin: 10, padding: 5}}
      />

      <TextInput
        value={inputVal2}
        onChangeText={changedText => {
          setInputVal2(changedText);
        }}
        placeholder="test"
        style={{backgroundColor: 'yellow', height: 40, margin: 10, padding: 5}}
      />

      <TestClassComp someprop={inputVal} />
    </View>
  );
};

export default TestPureComponent;
