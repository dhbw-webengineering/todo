export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div style={{position: "fixed", display: "flex", justifyContent: "space-around", alignItems: "center", left: "300px", height: "50px", width: "calc(100% - 300px)", backgroundColor: "#222222"}}>
            <p>Filter 1</p>
            <p>Filter 2</p>
            <p>Filter 3</p>
            <p>Filter 4</p>
        </div>
        <div style={{paddingTop: "50px"}}>
            {children}
        </div>
    </>
  );
}