import InnovationForm from "./components/InnovationForm";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24 ">
      <div className="mb-5 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left text-2xl italic">
        <div>
          <p>
            Welcome to business idea portal, from your creative innovative
            ideas.
          </p>
          <p className="text-blue-800">
            It will help the business to create new products, services,
            processes, or business models that add value to our customers
          </p>
          <br />

          <p>Your ideas will also help the business to :</p>
          <ul class="list-disc list-inside m-2 text-blue-800">
            <li>Expand the market reach</li>
            <li>Increase the revenue streams</li>
            <li>Reduce the costs</li>
            <li>Stay relevant in an ever-changing world</li>
          </ul>
        </div>
        <div>
          <p className="text-black italic">
            You got an innovative idea, please share with us below...
          </p>
          <br />
          <InnovationForm />
        </div>
      </div>
    </main>
  );
}
