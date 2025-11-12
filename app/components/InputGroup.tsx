interface InputGroupProps {
    children: React.ReactNode;
}
export default function InputGroup({ children }: InputGroupProps) {
    return (
        <div className="w-full flex flex-col items-start gap-2">{children}</div>
    )
}
