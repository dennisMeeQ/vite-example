import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Homepage = () => {
  return (
    <StyledBox>
      <PinkBox>Foo</PinkBox>
      <PinkBox>Bar</PinkBox>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),

  backgroundColor: theme.palette.primary.main,
}));

const PinkBox = styled(Box)({
  color: 'hotpink',
});
