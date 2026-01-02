
const About = () => {
  return (
    <div className="space-y-4 pt-[100px]">
      <h1 className="text-3xl font-bold">About Our Bookstore</h1>

      <p>
        Welcome to <span className="font-semibold">BookNest</span>, your
        one-stop destination for all kinds of books! Our platform is designed to
        make managing and exploring your favorite books effortless and
        enjoyable.
      </p>

      <p>
        Whether you are an avid reader, a student, or a professional, our
        bookstore management system helps you:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Browse and search a wide range of books efficiently.</li>
        <li>Add books to your cart and manage your purchases.</li>
        <li>Track your favorite authors and genres.</li>
        <li>Keep your book collection organized with ease.</li>
      </ul>

      <p>
        Our mission is to bring the joy of reading closer to everyone, while
        providing a smooth and modern management experience for both customers
        and bookstore owners.
      </p>

      <p className="italic">
        Join us at BookNest and explore the world of books like never before!
      </p>
    </div>
  );
};

export default About;
