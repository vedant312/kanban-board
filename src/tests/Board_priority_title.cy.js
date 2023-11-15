import React from 'react'
import Board from '../components/Board'
import { tickets, users } from './content.cy'

describe('<Board priority title />', () => {
  it('renders', () => {
    cy.viewport(1920, 1080)
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Board tickets={tickets} users={users} grouping="Priority" sorting="Title"/>)

    cy.get(':nth-child(1) > .board_top > .board_top_title').should('contain', 'No Priority')
    cy.get(':nth-child(2) > .board_top > .board_top_title').should('contain', 'Urgent')
    cy.get(':nth-child(3) > .board_top > .board_top_title').should('contain', 'High')
    cy.get(':nth-child(4) > .board_top > .board_top_title').should('contain', 'Medium')
    cy.get(':nth-child(5) > .board_top > .board_top_title').should('contain', 'Low')

    cy.get(':nth-child(1) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Enhance Search Functionality')
    cy.get(':nth-child(2) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Conduct Security Vulnerability Assessment')
    cy.get(':nth-child(3) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Create Onboarding Tutorial for New Users')
    cy.get(':nth-child(4) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Add Multi-Language Support - Enable multi-language support within the application')
    cy.get(':nth-child(5) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Update User Profile Page UI')

  })
})