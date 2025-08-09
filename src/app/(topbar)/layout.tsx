import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full flex justify-center">
        <TopBar />
      </div>
      {children}
    </>
  );
}
