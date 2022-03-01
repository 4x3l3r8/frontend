import StatusCard from 'components/adminComponents/StatusCard';
import TableCard from 'components/adminComponents/TableCard';
import { PrimaryButton } from 'components/misc/Buttons'
import tw from 'twin.macro'

const CardsGroup = tw.div`bg-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto`;
const CardsContainer = tw.div`container mx-auto max-w-full`
const CardsGrid = tw.div`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4`

const SecondGroup = tw.div`px-3 md:px-8 h-auto -mt-24`
const SecondConatainer = tw.div`container mx-auto max-w-full`
const SecondGrid = tw.div`grid grid-cols-1 px-4 mb-16`

const ButtonContainer = tw.div`relative w-full`

export default function Dashboard() {
    return (
        <>
            <CardsGroup>
                <CardsContainer>
                    <CardsGrid>
                        {/* <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        /> */}
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
                        {/* <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        /> */}
                        <ButtonContainer>
                            <PrimaryButton class="absolute top-0 right-0 h-16 w-16">New Post</PrimaryButton>
                        </ButtonContainer>
                    </CardsGrid>
                </CardsContainer>
            </CardsGroup>

            <SecondGroup>
                <SecondConatainer>
                    <SecondGrid>
                        <TableCard />
                    </SecondGrid>
                </SecondConatainer>
            </SecondGroup>
        </>
    );
}
