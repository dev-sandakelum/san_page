import React from "react";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";

export function Path_type_0(topic: any,) {
    return (
        <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={'/' + topic['topic']}>
                {topic['topic']}
            </BreadcrumbLink>
        </BreadcrumbItem>
    )
}
export function Path_separator() {
    return (
        <BreadcrumbSeparator className="hidden md:block" />
    )
}
export function Path_type_1(topic: any) {
    return (
        <BreadcrumbItem>
            <BreadcrumbPage>{topic['topic']}</BreadcrumbPage>
        </BreadcrumbItem>
    )
}


export function Path_adder({ path }: { path: any }) {
    const path_: any[] = path.split("/");
    return (
        <>
            {path_.map((i, index) => (
                <React.Fragment key={index}>
                    {index < path_.length - 1 ? (
                        <>
                            <Path_type_0 topic={i} />
                            <Path_separator />
                        </>
                    ) : (<Path_type_1 topic={i} />)}
                </React.Fragment>
            ))}
        </>
    )
}