'use strict';

promise_test(async t => {
  // Compute Pressure should support at least "cpu"
  const source = ComputePressureObserver.supportedSourceTypes;
  assert_in_array('cpu', source);
}, 'ComputePressureObserver should support at least "cpu"');
