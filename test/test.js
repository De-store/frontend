const Destore = artifacts.require("Destore");

contract("Destore", (accounts) => {
  it("should be able to add application", async () => {
    const destoreInstance = await Destore.deployed();

    const tx = await destoreInstance.addApplication(
      "name",
      "tagline",
      "description",
      "icon image",
      "apkfile address",
      "iosfile address",
      ["image1", "image2"]
    );
    // console.log(tx);
    const { logs } = tx;
    const log = logs[0];
    assert.equal(log.event, "NewApp", "event is not emitted!");
    // const addedApplication = Destore.allInvoices("abcd");
    // const expected_Application = "[object Promise]";

    // assert.equal(addedApplication.toString(), expected_Application);
  });
  it("should be able to return applications", async () => {
    const destoreInstance = await Destore.deployed();
    await destoreInstance.addApplication(
      "name1",
      "tagline1",
      "description1",
      "icon image1",
      "apkfile address1",
      "iosfile address1",
      ["image11", "image21"]
    );
    const response = destoreInstance.getApplications().toString();
    assert.notEqual(response, "", "string is empty");
  });
});
