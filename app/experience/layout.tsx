export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-4 py-2 md:py-2">
      <div className="w-full max-w-full md:max-w-[1200px] p-4 md:p-8 mb-8">
        {children}
      </div>
    </section>
  );
}
