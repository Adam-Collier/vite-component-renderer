import React from "react";
import styled from "styled-components";
import { Text, Stack } from "vite-storybook";

const Wrapper = styled(Stack)`
  padding: 0;
  width: 100%;

  fieldset {
    display: flex;
    padding: 0;
    border: none;
    margin: 0;

    input {
      flex: 1 1 200px;
      border: 2px solid var(--primary-black);
      border-right: none;
      padding: 1rem;
      font-family: "HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed",
        "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed",
        "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold",
        "Helvetica Neue", "Oswald", Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      font-size: 1.25rem;
      outline: none;
      border-radius: 0;
      height: auto;
      border-radius: 0;
    }

    button {
      background: none;
      border: 2px solid var(--primary-black);
      color: var(--primary-black);
      cursor: pointer;
      min-width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover,
      &:focus {
        background: var(--primary-black);
        color: var(--primary-white);

        .icon {
          fill: var(--primary-white);
        }
      }

      svg {
        display: block;
      }

      .icon {
        width: 17px;
        height: 17px;
        fill: var(--primary-black);
      }
    }
  }
`;

export const EmailSubscribe = ({ siteArea }) => {
  return (
    <Wrapper gap={0.5} className="signup-form">
      <form
        action="https://www.missguided.co.uk/newsletter/subscriber/new/"
        method="post"
        className="form form-validate"
        id="newsletter-validate-detail"
        novalidate=""
      >
        <fieldset>
          <input
            type="hidden"
            name="area_of_site"
            id="area_of_site_footer"
            value={siteArea}
          />
          <input type="hidden" name="territory" id="territory" value="UK" />
          <input
            type="email"
            name="newsletter"
            placeholder="Your email"
            defaultValue=""
            title="Your email address"
            className="form-input newsletter-input required-entry validate-email validation-failed"
            list="email-options1"
          />
          <span className="email-autocomplete" id="email-options1"></span>
          <button title="Go" className="button form-button">
            <svg className="icon icon--arrow-right" viewBox="0 0 9.1 15.7">
              <path d="M9.1 7.8l-7.6 7.6c-.3.3-.9.3-1.2 0s-.3-.9 0-1.2l6.4-6.4L.3 1.5C0 1.2 0 .6.3.3s.9-.3 1.2 0l7.6 7.5z" />
            </svg>
          </button>
        </fieldset>
      </form>
      <Text
        className="form-result validation-advice result-error"
        id="newsletter-signup-result"
        size="md"
        align="center"
        style={{ display: "none" }}
      ></Text>
      <Text size="xs" align="center">
        You can unsubscribe at any time you want. Read more about how and why we
        ask for this data
      </Text>
    </Wrapper>
  );
};
