const buttons = [
  {
    label: "React Button Primary",
    detail: "",
    command: "kajabi-sage.reactButtonPrimary",
    text: `
    <Button onClick={(e) => {}}>
      Text
    </Button>
    `
  },
  {
    label: "React Button Accent",
    detail: "",
    command: "kajabi-sage.reactButtonAccent",
    text: `
    <Button color="accent" onClick={(e) => {}}>
      Text
    </Button>
    `
  },
  {
    label: "React Button Icon",
    detail: "",
    command: "kajabi-sage.reactButtonIcon",
    text: `
    <Button icon="gear" onClick={(e) => {}}>
      Text
    </Button>
    `
  },
  {
    label: "React Button Loading",
    detail: "",
    command: "kajabi-sage.reactButtonLoading",
    text: `
    <Button loading onClick={(e) => {}}>
      Text
    </Button>
    `
  },
];


module.exports = {
	buttons,
}
