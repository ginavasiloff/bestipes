import * as React from "react";
import { Link } from "react-router-dom";
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle
} from "@rmwc/toolbar";
import { Typography } from "@rmwc/typography";

export function AppBar() {
  return (
    <Toolbar>
      <ToolbarRow>
        <ToolbarSection>
          <ToolbarTitle>
            <Link to="/">
              <Typography use="headline4" theme="text-primary-on-dark">
                Bestipes
              </Typography>
            </Link>
          </ToolbarTitle>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
  );
}
