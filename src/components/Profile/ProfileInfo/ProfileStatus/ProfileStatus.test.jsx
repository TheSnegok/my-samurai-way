import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="Hi world!" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("Hi world!");
    });

    test(`after creation <span> with status should be displayed`, () => {
      const component = create(<ProfileStatus status="Hi world!" />);
      const root = component.root;
      const span = root.findByType("span");
      expect(span.children.length).toBe(1);
    });

    test(`after creation <span> with status should be displayed with correct status`, () => {
      const component = create(<ProfileStatus status="Hi world!" />);
      const root = component.root;
      let span = root.findByType("span");
      expect(span.children[0]).toBe('Hi world!');
    });
  });