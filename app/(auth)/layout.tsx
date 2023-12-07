import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode} )
{
    return (
        <div>
            <h1>aqui é a pagina layout</h1>
            {children}
        </div>
    )
}