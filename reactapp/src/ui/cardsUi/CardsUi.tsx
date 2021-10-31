import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Delete, Edit } from "@material-ui/icons";
import { Box, IconButton } from "@material-ui/core";
import { Forms } from "../../ui";
import { cardsForm } from "./generateForm";

function CardsUi(props: any) {
  const [edit, enableEdit] = useState(false);
  const onEdit = () => {
    enableEdit(true);
  };
  const sendEditRequest = (value: any) => {
    props.saveEdit(value, props.idx, props.id);
    enableEdit(false);
  };
  return (
    <Box m={2} pt={3}>
      <Card>
        <CardContent>
          {edit ? (
            <Forms {...cardsForm(props, sendEditRequest)} />
          ) : (
            <>
              <Typography color="textSecondary" gutterBottom>
                {props.employeeId}
              </Typography>
              <Typography variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography color="textSecondary">{props.email}</Typography>
              <Typography variant="body2" component="p">
                {props.address}
                <br />
                age: {props.age}
                <br />
                phone: {props.phone}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions>
          {!edit && (
            <>
              <IconButton aria-label="edit" onClick={onEdit}>
                <Edit />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={props.onDelete(props.idx, props.id)}
              >
                <Delete />
              </IconButton>
            </>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardsUi;
