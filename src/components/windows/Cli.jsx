import React from "react";
import MacWindow from "./MacWindow";
import * as ReactConsoleEmulator from "react-console-emulator";
import "./Cli.scss";

const Terminal =
  ReactConsoleEmulator.default?.default ||
  ReactConsoleEmulator.default ||
  ReactConsoleEmulator;

const Cli = () => {
  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={{
            help: {
              description: "Show your interactive portfolio menu.",
              usage: "help",
              fn: () => [
                "✨ Welcome to Sumiran's CLI Portfolio!", 
                "Try commands:",
                "  about    - Who I am",
                "  projects - Portfolio highlights",
                "  skills   - My core toolkit",
                "  contact  - How to reach me",
                "  fun      - Quick creative jam",
                "  cls      - Clear the screen",
                "  echo ... - Repeat your message",
              ],
            },
            about: {
              description: "Display a short creative bio.",
              usage: "about",
              fn: () =>
                "Hi! I'm Sumiran, a UI-focused front-end dev who builds clean React experiences with crisp interactions.",
            },
            projects: {
              description: "List notable projects.",
              usage: "projects",
              fn: () => [
                "• MacOS Portfolio - A macOS-style responsive website",
                "• CLI Portfolio - A terminal-style interactive showcase",
                "• Streamlined UI components and animation playground",
              ],
            },
            skills: {
              description: "Show my technical strengths.",
              usage: "skills",
              fn: () => ["React", "JavaScript", "TypeScript", "CSS", "Responsive Design", "Figma", "UX"],
            },
            contact: {
              description: "Show contact details.",
              usage: "contact",
              fn: () => "✉️ skamde05@gmail.com | GitHub: github.com/sumirankamde | LinkedIn: /in/sumiran",
            },
            fun: {
              description: "Show a quick creativity prompt.",
              usage: "fun",
              fn: () => [
                "🚀 Keep building, keep shipping.",
                "💡 Idea: Create a mini-game using CSS sprite animations.",
              ],
            },
            cls: {
              description: "Clear the terminal output.",
              usage: "cls",
              fn: () => {
                Terminal.clear();
                return "";
              },
            },
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
          }}
          noDefaults={true}
          welcomeMessage={
            "🚀 Hello, adventurer! Type 'help' to explore this portfolio CLI."
          }
          promptLabel={"sumirankamde:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
