// import React, { useEffect } from 'react';

// //import { writeToDeviceAsync } from './actions'; // Assuming writeToDeviceAsync is an action creator function
// import ByteInterpreter from './ByteInterpreter';
// const byteInterpreter = new ByteInterpreter();
// import State from '../constants/State';
// import Side from '../constants/Side';
// import { writeToDeviceAsync } from '../components/redux/bleThunks';
// const turnOnRightLens = () => {
  
//    // const dispatch = useDispatch();



//   const turnOnRightLensMethod = () => {
//     //const dispatch = useDispatch();
    
//   const getUUID = useReturnedValue('UUID');
//   console.log('getUUID', getUUID);

//   const iD = useReturnedValue('ID');
//   console.log('iD', iD);

//   const lensBytes = byteInterpreter.getBytesForLens(State.ON, Side.RIGHT);
//   console.log('lensBytes:', lensBytes);
//   dispatch(writeToDeviceAsync());

//  // dispatch(writeToDeviceAsync(iD, getUUID, getUUID, lensBytes));

//   // Logic for turning on the right lens
// };

//   // Assuming useReturnedValue is a custom hook that returns values
//  // const getUUID = useReturnedValue('UUID');
//  // const iD = useReturnedValue('ID');

//   // Assuming byteInterpreter is defined and gets bytes for lens
//  // const lensBytes = byteInterpreter.getBytesForLens(State.ON, Side.RIGHT);

//   // Dispatch the action with the retrieved values
//  // dispatch(writeToDeviceAsync(iD, getUUID, getUUID, lensBytes));

//   // Logic for turning on the right lens
// };

// export default turnOnRightLens;