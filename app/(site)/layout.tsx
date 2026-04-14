import InnerPageContainer from "@/components/layout/InnerPageContainer";
import "../globals.css";

export default function IndexPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <InnerPageContainer>
        {children}
    </InnerPageContainer>
  );
}
