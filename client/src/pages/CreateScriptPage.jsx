import React from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { Box, Container, Typography } from "@mui/material";
import Form from "../forms/compnents/Form";
import Input from "../forms/compnents/Input";

import useForm from "../forms/hooks/useForm";
import initialScriptForm from "../cards/helpers/initialScriptForm";
import createScriptSchema from "../cards/models/joiSchema";
import useCards from "../cards/hooks/useCards";
import SelectOption from "../forms/compnents/SelectOption";

const CreateScriptPage = () => {
  const { user } = useUser();
  const { handleCreateCard } = useCards();
  const { value, ...rest } = useForm(
    initialScriptForm,
    createScriptSchema,
    handleCreateCard
  );

  if (!user) return <Navigate replace to={ROUTES.SCRIPTS} />;
  const genreOptions = ["drama", "comedy", "horor", "action", "musical"];
  const lengthOptions = ["long", "short", "series"];
  return (
    <Container>
      <Box sx={{ mt: -2 }}>
        <Form
          onChange={rest.validateForm}
          onReset={rest.handleReset}
          onSubmit={rest.onSubmit}
          errors={value.errors}
          to={ROUTES.MY_SCRIPTS}
        >
          {" "}
          <Typography sx={{ ml: 1 }}> CREATE YOUR SCRIPT</Typography>
          <Input
            data={value.data}
            lable="title"
            name="title"
            placeholder={"e.g : Forrest Gump"}
            onChange={rest.handleChange}
            required={true}
            type="text"
          />
          <SelectOption
            data={value.data}
            options={genreOptions}
            name={"genre"}
            lable={"genre"}
            onChange={rest.handleChange}
          />
          <SelectOption
            data={value.data}
            options={lengthOptions}
            lable={"length"}
            name={"length"}
            onChange={rest.handleChange}
          />
          <Input
            data={value.data}
            lable="language"
            name="language"
            placeholder={"e.g : english/spanish"}
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            data={value.data}
            lable="Screen writer"
            name="screenwriter"
            placeholder={"e.g : Eric Roth"}
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            minRows={12}
            lable="Synopsis"
            required={true}
            data={value.data}
            placeholder={
              "e.g : In 1981, a man named Forrest Gump recounts his life story to strangers who happen to sit next to him at a bus stop. As a boy in 1956, Forrest has an IQ of 75 and is fitted with leg braces to correct a curved spine. He lives in Greenbow, Alabama, with his mother, who runs a boarding house and encourages him to live beyond his disabilities. Among their temporary tenants is a young Elvis Presley, who plays the guitar for Forrest and is inspired to incorporate the boy's jerky leg and hip movements into his performances. On his first day of school, Forrest meets a girl named Jenny Curran, and the two become best friends. Jenny is a victim of sexual abuse at the hands of her widowed, alcoholic father, but she is later removed from his custody. Bullied because of his leg braces and dimwittedness, Forrest flees from a group of children, but when his braces break off, he is revealed to be a fast runner. With this talent, he receives a football scholarship at the University of Alabama in 1962, where he is coached by Bear Bryant, becomes a top kick returner, is named to the All-American team, and meets president John F. Kennedy at the White House. In his first year at college, he witnesses Governor George Wallace's Stand in the Schoolhouse Door and returns a dropped book to Vivian Malone Jones, one of the students admitted over state resistance. He visits Jenny at her college, where the two have an awkward sexual encounter. After graduating from college in 1966, Forrest enlists in the U.S. Army. During basic training, he befriends a fellow soldier named Benjamin Buford Blue (nicknamed 'Bubba'), who becomes a close friend and convinces Forrest to go into the shrimping business with him after their service. While on leave, Forrest goes to Memphis, Tennessee, to see Jenny, who was expelled from college for posing in Playboy in her college sweater, and now works as a singer in a strip club. However, he embarrasses her by attacking some patrons who were harassing her, causing the two to part ways. Soon afterwards, Forrest and Bubba are sent to fight in Vietnam, serving with the 9th Infantry Division in the Mekong Delta region under Lieutenant Dan Taylor. After months of routine operations, their platoon is ambushed while on patrol, and several members of the platoon are killed in action, including Bubba. Forrest saves several others, including Lieutenant Dan, who loses both of his lower legs, while Forrest is shot in the buttocks. While recovering from his wound, Forrest develops a talent for ping pong. Taylor is embittered from having his life saved as he had hoped to die in combat like his ancestors, and detests being handicapped. Forrest is awarded the Medal of Honor for his heroism by President Lyndon B. Johnson. At an anti-war March on the Pentagon rally, Forrest meets Abbie Hoffman, encounters a Black Panther group, and reunites with Jenny, who has become a drug-addicted hippie and anti-war activist, but the two are soon parted again when she leaves for San Francisco with her abusive boyfriend, the president of SDS at Berkeley. Forrest plays ping-pong in the special services, competing against Chinese teams in ping-pong diplomacy, becoming a celebrity, and earns himself an interview alongside John Lennon on The Dick Cavett Show, appearing to influence Lennon's song 'Imagine'. Forrest spends 1972 New Year's Eve in New York City with Lieutenant Dan, who has become an alcoholic, still bitter about his disability and the government's apathy towards Vietnam War veterans. Forrest does not enjoy the company of Lt. Dan's prostitutes because of his devotion to Jenny, and rejects their advances, leading Lt. Dan to angrily throw them out for insulting Forrest. Forrest's ping-pong success eventually leads to a meeting with President Richard Nixon. He is given a room in the Watergate complex, where he unwittingly exposes the Watergate scandal. In 1974, Forrest is honorably discharged from the Army, and returns to Greenbow, where he endorses a company that makes ping-pong paddles. He uses the earnings to buy a shrimping boat in Bayou La Batre, fulfilling his promise to Bubba. Lieutenant Dan joins Forrest as his first mate, and they initially have very little success. However, after their boat becomes the only one to survive Hurricane Carmen, they pull in vast amounts of shrimp and create the profitable Bubba Gump Shrimp Company. Lieutenant Dan acknowledges that Forrest saved him, however does not actually thank him for saving his life. Dan invests his money in early tech companies on the stock market, which Forrest mistakes for 'some kind of fruit company', and the two become millionaires. Forrest gives half of his earnings to Bubba's family for having inspired the shrimping venture. Forrest returns home to his mother and cares for her during her terminal illness from cancer. After she dies, Forrest spends most of his time volunteering as a gardener at the University of Alabama. In 1976, Jenny – recovering from years of drugs and abuse – returns to Forrest. One day, the two are walking, and come across the now-abandoned house of Jenny's father, where Jenny, in a rage, throws all the rocks she can find at it, until she collapses in anguish. After some time, Forrest proposes to her, but she turns him down, much to Forrest's dismay. That night, she confesses to Forrest that she does indeed love him. They make love, but Jenny leaves the next morning. Heartbroken, Forrest, 'for no particular reason', starts running and embarks on a cross-country marathon, becoming famous for another feat. Forrest starts to garner many followers, some of whom are struggling businessmen, whom he unwittingly gives inspiration. After a total of about three years and two-and-a half months running, Forrest decides to end the run, and returns to Greenbow, much to the surprise of his followers. In 1981, Forrest gets a letter from Jenny, asking him to visit her, and it turns out that's why he's been waiting at the bus stop. An old lady informs him that the address is only five/six blocks away, and he rushes off. Forrest again reunites with Jenny, who has quit abusing drugs, and has turned her life around. Jenny then introduces him to her young son, Forrest Gump Jr., revealing that Forrest is his father. Initially shocked at the revelation, Forrest starts to bond with his son. Jenny later tells Forrest she is sick with 'some kind of virus' and the doctors can't do anything for her. The three move back to Greenbow and Jenny and Forrest finally marry. Among their wedding guests is Lt. Dan, now walking on titanium alloy prosthetics, with his fiancé, a Vietnamese woman named Susan. Jenny succumbs to her illness a year later. Forrest is deeply saddened by her death but becomes a loving, devoted father to Forrest Jr. as the two engage in activities like ping pong and fishing. Forrest also buys the land that belonged to Jenny's father and has the house demolished. Lastly, Forrest sees his son off on his first day of school"
            }
            name="synopsis"
            onChange={rest.handleChange}
          />
          <Input
            minRows={16}
            lable="script treatment"
            required={false}
            data={value.data}
            name="script_treatment"
            onChange={rest.handleChange}
          />
          <Input
            minRows={20}
            lable="full Script"
            required={false}
            data={value.data}
            name="fullScript"
            onChange={rest.handleChange}
          />
        </Form>
      </Box>
    </Container>
  );
};

export default CreateScriptPage;
