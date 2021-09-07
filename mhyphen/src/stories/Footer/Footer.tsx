import React from "react";
import { FooterSocialIcon, SocialIconProps } from "../SocialIcon/SocialIcon";
import { Box, Grid, Hidden, Link } from "@material-ui/core";
import {
  SOCIAL_MEDIA,
  MICROSOFT_LOGO,
  PRIVACY_POLICY,
  TERMS_OF_USE,
} from "../../assets/resources";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Hidden smDown>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={0}
          className="footer__content"
        >
          <Grid item xs={12} alignItems="center">
            {`Terms of Service | Privacy Policy | Operation Policy | Contact Us`}
            {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
              return <FooterSocialIcon key={icon.name} {...icon} />;
            })}
          </Grid>
          <Grid item xs={12}>
            <FooterSocialIcon {...MICROSOFT_LOGO} />
            {`Copyright © M-Corporation and MSA, 2021. All rights reserved`}
          </Grid>
        </Grid>
      </Hidden>
      {/* Mobile view of footer, looks very different :) */}
      <Hidden smUp>
        <Grid container direction="row">
          <Grid item>
            <Grid container direction="row" justify="space-between" spacing={3}>
              <Grid item>
                <Box marginLeft={6}>{`© M- and MSA 2021`}</Box>
              </Grid>
              <Grid item>
                <Link color="inherit" href={PRIVACY_POLICY}>
                  Privacy policy
                </Link>
              </Grid>
              <Grid item>
                <Link color="inherit" href={TERMS_OF_USE}>
                  Terms of use
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box marginLeft={17}>
              {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
                return <FooterSocialIcon key={icon.name} {...icon} />;
              })}
            </Box>
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
};
