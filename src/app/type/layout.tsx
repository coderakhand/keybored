import NavBar from "@/components/NavBar";

export default function RooLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col h-full w-full overflow-hidden px-20`}>
      <div className="mb-10">
        <NavBar />
      </div>
      {children}
    </div>
  );
}
