import { Card } from "@material-ui/core";
import { Forms } from "..";
import CardsUi from "../cardsUi/CardsUi";
import { DashboardUi } from "../dashboardUi/dashboardUi";
import { StyledStyleHomeUi } from "./homeUi.style";
import { newUserForm } from "./newUserForm";
import { searchForm } from "./searchForm";

function HomeUi(props: any) {
  return (
    <DashboardUi title="Employee List" logout={props.handleLogout}>
      <StyledStyleHomeUi>
        <Card>
          <Forms {...newUserForm(props.sendNewUserRequest)} />
        </Card>
        <Forms {...searchForm(props.sendSearchRequest)} />
      </StyledStyleHomeUi>
      {JSON.parse(props.data).map((cardParam: any, key: number) => (
        <CardsUi
          {...cardParam}
          key={key}
          saveEdit={props.saveEdit}
          idx={key}
          onDelete={props.onDelete}
        />
      ))}
    </DashboardUi>
  );
}

export default HomeUi;
