import StatusCard from 'components/adminComponents/StatusCard';
import ChartLine from 'components/adminComponents/ChartLine';
import styled from 'styled-components'; // eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro" ; //eslint-disable-line
import ChartBar from 'components/adminComponents/ChartBar';
import PageVisitsCard from 'components/adminComponents/PageVisitsCard';
import TrafficCard from 'components/adminComponents/TrafficCard';

const TopBlueNavBar = tw.div`bg-blue-500 px-3 md:px-8 h-40`;
const ChartsGroup = tw.div`px-3 md:px-8 -mt-24`
const ChartsContainer = tw.div`container mx-auto max-w-full`
const ChartsGrid = tw.div`grid grid-cols-1 xl:grid-cols-5`
const FirstChart = tw.div`xl:col-start-1 xl:col-end-4 px-4 mb-14`
const SecondChart = tw.div`xl:col-start-4 xl:col-end-6 px-4 mb-14`

const StatusCardGroup = tw.div`px-3 md:px-8`
const StatusCardContainer = tw.div`container mx-auto max-w-full`
const StatusCardGrid = tw.div`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4`

const OthersGroup = tw.div`px-3 md:px-8 h-auto`
const OthersContainer = tw.div`container mx-auto max-w-full`
const OthersGrid = tw.div`grid grid-cols-1 xl:grid-cols-5`
const VisitsCard = tw.div`xl:col-start-1 xl:col-end-4 px-4 mb-14`
const SocialsCard = tw.div`xl:col-start-4 xl:col-end-6 px-4 mb-14`

export default function Dashboard() {
    return (
        <>
            <TopBlueNavBar />

            <ChartsGroup>
                <ChartsContainer>
                    <ChartsGrid>
                        <FirstChart>
                            <ChartLine />
                        </FirstChart>
                        <SecondChart>
                            <ChartBar />
                        </SecondChart>
                    </ChartsGrid>
                </ChartsContainer>
            </ChartsGroup>

            <StatusCardGroup>
                <StatusCardContainer>
                    <StatusCardGrid>
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Sales"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </StatusCardGrid>
                </StatusCardContainer>
            </StatusCardGroup>

            <OthersGroup>
                <OthersContainer>
                    <OthersGrid>
                        <VisitsCard>
                            <PageVisitsCard />
                        </VisitsCard>
                        <SocialsCard>
                            <TrafficCard />
                        </SocialsCard>
                    </OthersGrid>
                </OthersContainer>
            </OthersGroup>
        </>
    );
}
