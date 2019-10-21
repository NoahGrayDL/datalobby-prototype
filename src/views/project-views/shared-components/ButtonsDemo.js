import React from "react"
import { PageContainer } from "../../../components/page-container"
import {
  ContainedButton,
  OutlinedButton,
  TextOnlyButton
} from "../../../components/buttons"
import styled from "styled-components"

export default function ButtonsDemo() {
  return (
    <PageContainer>
      <StyledContainer className="FR">
        <div className="demo-group-column">
          <h2>Contained Buttons</h2>
          <div className="FC demo-group">
            <h4>Regular</h4>
            <div className="FR">
              <ContainedButton color="primary">Primary</ContainedButton>
              <ContainedButton color="secondary">Secondary</ContainedButton>
              <ContainedButton>Default</ContainedButton>
            </div>
          </div>
          <div className="FC demo-group">
            <h4>Thin</h4>
            <div className="FR">
              <ContainedButton size="thin" color="primary">
                Primary
              </ContainedButton>
              <ContainedButton size="thin" color="secondary">
                Secondary
              </ContainedButton>
              <ContainedButton size="thin">Default</ContainedButton>
            </div>
          </div>
          <div className="FC demo-group">
            <h4>Disabled</h4>
            <div className="FR">
              <ContainedButton disabled size="thin" color="primary">
                Primary
              </ContainedButton>
              <ContainedButton disabled size="thin" color="secondary">
                Secondary
              </ContainedButton>
              <ContainedButton disabled size="thin">
                Default
              </ContainedButton>
            </div>
          </div>
        </div>
        <div className="demo-group-column">
          <h2>Outlined Buttons</h2>
          <div className="FC demo-group">
            <h4>Regular</h4>
            <div className="FR">
              <OutlinedButton color="primary">Primary</OutlinedButton>
              <OutlinedButton color="secondary">Secondary</OutlinedButton>
              <OutlinedButton>Default</OutlinedButton>
            </div>
          </div>
          <div className="FC demo-group">
            <h4>Thin</h4>
            <div className="FR">
              <OutlinedButton size="thin" color="primary">
                Primary
              </OutlinedButton>
              <OutlinedButton size="thin" color="secondary">
                Secondary
              </OutlinedButton>
              <OutlinedButton size="thin">Default</OutlinedButton>
            </div>
          </div>
          <div className="FC demo-group">
            <h4>Disabled</h4>
            <div className="FR">
              <OutlinedButton disabled size="thin" color="primary">
                Primary
              </OutlinedButton>
              <OutlinedButton disabled size="thin" color="secondary">
                Secondary
              </OutlinedButton>
              <OutlinedButton disabled size="thin">
                Default
              </OutlinedButton>
            </div>
          </div>
        </div>
        <div className="demo-group-column">
          <h2>Text Only Buttons</h2>
          <div className="FC demo-group">
            <h4>Regular</h4>
            <div className="FR">
              <TextOnlyButton color="primary">Primary</TextOnlyButton>
              <TextOnlyButton color="secondary">Secondary</TextOnlyButton>
              <TextOnlyButton>Default</TextOnlyButton>
            </div>
          </div>
          <div className="FC demo-group">
            <h4>Thin</h4>
            <div className="FR">
              <TextOnlyButton size="thin" color="primary">
                Primary
              </TextOnlyButton>
              <TextOnlyButton size="thin" color="secondary">
                Secondary
              </TextOnlyButton>
              <TextOnlyButton size="thin">Default</TextOnlyButton>
            </div>
          </div>
          <div className="FC demo-group">
            <h4>Disabled</h4>
            <div className="FR">
              <TextOnlyButton disabled size="thin" color="primary">
                Primary
              </TextOnlyButton>
              <TextOnlyButton disabled size="thin" color="secondary">
                Secondary
              </TextOnlyButton>
              <TextOnlyButton disabled size="thin">
                Default
              </TextOnlyButton>
            </div>
          </div>
        </div>
      </StyledContainer>
    </PageContainer>
  )
}

const StyledContainer = styled.div`
  padding: 1rem;
  .demo-group-column {
    margin-right: 1rem;
  }
  .demo-group {
    margin-bottom: 1rem;
    & div {
      margin-right: 0.5rem;
    }
  }
`
