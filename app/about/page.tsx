import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <>
      <section>
        <h1 className={title()}>
          <p>About Me</p>
        </h1>

        <div className="w-full mb-4">
          <p className="text-lg leading-relaxed mt-5">
            Hello! I&apos;m Kevin Elyan, a passionate junior JavaScript
            developer with a keen interest in creating dynamic and user-friendly
            web applications. My journey into the world of programming began
            with a fascination for how websites work, leading me to pursue a
            career in web development.
          </p>
          <p className="text-lg leading-relaxed mt-5">
            With a solid foundation in HTML, CSS, and JavaScript, I enjoy
            building responsive and interactive web pages. I have hands-on
            experience working with modern JavaScript frameworks like React.js
            and am continuously learning new technologies to enhance my skills.
            My goal is to write clean, efficient, and maintainable code that
            provides a seamless user experience.
          </p>
          <p className="text-lg leading-relaxed mt-5">
            I specialize in React and Next.js, leveraging their powerful
            features to build fast and scalable web applications. My projects
            often involve state management, server-side rendering, and API
            integrations, ensuring a smooth and performant user experience.
          </p>

          <p className="text-lg leading-relaxed mt-5">
            Let&apos;s build something amazing together.
          </p>
        </div>
      </section>
    </>
  );
}
