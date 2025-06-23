import { handleSubmission } from "@/app/actions";
import { prisma } from "@/app/utils/db";
import { SubmitButton } from "@/components/general/SubmitButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Prisma } from "@/lib/generated/prisma";

export default function CreateBlogRoute(){
    return (
        <div>
           <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>Create a new post to share with the world</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4" action={handleSubmission}>
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input name="title" required type="text" placeholder="Title" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Content</Label>
                        <Textarea name="content" required placeholder="content"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Image Url</Label>
                        <Input name="url" required type="url" placeholder="Image Url" />
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
            </Card> 
        </div>
    )
}