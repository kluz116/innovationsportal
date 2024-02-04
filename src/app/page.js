import InnovationForm from "./components/InnovationForm";
import Image from "next/image";
import Carousel from "./components/carousel";
export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24 ">
      <div className="mb-5 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left text-2xl gap-1">
        <div class="w-full m-4 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <p className="text-gray-600">
            Welcome to business idea portal, from your creative innovative
            ideas.
          </p>
          <p className="text-lime-600">
            It will help the business to create new products, services,
            processes, or business models that add value to our customers
          </p>
          <br />

          <p className="text-gray-600">
            Your ideas will also help the business to :
          </p>
          <ul class="list-disc list-inside m-2 text-lime-600">
            <li>Expand the market reach</li>
            <li>Increase the revenue streams</li>
            <li>Reduce the costs</li>
            <li>Stay relevant in an ever-changing world</li>
          </ul>
        </div>

        <div>
          <InnovationForm />
        </div>
      </div>
    </main>
  );
}
