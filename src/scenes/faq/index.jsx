import { Box, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      </Box>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.background2[300]} variant="h5">
            What is the purpose of an FAQ page?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The purpose of an FAQ page is to provide quick answers to common
            questions that your business can anticipate. An FAQ page empowers
            customers to self-serve, enabling them to find solutions quickly on
            their own.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.background2[300]} variant="h5">
            Are FAQs good for SEO?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            FAQ pages and help centers, in general, are great for SEO. Customers
            have adopted a “Google it” mantra when it comes to customer service.
            They check a company’s online resources first when they run into
            trouble and prefer self-service because it’s quick and convenient.
            Instead of making your customers wander through the pages of Google,
            optimizing your FAQ page helps them find information faster.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.background2[300]} variant="h5">
            Why do you need an FAQ section?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A good website experience anticipates the needs of a user at every
            stage of their journey, and on every page. It’s intuitive and all
            information is easy to access.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
