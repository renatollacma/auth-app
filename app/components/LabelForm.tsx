interface LabelFormProps {
    text: string;
    nameFor?: string;
}

export default function LabelForm({ text, nameFor }: LabelFormProps) {
    return (
        <label htmlFor={nameFor} className="text-sm font-medium text-gray-900">{text}</label>
    )
}
