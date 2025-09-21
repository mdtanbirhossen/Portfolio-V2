import { Code, PanelsTopLeft } from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function ExperienceTabs() {
    return (
        <div className="flex w-full p-2 flex-col gap-6">
            <Tabs defaultValue="responsibilities" className="w-full">
                <TabsList className="bg-slate-200 dark:bg-secondary-dark">
                    <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                    <TabsTrigger value="projects">Key Projects</TabsTrigger>
                </TabsList>
                <TabsContent className="w-full" value="responsibilities">
                    <Card className="w-full ">
                        <CardHeader>
                            <CardTitle className="flex gap-1 items-center"><Code /> Key Responsibilities</CardTitle>
                        </CardHeader>
                        <CardContent className="">
                            <ul className="list-disc pl-5">
                                <li>Developed E-commerce Projects API & payment services</li>
                                <li>Created an AI platform where user can can use an LLM and buy other LLM as subscription: echogpt.live</li>
                                <li>Created an AI Service to build SOP and Resume</li>
                                <li>Contributed to build E-commerce Dashboard</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent className="w-full" value="projects">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex gap-1 items-center"><PanelsTopLeft /> Key Projects</CardTitle>
                        </CardHeader>
                        <CardContent className="">
                            <ul className="list-disc pl-5">
                                <li>Developing both client frontend nd their interactive dashboard</li>
                                <li>Contributing to both frontend and backend</li>
                                <li>Payment Integrations with [Stripe, SSLcommercez, Paypal, Bkash]</li>
                                <li>Tech stack: Nest.js, TypeORM, Sequelize, AWS(S3), Next.js, Redux, AI(API Integrations), MySQL, PostgreSQL, MongoDB</li>
                            </ul>
                        </CardContent>

                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
