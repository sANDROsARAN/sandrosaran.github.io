import * as React from "react";
import "./Menu.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <MuiAccordion
        className="menu-accordion"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
        elevation={0}
        square
      >
        <MuiAccordionSummary
          className="menu-summary"
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography component="span">3D Modelling</Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails className="menu-details">
        </MuiAccordionDetails>
      </MuiAccordion>

      <MuiAccordion
        className="menu-accordion"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disableGutters
        elevation={0}
        square
      >
        <MuiAccordionSummary
          className="menu-summary"
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography component="span">Collapsible Group Item #2</Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails className="menu-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>

      <MuiAccordion
        className="menu-accordion"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        disableGutters
        elevation={0}
        square
      >
        <MuiAccordionSummary
          className="menu-summary"
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography component="span">Collapsible Group Item #3</Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails className="menu-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  );
}
