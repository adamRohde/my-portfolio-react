import React, { Component } from "react"
import { Menu, Segment } from "semantic-ui-react"
import { Link } from "gatsby"

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) =>
    this.setState(
      {
        activeItem: name,
      },
      {
        if(name = "about") {
          console.log("about")
        },
      },

      {
        if(name = "portfolio") {
          console.log("portfolio")
        },
      },
      {
        if(name = "contact") {
          console.log("contact")
        },
      }
    )

  render() {
    const { activeItem } = this.state

    return (
      <div className="section-nav">
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="About"
            active={activeItem === "About"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/portfolio"
            name="Portfolio"
            active={activeItem === "Portfolio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/contact"
            name="Contact"
            active={activeItem === "Contact"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
