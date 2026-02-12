// Programming Languages Data for SEO Pages

export const programmingLanguages = [
  {
    id: "1",
    name: "Python",
    slug: "python",
    tagline: "Simple, Readable, Powerful",
    description: "Python is a high-level, general-purpose programming language known for its elegant syntax and readability. It emphasizes code readability and allows programmers to express concepts in fewer lines of code than languages like C++ or Java.",
    longDescription: "Python was created by Guido van Rossum and first released in 1991. It has become one of the most popular programming languages in the world, especially in fields like data science, machine learning, web development, and automation. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    yearCreated: 1991,
    creator: "Guido van Rossum",
    paradigm: ["Object-oriented", "Procedural", "Functional", "Structured"],
    typing: "Dynamic, Strong",
    latestVersion: "3.12",
    fileExtension: ".py",
    popularity: {
      githubRank: 2,
      tiobeRank: 1,
      stackOverflowRank: 1
    },
    useCases: [
      "Web Development (Django, Flask)",
      "Data Science & Analytics",
      "Machine Learning & AI",
      "Automation & Scripting",
      "Scientific Computing",
      "Backend Development"
    ],
    features: [
      "Easy to learn and read",
      "Extensive standard library",
      "Cross-platform compatibility",
      "Large community and ecosystem",
      "Interpreted language",
      "Dynamic typing"
    ],
    codeExample: `# Python Hello World and Basic Example\ndef greet(name):\n    """Function to greet a person"""\n    return f"Hello, {name}! Welcome to Python."\n\n# List comprehension example\nnumbers = [1, 2, 3, 4, 5]\nsquares = [n**2 for n in numbers]\n\nprint(greet("Developer"))\nprint(f"Squares: {squares}")`,
    pros: [
      "Beginner-friendly syntax",
      "Vast library ecosystem (PyPI)",
      "Strong community support",
      "Versatile applications",
      "Rapid development"
    ],
    cons: [
      "Slower execution speed",
      "Not ideal for mobile development",
      "Memory intensive",
      "GIL limitations for threading"
    ],
    companies: ["Google", "Instagram", "Spotify", "Netflix", "Dropbox"],
    color: "#3776AB",
    icon: "🐍"
  },
  {
    id: "2",
    name: "Java",
    slug: "java",
    tagline: "Write Once, Run Anywhere",
    description: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It's one of the most widely used programming languages for building enterprise-scale applications.",
    longDescription: "Java was originally developed by James Gosling at Sun Microsystems and released in 1995. The language was designed with the principle of 'Write Once, Run Anywhere' (WORA), meaning that compiled Java code can run on all platforms that support Java without recompilation. Java is known for its platform independence, robustness, security features, and extensive standard library. It powers billions of devices worldwide, from smartphones to enterprise servers.",
    yearCreated: 1995,
    creator: "James Gosling (Sun Microsystems)",
    paradigm: ["Object-oriented", "Class-based", "Concurrent", "Generic"],
    typing: "Static, Strong",
    latestVersion: "21 LTS",
    fileExtension: ".java",
    popularity: {
      githubRank: 3,
      tiobeRank: 4,
      stackOverflowRank: 5
    },
    useCases: [
      "Enterprise Applications",
      "Android App Development",
      "Web Applications (Spring)",
      "Big Data Technologies",
      "Cloud Computing",
      "Financial Services"
    ],
    features: [
      "Platform independent (JVM)",
      "Strong memory management",
      "Multi-threading support",
      "Rich API and libraries",
      "High security",
      "Automatic garbage collection"
    ],
    codeExample: `// Java Hello World and Basic Example\npublic class HelloWorld {\n    public static void main(String[] args) {\n        // Greeting method\n        String greeting = greet("Developer");\n        System.out.println(greeting);\n        \n        // Array example\n        int[] numbers = {1, 2, 3, 4, 5};\n        for (int num : numbers) {\n            System.out.println("Square: " + (num * num));\n        }\n    }\n    \n    public static String greet(String name) {\n        return "Hello, " + name + "! Welcome to Java.";\n    }\n}`,
    pros: [
      "Platform independence",
      "Robust and secure",
      "Excellent for large-scale applications",
      "Strong typing prevents errors",
      "Mature ecosystem"
    ],
    cons: [
      "Verbose syntax",
      "Slower than C/C++",
      "Higher memory consumption",
      "Steeper learning curve"
    ],
    companies: ["Amazon", "Google", "LinkedIn", "Uber", "Airbnb"],
    color: "#007396",
    icon: "☕"
  },
  {
    id: "3",
    name: "C++",
    slug: "cpp",
    tagline: "Performance Meets Power",
    description: "C++ is a powerful general-purpose programming language that extends C with object-oriented features. It provides high performance and fine-grained control over system resources, making it ideal for system software and game development.",
    longDescription: "C++ was developed by Bjarne Stroustrup starting in 1979 at Bell Labs as an extension of the C language. It was designed to provide high-level features while maintaining the efficiency and flexibility of C. C++ has influenced many other programming languages including Java, C#, and D. It remains one of the most powerful languages for systems programming, game development, and applications where performance is critical.",
    yearCreated: 1985,
    creator: "Bjarne Stroustrup",
    paradigm: ["Object-oriented", "Procedural", "Functional", "Generic"],
    typing: "Static, Strong",
    latestVersion: "C++23",
    fileExtension: ".cpp",
    popularity: {
      githubRank: 4,
      tiobeRank: 3,
      stackOverflowRank: 6
    },
    useCases: [
      "Game Development",
      "System Programming",
      "Embedded Systems",
      "High-Performance Applications",
      "Operating Systems",
      "Browser Engines"
    ],
    features: [
      "High performance",
      "Low-level memory manipulation",
      "Object-oriented programming",
      "Standard Template Library (STL)",
      "Hardware access",
      "Compile-time polymorphism"
    ],
    codeExample: `// C++ Hello World and Basic Example\n#include <iostream>\n#include <vector>\n#include <string>\n\nstd::string greet(const std::string& name) {\n    return "Hello, " + name + "! Welcome to C++.";\n}\n\nint main() {\n    std::cout << greet("Developer") << std::endl;\n    \n    // Vector example\n    std::vector<int> numbers = {1, 2, 3, 4, 5};\n    for (int num : numbers) {\n        std::cout << "Square: " << num * num << std::endl;\n    }\n    \n    return 0;\n}`,
    pros: [
      "Exceptional performance",
      "Fine-grained control",
      "Rich standard library",
      "Wide industry adoption",
      "Backward compatible with C"
    ],
    cons: [
      "Complex syntax",
      "Manual memory management",
      "Steep learning curve",
      "Longer development time"
    ],
    companies: ["Microsoft", "Adobe", "Bloomberg", "Epic Games", "Intel"],
    color: "#00599C",
    icon: "⚡"
  }
];

export function getLanguageBySlug(slug) {
  const normalizedSlug = slug.toLowerCase().replace(/\+\+/g, 'pp');
  return programmingLanguages.find(lang => 
    lang.slug.toLowerCase() === normalizedSlug ||
    lang.name.toLowerCase().replace(/\+\+/g, 'pp') === normalizedSlug ||
    lang.name.toLowerCase() === slug.toLowerCase()
  );
}

export function getAllLanguageSlugs() {
  return programmingLanguages.map(lang => lang.slug);
}
