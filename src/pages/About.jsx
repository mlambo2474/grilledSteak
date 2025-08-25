import chef2 from "../assets/chef-grills.jpg";
import waiter from "../assets/headwaiter.jpg";
import manager from "../assets/themanager.jpg";
import chiefsomelier from "../assets/chiefsomelier.jpg";
import restaurant from "../assets/restaurantbuilding2.jpg";
import award1 from "../assets/award1.jpeg";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.jpeg";
import award4 from "../assets/award4.jpg";

const About = () => (
  <div className="pt-16 container mx-auto max-w-10xl text-secondary">
    <div className="flex flex-col items-center justify-center text-center">
      <img src={restaurant} alt="" className=" w-96 md:w-full mx-6" />
      <h1 className="text-3xl font-bold mb-6 text-primary my-4">Our Story</h1>

      <p className="px-28">
        Established in 2008, Grilled Steakhouse was born from a vision to
        redefine the art of steak dining. As a family-owned establishment, we
        have spent over a decade perfecting the craft of grilling, transforming
        a cherished tradition into an elevated culinary experience. Our
        commitment begins with the finest ingredients. We proudly partner with
        renowned local farms to ensure exceptional freshness, while also
        sourcing premium, hand-selected cuts from some of the world’s most
        respected international suppliers. Each steak is meticulously prepared,
        honoring the unique flavor and texture of every cut. At Grilled
        Steakhouse, dining is more than a meal — it is an experience. From the
        sophisticated ambiance to our carefully curated wine pairings, every
        detail is designed to celebrate the timeless elegance of a truly great
        steakhouse. For those who appreciate excellence, Grilled Steakhouse is
        where family heritage meets world-class dining.
      </p>
    </div>
    {/* STAFF SECTION */}
    <h2 className="text-3xl font-bold mb-4 text-primary text-center px-4 py-12 md:px-28">
      Meet the Team
    </h2>

    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-0">
      <img
        src={chef2}
        alt="manager image"
        className="w-auto h-52 md:w-2/4 md:h-96 rounded-lg object-cover shadow-lg"
      />
      <div className="md:flex-1 mt-6 md:mt-0">
        <h6 className="text-primary-dark text-2xl font-bold py-2 text-center md:text-left">
          Meet our Chef
        </h6>
        <p className="text-secondary text-center md:text-left">
          At the heart of Grilled Steakhouse is our executive chef,{" "}
          <strong>Chef Alexander Mokoena</strong>, whose culinary expertise
          transforms the finest cuts of beef into unforgettable dining
          experiences. With over 20 years of experience in acclaimed kitchens
          across Europe and South Africa, Chef Alexander brings a mastery of
          classic grilling techniques, infused with modern innovation. His
          philosophy is simple yet profound: respect the ingredient, honor the
          craft. Every steak is carefully aged, seasoned, and prepared to
          perfection, ensuring that each bite tells a story of dedication and
          artistry. Under his guidance, our kitchen operates with uncompromising
          standards, delivering dishes that are as visually stunning as they are
          flavorful — a true reflection of what a high-end steakhouse should be.
        </p>
      </div>
    </div>

    {/* TEAM LEADERS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
      <div className="flex flex-col w-90 shadow-md align-center items-center rounded-lg p-4 text-center mx-2">
        <img
          src={manager}
          alt="manager image"
          className="w-96 md:w-full h-50 rounded-lg"
        />
        <h6 className="text-primary-dark text-lg font-bold">
          Restaurant Manager
        </h6>
        <p>
          Behind the seamless experience at Grilled Steakhouse is our dedicated
          manager, Thandiwe Nkosi. With over a decade in hospitality management,
          Thandiwe ensures that every guest enjoys exceptional service, from the
          moment they step through our doors to the last bite of their meal. Her
          passion for excellence and attention to detail keep our restaurant
          running with the warmth, elegance, and precision our guests have come
          to expect.
        </p>
      </div>

      <div className="flex flex-col w-90 shadow-md align-center items-center rounded-lg p-4 text-center mx-2">
        <img
          src={waiter}
          alt="manager image"
          className="w-96 md:w-full h-50 rounded-lg"
        />
        <h6 className="text-primary-dark text-lg font-bold">Head Waiter</h6>
        <p>
          Leading our front-of-house team with grace and professionalism is
          Samuel Jackson, our esteemed head waiter. With years of fine-dining
          experience, Samuel ensures that every table receives impeccable
          service, anticipating guests’ needs and creating a welcoming, refined
          atmosphere. His dedication to hospitality reflects our commitment to
          making every visit to Grilled Steakhouse truly memorable.
        </p>
      </div>

      <div className="flex flex-col w-90 shadow-md align-center items-center rounded-lg p-4 text-center mx-2">
        <img
          src={chiefsomelier}
          alt="manager image"
          className="w-96 md:w-full h-50 rounded-lg"
        />
        <h6 className="text-primary-dark text-lg font-bold">Chief Somelier</h6>
        <p>
          Curating the perfect wine experience at Grilled Steakhouse is our
          chief sommelier, Jack Brown. With an expert palate and years of
          experience in prestigious cellars, Lerato hand-selects each bottle on
          our extensive wine list, ensuring flawless pairings for every cut of
          steak and dish on our menu. Her passion for fine wines elevates the
          dining experience, turning every meal into a harmonious celebration of
          flavor.
        </p>
      </div>
    </div>
    <h2 className="text-3xl font-bold mb-4 text-primary text-center py-12 px-32">
      Our Achievemnts
    </h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
      <img src={award2} alt="" className="rounded-full w-40 h-30" />
      <img src={award3} alt="" className="rounded-full w-40 h-30" />
      <img src={award4} alt="" className="rounded-full w-40 h-36" />
      <img src={award1} alt="" className="rounded-full w-40 h-30" />
    </div>

    <h2 className="text-3xl font-bold mb-4 text-primary text-center py-12 px-28">
      Find Us here
    </h2>
    <div className="w-30 mx-2 md:mx-0 md:w-full overflow-hidden h-64 bg-gray-200 mb-4 flex items-center justify-center ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.853082661412!2d19.246929825032797!3d-34.416280120054736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dce0bb021c8bbc9%3A0xe48b43ee346c8f17!2sProtea%20House!5e0!3m2!1sen!2sza!4v1753535904337!5m2!1sen!2sza"
        className="h-64 w-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

export default About;
