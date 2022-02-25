import StatusCard from 'components/adminComponents/StatusCard';
import SettingsForm from 'components/adminComponents/SettingsForm';
import ProfileCard from 'components/adminComponents/ProfileCard';
import tw from "twin.macro";

const CardsGroup = tw.div`bg-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto`;
const CardsContainer = tw.div`container mx-auto max-w-full`
const CardsGrid = tw.div`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4`

const SecondGroup = tw.div`px-3 md:px-8 h-auto -mt-24`
const SecondConatainer = tw.div`container mx-auto max-w-full`
const SecondGrid = tw.div`grid grid-cols-1 xl:grid-cols-6`

const SettingsHolder = tw.div`xl:col-start-1 xl:col-end-5 px-4 mb-16`
const ProfileHolder = tw.div`xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14`


export default function Dashboard() {
    return (
        <>
            <CardsGroup>
                <CardsContainer>
                    <CardsGrid>
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
                    </CardsGrid>
                </CardsContainer>
            </CardsGroup>

            <SecondGroup>
                <SecondConatainer>
                    <SecondGrid>
                        <SettingsHolder>
                            <SettingsForm />
                        </SettingsHolder>
                        <ProfileHolder>
                            <ProfileCard />
                        </ProfileHolder>
                    </SecondGrid>
                </SecondConatainer>
            </SecondGroup>
        </>
    );
}
