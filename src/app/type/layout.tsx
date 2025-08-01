import NavBar from "@/components/NavBar";

export default function RooLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col h-full w-full overflow-hidden`}>
      <div className="mb-10">
        <NavBar />
      </div>
      {children}
    </div>
  );
}
