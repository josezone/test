import styled from "styled-components";

export const StyledStyleHomeUi = styled.div`
  .fieldContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .employeeId,
  .name,
  .email,
  .address,
  .age,
  .phone
  {
    flex: 0 0 25%;
  }
  .buttonGroup {
    margin-top: 13px;
  }
`;
