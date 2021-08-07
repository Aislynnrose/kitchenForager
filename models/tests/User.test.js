const User = require('../User');

describe("User", () =>{

  describe("beforeUpdate", () =>{
    it("should lowercase the new email being passed", () => {
      const email = new email('TesTEXAmplE@gmaIl.coM')
      expect(User.beforeUpdate(email)).toEqual('testexample@gmail.com')
    });
  });
});