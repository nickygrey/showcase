export const projects = [
  {
    name: "Momentum",
    tagline: "iOS habit tracker with gamification, health integration, and offline-first architecture",
    domain: ["mobile"],
    techStack: {
      primary: ["React 18", "Vite", "Tailwind CSS v4", "Capacitor"],
      full: ["React 18", "Vite", "Tailwind CSS v4", "Capacitor", "Apple HealthKit", "localStorage", "iOS"]
    },
    status: "in-progress",
    year: "2026",
    features: [
      "Apple HealthKit integration for automatic activity tracking",
      "XP and leveling system with 35 unlockable trophies",
      "Streak tracking with visual heatmap visualization",
      "Offline-first architecture with localStorage persistence",
      "Native iOS integration through Capacitor",
      "Real-time habit completion with instant feedback",
      "Comprehensive stats dashboard with progress analytics"
    ],
    deepDive: {
      purpose: "Momentum transforms habit building into an engaging experience by gamifying personal growth. It addresses the common challenge of maintaining consistency by rewarding users with XP, levels, and trophies while seamlessly integrating with Apple HealthKit to automatically track physical activities.",
      architecture: "Built as a progressive web app with React and Vite, then wrapped with Capacitor for native iOS deployment. The app uses a local-first architecture with localStorage as the primary data store, ensuring instant performance and offline capability. HealthKit integration is handled through Capacitor plugins, bridging JavaScript and native iOS APIs.",
      highlights: "The gamification engine calculates XP based on habit difficulty and streak multipliers, creating compelling feedback loops. Tailwind CSS v4's new engine provides near-instant styling updates during development. The heatmap visualization uses a custom algorithm to render year-long activity patterns efficiently on mobile screens without performance degradation.",
      lessons: "Building offline-first taught the importance of optimistic UI updates and conflict resolution strategies. Integrating with HealthKit revealed the complexity of iOS permission models and the need for graceful degradation when permissions are denied. The trophy system demonstrated how small rewards can significantly improve user engagement and retention.",
      codeSnippets: [
        {
          language: "javascript",
          title: "XP Calculation with Streak Multiplier",
          code: `function calculateXP(habit, streak) {
  const baseXP = habit.difficulty * 10;
  const streakBonus = Math.floor(streak / 7) * 5;
  const multiplier = 1 + (streakBonus / 100);
  return Math.floor(baseXP * multiplier);
}`
        },
        {
          language: "javascript",
          title: "Offline-First State Synchronization",
          code: `const syncHabits = () => {
  const local = JSON.parse(localStorage.getItem('habits') || '[]');
  const pending = JSON.parse(localStorage.getItem('pending_updates') || '[]');

  if (navigator.onLine && pending.length > 0) {
    pending.forEach(update => applyUpdate(update));
    localStorage.setItem('pending_updates', '[]');
  }
  return local;
};`
        }
      ]
    }
  },
  {
    name: "Advanced Cryptocurrency Blockchain",
    tagline: "Full-featured blockchain implementation with UTXO model, Proof of Work, and Merkle trees",
    domain: ["blockchain"],
    techStack: {
      primary: ["Python 3", "Flask 3.0", "ECDSA", "Proof of Work"],
      full: ["Python 3", "Flask 3.0", "ECDSA", "UTXO Model", "Proof of Work", "Merkle Trees", "REST API", "SHA-256"]
    },
    status: "complete",
    year: "2026",
    features: [
      "UTXO-based transaction model similar to Bitcoin",
      "Elliptic Curve Digital Signature Algorithm for secure transactions",
      "Proof of Work consensus with adjustable difficulty",
      "Merkle tree implementation for efficient transaction verification",
      "REST API for blockchain interaction and queries",
      "Transaction validation with signature verification",
      "Block mining with nonce discovery"
    ],
    deepDive: {
      purpose: "This project demystifies blockchain technology by implementing core concepts from scratch. It serves as both a learning tool and a demonstration of how cryptocurrencies like Bitcoin actually work under the hood, from transaction signing to block mining.",
      architecture: "The blockchain is implemented as a linked list of blocks, each containing a Merkle tree of transactions. Flask provides a REST API layer for creating transactions, mining blocks, and querying the chain. ECDSA handles all cryptographic operations including key generation, transaction signing, and signature verification.",
      highlights: "The UTXO model implementation accurately reflects Bitcoin's approach, tracking unspent outputs rather than account balances. The Merkle tree structure allows efficient proof of transaction inclusion without transmitting entire blocks. Dynamic difficulty adjustment maintains consistent block times as mining power changes.",
      lessons: "Implementing cryptographic primitives from scratch revealed the elegance of ECDSA and the computational challenges of Proof of Work. The UTXO model's advantages for parallelization and fraud prevention became clear compared to account-based systems. Building a consensus mechanism highlighted the trade-offs between security, decentralization, and performance.",
      codeSnippets: [
        {
          language: "python",
          title: "Proof of Work Mining Algorithm",
          code: `def mine_block(self, difficulty):
    target = '0' * difficulty
    self.nonce = 0

    while True:
        hash_result = self.calculate_hash()
        if hash_result[:difficulty] == target:
            return hash_result
        self.nonce += 1`
        },
        {
          language: "python",
          title: "UTXO Transaction Validation",
          code: `def validate_transaction(self, transaction):
    total_input = 0
    for tx_input in transaction.inputs:
        utxo = self.find_utxo(tx_input.tx_id, tx_input.output_index)
        if not utxo or not self.verify_signature(utxo, tx_input):
            return False
        total_input += utxo.amount

    total_output = sum(output.amount for output in transaction.outputs)
    return total_input >= total_output`
        }
      ]
    }
  },
  {
    name: "YOLO Vision Lab",
    tagline: "Real-time object detection platform with custom model training and live inference",
    domain: ["ai-ml", "computer-vision"],
    techStack: {
      primary: ["Python 3", "Ultralytics YOLO 8.3", "OpenCV 4.10", "FastAPI"],
      full: ["Python 3", "Ultralytics YOLO 8.3", "OpenCV 4.10", "FastAPI", "PyTorch", "NumPy", "Real-time Detection"]
    },
    status: "complete",
    year: "2026",
    features: [
      "Real-time object detection with YOLO v8 architecture",
      "Custom model training pipeline with dataset management",
      "Live webcam inference with bounding box visualization",
      "FastAPI endpoints for model serving and batch processing",
      "Support for multiple YOLO model variants (nano, small, medium, large)",
      "Performance metrics and inference time tracking",
      "Export models to ONNX and TensorRT formats"
    ],
    deepDive: {
      purpose: "YOLO Vision Lab provides an accessible platform for experimenting with state-of-the-art object detection. It bridges the gap between research and practical applications, allowing developers to train custom models and deploy them for real-time inference without deep ML expertise.",
      architecture: "Built on Ultralytics YOLO v8, the platform uses OpenCV for video capture and frame processing, PyTorch for model training, and FastAPI for serving predictions. The training pipeline handles data augmentation, hyperparameter tuning, and model checkpointing automatically. Inference is optimized with GPU acceleration when available.",
      highlights: "The real-time detection pipeline achieves 30+ FPS on modern GPUs by batching frames and using async processing. Custom training is simplified through automatic dataset validation and augmentation strategies. The FastAPI integration allows seamless deployment as a microservice with OpenAPI documentation generated automatically.",
      lessons: "Working with YOLO v8 revealed the importance of proper data annotation and class balancing for model accuracy. Real-time performance optimization required careful profiling to identify bottlenecks in the video pipeline. Deploying computer vision models taught the challenges of handling various input formats and managing GPU memory efficiently.",
      codeSnippets: [
        {
          language: "python",
          title: "Real-time Detection Pipeline",
          code: `def detect_stream(self, source=0):
    cap = cv2.VideoCapture(source)

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        results = self.model(frame, stream=True)

        for result in results:
            boxes = result.boxes
            for box in boxes:
                x1, y1, x2, y2 = box.xyxy[0]
                conf = box.conf[0]
                cls = box.cls[0]

                cv2.rectangle(frame, (int(x1), int(y1)),
                            (int(x2), int(y2)), (0, 255, 0), 2)

        yield frame`
        }
      ]
    }
  },
  {
    name: "Image Agent",
    tagline: "AI-powered UI asset generation using Google's Gemini, Imagen, and Veo models",
    domain: ["ai-ml"],
    techStack: {
      primary: ["Python 3.14", "Google Vertex AI", "Gemini 2.5 Flash", "Imagen 3"],
      full: ["Python 3.14", "Google Vertex AI", "Gemini 2.5 Flash Image", "Imagen 3", "Veo 3.1", "FastAPI", "Async/Await"]
    },
    status: "complete",
    year: "2026",
    features: [
      "Automated UI asset generation from text descriptions",
      "Multi-modal understanding with Gemini 2.5 Flash Image",
      "High-quality image synthesis using Imagen 3",
      "Video generation capabilities with Veo 3.1",
      "Iterative refinement based on feedback",
      "Batch processing for multiple asset variants",
      "Export in multiple formats and resolutions"
    ],
    deepDive: {
      purpose: "Image Agent accelerates UI design workflows by generating production-ready assets on demand. It leverages Google's latest generative AI models to understand design requirements and produce consistent, high-quality visual elements, reducing the time from concept to implementation.",
      architecture: "The system uses Gemini 2.5 Flash for understanding natural language design requirements and generating detailed prompts. These prompts feed into Imagen 3 for image generation or Veo 3.1 for video content. An async pipeline handles multiple requests concurrently, with results cached to avoid redundant generation.",
      highlights: "The prompt engineering layer translates casual design requests into optimized prompts that produce better results. Error handling includes automatic retry with modified prompts when generation fails quality checks. The multi-modal approach allows using existing design references to maintain visual consistency across generated assets.",
      lessons: "Working with large generative models taught the importance of prompt engineering and parameter tuning for consistent results. Async processing proved essential for handling the long inference times of image generation models. Managing API costs required implementing smart caching and result reuse strategies.",
      codeSnippets: [
        {
          language: "python",
          title: "Multi-Model Asset Generation",
          code: `async def generate_asset(self, description: str, style_ref: Optional[bytes] = None):
    # Use Gemini to enhance the prompt
    enhanced_prompt = await self.gemini.generate_content(
        f"Convert this UI requirement into a detailed image prompt: {description}"
    )

    # Generate with Imagen
    result = await self.imagen.generate_images(
        prompt=enhanced_prompt.text,
        number_of_images=4,
        aspect_ratio="16:9",
        safety_filter_level="block_few"
    )

    return result.images`
        }
      ]
    }
  },
  {
    name: "My Portfolio",
    tagline: "Lightning-fast Astro blog with MDX support and perfect Lighthouse scores",
    domain: ["web"],
    techStack: {
      primary: ["Astro 7.1", "MDX", "TypeScript", "SEO"],
      full: ["Astro 7.1", "MDX", "TypeScript", "Tailwind CSS", "SEO", "RSS", "Sitemap", "Static Site Generation"]
    },
    status: "complete",
    year: "2026",
    features: [
      "100/100 Lighthouse score across all metrics",
      "MDX for rich, interactive blog content",
      "Static site generation for instant page loads",
      "Full SEO optimization with meta tags and structured data",
      "RSS feed for blog subscriptions",
      "Automatic sitemap generation",
      "Dark mode with system preference detection"
    ],
    deepDive: {
      purpose: "This portfolio site demonstrates modern web development best practices with a focus on performance and developer experience. It showcases projects and technical writing while achieving perfect scores in performance, accessibility, and SEO through Astro's efficient architecture.",
      architecture: "Astro's island architecture loads zero JavaScript by default, hydrating only interactive components on demand. MDX content is processed at build time into optimized HTML. TypeScript provides type safety across components and content collections. The build output is fully static, deployable to any CDN without a server.",
      highlights: "Achieving 100/100 Lighthouse scores required careful image optimization, font loading strategies, and eliminating render-blocking resources. Astro's content collections provide type-safe frontmatter validation for blog posts. The MDX integration allows embedding React components directly in markdown for interactive demonstrations.",
      lessons: "Astro proved that shipping less JavaScript dramatically improves performance without sacrificing developer experience. Static site generation trades build time for runtime performance, a worthwhile trade for content-focused sites. SEO optimization requires attention to semantic HTML, meta tags, and structured data beyond just content quality.",
      codeSnippets: [
        {
          language: "typescript",
          title: "Type-Safe Content Collection",
          code: `import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  'blog': blogCollection
};`
        }
      ]
    }
  },
  {
    name: "Movie Adviser App",
    tagline: "Smart movie recommendation platform powered by TMDB API with advanced filtering",
    domain: ["web"],
    techStack: {
      primary: ["Flask 3.0", "Python", "TMDB API", "JavaScript"],
      full: ["Flask 3.0", "Python", "TMDB API", "JavaScript", "HTML5", "CSS3", "RESTful API", "Responsive Design"]
    },
    status: "complete",
    year: "2025",
    features: [
      "Integration with The Movie Database (TMDB) API",
      "Genre-based movie filtering and discovery",
      "Advanced search with multiple criteria",
      "Responsive design for mobile and desktop",
      "Movie details with cast, ratings, and synopsis",
      "Trending and popular movies sections",
      "User-friendly filtering interface"
    ],
    deepDive: {
      purpose: "Movie Adviser simplifies the overwhelming task of choosing what to watch by providing intelligent filtering and recommendations. It taps into TMDB's extensive database to surface movies that match specific genres, ratings, and release periods, making movie discovery delightful rather than daunting.",
      architecture: "Flask serves as the backend, handling TMDB API requests and caching responses to minimize API calls. The frontend uses vanilla JavaScript for dynamic filtering and infinite scroll loading. Movie data is fetched asynchronously and rendered client-side for smooth interactions without full page reloads.",
      highlights: "The filtering system combines multiple criteria without overwhelming users, using progressive disclosure to show advanced options. API response caching significantly reduces load times for repeated queries. The responsive design adapts seamlessly from mobile to desktop with a mobile-first approach.",
      lessons: "Working with external APIs taught the importance of error handling and graceful degradation when services are unavailable. Caching strategies proved essential for performance and staying within API rate limits. User interface design revealed that too many options can paralyze decision-making, requiring careful balance in filter presentation.",
      codeSnippets: [
        {
          language: "python",
          title: "TMDB API Integration with Caching",
          code: `from functools import lru_cache
from datetime import timedelta

@lru_cache(maxsize=128)
def fetch_movies(genre_id, page=1):
    cache_key = f"movies_{genre_id}_{page}"
    cached = cache.get(cache_key)

    if cached:
        return cached

    response = requests.get(
        f"{TMDB_BASE_URL}/discover/movie",
        params={
            "api_key": TMDB_API_KEY,
            "with_genres": genre_id,
            "page": page
        }
    )

    data = response.json()
    cache.set(cache_key, data, timeout=3600)
    return data`
        }
      ]
    }
  },
  {
    name: "New Creative Website",
    tagline: "Immersive web experience with GSAP animations, smooth scrolling, and AI-generated visuals",
    domain: ["web"],
    techStack: {
      primary: ["Vite", "GSAP 3.15", "Lenis 1.3.26", "Higgsfield AI"],
      full: ["Vite", "GSAP 3.15", "Lenis 1.3.26", "Higgsfield AI", "JavaScript", "CSS3", "3D Transforms", "ScrollTrigger"]
    },
    status: "in-progress",
    year: "2025",
    features: [
      "Smooth scroll experience with Lenis",
      "Advanced GSAP animations with ScrollTrigger",
      "Interactive 3D transformations",
      "AI-generated visual assets from Higgsfield",
      "Kinetic typography with motion effects",
      "Parallax scrolling sections",
      "Performance-optimized animations"
    ],
    deepDive: {
      purpose: "This creative showcase pushes the boundaries of web interaction design by combining cutting-edge animation libraries with AI-generated visuals. It demonstrates how thoughtful motion design can create memorable, engaging experiences that guide users through content naturally.",
      architecture: "Vite provides near-instant hot module reloading during development. GSAP handles all animations with hardware-accelerated transforms for smooth 60fps performance. Lenis replaces native scrolling with a physics-based smooth scroll implementation. Higgsfield AI generates unique visual elements that respond to scroll position.",
      highlights: "ScrollTrigger integration creates sophisticated scroll-based animations without complex math or event listeners. The smooth scroll implementation feels natural while allowing precise control over scroll physics. AI-generated visuals are pre-rendered and optimized to maintain performance despite their complexity.",
      lessons: "High-quality animations require careful performance profiling to avoid janky frame rates. Smooth scrolling must be implemented carefully to remain accessible for keyboard and assistive technology users. Balancing visual impact with loading performance meant optimizing AI-generated assets aggressively.",
      codeSnippets: [
        {
          language: "javascript",
          title: "Scroll-Triggered Animation Timeline",
          code: `import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true
  }
});

tl.to('.hero-title', {
  scale: 0.8,
  opacity: 0,
  y: -100
})
.to('.hero-image', {
  scale: 1.2,
  rotateZ: 5
}, '<');`
        }
      ]
    }
  },
  {
    name: "Website for Workshop",
    tagline: "Minimalist workshop website featuring kinetic typography and scroll-based animations",
    domain: ["web"],
    techStack: {
      primary: ["Vanilla JavaScript", "CSS3", "HTML5"],
      full: ["Vanilla JavaScript", "CSS3", "HTML5", "Kinetic Typography", "Scroll Animations", "Monospace Design"]
    },
    status: "complete",
    year: "2025",
    features: [
      "Kinetic typography with motion on scroll",
      "Monospace aesthetic for technical feel",
      "Custom scroll-based animation system",
      "Zero dependencies, pure vanilla JavaScript",
      "Responsive layout adapting to all screens",
      "Intersection Observer for performance",
      "Minimalist, content-focused design"
    ],
    deepDive: {
      purpose: "This workshop website demonstrates that compelling web experiences don't require heavy frameworks or libraries. It proves that vanilla JavaScript and modern CSS can create sophisticated interactions while maintaining perfect performance and minimal bundle size.",
      architecture: "Built entirely with vanilla JavaScript, the animation system uses Intersection Observer to trigger effects as elements enter the viewport. CSS custom properties enable dynamic value updates from JavaScript. No build step is required, making the codebase instantly understandable and modifiable.",
      highlights: "The kinetic typography system animates individual characters based on scroll position, creating fluid text motion without performance penalties. Intersection Observer ensures animations only run for visible elements, maintaining efficiency. The monospace typography creates a distinctive, technical aesthetic that aligns with workshop branding.",
      lessons: "Modern browser APIs like Intersection Observer eliminate the need for scroll event listeners and manual viewport calculations. CSS custom properties bridge JavaScript and CSS elegantly for dynamic animations. Constraints breed creativity, and framework-free development forced elegant solutions to common problems.",
      codeSnippets: [
        {
          language: "javascript",
          title: "Kinetic Typography Animation",
          code: `const animateText = (element) => {
  const text = element.textContent;
  element.innerHTML = text
    .split('')
    .map((char, i) => \`<span style="--char-index: \${i}">\${char}</span>\`)
    .join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.intersectionRatio;
        element.style.setProperty('--scroll-progress', progress);
      }
    });
  }, { threshold: Array.from({length: 101}, (_, i) => i / 100) });

  observer.observe(element);
};`
        }
      ]
    }
  },
  {
    name: "DLH Machine Learning",
    tagline: "Comprehensive machine learning curriculum covering mathematical foundations to advanced algorithms",
    domain: ["ai-ml"],
    techStack: {
      primary: ["Python 3", "NumPy", "Pandas", "Scikit-learn"],
      full: ["Python 3", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter", "Linear Algebra", "Calculus"]
    },
    status: "educational",
    year: "2025-2026",
    features: [
      "3,873 files covering complete ML curriculum",
      "Mathematical foundations including linear algebra and calculus",
      "Implementation of core algorithms from scratch",
      "Classical ML techniques (regression, classification, clustering)",
      "Model evaluation and validation strategies",
      "Feature engineering and data preprocessing",
      "Comprehensive exercises and practical examples"
    ],
    deepDive: {
      purpose: "DLH Machine Learning provides a rigorous, ground-up education in machine learning fundamentals. Rather than treating algorithms as black boxes, it builds understanding from mathematical principles, ensuring learners grasp not just how to use ML tools but why they work.",
      architecture: "The curriculum is structured as a progression from mathematical foundations through algorithm implementation to practical applications. Each concept includes theory, mathematical derivations, Python implementations from scratch, and comparisons with library implementations. Jupyter notebooks enable interactive learning and experimentation.",
      highlights: "Implementing algorithms from scratch using only NumPy reveals their inner workings in ways that using high-level libraries never could. The mathematical rigor ensures understanding of assumptions, limitations, and failure modes. The extensive file collection creates a reference library for revisiting concepts and implementations.",
      lessons: "Deep understanding requires building from first principles rather than jumping to high-level abstractions. Mathematical foundations aren't optional for serious ML work, they're essential for debugging, optimization, and innovation. The best learning comes from implementing algorithms yourself before using production libraries.",
      codeSnippets: [
        {
          language: "python",
          title: "Linear Regression from Scratch",
          code: `import numpy as np

class LinearRegression:
    def __init__(self, learning_rate=0.01, iterations=1000):
        self.lr = learning_rate
        self.iterations = iterations
        self.weights = None
        self.bias = None

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0

        for _ in range(self.iterations):
            y_pred = np.dot(X, self.weights) + self.bias

            dw = (1/n_samples) * np.dot(X.T, (y_pred - y))
            db = (1/n_samples) * np.sum(y_pred - y)

            self.weights -= self.lr * dw
            self.bias -= self.lr * db

    def predict(self, X):
        return np.dot(X, self.weights) + self.bias`
        }
      ]
    }
  },
  {
    name: "DLH Modern AI",
    tagline: "Modern AI curriculum covering deep learning, computer vision, and NLP with TensorFlow",
    domain: ["ai-ml"],
    techStack: {
      primary: ["Python 3", "TensorFlow", "Keras", "OpenCV"],
      full: ["Python 3", "TensorFlow", "Keras", "OpenCV", "NLP", "CNN", "RNN", "Transfer Learning", "PyTorch"]
    },
    status: "educational",
    year: "2025-2026",
    features: [
      "98 structured files covering modern AI topics",
      "Deep learning architectures (CNN, RNN, Transformers)",
      "Computer vision with OpenCV and modern networks",
      "Natural language processing fundamentals",
      "Transfer learning with pre-trained models",
      "Hands-on projects with real datasets",
      "Production deployment considerations"
    ],
    deepDive: {
      purpose: "DLH Modern AI bridges the gap between classical machine learning and cutting-edge deep learning. It focuses on practical applications of neural networks for vision and language tasks, using industry-standard frameworks to prepare for real-world AI development.",
      architecture: "The curriculum progresses from basic neural network concepts to advanced architectures like CNNs for vision and RNNs for sequences. TensorFlow and Keras provide the implementation framework, while OpenCV handles image processing. Each module includes theoretical background, implementation tutorials, and complete projects.",
      highlights: "The hands-on approach emphasizes building and training models rather than just studying theory. Transfer learning modules show how to leverage pre-trained models for custom tasks with limited data. The computer vision section covers everything from basic image processing to state-of-the-art object detection architectures.",
      lessons: "Modern AI development relies heavily on transfer learning and fine-tuning rather than training from scratch. Understanding the underlying mathematics remains important even when using high-level frameworks. The key to practical AI is knowing when to use which architecture and how to debug training issues.",
      codeSnippets: [
        {
          language: "python",
          title: "Transfer Learning with Pre-trained CNN",
          code: `from tensorflow.keras.applications import VGG16
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D

# Load pre-trained VGG16 without top layers
base_model = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

# Freeze base model layers
for layer in base_model.layers:
    layer.trainable = False

# Add custom classification head
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(256, activation='relu')(x)
predictions = Dense(10, activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=predictions)
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])`
        }
      ]
    }
  },
  {
    name: "Computer Vision Guide",
    tagline: "Comprehensive documentation covering CNN architectures, ResNet, DenseNet, and EfficientNet",
    domain: ["computer-vision"],
    techStack: {
      primary: ["Markdown", "CNN Architectures", "ResNet", "DenseNet"],
      full: ["Markdown", "CNN", "ResNet", "DenseNet", "EfficientNet", "Image Classification", "Architecture Design"]
    },
    status: "complete",
    year: "2025",
    features: [
      "In-depth CNN architecture explanations",
      "ResNet and residual connections deep dive",
      "DenseNet architecture and skip connections",
      "EfficientNet scaling strategies",
      "Comparison of architecture performance",
      "Implementation considerations and tips",
      "Visual diagrams of network structures"
    ],
    deepDive: {
      purpose: "Computer Vision Guide serves as a comprehensive reference for understanding modern convolutional neural network architectures. It explains not just how these networks are structured, but why certain design decisions were made and what trade-offs each architecture presents.",
      architecture: "Structured as markdown documentation with clear hierarchical organization, the guide progresses from basic CNN concepts to sophisticated modern architectures. Each architecture section includes theoretical background, architectural diagrams, mathematical formulations, and practical implementation notes.",
      highlights: "The guide emphasizes understanding the evolution of CNN architectures, showing how each innovation addressed limitations of previous designs. ResNet's skip connections solve vanishing gradients, DenseNet's dense connections improve feature reuse, and EfficientNet's compound scaling optimizes all dimensions simultaneously. Comparative analysis helps readers choose appropriate architectures for different tasks.",
      lessons: "Modern computer vision success comes from clever architectural innovations rather than just adding more layers. Skip connections and dense connections aren't just performance tricks, they fundamentally change how information flows through networks. Understanding these architectures' design principles enables better model selection and custom architecture design.",
      codeSnippets: []
    }
  },
  {
    name: "Momentum Full-Stack",
    tagline: "Production-ready monorepo with React frontend, Go backend, PostgreSQL, and Redis caching",
    domain: ["web", "mobile"],
    techStack: {
      primary: ["Turborepo", "React", "Go 1.22+", "PostgreSQL"],
      full: ["Turborepo", "React", "Go 1.22+", "PostgreSQL", "Redis", "Docker", "REST API", "TypeScript"]
    },
    status: "in-progress",
    year: "2026",
    features: [
      "Turborepo monorepo for efficient multi-package development",
      "React frontend with TypeScript",
      "Go backend with high-performance REST API",
      "PostgreSQL for reliable data persistence",
      "Redis caching layer for optimized queries",
      "Docker containerization for consistent deployment",
      "Shared types between frontend and backend"
    ],
    deepDive: {
      purpose: "Momentum Full-Stack scales the habit tracking concept to a production-ready web application with robust backend infrastructure. It demonstrates enterprise-grade architecture with proper separation of concerns, caching strategies, and containerized deployment.",
      architecture: "Turborepo manages the monorepo structure with shared packages for types and utilities. The React frontend communicates with the Go backend through a RESTful API. PostgreSQL handles persistent storage while Redis caches frequently accessed data. Docker containers ensure consistent environments from development to production.",
      highlights: "Go's performance and type safety make it ideal for API servers handling concurrent requests. Redis dramatically reduces database load by caching user data and aggregations. The monorepo structure with shared TypeScript types ensures frontend and backend stay synchronized without code duplication.",
      lessons: "Monorepos require careful dependency management but pay dividends in code sharing and coordinated changes. Go's simplicity and performance make it excellent for backend services, though error handling differs significantly from JavaScript. Proper caching strategies with Redis require understanding cache invalidation patterns to avoid stale data.",
      codeSnippets: [
        {
          language: "go",
          title: "Redis Caching Middleware",
          code: `func CacheMiddleware(cache *redis.Client, ttl time.Duration) gin.HandlerFunc {
    return func(c *gin.Context) {
        key := "cache:" + c.Request.URL.Path + ":" + c.GetString("userID")

        // Try to get from cache
        cached, err := cache.Get(c.Request.Context(), key).Result()
        if err == nil {
            c.Data(200, "application/json", []byte(cached))
            c.Abort()
            return
        }

        // Capture response
        w := &responseWriter{body: bytes.NewBufferString(""), ResponseWriter: c.Writer}
        c.Writer = w
        c.Next()

        // Cache the response
        if c.Writer.Status() == 200 {
            cache.Set(c.Request.Context(), key, w.body.String(), ttl)
        }
    }
}`
        }
      ]
    }
  },
  {
    name: "Momentum Frontend Prototype",
    tagline: "Interactive iOS prototype built with Expo, TypeScript, and Capacitor for rapid iteration",
    domain: ["mobile"],
    techStack: {
      primary: ["Expo", "TypeScript", "Capacitor", "React Native"],
      full: ["Expo", "TypeScript", "Capacitor", "React Native", "iOS", "Interactive Prototype"]
    },
    status: "prototype",
    year: "2025",
    features: [
      "Rapid prototyping with Expo development tools",
      "TypeScript for type-safe component development",
      "Capacitor integration for native iOS features",
      "Interactive UI demonstrating core flows",
      "Hot reloading for instant feedback",
      "Component-based architecture",
      "iOS-specific interaction patterns"
    ],
    deepDive: {
      purpose: "This prototype validates Momentum's core user experience before full development. Expo enables rapid iteration on UI and interactions, while Capacitor provides access to native iOS features needed for the final product. It serves as a proof of concept and design validation tool.",
      architecture: "Built with Expo for its excellent developer experience and hot reloading. TypeScript ensures component props and state are properly typed. Capacitor plugins provide iOS-specific functionality like HealthKit access. The component structure mirrors the planned production architecture for easy migration.",
      highlights: "Expo's development tools dramatically accelerate the prototype-to-production cycle. TypeScript catches interface mismatches early, preventing runtime errors. The prototype successfully validated gamification mechanics and user flows before investing in full backend implementation.",
      lessons: "Prototyping with production-ready tools reduces throwaway work when moving to full implementation. User testing with interactive prototypes reveals usability issues that static mockups miss. Expo's constraints actually improve code quality by encouraging proper component architecture.",
      codeSnippets: []
    }
  },
  {
    name: "Image Agent Momentum",
    tagline: "iPhone-first prototype combining React Native with AI-powered UI generation",
    domain: ["mobile", "ai-ml"],
    techStack: {
      primary: ["Expo", "React Native", "TypeScript"],
      full: ["Expo", "React Native", "TypeScript", "AI Integration", "iPhone", "Prototype"]
    },
    status: "prototype",
    year: "2026",
    features: [
      "React Native for cross-platform mobile development",
      "Expo managed workflow for simplified development",
      "TypeScript for robust type checking",
      "iPhone-first design and testing",
      "Integration points for AI-generated assets",
      "Responsive layouts adapting to screen sizes",
      "Native feel with React Native components"
    ],
    deepDive: {
      purpose: "Image Agent Momentum explores integrating AI-generated UI assets into a mobile habit tracking experience. This prototype tests whether dynamic, AI-created visual elements can enhance user engagement and personalization in a mobile context.",
      architecture: "Built on Expo and React Native for rapid mobile prototyping. The app integrates with the Image Agent backend to request and display AI-generated motivational imagery. TypeScript ensures type safety across components and API interactions. The architecture supports both static and dynamically generated assets.",
      highlights: "The prototype demonstrates seamless integration of AI-generated content into a mobile UI without performance degradation. Pre-fetching and caching strategies ensure generated images load instantly. The iPhone-first approach ensures the experience works perfectly on the most common target device.",
      lessons: "AI-generated content in mobile apps requires careful loading and caching strategies to maintain responsiveness. Users appreciate personalized visual elements but expect instant loading, necessitating background pre-generation. React Native's performance is excellent when animations and images are properly optimized.",
      codeSnippets: []
    }
  }
];
