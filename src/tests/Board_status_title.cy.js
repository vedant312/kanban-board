import React from 'react'
import Board from '../components/Board'
import { tickets, users } from './content.cy'

describe('<Board status title />', () => {
  it('renders', () => {
    cy.viewport(1920, 1080)
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Board tickets={tickets} users={users} grouping="Status" sorting="Title"/>)

    cy.get(':nth-child(1) > .board_top > .board_top_title').should('contain', 'Backlog')
    cy.get(':nth-child(2) > .board_top > .board_top_title').should('contain', 'Todo')
    cy.get(':nth-child(3) > .board_top > .board_top_title').should('contain', 'In progress')
    cy.get(':nth-child(4) > .board_top > .board_top_title').should('contain', 'Done')
    cy.get(':nth-child(5) > .board_top > .board_top_title').should('contain', 'Canceled')

    cy.get(':nth-child(1) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Conduct Security Vulnerability Assessment')
    cy.get(':nth-child(2) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Third-Party Payment Gateway')
    cy.get(':nth-child(3) > .board_cards > :nth-child(1) > .card__title').should('contain', 'Add Multi-Language Support')
  })
})