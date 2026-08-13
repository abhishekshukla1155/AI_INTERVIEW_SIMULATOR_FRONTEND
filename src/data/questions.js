export const questions = [
  // ── Operating Systems ──────────────────────────────────────────────────
  {
    id: 1,
    question: "What is an Operating System?",
    reference: "An operating system manages hardware and software resources.",
    category: "Operating Systems",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "What is the difference between a Process and a Thread?",
    reference: "A process is an independent executing program with its own memory space, whereas a thread is a lightweight execution path within a process that shares memory with other threads.",
    category: "Operating Systems",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is a Deadlock in Operating Systems?",
    reference: "A deadlock occurs when a set of processes are blocked because each process holds a resource and waits for another resource held by another process.",
    category: "Operating Systems",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "What is Virtual Memory?",
    reference: "Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources available to a process, combining RAM and secondary storage.",
    category: "Operating Systems",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "Explain Paging vs Segmentation in Memory Management.",
    reference: "Paging divides memory into fixed-size physical blocks called frames and logical blocks called pages, whereas segmentation divides memory into variable-sized logical segments reflecting program structure.",
    category: "Operating Systems",
    difficulty: "Hard"
  },

  // ── Object-Oriented Programming (OOP) ──────────────────────────────────
  {
    id: 6,
    question: "What is Object-Oriented Programming?",
    reference: "Object-oriented programming uses classes and objects to structure code, encapsulating data and behavior.",
    category: "OOP",
    difficulty: "Easy"
  },
  {
    id: 7,
    question: "Explain Encapsulation in OOP.",
    reference: "Encapsulation is the bundling of data and methods that operate on that data within a single unit or class, restricting direct access to internal components.",
    category: "OOP",
    difficulty: "Easy"
  },
  {
    id: 8,
    question: "What is Inheritance in OOP?",
    reference: "Inheritance is a mechanism where a child class inherits attributes and methods from a parent class, promoting code reusability.",
    category: "OOP",
    difficulty: "Easy"
  },
  {
    id: 9,
    question: "What is Polymorphism in Object-Oriented Programming?",
    reference: "Polymorphism allows objects of different classes to be treated through a unified interface, enabling method overriding and overloading.",
    category: "OOP",
    difficulty: "Medium"
  },
  {
    id: 10,
    question: "What is an Abstract Class versus an Interface?",
    reference: "An abstract class can contain both abstract and concrete methods with state, while an interface defines a contract of method signatures without internal state.",
    category: "OOP",
    difficulty: "Hard"
  },

  // ── Machine Learning ─────────────────────────────────────────────────
  {
    id: 11,
    question: "What is Machine Learning?",
    reference: "Machine learning enables algorithms to learn patterns from data and make predictions or decisions.",
    category: "Machine Learning",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "What is the difference between Supervised and Unsupervised Learning?",
    reference: "Supervised learning uses labeled dataset targets to train models, while unsupervised learning finds hidden patterns and structures in unlabeled data.",
    category: "Machine Learning",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "What is Overfitting in Machine Learning?",
    reference: "Overfitting happens when a model learns training data noise and details too well, performing poorly on unseen test data.",
    category: "Machine Learning",
    difficulty: "Medium"
  },
  {
    id: 14,
    question: "What is the Bias-Variance Tradeoff?",
    reference: "The bias-variance tradeoff balances underfitting caused by high bias with overfitting caused by high variance to minimize total generalization error.",
    category: "Machine Learning",
    difficulty: "Medium"
  },
  {
    id: 15,
    question: "Explain the ROC-AUC Curve and its significance.",
    reference: "The ROC curve plots the True Positive Rate against False Positive Rate at various classification thresholds, and AUC measures the aggregate performance across all thresholds.",
    category: "Machine Learning",
    difficulty: "Hard"
  },
  {
    id: 16,
    question: "What is Regularization in Machine Learning?",
    reference: "Regularization adds a penalty term (such as L1 or L2 norms) to the loss function to constrain model complexity and prevent overfitting.",
    category: "Machine Learning",
    difficulty: "Medium"
  },

  // ── Deep Learning ─────────────────────────────────────────────────────
  {
    id: 17,
    question: "What is an Artificial Neural Network?",
    reference: "An artificial neural network is a computational model inspired by biological neural networks, consisting of interconnected layers of nodes or neurons.",
    category: "Deep Learning",
    difficulty: "Easy"
  },
  {
    id: 18,
    question: "What is an Activation Function in Neural Networks?",
    reference: "An activation function introduces non-linearity into a neural network, allowing it to learn complex non-linear relationships.",
    category: "Deep Learning",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "What is Gradient Descent?",
    reference: "Gradient descent is an optimization algorithm used to minimize a loss function by iteratively updating model parameters in the direction of steepest descent.",
    category: "Deep Learning",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "Explain the Vanishing Gradient Problem in Deep Networks.",
    reference: "The vanishing gradient problem occurs during backpropagation when gradients become exponentially small as they propagate backward, preventing early layers from updating.",
    category: "Deep Learning",
    difficulty: "Hard"
  },

  // ── NLP (Natural Language Processing) ────────────────────────────────
  {
    id: 21,
    question: "What is Natural Language Processing (NLP)?",
    reference: "Natural Language Processing is a branch of artificial intelligence focused on enabling computers to understand, interpret, and generate human language.",
    category: "NLP",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "What is Tokenization in NLP?",
    reference: "Tokenization is the process of breaking text down into smaller units called tokens, such as words, subwords, or characters.",
    category: "NLP",
    difficulty: "Easy"
  },
  {
    id: 23,
    question: "What are Word Embeddings in NLP?",
    reference: "Word embeddings are dense vector representations of words in a continuous vector space where semantically similar words are positioned close together.",
    category: "NLP",
    difficulty: "Medium"
  },
  {
    id: 24,
    question: "Explain the Self-Attention mechanism in Transformer models.",
    reference: "Self-attention allows a neural network to weigh the importance of different words in a sentence relative to each other regardless of their positional distance.",
    category: "NLP",
    difficulty: "Hard"
  },
  {
    id: 25,
    question: "What is DistilBERT and how does it differ from BERT?",
    reference: "DistilBERT is a distilled, lighter, and faster version of BERT that retains 95% of BERT's language understanding capability while using 40% fewer parameters.",
    category: "NLP",
    difficulty: "Hard"
  },

  // ── DBMS (Database Management Systems) ───────────────────────────────
  {
    id: 26,
    question: "What is a Database?",
    reference: "A database stores structured data and provides mechanisms for querying and managing it.",
    category: "DBMS",
    difficulty: "Easy"
  },
  {
    id: 27,
    question: "What are ACID properties in DBMS?",
    reference: "ACID stands for Atomicity, Consistency, Isolation, and Durability, which guarantee reliable transaction processing in database systems.",
    category: "DBMS",
    difficulty: "Medium"
  },
  {
    id: 28,
    question: "What is Database Indexing?",
    reference: "Database indexing is a data structure technique used to quickly locate and access data in a database table without scanning every row.",
    category: "DBMS",
    difficulty: "Medium"
  },
  {
    id: 29,
    question: "Explain SQL Joins and the difference between INNER and LEFT JOIN.",
    reference: "An INNER JOIN returns only records with matching values in both tables, whereas a LEFT JOIN returns all records from the left table and matched records from the right table.",
    category: "DBMS",
    difficulty: "Easy"
  },
  {
    id: 30,
    question: "What is Database Normalization?",
    reference: "Database normalization is the process of structuring a relational database to reduce data redundancy and improve data integrity.",
    category: "DBMS",
    difficulty: "Hard"
  },

  // ── REST API & Web Systems ───────────────────────────────────────────
  {
    id: 31,
    question: "What is a REST API?",
    reference: "A REST API is an architectural style for web services using HTTP methods and stateless communication.",
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "What are common HTTP methods used in REST APIs?",
    reference: "Common HTTP methods include GET for retrieving resources, POST for creating resources, PUT or PATCH for updating resources, and DELETE for removing resources.",
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "What does Statelessness mean in REST APIs?",
    reference: "Statelessness means each client request contains all necessary information for the server to process it, and the server stores no client session context.",
    category: "REST API",
    difficulty: "Medium"
  },
  {
    id: 34,
    question: "What is CORS (Cross-Origin Resource Sharing)?",
    reference: "CORS is a browser security mechanism that uses HTTP headers to tell browsers whether a web application on one origin has permission to access resources from a server on a different origin.",
    category: "REST API",
    difficulty: "Hard"
  },

  // ── Python Programming ───────────────────────────────────────────────
  {
    id: 35,
    question: "What is the difference between a List and a Tuple in Python?",
    reference: "A list is a mutable ordered sequence enclosed in square brackets, whereas a tuple is an immutable ordered sequence enclosed in parentheses.",
    category: "Python",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "What are Python Decorators?",
    reference: "A decorator is a design pattern in Python used to modify or extend the behavior of a function or class without permanently modifying its code.",
    category: "Python",
    difficulty: "Medium"
  },
  {
    id: 37,
    question: "Explain Python Generators and the yield keyword.",
    reference: "Generators are functions that return an iterable set of items one at a time using the yield keyword, producing values lazily to save memory.",
    category: "Python",
    difficulty: "Hard"
  },
  {
    id: 38,
    question: "How does Memory Management work in Python?",
    reference: "Python manages memory automatically via private heap space, reference counting, and a garbage collector to reclaim unused memory blocks.",
    category: "Python",
    difficulty: "Hard"
  },

  // ── Computer Networks ─────────────────────────────────────────────────
  {
    id: 39,
    question: "What is the OSI Model?",
    reference: "The OSI model is a conceptual framework that standardizes network communication functions into seven logical layers.",
    category: "Computer Networks",
    difficulty: "Easy"
  },
  {
    id: 40,
    question: "What is the difference between TCP and UDP?",
    reference: "TCP is a connection-oriented protocol ensuring reliable, ordered data delivery with error checking, whereas UDP is a connectionless, faster protocol without delivery guarantees.",
    category: "Computer Networks",
    difficulty: "Medium"
  },
  {
    id: 41,
    question: "Explain the TCP Three-Way Handshake.",
    reference: "The TCP three-way handshake establishes a reliable network connection using SYN, SYN-ACK, and ACK packets between client and server.",
    category: "Computer Networks",
    difficulty: "Hard"
  }
];
