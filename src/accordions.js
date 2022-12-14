const accordions = [
  {
    label: "React Accordion Single Panel",
    detail: "",
    command: "",
    text: `
    () => {
      const [activePanel, setActivePanel] = useState('panel-3');
      const handleChange = (panel) => (event, newExpanded) => {
        setActivePanel(newExpanded ? panel : false);
      };
      return (
        <Accordion>
          <ExpandableCard name="panel-1" expanded={activePanel === 'panel-1'} onClick={handleChange('panel-1')} alignArrowRight={true} triggerLabel="Expand">
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox1-demo"
              label="Grant offers"
              name="checkbox1-demo"
            />
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox2-demo"
              label="Add tags"
              name="checkbox2-demo"
            />
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox3-demo"
              label="Subscribe to emails"
              name="checkbox3-demo"
            />
          </ExpandableCard>
          <ExpandableCard name="panel-2" alignArrowRight={true} expanded={activePanel === 'panel-2'} onClick={handleChange('panel-2')} triggerLabel="Expand">
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox1-demo"
              label="Grant offers"
              name="checkbox1-demo"
            />
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox2-demo"
              label="Add tags"
              name="checkbox2-demo"
            />
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox3-demo"
              label="Subscribe to emails"
              name="checkbox3-demo"
            />
          </ExpandableCard>
          <ExpandableCard name="panel-3" alignArrowRight={true} expanded={activePanel === 'panel-3'} onClick={handleChange('panel-3')} triggerLabel="Expand">
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox1-demo"
              label="Grant offers"
              name="checkbox1-demo"
            />
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox2-demo"
              label="Add tags"
              name="checkbox2-demo"
            />
            <Checkbox
              checked={false}
              disabled={false}
              hasError={false}
              id="checkbox3-demo"
              label="Subscribe to emails"
              name="checkbox3-demo"
            />
          </ExpandableCard>
        </Accordion>
      );
    }
    `
  },
  {
    label: "React Accordion Multiple",
    detail: "",
    command: "",
    text: `
    () => (
      <Accordion>
        <ExpandableCard name="panel-1" alignArrowRight={true} triggerLabel="Expand">
          <Checkbox
            checked={false}
            disabled={false}
            hasError={false}
            id="checkbox1-demo"
            label="Grant offers"
            name="checkbox1-demo"
          />
          <Checkbox
            checked={false}
            disabled={false}
            hasError={false}
            id="checkbox2-demo"
            label="Add tags"
            name="checkbox2-demo"
          />
          <Checkbox
            checked={false}
            disabled={false}
            hasError={false}
            id="checkbox3-demo"
            label="Subscribe to emails"
            name="checkbox3-demo"
          />
        </ExpandableCard>
        <ExpandableCard name="panel-2" alignArrowRight={true} expanded={true} triggerLabel="Expand">
          <Checkbox
            checked={false}
            disabled={false}
            hasError={false}
            id="checkbox1-demo"
            label="Grant offers"
            name="checkbox1-demo"
          />
          <Checkbox
            checked={false}
            disabled={false}
            hasError={false}
            id="checkbox2-demo"
            label="Add tags"
            name="checkbox2-demo"
          />
          <Checkbox
            checked={false}
            disabled={false}
            hasError={false}
            id="checkbox3-demo"
            label="Subscribe to emails"
            name="checkbox3-demo"
          />
        </ExpandableCard>
        <ExpandableCard name="panel-3" alignArrowRight={true} triggerLabel="Expand">
          <p>Panel 3</p>
        </ExpandableCard>
      </Accordion>
    )
    `
  },
]


module.exports = {
  accordions
}