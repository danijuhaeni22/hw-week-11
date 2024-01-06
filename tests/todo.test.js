const app = require("../app");
const request = require("supertest");

describe("Todo Routes", () => {
  it("should return all todos get /todos", (done) => {
    request(app)
      .get("/todos")
      .expect(200)
      .then((response) => {
        const firstData = response.body[0];
        expect(firstData.title).toBe("Olahraga Pagi");
        done();
      })
      .catch(done);
  });
    
  it("should return all todos get /todos", (done) => {
    request(app)
      .get("/todos")
      .expect(200)
      .then((response) => {
        const firstData = response.body[0];
        expect(firstData.status).toBe("active");
        done();
      })
      .catch(done);
  });

  it("should return one todo get /todos/:id", (done) => {
    request(app)
      .get("/todos/3")
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.title).toBe("Mengerjakan Homework");
        done();
      })
      .catch(done);
  });
  it("should return one todo get /todos/:id", (done) => {
    request(app)
      .get("/todos/2")
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.title).toBe("Baca Buku");
        done();
      })
      .catch(done);
  });

  it("should create a new todo", (done) => {
    const todoData = {
      title: "New Todo",
      status: "Status of the new todo",
      // Add other required fields for creating a todo
    };

    request(app)
      .post("/todos")
      .send(todoData)
      .expect(201) // Expected status code for successful creation
      .then((response) => {
        const createdTodo = response.body;
        // Validate if the created todo matches the sent data
        expect(createdTodo.title).toBe(todoData.title);
        expect(createdTodo.status).toBe(todoData.status);
        // Add more assertions based on your todo creation logic

        // Additional cleanup or assertions as needed

        done();
      })
      .catch(done);
  });

  
    
});
