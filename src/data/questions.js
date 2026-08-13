export const questions = [
  {
    "id": 1,
    "question": "What is the difference between a list and a tuple in Python?",
    "reference": "Lists are mutable ordered sequences, whereas tuples are immutable ordered sequences.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "question": "How does memory management work in Python?",
    "reference": "Python manages memory using reference counting and an automatic cyclic garbage collector for detecting reference cycles.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 3,
    "question": "What are Python decorators and how do they work?",
    "reference": "Decorators are functions that wrap another function, extending its behavior without modifying original code.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 4,
    "question": "What is the difference between 'is' and '==' in Python?",
    "reference": "The 'is' operator checks for object identity (memory address), while '==' checks equality of values.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 5,
    "question": "What are Python generator functions and the 'yield' statement?",
    "reference": "Generators yield values one at a time using 'yield', maintaining state across calls for memory-efficient iteration.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 6,
    "question": "What is the purpose of *args and **kwargs in Python function parameters?",
    "reference": "*args allows passing a variable number of positional arguments, while **kwargs passes keyword arguments as a dictionary.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 7,
    "question": "How does list comprehension work in Python?",
    "reference": "List comprehension provides a compact syntax to generate new lists: [expr for item in iterable if condition].",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 8,
    "question": "What are Python's main built-in data structures?",
    "reference": "Python built-in data structures include list, tuple, dict, set, frozenset, str, and bytes.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 9,
    "question": "What is a lambda function in Python?",
    "reference": "A lambda function is an anonymous inline function defined with the lambda keyword that evaluates a single expression.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 10,
    "question": "How do docstrings work in Python?",
    "reference": "Docstrings are string literals placed as the first statement in functions, classes, or modules, stored in the __doc__ attribute.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 11,
    "question": "What is the 'pass' statement in Python?",
    "reference": "The 'pass' statement is a no-operation placeholder used where syntactically a code block is required.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 12,
    "question": "How does string formatting work with f-strings in Python?",
    "reference": "F-strings allow embedding Python expressions directly inside string literals using curly braces {expression}.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 13,
    "question": "What is the difference between shallow copy and deep copy in Python?",
    "reference": "A shallow copy creates a new collection referencing original items; a deep copy recursively duplicates all nested objects.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 14,
    "question": "What are Python sets and their main characteristics?",
    "reference": "Sets are unordered collections of unique elements that support O(1) average lookup and mathematical set operations.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 15,
    "question": "How does global and local scope work in Python?",
    "reference": "Variables inside functions are local; module-level variables are global. The 'global' keyword allows modifying module scope.",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 16,
    "question": "Explain Python's Global Interpreter Lock (GIL) and its impact on multithreading.",
    "reference": "The GIL is a CPython mutex that prevents multiple native threads from executing bytecodes concurrently, limiting CPU-bound multithreading.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 17,
    "question": "What are Python context managers and the 'with' statement?",
    "reference": "Context managers manage resource setup and cleanup via __enter__ and __exit__ methods, executed safely via the 'with' statement.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 18,
    "question": "How do Python metaclasses work and when should you use them?",
    "reference": "Metaclasses are classes of classes that define how classes are constructed, inheriting from type and overriding __new__ or __init__.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 19,
    "question": "What is method resolution order (MRO) in Python inheritance?",
    "reference": "MRO defines the exact linear order Python searches parent classes for methods, calculated using the C3 Linearization algorithm.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 20,
    "question": "Explain duck typing and protocol classes in Python.",
    "reference": "Duck typing evaluates objects by their methods and properties rather than explicit type. Protocols (typing.Protocol) formalize structural subtyping.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 21,
    "question": "How do async and await work in Python's asyncio module?",
    "reference": "Asyncio uses cooperative multitasking powered by an event loop. Functions declared with async def return coroutines paused by await.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 22,
    "question": "What are Python descriptors (__get__, __set__, __delete__)?",
    "reference": "Descriptors are objects that customize attribute access, assignment, and deletion by implementing descriptor protocol methods.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 23,
    "question": "Explain weak references and the weakref module in Python.",
    "reference": "Weak references allow referencing an object without incrementing its reference count, preventing circular reference memory leaks.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 24,
    "question": "What is the difference between __str__ and __repr__ in Python?",
    "reference": "__str__ returns a user-friendly string representation; __repr__ returns an unambiguous representation used primarily for debugging.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 25,
    "question": "How does Python garbage collection (reference counting + cyclic GC) work?",
    "reference": "Reference counting frees objects instantly when count hits zero. Generational tri-color GC sweeps unreachable circular references.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 26,
    "question": "Explain @staticmethod vs @classmethod in Python.",
    "reference": "@classmethod takes the class (cls) as first argument and accesses class state; @staticmethod takes no implicit class or instance argument.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 27,
    "question": "How does monkey patching work in Python?",
    "reference": "Monkey patching is dynamically overriding or extending module or class attributes at runtime without altering original source code.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 28,
    "question": "What are slots (__slots__) in Python classes?",
    "reference": "__slots__ restricts allowed instance attributes to a fixed tuple, eliminating the instance __dict__ and saving memory.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 29,
    "question": "How does the namespace dictionary (__dict__) work in Python objects?",
    "reference": "Instances and classes store dynamic attributes inside a __dict__ hash table mapping attribute name strings to values.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 30,
    "question": "What is functional programming in Python (map, filter, reduce)?",
    "reference": "Map applies a function across iterables; filter filters items by predicate; reduce aggregates sequence elements into a single value.",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 31,
    "question": "How does Python bytecode compilation and CPython execution stack work internally?",
    "reference": "CPython compiles source code to AST, emits PyCodeObject bytecode instructions, and executes them on a frame stack via PyEval_EvalFrameEx.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 32,
    "question": "Explain CPython memory allocation mechanisms (PyObject, Arenas, Pools, Blocks).",
    "reference": "PyMalloc handles small allocations (<=512 bytes) using 256KB Arenas divided into 4KB Pools of fixed-size Blocks, avoiding OS malloc overhead.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 33,
    "question": "How do custom C extensions interface with CPython C-API?",
    "reference": "C extensions include Python.h, define PyMethodDef tables, manage PyObject reference counts, and export a PyInit module entry point.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 34,
    "question": "Explain frame objects and trace functions (sys.settrace) in Python debugging.",
    "reference": "PyFrameObject instances store execution state (code object, locals, globals, evaluation stack). sys.settrace hooks into CPython execution events.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 35,
    "question": "How does the asyncio event loop multiplex I/O with selectors internally?",
    "reference": "Asyncio wraps OS primitives (epoll/kqueue/select) via selectors, registering file descriptors and invoking callbacks when I/O is ready.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 36,
    "question": "Explain tail call optimization limitations and recursion limit management in Python.",
    "reference": "CPython does not optimize tail calls to preserve stack frames. Recursion limit (sys.getrecursionlimit) guards against C stack overflow.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 37,
    "question": "How do coroutine state machines operate at bytecode level in CPython?",
    "reference": "Coroutines store frame state in PyGenObject, saving instruction pointer and local stack variables across YIELD_VALUE or YIELD_FROM bytecodes.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 38,
    "question": "Explain object layout and pointer header structure (PyObject_HEAD) in CPython.",
    "reference": "Every PyObject begins with PyObject_HEAD containing ob_refcnt (reference count) and ob_type (pointer to type descriptor PyTypeObject).",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 39,
    "question": "How does dynamic attribute lookup traverse __getattribute__, descriptors, and instance dicts?",
    "reference": "Lookup inspects class MRO for data descriptors first, then instance __dict__, then non-data descriptors, then class attributes, then __getattr__.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 40,
    "question": "Explain multiprocessing IPC mechanisms and SharedMemory buffers in Python.",
    "reference": "Multiprocessing uses OS IPC (Pipes, Unix domain sockets, POSIX shared memory via multiprocessing.shared_memory) with pickle serialization.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 41,
    "question": "How does Python implement dictionary hash table collision resolution and key ordering?",
    "reference": "Python dicts use an index table pointing into an entry array (preserving insertion order). Collisions use open addressing with perturbation probing.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 42,
    "question": "Explain import hooks (sys.meta_path, Finder, Loader) in Python.",
    "reference": "The import system queries sys.meta_path finders to produce ModuleSpec objects, which loaders execute to instantiate modules in sys.modules.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 43,
    "question": "How does PyPy JIT compilation differ from CPython execution model?",
    "reference": "PyPy uses a tracing JIT compiler that monitors running loops and compiles hot execution paths into native machine code at runtime.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 44,
    "question": "Explain GIL release points in C extensions and native execution blocks.",
    "reference": "C extensions invoke Py_BEGIN_ALLOW_THREADS and Py_END_ALLOW_THREADS macros to release the GIL during blocking OS operations.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 45,
    "question": "How does structural pattern matching (match/case) execute AST node binding in Python 3.10+?",
    "reference": "Pattern matching compiles to specialized bytecode (MATCH_SEQUENCE, MATCH_MAPPING, MATCH_CLASS) testing object structure and binding frame variables.",
    "category": "Python",
    "difficulty": "Hard"
  },
  {
    "id": 46,
    "question": "What is the difference between supervised, unsupervised, and reinforcement learning?",
    "reference": "Supervised learning uses labeled target data, unsupervised learning discovers hidden patterns in unlabeled data, and reinforcement learning learns policies via rewards.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 47,
    "question": "What is overfitting and underfitting in Machine Learning?",
    "reference": "Overfitting occurs when a model learns noise in training data and fails to generalize; underfitting occurs when a model is too simple to capture data patterns.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 48,
    "question": "Explain the difference between classification and regression tasks.",
    "reference": "Classification predicts discrete categorical labels, while regression predicts continuous numeric values.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 49,
    "question": "What is a confusion matrix and what metrics can be derived from it?",
    "reference": "A confusion matrix tabularizes True Positives, False Positives, True Negatives, and False Negatives, deriving Precision, Recall, Accuracy, and F1-score.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 50,
    "question": "What is Precision and Recall, and how do they differ?",
    "reference": "Precision measures the proportion of positive predictions that are correct; Recall measures the proportion of actual positive instances correctly identified.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 51,
    "question": "What is F1-score and when should it be used instead of accuracy?",
    "reference": "F1-score is the harmonic mean of Precision and Recall, providing a balanced metric when data exhibits severe class imbalance.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 52,
    "question": "What is Linear Regression and how does it find optimal weights?",
    "reference": "Linear regression models linear relationships between features and target, finding optimal weights by minimizing Mean Squared Error via Ordinary Least Squares or Gradient Descent.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 53,
    "question": "What is Logistic Regression and how does the sigmoid function work?",
    "reference": "Logistic regression predicts binary probabilities by mapping linear combinations of features through the sigmoid function: 1 / (1 + e^-z).",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 54,
    "question": "What is a Decision Tree and how are splits decided?",
    "reference": "A decision tree partitions data recursively based on feature thresholds that maximize Information Gain (Entropy reduction) or Gini Impurity reduction.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 55,
    "question": "What is K-Nearest Neighbors (KNN) algorithm?",
    "reference": "KNN is a non-parametric instance-based algorithm that classifies a data point by majority vote of its K closest neighbors in feature space.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 56,
    "question": "What is K-Means Clustering and how does it converge?",
    "reference": "K-Means partitions data into K clusters by iteratively assigning points to nearest centroid and recalculating centroids until convergence.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 57,
    "question": "What is Cross-Validation (K-Fold CV) and why is it useful?",
    "reference": "K-Fold CV splits data into K subsets, iteratively training on K-1 folds and validating on 1 fold to evaluate generalization and prevent overfitting.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 58,
    "question": "What is Feature Scaling (Normalization vs Standardization)?",
    "reference": "Normalization scales features to [0,1] range; Standardization transforms features to zero mean and unit variance (Z-score).",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 59,
    "question": "What is One-Hot Encoding and why is it used?",
    "reference": "One-Hot Encoding converts categorical variables into binary indicator vectors to prevent algorithms from assuming ordinal ordering.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 60,
    "question": "What is Train-Test Split and why is data leakage a concern?",
    "reference": "Train-test split separates data for evaluation; data leakage happens when test set information inadvertently informs the training process.",
    "category": "Machine Learning",
    "difficulty": "Easy"
  },
  {
    "id": 61,
    "question": "Explain the Bias-Variance tradeoff in Machine Learning models.",
    "reference": "Bias is error from erroneous model assumptions; Variance is sensitivity to training data fluctuations. Minimizing total error requires balancing both.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 62,
    "question": "How does Random Forest ensemble technique work (Bagging)?",
    "reference": "Random Forest builds an ensemble of decision trees using Bootstrap Aggregation (Bagging) and random feature subsampling, reducing model variance.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 63,
    "question": "Explain Gradient Boosting Machines (GBM, XGBoost, LightGBM).",
    "reference": "Gradient Boosting sequentially trains weak learners (decision trees) to fit negative gradients (residuals) of the loss function.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 64,
    "question": "What is Support Vector Machines (SVM) and the Kernel Trick?",
    "reference": "SVM finds the maximum-margin hyperplane separating classes. The Kernel Trick computes dot products in higher-dimensional space without explicit feature transformation.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 65,
    "question": "Explain Principal Component Analysis (PCA) for dimensionality reduction.",
    "reference": "PCA projects data onto orthogonal axes (principal components) that maximize variance, constructed from eigenvectors of the data covariance matrix.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 66,
    "question": "What is the ROC-AUC curve and what does the area represent?",
    "reference": "ROC plots True Positive Rate against False Positive Rate across classification thresholds; AUC quantifies overall class separation capability.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 67,
    "question": "What are L1 (Lasso) and L2 (Ridge) Regularization techniques?",
    "reference": "L1 regularization adds absolute weight penalty encouraging sparsity; L2 adds squared weight penalty constraining weight magnitudes.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 68,
    "question": "Explain Naive Bayes classifier and Bayes theorem application.",
    "reference": "Naive Bayes calculates posterior class probabilities using Bayes Theorem under the strong assumption that features are conditionally independent given class.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 69,
    "question": "What is SMOTE and how does it handle class imbalance?",
    "reference": "Synthetic Minority Over-sampling Technique (SMOTE) generates synthetic minority instances by interpolating between nearest minority neighbors.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 70,
    "question": "Explain DBSCAN clustering algorithm and core/border points.",
    "reference": "DBSCAN clusters dense regions using epsilon-radius and minimum points threshold, identifying core points, border points, and noise outliers.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 71,
    "question": "What is t-SNE and how does it differ from PCA?",
    "reference": "t-SNE is a non-linear dimensionality reduction technique that preserves local pairwise similarities using Student-t distributions, unlike linear PCA.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 72,
    "question": "Explain Hyperparameter Optimization techniques (GridSearch vs RandomSearch vs Bayesian).",
    "reference": "GridSearch evaluates exhaustive combinations; RandomSearch samples parameter space randomly; Bayesian Optimization models performance via Gaussian Processes.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 73,
    "question": "What is Feature Importance calculation in tree-based algorithms?",
    "reference": "Tree feature importance measures total impurity reduction (Gini/Entropy) or mean decrease in accuracy contributed by splits on a given feature.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 74,
    "question": "Explain Logistic Regression loss function (Log-Loss / Cross-Entropy).",
    "reference": "Log-Loss penalizes confident wrong predictions logarithmically: -[y log(p) + (1-y) log(1-p)], ensuring convex optimization.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 75,
    "question": "What is the difference between Parametric and Non-Parametric ML algorithms?",
    "reference": "Parametric models assume a fixed number of parameters regardless of dataset size; non-parametric models expand complexity with data volume.",
    "category": "Machine Learning",
    "difficulty": "Medium"
  },
  {
    "id": 76,
    "question": "Derive the mathematical formulation of Support Vector Machines dual optimization problem.",
    "reference": "SVM formulates a constrained quadratic program using Lagrange multipliers, yielding dual optimization: max sum(alpha) - 0.5 sum(alpha_i alpha_j y_i y_j K(x_i, x_j)).",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 77,
    "question": "Explain Kernel Ridge Regression vs Gaussian Process Regression mathematics.",
    "reference": "Kernel Ridge Regression applies L2 penalty in Reproducing Kernel Hilbert Space (RKHS); Gaussian Process Regression provides full Bayesian posterior distributions.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 78,
    "question": "Explain Expectation-Maximization (EM) algorithm for Gaussian Mixture Models.",
    "reference": "EM alternates between E-step (computing expected cluster responsibilities given parameters) and M-step (updating Gaussian means, covariances, and weights).",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 79,
    "question": "Derive Gradient Ascent update for Logistic Regression maximum likelihood estimation.",
    "reference": "Maximizing log-likelihood yields gradient w w + lr * sum((y_i - sigmoid(w^T x_i)) * x_i), updating weights proportionally to prediction error.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 80,
    "question": "Explain Gradient Boosting mathematical formulation and pseudo-residual computation.",
    "reference": "At step m, boosting fits tree h_m to pseudo-residuals r_im = -[dL(y_i, f(x_i))/df(x_i)] evaluated at current ensemble prediction f_{m-1}.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 81,
    "question": "Derive Principal Component Analysis using Eigenvalue decomposition of covariance matrix.",
    "reference": "PCA maximizes w^T S w subject to w^T w = 1. Using Lagrange multipliers yields Sw = lambda w, showing principal components are covariance matrix eigenvectors.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 82,
    "question": "Explain SHAP (SHapley Additive exPlanations) game-theoretic feature attribution.",
    "reference": "SHAP computes marginal feature contributions across all feature subsets using Shapley values from cooperative game theory, ensuring local consistency.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 83,
    "question": "Explain Multi-Armed Bandit problem and UCB / Thompson Sampling algorithms.",
    "reference": "Bandits balance exploration vs exploitation. UCB selects actions via upper confidence bounds; Thompson Sampling samples actions from posterior reward distributions.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 84,
    "question": "Explain Matrix Factorization techniques (SVD, ALS) for Recommender Systems.",
    "reference": "Factorizes rating matrix R into lower-rank user matrix P and item matrix Q (R ~ P Q^T), solved via Alternating Least Squares (ALS) or Stochastic Gradient Descent.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 85,
    "question": "Explain Isolation Forest anomaly detection algorithm mathematics.",
    "reference": "Isolation Forest isolates anomalies by randomly partitioning feature space; anomalies require significantly fewer splits (shorter path lengths in isolation trees).",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 86,
    "question": "Explain Covariance Matrix estimation under high-dimensional data regimes.",
    "reference": "When features exceed samples (p > n), sample covariance matrices become singular. Shrinkage estimators (Ledoit-Wolf) pull sample covariance toward structured targets.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 87,
    "question": "Derive the bias-variance decomposition of Mean Squared Error.",
    "reference": "Decomposes expected MSE into Bias(f_hat)^2 + Variance(f_hat) + Irreducible Error variance sigma^2 by expanding E[(y - f_hat)^2].",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 88,
    "question": "Explain Markov Decision Processes (MDP) formulation in Reinforcement Learning.",
    "reference": "MDP is defined by tuple (S, A, P, R, gamma) where transition probability P(s'|s,a) satisfies Markov property: future depends only on current state and action.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 89,
    "question": "Explain Q-Learning algorithm convergence conditions and Bellman Optimality Equation.",
    "reference": "Q-Learning iteratively updates Q(s,a) toward Bellman target R + gamma * max_a' Q(s',a'), converging to optimal policy under sufficient state-action exploration.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 90,
    "question": "Explain High-Dimensional Curse of Dimensionality and manifold learning assumptions.",
    "reference": "High-dimensional volume grows exponentially, making data sparse. Manifold learning assumes high-dimensional data lies on lower-dimensional sub-manifolds.",
    "category": "Machine Learning",
    "difficulty": "Hard"
  },
  {
    "id": 91,
    "question": "What is an Artificial Neural Network (ANN) and perceptron?",
    "reference": "An ANN is a computational model inspired by biological brains; a perceptron is a single-layer unit computing a weighted sum passed through an activation.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 92,
    "question": "What is an activation function and why is non-linearity required?",
    "reference": "Activation functions introduce non-linear transformations, enabling neural networks to learn complex non-linear functions beyond simple hyperplanes.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 93,
    "question": "What is Backpropagation in Deep Learning?",
    "reference": "Backpropagation calculates loss gradients with respect to each network weight using the calculus chain rule, propagating errors backward.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 94,
    "question": "What is Gradient Descent and learning rate?",
    "reference": "Gradient descent updates network parameters in the opposite direction of loss gradients. Learning rate controls the step size taken during updates.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 95,
    "question": "What is the difference between SGD, Batch GD, and Mini-Batch GD?",
    "reference": "Batch GD uses the entire dataset per update; SGD uses a single sample; Mini-Batch GD updates parameters using small random data batches.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 96,
    "question": "What is a Convolutional Neural Network (CNN)?",
    "reference": "A CNN is a deep learning architecture using spatial convolution kernels, pooling layers, and parameter sharing for grid-like data like images.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 97,
    "question": "What is a Recurrent Neural Network (RNN)?",
    "reference": "An RNN processes sequential data by maintaining a hidden state vector that passes information across sequential time steps.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 98,
    "question": "What is Dropout and how does it prevent overfitting?",
    "reference": "Dropout randomly zeroes out a fraction of neuron outputs during training batches, preventing co-adaptation of features and regularizing the model.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 99,
    "question": "What is Batch Normalization and why is it used?",
    "reference": "Batch Normalization normalizes layer inputs across the mini-batch to zero mean and unit variance, stabilizing training and accelerating convergence.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 100,
    "question": "What is the Vanishing / Exploding Gradient problem?",
    "reference": "Vanishing gradients occur when gradients shrink exponentially during backpropagation through deep layers; exploding gradients occur when gradients grow uncontrollably.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 101,
    "question": "What is Epoch, Batch Size, and Iteration?",
    "reference": "An Epoch is one full pass through training data; Batch Size is samples processed per update; Iterations is total parameter updates per epoch.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 102,
    "question": "What is Softmax activation function and where is it placed?",
    "reference": "Softmax transforms raw unnormalized network logits into a normalized probability distribution summing to 1, placed at the final classification layer.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 103,
    "question": "What is Transfer Learning and fine-tuning?",
    "reference": "Transfer learning reuses weights pretrained on large datasets (e.g. ImageNet) and fine-tunes them on target tasks with smaller labeled data.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 104,
    "question": "What is Loss Function vs Cost Function?",
    "reference": "A loss function evaluates error for a single training sample; a cost function computes average loss across the entire training dataset.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 105,
    "question": "What is ReLU activation function and dead ReLU problem?",
    "reference": "ReLU computes f(x) = max(0, x). Dead ReLU occurs when neurons output 0 permanently due to large negative gradient updates.",
    "category": "Deep Learning",
    "difficulty": "Easy"
  },
  {
    "id": 106,
    "question": "Explain Adam Optimizer and how it combines Momentum and RMSProp.",
    "reference": "Adam maintains exponentially decaying averages of past gradients (Momentum) and squared gradients (RMSProp) with bias corrections for weight updates.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 107,
    "question": "Explain LSTM (Long Short-Term Memory) architecture and its gates.",
    "reference": "LSTM mitigates vanishing gradients using a cell state regulated by Forget, Input, and Output gates controlling memory retention and deletion.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 108,
    "question": "What is GRU (Gated Recurrent Unit) and how does it compare to LSTM?",
    "reference": "GRU simplifies LSTM by merging cell and hidden states, using Update and Reset gates to achieve comparable performance with fewer parameters.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 109,
    "question": "Explain Autoencoders and Latent Space representation.",
    "reference": "Autoencoders compress input data into a lower-dimensional latent bottleneck representation (Encoder) and reconstruct original data (Decoder).",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 110,
    "question": "What is Residual Connections (ResNet) and how does it solve deep gradient flow?",
    "reference": "ResNet adds identity shortcut connections y = f(x) + x, allowing gradients to flow directly through skip connections without vanishing.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 111,
    "question": "Explain Generative Adversarial Networks (GAN) Generator and Discriminator loss.",
    "reference": "GANs pit a Generator creating synthetic data against a Discriminator classifying real vs fake data in a minimax game: min_G max_D V(D,G).",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 112,
    "question": "What is Attention Mechanism in neural networks?",
    "reference": "Attention computes dynamic alignment weights over input representations, allowing models to focus selectively on contextually relevant tokens.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 113,
    "question": "Explain Self-Attention formulation (QK^T / sqrt(d_k)) in Transformers.",
    "reference": "Self-attention computes Query-Key similarity dot products scaled by square root of key dimension, applying Softmax to weight Value vectors.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 114,
    "question": "Explain Learning Rate Schedulers (Cosine Annealing, Warmup, ReduceLROnPlateau).",
    "reference": "Schedulers adapt learning rates during training: Warmup ramps up LR initially; Cosine Annealing decays LR smoothly; ReduceLROnPlateau drops LR when validation loss plateaus.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 115,
    "question": "What is Weight Initialization (Xavier / He initialization) and why is it important?",
    "reference": "Xavier/He initializations scale random weights according to fan-in/fan-out neuron counts to keep signal variance constant across deep layers.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 116,
    "question": "Explain Spatial Pooling (Max Pooling, Average Pooling, Global Average Pooling) in CNNs.",
    "reference": "Pooling downsamples feature maps: Max Pooling extracts dominant local features; Average Pooling averages regions; GAP compresses full feature maps to single scalars.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 117,
    "question": "What is Transposed Convolution (Deconvolution) for upsampling?",
    "reference": "Transposed convolution expands spatial dimensions by performing backward-pass convolution operations, learning upsampling parameters for segmentation/GANs.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 118,
    "question": "Explain Layer Normalization vs Batch Normalization vs Group Normalization.",
    "reference": "Batch Norm normalizes across batch dimension; Layer Norm normalizes across feature dimension per sample; Group Norm normalizes channel sub-groups.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 119,
    "question": "What is Gradient Clipping and how does it stabilize RNN training?",
    "reference": "Gradient clipping caps gradient norms to a maximum threshold when exceeding limits, preventing exploding gradients from causing catastrophic parameter updates.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 120,
    "question": "Explain Focal Loss and how it handles extreme class imbalance in object detection.",
    "reference": "Focal Loss adds modulating factor (1-p_t)^gamma to cross-entropy, down-weighting easy background samples and focusing training on hard candidate targets.",
    "category": "Deep Learning",
    "difficulty": "Medium"
  },
  {
    "id": 121,
    "question": "Derive mathematical gradients for Backpropagation Through Time (BPTT) in RNNs.",
    "reference": "BPTT unrolls RNN across time steps t, accumulating gradients dL/dW = sum_{t} sum_{k=1}^t (dL_t/dh_t * dh_t/dh_k * dh_k/dW) using Jacobian product chains.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 122,
    "question": "Explain Vision Transformers (ViT) patch embedding and positional encoding mechanics.",
    "reference": "ViT reshapes 2D image into non-overlapping 16x16 1D patch vectors, projects patches linearly, adds 1D learnable position embeddings, and processes via Transformer encoder.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 123,
    "question": "Derive exact update equations for AdamW optimizer with decoupled weight decay.",
    "reference": "AdamW decouples L2 weight decay from adaptive gradient scaling: w_t = w_{t-1} - lr * (m_t / (sqrt(v_t) + eps) + lambda * w_{t-1}), preventing decay rate distortion.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 124,
    "question": "Explain Variational Autoencoders (VAE) Evidence Lower Bound (ELBO) derivation.",
    "reference": "ELBO maximizes log p(x) lower bound: E_{q(z|x)}[log p(x|z)] - KL(q(z|x) || p(z)), balancing reconstruction fidelity and latent prior regularization.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 125,
    "question": "Explain Diffusion Models (DDPM) forward noise addition and reverse denoising process.",
    "reference": "DDPM gradually adds Gaussian noise in forward process q(x_t|x_0), training a U-Net to predict added noise and reverse the process p_theta(x_{t-1}|x_t).",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 126,
    "question": "Derive mathematical form of Multi-Head Latent Attention in modern LLM architectures.",
    "reference": "MHLA compresses Keys and Values into low-rank latent vectors c_KV = W_DKV * h, expanding heads dynamically during attention to cut KV cache memory footprint.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 127,
    "question": "Explain Neural Architecture Search (NAS) using Reinforcement Learning and Differentiable NAS.",
    "reference": "RL-NAS uses RNN controller generating architecture specs trained via policy gradient; DARTS continuous-relaxes architecture search space for gradient descent optimization.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 128,
    "question": "Explain Contrastive Learning objectives (SimCLR, InfoNCE loss, CLIP).",
    "reference": "InfoNCE loss maximizes cosine agreement between augmented views of same sample while minimizing agreement with negative samples: -log(exp(sim(z_i, z_j)) / sum exp(sim(z_i, z_k))).",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 129,
    "question": "Derive gradient flow through Batch Normalization layer during backward pass.",
    "reference": "Backpropagation through BN computes partial derivatives with respect to input x, mean mu, and variance sigma^2, accounting for batch-statistic dependencies.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 130,
    "question": "Explain Mixture of Experts (MoE) top-k routing and load-balancing loss formulations.",
    "reference": "MoE uses a gating network softmax(W x) to route tokens to top-k expert subnetworks, adding load-balancing auxiliary loss to prevent expert collapse.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 131,
    "question": "Explain Quantization-Aware Training (QAT) vs Post-Training Quantization (PTQ) math.",
    "reference": "PTQ quantizes trained FP32 weights/activations directly; QAT simulates fake-quantization clipping and rounding errors during forward pass using Straight-Through Estimators.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 132,
    "question": "Derive mathematical conditions for Wasserstein GAN (WGAN) Earth Mover Distance.",
    "reference": "WGAN uses Kantorovich-Rubinstein duality to compute Wasserstein distance max E[D(x)] - E[D(G(z))], enforcing 1-Lipschitz continuity via weight clipping or gradient penalty.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 133,
    "question": "Explain RoPE (Rotary Position Embeddings) mathematical formulation and properties.",
    "reference": "RoPE applies 2D rotation matrices to Query and Key vector pairs using position index m, encoding relative position implicitly via dot product inner products.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 134,
    "question": "Explain Distributed Data Parallel (DDP) AllReduce gradient synchronization algorithm.",
    "reference": "DDP replicates model across GPUs, computing local gradients concurrently and synchronizing gradients across nodes using Ring-AllReduce bucket communication.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 135,
    "question": "Explain FlashAttention I/O-aware exact attention tiling and recomputation algorithm.",
    "reference": "FlashAttention tiles Q, K, V blocks into SRAM, computing Softmax online without writing N x N attention matrices to HBM, recomputing intermediate states in backward pass.",
    "category": "Deep Learning",
    "difficulty": "Hard"
  },
  {
    "id": 136,
    "question": "What is Natural Language Processing (NLP)?",
    "reference": "NLP is a subfield of artificial intelligence focused on enabling computers to understand, interpret, process, and generate human languages.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 137,
    "question": "What is Tokenization in NLP?",
    "reference": "Tokenization breaks continuous raw text into discrete tokens such as words, subwords, or characters for downstream processing.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 138,
    "question": "What is Stop Word removal and why is it done?",
    "reference": "Stop word removal filters out high-frequency functional words (e.g. 'the', 'is') that convey minimal domain-specific semantic content.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 139,
    "question": "Explain Stemming vs Lemmatization.",
    "reference": "Stemming heuristically chops off word suffixes (e.g., 'running' -> 'runn'); Lemmatization uses vocabulary and morphological analysis to return valid dictionary lemmas ('running' -> 'run').",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 140,
    "question": "What is Bag of Words (BoW) text representation?",
    "reference": "Bag of Words represents text as an unordered vector of word occurrence counts, ignoring word order and grammar.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 141,
    "question": "What is TF-IDF (Term Frequency-Inverse Document Frequency)?",
    "reference": "TF-IDF weights words by balancing local term frequency against inverse document frequency across a corpus, penalizing ubiquitously common words.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 142,
    "question": "What is Word Embedding (Word2Vec, GloVe)?",
    "reference": "Word embeddings map discrete words to dense continuous low-dimensional vector spaces where geometric proximity reflects semantic similarity.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 143,
    "question": "What is N-gram language modeling?",
    "reference": "N-gram models predict the probability of a word given the preceding N-1 words based on historical corpus frequency counts.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 144,
    "question": "What is Part-of-Speech (POS) tagging?",
    "reference": "POS tagging assigns grammatical labels (e.g., noun, verb, adjective) to each token in a sentence based on context.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 145,
    "question": "What is Named Entity Recognition (NER)?",
    "reference": "NER identifies and categorizes key entities in text into predefined classes like Person, Organization, Location, and Date.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 146,
    "question": "What is Sentiment Analysis?",
    "reference": "Sentiment analysis classifies text polarities (positive, negative, neutral) or emotional tones using machine learning or lexicon methods.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 147,
    "question": "What is Text Classification?",
    "reference": "Text classification assigns predefined category labels to documents or text passages based on semantic content.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 148,
    "question": "What is Cosine Similarity for text distance measurement?",
    "reference": "Cosine similarity measures the cosine of the angle between two vector representations: (A . B) / (||A|| ||B||).",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 149,
    "question": "What is Subword Tokenization (BPE, WordPiece)?",
    "reference": "Subword tokenization splits rare words into frequent subword units, avoiding out-of-vocabulary (OOV) tokens while keeping vocabulary sizes manageable.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 150,
    "question": "What is Text Normalization (casing, accent stripping)?",
    "reference": "Text normalization converts raw text into a standard canonical format by lowercasing, stripping accents, removing punctuation, and fixing unicode.",
    "category": "NLP",
    "difficulty": "Easy"
  },
  {
    "id": 151,
    "question": "Explain Word2Vec Skip-Gram vs Continuous Bag of Words (CBOW) architectures.",
    "reference": "CBOW predicts a target word from surrounding context words; Skip-Gram predicts context words given a central target word.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 152,
    "question": "Explain BERT (Bidirectional Encoder Representations from Transformers) pre-training tasks.",
    "reference": "BERT pre-trains bidirectional Transformer encoders using Masked Language Modeling (MLM) and Next Sentence Prediction (NSP).",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 153,
    "question": "What is GPT (Generative Pre-trained Transformer) auto-regressive pre-training?",
    "reference": "GPT pre-trains uni-directional Transformer decoders by maximizing causal language modeling objective: predicting next tokens auto-regressively.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 154,
    "question": "Explain Seq2Seq model architecture with Encoder-Decoder and Attention.",
    "reference": "Seq2Seq uses an Encoder to condense input sequences into context vectors and a Decoder to generate output sequences, augmented by Attention.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 155,
    "question": "What is BLEU score and how is it calculated for translation evaluation?",
    "reference": "BLEU measures n-gram precision between candidate machine translations and reference translations, combined with a brevity penalty.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 156,
    "question": "Explain ROUGE metric variants (ROUGE-1, ROUGE-2, ROUGE-L) for summarization.",
    "reference": "ROUGE measures recall of n-grams (ROUGE-1, ROUGE-2) and longest common subsequences (ROUGE-L) between generated summaries and references.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 157,
    "question": "What is Masked Language Modeling (MLM) vs Causal Language Modeling (CLM)?",
    "reference": "MLM masks random input tokens to train bidirectional context representations; CLM predicts next tokens using left-to-right causal masking.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 158,
    "question": "Explain Perplexity metric for language model evaluation.",
    "reference": "Perplexity measures language model uncertainty: exp(Cross-Entropy loss), reflecting how well a model predicts a test text sequence.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 159,
    "question": "What is Beam Search decoding vs Greedy Search vs Top-k / Top-p (Nucleus) sampling?",
    "reference": "Greedy picks top token; Beam Search tracks K top hypotheses; Top-k samples from K top tokens; Top-p samples from smallest cumulative probability set.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 160,
    "question": "Explain Fine-Tuning pretrained language models (PEFT, LoRA, Adapter layers).",
    "reference": "PEFT updates a tiny fraction of parameters: LoRA injects low-rank decomposition matrices; Adapters add small trainable layers between frozen transformer blocks.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 161,
    "question": "What is Dependency Parsing vs Constituency Parsing?",
    "reference": "Dependency parsing identifies directed grammatical relationships between individual words; Constituency parsing breaks sentences into nested phrase-structure trees.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 162,
    "question": "Explain ELMo contextual embeddings vs static embeddings.",
    "reference": "ELMo generates contextual embeddings using deep bi-directional LSTMs, producing distinct vectors for identical words based on sentence context.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 163,
    "question": "What is Information Retrieval (IR) and BM25 scoring algorithm?",
    "reference": "BM25 scores document relevance given search queries by weighting term frequency saturation, document length normalization, and inverse document frequency.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 164,
    "question": "Explain Cross-Encoder vs Bi-Encoder architectures for semantic search.",
    "reference": "Bi-encoders encode queries and documents independently for fast vector search; Cross-encoders process query-document pairs jointly for higher accuracy.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 165,
    "question": "What is Retrieval-Augmented Generation (RAG) system architecture?",
    "reference": "RAG combines vector search retrieval with generative LLMs, feeding retrieved domain documents as grounding context into the prompt.",
    "category": "NLP",
    "difficulty": "Medium"
  },
  {
    "id": 166,
    "question": "Explain LoRA (Low-Rank Adaptation) mathematical formulation and matrix decomposition.",
    "reference": "LoRA freezes original weight matrix W_0 (d x k) and updates it via low-rank decomposition delta W = B * A, where B (d x r) and A (r x k) with rank r << min(d,k).",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 167,
    "question": "Derive the InfoNCE contrastive loss function used in Dense Passage Retrieval.",
    "reference": "InfoNCE maximizes similarity between query q and positive passage p+ against negative passages p-: -log(exp(q.p+ / tau) / (exp(q.p+ / tau) + sum exp(q.p- / tau))).",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 168,
    "question": "Explain Direct Preference Optimization (DPO) mathematical derivation vs PPO RLHF.",
    "reference": "DPO re-parameterizes RLHF reward function directly using language model implicit rewards, optimizing reference-model relative log-likelihoods without training a separate reward model.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 169,
    "question": "Explain KV Cache memory optimization mechanism in auto-regressive transformer inference.",
    "reference": "KV Cache stores computed Key and Value matrices of historical tokens in GPU memory across generation steps, avoiding redundant $O(N^2)$ recomputations.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 170,
    "question": "Explain FlashAttention memory complexity reduction from O(N^2) to O(N).",
    "reference": "FlashAttention tiles attention Q, K, V blocks into GPU SRAM, computing Softmax online without writing full $N \\times N$ attention matrices to high-bandwidth memory.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 171,
    "question": "Explain RoPE (Rotary Position Embeddings) complex number rotation matrices.",
    "reference": "RoPE multiplies Query and Key 2D sub-vectors by 2D rotation matrices R_Theta,m, embedding absolute positions such that dot products encode relative distance (m - n).",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 172,
    "question": "Derive BPE (Byte-Pair Encoding) merge rule optimization algorithm.",
    "reference": "BPE iteratively counts most frequent adjacent symbol pairs in corpus vocabulary, replacing pair occurrences with a new merged token until target vocab size is reached.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 173,
    "question": "Explain Speculative Decoding acceleration algorithm for Large Language Models.",
    "reference": "Speculative decoding uses a small draft model to generate K candidate tokens quickly, validating candidates in parallel via a single forward pass of the target LLM.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 174,
    "question": "Explain Grouped-Query Attention (GQA) vs Multi-Head Attention vs Multi-Query Attention.",
    "reference": "MHA has distinct KV heads per Query head; MQA shares a single KV head across all Query heads; GQA groups Query heads to share intermediate numbers of KV heads.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 175,
    "question": "Explain RLHF (Reinforcement Learning from Human Feedback) reward model and PPO policy update.",
    "reference": "RLHF trains a Bradley-Terry reward model on preference pairs, fine-tuning LLM policy via PPO with a KL penalty enforcing proximity to the initial reference policy.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 176,
    "question": "Explain ALiBi (Attention with Linear Biases) relative position bias computation.",
    "reference": "ALiBi adds static linear penalty slopes -m * |i - j| directly to attention query-key dot products before Softmax, enabling extrapolation to longer contexts.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 177,
    "question": "Explain Quantized LLM inference mechanisms (GPTQ, AWQ, EXL2).",
    "reference": "GPTQ uses second-order Taylor expansion (Hessian matrix) to quantize weights to 4-bit; AWQ preserves salient weight channels based on activation magnitudes.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 178,
    "question": "Explain Long-Context Transformer scaling methods (RingAttention, YaRN, Sliding Window).",
    "reference": "RingAttention distributes sequence blocks across GPU rings; YaRN interpolates RoPE frequencies; Sliding Window limits attention to local token neighborhoods.",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 179,
    "question": "Derive BM25 term weighting formula and saturation hyperparameters.",
    "reference": "BM25 computes score = sum IDF * (f * (k1 + 1)) / (f + k1 * (1 - b + b * (doc_len / avg_len))), parameterizing term frequency saturation (k1) and length penalty (b).",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 180,
    "question": "Explain Constitutional AI and AI Feedback (RLAIF) alignment frameworks.",
    "reference": "Constitutional AI replaces human feedback with critique and revision loops generated by an AI model guided by a written set of principles (constitution).",
    "category": "NLP",
    "difficulty": "Hard"
  },
  {
    "id": 181,
    "question": "What is a Database Management System (DBMS)?",
    "reference": "A DBMS is software that provides an interface to define, create, manage, query, and maintain structured database storage.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 182,
    "question": "What is a Relational Database (RDBMS)?",
    "reference": "An RDBMS stores data in structured tables consisting of rows and columns, enforcing relationships using primary and foreign keys.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 183,
    "question": "What is SQL (Structured Query Language)?",
    "reference": "SQL is the standard domain-specific language used to manage and query relational databases (DDL, DML, DCL, TCL).",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 184,
    "question": "What is a Primary Key vs Foreign Key?",
    "reference": "A Primary Key uniquely identifies rows within a table; a Foreign Key references a primary key in another table to enforce referential integrity.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 185,
    "question": "What is Database Normalization and why is it used?",
    "reference": "Normalization organizes table attributes to reduce data redundancy, eliminate update anomalies, and ensure data integrity.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 186,
    "question": "What is 1NF, 2NF, and 3NF in relational databases?",
    "reference": "1NF requires atomic values; 2NF removes partial functional dependencies; 3NF eliminates transitive functional dependencies.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 187,
    "question": "What is a Database Index and why is it useful?",
    "reference": "An index is a data structure (e.g. B-Tree) that speeds up data retrieval queries at the cost of additional storage and write overhead.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 188,
    "question": "What is the difference between SQL and NoSQL databases?",
    "reference": "SQL databases are relational, structured, and ACID-compliant; NoSQL databases are non-relational, flexible schema (Document, Key-Value, Graph), scaling horizontally.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 189,
    "question": "What is a JOIN in SQL (INNER, LEFT, RIGHT, FULL)?",
    "reference": "JOIN combines rows from multiple tables: INNER returns matching rows; LEFT returns all left rows; RIGHT returns all right rows; FULL returns all matching and unmatched rows.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 190,
    "question": "What is ACID properties in DBMS?",
    "reference": "ACID guarantees transaction reliability: Atomicity (all-or-nothing), Consistency (valid state), Isolation (independent execution), Durability (persisted commits).",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 191,
    "question": "What is a Database Transaction?",
    "reference": "A transaction is a logical unit of database processing consisting of one or more SQL operations executed as an atomic operation.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 192,
    "question": "What is GROUP BY and HAVING clause in SQL?",
    "reference": "GROUP BY aggregates rows sharing column values; HAVING filters aggregated groups based on specified conditions.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 193,
    "question": "What is a View in DBMS?",
    "reference": "A View is a virtual table defined by a stored SQL SELECT query that dynamically presents formatted data without storing actual rows.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 194,
    "question": "What is a Stored Procedure vs Function in SQL?",
    "reference": "A Stored Procedure executes complex business logic and can perform DML operations; a Function must return a value and cannot modify database state.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 195,
    "question": "What is a Unique Constraint vs Primary Key?",
    "reference": "A Unique constraint ensures column values are distinct but allows one NULL value; a Primary Key enforces uniqueness and disallows NULL values.",
    "category": "DBMS",
    "difficulty": "Easy"
  },
  {
    "id": 196,
    "question": "Explain B-Tree and B+ Tree indexing structures in RDBMS.",
    "reference": "B-Trees store keys and data in internal and leaf nodes; B+ Trees store data only in leaf nodes linked sequentially, optimizing range scans.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 197,
    "question": "Explain Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable).",
    "reference": "Isolation levels control transaction visibility: Read Uncommitted allows dirty reads; Read Committed prevents dirty reads; Repeatable Read prevents non-repeatable reads; Serializable prevents phantoms.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 198,
    "question": "What are Read Phenomena (Dirty Read, Non-Repeatable Read, Phantom Read)?",
    "reference": "Dirty Read reads uncommitted changes; Non-Repeatable Read sees modified values on re-read; Phantom Read sees newly inserted rows matching a query condition.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 199,
    "question": "Explain Two-Phase Locking (2PL) protocol for concurrency control.",
    "reference": "2PL guarantees serializability by dividing lock handling into a Growing Phase (acquiring locks) and a Shrinking Phase (releasing locks).",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 200,
    "question": "What is Write-Ahead Logging (WAL) and crash recovery?",
    "reference": "WAL writes transaction log changes to durable disk storage before applying modifications to database data pages, ensuring crash recovery durability.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 201,
    "question": "Explain Clustered Index vs Non-Clustered Index.",
    "reference": "A Clustered Index dictates physical storage order of table data rows; a Non-Clustered Index stores logical pointer mappings to physical row locations.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 202,
    "question": "What is Database Partitioning (Horizontal / Sharding vs Vertical)?",
    "reference": "Horizontal partitioning (Sharding) splits rows across independent database nodes; Vertical partitioning splits table columns into separate tables.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 203,
    "question": "Explain CAP Theorem (Consistency, Availability, Partition Tolerance) in distributed DBs.",
    "reference": "CAP theorem states a distributed data system can simultaneously guarantee at most two of three properties: Consistency, Availability, and Partition Tolerance.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 204,
    "question": "What is Database Replication (Master-Slave, Master-Master, Sync vs Async)?",
    "reference": "Replication copies data across servers: Master-Slave routes writes to master; Master-Master allows multi-node writes; Sync guarantees real-time consistency; Async offers higher performance.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 205,
    "question": "Explain Query Execution Plan and Cost-Based Optimizer (CBO).",
    "reference": "The CBO evaluates multiple query execution strategies using database statistics, choosing the plan with the lowest estimated CPU and I/O cost.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 206,
    "question": "What is Connection Pooling and why is it necessary?",
    "reference": "Connection pooling maintains a cache of reusable physical database connections, avoiding expensive connection creation overhead on frequent queries.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 207,
    "question": "Explain Database Deadlocks and detection algorithms (Wait-For Graph).",
    "reference": "Deadlocks occur when transactions wait circularly for locks held by each other. Wait-For graphs detect cycles and abort a victim transaction.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 208,
    "question": "What is Boyce-Codd Normal Form (BCNF)?",
    "reference": "BCNF is a strict version of 3NF where every determinant in a functional dependency X -> Y must be a candidate key.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 209,
    "question": "Explain Materialized Views vs Standard Views.",
    "reference": "Standard Views compute query results on-demand; Materialized Views physically store query results on disk and require refresh updates.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 210,
    "question": "What is MVCC (Multi-Version Concurrency Control) in PostgreSQL / InnoDB?",
    "reference": "MVCC maintains concurrent snapshot versions of data rows, allowing readers to read uncommitted data without acquiring read locks.",
    "category": "DBMS",
    "difficulty": "Medium"
  },
  {
    "id": 211,
    "question": "Explain MVCC tuple visibility rules and snapshot isolation mechanics in PostgreSQL.",
    "reference": "PostgreSQL attaches xmin (creation transaction ID) and xmax (deletion transaction ID) to row tuples, evaluating visibility against transaction snapshot active xip arrays.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 212,
    "question": "Derive B+ Tree split and merge algorithms under high concurrency (Latch Crabbing).",
    "reference": "Latch Crabbing acquires parent node latches before traversing to child nodes, releasing parent latches only if the child is safe (won't split or merge).",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 213,
    "question": "Explain ARIES (Algorithms for Recovery and Isolation Exploiting Semantics) recovery protocol.",
    "reference": "ARIES recovers database state using Analysis phase (identifying dirty pages), Redo phase (repeating history from Log Sequence Number), and Undo phase (rolling back uncommitted transactions).",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 214,
    "question": "Explain Distributed Two-Phase Commit (2PC) protocol and failure edge cases.",
    "reference": "2PC coordinates distributed transactions via Prepare phase and Commit phase. Coordinator failure during prepare can block participant nodes indefinitely.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 215,
    "question": "Explain LSM-Tree (Log-Structured Merge-tree) compaction strategies (SSTables, Leveled vs Size-Tiered).",
    "reference": "LSM-Trees buffer writes in MemTable, flushing immutable SSTables to disk. Size-Tiered compacts similar-sized SSTables; Leveled compacts overlapping key ranges across levels.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 216,
    "question": "Explain Raft Consensus protocol leader election and log replication algorithms.",
    "reference": "Raft ensures state machine replication via Term-based Leader Election, AppendEntries RPC log replication, and Safety invariants enforcing log commitment consistency.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 217,
    "question": "Explain Serializability graphs and Conflict Serializability validation math.",
    "reference": "Conflict Serializability builds a precedence graph of conflicting operations (Read-Write, Write-Write). The schedule is serializable if and only if the graph is acyclic.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 218,
    "question": "Explain Bitmap Indexes vs Hash Indexes vs Generalized Inverted Indexes (GIN / GiST).",
    "reference": "Bitmap indexes map low-cardinality columns to bitvectors; Hash indexes handle point lookups; GIN indexes Composite/Array/JSON elements; GiST supports spatial structures.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 219,
    "question": "Explain Distributed Hash Joins vs Grace Hash Join memory management algorithms.",
    "reference": "Grace Hash Join partitions large datasets into memory-sized bucket files using hash functions, joining matching partitions in memory sequentially.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 220,
    "question": "Explain Query Optimization dynamic programming join ordering (System R algorithm).",
    "reference": "System R builds left-deep execution trees using dynamic programming, pruning non-optimal sub-plans based on estimated cost and interesting physical orders.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 221,
    "question": "Explain Consistent Hashing algorithm with virtual nodes for distributed keyspace partitioning.",
    "reference": "Consistent hashing maps nodes and keys onto a 2^32 circular ring. Virtual nodes distribute physical nodes uniformly across the ring, preventing hot-spot re-sharding.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 222,
    "question": "Explain Spanner TrueTime API and External Consistency in globally distributed transactions.",
    "reference": "Spanner bounds GPS and Atomic clock drift (epsilon), committing transactions with timestamp t > t_commit + 2*epsilon to guarantee strict external consistency.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 223,
    "question": "Explain Database Buffer Pool eviction algorithms (2Q, CLOCK-Pro, LRU-K).",
    "reference": "LRU-K tracks K-th most recent access timestamp to prevent sequential scan pollution; 2Q splits buffer into FIFO queue and LRU queue for recency and frequency.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 224,
    "question": "Explain Write Amplification vs Read Amplification vs Space Amplification in storage engines.",
    "reference": "Write amplification measures bytes written to storage relative to logical payload; Read amplification is disk reads per query; Space amplification is total storage used vs raw data size.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 225,
    "question": "Explain Vectorized Query Execution vs Volcano Iterator processing model in analytical DBs.",
    "reference": "Volcano Iterator processes rows one-at-a-time via next() calls incurring high instruction overhead; Vectorized execution processes columnar vectors of 1024 values in CPU cache SIMD loops.",
    "category": "DBMS",
    "difficulty": "Hard"
  },
  {
    "id": 226,
    "question": "What is an Operating System and its primary function?",
    "reference": "An Operating System is system software managing hardware resources (CPU, Memory, Disk, I/O) and providing user programs an abstraction interface.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 227,
    "question": "What is a Process and Process Control Block (PCB)?",
    "reference": "A process is a program in execution. The PCB is a kernel data structure holding process state, PID, register values, memory limits, and open files.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 228,
    "question": "What is a Thread and thread execution context?",
    "reference": "A thread is the smallest schedulable unit of CPU execution within a process, sharing memory space, code, and file descriptors with peer threads.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 229,
    "question": "What is CPU Scheduling in an Operating System?",
    "reference": "CPU scheduling is the process by which the OS allocates CPU execution time among runnable ready-queue processes.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 230,
    "question": "What is FCFS, SJF, and Round Robin CPU scheduling?",
    "reference": "FCFS executes processes in arrival order; SJF prioritizes shortest CPU burst time; Round Robin allocates fixed time-quantum slices cyclically.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 231,
    "question": "What is Context Switching in OS?",
    "reference": "Context switching saves the current state (registers, stack pointer, page table) of a running process/thread and loads the saved state of the next ready process.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 232,
    "question": "What is Inter-Process Communication (IPC)?",
    "reference": "IPC refers to mechanisms provided by the OS (Pipes, Sockets, Shared Memory, Message Queues) allowing independent processes to exchange data.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 233,
    "question": "What is a System Call and user space vs kernel space execution?",
    "reference": "System calls are CPU trap instructions requesting kernel services. User space executes untrusted code; kernel space executes privileged OS instructions.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 234,
    "question": "What is Virtual Memory and Paging?",
    "reference": "Virtual memory abstracts physical RAM using disk storage. Paging divides virtual memory into fixed-size pages mapped to physical frames via page tables.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 235,
    "question": "What is a Deadlock and its 4 necessary Coffman conditions?",
    "reference": "Deadlock is a state where processes are permanently blocked waiting for resources. Necessary conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 236,
    "question": "What is a Semaphore and Mutex?",
    "reference": "A Mutex is a locking mechanism allowing single-thread resource ownership; a Semaphore is a signaling counter managing access to N shared resources.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 237,
    "question": "What is Memory Thrashing in OS?",
    "reference": "Thrashing occurs when an OS spends more time swapping pages between RAM and disk than executing actual instruction progress due to insufficient physical memory.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 238,
    "question": "What is File Allocation Table (FAT) vs Inode file system?",
    "reference": "FAT uses a linked list table to track block chains; Inode file systems store file metadata and direct/indirect block pointers in discrete inode structs.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 239,
    "question": "What is an Interrupt and Interrupt Service Routine (ISR)?",
    "reference": "An interrupt is a hardware or software signal prompting CPU execution suspension to invoke a specific kernel handler routine (ISR).",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 240,
    "question": "What is Spooling vs Buffering in I/O management?",
    "reference": "Spooling queues I/O jobs on disk for asynchronous device processing (e.g. printing); Buffering temporarily stores data in RAM during transfer between devices.",
    "category": "Operating Systems",
    "difficulty": "Easy"
  },
  {
    "id": 241,
    "question": "Explain Banker's Algorithm for deadlock avoidance.",
    "reference": "Banker's Algorithm tests resource allocation safety by simulating maximal resource requests, granting allocations only if a safe execution sequence exists.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 242,
    "question": "Explain Multi-Level Feedback Queue (MLFQ) CPU scheduling algorithm.",
    "reference": "MLFQ uses multiple priority queues with dynamic adjustment: interactive jobs stay in high-priority queues; CPU-bound jobs drop to lower queues after consuming quanta.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 243,
    "question": "What are Page Replacement Algorithms (LRU, FIFO, Optimal, Second Chance)?",
    "reference": "FIFO evicts oldest loaded page; LRU evicts least recently accessed page; Optimal evicts page needed farthest in future; Second Chance uses reference bit in circular queue.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 244,
    "question": "Explain Translation Lookaside Buffer (TLB) and page table lookup path.",
    "reference": "TLB is a fast hardware associative cache storing virtual-to-physical address translations. TLB miss falls back to multi-level page table memory traversal.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 245,
    "question": "Explain Producer-Consumer Problem and Readers-Writers Problem solutions.",
    "reference": "Producer-Consumer uses semaphores (mutex, empty, full) to manage bounded buffer queues; Readers-Writers uses read/write locks to permit concurrent reads but exclusive writes.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 246,
    "question": "What is Memory Segmentation vs Paging in x86 execution?",
    "reference": "Paging divides memory into fixed-size physical frames; Segmentation divides memory into variable-sized logical segments matching program components (Code, Data, Stack).",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 247,
    "question": "Explain Copy-On-Write (COW) mechanism during process fork().",
    "reference": "Fork duplicates page tables with read-only permissions. Physical memory pages are shared until a process attempts a write, triggering a page fault to copy the page.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 248,
    "question": "What is Inode structure in UNIX file system and block pointers?",
    "reference": "An Inode contains file metadata, direct block pointers, single indirect pointers, double indirect pointers, and triple indirect pointers for large file scaling.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 249,
    "question": "Explain Kernel Threads vs User Threads (1:1, N:1, M:N mapping models).",
    "reference": "1:1 maps each user thread to a kernel thread (OS handles scheduling); N:1 maps all user threads to one kernel thread; M:N multiplexes M user threads onto N kernel threads.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 250,
    "question": "What is NUMA (Non-Uniform Memory Access) architecture OS management?",
    "reference": "NUMA systems group CPUs and memory into local nodes. The OS schedules processes on local CPUs and allocates memory on local node RAM to minimize latency.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 251,
    "question": "Explain Memory Mapped Files (mmap) and page fault handling.",
    "reference": "mmap maps file blocks directly into process virtual address space. Accessing un-cached file regions triggers page faults that stream disk data into buffer cache.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 252,
    "question": "What is Synchronization Primitive: Spinlock vs Semaphore vs Read-Write Lock?",
    "reference": "Spinlocks busy-wait in CPU loops (ideal for short locks); Semaphores sleep waiting threads; Read-Write locks allow multiple concurrent readers but single writers.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 253,
    "question": "What is Belady's Anomaly in page replacement algorithms?",
    "reference": "Belady's Anomaly is the counter-intuitive phenomenon where increasing physical page frames increases page fault count in FIFO page replacement.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 254,
    "question": "What is DMA (Direct Memory Access) controller and bus mastering?",
    "reference": "DMA allows hardware I/O devices to transfer data directly to/from main RAM without continuous CPU intervention, firing an interrupt when transfer completes.",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 255,
    "question": "Explain Linux Cgroups and Namespaces for container isolation.",
    "reference": "Namespaces isolate process views (PID, Net, Mount, IPC, UTS); Cgroups restrict and monitor resource utilization limits (CPU, Memory, I/O).",
    "category": "Operating Systems",
    "difficulty": "Medium"
  },
  {
    "id": 256,
    "question": "Explain Linux Completely Fair Scheduler (CFS) red-black tree virtual runtime mechanics.",
    "reference": "CFS tracks process virtual runtime (vruntime), ordering runnable tasks in a self-balancing red-black tree. The leftmost task with lowest vruntime is scheduled next.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 257,
    "question": "Explain TLB Shootdown protocol in Symmetric Multiprocessing (SMP) architectures.",
    "reference": "When an SMP core modifies shared page tables, it issues Inter-Processor Interrupts (IPI) forcing peer cores to invalidate their local TLB translation entries.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 258,
    "question": "Explain Linux Slab / Slub / Slob memory allocator internals.",
    "reference": "Slab allocators manage caches of pre-allocated kernel object structs, eliminating page fragmentation. SLUB simplifies Slab management; SLOB targets embedded systems.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 259,
    "question": "Derive mathematical proof for Optimal Page Replacement (OPT / Belady's algorithm).",
    "reference": "OPT evicts the page with the longest future time to next access. Any departure from OPT evicts a page accessed earlier, strictly increasing necessary page faults.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 260,
    "question": "Explain RCU (Read-Copy-Update) lockless synchronization mechanism in Linux kernel.",
    "reference": "RCU allows readers concurrent zero-overhead lockless reads. Writers copy data, update the copy, replace pointer, and defer old memory deletion until a Grace Period elapses.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 261,
    "question": "Explain Hardware-Assisted Virtualization (Intel VT-x, Extended Page Tables - EPT).",
    "reference": "Intel VT-x adds VMX root/non-root operation modes. EPT translates guest virtual addresses -> guest physical addresses -> host physical addresses in hardware.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 262,
    "question": "Explain Page Fault exception handling pathway from CPU trap to disk page fetch.",
    "reference": "CPU triggers Vector 14 trap -> Kernel reads CR2 register -> allocs page frame -> reads disk block via I/O queue -> updates page table -> invalidates TLB -> resumes instruction.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 263,
    "question": "Explain Linux eBPF (Extended Berkeley Packet Filter) JIT compilation and verifier.",
    "reference": "eBPF executes bytecode inside an in-kernel sandboxed VM. A static verifier enforces safety bounds (no infinite loops, memory bounds) before JIT-compiling to host assembly.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 264,
    "question": "Explain Spectre and Meltdown speculative execution CPU vulnerabilities and OS mitigations (KPTI).",
    "reference": "Meltdown accesses kernel memory via speculatively executed instructions before privilege checks; OS mitigates via Kernel Page Table Isolation (KPTI) separating page tables.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 265,
    "question": "Explain Memory Reclaim algorithms (kswapd, direct reclaim, watermarks) in Linux kernel.",
    "reference": "Linux uses background kswapd daemon reclaiming inactive pages when free memory drops below low watermark; direct reclaim forces allocating threads to evict pages when below min watermark.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 266,
    "question": "Explain Asynchronous I/O architecture (io_uring) ring buffer submission and completion.",
    "reference": "io_uring uses shared memory lockless ring buffers: Submission Queue (SQ) for posting async I/O requests and Completion Queue (CQ) for reading kernel results without system call overhead.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 267,
    "question": "Explain Real-Time Operating System (RTOS) Rate Monotonic and Earliest Deadline First scheduling.",
    "reference": "Rate Monotonic assigns static priorities based on task period (shorter period = higher priority); EDF dynamically prioritizes tasks closest to absolute deadlines.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 268,
    "question": "Explain File System Journaling modes (writeback, ordered, journal) and crash recovery guarantee.",
    "reference": "Journal mode writes data and metadata to log before disk; Ordered writes data first then logs metadata; Writeback logs metadata only without data write ordering guarantees.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 269,
    "question": "Explain Priority Inversion problem and Priority Inheritance Protocol in RTOS.",
    "reference": "Priority Inversion occurs when a high-priority task waits on a low-priority task holding a mutex, blocked by a medium task. Priority Inheritance temporarily boosts the low task priority.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 270,
    "question": "Explain Microkernel vs Monolithic kernel IPC performance trade-offs and L4 capability systems.",
    "reference": "Monolithic kernels execute services in unified kernel space; Microkernels run OS services in user space servers using IPC, trading context-switch performance for fault isolation.",
    "category": "Operating Systems",
    "difficulty": "Hard"
  },
  {
    "id": 271,
    "question": "What is the OSI model and what are its 7 layers?",
    "reference": "The OSI model layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application, standardizing network communication functions.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 272,
    "question": "What is the TCP/IP model and how does it compare to OSI?",
    "reference": "The TCP/IP model condenses communication into 4 layers: Link, Internet, Transport, and Application, serving as the practical architecture of the Internet.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 273,
    "question": "What is an IP address (IPv4 vs IPv6)?",
    "reference": "IPv4 uses 32-bit addresses formatted as dotted quad decimals; IPv6 uses 128-bit hexadecimal addresses to vastly expand global address space.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 274,
    "question": "What is a MAC address vs IP address?",
    "reference": "A MAC address is a 48-bit physical hardware identifier burned into network interfaces; an IP address is a logical network address assigned for routing.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 275,
    "question": "What is the difference between TCP and UDP protocols?",
    "reference": "TCP is connection-oriented, reliable, ordered, and flow-controlled; UDP is connectionless, unreliable, lightweight, and low-latency.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 276,
    "question": "What is DNS (Domain Name System) and how does domain resolution work?",
    "reference": "DNS resolves human-readable domain names (e.g. example.com) to IP addresses using a hierarchical tree of Root, TLD, and Authoritative DNS servers.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 277,
    "question": "What is HTTP and HTTPS protocols?",
    "reference": "HTTP is an unencrypted application protocol for web data transfer; HTTPS encrypts HTTP communication using TLS/SSL cryptographic protocols over port 443.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 278,
    "question": "What is ARP (Address Resolution Protocol)?",
    "reference": "ARP maps dynamic 32-bit IPv4 addresses to physical 48-bit MAC addresses within a local local-area broadcast domain.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 279,
    "question": "What is a Router vs Switch vs Hub?",
    "reference": "Hubs broadcast packets to all ports (Layer 1); Switches forward frames based on MAC addresses (Layer 2); Routers route packets between IP networks (Layer 3).",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 280,
    "question": "What is DHCP (Dynamic Host Configuration Protocol)?",
    "reference": "DHCP automatically assigns IP addresses, subnet masks, default gateways, and DNS server configurations to client hosts on network join.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 281,
    "question": "What is ICMP and how does ping work?",
    "reference": "ICMP is a network layer diagnostic protocol. The ping utility sends ICMP Echo Request packets and listens for ICMP Echo Reply responses.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 282,
    "question": "What is a Subnet and Subnet Mask?",
    "reference": "Subnetting divides a larger IP network into smaller sub-networks; Subnet Masks distinguish the network portion from host portion of IP addresses.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 283,
    "question": "What is a Port number and well-known ports?",
    "reference": "Port numbers (0-65535) identify specific process network services on a host. Well-known ports (0-1023) include HTTP (80), HTTPS (443), and SSH (22).",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 284,
    "question": "What is NAT (Network Address Translation)?",
    "reference": "NAT translates private non-routable IP addresses to a public IP address at the router edge, conserving IPv4 addresses and hiding internal network topology.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 285,
    "question": "What is a Firewall and its basic types?",
    "reference": "A firewall monitors and filters incoming and outgoing network traffic based on security rules. Types include Packet Filtering, Stateful Inspection, and Proxy Firewalls.",
    "category": "Computer Networks",
    "difficulty": "Easy"
  },
  {
    "id": 286,
    "question": "Explain TCP Three-Way Handshake (SYN, SYN-ACK, ACK) and Four-Way Teardown (FIN).",
    "reference": "Handshake establishes connection: Client sends SYN -> Server responds SYN-ACK -> Client acknowledges ACK. Teardown closes connection via FIN/ACK exchange on both sides.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 287,
    "question": "Explain TCP Flow Control using Sliding Window protocol.",
    "reference": "TCP Flow Control prevents sender from overwhelming receiver using a dynamic Receive Window (rwnd) advertised in TCP header ACK frames.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 288,
    "question": "Explain TCP Congestion Control algorithms (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery).",
    "reference": "Sender adjusts Congestion Window (cwnd): Slow Start exponentially increases cwnd; Congestion Avoidance linearly increases cwnd; 3 duplicate ACKs trigger Fast Retransmit.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 289,
    "question": "What is TLS / SSL Handshake protocol (Key Exchange, Certificates)?",
    "reference": "TLS Handshake authenticates server via X.509 certificate, negotiates cipher suites, and establishes symmetric session keys using Diffie-Hellman key exchange.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 290,
    "question": "Explain CIDR (Classless Inter-Domain Routing) and Subnetting calculation.",
    "reference": "CIDR replaces classful A/B/C addressing with variable length subnet masks (VLSM) expressed in prefix notation (e.g. /24 = 256 addresses).",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 291,
    "question": "What is BGP (Border Gateway Protocol) and Autonomous Systems?",
    "reference": "BGP is the path-vector routing protocol used between Autonomous Systems (AS) on the global Internet backbone to exchange network reachability info.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 292,
    "question": "Explain OSPF (Open Shortest Path First) link-state routing protocol.",
    "reference": "OSPF builds a complete topology map of an internal network area using Link-State Advertisements (LSAs), calculating shortest paths via Dijkstra's algorithm.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 293,
    "question": "What is HTTP/1.1 vs HTTP/2 (Multiplexing, HPACK) vs HTTP/3 (QUIC)?",
    "reference": "HTTP/1.1 suffers from head-of-line blocking; HTTP/2 introduces binary frame multiplexing over single TCP; HTTP/3 uses UDP-based QUIC protocol.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 294,
    "question": "Explain DNS Recursive vs Iterative resolution and Caching hierarchy.",
    "reference": "Recursive resolvers query DNS hierarchy on client behalf; Iterative queries return server referrals. Caching stores TTL-bounded DNS records locally.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 295,
    "question": "What is VLAN (Virtual Local Area Network) and 802.1Q tagging?",
    "reference": "VLAN logically segments physical switch networks into distinct broadcast domains, inserting 4-byte IEEE 802.1Q tags into Ethernet frame headers.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 296,
    "question": "Explain SYN Flood DDoS Attack and SYN Cookies defense.",
    "reference": "SYN Flood exhausts server connection queues with spoofed SYN packets. SYN Cookies encode connection state inside TCP initial sequence numbers without allocating RAM.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 297,
    "question": "What is CDN (Content Delivery Network) edge caching and Anycast routing?",
    "reference": "CDNs cache static assets on geographically distributed edge servers. Anycast routes user DNS requests to the nearest edge server sharing a single IP.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 298,
    "question": "Explain MTU (Maximum Transmission Unit) and IP Fragmentation / Path MTU Discovery.",
    "reference": "MTU defines max packet size (typically 1500 bytes). PMTUD discovers minimum MTU along path using ICMP Fragmentation Needed packets to prevent fragmentation.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 299,
    "question": "What is WebSocket protocol handshake and persistent connection?",
    "reference": "WebSocket upgrades an initial HTTP/1.1 connection to a persistent bi-directional full-duplex TCP socket connection over port 80/443.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 300,
    "question": "Explain IPsec protocol suite (AH, ESP, Tunnel vs Transport mode).",
    "reference": "IPsec secures IP packets: AH provides authentication; ESP adds encryption. Transport mode encrypts payload only; Tunnel mode encrypts whole IP packet.",
    "category": "Computer Networks",
    "difficulty": "Medium"
  },
  {
    "id": 301,
    "question": "Explain QUIC protocol connection migration, zero-RTT handshake, and head-of-line blocking fix.",
    "reference": "QUIC runs over UDP using Connection IDs (allowing IP migration), combines TLS 1.3 handshake for 0-RTT reconnects, and multiplexes streams to eliminate TCP HOL blocking.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 302,
    "question": "Explain BGP path vector decision algorithm, route reflection, and AS-PATH loop prevention.",
    "reference": "BGP evaluates routes via Next Hop, Local Preference, AS-Path length, Origin, MED, eBGP > iBGP. Route Reflectors prevent iBGP full-mesh requirements; AS-PATH rejects loops.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 303,
    "question": "Derive TCP BBR (Bottleneck Bandwidth and RTT) congestion control model vs loss-based CC.",
    "reference": "BBR models network physical limits by continuously measuring Bottleneck Bandwidth (BtlBw) and Round Trip Time (RTprop), pacing sends without relying on packet loss.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 304,
    "question": "Explain TLS 1.3 1-RTT and 0-RTT Handshake cryptographic key derivation (HKDF, ECDHE).",
    "reference": "TLS 1.3 reduces handshake to 1-RTT by sending ClientHello with Diffie-Hellman key share; 0-RTT uses early data encrypted via PSK derived from prior sessions.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 305,
    "question": "Explain Linux Socket subsystem buffer architecture (sk_buff) and packet rx/tx stack.",
    "reference": "Packets land in NIC DMA ring buffer -> NAPI driver triggers softirq -> wraps frame in sk_buff struct -> traverses IP/TCP stack -> enqueued to socket receive buffer.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 306,
    "question": "Explain DPDK (Data Plane Development Kit) poll-mode drivers and kernel bypass networking.",
    "reference": "DPDK bypasses OS network stack, assigning network card PCIe resources directly to user-space applications using PMD poll drivers for 100Gbps line rate processing.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 307,
    "question": "Explain Software-Defined Networking (SDN) OpenFlow protocol and control/data plane separation.",
    "reference": "SDN decouples control plane (centralized controller decision logic) from data plane (switches executing flow tables), using OpenFlow to push flow entries dynamically.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 308,
    "question": "Explain Multipath TCP (MPTCP) subflow management and sequence space mapping.",
    "reference": "MPTCP enables a single TCP socket to use multiple network interfaces concurrently, mapping subflow sequence numbers to a master Data Sequence Number space.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 309,
    "question": "Explain Bufferbloat problem and Active Queue Management (AQM) algorithms (CoDel, FQ-CoDel).",
    "reference": "Bufferbloat occurs when large router buffers accumulate delay without dropping packets. CoDel drops packets based on minimum queue standing delay times.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 310,
    "question": "Explain IPv6 Neighbor Discovery Protocol (NDP) stateless address autoconfiguration (SLAAC).",
    "reference": "SLAAC hosts generate IPv6 addresses automatically using router advertized network prefixes (ICMPv6 RA) and local EUI-64 or randomized interface identifiers.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 311,
    "question": "Explain DNSSEC cryptographic signature validation (RRSIG, DNSKEY, DS records).",
    "reference": "DNSSEC signs DNS records cryptographically: RRSIG stores signatures; DNSKEY stores public keys; DS records create a chain of trust from DNS root zone down.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 312,
    "question": "Explain TCP TIME_WAIT state purpose, 2MSL timer rationale, and SO_REUSEPORT flags.",
    "reference": "TIME_WAIT lasts 2 * Maximum Segment Lifetime (2MSL) to ensure delayed packets expire and prevent duplicate sequence numbers from corrupting subsequent socket connections.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 313,
    "question": "Explain VXLAN (Virtual Extensible LAN) overlay encapsulation and EVPN-BGP control plane.",
    "reference": "VXLAN encapsulates Layer 2 Ethernet frames inside Layer 4 UDP packets (port 4789) with a 24-bit VNI, using EVPN-BGP to distribute MAC/IP reachability across VTEP endpoints.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 314,
    "question": "Explain Wireless 802.11 CSMA/CA protocol, RTS/CTS handshake, and frame aggregation.",
    "reference": "CSMA/CA uses Listen-Before-Talk with random backoff. RTS/CTS reserves medium to solve hidden node problem; A-MPDU frame aggregation groups packets to cut preamble overhead.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 315,
    "question": "Explain Network Telemetry and eBPF XDP (eXpress Data Path) high-speed packet filtering.",
    "reference": "XDP executes eBPF programs directly inside network device driver RX rings before sk_buff allocation, dropping or redirecting packets at maximum hardware speeds.",
    "category": "Computer Networks",
    "difficulty": "Hard"
  },
  {
    "id": 316,
    "question": "What is Object-Oriented Programming and its 4 main pillars?",
    "reference": "OOP is a paradigm organizing software around objects combining data and behavior. Its 4 pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 317,
    "question": "What is a Class and an Object?",
    "reference": "A Class is a blueprint defining fields and methods; an Object is a concrete instantiated instance of a class occupying memory.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 318,
    "question": "What is Encapsulation in OOP?",
    "reference": "Encapsulation bundles data and methods operating on that data within a single class, restricting direct external access to internal state.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 319,
    "question": "What is Abstraction in OOP?",
    "reference": "Abstraction hides complex implementation details, exposing only essential high-level interfaces to consumers.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 320,
    "question": "What is Inheritance in OOP?",
    "reference": "Inheritance enables a derived child class to acquire fields and methods from a parent base class, encouraging code reusability.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 321,
    "question": "What is Polymorphism in OOP?",
    "reference": "Polymorphism allows objects of different classes to respond to identical method invocations according to their specific class behaviors.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 322,
    "question": "What is a Constructor and Destructor?",
    "reference": "A Constructor initializes a newly instantiated object state; a Destructor cleans up allocated resources when an object is destroyed.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 323,
    "question": "What is Method Overloading vs Method Overriding?",
    "reference": "Overloading defines methods in the same class with identical names but different parameter signatures; Overriding redefines a base class method in a child class.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 324,
    "question": "What is an Abstract Class?",
    "reference": "An abstract class is a restricted class that cannot be instantiated directly and may contain abstract methods that derived classes must implement.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 325,
    "question": "What is an Interface in OOP?",
    "reference": "An interface defines a pure contract of method signatures without internal implementation details that implementing classes must fulfill.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 326,
    "question": "What are access modifiers (Public, Private, Protected)?",
    "reference": "Access modifiers govern visibility: Public is accessible anywhere; Private is restricted to the defining class; Protected allows access within class and child subclasses.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 327,
    "question": "What is the 'this' or 'self' keyword in OOP?",
    "reference": "The 'this' (or 'self') keyword refers to the current object instance within a class method context.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 328,
    "question": "What is Composition vs Inheritance?",
    "reference": "Inheritance expresses an 'is-a' relationship; Composition expresses a 'has-a' relationship by combining independent objects, providing greater flexibility.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 329,
    "question": "What is a Static Method and Static Attribute?",
    "reference": "Static attributes and methods belong to the class itself rather than individual object instances, shared across all instances.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 330,
    "question": "What is Object Instantiation?",
    "reference": "Object instantiation is the process of creating a concrete object instance from a class blueprint in memory using a constructor.",
    "category": "OOP",
    "difficulty": "Easy"
  },
  {
    "id": 331,
    "question": "Explain SOLID design principles with concise software architecture examples.",
    "reference": "SOLID principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion, promoting maintainable object architecture.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 332,
    "question": "What is Single Responsibility Principle (SRP) and Open-Closed Principle (OCP)?",
    "reference": "SRP dictates a class should have one reason to change; OCP states software entities should be open for extension but closed for modification.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 333,
    "question": "What is Liskov Substitution Principle (LSP) and its design implications?",
    "reference": "LSP states objects of a superclass should be replaceable with objects of its subclasses without breaking program correctness.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 334,
    "question": "Explain Interface Segregation Principle (ISP) and Dependency Inversion Principle (DIP).",
    "reference": "ISP favors small, client-specific interfaces over large monoliths; DIP states high-level modules should depend on abstractions, not concrete implementations.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 335,
    "question": "Explain Factory Method vs Abstract Factory design patterns.",
    "reference": "Factory Method uses a method in a class hierarchy to instantiate objects; Abstract Factory creates families of related objects without specifying concrete classes.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 336,
    "question": "What is Singleton design pattern and thread-safe implementation?",
    "reference": "Singleton ensures a class has only one global instance, implemented thread-safely using double-checked locking or eager initialization.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 337,
    "question": "Explain Observer design pattern and Event-driven systems.",
    "reference": "Observer defines a one-to-many dependency where subject state changes automatically notify registered observer objects.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 338,
    "question": "What is Strategy design pattern vs State design pattern?",
    "reference": "Strategy encapsulates interchangeable algorithms selectable by client; State alters object behavior dynamically based on internal state changes.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 339,
    "question": "Explain Decorator design pattern vs Adapter design pattern.",
    "reference": "Decorator dynamically adds responsibilities to objects without modifying original class; Adapter translates one interface into another expected interface.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 340,
    "question": "What is Diamond Problem in multiple inheritance and how is it resolved?",
    "reference": "The Diamond Problem occurs when a class inherits from two parent classes deriving from a single grandparent. Resolved via virtual inheritance or MRO linearization.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 341,
    "question": "Explain Coupling and Cohesion in object-oriented software design.",
    "reference": "Cohesion measures how focused responsibilities are within a single module (high cohesion is good); Coupling measures inter-module dependencies (low coupling is good).",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 342,
    "question": "What is Dependency Injection and Inversion of Control (IoC)?",
    "reference": "Dependency Injection passes external dependencies to objects rather than hardcoding creation inside, controlled via an IoC container.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 343,
    "question": "Explain Template Method vs Command design pattern.",
    "reference": "Template Method defines algorithm skeleton in a base class deferring steps to subclasses; Command encapsulates a request as a standalone object.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 344,
    "question": "What is Copy Constructor vs Deep Copy / Shallow Copy in C++ / Java / C#?",
    "reference": "Copy constructors create new objects from existing ones. Shallow copy copies pointers; Deep copy allocates new memory and duplicates pointed-to data.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 345,
    "question": "Explain Immutable Objects and Value Objects pattern.",
    "reference": "Immutable objects cannot be modified after construction, simplifying multithreaded access; Value objects are defined entirely by attribute values rather than identity.",
    "category": "OOP",
    "difficulty": "Medium"
  },
  {
    "id": 346,
    "question": "Explain Virtual Method Table (VTable) and VPointer mechanics in C++ / C# dynamic dispatch.",
    "reference": "Compilers add a hidden vptr pointer to objects with virtual functions, pointing to a class VTable array of function pointers to execute dynamic dispatch at runtime.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 347,
    "question": "Explain Curiously Recurring Template Pattern (CRTP) for compile-time polymorphism.",
    "reference": "CRTP passes a derived class as a template parameter to a base class template struct Derived : Base<Derived>, enabling static polymorphism without VTable overhead.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 348,
    "question": "Explain Domain-Driven Design (DDD) Aggregate Roots, Entities, and Value Objects rules.",
    "reference": "Entities possess distinct thread identity; Value Objects are immutable attributes; Aggregate Roots act as transactional boundary gateways protecting inner entity invariants.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 349,
    "question": "Explain Double Dispatch and Visitor Pattern implementation in strongly-typed OOP.",
    "reference": "Double dispatch routes method execution based on runtime types of two objects, implemented via Visitor pattern accept(Visitor v) and visit(Element e) calls.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 350,
    "question": "Explain Covariance and Contravariance in generic type systems (producer extends, consumer super).",
    "reference": "Covariance preserves subtyping relationship (Producer extends T); Contravariance reverses subtyping relationship (Consumer super T); Invariance prevents substitution.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 351,
    "question": "Explain RAII (Resource Acquisition Is Initialization) pattern for memory and lock safety.",
    "reference": "RAII binds resource lifecycle (files, sockets, mutex locks) to object stack lifetime, guaranteeing resource release in destructors even when exceptions throw.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 352,
    "question": "Explain Object Pool pattern under lock-free concurrent execution environments.",
    "reference": "Object Pool manages recycled expensive instances, using lock-free atomic CAS (Compare-And-Swap) stacks to allocate and release objects without thread contention.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 353,
    "question": "Explain Flyweight pattern memory optimizations for high-cardinality object graphs.",
    "reference": "Flyweight separates intrinsic immutable shared state from extrinsic context state, sharing intrinsic object instances across vast object collections.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 354,
    "question": "Explain Aspect-Oriented Programming (AOP) bytecode weaving and proxy generation.",
    "reference": "AOP modularizes cross-cutting concerns (logging, transactions) using Join Points and Advice, injected at compile-time weaving or runtime dynamic proxies.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 355,
    "question": "Explain Architectural Patterns: Active Record vs Data Mapper pattern trade-offs.",
    "reference": "Active Record pairs database table row access directly with domain entity methods; Data Mapper detaches domain entities completely from database persistence schemas.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 356,
    "question": "Explain Prototype pattern with deep object graph serialization and clone safety.",
    "reference": "Prototype creates new instances by cloning prototype objects, relying on deep copy serialization to preserve complex object graph topologies.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 357,
    "question": "Explain Memento pattern for undo/redo state restoration without violating encapsulation.",
    "reference": "Memento captures an object's internal state in an external snapshot object (Memento), allowing restoration via Originator without exposing private fields.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 358,
    "question": "Explain Chain of Responsibility pattern vs Mediator pattern in complex workflow systems.",
    "reference": "Chain of Responsibility passes requests along a linear processing handler chain; Mediator centralizes complex multi-directional object interactions.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 359,
    "question": "Explain Memory Alignment, Object Overhead, and Cache Line padding in class layouts.",
    "reference": "Compilers align object fields to architecture word boundaries (4/8 bytes), adding padding. False sharing is prevented by padding cache lines (64 bytes).",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 360,
    "question": "Explain Dynamic Proxy generation and Bytecode Manipulation (ASM, CGLIB, ByteBuddy).",
    "reference": "Dynamic proxies generate virtual class bytecodes on-the-fly at runtime, intercepting method invocations to inject cross-cutting concerns.",
    "category": "OOP",
    "difficulty": "Hard"
  },
  {
    "id": 361,
    "question": "What is a REST API (Representational State Transfer)?",
    "reference": "A REST API is an architectural style for web services based on stateless communication, standard HTTP methods, and resource-based URI endpoints.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 362,
    "question": "What are HTTP Methods (GET, POST, PUT, DELETE, PATCH)?",
    "reference": "HTTP methods define resource actions: GET retrieves data; POST creates data; PUT replaces data; DELETE removes data; PATCH partially updates data.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 363,
    "question": "What is the difference between POST, PUT, and PATCH?",
    "reference": "POST creates new resources; PUT replaces target resources completely (idempotent); PATCH applies partial modifications.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 364,
    "question": "What are HTTP Status Codes (2xx, 3xx, 4xx, 5xx)?",
    "reference": "Status codes indicate result categories: 2xx Success (200 OK, 201 Created); 3xx Redirection; 4xx Client Error (400, 401, 404); 5xx Server Error (500, 503).",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 365,
    "question": "What is JSON and XML format in API payloads?",
    "reference": "JSON is a lightweight text data-interchange format using key-value pairs; XML is a verbose mark-up language using hierarchical custom tags.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 366,
    "question": "What is an API Endpoint and URI structure?",
    "reference": "An endpoint is a specific URL destination (e.g. /api/v1/users) where an API receives requests to interact with domain resources.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 367,
    "question": "What are Query Parameters vs Path Variables?",
    "reference": "Path variables (/users/{id}) identify specific resources; Query parameters (/users?sort=asc) filter, sort, or paginate resource collections.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 368,
    "question": "What are HTTP Request Headers and Response Headers?",
    "reference": "Headers carry metadata in key-value pairs (e.g., Authorization, Content-Type, Cache-Control) accompanying API requests and responses.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 369,
    "question": "What is API Authentication vs Authorization?",
    "reference": "Authentication verifies who the calling user/service is (Identity); Authorization determines what resources the authenticated identity is permitted to access.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 370,
    "question": "What is CORS (Cross-Origin Resource Sharing)?",
    "reference": "CORS is a browser security mechanism using HTTP headers to permit or restrict web pages from requesting resources hosted on a different domain.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 371,
    "question": "What is Idempotency in HTTP Methods?",
    "reference": "An HTTP method is idempotent if executing identical requests multiple times produces the exact same server side-effects as a single execution.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 372,
    "question": "What is Statelessness in REST architecture?",
    "reference": "Statelessness means each client API request must contain all context needed to process it, without the server retaining session state between calls.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 373,
    "question": "What is API Documentation (OpenAPI / Swagger)?",
    "reference": "OpenAPI (formerly Swagger) provides a machine-readable specification standard to describe RESTful API endpoints, parameters, responses, and schemas.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 374,
    "question": "What is Rate Limiting in APIs?",
    "reference": "Rate limiting restricts the number of API requests a client can execute within a specified timeframe to protect backend services from overload.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 375,
    "question": "What is a Webhook?",
    "reference": "A webhook is an automated event-driven HTTP POST callback sent from a server to a client URL when a specific domain event occurs.",
    "category": "REST API",
    "difficulty": "Easy"
  },
  {
    "id": 376,
    "question": "Explain HATEOAS (Hypermedia As The Engine Of Application State) constraint in REST.",
    "reference": "HATEOAS dictates that API responses dynamically include hypermedia links (URLs) guiding clients on available state transition actions.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 377,
    "question": "What is JWT (JSON Web Token) architecture, structure (Header, Payload, Signature), and verification?",
    "reference": "JWT is a compact, URL-safe stateless token containing Base64-encoded Header, Payload claims, and a cryptographic Signature verified via secret or public key.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 378,
    "question": "Explain OAuth 2.0 Authorization Code Grant Flow with PKCE.",
    "reference": "OAuth 2.0 PKCE redirects user to auth server, exchanges authorization code with code verifier for tokens, protecting SPA and mobile apps from authorization code interception.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 379,
    "question": "What is the API Gateway pattern and its core responsibilities?",
    "reference": "API Gateway acts as single entry point for client requests, handling routing, rate limiting, authentication, SSL termination, and request aggregation.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 380,
    "question": "Explain REST vs GraphQL vs gRPC comparison and use-cases.",
    "reference": "REST uses resource URIs over HTTP; GraphQL lets clients query exact shape of fields; gRPC uses HTTP/2 Protocol Buffers for high-speed microservice RPC.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 381,
    "question": "What are API Versioning strategies (URI, Header, Query Param, Content Negotiation)?",
    "reference": "Versioning strategies: URI path (/v1/users), Query param (?version=1), Custom Header (X-API-Version: 1), or Content Negotiation (Accept: application/vnd.company.v1+json).",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 382,
    "question": "Explain Token Bucket vs Leaky Bucket Rate Limiting algorithms.",
    "reference": "Token Bucket adds tokens at a fixed rate, allowing bursts up to bucket capacity; Leaky Bucket processes requests at a smooth constant output rate.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 383,
    "question": "What is ETag and Conditional HTTP Requests (If-None-Match) for API caching?",
    "reference": "Server includes ETag hash header with responses. Client sends If-None-Match header on subsequent calls; if unchanged, server returns 304 Not Modified.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 384,
    "question": "Explain Content Negotiation (Accept, Content-Type) in RESTful design.",
    "reference": "Content negotiation enables client to specify desired response formats using Accept header (e.g. application/json) and request format via Content-Type header.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 385,
    "question": "What is Idempotency Key pattern for POST endpoint safe retries?",
    "reference": "Clients send a unique Idempotency-Key header on POST calls. The server caches initial execution results, returning identical saved responses on retries.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 386,
    "question": "Explain API Security Best Practices (OWASP API Security Top 10).",
    "reference": "Mitigates Broken Object Level Authorization (BOLA), Broken Authentication, Excessive Data Exposure, Lack of Resources & Rate Limiting, and Injection flaws.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 387,
    "question": "What is Circuit Breaker pattern (Resilience4j, Hystrix) in microservice APIs?",
    "reference": "Circuit Breaker monitors call failures to downstream services, tripping to Open state to reject calls fast and prevent cascading system outages.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 388,
    "question": "Explain Pagination techniques (Offset-Based vs Cursor-Based / Keyset pagination).",
    "reference": "Offset pagination (LIMIT x OFFSET y) degrades on large tables; Cursor pagination uses immutable column pointers (WHERE id > cursor) for fast O(1) performance.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 389,
    "question": "What is CORS Preflight Request (OPTIONS) and how does the browser process it?",
    "reference": "Browsers issue an automatic OPTIONS preflight call before cross-origin non-simple requests to verify allowed Origin, Headers, and Methods.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 390,
    "question": "Explain API Forward Proxy vs Reverse Proxy (Nginx, HAProxy).",
    "reference": "Forward Proxy sits in front of clients hiding client identity; Reverse Proxy sits in front of servers handling load balancing, caching, and SSL termination.",
    "category": "REST API",
    "difficulty": "Medium"
  },
  {
    "id": 391,
    "question": "Explain Distributed Tracing in microservices (OpenTelemetry, W3C Trace Context propagation).",
    "reference": "Distributed tracing injects traceparent HTTP headers (trace-id, parent-id) across microservice boundaries, visualizing complete end-to-end request latency spans.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 392,
    "question": "Explain OAuth 2.0 Token Revocation, Refresh Token Rotation, and Replay Protection.",
    "reference": "Refresh Token Rotation issues a new refresh token on every exchange; if an old refresh token is reused, the auth server revokes the entire token family.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 393,
    "question": "Derive Sliding Window Log vs Sliding Window Counter Rate Limiting algorithm in Redis.",
    "reference": "Sliding Window Log uses Sorted Sets (ZADD) logging timestamps; Sliding Window Counter approximates request counts using weighted sums of current and previous window buckets.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 394,
    "question": "Explain Zero-Downtime API Schema Evolution and Backwards Compatibility strategy.",
    "reference": "Schema evolution uses Expand and Contract pattern: add new non-breaking optional fields first, migrate consumers, then deprecate old fields gracefully.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 395,
    "question": "Explain gRPC Protocol Buffers HTTP/2 framing, streaming types, and serialization performance.",
    "reference": "gRPC serializes data into binary Protocol Buffers over HTTP/2 multiplexed streams, supporting Unary, Client Streaming, Server Streaming, and Bi-directional Streaming.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 396,
    "question": "Explain Idempotent Consumer pattern and Distributed Locking for API request deduplication.",
    "reference": "API endpoints use Redis or DB distributed locks (SETNX) on Idempotency Keys, logging processing results in an atomic database transaction.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 397,
    "question": "Explain GraphQL N+1 problem and DataLoader batching/caching mechanics.",
    "reference": "N+1 problem occurs when resolving child fields fires N separate queries. DataLoader solves this by batching keys during event loop ticks and caching results.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 398,
    "question": "Explain API Gateway Edge Caching, TLS Termination, and mTLS (Mutual TLS) service mesh.",
    "reference": "API Gateway terminates TLS at network edge, authenticating client certs (mTLS) and forwarding requests over mTLS service meshes (Envoy/Istio) internally.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 399,
    "question": "Explain REST API Error Handling design using RFC 7807 Problem Details for HTTP APIs.",
    "reference": "RFC 7807 standardizes error JSON objects containing type URI, title, status, detail, and instance attributes, providing readable error details.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 400,
    "question": "Explain Async API Architecture using WebSockets, Server-Sent Events (SSE), and EventBridge.",
    "reference": "Real-time APIs use SSE for unidirectional server-to-client streaming, WebSockets for bidirectional messaging, and EventBridge for asynchronous event routing.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 401,
    "question": "Explain Distributed Rate Limiting under high-concurrency Redis cluster sharding.",
    "reference": "Distributed rate limiting executes atomic Lua scripts on Redis clusters, evaluating token buckets or sliding windows across sharded keyspace nodes.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 402,
    "question": "Explain Backpressure management in Reactive Web APIs (Spring WebFlux, RxJS).",
    "reference": "Backpressure allows reactive consumers to signal processing capacity to producers, preventing fast data streams from overflowing consumer buffers.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 403,
    "question": "Explain OpenAPI Code Generation pipeline and Contract-First API Development.",
    "reference": "Contract-first development writes OpenAPI YAML specs first, generating server stubs, client SDKs, and mock servers automatically via openapi-generator CLI.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 404,
    "question": "Explain API Security: Mutual TLS (mTLS) certificate pinning and JWT JTI revocation.",
    "reference": "mTLS pins client certificates to prevent MITM attacks; JWT revocation tracks unique token identifiers (jti) in distributed Redis bloom filters or blacklists.",
    "category": "REST API",
    "difficulty": "Hard"
  },
  {
    "id": 405,
    "question": "Explain API Mesh vs Service Mesh architectures (Istio, Envoy sidecar interaction).",
    "reference": "API Mesh manages north-south external traffic routing and API management; Service Mesh manages east-west internal microservice traffic using sidecar proxies.",
    "category": "REST API",
    "difficulty": "Hard"
  }
];
