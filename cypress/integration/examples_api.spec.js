describe("api testing:  https://reqres.in/", () => {

    it("should return all users", () => {
        cy.request("https://reqres.in/api/users")
            .then((response) => {
                expect(response.status).to.be.equal(200);
                expect(response.isOkStatusCode).to.be.true;
                expect(response.body.data[0].id).to.be.equal(1);
            })
    })

    it("should return a single user", () => {
        cy.request("https://reqres.in/api/users/1")
            .then((response) => {
                expect(response.status).to.be.equal(200);
                expect(response.body.data.first_name).to.be.equal("George");
            })
    })

    it("should create a new user", () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "zotho",
                "job": "qa engineer"
            }
        }).then((response) => {
            expect(response.status).to.be.equal(201);
            expect(response.body.name).to.be.equal("zotho");
        })
    })

    it("should update a user", () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "zEthE",
                "job": "sdet"
            }
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body.job).to.be.equal("sdet");
            console.log(response.body);
        })
    })

    it("should delete a user", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users'
        }).then((response) => {
            expect(response.status).to.be.equal(204);
        })
    })
})