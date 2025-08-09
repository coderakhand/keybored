import NavBar from "@/components/NavBar";

export default function RooLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`flex flex-col items-center h-full w-full overflow-hidden`}
    >
      <div>
        <NavBar />
      </div>
      {children}
    </div>
  );
}
