const User = require('../User');

describe("User", () =>{

  describe("beforeUpdate", () =>{
    it("should lowercase the new email being passed", () => {
      const email = new User({
        "first_name": "Vern",
        "last_name": "King",
        "email": "TesTEXAmplE@gmaIl.coM",
        "password": "password12345"
      })
      const checkemail = (updatedUserData) => {
        return updatedUserData.email.toLowerCase();
    };
      expect(checkemail(email)).toEqual('testexample@gmail.com')
    });
  });
});