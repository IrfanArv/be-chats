const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should;

describe("Accounts", () => {
  describe("POST /api/signup", () => {
    it("should get all todos", (done) => {
      chai
        .request(app)
        .post("/signup")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
