interface InputProps {
 type: string
 name: string
 placeholder: string
}

const Input = ({ type, name, placeholder }: InputProps) => (
 <div>
  <input
   type={type}
   name={name}
   placeholder={placeholder}
   className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus-outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
  />
 </div>
)

export default Input