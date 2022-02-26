import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import tw from "twin.macro";

const CardContainer = tw.div`w-full flex items-center justify-between`
const FormWrap = tw.div`flex flex-wrap mt-10`
const Input1wrap = tw.div`w-full lg:w-6/12 pr-4 mb-10 font-light`
const Input2wrap = tw.div`w-full lg:w-6/12 pl-4 mb-10 font-light`
const TextAreaWrap = tw(FormWrap)`font-light`

const InputDivWrap = tw.div`w-full mb-10 font-light`
const Input3Wrap = tw(InputDivWrap)`lg:w-11/12`
const Input4Wrap = tw(InputDivWrap)`pr-4 lg:w-4/12`
const Input5Wrap = tw(InputDivWrap)`px-4 lg:w-4/12`
const Input6Wrap = tw(InputDivWrap)`pl-4 lg:w-4/12`

export default function SettingsForm() {
    return (
        <Card>
            <CardHeader color="purple" contentPosition="none">
                <CardContainer>
                    <h2 className="text-white text-2xl">My Account</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        Settings
                    </Button>
                </CardContainer>
            </CardHeader>
            <CardBody>
                <form>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        User Information
                    </h6>
                    <FormWrap>
                        <Input1wrap>
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Username"
                            />
                        </Input1wrap>
                        <Input2wrap>
                            <Input
                                type="email"
                                color="purple"
                                placeholder="Email Address"
                            />
                        </Input2wrap>
                        <Input1wrap>
                            <Input
                                type="text"
                                color="purple"
                                placeholder="First Name"
                            />
                        </Input1wrap>
                        <Input2wrap>
                            <Input
                                type="email"
                                color="purple"
                                placeholder="Last Name"
                            />
                        </Input2wrap>
                    </FormWrap>

                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        Contact Information
                    </h6>
                    <FormWrap>
                        <Input3Wrap>
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Address"
                            />
                        </Input3Wrap>
                        <Input4Wrap>
                            <Input
                                type="text"
                                color="purple"
                                placeholder="City"
                            />
                        </Input4Wrap>
                        <Input5Wrap>
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Country"
                            />
                        </Input5Wrap>
                        <Input6Wrap>
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Postal Code"
                            />
                        </Input6Wrap>
                    </FormWrap>

                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        About Me
                    </h6>
                    <TextAreaWrap>
                        <Textarea color="purple" placeholder="About Me" />
                    </TextAreaWrap>
                </form>
            </CardBody>
        </Card>
    );
}
