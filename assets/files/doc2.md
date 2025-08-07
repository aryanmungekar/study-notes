**![][image1]**

**T.E. (Artificial Intelligence And Data Science)**

**WEB TECHNOLOGY**

**(2019 Pattern) P-7552**

                                                                                          **\[Max Marks: 70\]**

**Q1) a) Explain the Servlet lifecycle and session management in servlets.**

**Ans:**

Servlet Lifecycle

The Servlet lifecycle defines the steps through which a servlet passes during its existence in a servlet container (e.g., Apache Tomcat). The lifecycle consists of three main phases:

1\. Loading and Instantiation

* The servlet container loads the servlet class and instantiates it using the default constructor.

* This happens only once, typically when the servlet is first requested or when the server starts (if load-on-startup is configured).

2\. Initialization (init())

* The container calls the init(ServletConfig config) method once after instantiating the servlet.

* This method is used to initialize resources such as DB connections, configuration parameters, etc.

* Called only once during the lifecycle.

3\. Request Handling (service())

* The container calls service(ServletRequest req, ServletResponse res) method each time a request is made.

* This method:

  * Determines the HTTP method (GET, POST, etc.)

  * Calls the corresponding doGet(), doPost(), etc., of HttpServlet.

4\. Destruction (destroy())

* The container calls destroy() method once before removing the servlet instance.

* This is used to clean up resources, like closing DB connections.

* After this, the servlet is garbage collected.

Session Management in Servlets

Session management ensures that data is maintained across multiple requests from the same client.

1\. Cookies

* Default mechanism.

* Server sends a JSESSIONID cookie to the client.

* Client includes this cookie in future requests.

* Server uses this ID to retrieve the session.

2\. HttpSession Object

* Created using request.getSession().

* Stores user data (e.g., login info) across multiple requests

**b) Explain the concept of XML. Explain DTDs with example to use DTD in XML file.**

**Ans:**

XML (eXtensible Markup Language) is a markup language designed to store and transport data. It is both human-readable and machine-readable. XML does not do anything on its own but is widely used for data exchange between systems and applications.

Key Features of XML:

* Self-descriptive: Tags define the data.

* Customizable: You can define your own tags.

* Platform-independent: Works across different systems.

* Supports hierarchical data structure (nested elements).

DTD (Document Type Definition) defines the structure and legal elements and attributes of an XML document. It acts like a schema to validate XML data.

DTD ensures that the XML file follows a predefined structure.

There are two types of DTDs:

* Internal DTD: Defined inside the XML document.

* External DTD: Defined in a separate file and linked to the XML document.

* Example of DTD  
* a) Internal DTD Example:

\<?xml version="1.0"?\>

\<\!DOCTYPE student \[

  \<\!ELEMENT student (name, age, department)\>

  \<\!ELEMENT name (\#PCDATA)\>

  \<\!ELEMENT age (\#PCDATA)\>

  \<\!ELEMENT department (\#PCDATA)\>

\]\>

\<student\>

  \<name\>John Doe\</name\>

  \<age\>20\</age\>

  \<department\>Computer Science\</department\>

\</student\>

b) External DTD Example:

XML File referencing external DTD:

\<?xml version="1.0"?\>

\<\!DOCTYPE student SYSTEM "student.dtd"\>

\<student\>

  \<name\>John Doe\</name\>

  \<age\>20\</age\>

  \<department\>Computer Science\</department\>

\</student\>

**Q2) a) Write the Servlet code for connecting MySQL with servlets. Explain servlet concurrency.**

**Ans:**

Servlets are Java programs that run on a web server and respond to HTTP requests. When servlets need to interact with a database like MySQL, they use JDBC (Java Database Connectivity).

Steps to Connect Servlet with MySQL:

1. Include MySQL JDBC Driver:

   * Add the MySQL JDBC driver (mysql-connector-java-x.x.x.jar) to the lib folder of your server (e.g., Tomcat).

2. Load the JDBC Driver:

   * Use Class.forName("com.mysql.cj.jdbc.Driver"); to load the driver.

3. Establish a Connection:

   * Use DriverManager.getConnection(URL, username, password);

   * Example URL: "jdbc:mysql://localhost:3306/mydatabase"

4. Create a Statement:

   * You can use Statement or PreparedStatement to execute SQL queries.

5. Execute SQL Queries:

   * Use executeQuery() for SELECT queries and executeUpdate() for INSERT/UPDATE/DELETE.

6. Process Results:

   * Use a ResultSet to read data from SELECT queries.

7. Close Resources:

   * Always close ResultSet, Statement, and Connection to prevent memory leaks.

Advantages of Using JDBC in Servlets:

* Dynamic web applications with real-time database interaction.

* Read and write data based on user input.

* Integration with form submissions, login systems, dashboards, etc.

Key Concepts:

* Single Instance: Only one instance of a servlet is created by the container.

* Multiple Threads: For each incoming request, a new thread is created by the server and the service() method is called concurrently.

* This allows multiple users to access the same servlet at the same time.

Thread Safety Issues:

If servlets use shared resources (e.g., class variables), concurrency can lead to race conditions or data inconsistency.

Concurrency Issues in Servlets:

Since multiple threads run simultaneously:

* Shared resources (like instance variables) can lead to race conditions or data corruption.

* For example, if two threads try to write to the same variable at the same time, the data may be incorrect.

Handle Concurrency Safely:

1\. Avoid Shared Variables:

* Use local variables inside methods. They are stored in each thread’s stack and are safe.

2\. Synchronization:

* Use synchronized blocks only when accessing shared resources, but this can reduce performance.

3\. Thread-safe Collections:

* Use Java collections like ConcurrentHashMap, CopyOnWriteArrayList, etc.

4\. Servlet Filters and Context Attributes:

* For managing global data, use application context attributes with care and synchronize when necessary.

**b) Write note on following:** 

**i) AJAX**

**ii) DTD Vs XML Schema (Min. 05\)**

**Ans:**

AJAX is not a programming language but a web development technique that allows web pages to send and receive data from a server asynchronously, without refreshing the entire web page.

AJAX combines:

* HTML/XHTML and CSS for presentation

* JavaScript for dynamic behavior

* XML/JSON for data exchange

* XMLHttpRequest object for asynchronous communication

*  User Action: A user action (like clicking a button) triggers a JavaScript function.  
*  XMLHttpRequest Object: JavaScript creates an XMLHttpRequest object.  
*  Server Request: This object sends an HTTP request to the server in the background.  
*  Server Response: The server processes the request and sends back a response (data).  
*  Update Web Page: JavaScript receives the data and updates part of the webpage without reloading it.

Advantages of AJAX:

* Improves User Experience: Makes web applications faster and more interactive.

* Partial Page Updates: Only required parts of the page are updated.

* Reduces Server Load: Only essential data is transmitted.

* Platform Independent: Works on any browser that supports JavaScript.

Common Uses of AJAX:

* Live search suggestions (e.g., Google Search)

* Auto-refreshing notifications

* Dynamic form validation

* Real-time chat applications

* Voting and rating systems

Limitations of AJAX:

* JavaScript must be enabled on the client’s browser.

* Security issues if not handled properly (e.g., XSS, CSRF).

* Not ideal for SEO as content may not be visible to search engines.

* Can complicate browser navigation and back button behavior.

When working with XML documents, we often need a way to define rules and structure for the document. Two popular methods to do this are:

* DTD (Document Type Definition)

* XML Schema (also known as XSD – XML Schema Definition)

Key Differences:

1\. Syntax Format:

* DTD uses its own non-XML syntax.

* XML Schema is written in pure XML, which makes it more compatible with XML parsers and tools.

2\. Data Types:

* DTD only supports basic data types like \#PCDATA (parsed character data), ID, and ENTITY.

* XML Schema supports a rich set of data types like string, int, date, boolean, etc., and allows for user-defined types.

3\. Namespace Support:

* DTD does not support XML namespaces, which limits its use in modular or multi-schema XML environments.

* XML Schema fully supports namespaces, making it more suitable for complex and distributed systems.

4\. Validation Power:

* DTD can only validate the structure (element order, nesting).

* XML Schema can validate structure and data (e.g., restrict a value to be a number between 1 and 100).

5\. Extensibility and Reusability:

* DTD lacks features for extensibility, such as inheritance or complex type creation.

* XML Schema allows definition of complex types, element reuse, and inheritance, promoting reuse of data structures.

6\. Tooling and Industry Support:

* DTD has limited modern tool support.

* XML Schema is widely supported in tools like XML editors, IDEs (Eclipse, IntelliJ), and parsers.

**Q3) a) Explain the syntax of JSP with example and differentiate it with Servlet. Also explain the support of JSP for MVC.**

**Ans:**

JSP (JavaServer Pages) is a technology used to create dynamic web content using Java. It allows embedding Java code directly into HTML using special tags.

JSP is server-side and is translated into a servlet by the server during execution.

JSP Syntax Explained

JSP files have a .jsp extension and contain a mix of HTML and Java code.

Main JSP Syntax Elements:

| Syntax Element | Description | Example |
| :---- | :---- | :---- |
| Directive | Provides global info about the page (import, error handling, etc.) | \<%@ page language="java" contentType="text/html" %\> |
| Scriptlet | Java code inserted into JSP | \<% int x \= 10; %\> |
| Expression | Outputs Java expression result | \<%= x \* 2 %\> |
| Declaration | Declares methods or variables | \<%\! int count \= 0; %\> |
| Comment | JSP comment, not shown in HTML | \<%-- This is a comment \--%\> |
| Action Tag | XML-style tag for specific actions | \<jsp:include page="header.jsp" /\>  |
|  |  |  |

Difference Between JSP and Servlet

| Feature | JSP (JavaServer Pages) | Servlet |
| :---- | :---- | :---- |
| Definition | HTML with embedded Java | Pure Java class handling HTTP requests |
| Primary Use | Presentation layer (UI) | Logic and control layer |
| Ease of Use | Easier for designers | Requires Java coding knowledge |
| Compilation | Compiled to servlet by server | Written and compiled as Java class |
| Separation of Concerns | Good for view in MVC | Good for controller in MVC |
| Maintainability | Easier for HTML-heavy pages | Easier for logic-intensive operations |
| Performance | Slightly slower due to compilation | Typically faster |

JSP Support for MVC (Model-View-Controller)

MVC Architecture Overview:

* Model: Handles business logic and database access (e.g., Java Beans, JDBC).

* View: Presentation layer (usually JSP).

* Controller: Controls the flow (usually Servlets).

Role of JSP in MVC:

* JSP is used as the View component.

* It should not contain business logic, but display data passed from the controller.

* The servlet (Controller) processes user input, interacts with the model, and forwards results to the JSP.

Benefits of Using JSP in MVC:

* Clear separation between logic and UI.

* Easier maintenance and scalability.

* Allows reuse of business logic and models.

* Designers can work on JSP while developers work on servlets/models.

**b) What are web services? Explain the concept of WSDL.**

**Ans:**

A web service is a standardized way for applications (usually over a network) to communicate and exchange data using web protocols like HTTP. Web services allow different applications written in different languages or running on different platforms to interoperate.

Key Characteristics of Web Services:

* Interoperable: Works across different platforms and languages.

* Network-based: Uses the internet or intranet to exchange information.

* Based on Standards: XML, SOAP, WSDL, and UDDI are commonly used.

* Loosely Coupled: Services are independent of each other.

* Reusable and Discoverable: Can be registered and discovered by other applications.

Types of Web Services:

1. SOAP Web Services:

   * Use SOAP (Simple Object Access Protocol) over HTTP.

   * Data is sent in XML format.

   * Well-suited for enterprise-level applications.

2. RESTful Web Services:

   * Use HTTP methods (GET, POST, PUT, DELETE).

   * Data is typically exchanged in JSON or XML.

   * Simpler and lightweight compared to SOAP.

WSDL is an XML-based language that describes the functionality of a SOAP-based web service. It acts as a contract between the web service provider and client, telling the client how to interact with the service.

Purpose of WSDL:

* Describes what the service does.  
* Defines the methods or operations available.  
* Specifies the input and output parameters.  
* Details the data types used.  
* Provides the service endpoint (URL).  
* Structure of a WSDL File:

| Element | Description |
| ----- | ----- |
| \<definitions\> | Root element of the WSDL document |
| \<types\> | Defines the data types (usually using XML Schema) |
| \<message\> | Defines input and output messages |
| \<portType\> | Defines the set of operations (interface) |
| \<binding\> | Specifies the protocol and data format (e.g., SOAP) |
| \<service\> | Specifies the service endpoint (where the service can be accessed) |

Benefits of WSDL:

* Machine-readable contract for generating client code.  
* Language-independent: Clients in Java, .NET, Python, etc. can consume it.  
* Used in tooling to auto-generate code (e.g., using wsimport in Java).

**Q4) a) Explain the JavaBeans classes in JSP with example.**

**Ans:**

In JSP (JavaServer Pages), JavaBeans are reusable software components that follow specific conventions. They encapsulate many objects into a single object (the bean), so they can be passed around easily. JavaBeans are used in JSP to separate the business logic from the presentation logic, making the code more modular and maintainable.

JavaBeans Class Requirements

A Java class must meet the following requirements to be considered a bean:

1. Must have a public no-argument constructor.  
2. Properties should be accessed using getter and setter methods.  
3. Should be serializable (optional but recommended for persistence or remote access).

Using JavaBeans in JSP

There are three main JSP action tags used to work with JavaBeans:

* \<jsp:useBean\> – Instantiates or locates the bean.  
* \<jsp:setProperty\> – Sets properties in the bean.  
* \<jsp:getProperty\> – Retrieves properties from the bean.

Example

1\. JavaBean Class (User.java)

package com.example;

public class User {

    private String name;

    private int age;

    // No-argument constructor

    public User() {}

    // Getter and Setter for name

    public String getName() {

        return name;

    }

    public void setName(String name) {

        this.name \= name;

    }

    // Getter and Setter for age

    public int getAge() {

        return age;

    }

    public void setAge(int age) {

        this.age \= age;

    }

}

2. JSP File (user.jsp)

\<%@ page import="com.example.User" %\>

\<jsp:useBean id="user" class="com.example.User" scope="session" /\>

\<jsp:setProperty name="user" property="name" value="John Doe" /\>

\<jsp:setProperty name="user" property="age" value="30" /\>

\<h2\>User Information\</h2\>

\<p\>Name: \<jsp:getProperty name="user" property="name" /\>\</p\>

\<p\>Age: \<jsp:getProperty name="user" property="age" /\>\</p\>

Benefits of JavaBeans in JSP

* Separation of concerns: Keeps logic and presentation separate.  
* Reusability: Beans can be reused across multiple JSP pages.  
* Encapsulation: Data and logic are encapsulated within the bean.

**b) Write note on struts.**

**Ans:**

Struts is an open-source MVC (Model-View-Controller) framework for building Java EE web applications. It was originally developed by the Apache Software Foundation. Struts help developers create maintainable, extensible, and scalable web applications by separating application logic from user interface.

Key Components of Struts

1. Model: Represents the business logic (usually JavaBeans, EJBs, or POJOs).

2. View: JSP pages that present the data to the user.

3. Controller: ActionServlet that acts as a central controller handling all the requests.

Struts Workflow

1. User submits a form (HTTP request).

2. ActionServlet receives the request.

3. The servlet reads struts-config.xml to find the appropriate ActionForm and Action class.

4. The ActionForm is populated with user data.

5. The Action class processes the request.

6. A result (usually a JSP) is returned as a response.

Architecture of Struts

Struts follows a layered architecture based on MVC:

1. Model Layer:

   * Represents the business logic of the application.

   * Typically implemented using JavaBeans, EJB, or POJOs.

   * Interacts with the database or performs core computations.

2. View Layer:

   * Consists of JSP pages, HTML, or other front-end technologies.

   * Responsible for rendering data to the user.

   * Communicates with the user and collects input.

3. Controller Layer:

   * Centralized using a component called ActionServlet.

   * Handles all client requests and routes them to appropriate Action classes.

   * Uses struts-config.xml to determine the request flow.

Key Features of Struts

* Open-source and community-driven framework.

* Implements MVC design pattern for better application structure.

* Uses XML-based configuration (struts-config.xml) to manage application flow.

* Supports form beans for handling user inputs.

* Has built-in support for input validation and error handling.

* Allows internationalization (i18n) for multi-language support.


Advantages of Struts

* Follows MVC architecture.

* Encourages code reusability and separation of concerns.

* Provides built-in validation and internationalization support.

* Integration with other technologies like Hibernate, Spring.

Disadvantages

* Can be complex for small projects.

* XML-based configuration can be verbose and harder to maintain.

* Being older, it’s largely replaced by modern frameworks like Spring MVC.

Example (Basic Flow)

struts-config.xml:

\<action path="/login"   
        type="com.example.LoginAction"  
        name="loginForm"  
        input="/login.jsp"  
        scope="request"  
        validate="true"\>  
    \<forward name="success" path="/welcome.jsp"/\>  
    \<forward name="failure" path="/error.jsp"/\>  
\</action\>

**Q5) a) Explain arrays and functions in PHP with example.**

**Ans:**

An array is one of the most powerful data types in PHP. It allows you to group related data and work with it efficiently.

Characteristics of PHP Arrays:

* Dynamic size: You don't need to declare the size beforehand.

* Heterogeneous: Can store different data types (strings, integers, even other arrays).

* Flexible indexing: Allows both numeric and associative (string) keys.

Types of Arrays in PHP:

1. Indexed Arrays – Arrays with numeric indexes.

2. Associative Arrays – Arrays with named (string) keys.

3. Multidimensional Arrays – Arrays containing one or more arrays.

Example: Using Array Functions

      \<?php

$fruits \= array("Apple", "Banana", "Cherry");

echo count($fruits); // Outputs: 3

sort($fruits); // Sorts the array alphabetically

print\_r($fruits);

?\>

A function is a self-contained block of code designed to perform a specific task. Functions improve code organization, reuse, and testing.

Types of Functions in PHP:

1. Built-in Functions – Predefined in PHP (e.g., strlen(), date(), array(), etc.)

2. User-defined Functions – Created by the programmer.

Features of Functions:

* Can accept any number of parameters.

* Can return any type of value, including arrays and objects.

* Support for default parameters and variable-length argument lists (using ... operator).

* PHP 7+ supports type declarations and return type declarations.

Example: Function with Default Parameter

   \<?php

function greet($name \= "Guest") {

    echo "Hello, $name\!";

}

greet();  // Outputs: Hello, Guest\!

greet("Rahul");  // Outputs: Hello, Rahul\!

?\>

**b) Explain. NET framework with CLI and CLR.**

**Ans:**

What is the .NET Framework?

The .NET Framework is a software development platform developed by Microsoft. It provides a runtime environment and a comprehensive class library for building and running applications, especially on Windows.

It supports multiple programming languages like C\#, VB.NET, F\#, etc., and allows cross-language integration and interoperability.

Key Components of .NET Framework

1. Common Language Infrastructure (CLI)

2. Common Language Runtime (CLR)

3. Base Class Library (BCL)

4. Language Compilers (C\#, VB.NET, etc.)

5. ASP.NET, Windows Forms, ADO.NET, etc.

1\. Common Language Infrastructure (CLI)

The Common Language Infrastructure (CLI) is an open specification developed by Microsoft that describes:

* The execution environment for .NET applications.

* How code is compiled, executed, and managed.

It defines several core elements:

* CTS (Common Type System) – Defines how data types are declared and used across languages.

* CLS (Common Language Specification) – Ensures interoperability between .NET languages.

* MSIL (Microsoft Intermediate Language) – The low-level set of instructions generated by compilers.

* Metadata – Information about the program's structure, types, and references.

* Common Language Runtime (CLR)  
* The Common Language Runtime (CLR) is the core execution engine of the .NET Framework. It is responsible for managing the lifecycle of .NET applications.

.NET Compilation and Execution Flow

1. Code written in a .NET-supported language (e.g., C\#).

2. Compiler compiles code into MSIL (Intermediate Language) \+ metadata.

3. Code and metadata are stored in an assembly (.exe or .dll).

4. CLR loads the assembly and uses JIT compiler to convert MSIL to native machine code.

5. The application runs within the managed environment provided by CLR.

Advantages of .NET Framework

* Supports language interoperability.

* Provides a rich class library for rapid development.

* Ensures memory and exception management.

* Offers security and type safety.

* Facilitates cross-platform development (especially in .NET Core and .NET 5+).

**Q6) a) Explain the PHP and MySQL connectivity steps with example. Explain the PHP function with example for executing MySQL DML statements.**

**Ans:**

Steps to Connect PHP with MySQL

To connect PHP with a MySQL database, you can use:

* MySQLi (MySQL Improved) extension (procedural or object-oriented)

* PDO (PHP Data Objects) – a more flexible, database-agnostic method

We’ll use MySQLi (procedural style) for simplicity.

Step-by-Step MySQL Connection in PHP:

1. Establish a connection to the MySQL database using mysqli\_connect().

2. Check the connection for success or failure.

3. Write SQL queries (e.g., INSERT, UPDATE, DELETE).

4. Execute the query using mysqli\_query().

5. Close the connection using mysqli\_close().

Example: PHP-MySQL Connection and INSERT Operation

  \<?php

// Step 1: Connect to MySQL

$servername \= "localhost";

$username \= "root";

$password \= "";

$database \= "college";

$conn \= mysqli\_connect($servername, $username, $password, $database);

// Step 2: Check Connection

if (\!$conn) {

    die("Connection failed: " . mysqli\_connect\_error());

}

echo "Connected successfully\<br\>";

// Step 3: Write SQL DML query (INSERT)

$sql \= "INSERT INTO students (name, age, course) VALUES ('John', 20, 'BCA')";

// Step 4: Execute query

if (mysqli\_query($conn, $sql)) {

    echo "Record inserted successfully\!";

} else {

    echo "Error: " . mysqli\_error($conn);

}

// Step 5: Close connection

mysqli\_close($conn);

?\>

PHP Functions Used for MySQL DML Operations

| Function | Purpose |
| :---- | :---- |
| mysqli\_connect() | Establishes connection to the MySQL server |
| mysqli\_query() | Executes SQL query (SELECT, INSERT, UPDATE, DELETE) |
| mysqli\_error() | Returns a description of the last error |
| mysqli\_close() | Closes the database connection |

Examples of DML Operations in PHP

1\. INSERT

    $sql \= "INSERT INTO students (name, age) VALUES ('Alice', 21)";

mysqli\_query($conn, $sql);

2\. UPDATE

     $sql \= "UPDATE students SET age \= 22 WHERE name \= 'Alice'";

mysqli\_query($conn, $sql);

3\. DELETE

      $sql \= "DELETE FROM students WHERE name \= 'Alice'";

mysqli\_query($conn, $sql);

**b) Write note on node JS**

**Ans:**

Introduction to Node.js

Node.js is an open-source, cross-platform, runtime environment built on Google Chrome's V8 JavaScript engine. It allows developers to run JavaScript outside the browser, typically for building server-side and network applications.

Node.js is known for its non-blocking I/O model, which makes it lightweight and efficient — ideal for data-intensive, real-time applications.

Key Features of Node.js

1. Asynchronous and Event-Driven:

   * All APIs are non-blocking.

   * Node uses event-driven architecture, making it ideal for handling multiple simultaneous connections.

2. Single-Threaded but Highly Scalable:

   * Node.js uses a single-threaded event loop model, but can handle thousands of concurrent connections efficiently.

3. Fast Execution:

   * Built on V8 engine, which compiles JavaScript to machine code for fast performance.

4. NPM (Node Package Manager):

   * Huge ecosystem of reusable packages and modules.

   * Allows easy installation and management of third-party libraries.

5. Cross-Platform:

   * Works on Windows, Linux, and macOS.

Common Uses of Node.js

* Real-time chat applications (e.g., WhatsApp web)

* RESTful APIs and web services

* Streaming services (e.g., Netflix backend)

* IoT (Internet of Things) applications

* Server-side scripting for dynamic websites

Basic Example in Node.js

     // Simple Node.js HTTP server

const http \= require('http');

const server \= http.createServer((req, res) \=\> {

  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hello from Node.js\!');

});

server.listen(3000, () \=\> {

  console.log('Server running at http://localhost:3000/');

});

Advantages of Node.js

* High performance for I/O-heavy applications

* Uses JavaScript for both client and server

* Large and active developer community

* Extensive library support via NPM

* Good for microservices and REST APIs

Limitations of Node.js

* Not ideal for CPU-intensive tasks (e.g., image/video processing)

* Single-threaded nature may lead to bottlenecks in heavy computations

* Asynchronous code can be difficult to manage (callback hell, though improved with Promises and async/await)

**Q7) a) Explain the classes and arrays in Ruby.**

Ans:

1\. Classes in Ruby

A class in Ruby is a blueprint for creating objects. It defines attributes (variables) and methods (functions) that the objects created from the class will have.

Creating a Class in Ruby:

     class Student

  def initialize(name, age)

    @name \= name      \# Instance variable

    @age \= age

  end

  def display

    puts "Name: \#{@name}, Age: \#{@age}"

  end

end

\# Creating an object

s1 \= Student.new("John", 21\)

s1.display

Explanation:

* initialize is a constructor method in Ruby.

* @name and @age are instance variables.

* Student.new creates a new object.

* display is a method defined in the class.

Features of Ruby Classes:

* Support inheritance, encapsulation, and polymorphism (OOP).

* Use attr\_accessor, attr\_reader, and attr\_writer to manage attributes.

* Can define class variables (@@) and class methods (self.method\_name).

2\. Arrays in Ruby

An array in Ruby is an ordered collection of elements, which can be of any data type: numbers, strings, or even other arrays.

Creating Arrays:

      \# Empty array

arr1 \= \[\]

\# Array with elements

arr2 \= \[10, 20, 30, 40\]

\# Mixed data types

arr3 \= \["John", 25, true\]

**b) Give overview of Rails and documents requests. Explain Rails with AJAX.**

**Ans:**

Overview of Ruby on Rails

Ruby on Rails, commonly known as Rails, is a powerful open-source web application framework written in Ruby. It follows the Model-View-Controller (MVC) architecture and promotes convention over configuration, DRY (Don't Repeat Yourself) principles, and RESTful design.

Key Features of Rails:

* MVC architecture  
* Integrated ORM (ActiveRecord) for database handling  
* Convention-based coding  
* Built-in testing tools  
* Supports AJAX and WebSockets  
* Emphasizes developer productivity

Document Requests in Rails

When a client (like a browser) sends a request to a Rails application, it follows a standard flow:

 Flow of a Request in Rails:

1. Request Initiation  
   A user accesses a URL in the browser (e.g., /students).  
2. Routing  
   The request is matched by routes.rb to a controller and action.  
3. Controller Action  
   The controller processes the request, fetches data via models, and chooses a view.  
4. Model Interaction  
   The model interacts with the database using ActiveRecord.  
5. Rendering View  
   The controller renders the view (HTML, JSON, etc.) and sends it to the browser.  
6. Response  
   The client receives and displays the response.

Rails with AJAX

AJAX (Asynchronous JavaScript and XML) allows a web page to communicate with the server without reloading the entire page. Rails has built-in support for AJAX using the respond\_to block and remote: true option in forms or links.

 Benefits of Using AJAX in Rails:

* Improves user experience by making the app faster and more interactive.  
* Reduces full-page reloads.  
* Allows partial updates to HTML content.

Example: AJAX in Rails

      Step 1: AJAX Form in View

\<%= form\_with (url: students\_path, method: :post, remote: true) do |form| %\>

  \<%= form.text\_field :name %\>

  \<%= form.submit "Add Student" %\>

\<% end %\>

       Step 2: Controller Responds with JavaScript

def create

  @student \= Student.create(name: params\[:name\])


  respond\_to do |format|

    format.js   \# renders create.js.erb

    format.html { redirect\_to students\_path }

  end

end

    Step 3: JS Response View (create.js.erb)

alert("Student added successfully\!");

$("\#student-list").append("\<li\>\<%= @student.name %\>\</li\>");

**Q8) a) Write note on:**

1) **Code blocks and iterators in Ruby**  
   2) **Pattern machine in Ruby**  
   3) **Processing forms in Rails.**

**Ans:**

Code Blocks 

* Definition: A code block is an anonymous group of statements that can be passed to methods in Ruby. It acts like a callback — a way of injecting behavior into a method from the outside.

* Types:

  * {} for short, single-line blocks

  * do...end for multi-line blocks

* Why Important in Ruby?

  * Ruby emphasizes simplicity and elegance.

  * Code blocks allow developers to write clean, readable, and expressive code without defining methods unnecessarily.

* Closures: Ruby blocks form closures, meaning they remember the environment in which they were defined. This allows them to use external variables.

* Block vs Proc vs Lambda:

  * Block: Implicitly passed to methods (via yield)

  * Proc: Block converted to an object using Proc.new

  * Lambda: Similar to Proc but behaves like a method (strict argument checking)

 Iterators 

* Definition: Iterators are methods that traverse or loop over elements in a collection and optionally take a block to operate on each element.

* Common Iterators:

  .each – loop through each element

  * .map – transform elements and return a new array

  * .select – filter elements based on condition

  * .times, .upto, .downto – control flow iteration

* Block-Iterator Relationship:

  * Iterators are designed to work seamlessly with blocks in Ruby, making code both powerful and concise.

 Ruby Philosophy Reflection:

Ruby is built on the principle of "developer happiness". Code blocks and iterators reduce boilerplate and encourage concise, expressive programming.

2\) Pattern Matching in Ruby (Detailed Theory)

 Pattern Matching – Theory

* What It Is:  
  Pattern matching is a declarative way to extract values from complex data structures like arrays and hashes, while simultaneously checking their structure.

* Origins:  
  Introduced in Ruby 2.7, inspired by pattern matching in functional languages like Elixir and Haskell.

 How It Works:

* Uses case/in statements for matching.

* Matches are structural and conditional.

* Values can be assigned while checking structure.

ruby

case data

in \[a, b\]

  \# a and b assigned values from array

end

 Benefits:

* Cleaner and more readable than multiple if or case conditions.

* Makes destructuring more expressive and less error-prone.

* Useful in API parsing, command routing, data validation, and more.

 Advanced Use Cases:

* Matching deeply nested hashes

* Applying guards (if conditions)

* Matching against custom objects (with deconstruct methods)

3\) Processing Forms in Rails (Detailed Theory)

 Form Handling in Rails – Theory

* Role of Forms:  
  Forms are essential for accepting user input in web applications, such as registration, login, data entry, etc.

* Rails Form Philosophy:

  * Uses helper methods (form\_with, form\_for) to auto-generate form HTML.

  * Minimizes boilerplate and increases consistency.

  * Strongly integrated with MVC structure — forms map directly to model-backed objects.

 Rails Workflow:

| Step | Description |
| :---- | :---- |
| 1\. View | Form created using form\_with, tied to a model instance |
| 2\. Submission | Form data is sent as HTTP POST (or PATCH/PUT) |
| 3\. Controller | Receives data, uses strong parameters to whitelist fields |
| 4\. Model | Data is validated and persisted (saved) to the database |
| 5\. Response | Controller redirects or re-renders based on success or failure |

 Strong Parameters:

* Introduced to prevent mass assignment vulnerabilities.

* Requires use of params.require(:model).permit(:field1, :field2).

 Types of Forms in Rails:

| Type | Description |
| :---- | :---- |
| form\_with | Modern, supports both AJAX and standard forms |
| form\_for | Older, tied directly to model objects |
| form\_tag | Used for non-model-based forms |

Benefits of Rails Forms:

* Enforces RESTful design patterns.

* Integrates deeply with ActiveRecord validations.

* Supports AJAX and remote: true forms.

* Promotes security through strong parameter filtering.

**b) Explain the concept of EJB.**

**Ans:**

Enterprise JavaBeans (EJB) 

1\. Definition:

Enterprise JavaBeans (EJB) is a server-side component architecture for the development and deployment of distributed, transactional, secure, and portable enterprise-level applications in Java.

It is part of the Java EE (Jakarta EE) specification and provides a standard way to build business logic that can be reused across different applications and accessed remotely if needed.

2\. Goals of EJB:

* To simplify the development of large, distributed, and transactional applications.

* To allow developers to focus on business logic while the EJB container handles system-level services (like transactions, security, and concurrency).

* To ensure scalability, maintainability, and portability of enterprise applications.

3\. EJB Container:

* The EJB container is part of the application server (like JBoss, GlassFish, or WebLogic).

* It manages the lifecycle of EJBs, provides services such as:

  * Transaction management

  * Security (role-based access control)

  * Concurrency control

  * Dependency injection

  * Remote access and communication

  * Resource management (e.g., database connections)

* 4\. Types of EJBs:

| Type | Description | Use Case |
| ----- | ----- | ----- |
| Stateless Session Bean | No client-specific state between calls. Efficient for short tasks. | Logging, authentication |
| Stateful Session Bean | Maintains state specific to a single client across method calls. | Shopping cart, user session |
| Singleton Session Bean | A single instance shared across the application. Useful for shared resources. | Cache, configuration |
| Message-Driven Bean (MDB) | Handles asynchronous messages, usually from a JMS queue. | Email service, order processing |

5\. Features of EJB:

* Remote and Local Access:  
  EJBs can be accessed by clients locally or remotely using RMI (Remote Method Invocation).

* Declarative Transactions:  
  You can define transaction boundaries using annotations or XML, allowing the container to manage transactions automatically.

* Security:  
  EJB provides declarative security using roles and permissions that can be defined in deployment descriptors or annotations.

* Lifecycle Management:  
  The EJB container manages the creation, pooling, activation, passivation, and destruction of beans.

* Interceptors:  
  EJB allows use of interceptors to handle cross-cutting concerns (like logging or auditing) before/after business methods are called.

6\. Advantages of EJB:

* Reduces development effort through automatic handling of low-level concerns.

* Promotes modularity and reusability.

* Built-in support for distributed computing.

* Seamless integration with databases and messaging services.

* Facilitates enterprise-level security and transaction support.

7\. Disadvantages of EJB:

* Can be complex to configure and deploy.

* May introduce performance overhead due to abstraction.

* More suitable for large-scale applications—might be overkill for simple apps.

PURCHASED FROM: 

    [*https://sppu-notz.myshopify.com*](https://sppu-notz.myshopify.com/products/dbms-te-ai-ds-sppu-quick-notes) 

Thank-You

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAANTCAYAAAB2I7OWAACAAElEQVR4XuzdBXQU19sG8FLqRnF3ipPgcXfcoUChxUtL0aLFiktwCU6AoMEdgjsUd3fXAAnEeL65E3Y7e3eTLCkD/L88v3PeE9i5M9mZTXaf3Llz5yMQERERkS4+kh8gIiIioreDQYuIiIhIJwxaRERERDph0CIiIiLSCYMWERERkU4YtIiIiIh0wqBFREREpBMGLSIiIiKdMGgRERER6YRBi4iIiEgnDFpEREREOmHQIiIiItIJgxYRERGRThi0iIiIiHTCoEVERESkEwYtIiIiIp0waBERERHphEGLiIiISCcMWkREREQ6YdAiIiIi0gmDFhEREZFOGLSIiIiIdMKgRURERKQTBi0iIiIinTBoEREREemEQYuIiIhIJwxaRERERDph0CIiIiLSCYMWERERkU4YtIiIiIh0wqBFREREpBMGLSIiIiKdMGgRERER6YRBi4iIiEgnDFpEREREOmHQIiIiItIJgxYRERGRThi0iIiIiHTCoEVERESkEwYtIiIiIp0waBERERHphEGLiIiISCcMWkREREQ6YdAiIiIi0gmDFhEREZFOGLSIiIiIdMKgRURERKQTBi0iIiIinTBoEREREemEQYuIiIhIJwxaRERERDph0CIiIiLSCYMWERERkU4YtIiIiIh0wqBFREREpBMGLSIiIiKdMGgRERER6YRBi4iIiEgnDFpEREREOmHQIiIiItIJgxYRERGRThi0iIiIiHTCoEVERESkEwYtIiIiIp0waBERERHphEGLiIiISCcMWkREREQ6YdAiIiIi0gmDFhEREZFOGLSIiIiIdMKgRURERKQTBi0i+p/z6tUr+SEiog8SgxYR/U+Ii4tTA5Yow7+JiD50DFpE9MEyBKvEiojoQ8agRUQfJDlQRUdH49jRo7h06ZLZMiKiDxWDFhF9UOQQJU4THjhwAK4uTvD3dYab8tXVxQXnz58zO51IRPShYdAiog+GpZDVs2cPONjbY8PSgoi5lxpRt7/EvKll4ezkiCmTJ7Nni4g+aAxaRPRBkEOWOFUY4O+LWtVcEXnje8Td/wivlIq7q9SdVDi79wdU8HdBkya/mPRsERF9SBi0iOidk0OVXMuWLlVClCueXfkyPlgp9erBv0Hrlag7yr9vfYQ7xzPCz9cH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WkREREQ6YdAiIiIi0gmDFhEREZFOGLSIiIiIdMKgRURERKQTBi0iIiIinTBoEREREemEQYuIiIhIJwxaRERERDph0CIiIiLSCYMWERERkU4YtIiIiIh0wqBFREREpBMGLSIiIiKdMGgRERER6YRBi4iIiEgnDFpEREREOmHQIiIiItIJgxYRERGRThi0iIiIiHTCoEVERESkEwYtIiIiIp0waBERERHphEGLiIiISCcMWkREREQ6YdAiIiIi0gmDFhEREZFOGLSIiIiIdMKgRURERKQTBi0iIiIinTBoEREREemEQYuIiIhIJwxaRERERDph0CIiIiLSCYMWERERkU4YtIiIiIh0wqBFREREpBMGLSIiIiKdMGgRERER6YRBi4iIiEgnDFpEREREOmHQIiIiItIJgxYRERGRThi0iIiIiHTCoEVERESkEwYtIiIiIp0waBERERHphEGLiIiISCcMWkREREQ6YdAiIiIi0gmDFhEREZFOGLSIiIiIdMKgRURERKQTBi0iIiIinTBoEREREemEQYuIiIhIJwxaRERERDph0CIiIiLSCYMWERERkU4YtIiIiIh0wqBFREREpBMGLSIiIiKdMGgRERER6YRBi4iIiEgnDFpEREREOmHQIiIiItIJgxYRERGRThi0iIiIiHTCoEVERESkEwYtIiIiIp0waBERERHphEGLiIiISCcMWkREREQ6YdAiIiIi0gmDFhEREZFOGLSIiIiIdMKgRURERKQTBi0iIiIinTBoEREREemEQYuIiIhIJwxaRERERDph0CIiIiLSCYMWERERkU4YtIiIiIh0wqBFRET0f+3dBbgdxf3/cdzdixQoLoXgrgUKbXH54w4FiltLW+gvUIpTJEiCkxQLUKC4FneXBEtwh9y4Z/989nY2s9+dPWfPvWfCvTfv1/PMk5zd2T16dz9nZnYOEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgCaZuzYsclHH32UvPHGG8kLL7yQ/vv999/bavjR0KFDk/feey958cUXk5deein58MMPk5EjR9pqHYbex379+iXPP/988sorryT9+/dP3+9mmjBhQvL1118nr732Wno/+vx8/PHHyZgxY2xVoNMgaKEpVlhhhWTuuefOlVrGjx+fzD///Ln648aNs9VyunXrlqt/6aWX5taff/75hcfQSLG+/fbbQp2y8otf/CLZbLPNkr59+7b55DN8+PDCftta9Po6t99+e2F9I+Wmm27yHmWYTohHHHFEMuWUUyZTTDFFocw333zJIYcckowePdpumnP//fcX7l/BrYpBgwYVtr3gggtstdSaa65ZqLv00kvbakFHH310YduqFCRuvfXWZNllly28Rip6/VZfffXk0UcftZuW+uqrrwqPp3fv3rZamyjgXHbZZcnGG29ceKwq00wzTbL55psnb731lt20IXrv9tprr2SOOeYo3IfKVFNNlfz+979PQ2nINttsU3gNFAarCB2Lll9+eVsNaDOCFpritttuKxwcaznrrLMK9d9//31bLaNvz/Xqn3766YU6jRRL36xtnaql6knbN2zYsMJ+2lr8oKWgZNc3Uq6//nrvUeY9++yzyTzzzFPYplaZa6657G4yd911V6H+gAEDbLWgH374obDtmWeeaaul9P7YuipLLLGErVpw0EEHFbarRwFLAc1uV68o5NTz5ZdfFra78sorbbWGjBo1Ktlyyy0L+61VFIZ22WUXu6uavvnmm2TGGWcs7KtW0efnsccey+1HX9IWXHDBXD2FVrUa1jPnnHMW7qPeFwKgEfWPEEAFOpHYg5VOwmXWW2+9Qv3jjz/eVstcc801hfpWRwpaKm+//bbdZU2dLWj16tWrULdqWW211ezuUj910FLp06ePrZ7TlqC16qqrFrapWhTQaokRtNSqY/dZtdxzzz12d0H6+5p66qkL21cpClGPPPJIbn8PP/xwod5KK62UqxNit1EBmolPFJpm2mmnzR2slllmGVslo2+/9uBW6wC36aab5urpQGuFgtZSSy2VLLfccpWKFQpap5xySvLUU09l5cknn0y7gtR1auvWej4hI0aMSF+zUFHXm923reMXBV8nFLQUNOzzLyt33nmn9yhbafyM3af/uH7zm9+kXT36t6zF6+c//3mh5aAjBC0VP6hajQatsu7UmWeeOe0O32+//ZK99947/QxNN910hXoqev/LNDtorbjiioX9qSh8qctVz3/XXXdNuzjL/o7V1ViLWursNq4stNBCyY477pgcfvjhaaua3quyQGadc845hTr77ruvrZZR4Pfr6vkMHjzYVgPapfhJBdpIJwv/oKUugTL2YOiKPfE6M800U67e4osvbqsEg5bGr7RVKGiVte7IzjvvXKj/ySef2GptovFndt9VhYKWxsS0ld6jxRZbrLBPBYfQ663QpxbJWWaZpbCNupx9HSVo2fF/vkaC1rvvvluoq9K9e/fgWD49BwUDW1+lLPw1M2jdeOONhX2pbLvttrnw7qj7foMNNijUV6klFJwWWWSRQpegowHxoRD6xBNP2KqFOhpHFqLxgLbuySefbKsB7Vb7rwFogK6c8g9a+nYYOjhrXIY9wLlSNnjZ1tt6661tlZ88aOlEaOtrIHozdKSgpZO43Z/GuehkWMs777yT22bhhRcuDG7uKEFLXxL0OQ1pJGits846hbpbbLGFrVYQGjekiwlCmhm0Zp111sK+FArrsduo/Oc//7HVUrrIxNZVqXdlob60+PX1PoSopdTuW8cmS1/WbL0qY7qARpUfIYAGqevLHrguvPBCWy256KKLCvVcmWGGGWz19JJ3Wy/0zfenDlpi69sB+23VkYJWqCss1DoTsvbaa6cBXIOtQzpK0FIpawmpGrQUsm29HXbYwVYrZbvi9brrylSrWUHrgAMOKOzn6quvttWCQq+9uoxD1lhjjUJdTRtRRUtLS9plH/oC5+g4NP300+f2rxY0vU6Oxk/ax7Dbbrt5ewGaJ3yEANrIHrw2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KTdS9NlvaWmxu82EglYjxdK4tFB4qlqqdDeqhdP+xmm9stRSSyW77757bhlBC50BnzZEYw9srihMldFvH9r6Kvr2X09HC1r6uZSqIaGejhi0RDNr2/r1ik7i/tQevo4ctMROxlt1W03AaweLVym6qES/IVhLs4OWaIqWUCtkvaIxeApqVWhOMvuTPbWKuiIJWuiM+LQhmtCEjyqhCQodtXLY+ioKGvV0pKA133zzlYaJtuioQUtdY7179y5sU1bUXfjYY4/Z3WQ6etB6++23C9tV3VZfIkIT2paV1VZbLe06qydG0BLNCVc1CCk8a447/c00QhcM1PplBVf22WeftD5BC50RnzZEo+4BnST9UuUnL+w2KrUGDzsa4G23a6RYCn22Tln56KOPks8//7zSFWVtoa4je59V6THZbRspVS8o0MUMGhOnaRt0Zdniiy+erL766mkA1likKq+N9mHvv0rYEE0dYLct63LTfGy2blV2u0a2dRQwrrrqqjScqNVKE5Huueee6Y92NzLXljTyOQ2Veib8GKbVqnbeeeeloVtdxt26dUtbmTUez07R0RYjR45MxzIqSOkzs9JKK6U/16O/KX8uLz0O/7FXOZ6IwmijzxtoFoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtdHhDhw5Nfvvb3ybnnntuMn78+Ny6p556Ktl///2TlVdeOdl4442Te++9N11+3nnnJQcddFDy/fff5+pXceaZZyZbbbVV0rdvX7uqrs8//zw59thj0zJ8+HC7usM655xz0ses19jnnsuQIUOyZR988EGyyy67JLfccotXE2jcww8/nOywww7Ja6+9ZlcBXQZBC+1y9dVXJ1NMMUVWJkyYYKu020YbbZTt/6GHHsqWL7HEErn7Vjn11FOTF198Mbu9/vrre3uqxt9fo1599dVs23ohb84550zrrbbaanbVJLfiiiumj0WB1eeey1dffZUtm3HGGdv8+nQF7777brLIIovkPiebb755MnbsWFu14JVXXslt55ef//znyT777JMMGjTIbtYhfPzxx8maa65ZeNz6PPh/l1X98MMPuf0AXRWfbrTLGmuskTtYtrWV429/+1sy++yzJzPPPLNdldx5553Z/v3w4pZNNdVU6fJvv/02+fLLL9NWL7fuqquu8vZUzXTTTZduq8fTqEkdtC688MJknnnmSeaYYw67qiGNBK1DDz00XTbttNN6NScfet7udfHLAQccYKsW1AparujzZ1tuGzH//PMns802W/LNN9/YVe0y/fTTFx6rK1NOOWXDLcD6UrbUUkul26+11lp2NdBlELTQZgo1/oFW/+qbfVscfvjh2UkmJHTicfe94IIL2lXtNm7cOLuokkkdtLp3757uY6aZZrKrGtJI0JLQ+1FGn40tt9wyGTNmjF3VKbnX5Mgjj0xvq7u66nvgBy1trxbhiy++OA1pfoBTWGort4+vv/7armqzTz/9NNvvzjvvnHz44YfpF5u99torfdwKTG3VyGcJ6IwIWmiz3XffPTv4Pv/889n/Q+MtlltuuTQQXXvttcnTTz+dBqqpp5466devX3pS0UlK2+qkrNsq6623Xrqtwou2VRk8eHAycODAdL27P3diUvnoo4/SbVz9u+++238Y6cnhqKOOyrabYYYZkoMPPjjXXeO21WP2qUvyd7/7XbatWrzOOOOMXChrRtBy9//yyy8nRxxxRLa/+eabL7nxxhuzenq+s8wyS+F1syfpf/7zn7nXa/HFF08++eSTXJ1Ggpa6Z91jtHbbbbe0hVHb6P3VSVn///Of/5yrd//996etGG7/ev+1zPfkk0/m7kfj9Fx9vTehE/Szzz6b/OpXv8qC/zTTTJP06tWrEJz79++fPTYVPeYePXrk6pRx25xyyinp7T59+qS39RrW4wet22+/3a5O3yu3fscdd8yt+/e//52sssoqucd82223Zesvv/zy3Ps877zzZp8H936rFemGG27Idf8uv/zyyX333ZftJ+TBBx/M6lf10ksvpQHb/zwoVPqBW8MC9P5ut9123pZJ2g2ruu4+VTSWS+MDfe7z8frrryePP/548otf/CJ7bcpa2K6//vpkySWXzPar44w+az69Tvfcc0/awu7qqdtUY8qARlX/qwEMdzLTAVTcAemEE04wNSeGCnUR6uTn6r755pu5g6lfXNDxQ1xLS0t6sLV1XRkwYEC6jbt96623+g8j7WKz26gocDlumR6zc+CBBxa2cUWD8Z1mBC23vX/S9YsbB2eX+8W58sorC+tUdCJyr5U0ErT0/tr7kcMOO6xwPypHH310rp5eF1vHlbPOOiur9+ijj2bLL7rookJdBX2fBuzbOq5ss8022es2evTorHvYFp1M63F19ZlRuHG3Q8HJqhe0FB5/9rOfpevVJez07t278FhdUXCSss+LivsCsuyyyxbWqehvORRcHYUmV1d/g/Uo2Nr7cMVv9V5hhRXSZRtuuKG3dZKGP7udiu2udsv13P3jiiv6cuRbZ511CnVU9Peg1kVHLYy2jiv+hSFAFQQttJk78OgKPzn99NPT2zpoq+XI50KFyjLLLJO2St1xxx3pwV1X5x1yyCHpOp0AdVtlxIgR6bY2aOmEqfVumQ6+bhsbQvygtfXWW2fLv/vuu2TUqFFpi4ALjHZbP2jpKjsdjPVt2J2Q/G+7TjODloq6fxQMNNbMLdPrIXq+f/3rX9NlahFyr4G72tE/OetxiR67go+W+eGyvUHrmWeeSW/rtdRVoqITkk5+WqauJvFPwLoq1A0gVyuoW/7222+ny/ygpX3ovdd79utf/zpbrqs8Hfc+Kqioq0uvg/vs6MSt+9J77AayzzrrrLnH6va57bbbZvsMsUFfLY0jR4601YLqBS3ZY489sjqOXgu1Qul10nNQOe6449I6bnyeWor8vwuFK/t3oS9Fc889dxaWtNzVf+SRR7L7s/x6rujzo7/l6667zlbP3guFRf2t62/ZfalSa5ITClo9e/bM7sN9lvW5deFYLdKO/3h0PFF9fVb1HLVMj8PR37qru/3226fvmd53vSZadswxx6T1/M+o/2XEXZSj8W9AIwhaaBP/hKGrsMRvqVA3h8+FCj+8+GqN0bJBy3HL7Ldcf50LWv6JVKHOpy4g/9u8q2cfq70aTCdqV9dpZtBS15YzbNiwbLm6VJxaY7RcoOjWrVtuuU7Ibl9vvfVWuqy9QUuvs24rjPp0UtLym266Kb198sknp7cVwBSafG6fmk5C/KDln8x19Ztbrq5CUTeRW6bPpk9dh44+q66efxIVBQct94OA5QcZV9Qd7px99tnpVBllqgQtF6BUyij4HH/88cF6bllojJYLlo4foPxuyBB1zfldjn7xWwzV5eaW//e//83t4/zzz8/dDgUt/T1ombrFfQpHWu4PnHf3o3Dq+8tf/pKtczbbbLP0tp6DT8cGhUDHfb7tcUXPxe4TqIJPDNrEdUH4g2D9q/3sycqFig022CC33IkdtD777LNsmX9QDXH1bNDS83vnnXeSP/3pT8liiy2W1VNxmhm01O3n+K+t371WK2i5+novtthii1xx69y4qPYGLb8L2LUy6V/XWuBa4dz96PGWPSY3XscPWj618LnlTzzxRLrMjd/SSdSd8EP8sUYay+Xfv+t6UotYiEKWC2Orr756stJKK6X/98Olbruu9JAqQUtd0aHnrVYhjdtTS6Af8m09tywUtEShXaFq3333zV1JWC9oOQox+pz4rdQq+iyKpqjQbe271nshNmipNcl9ZvRFwX9/3LiqpZdeOtve3bfGyfk0H5x9bTSWy24fomk2VE8t1v79r7vuuoV9AlXwiUHDFFpc10Ct4nMHZdc8b8UOWupGccvef/99UzvP1fODlgbMuuU6UGsMh98V6TQzaPmDedsTtNS9s8kmmwSLa41sb9AStVq55X7RuDzHzX2m1gr7WFzReBtpJGituuqq6e0FFlggV9fSxQRuW3UF2ftW0YD+ENciokHmjuvOUuhS96j+H3ovnCpBS2MTtd7vonJdxCqaUuXEE09M564KvT5uWShoue5uhRmNV9JFCq5+1aDlU/h04x5dS5Em+9Xtueaay9QuskHLbzHUZ8W+Nyq6eMVxde+6665smYSCli5e0W11PdfiLijQ62/v2xWgEQQtNEzfhN1BrFbxuVDhuoWs2EFLQcEtU6uG77333st983b1/KDllvmhyHVl+M+1IwYtzXtVTzOClrpW3XIVndTt1YaavV/rylqNfI0Erd///vfpbbUuqcXGp1ZIR1e8um11BWsj1Iql7fwwp6ta3f4WXnjh9F93NWJIvaClx+e+xLguX40tcy1P6i50dKVd6PVxy2zQ0n7cOo1RdNyyekFLY9dCk7IqeLh9qDtYLb76v94L+xq78XeODVr6O3SBSK2U9bj7rRK09AVJt/2gLLpPjelzXNelWtSAZiBooWGui0Vz6Fg6ydkThdQLWpoyQOu1rRvs68aTNCNoiT+dgAtWOvG5x+vGlbk6oaDlP2e3TMV54403smX2RGc1I2hddtll2XKdePW8NOO2qJ5b95///Cd7zm5OpL333jvbjwKWltluFbe9P54pFLTUpaXbOrnqsbr30NJ76rZVd4yr40LAoosuml0E0UjQErdMLXguEHzxxRfZcl20oa4pN5WIihubp8ehbkF9tvU6hvzxj3/MtlNrmNtWn0m3XNvX4gctBRvtQ0XPSS1Abp0/iNtvjfWnwPDr+9wyvU96Xi7s+OPTQvXd1Ysh/lQYGiPn3mO9/u7vRxccOK6uphLRcxN/Jng3xYMNWnLaaadl9fyxk+4x6IuR4+pVCVoaq+eWuTnQ9Bz8+cvE/4z6Id3Nl1brdQJCCFpoiA5M7iDkLhm3Nt1003S93zpVL2i5E7VfXABpVtDSnF32Pvxit/WDlt9Vqm4bdSXqiip/ew2q9Qdqq9SaXb4ZQUuTxrp5iuzjVuj1T8a2+PNt7bnnnrl1jr/MfcMPBS11m9nH4YqucvRb9zQ2ytZxRftwY7waDVquJSVU1K3lwldZF6crflenT++Bf6VpWVGQ02MJqTIzvIqd1d3Nl6bP+kknnZSON7ID010oWWihhQr7c6+pu7322mun+1G3n31OIf4A91DR34c/x5u7AjlU/KtdQ0FLIazW0ARNqeG4ZVWClpR9RlUU/KvU0+cXaET4rwoooR9xDh3AfP7vH7oDYL2gJaGf+JBmBS3Rt+LQQdyf+8st84OWP1jbFZ3w/cesMKEg6geJUJee04ygJRocbR+baykaOHBgcH4hdXP5V1GqK8lf7y6rd91lrkgoaInfgmaLLrd3LW16bOq+sXV0Ava7rxoNWtqvWsTsfhU27QUQ/sSffqn3Mzp+65Jf9F7677vGUYXUC1qacFNTiFgXXHBBrp6CgCZd9Ze5IKnXzc4TppZPscFb+3nggQdyy8poyEDos6Tyj3/8w1bPTQrqir54aCoQJxS0RN2vob9TO0muW141aCmkucH2ftHfoPvMiyYwdVNE+EXh1l4tC9RT/lcF/ATUbaSuAX8MSQz6hq+uFDuepxadyNXtpu4on078fheH6Fu5noedTywWPQa1KpV1V6rLTCFBdfwTik/PT8HMzXnlaN96LrXGnLmr4NQyqXpqadNFB5pJ252kdLWapXoxXieNKdP92yk5LK3X50AXeDRC769eT3Wp+p8hnYR133Ym+mbQPvX+uMDqlL2fal3Va2s/m3o/NReYnXi06t+C5p/SvvW61Xt9Ra1z9T4/ZbSN3kd9JkNd0W2l11L7tVN8WHptdd96/F3lJ6Qw6RG0ALSLP8FjiFtnB8YDwOQgfGQEgAb4A4p1WbzGALnJSlU0Fqis5QUAujKCFoB205xOofFRKgpd9kesAWByQdAC0DT6vbxrrrkm6dGjR/pbi/7AZwCYHBG0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghbQiV177bXJkksumQwYMMCuQie2zz77pO9rS0uLXQWgkyFoAZ3Uv/71r2SKKaZIi7PKKqtky/wycODAiRv+6OKLLy7UUTnttNNy9d5///1kiy22yNbPM888ufXjx49PNtpoo8J+pp9++mTcuHG5ur7HHnussI1fJkyYYDfJre/Ro0e2/JNPPilsb8uJJ56Yhhe73JbQfdmy6aabVqr38ccfZ/W+/PLL3DprqaWWSpefffbZ2bJpp502mWaaaZLvv//eqwmgsyn+xQPoFOadd9705Lzlllumt++///7sRL7YYosla665ZjLzzDMXTu4KR26ZTuZrrbVWssgii2TLrr766qyuHw5UbNDac889s3XLLrtsssIKK2S3jz322Fxdnx+01lhjjbQsscQS2bJddtklV99/zCoKIM4XX3yRLLroomlZaKGFsjpumco//vGP5JhjjsluzzLLLMF6jlun19GW3XbbrVDPPYeVV145mWqqqbL9jh07Nq1ng5bCoS8UtC6//PJ02VFHHeXVBNDZELSATkgtPu6k/frrr6fLvv766/S239qjlixX75133kmX9erVK72tVie1WDmu3txzz51btvzyyyczzDBD+n8btNw2CjJOz549s+VDhgzxak/kBy3fWWedlS7T/fmtWg888EC6fNVVVw1u5/Tr16/memffffetWa/WOl+onv+a6/GIDVoKtr5Q0Prqq6/SZQpuw4cP92oD6EzqH0kAdDgffvhhdtIeNWpUtrxWl9ubb76Z3l588cXT23369MnVe/rpp7O6dj9zzjlnutwPWi4IqPjUiuOWq1UmpCxoiQKglruQIq6uQqULfd988423VauOELT81re33norXeYHrRVXXDH9Vy2OTihoidvmnnvuyS0H0HnUP5IA6HBuv/329AS84IIL2lU5F154YS4MKAS4rq3Ro0fn6g4ePDir+8MPP+TWhYKW36qm4Of4AWyvvfbKlvvKgpaCiZZNOeWUyZgxY9JlroVo4YUXTm+7oHLYYYf5m6aaHbQefPDBQgnV8916663Z43WB1Q9aauVz/+/du3e6vl7Q2n///XPLAXQe4aMMgA7tT3/6U3oCXm+99eyq1MiRI7NApW4qN1bou+++C4YDGTZsWLbu008/za0LBS1ZZpllsm2WW265tJtR9zvrrLOmy7baaqtcfafeYPg///nPWV2Ni9IydXmKHptuq2VLz9PX7KAVKlXq2WDkBy29ztttt112W+9NvaClsV8AOqfwUQZAh3bCCSekJ+ANNtjArkqeffbZbBC8Bn3743v8MGUNHTo0W6dWKV9Z0FK3peuKdOXAAw9Mfv3rX6f/15V+IbWC1jrrrJPVU8va1FNPnS5Xi9uIESPS4pZdc801E3eaND9o3XLLLYUSqqfgtO222ybTTTddenummWbK1bNBS6/1jDPOmN6+6qqr6gatpZdeOrccQOcRPsoA6NDOOeec9ATcrVu33HK1+uiKPK1bbbXVks8//zy3XmabbbZ0ff/+/XPL/dYu21JUFrREXZDnnntucuSRRyaPPvpoukxzQKn+ZZddZmq38oPWM888k5YXXnih8Hi7d++e1QsVTS3ha3bQqsfW8wPVc889F1yuoCVueg61AM4xxxzp/8uC1vrrr59bDqDzqH8kAdDhKCTpBKyxTK5bUC097sR8xRVXmC0m0vQEqmPHd/lTPFhlQUtjvvbbb7/cMg26d/spm3CzbIyWpZYhV09TUfjFLX/xxRez+j910JK//e1v6TLNaeaEgpaceeaZ2XKVsqBVFlgBdHz1jyQAOpxBgwZlJ2F39d1TTz2VLVPY0cByvygUiT/B5w477JCGgCeffDJb5ublUoDTQHSV2WefPV0311xzZcvEdeFpG42devnll7P9/O53v0vrhFQNWq6Outcst+4Pf/hDtqzZQcu+hirvvfdeoZ5Pg/jdcjfWrSxoicKyW+cHLbUquuXu9QbQ+YSPMgA6PDfG59BDD01v9+3bNzsxh4p/JeGpp55aWK8urFNOOSWr408hESqiUOEPiHdFXYe1VAla9957b806/uSoTrODVqhoPJWtZ2244YbpctfaVytoXXTRRdk6P2jdfffd6TKFYQCdV/EIAaBT0CShOhGrRUT0e4fqMiwr/nxb8tlnnyWXXHJJOgXDcccdV2g10TQEdh9+cdTypWkkDjjggOToo49O53yq9fM7otnc7X4stdBp/W233WZXpV577bXCPtTSZ5eFPP744zXr2efqF39AfNk+1Oql5fotSlG3rqvrunp9bp2bfFbmm2++9L31W9AAdD4ELaCTUmuSu+IPXYvCld5X/WwQgM6NIzQAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaKHj+fDDJHnxxYnl7bdtjc7p22/zz2vQIFsDjRo7NkneeCNJTj01SQ45JEmOOSZJevRIkueftzUB4CdB0ELY558nSb9+SdK/f5J8+aVdG9ef/pQkq6wysfy//2drdE63355/Xo8+amt0LV9/nSTvvZck776bJF99Zde2n8Lq5pvnX1O//OUvdgt0ZOPGJcnHH7d+sdJnRl9MgC6AoIVWEyYkyW67JclqqxVPWK6sumqS/Pa3STJypN26uQhaYSefXHxPysqmmybJyy/bPSTJFlvk6627rq1RpBOe3b9aHUP0XtX7DO28s92qcWPGFPdty4gRdquO5YEHio+5Srnzzvx+PvusWEfvQT16H/xtQi2sr7xS3HdZWXPNJNlmmyR56y27l3J6H3/3u9bPhd2fK3oueqw6RoWoRdNuU6WcfXZ+P9q/raPy5pv5emUGDy5uq3LSSbYmJjMELbTacMPiAaKsrL566zfPWAhaYY0ELVeOPTa/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SAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBC8BP7v33308+/fRTuzjoyy+/TAYMGJB8/PHHdlW7ab8qQ4cOtasAoE0IWkAX99xzzxXKG2+8kYwZM8ZW/Uk8++yzyRRTTJFMM800ycsvv2xXF2y11VZp/UUWWcSuajftV+X666+3qzKjR48uvJ4qL7zwQjJixAhbHcBkjqAFdHEuPITKVFNNlbz99tt2k0nq5JNPzh7PDTfcYFcX/NRB6/PPPy+8jrbssssudjMAkymCFtDFuZP/lFNOmcw888xpmWGGGbLl008//U/eErP//vsnf/3rX+3ioI4UtNZaa61kp512Ssvqq6+eC1sAIBwNgC7Onfjnnnvu3PJvv/02W3fqqaemyzRW6s4770yL3H333clFF12UfPfdd9l248aNS7v7jjrqqOSQQw5JLrzwwmTIkCHZ+gkTJiR33XVXuo+nn346W+4MHjw4u49hw4al9d1tfz/yww8/JH369EkOO+yw9HFoHFetoKXAeN999yV//OMfk2OPPTZtIRs/frytlnrppZeS7t27JyeccEJy//33p8saDVq9e/fOrdO+bNByz02vieU/dwBdE0EL6OLKgtaoUaOydWqRkbPPPjtbpmDg/v/kk0+m6xUMVlhhhWy5K7PMMkty8803Z/v+zW9+ky6feuqps2XOzjvvnK6bc84503FiY8eOzfbzzjvvZPW0btZZZ83dz3TTTZdsuumm6f9t0FL9ueaaq/DYVllllWTQoEG5ujvuuGOh3kMPPZT9v61By+8GddSCaJc5Dz/8cOk6AF0Df91AF+dO5DZo6co6t04tRuIHLQ1Od///5JNP0vXnnHNOtixUHLUq2WWOW64WJykLWn7rUKjYoLXOOutk6xZaaKFcINT/FRLl+++/L+zLlrYGLYVHLV900UWzZX379s3qDxw4MFsuu+22W7pcY+UAdE3FoyCALsWd5Gefffb0yjgVv+VFxU2t4AetX/7yl7n9+F2N5557bm6dW7711lsXlvnh4rTTTkuXzTjjjFmXXiho6fG4ZYcffni2vWismZb7Qeukk07K6utxOmrJcsv79++fLvvtb3+bLfNpvJVbXjVohcp8881XuMBg2mmnTddts8022bIPPvgg22b48OFebQBdCUEL6OJsELDlzDPPzOr6QcvOJXX88cenyxV0NHbKt/7666fr/K7CBRdcMF225ZZbFpb5gSwUtPxuSzu/1jLLLJMu94OW62Ls1q1bGmD84vZzwQUX5Ooutthi2fai8WGubtWgNc8886StVyo///nP0+fv1n344YfZNtdcc0223L2urnVQFyMA6LoIWkAX507wOqEfeOCBaTniiCOSK664ohCY/KBl59lac8010+XzzjtvbrkccMAB6Tq/C+z2229Plyl8uMH0bt8jR47M6oWClmv5UrED5BXStNwPWmohc/XLyhlnnJG2HLnbf/jDH7y9tnLrqgYt23UoLgjq9XbPU89RoUzLdRGBLgJw+3jxxRfNHgB0JQQtoItzJ3Q7RivED1oKBz51e2m5poZw450cN7jcD1qq4waCq6uyX79+2b59oaDVo0ePbJl/xaO4wOcHLXc/G264YbqPUFG48e9r22239fbayq1rT9BSt6pb73ebnnfeeekyvUaPPfZYVkcToALoughaQBfnTujtDVqfffZZtu7iiy/OrXPjpjbffPPc8quuuipdrtadFVdcMf3/yiuvnKsTCloafO+WnXjiibn6Cipa7gcttU5pmR7He++959VO0jFT+tkeZ4sttsj27XNXM6q0J2jpubr1fvergqdb7l6vBRZYwNsSQFdE0AK6OHdyb2/Qktlmmy1bf+uttyZPPPFENq9V2TZunSsKbL5Q0NJcXXq8brlmWn/88ceTjTfeOFtmrzp04UX/nn766cmDDz6Yjg9z9T/66KO03h133JEtUyh66qmnkp49e+YeY9Wgpakq/v73v6dFc3L5Uzn449AcP4SpqIsUQNdG0AK6OHdSb0bQUjeeHxT8svjii9vqKb+OpoywQkFLFIDsfaiEBsOLP42CLQo9fnenuwrQL3vvvXf2/6pBq6yo1c2/+tFx3a8qGrumfQHo2ghaQBen7i2VW265xa4q0LQErr4dh+UoGD3yyCPJfvvtl84DpZYczU1VRrOeu31q5nlL9+PWt7S05NbpikONedp1113Tf7/++uv0vlVXg+0tDZxXS5umhNhjjz3SliZ79aSjCUo1f5hmt3czw7vHMWDAAFN7Is0+7+rZcu+996ZXOpbRtpp0VUHr4IMPtqsBdEEELQCYRBQ01bWpotAIoOsjaAFAROou1az16667btZtqCsQAUweCFoAEJG7StIfmwVg8kHQAoCI1Jo100wzpfOP6ce7a43hAtD1ELQAlJowclAy9qtXk3EtrVMjdCXjf3xOYz9/IZkwOj/zPAA0E0ELQMH4oV8mg3p1SwZdtoJXVkxarlwzqzPo8l8GS8sVqyZjBj5ct97Qf++VTBjb+hM1dp2M++r13LIRT/0j26fl15swelhh2ZCbt8/qjnzp0vS55J6bthvT+sPO4757t/B4bBnzyZOFZa6Mfveu7L4AgKAFIG/CeBOw8mXILa2hxS63ZcyA1rBll9sSqiPjvnott2zEU6e3Pr4Av96oV68uLBtyc+vP7bT0XLlwX34Z+eIlrUErsM4vYz5+srDMldHv3uk/NACTOYIWgJxxX7+eDw7v3Z0Mvm6j3LJk3Kh8wOjVLRl2z6G5ZUNu3SXdn79s6L/3SIbetV9u2YSxZl/avx5HG4PW4Bt+U1jmglbufn58zGp585e1XLl6E4IWLVoAJiJoAcgZM+ChXHBQ997QO/bKLxvxXe52y7Xrp9u2XLX2xOW9VkmX+fXGfflKYZnGgPm3VaStQUtlwsgfcrdDQWvoXfsXlrV2IY5Ix26p5NetlC1XN+P4wZ+mZczAx/L3PXaE/9AATOYIWgByxnz4QC44jO53WzL6x2Wj3uidleTH8OXXcUFrcJ8tvGCyYrrMrxcMWp89m7utIu0JWiNf6JG7HQpaw+4+qLBMZcKY1jFehXWX538M20nHZv2vzuDrNrarAUzmCFoAcsZ9/UYxfIwo/sSOvz4LWr0394JJ66B2v144aD1XuD9pT9Bq6bVa7na0oDV+bK6OulkBwEfQAlDQckU+qKi09OyWjP3kqaxObl2vVZPhj52cWzak746FesPuPSwZ/uBxuWXqmrT3JW0KWj1XSlvS7P5iBa0ht+2W33bsKFsFwGSOoAWgYOxnz+e6xCaWFSdOyVBYly+j+7X+6LNdbkuojrQlaLVctVYy5KZtCvuLFbRarlg9VwcALIIWgKDxw78thBCVoXcfnK63y/OhZMW0W61evdCViSrS1qA1/PHuhf3FClr++sHXb2JXAwBBC4Axfkw6I7wrY794qRBGxn7ydO62G6MV4tdzY7Qsu39pa9Aab66IVIkRtOxrwPxZAEIIWgByxgx8JB88Rg9JWq5etxAq/NsdKWhJyzXr57aNEbSGP3S8t+6XyYRRLbn1ACAELQA5oaA19Pbdc8tG9/937na7g1ZgrFMhaD13vtlqouxx/C9ojXjy9Ny21YOWpqSY4HabX+cFrfHDvk7rZvt64JhsHQD4CFoAcsZ++kwuYIwf/l0ypO9OuWV2rq32Bq2ht+ev3pMxHz+RWza6/x1mq4myx/G/oNUahCZuGwpaQ27ZobBsUM9u2T4L67ygNfqd2/L7um3XZNhDx6VlxNNneXsAMLkjaAHImWAGwQ++8TeJ/RHmcT98kLvd3qA1ZkC+FU2zsNtpGtzg+pDscfwvaPnLVEJBKy1mGouWa9bLti/U94JWrtvQFPcTQAAgBC0ABYP/tWUhQLgSmrahvUFLBvferHBfrgz735WOZbLHUSdopT+r02uVwv5b62yXbevk6hC0ALQBQQtA0YTxychXev0YGrZKB5YP7rN5Oq2DC1ky4pmzs6KfvCnj1xs/5DO7eqLxY5NRr1+fDL1znzS4tVy3cTLs/iNzk6SWyR7H8xcWlqmMevXqbLm6FYfdc8iPz2mzdJD/kJu3T8d0JRMmjs1y/H2MePbcbLl+ODq3zisjX7nC2wOAyR1BCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABAJQQsAACASghYAAEAkBC0AAIBICFoAAACRELQAAAAiIWgBAABEQtACAACIhKAFAAAQCUELAAAgEoIWAABAJAQtAACASAhaAAAAkRC0AAAAIiFoAQAARELQAgAAiISgBQAAEAlBCwAAIBKCFgAAQCQELQAAgEgIWgAAAJEQtAAAACIhaAEAAERC0AIAAIiEoAUAABDJ/wfvIqokNUkpkgAAAABJRU5ErkJggg==>