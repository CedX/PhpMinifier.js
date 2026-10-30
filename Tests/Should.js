import "chai/register-should.js";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";

globalThis.should = chai.should();
chai.use(chaiAsPromised);
