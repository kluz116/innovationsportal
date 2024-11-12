import InnovationForm from "./components/InnovationForm";
import Image from "next/image";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <div className="mb-5 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left text-2xl gap-4">
        
        <div className="w-full m-4 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="text-gray-600">
            Welcome to the business idea portal, where you can share your creative and innovative ideas.
          </p>
          <p className="text-lime-600 mt-2">
            Your ideas can help the business develop new products, services, processes, or business models that add value to our customers.
          </p>
          <br />

          <p className="text-gray-600">Your ideas can also help the business to:</p>
          <ul className="list-disc list-inside m-2 text-lime-600">
            <li>Expand market reach</li>
            <li>Increase revenue streams</li>
            <li>Reduce costs</li>
            <li>Stay relevant in a constantly changing world</li>
          </ul>
        </div>

        <div>
          <InnovationForm />
        </div>
      </div>
    </main>
  );
}
