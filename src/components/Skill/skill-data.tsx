// Helper function to get all skills as a flat array
export const getAllSkills = () => {
  return Object.values(skillsData).flat();
};

// Common type definitions
export type Skill = {
  name: string;
  icon: string;
};

export type SkillsData = {
  [key: string]: Skill[];
};

// Skills data organized by category
export const skillsData: SkillsData = {
  frontend: [
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "React.js", icon: "/icons/react.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { name: "RTK Query", icon: "/icons/redux.svg" },
    { name: "GSAP", icon: "/icons/gsap.svg" },
    { name: "Framer Motion", icon: "/icons/framermotion.svg" },
    { name: "Tanstack", icon: "/icons/reactquery.svg" },
    { name: "Sass", icon: "/icons/sass.svg" },
    { name: "Axios", icon: "/icons/axios.svg" },
    { name: "Zod", icon: "/icons/zod.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Redis", icon: "/icons/redis.svg" },
    { name: "RabbitMQ", icon: "/icons/rabbitmq.svg" },
    { name: "GraphQL", icon: "/icons/graphql.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "Socket.io", icon: "/icons/socket.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "Mongoose", icon: "/icons/mongoose.svg" },
    { name: "TypeORM", icon: "/icons/typeorm.svg" },
    { name: "Sequelize", icon: "/icons/sequelize.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
  ],
  devOps: [
    { name: "AWS (EC2, S3)", icon: "/icons/aws.svg" },
    { name: "Azure", icon: "/icons/azure.svg" },
    { name: "Google Cloud", icon: "/icons/googlecloud.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "GitHub Actions", icon: "/icons/githubactions.svg" },
    { name: "CI/CD", icon: "/icons/ci-cd.svg" },
  ],
  tools: [
    { name: "Postman", icon: "/icons/postman.svg" },
    { name: "Jira", icon: "/icons/jira.svg" },
    { name: "Claude", icon: "/icons/claude.svg" },
    { name: "OpenAI", icon: "/icons/openai.svg" },
    { name: "Swagger", icon: "/icons/swagger.svg" },
    { name: "Dbeaver", icon: "/icons/dbeaver.png" },
  ],
};
