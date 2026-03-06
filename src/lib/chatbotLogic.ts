export const CHATBOT_CONTEXT = {
    greetings: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "hola"],

    about: [
        "who are you", "who is manish", "tell me about manish", "about him", "what do you do", "background"
    ],

    projects: [
        "what projects", "projects", "what have you built", "show me your work", "portfolio"
    ],

    rag: [
        "rag ai", "tell me about rag", "rag project", "retrieval augmented generation"
    ],

    viralyst: [
        "viralyst", "digital marketing tool", "marketing app", "viral app"
    ],

    neuroforge: [
        "neuroforge", "fitness platform", "fitness app", "ai fitness"
    ],

    skills: [
        "skills", "technologies", "what do you use", "what stack", "languages", "tech stack"
    ],

    contact: [
        "contact", "email", "how to reach", "hire", "github", "linkedin"
    ],

    experience: [
        "experience", "work history", "where did you work", "internship", "job"
    ],

    location: [
        "where are you", "location", "based in", "where do you live"
    ],

    education: [
        "education", "degree", "college", "university", "study"
    ],

    openToWork: [
        "open to work", "looking for job", "hiring", "available"
    ]
};

export function getChatbotResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();

    // Helper to check if any keyword exists as a full word/phrase in the message
    const matches = (keywords: string[]) => {
        return keywords.some(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            return regex.test(message);
        });
    };

    // 1. SPECIFIC PROJECTS FIRST
    if (matches(CHATBOT_CONTEXT.rag)) {
        return "The RAG AI Assistant is a Retrieval-Augmented Generation system Manish built. It reads notebooks and documents, summarizes them, and answers questions intelligently. The tech stack includes Python, LangChain, OpenAI, and various Vector Databases.";
    }

    if (matches(CHATBOT_CONTEXT.viralyst)) {
        return "Viralyst is a social media trend analysis and viral content prediction platform. Tech stack: \n• Frontend: Flutter, Dart (Mobile & Web)\n• Backend: Python, FastAPI\n• AI: PyTorch, TensorFlow, Scikit-learn, Hugging Face Transformers\n• Data: Scrapy, BeautifulSoup, Social Media APIs\n• Database: PostgreSQL, MongoDB, Redis\n• Cloud: AWS, Docker, Kubernetes.";
    }

    if (matches(CHATBOT_CONTEXT.neuroforge)) {
        return "NeuroForge is an AI engine for building intelligent systems and automation workflows. Tech stack: \n• Frontend: Flutter, Dart\n• Backend: Python, FastAPI, Celery\n• AI Frameworks: PyTorch, TensorFlow, LangChain\n• Vector DB: Pinecone, Chroma, FAISS\n• AI Automation: CrewAI, AutoGen\n• Deployment: Docker, Ray, AWS.";
    }

    // 2. GENERAL INTENTS
    if (matches(CHATBOT_CONTEXT.experience)) {
        return "Manish has experience as a Business Analyst Intern at TEMS Tech Solutions, where he worked with technical and business teams to evaluate product-market fit. He also worked as a Software Developer Intern at Keyspark, where he helped develop the HelloPlay mobile application.";
    }

    if (matches(CHATBOT_CONTEXT.skills)) {
        return "Manish specializes in Artificial Intelligence, Machine Learning, AI Product Development, and Backend Systems. His technical skills include Python, Java, JavaScript, RAG, API Development, Redis, WebSockets, Flutter, and React.";
    }

    if (matches(CHATBOT_CONTEXT.projects)) {
        return "Manish has built several impressive AI and software projects! His main featured projects are a RAG AI Assistant for document analysis, Viralyst (an AI digital marketing tool), and NeuroForge (an AI fitness intelligence platform). Would you like to know more about a specific one?";
    }

    if (matches(CHATBOT_CONTEXT.contact)) {
        return "You can easily contact Manish via email at manishtalla.tems@gmail.com. You can also connect with him through the links in the footer of this portfolio. He's always open to discussing new opportunities!";
    }

    if (matches(CHATBOT_CONTEXT.education)) {
        return "Manish holds a Bachelor's degree in Artificial Intelligence and Data Science from Methodist College of Engineering and Technology.";
    }

    if (matches(CHATBOT_CONTEXT.location)) {
        return "Manish is currently based in Hyderabad, India.";
    }

    if (matches(CHATBOT_CONTEXT.openToWork)) {
        return "Yes! Manish is currently open to new opportunities. He is looking for roles where he can build intelligent AI applications, modern digital products, and scalable systems. You can contact him at manishtalla.tems@gmail.com.";
    }

    if (matches(CHATBOT_CONTEXT.about)) {
        return "Manish Talla is an AI and Data Science graduate and software developer based in Hyderabad, India. He specializes in building intelligent AI systems, machine learning applications, and modern software products.";
    }

    // 3. GREETINGS (Down-prioritized)
    if (matches(CHATBOT_CONTEXT.greetings)) {
        return "Hello! I am Manish's Personal AI Assistant. I can tell you about his skills, projects, experience, or how to contact him. What would you like to know?";
    }

    // Fallback
    return "I'm a bit restricted to answering questions specifically about Manish's portfolio, background, projects, and skills. Could you rephrase your question, or perhaps ask about his technical experience or how to contact him?";
}
