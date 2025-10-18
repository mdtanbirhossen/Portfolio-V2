import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { GraduationCap, Award } from "lucide-react";
import Title from "../Common/Title";

export default function Education() {
    return (
        <section className="bg-secondary-light dark:bg-secondary-dark mt-10 p-5 rounded-2xl">
            <Title
                title="Education & Qualifications"
                subtitle="A glimpse into my academic background, certifications, and technical learning journey."
            />
            <Tabs defaultValue="education" className="w-full">
                <TabsList className="bg-primary-light dark:bg-primary-dark">
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>

                {/* Education Tab */}
                <TabsContent className="w-full" value="education">
                    <Card className="w-full bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light">
                        <CardHeader>
                            <CardTitle className="flex gap-1 items-center">
                                <GraduationCap /> Academic Background
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Diploma in Computer Science & Technology</strong> — 
                                    <span className="italic"> Shyamoli Ideal Polytechnic Institute</span>  
                                    <br />
                                    <span className="text-sm opacity-80">2021 – Present</span>
                                </li>
                                <li>
                                    <strong>Secondary School Certificate (SSC)</strong> — 
                                    <span className="italic"> Dhaka Board</span>  
                                    <br />
                                    <span className="text-sm opacity-80">Graduated: 2020</span>
                                </li>
                                <li>
                                    <strong>Major Focus Areas:</strong> Web Development, Database Management, Software Engineering, and Computer Networks.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Certifications Tab */}
                <TabsContent className="w-full" value="certifications">
                    <Card className="w-full bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light">
                        <CardHeader>
                            <CardTitle className="flex gap-1 items-center">
                                <Award /> Certifications & Achievements
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Completed <strong>Complete Web Development Course</strong> — Programming Hero  
                                    <br />
                                    <span className="text-sm opacity-80">Learned React.js, Next.js, Node.js, Express, MongoDB, Firebase, and more.</span>
                                </li>
                                <li>
                                    <strong>Scout Co-Leader</strong> — Recognized for leadership and teamwork skills.  
                                </li>
                                <li>
                                    <strong>Continuous Learning:</strong> Exploring AI Integrations, Nest.js, PostgreSQL, and Cloud Services (AWS, Cloudflare).
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
}
