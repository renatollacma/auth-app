interface InputProps {
    type: string;
    placeholder: string;
    name?: string;
}

export default function Input({ type, placeholder, name }: InputProps) {
    return (
        <input type={type} placeholder={placeholder} className="w-full px-3 py-2 text-gray-800 text-sm border-2 border-gray-200 rounded-lg placeholder:text-gray-400 focus:border-blue-600 hover:border-blue-600 outline-none" />
    )
}
