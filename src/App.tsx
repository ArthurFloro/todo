import Text from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text as="text" variant="body-sm-bold" className="text-pink-base"> Olá mundo </Text>
      <Text as="text" variant="body-sm-bold" className="text-green-base"> Olá mundo </Text>
      <Text as="text" variant="body-sm-bold" className="text-gray-400"> Olá mundo </Text>

    </div>
  )
}