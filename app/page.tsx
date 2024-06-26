import { Container } from "../components/container";
import { BuildMomentum } from "../components/sections/build-momentum";
import { Clients } from "../components/sections/clients";
import { EnjoyIssueTracking } from "../components/sections/enjoy-issue-tracking";
import { HomepageHero } from "../components/sections/homepage-hero";
import { SetDirection } from "../components/sections/set-direction";
import { UnlikeAnyTool } from "../components/sections/unlike-any-tool";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Container className="my-16">
        <Clients />
      </Container>
      <div className="relative my-16">
        <UnlikeAnyTool />
      </div>

      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  );
}
