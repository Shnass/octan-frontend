import Banner from "@/components/blocks/Banner";
import Spotify from "@/components/embdings/Spotify";
import InnerPageContainer from "@/components/layout/InnerPageContainer";
import GenreBlock from "@/components/shop/GenreBlock";

export default async function Home() {
  return (
    <>
      <Banner />
      <InnerPageContainer>
        <GenreBlock title="House" slug="house" />
        <GenreBlock title="Techno" slug="techno" />
        <GenreBlock title="Breakbeat" slug="breakbeat" />
        <GenreBlock title="Trance" slug="trance" />
        <GenreBlock title="Downtempo" slug="downtempo" />
        <Spotify />
      </InnerPageContainer>
    </>
  );
}
