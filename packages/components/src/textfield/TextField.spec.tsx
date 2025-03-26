describe('TextField', () => {
  test.todo('Test RegExp')
})

// TODO: Test this when we've refactored the RegExp
// describe('given dossnr cases', () => {
//   const testCases = [
//     { value: '9-028498/2', isValid: true },
//     { value: '9+028498-2', isValid: true },
//     { value: '9+028498/2', isValid: false },
//     { value: '9-028498-2', isValid: false },
//     { value: '19-028498/2', isValid: true },
//     { value: '19+028498-2', isValid: true },
//     { value: '19+028498/2', isValid: false },
//     { value: '19-028498-2', isValid: false },
//     { value: '19-028498/21', isValid: true },
//     { value: '19+028498-21', isValid: true },
//     { value: '19+028498/21', isValid: false },
//     { value: '19-028498-21', isValid: false },
//     { value: '9-028498', isValid: true },
//     { value: '19-028498', isValid: true },
//     { value: '9-028498/', isValid: false },
//     { value: '19-028498/', isValid: false },
//     { value: '12345', isValid: false },
//     { value: '123456', isValid: true },
//     { value: '1234567', isValid: true },
//     { value: '12345678', isValid: true },
//     { value: '123456789', isValid: false },
//     { value: '123-123456/1', isValid: false },
//     { value: '1-123', isValid: false },
//   ]

//   testCases.forEach(({ value, isValid }) => {
//     it(`should ${isValid ? 'validate' : 'show error for'} dossiernummer format: ${value}`, async () => {
//       expect(dossNrRegEx.test(value)).toBe(isValid)
//     })
//   })
// })

// TODO: Test this when we've refactored the RegExp
// describe('given ssn cases', () => {
//   const testCases = [
//     { value: '19900101-1234', isValid: true },
//     { value: '900101-1234', isValid: true },
//     { value: '19900101 1234', isValid: true },
//     { value: '900101 1234', isValid: true },
//     { value: '199001011234', isValid: true },
//     { value: '9001011234', isValid: true },
//     { value: '19900101+1234', isValid: true },
//     { value: '900101+1234', isValid: true },
//     { value: '19900101-123', isValid: false },
//     { value: '900101-123', isValid: false },
//     { value: '19900101 123', isValid: false },
//     { value: '900101 123', isValid: false },
//     { value: '19900101123', isValid: false },
//     { value: '900101123', isValid: false },
//     { value: '19900101+123', isValid: false },
//     { value: '900101+123', isValid: false },
//   ]

//   testCases.forEach(({ value, isValid }) => {
//     it(`should ${isValid ? 'validate' : 'show error for'} personnummer format: ${value}`, async () => {
//       expect(ssnRegEx.test(value)).toBe(isValid)
//     })
//   })
// })
