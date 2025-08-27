import { IoIosArrowForward } from "react-icons/io";
import image from "../assets/grilledsteak.jpg"

const Menu = () => (
  <div className="pt-12 container mx-auto w-full text-secondary">
    <section
      className="h-[100vh] bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: `url(${image})`}}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-5xl font-bold text-white  font-cursive mb-4">
          From Grill to Plate Simply Irresistible!
        </h1>
        <p className="text-lg text-white mb-6 font-bold">
          "Steak Your Claim and a Cut Above the Rest!"{" "}
        </p>
        <div className="space-x-4">
          <a
            href="/order"
            className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition"
          >
            Order Online
          </a>
          <a
            href="/reserve"
            className="bg-white text-primary px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Reserve Table
          </a>
        </div>
      </div>
    </section>
    <div className="text-center  border-primary mt-8 p-4 border-x-8">
      <h1 className="text-2xl md:text-5xl font-bold mb-6 text-primary">
        Savor the Sizzle, Taste the Art of Meat
      </h1>
      <p className="text-lg md:px-32">
        "Discover Our daily Masterpieces of Premium Cuts and Bold Flavors, Where
        steak cravings are met with mouthwatering satisfaction of juicy Steaks
        and Hearty Dishes to Power Your Day. Let your taste buds dance with joy,
        one steak at a time as you Feast on Our Signature Steaks and Robust
        Entrees"
      </p>
    </div>

    <h2 className="text-2xl font-bold  text-center text-primary-light py-12">
      Our Menu
    </h2>

    <div className="mb-6 text-center  ">
      <h1 className="text-primary text-center text-2xl border-b mx-auto w-1/2 border-primary pb-4">
        Noonday Feast
      </h1>
      <p className="px-4 md:px-64 py-8">
        Craving a midday escape that satisfies both body and soul? Our lunch
        menu is a celebration of bold flavors and masterful craftsmanship,
        featuring the finest cuts of meat grilled to succulent perfection. From
        tender ribeyes to hearty signature dishes, each plate is designed to
        elevate your lunch hour into a moment of pure indulgence. Download our
        lunch menu now and discover the art of meat, crafted just for you.
      </p>
      <button className="p-2 text-md mx-auto text-white bg-primary font-bold rounded-lg mb-12 flex items-center justify-center">
        Noonday Feast
        <IoIosArrowForward />
      </button>
    </div>

    <div className="mb-6 text-center  ">
      <h1 className="text-primary text-center text-2xl border-b mx-auto w-1/2 border-primary pb-4">
        Meridian Cuts
      </h1>
      <p className="px-4 md:px-64 py-8">
        Elevate your midday meal with our Meridian Cuts, where premium steaks
        take center stage. Highlighting tender ribeyes and precisely prepared
        cuts, this menu pairs bold flavors with robust sides to redefine
        steakhouse dining. Ideal for those seeking a sophisticated yet
        satisfying lunch, Meridian Cuts captures the peak of the day with
        unparalleled quality and taste.
      </p>
      <button className="p-2 text-md mx-auto text-white bg-primary font-bold rounded-lg mb-12 flex items-center justify-center">
        Meridian Cuts
        <IoIosArrowForward />
      </button>
    </div>

    <div className="mb-6 text-center  ">
      <h1 className="text-primary text-center text-2xl border-b mx-auto w-1/2 border-primary pb-4">
        Twilight Table
      </h1>
      <p className="px-4 md:px-64 py-8">
        As the sun sets, let your senses feast on an unforgettable dining
        experience. Our supper menu showcases the pinnacle of steakhouse
        excellence, with prime cuts of beef, pork and lamb, expertly seared to
        lock in every ounce of flavor. Paired with robust sides and innovative
        dishes, this is more than a meal—it's a journey into the heart of
        carnivorous delight. Download our supper menu and prepare to savor the
        evening in style.
      </p>
      <button className="p-2 text-md mx-auto text-white bg-primary font-bold rounded-lg mb-12 flex items-center justify-center">
       Twilight table
        <IoIosArrowForward />
      </button>
    </div>
    <div className="mb-6 text-center  ">
      <h1 className="text-primary text-center text-2xl border-b mx-auto w-1/2 border-primary pb-4">
        Drinks and Wines
      </h1>
      <p className="px-4 md:px-64 py-8">
        No steak is complete without the perfect pour, and our drinks and wines
        menu delivers just that. From velvety reds handpicked to complement the
        rich, smoky notes of our signature meats to craft cocktails that spark
        the palate, every sip is designed to elevate your dining experience.
        Explore our curated selection and find the ideal pairing for your meal.
        Download the drinks and wines menu to toast to unforgettable moments.
      </p>
      <button className="p-2 text-md mx-auto text-white bg-primary font-bold rounded-lg mb-12 flex items-center justify-center">
        Drinks and Wines
        <IoIosArrowForward />
      </button>
    </div>
  </div>
);

export default Menu;
