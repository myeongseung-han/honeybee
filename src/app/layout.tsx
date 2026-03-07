export const metadata = {
  title: "모래재꿀벌",
  description: "자연 그대로의 순수한 꿀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
