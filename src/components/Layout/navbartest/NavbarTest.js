import React, { Component } from "react"
import { Menu, Segment } from "semantic-ui-react"
import { navigate } from "gatsby"

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // handleItemClick = (e, { name }) => {
  //   this.setState(
  //     { activeItem: name },
  //     {
  //       if(name = "about") {
  //         console.log("about")
  //         // navigate("/about")
  //       },
  //     },

  //     {
  //       if(name = "portfolio") {
  //         console.log("portfolio")
  //         // navigate("/portfolio")
  //       },
  //     },
  //     {
  //       if(name = "contact") {
  //         console.log("contact")
  //         // navigate("/contact")
  //       }
  //     }
  //   )
  // }

  render() {
    const { activeItem } = this.state

    return (
      <div className="section-nav">
        <Menu pointing secondary>
          <Menu.Item
            name="About"
            href="/"
            active={activeItem === "About"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Portfolio"
            as={"a"}
            href="/portfolio"
            active={activeItem === "Portfolio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Contact"
            href="/contact"
            active={activeItem === "Contact"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
